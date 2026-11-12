import { getCollection, type CollectionEntry } from "astro:content";
import { PRODUCTS, type Product } from "./products";
import { everyRelease } from "./releases";
import { escaped, rss } from "../rss";
import { DOMAIN, HOME_PRODUCT, canonical, type Locale } from "../site";

export const NEWS_PATH: Record<Locale, string> = { en: "news", es: "noticias" };
export const NEWS_FEED: Record<Locale, string> = { en: "news.xml", es: "es/noticias.xml" };
const IN_FEED = 30;

type Told = { title: string; said: string };
type Written = { version: string; headline?: Record<Locale, string>; en: Told[]; es: Told[] };

export type Article = CollectionEntry<"news">;

export type Story = {
  version: string;
  date: string;
  release: string;
  headline: Record<Locale, string>;
  told: Record<Locale, Told[]>;
  article: Partial<Record<Locale, Article>>;
};

type Words = {
  title: string;
  short: string;
  meta: string;
  lede: string;
  feed: string;
  out: (version: string) => string;
  github: string;
  updates: string;
  download: string;
  older: string;
  newer: string;
  every: string;
};

const WORDS: Record<Locale, (name: string) => Words> = {
  en: (name) => ({
    title: `${name} news`,
    short: "News",
    meta: `What each ${name} version brings, told for the people who use it, newest first.`,
    lede: `Every ${name} version that brings something new, told for the people who use it.`,
    feed: "Follow by RSS",
    out: (version) => `${name} ${version} is out. Here is what it changes for you.`,
    github: "Every change on GitHub",
    updates: `Already using ${name}? It updates itself and tells you what is new when it does.`,
    download: `Download ${name}`,
    older: "Older",
    newer: "Newer",
    every: "Every version, with all its changes",
  }),
  es: (name) => ({
    title: `Noticias de ${name}`,
    short: "Noticias",
    meta: `Lo que trae cada versión de ${name}, contado para quien lo usa, de la más nueva a la más antigua.`,
    lede: `Cada versión de ${name} que trae algo nuevo, contada para quien lo usa.`,
    feed: "Seguir por RSS",
    out: (version) => `Ya está ${name} ${version}. Esto es lo que cambia para ti.`,
    github: "Todos los cambios en GitHub",
    updates: `¿Ya usas ${name}? Se actualiza solo y te cuenta las novedades al hacerlo.`,
    download: `Descargar ${name}`,
    older: "Anterior",
    newer: "Más reciente",
    every: "Cada versión, con todos sus cambios",
  }),
};

export function newsWords(product: Product, locale: Locale): Words {
  return WORDS[locale](product.name);
}

export function hasNews(product: string | null): boolean {
  return PRODUCTS.some((one) => one.slug === product && one.news);
}

export function storyPath(locale: Locale, version: string): string {
  return `${NEWS_PATH[locale]}/${version}`;
}

/// The window shows each item as «title: said», so a said read on its own starts in lower case.
export function sentence(said: string, locale: Locale): string {
  return said.charAt(0).toLocaleUpperCase(locale) + said.slice(1);
}

export function storySummary(product: Product, story: Story, locale: Locale): string {
  return (
    story.article[locale]?.data.description ??
    `${newsWords(product, locale).out(story.version)} ${story.told[locale].map((one) => one.title).join(" · ")}.`
  );
}

const byVersion = (a: string, b: string) => {
  const [x, y] = [a, b].map((one) => one.split(".").map(Number));
  return x.map((part, at) => part - y[at]).find((gap) => gap !== 0) ?? 0;
};

async function written(product: Product, tag: string): Promise<Written[]> {
  const repo = product.repo.replace("https://github.com/", "");
  try {
    const response = await fetch(`https://raw.githubusercontent.com/${repo}/${tag}/${product.news}`, { signal: AbortSignal.timeout(8000) });
    return response.ok ? await response.json() : [];
  } catch {
    return [];
  }
}

/// The news come from the newest release's own words, so a version still being written never shows up early.
async function read(product: Product): Promise<Story[]> {
  if (!product.news) return [];
  const released = (await everyRelease(product)).flatMap((one) => {
    const version = one.tag.match(/^v?(\d+\.\d+\.\d+)$/)?.[1];
    return one.stable && version ? [{ ...one, version }] : [];
  });
  const newest = released.toSorted((a, b) => byVersion(a.version, b.version)).at(-1);
  if (!newest) return [];
  const when = new Map(released.map((one) => [one.version, one]));
  const articles = await getCollection("news", (one) => one.data.product === product.slug);
  return (await written(product, newest.tag))
    .flatMap((one) => {
      const release = when.get(one.version);
      const article: Story["article"] = Object.fromEntries(
        articles.filter((entry) => entry.data.version === one.version).map((entry) => [entry.data.locale, entry]),
      );
      const en = article.en?.data.title ?? one.headline?.en;
      const es = article.es?.data.title ?? one.headline?.es;
      return release && en && es
        ? [{ version: one.version, date: release.date, release: release.url, headline: { en, es }, told: { en: one.en, es: one.es }, article }]
        : [];
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

const told = new Map<string, Promise<Story[]>>();

export function storiesOf(product: Product): Promise<Story[]> {
  if (!told.has(product.slug)) told.set(product.slug, read(product));
  return told.get(product.slug)!;
}

export function homeProduct(): Product | undefined {
  return PRODUCTS.find((one) => one.slug === HOME_PRODUCT);
}

export async function homeStories(): Promise<Story[]> {
  const product = homeProduct();
  return product ? storiesOf(product) : [];
}

export async function newsFeed(locale: Locale): Promise<Response> {
  const product = homeProduct()!;
  const t = newsWords(product, locale);
  const stories = (await storiesOf(product)).slice(0, IN_FEED);
  return rss(
    { title: t.title, page: canonical(locale, NEWS_PATH[locale]), self: `${DOMAIN}/${NEWS_FEED[locale]}`, description: t.meta, language: locale },
    stories.map((one) => ({
      title: `${product.name} ${one.version}: ${one.headline[locale]}`,
      link: canonical(locale, storyPath(locale, one.version)),
      guid: canonical(locale, storyPath(locale, one.version)),
      date: one.date,
      html: [
        `<p>${escaped(t.out(one.version))}</p>`,
        ...one.told[locale].map((said) => `<h3>${escaped(said.title)}</h3><p>${escaped(sentence(said.said, locale))}</p>`),
      ].join(""),
    })),
  );
}
