import type { APIRoute } from "astro";
import { NEWS_PATH, hasNews, newsFeed } from "../../../../content/news";
import { HOME_PRODUCT } from "../../../../site";

export async function getStaticPaths() {
  return (await hasNews(HOME_PRODUCT)) ? [{ params: { noticias: NEWS_PATH.es } }] : [];
}

export const GET: APIRoute = () => newsFeed("es");

export const prerender = true;
