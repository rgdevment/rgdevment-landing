import type { APIRoute } from "astro";
import { PRODUCTS } from "../../../content/products";
import { getEntry } from "astro:content";
import { privacyPath } from "../../../content/privacy";
import { termsPath } from "../../../content/terms";
import { latestRelease } from "../../../content/releases";
import { docEntries, sitemap } from "../../../sitemap";
import { HOME_PRODUCT } from "../../../site";

const product = HOME_PRODUCT!;

export const GET: APIRoute = async () => {
  const release = await latestRelease(PRODUCTS.find((one) => one.slug === product)!);
  return sitemap([
    { en: product, es: product, priority: "1.0", lastmod: release?.date.slice(0, 10) },
    { en: privacyPath("en", product), es: privacyPath("es", product), priority: "0.4" },
    ...((await getEntry("terms", product))
      ? [{ en: termsPath("en", product), es: termsPath("es", product), priority: "0.3" }]
      : []),
    { en: "pricing", es: "precios", priority: "0.5" },
    { en: "support", es: "colaborar", priority: "0.5" },
    ...(await docEntries(product)),
  ]);
};

export const prerender = true;
