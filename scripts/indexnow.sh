#!/usr/bin/env bash
# Usage: indexnow.sh <host> <built sitemap> <live sitemap before deploy> <push|schedule|...>
# A push sends every page; any other run sends only the pages whose lastmod moved or that are new.
set -euo pipefail
host=$1 built=$2 live=$3 event=$4
key=c039190381f3501448bba3a377e80147

pairs() { awk -F'[<>]' '/<loc>/ { u = $3 } /<lastmod>/ { m = $3 } /<\/url>/ { print u " " m; u = ""; m = "" }' "$1" | sort; }

if [ "$event" = push ]; then
  urls=$(pairs "$built" | cut -d' ' -f1)
else
  urls=$(comm -13 <(pairs "$live") <(pairs "$built") | cut -d' ' -f1)
fi

if [ -z "$urls" ]; then
  echo "indexnow: nothing changed on $host"
  exit 0
fi
echo "$urls"

jq -n --arg host "$host" --arg key "$key" --argjson urls "$(jq -R . <<<"$urls" | jq -s .)" \
  '{host: $host, key: $key, keyLocation: "https://\($host)/\($key).txt", urlList: $urls}' |
  curl -fsS -X POST https://api.indexnow.org/indexnow -H 'Content-Type: application/json; charset=utf-8' --data-binary @-
