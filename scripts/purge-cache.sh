#!/usr/bin/env bash
# Usage: purge-cache.sh <host> <build dir> <file holding the digest last purged>
# The edge keeps pages for a day, so a deploy has to tell it they changed. The token needs Zone Read and Cache Purge.
set -euo pipefail
host=$1 dir=$2 last=$3
api=https://api.cloudflare.com/client/v4/zones
auth="Authorization: Bearer $CLOUDFLARE_PURGE_TOKEN"

# Pagefind writes a new id into its entry file on every run, though the hashed index files it names stay the same.
digest=$(find "$dir" -type f ! -name pagefind-entry.json -print0 | LC_ALL=C sort -z | xargs -0 sha256sum | sha256sum | cut -d' ' -f1)

# Compared with the last purge, not the live site: a purge that failed or was cancelled must still happen on the next run.
if [ "$digest" = "$(cat "$last" 2>/dev/null)" ]; then
  echo "purge-cache: nothing changed on $host"
  exit 0
fi

zone=$(curl -fsS -H "$auth" "$api?name=${host#www.}" | jq -r '.result[0].id')
purge() {
  jq -n --arg host "$host" '{hosts: [$host]}' |
    curl -fsS -X POST "$api/$zone/purge_cache" -H "$auth" -H 'Content-Type: application/json' --data-binary @-
}

# A location still on the old deployment could store it again right after the first purge.
purge
sleep 60
purge

echo "$digest" > "$last"
echo "purged=true" >> "$GITHUB_OUTPUT"
