import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { basename, extname, join } from "node:path";
import sharp from "sharp";
import { APPS } from "./apps.mjs";

const CACHE = ".wikis/src";
const OUT = ".wikis/out";
const PRIVACY = ".wikis/privacy";
const TERMS = ".wikis/terms";
const ASSETS = "public/docs-assets";
const SECTION = { en: "docs", es: "ayuda" };

function carries(dir, tag, help) {
  try {
    execFileSync("git", ["-C", dir, "cat-file", "-e", `${tag}:${help}/_Sidebar.md`], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

// The site describes the app people can install, so the help comes from the latest release, not from main.
function fetchHelp({ repo, product, help }) {
  const dir = join(CACHE, `${product}-repo`);
  if (!existsSync(dir)) {
    execFileSync("git", ["clone", "-q", "--filter=blob:none", "--sparse", "--no-checkout", `https://github.com/rgdevment/${repo}.git`, dir], { stdio: "inherit" });
    execFileSync("git", ["-C", dir, "sparse-checkout", "set", help], { stdio: "inherit" });
  } else execFileSync("git", ["-C", dir, "fetch", "-q", "--tags", "origin"], { stdio: "inherit" });
  const tags = execFileSync("git", ["-C", dir, "tag", "--list", "v*", "--sort=-v:refname"], { encoding: "utf8" });
  const tag = tags.split("\n").find((one) => one && !one.includes("-"));
  if (!tag || !carries(dir, tag, help)) return null;
  execFileSync("git", ["-C", dir, "checkout", "-q", "--detach", tag], { stdio: "inherit" });
  return { dir: join(dir, help), tag };
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

const smallerOf = (file) => file.replace(/\.webp$/, "-720.webp");

async function localiseImages(text, product) {
  const found = text.match(/https:\/\/raw\.githubusercontent\.com\/rgdevment\/[^\s)"']+\.(?:png|gif|jpe?g|webp|svg)/g) ?? [];
  for (const url of new Set(found)) {
    const hash = createHash("sha1").update(url).digest("hex").slice(0, 8);
    const shot = /\.(?:png|jpe?g)$/.test(url);
    const name = `${product}-${hash}-${basename(new URL(url).pathname)}`.replace(/\.(?:png|jpe?g)$/, ".webp");
    const file = join(ASSETS, name);
    try {
      if (!existsSync(file)) {
        const raw = execFileSync("curl", ["-fsSL", url], { maxBuffer: 1 << 26 });
        writeFileSync(file, shot ? await sharp(raw).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 85 }).toBuffer() : raw);
      }
      text = text.replaceAll(url, `/docs-assets/${name}`);
    } catch {
      rmSync(file, { force: true });
      console.warn(`wikis: kept remote image, download failed: ${url}`);
      continue;
    }
    if (shot) await addSmaller(file);
  }
  return text;
}

// A phone gets the smaller copy; without one it still gets the full image, so a failure here only warns.
async function addSmaller(file) {
  const small = smallerOf(file);
  if (existsSync(small)) return;
  try {
    writeFileSync(small, await sharp(file).resize({ width: 720, withoutEnlargement: true }).webp({ quality: 80 }).toBuffer());
  } catch (error) {
    rmSync(small, { force: true });
    console.warn(`wikis: no 720px copy of ${basename(file)}: ${error.message}`);
  }
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

const QUESTIONS = { en: "Answers to: ", es: "Respuestas a: " };
const CONNECTOR = /^(But|And|So|That|Also|Pero|Y|Así|Eso|También)(?!\p{L})/u;

const plainText = (text) =>
  text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[*_`]/g, "").replace(/\s+/g, " ").trim();

const clip = (text) => {
  if (text.length <= 158) return text;
  const sentence = text.slice(0, 158).match(/^.{70,}[.!?](?=\s)/)?.[0];
  return sentence ?? `${text.slice(0, 155).replace(/\s\S*$/, "")}…`;
};

function askedOn(body, locale) {
  const questions = [...body.matchAll(/^\*\*([^*\n]+\?)\*\*\s*$/gm)].map((one) => plainText(one[1]));
  if (questions.length < 3) return null;
  const lead = QUESTIONS[locale];
  const picked = [];
  for (const one of questions) {
    if ((lead + [...picked, one].join(" ")).length > 158) break;
    picked.push(one);
  }
  return picked.length > 0 ? lead + picked.join(" ") : null;
}

function describe(body, locale) {
  const asked = askedOn(body, locale);
  if (asked) return asked;
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((one) => one.trim())
    .filter((one) => one && !/^([#>|`<!\-\d]|\* )/.test(one))
    .map(plainText);
  const standing = paragraphs.filter((one) => one.length >= 60 && !CONNECTOR.test(one) && !one.endsWith(":"));
  const whole = standing.slice(0, 3).map(clip).find((one) => !one.endsWith("…"));
  return whole ?? clip(standing[0] ?? paragraphs[0] ?? "");
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

async function syncWiki(wiki) {
  const released = wiki.help ? fetchHelp(wiki) : null;
  const dir = released ? released.dir : fetchWiki(wiki);
  const sourceOf = (page) =>
    released
      ? `https://github.com/rgdevment/${wiki.repo}/blob/main/${wiki.help}/${encodeURIComponent(page)}.md`
      : `https://github.com/rgdevment/${wiki.repo}/wiki/${page}`;
  const sidebar = readSidebar(readFileSync(join(dir, "_Sidebar.md"), "utf8"));
  const pages = buildIndex(sidebar);

  for (const file of readdirSync(dir).filter((one) => extname(one) === ".md" && !one.startsWith("_"))) {
    const page = basename(file, ".md");
    const entry = pages.get(page);
    if (!entry) continue;
    const raw = readFileSync(join(dir, file), "utf8");
    let body = rewriteLinks(stripHeader(raw), wiki.product, pages);
    // Folio's home is English at its root, so Spanish help sends readers to its Spanish home.
    if (entry.locale === "es") body = body.replace(/\]\(https:\/\/tisty\.cl\/?\)/g, "](https://tisty.cl/es/)");
    body = await localiseImages(body, wiki.product);
    const twin = pages.get(twinOf(page, sidebar));
    const meta = {
      title: titleOf(raw, entry.label || page),
      description: describe(body, entry.locale),
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
  const from = released ? `${wiki.help} at ${released.tag}` : "wiki";
  console.log(`wikis: ${wiki.repo} → ${pages.size} pages from ${from}`);
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `- ${wiki.repo}: ${pages.size} pages from ${from}\n`);
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
for (const wiki of APPS) await syncWiki(wiki);
for (const app of APPS) {
  syncPolicy(app, { file: "PRIVACY.md", dir: PRIVACY, fallback: "Privacy policy", route: "privacy" });
  if (app.terms) syncPolicy(app, { file: "TERMS.md", dir: TERMS, fallback: "Terms of use", route: "terms" });
}
