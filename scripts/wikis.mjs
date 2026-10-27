import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { basename, extname, join } from "node:path";
import { APPS } from "./apps.mjs";

const CACHE = ".wikis/src";
const OUT = ".wikis/out";
const PRIVACY = ".wikis/privacy";
const TERMS = ".wikis/terms";
const ASSETS = "public/docs-assets";
const SECTION = { en: "docs", es: "ayuda" };
const CALLOUT = {
  en: { NOTE: "Note", TIP: "Tip", IMPORTANT: "Important", WARNING: "Warning", CAUTION: "Caution" },
  es: { NOTE: "Nota", TIP: "Consejo", IMPORTANT: "Importante", WARNING: "Atención", CAUTION: "Cuidado" },
};

function fetchHelp({ repo, product, help }) {
  const dir = join(CACHE, `${product}-repo`);
  if (!existsSync(dir)) {
    execFileSync("git", ["clone", "-q", "--filter=blob:none", "--sparse", `https://github.com/rgdevment/${repo}.git`, dir], { stdio: "inherit" });
    execFileSync("git", ["-C", dir, "sparse-checkout", "set", help], { stdio: "inherit" });
  } else execFileSync("git", ["-C", dir, "pull", "--ff-only", "-q"], { stdio: "inherit" });
  return join(dir, help);
}

function fetchWiki({ repo, product }) {
  const dir = join(CACHE, product);
  if (!existsSync(dir)) execFileSync("git", ["clone", "-q", `https://github.com/rgdevment/${repo}.wiki.git`, dir], { stdio: "inherit" });
  else if (existsSync(join(dir, ".git", "shallow"))) execFileSync("git", ["-C", dir, "pull", "--ff-only", "-q", "--unshallow"], { stdio: "inherit" });
  else execFileSync("git", ["-C", dir, "pull", "--ff-only", "-q"], { stdio: "inherit" });
  return dir;
}

function updatedOn(dir, file) {
  return execFileSync("git", ["-C", dir, "log", "-1", "--format=%cs", "--", file], { encoding: "utf8" }).trim();
}

export function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/\./g, "")
    .replace(/^-+|-+$/g, "");
}

function wikiLink(raw) {
  const [label, target = label] = raw.split("|").map((one) => one.trim());
  const [page, anchor] = target.split("#");
  return { label, page: page.replace(/ /g, "-"), anchor };
}

// The wiki keeps no record of translations: a page's position in the sidebar is what pairs it.
function readSidebar(text) {
  const homes = [...text.split("\n")[0].matchAll(/\[\[([^\]]+)\]\]/g)].map((m) => wikiLink(m[1]).page);
  const blocks = text.split(/<summary>/).slice(1);
  const lists = {};
  for (const block of blocks) {
    const locale = /Español/.test(block.split("\n")[0]) ? "es" : "en";
    let section = "";
    lists[locale] = [];
    for (const line of block.split("\n").slice(1)) {
      const head = line.match(/^\*\*(.+)\*\*\s*$/);
      const item = line.match(/^- \[\[([^\]]+)\]\]/);
      if (head) section = head[1];
      if (item) lists[locale].push({ ...wikiLink(item[1]), section });
    }
  }
  const home = { en: homes.find((one) => one === "Home"), es: homes.find((one) => one !== "Home") };
  if (!lists.en || !lists.es || !home.en || !home.es) throw new Error("sidebar needs an English and a Spanish block and both home links");
  if (lists.en.length !== lists.es.length) throw new Error("sidebar languages do not line up");
  return { home, lists };
}

function buildIndex(sidebar) {
  const pages = new Map();
  for (const locale of ["en", "es"]) {
    pages.set(sidebar.home[locale], { locale, slug: "", order: 0, section: "", label: "" });
    sidebar.lists[locale].forEach((one, at) =>
      pages.set(one.page, { locale, slug: slugify(one.page), order: at + 1, section: one.section, label: one.label }),
    );
  }
  return pages;
}

function urlOf(product, entry, anchor) {
  const prefix = entry.locale === "es" ? "/es" : "";
  const tail = entry.slug ? `${entry.slug}/` : "";
  return `${prefix}/${product}/${SECTION[entry.locale]}/${tail}${anchor ? `#${anchor}` : ""}`;
}

function rewriteLinks(text, product, pages) {
  const resolve = (page, anchor) => {
    const entry = pages.get(page.replace(/ /g, "-"));
    return entry ? urlOf(product, entry, anchor) : null;
  };
  return text
    .replace(/\[\[([^\]]+)\]\]/g, (_, raw) => {
      const { label, page, anchor } = wikiLink(raw);
      const url = resolve(page, anchor);
      return url ? `[${label}](${url})` : label;
    })
    .replace(/\]\(([^)\s:#/]+)(#[^)]*)?\)/g, (whole, page, hash = "") => {
      const url = resolve(decodeURIComponent(page), hash.slice(1));
      return url ? `](${url})` : whole;
    });
}

function rewriteCallouts(text, locale) {
  return text.replace(/^> \[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*$/gm, (_, kind) => `> **${CALLOUT[locale][kind]}**`);
}

function localiseImages(text, product) {
  const found = text.match(/https:\/\/raw\.githubusercontent\.com\/rgdevment\/[^\s)"']+\.(?:png|gif|jpe?g|webp|svg)/g) ?? [];
  for (const url of new Set(found)) {
    const hash = createHash("sha1").update(url).digest("hex").slice(0, 8);
    const name = `${product}-${hash}-${basename(new URL(url).pathname)}`;
    const file = join(ASSETS, name);
    try {
      if (!existsSync(file)) execFileSync("curl", ["-fsSL", "-o", file, url]);
      text = text.replaceAll(url, `/docs-assets/${name}`);
    } catch {
      rmSync(file, { force: true });
      console.warn(`wikis: kept remote image, download failed: ${url}`);
    }
  }
  return text;
}

function stripHeader(text) {
  const body = text.replace(/^\uFEFF?/, "");
  if (!/^\s*</.test(body)) return body.replace(/^#\s+.+\n/, "");
  const rule = body.indexOf("\n---");
  const heading = body.search(/\n#{1,6}\s/);
  return rule >= 0 && (heading < 0 || rule < heading) ? body.slice(rule + 4) : body;
}

function titleOf(text, fallback) {
  const html = text.match(/<h1[^>]*>([^<]+)<\/h1>/);
  const md = text.match(/^#\s+(.+)$/m);
  return (html?.[1] ?? md?.[1] ?? fallback).trim();
}

function describe(body) {
  const para = body
    .split(/\n\s*\n/)
    .map((one) => one.trim())
    .find((one) => one && !/^[#>|`<!\-*\d]/.test(one));
  const plain = (para ?? "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[*_`]/g, "").replace(/\s+/g, " ");
  return plain.length > 158 ? `${plain.slice(0, 155).replace(/\s\S*$/, "")}…` : plain;
}

function twinOf(page, sidebar) {
  if (page === sidebar.home.en) return sidebar.home.es;
  if (page === sidebar.home.es) return sidebar.home.en;
  for (const [from, to] of [["en", "es"], ["es", "en"]]) {
    const at = sidebar.lists[from].findIndex((one) => one.page === page);
    if (at >= 0) return sidebar.lists[to][at].page;
  }
  return null;
}

function syncWiki(wiki) {
  const dir = wiki.help ? fetchHelp(wiki) : fetchWiki(wiki);
  const sourceOf = (page) =>
    wiki.help
      ? `https://github.com/rgdevment/${wiki.repo}/blob/main/${wiki.help}/${encodeURIComponent(page)}.md`
      : `https://github.com/rgdevment/${wiki.repo}/wiki/${page}`;
  const sidebar = readSidebar(readFileSync(join(dir, "_Sidebar.md"), "utf8"));
  const pages = buildIndex(sidebar);

  for (const file of readdirSync(dir).filter((one) => extname(one) === ".md" && !one.startsWith("_"))) {
    const page = basename(file, ".md");
    const entry = pages.get(page);
    if (!entry) continue;
    const raw = readFileSync(join(dir, file), "utf8");
    let body = rewriteCallouts(rewriteLinks(stripHeader(raw), wiki.product, pages), entry.locale);
    body = localiseImages(body, wiki.product);
    const twin = pages.get(twinOf(page, sidebar));
    const meta = {
      title: titleOf(raw, entry.label || page),
      description: describe(body),
      product: wiki.product,
      locale: entry.locale,
      page: entry.slug,
      twin: twin ? twin.slug : null,
      section: entry.section,
      order: entry.order,
      updated: updatedOn(dir, file),
      source: sourceOf(page),
    };
    const target = join(OUT, wiki.product, entry.locale);
    mkdirSync(target, { recursive: true });
    writeFileSync(join(target, `${entry.slug || "index"}.md`), `---\n${JSON.stringify(meta, null, 2)}\n---\n${body}`);
  }
  console.log(`wikis: ${wiki.repo} → ${pages.size} pages`);
}

// A policy that failed to arrive stops the deploy: the page Google points people at must never go missing.
function syncPolicy({ repo, product }, { file, dir, fallback, route }) {
  const blob = `https://github.com/rgdevment/${repo}/blob/main/`;
  const raw = execFileSync("curl", ["-fsSL", `https://raw.githubusercontent.com/rgdevment/${repo}/main/${file}`], {
    encoding: "utf8",
  });
  const body = raw
    .replace(/^\uFEFF?#\s+.+\n/, "")
    .replace(/\]\(([^)\s:#]+)(#[^)]*)?\)/g, (_, linked, hash = "") => `](${blob}${linked}${hash})`);
  const meta = { product, title: titleOf(raw, fallback), source: `${blob}${file}` };
  writeFileSync(join(dir, `${product}.md`), `---\n${JSON.stringify(meta, null, 2)}\n---\n${body}`);
  console.log(`${route}: ${repo} → /${product}/${route}/`);
}

rmSync(OUT, { recursive: true, force: true });
rmSync(PRIVACY, { recursive: true, force: true });
rmSync(TERMS, { recursive: true, force: true });
mkdirSync(ASSETS, { recursive: true });
mkdirSync(PRIVACY, { recursive: true });
mkdirSync(TERMS, { recursive: true });
for (const wiki of APPS) syncWiki(wiki);
for (const app of APPS) {
  syncPolicy(app, { file: "PRIVACY.md", dir: PRIVACY, fallback: "Privacy policy", route: "privacy" });
  if (app.terms) syncPolicy(app, { file: "TERMS.md", dir: TERMS, fallback: "Terms of use", route: "terms" });
}
