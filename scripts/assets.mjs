import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";
import { APPS } from "./apps.mjs";

function fetchRaw(repo, path) {
  try {
    return execFileSync("curl", ["-fsSL", `https://raw.githubusercontent.com/rgdevment/${repo}/main/${path}`], { maxBuffer: 1 << 26, stdio: ["ignore", "pipe", "ignore"] });
  } catch {
    return null;
  }
}

// A file that moved keeps the copy already here, so the site never loses an image; the warning says what to fix.
async function syncAssets({ repo, assets }) {
  for (const [target, source] of Object.entries(assets)) {
    const file = `public/${target}`;
    const fresh = fetchRaw(repo, source);
    if (!fresh) {
      console.log(`::warning title=App asset not found::${repo}/${source} is gone, ${file} kept as it was. Fix the path in scripts/apps.mjs`);
      continue;
    }
    if (Buffer.compare(fresh, readFileSync(file)) === 0) continue;
    writeFileSync(file, fresh);
    if (file.endsWith(".png")) {
      const name = file.replace(/\.png$/, "");
      await sharp(fresh).webp({ quality: 80 }).toFile(`${name}.webp`);
      for (const width of [720, 1280]) await sharp(fresh).resize({ width }).webp({ quality: 80 }).toFile(`${name}-${width}.webp`);
    }
    console.log(`assets: ${file} updated from ${repo}/${source}`);
  }
}

for (const app of APPS) await syncAssets(app);
