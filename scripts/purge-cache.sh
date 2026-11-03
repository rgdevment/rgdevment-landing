#!/usr/bin/env bash
# Usage: purge-cache.sh <host> <built digest> <live digest before deploy>
# The edge keeps pages for a day, so a deploy has to tell it they changed. The token needs Zone Read and Cache Purge.
set -euo pipefail
host=$1 built=$2 live=$3
api=https://api.cloudflare.com/client/v4/zones
auth="Authorization: Bearer $CLOUDFLARE_PURGE_TOKEN"

# The schedule rebuilds every few hours; a build identical to the live one has nothing to replace.
if cmp -s "$built" "$live"; then
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
