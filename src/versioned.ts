import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const versions = new Map<string, string>();

// A file in public/ keeps its name when it changes, so its address carries what it holds.
export function versioned(path: string): string {
  let version = versions.get(path);
  if (!version) {
    version = createHash("sha256").update(readFileSync(`./public${path}`)).digest("hex").slice(0, 10);
    versions.set(path, version);
  }
  return `${path}?v=${version}`;
}
