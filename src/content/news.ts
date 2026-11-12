import { getCollection, type CollectionEntry } from "astro:content";
import { PRODUCTS, type Product } from "./products";
import { everyRelease } from "./releases";
import { escaped, rss } from "../rss";
import { DOMAIN, HOME_PRODUCT, LOCALES, canonical, type Locale } from "../site";

export const NEWS_PATH: Record<Locale, string> = { en: "news", es: "noticias" };
export const NEWS_FEED: Record<Locale, string> = { en: "news.xml", es: "es/noticias.xml" };
const IN_FEED = 30;

export type Article = CollectionEntry<"news">;

export type Story = {
  date: string;
  page: Record<Locale, string>;
  article: Record<Locale, Article>;
};

type Words = {
  title: string;
  short: string;
  meta: string;
  lede: string;
  feed: string;
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
    meta: `What is new in ${name}, told for the people who use it, newest first.`,
    lede: `What is new in ${name}, told for the people who use it.`,
    feed: "Follow by RSS",
    updates: `Already using ${name}? It updates itself and tells you what is new when it does.`,
    download: `Download ${name}`,
    older: "Older",
    newer: "Newer",
    every: "Every version, with all its changes",
  }),
  es: (name) => ({
    title: `Noticias de ${name}`,
    short: "Noticias",
    meta: `Lo nuevo de ${name}, contado para quien lo usa, de lo más reciente a lo más antiguo.`,
    lede: `Lo nuevo de ${name}, contado para quien lo usa.`,
    feed: "Seguir por RSS",
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

export function storyPath(locale: Locale, page: string): string {
  return `${NEWS_PATH[locale]}/${page}`;
}

async function shipped(product: Product): Promise<Map<string, string>> {
  return new Map(
    (await everyRelease(product)).flatMap((one) => {
      const version = one.tag.match(/^v?(\d+\.\d+\.\d+)$/)?.[1];
      return one.stable && version ? [[version, one.date] as const] : [];
    }),
  );
}

/// An article that waits for a release stays off the site until that version is out, and takes its date.
async function read(product: Product): Promise<Story[]> {
  const entries = await getCollection("news", (one) => one.id.startsWith(`${product.slug}/`));
  const released = await shipped(product);
  const keys = [...new Set(entries.map((one) => one.id.split("/")[1]))];
  return keys
    .flatMap((key) => {
      const twins = LOCALES.map((locale) => entries.find((one) => one.id === `${product.slug}/${key}/${locale}`));
      const [en, es] = twins;
      if (!en || !es) throw new Error(`news: ${product.slug}/${key} needs an en.md and an es.md`);
      const waits = en.data.release;
      if (waits && !released.has(waits)) return [];
      const date = en.data.date?.toISOString() ?? released.get(waits!)!;
      return [{ date, page: { en: en.data.page ?? key, es: es.data.page ?? key }, article: { en, es } }];
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

export async function hasNews(slug: string | null): Promise<boolean> {
  const product = PRODUCTS.find((one) => one.slug === slug);
  return product ? (await storiesOf(product)).length > 0 : false;
}

export async function newsFeed(locale: Locale): Promise<Response> {
  const product = homeProduct()!;
  const t = newsWords(product, locale);
  const stories = (await storiesOf(product)).slice(0, IN_FEED);
  return rss(
    { title: t.title, page: canonical(locale, NEWS_PATH[locale]), self: `${DOMAIN}/${NEWS_FEED[locale]}`, description: t.meta, language: locale },
    stories.map((one) => {
      const link = canonical(locale, storyPath(locale, one.page[locale]));
      const { title, description } = one.article[locale].data;
      return { title, link, guid: link, date: one.date, html: `<p>${escaped(description)}</p>` };
    }),
  );
}
