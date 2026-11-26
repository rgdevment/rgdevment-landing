import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SITES = [
  { name: "rgdevment", dir: "dist", domain: "https://rgdevment.dev", allowDocsAssets: false },
  { name: "tisty", dir: "dist-tisty", domain: "https://www.tisty.app", allowDocsAssets: true },
  { name: "linkunbound", dir: "dist-linkunbound", domain: "https://www.linkunbound.app", allowDocsAssets: true },
  { name: "copanda", dir: "dist-copanda", domain: "https://www.copanda.app", allowDocsAssets: true },
];

function walkFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else out.push(full);
  }
  return out;
}

function parseRedirectSources(text) {
  const sources = new Set();
  const temporary = [];
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const [from, , code = "301"] = line.split(/\s+/);
    if (from && !from.includes("*")) sources.add(from);
    if (code === "302") temporary.push(line);
  }
  return { sources, temporary };
}

function extractSitemapPaths(xml, domain) {
  const prefix = domain.replace(/\/$/, "");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].trim())
    .filter((u) => u.startsWith(prefix))
    .map((u) => u.slice(prefix.length) || "/");
}

const failures = [];
const summary = [];

for (const site of SITES) {
  const distDir = path.join(ROOT, site.dir);
  if (!fs.existsSync(distDir)) {
    failures.push(`[${site.name}] missing build directory: ${site.dir}`);
    continue;
  }

  const files = walkFiles(distDir);
  const htmlFiles = files.filter((f) => f.endsWith(".html"));
  const htmlByRoute = new Map();
  const fileSet = new Set();

  for (const f of files) {
    const rel = "/" + path.relative(distDir, f).replace(/\\/g, "/");
    fileSet.add(rel);
  }

  for (const f of htmlFiles) {
    let rel = "/" + path.relative(distDir, f).replace(/\\/g, "/");
    if (rel === "/index.html") rel = "/";
    else if (rel.endsWith("/index.html")) rel = rel.slice(0, -"index.html".length);
    htmlByRoute.set(rel, fs.readFileSync(f, "utf8"));
  }

  // Asset isolation checks (T-14): vendor Mermaid/KaTeX only when rendered HTML actually uses them
  const allHtml = [...htmlByRoute.values()].join("\n");
  const hasMermaidBundle = files.some((f) => f.includes(`${path.sep}_astro${path.sep}mermaid-`));
  const usesMermaid = /data-language="mermaid"|class="[^"]*\bmermaid\b/i.test(allHtml);
  if (hasMermaidBundle && !usesMermaid) {
    failures.push(`[${site.name}] unused Mermaid bundle shipped in ${site.dir}`);
  }
  const hasKatexBundle = files.some((f) => f.includes(`${path.sep}_astro${path.sep}katex-`));
  const usesKatex = /class="[^"]*\bkatex\b|\/katex\.min\.css"/i.test(allHtml);
  if (hasKatexBundle && !usesKatex) {
    failures.push(`[${site.name}] unused KaTeX bundle shipped in ${site.dir}`);
  }
  if (!site.allowDocsAssets && files.some((f) => f.includes(`${path.sep}docs-assets${path.sep}`))) {
    failures.push(`[${site.name}] unexpected docs-assets directory in ${site.dir}`);
  }

  // _headers checks (T-15)
  const headersPath = path.join(distDir, "_headers");
  if (fs.existsSync(headersPath)) {
    const headers = fs.readFileSync(headersPath, "utf8");
    const llmsBlock = headers.match(/^\/llms\.txt\r?\n([\s\S]*?)(?:\r?\n\r?\n|$)/m)?.[1] ?? "";
    if (/X-Robots-Tag:\s*noindex/i.test(llmsBlock)) {
      failures.push(`[${site.name}] /llms.txt must not send X-Robots-Tag: noindex`);
    }
  }

  // _redirects vs sitemap.xml checks (T-02)
  const redirectsPath = path.join(distDir, "_redirects");
  const sitemapPath = path.join(distDir, "sitemap.xml");
  if (fs.existsSync(redirectsPath) && fs.existsSync(sitemapPath)) {
    const { sources, temporary } = parseRedirectSources(fs.readFileSync(redirectsPath, "utf8"));
    for (const line of temporary) {
      failures.push(`[${site.name}] temporary 302 redirect in _redirects: ${line}`);
    }
    const sitemapPaths = extractSitemapPaths(fs.readFileSync(sitemapPath, "utf8"), site.domain);
    for (const p of sitemapPaths) {
      if (sources.has(p) || sources.has(p.replace(/\/$/, ""))) {
        failures.push(`[${site.name}] sitemap.xml URL is also redirected in _redirects: ${p}`);
      }
      if (!htmlByRoute.has(p)) {
        failures.push(`[${site.name}] sitemap.xml URL does not match a built HTML route: ${p}`);
      }
    }
  }

  // site.webmanifest checks (T-25)
  const manifestPath = path.join(distDir, "site.webmanifest");
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    if (manifest.theme_color !== "#faf8f4") {
      failures.push(`[${site.name}] site.webmanifest theme_color is ${manifest.theme_color}, expected #faf8f4`);
    }
    const sizes = new Set((manifest.icons ?? []).map((i) => i.sizes));
    if (!sizes.has("192x192") || !sizes.has("512x512")) {
      failures.push(`[${site.name}] site.webmanifest missing 192x192 or 512x512 icons`);
    }
  }

  // Per-page HTML checks
  for (const [route, html] of htmlByRoute) {
    const is404 = route === "/404.html";

    if (html.includes("location.replace(")) {
      failures.push(`[${site.name}] ${route}: contains forced location.replace()`);
    }

    const h1Count = (html.match(/<h1[\s>]/gi) ?? []).length;
    if (h1Count !== 1) {
      failures.push(`[${site.name}] ${route}: expected 1 <h1>, found ${h1Count}`);
    }

    const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html;
    const levels = [...main.matchAll(/<h([1-6])[\s>]/gi)].map((m) => Number(m[1]));
    for (let i = 1; i < levels.length; i++) {
      if (levels[i] - levels[i - 1] > 1) {
        failures.push(`[${site.name}] ${route}: heading level jump h${levels[i - 1]} -> h${levels[i]}`);
        break;
      }
    }

    const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? "";
    if (!is404 && title.length < 25) {
      failures.push(`[${site.name}] ${route}: title too short (${title.length} chars): "${title}"`);
    }

    if (html.includes('content="es_LA"')) {
      failures.push(`[${site.name}] ${route}: invalid og:locale es_LA`);
    }
    if (is404 && html.includes('property="og:url"')) {
      failures.push(`[${site.name}] ${route}: 404 page must not emit og:url`);
    }
    if (!html.includes('name="twitter:creator"')) {
      failures.push(`[${site.name}] ${route}: missing twitter:creator meta tag`);
    }

    if ((route === "/compare/" || route === "/es/comparar/") && html.includes("xl:hidden")) {
      failures.push(`[${site.name}] ${route}: duplicate mobile xl:hidden compare markup`);
    }

    if ((route.startsWith("/guides/") || route.startsWith("/es/guias/")) && route !== "/guides/" && route !== "/es/guias/") {
      const ogImg = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1] ?? "";
      if (ogImg.endsWith("/social.png") || ogImg.endsWith("/social-es.png")) {
        failures.push(`[${site.name}] ${route}: guide falls back to generic ${ogImg}`);
      }
    }

    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
      try {
        const obj = JSON.parse(m[1]);
        if (obj["@type"] === "SoftwareApplication" && route === "/es/" && !String(obj.url).endsWith("/es/")) {
          failures.push(`[${site.name}] ${route}: SoftwareApplication.url=${obj.url} should end with /es/`);
        }
        if (obj.about?.["@id"] && !obj.about?.["@type"]) {
          failures.push(`[${site.name}] ${route}: unresolved about @id without @type`);
        }
        if (obj["@type"] === "BlogPosting" && (!obj.dateModified || !obj.isPartOf)) {
          failures.push(`[${site.name}] ${route}: BlogPosting missing dateModified or isPartOf`);
        }
      } catch (e) {
        failures.push(`[${site.name}] ${route}: invalid JSON-LD (${e.message})`);
      }
    }

    const badHttp = html.match(/http:\/\/(?:www\.)?(?:tisty|linkunbound|copanda)\.app|http:\/\/rgdevment\.dev/gi);
    if (badHttp) {
      failures.push(`[${site.name}] ${route}: insecure own-domain link ${badHttp[0]}`);
    }

    for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
      const raw = m[1];
      if (raw.startsWith("//") || raw.startsWith("/_astro/") || raw.startsWith("/pagefind/")) continue;
      const [pOnly, hash] = raw.split("#");
      const cleanPath = pOnly.split("?")[0];
      if (!htmlByRoute.has(cleanPath) && !fileSet.has(cleanPath)) {
        failures.push(`[${site.name}] ${route}: broken internal link ${raw}`);
      } else if (hash && htmlByRoute.has(cleanPath)) {
        const targetHtml = htmlByRoute.get(cleanPath);
        const decoded = decodeURIComponent(hash);
        if (!targetHtml.includes(`id="${decoded}"`) && !targetHtml.includes(`id="${hash}"`)) {
          failures.push(`[${site.name}] ${route}: broken internal anchor ${raw}`);
        }
      }
    }
  }

  summary.push(`${site.name}: ${htmlFiles.length} pages OK`);
}

if (failures.length > 0) {
  console.error(`SEO verification FAILED (${failures.length} issues):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(`SEO verification PASSED (${summary.join(" | ")})`);
