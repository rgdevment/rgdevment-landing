#!/usr/bin/env bash
# Usage: build-digest.sh <build dir> <host>
# Publishes a digest of the build and saves the live site's, so a later step can tell whether the deploy changed anything.
set -euo pipefail
dir=$1 host=$2

# Pagefind writes a new id into its entry file on every run, though the hashed index files it names stay the same.
digest=$(find "$dir" -type f ! -name pagefind-entry.json -print0 | LC_ALL=C sort -z | xargs -0 sha256sum | sha256sum | cut -d' ' -f1)
echo "$digest" > "$dir/build-digest.txt"
curl -fsSL "https://$host/build-digest.txt" -o live-digest.txt || : > live-digest.txt
