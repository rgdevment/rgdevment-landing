import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { PRODUCTS, type Product } from "./products";
import { everyRelease, type Published } from "./releases";
import { canonical, type Locale } from "../site";

export const CHANGELOG_PATH: Record<Locale, string> = { en: "changelog", es: "novedades" };
export const FEED = "changelog.xml";
const SHOWN = 30;

/// Before these versions the notes were written for whoever built the app, not for whoever uses it.
const SINCE: Record<string, number> = { tisty: 1, linkunbound: 2, copanda: 3 };

export type Note = { product: Product; version: string; date: string; url: string; headline?: string; html: string };

type Words = {
  title: string;
  short: string;
  meta: string;
  lede: string;
  english?: string;
  feed: string;
  github: string;
  older: string;
};

const WORDS: Record<Locale, (name: string) => Words> = {
  en: (name) => ({
    title: `What's new in ${name}`,
    short: "What's new",
    meta: `Every ${name} release, newest first: what each version changed for you, from its release notes.`,
    lede: `What each version of ${name} changed, newest first, as its release notes tell it.`,
    feed: "Follow by RSS",
    github: "On GitHub",
    older: "Older versions on GitHub",
  }),
  es: (name) => ({
    title: `Novedades de ${name}`,
    short: "Novedades",
    meta: `Cada versión de ${name}, de la más nueva a la más antigua: qué cambió para ti en cada una, según sus notas.`,
    lede: `Qué cambió en cada versión de ${name}, de la más nueva a la más antigua, tal como lo cuentan sus notas.`,
    english: "Las notas de cada versión se escriben en inglés.",
    feed: "Seguir por RSS",
    github: "En GitHub",
    older: "Versiones anteriores en GitHub",
  }),
};

export function changelogWords(product: Product, locale: Locale): Words {
  return WORDS[locale](product.name);
}

export function hasChangelog(product: string | null): boolean {
  return product !== null && product in SINCE;
}

export function changelogUrl(product: Product, locale: Locale, version?: string): string {
  const page = canonical(locale, `${product.slug}/${CHANGELOG_PATH[locale]}`);
  return version ? `${page}#v${version}` : page;
}

function demoteHeadings() {
  const walk = (node: { tagName?: string; children?: unknown[] }) => {
    const level = node.tagName?.match(/^h([1-6])$/)?.[1];
    if (level) node.tagName = `h${Math.min(Number(level) + 2, 6)}`;
    (node.children as (typeof node)[] | undefined)?.forEach(walk);
  };
  return walk;
}

const processor = createMarkdownProcessor({
  syntaxHighlight: false,
  rehypePlugins: [[rehypeSanitize, defaultSchema], () => demoteHeadings()],
});

function escaped(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/// A note opens with its own title, and some put the headline after it; the list of merged pull requests is for developers.
function split(product: Product, version: string, body: string): { headline?: string; text: string } {
  const people = body.replace(/\r/g, "").split(/^## What's Changed|^\*\*Full Changelog\*\*/m)[0].trim();
  const [first = "", ...rest] = people.split("\n");
  const title = first.match(new RegExp(`^(?:${escaped(product.name)}\\s+)?v?${escaped(version)}\\s*(?:[-—–]\\s*(.+))?$`));
  if (!title) return { text: people };
  const text = rest.join("\n").trim();
  if (title[1]) return { headline: title[1].trim(), text };
  const [opening = "", ...after] = text.split(/\n\s*\n/);
  const isHeadline = opening.length > 0 && opening.length <= 100 && !opening.includes("\n") && !/^[-*#]/.test(opening) && !/[.:]$/.test(opening);
  return isHeadline ? { headline: opening, text: after.join("\n\n") } : { text };
}

async function note(product: Product, release: Published, version: string): Promise<Note> {
  const { headline, text } = split(product, version, release.body);
  const { code } = await (await processor).render(text);
  return { product, version, date: release.date, url: release.url, headline, html: code };
}

const written = new Map<string, Promise<Note[]>>();

async function write(product: Product): Promise<Note[]> {
  const since = SINCE[product.slug] ?? Infinity;
  const kept = (await everyRelease(product)).flatMap((release) => {
    const version = release.tag.match(/^v?((\d+)\.\d+\.\d+)$/);
    return release.stable && version && Number(version[2]) >= since ? [{ release, version: version[1] }] : [];
  });
  return Promise.all(kept.slice(0, SHOWN).map(({ release, version }) => note(product, release, version)));
}

export function notesOf(product: Product): Promise<Note[]> {
  if (!written.has(product.slug)) written.set(product.slug, write(product));
  return written.get(product.slug)!;
}

export async function everyNote(): Promise<Note[]> {
  const all = await Promise.all(PRODUCTS.filter((one) => hasChangelog(one.slug)).map(notesOf));
  return all.flat().sort((a, b) => b.date.localeCompare(a.date));
}

function xml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function feed(title: string, page: string, self: string, description: string, notes: Note[]): Response {
  const items = notes.map((one) =>
    [
      "    <item>",
      `      <title>${xml(`${one.product.name} ${one.version}${one.headline ? ` — ${one.headline}` : ""}`)}</title>`,
      `      <link>${xml(changelogUrl(one.product, "en", one.version))}</link>`,
      `      <guid isPermaLink="false">${xml(one.url)}</guid>`,
      `      <pubDate>${new Date(one.date).toUTCString()}</pubDate>`,
      `      <description>${xml(one.html)}</description>`,
      "    </item>",
    ].join("\n"),
  );
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${xml(title)}</title>`,
    `    <link>${xml(page)}</link>`,
    `    <description>${xml(description)}</description>`,
    "    <language>en</language>",
    `    <atom:link href="${xml(self)}" rel="self" type="application/rss+xml"/>`,
    ...(notes[0] ? [`    <lastBuildDate>${new Date(notes[0].date).toUTCString()}</lastBuildDate>`] : []),
    ...items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
