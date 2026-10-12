import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { docPath } from "../content/docs";
import { GUIDES } from "../content/guides";
import { privacyPath } from "../content/privacy";
import { PRODUCTS } from "../content/products";
import { LOCALES, canonical } from "../site";

type Entry = { en: string; es: string; priority: string; lastmod?: string };

const NEWEST = GUIDES.map((g) => g.published).sort().at(-1);

const ENTRIES: Entry[] = [
  { en: "", es: "", priority: "1.0", lastmod: NEWEST },
  ...PRODUCTS.map((p) => ({ en: p.slug, es: p.slug, priority: "0.9", lastmod: NEWEST })),
  ...PRODUCTS.map((p) => ({ en: privacyPath("en", p.slug), es: privacyPath("es", p.slug), priority: "0.4" })),
  { en: "guides", es: "guias", priority: "0.7", lastmod: NEWEST },
  { en: "pricing", es: "precios", priority: "0.8", lastmod: NEWEST },
  { en: "support", es: "apoyar", priority: "0.6", lastmod: NEWEST },
  ...GUIDES.map((g) => ({
    en: g.en.slug,
    es: g.es.slug,
    priority: "0.8",
    lastmod: g.published,
  })),
];

const BREAK = "\n";

async function docEntries(): Promise<Entry[]> {
  const docs = await getCollection("docs", (one) => one.data.locale === "en" && one.data.twin !== null);
  return docs.map((one) => ({
    en: docPath("en", one.data.product, one.data.page),
    es: docPath("es", one.data.product, one.data.twin!),
    priority: one.data.page ? "0.6" : "0.7",
  }));
}

/// Every page is declared once per language, each one naming its twin, so the two versions are
/// read as the same page in two languages instead of as two pages saying the same thing. A guide
/// keeps a different slug in each language, which is why the pair travels together.
export const GET: APIRoute = async () => {
  const urls = [...ENTRIES, ...(await docEntries())].flatMap((entry) =>
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
};

export const prerender = true;
