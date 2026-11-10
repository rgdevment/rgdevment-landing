import text from "../llms.txt?raw";
import { CHANGELOG_PATH, FEED, hasChangelog } from "../content/changelog";
import { COMPARE_PATH, comparisonOf } from "../content/compare";
import { GUIDES, written } from "../content/guides";
import { PRODUCTS } from "../content/products";
import { MAIN, homeOf } from "../hosts";
import { canonical, type Locale } from "../site";

const guides = (locale: Locale) =>
  GUIDES.map((one) => written(one, locale)).map((t) => `- [${t.title}](${canonical(locale, t.slug)}): ${t.description}`);

const comparisons = PRODUCTS.flatMap((product) => {
  const compared = comparisonOf(product.slug);
  return compared ? [`- [${compared.en.title}](${homeOf(product.slug)}/${COMPARE_PATH.en}/): ${compared.en.meta}`] : [];
});

const changelogs = PRODUCTS.filter((product) => hasChangelog(product.slug)).map((product) => {
  const home = homeOf(product.slug);
  return `- [${product.name}](${home}/${CHANGELOG_PATH.en}/) ([RSS](${home}/${FEED}), [español](${home}/es/${CHANGELOG_PATH.es}/))`;
});

const generated = [
  "## Comparisons",
  "",
  "Each app against the ones people already use, cell by cell, with the rivals' own pages as sources.",
  "",
  ...comparisons,
  "",
  "## What's new",
  "",
  ...changelogs,
  `- [All three in one feed](${MAIN}/${FEED})`,
  "",
  "## Guides",
  "",
  ...guides("en"),
  "",
  "## Guías",
  "",
  ...guides("es"),
  "",
].join("\n");

const body = text.replace("## Spanish\n", `${generated}\n## Spanish\n`);

export const GET = () => new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
