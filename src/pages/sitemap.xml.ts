import type { APIRoute } from "astro";
import { lastChanged } from "../content/guide";
import { GUIDES } from "../content/guides";
import { privacyPath } from "../content/privacy";
import { PRODUCTS } from "../content/products";
import { homeOf } from "../hosts";
import { type Entry, docEntries, sitemap } from "../sitemap";

const STAYING = PRODUCTS.filter((p) => !homeOf(p.slug));

const NEWEST = GUIDES.map(lastChanged).sort().at(-1);

const ENTRIES: Entry[] = [
  { en: "", es: "", priority: "1.0", lastmod: NEWEST },
  ...STAYING.map((p) => ({ en: p.slug, es: p.slug, priority: "0.9", lastmod: NEWEST })),
  ...STAYING.map((p) => ({ en: privacyPath("en", p.slug), es: privacyPath("es", p.slug), priority: "0.4" })),
  { en: "guides", es: "guias", priority: "0.7", lastmod: NEWEST },
  { en: "pricing", es: "precios", priority: "0.8" },
  { en: "support", es: "colaborar", priority: "0.6" },
  ...GUIDES.map((g) => ({
    en: g.en.slug,
    es: g.es.slug,
    priority: "0.8",
    lastmod: lastChanged(g),
  })),
];

export const GET: APIRoute = async () => sitemap([...ENTRIES, ...(await docEntries())]);

export const prerender = true;
