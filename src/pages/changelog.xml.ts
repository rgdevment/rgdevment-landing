import type { APIRoute } from "astro";
import { FEED, everyNote, feed } from "../content/changelog";
import { DOMAIN } from "../site";

export const GET: APIRoute = async () =>
  feed(
    "What's new in rgdevment's apps",
    `${DOMAIN}/`,
    `${DOMAIN}/${FEED}`,
    "Every new version of Tisty, LinkUnbound and CoPanda, newest first, from their release notes.",
    (await everyNote()).slice(0, 30),
  );

export const prerender = true;
