#!/usr/bin/env bash
# Usage: purge-cache.sh <host>
# The edge keeps pages for a day, so a deploy has to tell it they changed. The token needs Zone Read and Cache Purge.
set -euo pipefail
host=$1
api=https://api.cloudflare.com/client/v4/zones
auth="Authorization: Bearer $CLOUDFLARE_PURGE_TOKEN"

zone=$(curl -fsS -H "$auth" "$api?name=${host#www.}" | jq -r '.result[0].id')
jq -n --arg host "$host" '{hosts: [$host]}' |
  curl -fsS -X POST "$api/$zone/purge_cache" -H "$auth" -H 'Content-Type: application/json' --data-binary @-
