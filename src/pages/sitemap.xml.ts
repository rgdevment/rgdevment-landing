import type { APIRoute } from "astro";
import { GUIDES } from "../content/guides";
import { privacyPath } from "../content/privacy";
import { PRODUCTS } from "../content/products";
import { type Entry, docEntries, sitemap } from "../sitemap";

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

export const GET: APIRoute = async () => sitemap([...ENTRIES, ...(await docEntries())]);

export const prerender = true;
