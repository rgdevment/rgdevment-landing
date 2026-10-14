import type { APIRoute } from "astro";
import { privacyPath } from "../../../content/privacy";
import { docEntries, sitemap } from "../../../sitemap";
import { HOME_PRODUCT } from "../../../site";

const product = HOME_PRODUCT!;

export const GET: APIRoute = async () =>
  sitemap([
    { en: product, es: product, priority: "1.0" },
    { en: privacyPath("en", product), es: privacyPath("es", product), priority: "0.4" },
    ...(await docEntries(product)),
  ]);

export const prerender = true;
