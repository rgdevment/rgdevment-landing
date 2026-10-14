import { getCollection } from "astro:content";
import { docPath } from "./content/docs";
import { LOCALES, canonical } from "./site";

export type Entry = { en: string; es: string; priority: string; lastmod?: string };

const BREAK = "\n";

export async function docEntries(product?: string): Promise<Entry[]> {
  const docs = await getCollection(
    "docs",
    (one) => one.data.locale === "en" && one.data.twin !== null && (!product || one.data.product === product),
  );
  return docs.map((one) => ({
    en: docPath("en", one.data.product, one.data.page),
    es: docPath("es", one.data.product, one.data.twin!),
    priority: one.data.page ? "0.6" : "0.7",
  }));
}

/// Every page is declared once per language, each one naming its twin, so the two versions are
/// read as the same page in two languages instead of as two pages saying the same thing. A guide
/// keeps a different slug in each language, which is why the pair travels together.
export function sitemap(entries: Entry[]): Response {
  const urls = entries.flatMap((entry) =>
    LOCALES.map((locale) => {
      const alternates = LOCALES.map(
        (other) =>
          `    <xhtml:link rel="alternate" hreflang="${other}" href="${canonical(other, entry[other])}"/>`,
      ).join(BREAK);
      const rows = [
        "  <url>",
        `    <loc>${canonical(locale, entry[locale])}</loc>`,
        alternates,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${canonical("en", entry.en)}"/>`,
      ];
      if (entry.lastmod) rows.push(`    <lastmod>${entry.lastmod}</lastmod>`);
      rows.push(`    <priority>${entry.priority}</priority>`, "  </url>");
      return rows.join(BREAK);
    }),
  ).join(BREAK);

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    "</urlset>",
    "",
  ].join(BREAK);

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
