import { type CollectionEntry, getCollection } from "astro:content";
import type { Locale } from "../site";

export type Doc = CollectionEntry<"docs">;

export const DOCS_SECTION: Record<Locale, string> = { en: "docs", es: "ayuda" };

export function docPath(locale: Locale, product: string, slug = ""): string {
  return [product, DOCS_SECTION[locale], slug].filter(Boolean).join("/");
}

export async function docsOf(product: string, locale: Locale): Promise<Doc[]> {
  const all = await getCollection("docs", (one) => one.data.product === product && one.data.locale === locale);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function docRoutes(locale: Locale) {
  const all = await getCollection("docs", (one) => one.data.locale === locale);
  return all.map((doc) => ({
    params: { product: doc.data.product, slug: doc.data.page || undefined },
    props: { doc },
  }));
}

export function bySection(docs: Doc[]): [string, Doc[]][] {
  return docs
    .filter((one) => one.data.page)
    .reduce<[string, Doc[]][]>((all, one) => {
      const last = all.at(-1);
      if (last && last[0] === one.data.section) last[1].push(one);
      else all.push([one.data.section, [one]]);
      return all;
    }, []);
}
