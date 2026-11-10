import type { APIRoute } from "astro";
import { FEED, changelogUrl, changelogWords, feed, notesOf } from "../../../content/changelog";
import { PRODUCTS } from "../../../content/products";
import { DOMAIN, HOME_PRODUCT } from "../../../site";

export const GET: APIRoute = async () => {
  const product = PRODUCTS.find((one) => one.slug === HOME_PRODUCT)!;
  const t = changelogWords(product, "en");
  return feed(t.title, changelogUrl(product, "en"), `${DOMAIN}/${FEED}`, t.meta, await notesOf(product));
};

export const prerender = true;
