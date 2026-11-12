import type { APIRoute } from "astro";
import { NEWS_PATH, hasNews, newsFeed } from "../../../content/news";
import { HOME_PRODUCT } from "../../../site";

export async function getStaticPaths() {
  return (await hasNews(HOME_PRODUCT)) ? [{ params: { news: NEWS_PATH.en } }] : [];
}

export const GET: APIRoute = () => newsFeed("en");

export const prerender = true;
