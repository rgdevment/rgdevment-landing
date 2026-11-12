import text from "./llms.txt?raw";
import { docPath, docsOf } from "./content/docs";
import { lastChanged, type Guide } from "./content/guide";
import { GUIDES, written } from "./content/guides";
import { PRODUCTS, type Product, brewSteps, releasesUrl, storeUrl } from "./content/products";
import { privacyPath } from "./content/privacy";
import { CHANGELOG_PATH, FEED, hasChangelog } from "./content/changelog";
import { COMPARE_PATH, comparisonOf, namesOthers } from "./content/compare";
import { NEWS_FEED, NEWS_PATH, hasNews } from "./content/news";
import { installers, latestRelease, megabytes } from "./content/releases";
import { MAIN, homeOf, relocate } from "./hosts";
import { AUTHOR, DOMAIN, HOME_PRODUCT, canonical, type Locale } from "./site";

const TEXT = { "Content-Type": "text/plain; charset=utf-8" };

const LINK = /(?<!!\[[^\]]*)\]\((\/[^)\s]*)\)/g;
const IMAGE = /(!\[[^\]]*\]\()(\/[^)\s]*\))/g;

// The help is written with the main site's paths, which only the rendered pages rewrite.
function absolute(body: string): string {
  return body
    .replace(LINK, (_, url: string) => {
      const to = relocate(url, HOME_PRODUCT);
      return `](${to.startsWith("/") ? `${DOMAIN}${to}` : to})`;
    })
    .replace(IMAGE, `$1${DOMAIN}$2`);
}

function owner(): Product {
  return PRODUCTS.find((one) => one.slug === HOME_PRODUCT)!;
}

async function install(product: Product): Promise<string[]> {
  const store = storeUrl(product);
  const release = product.requires ? await latestRelease(product) : null;
  const kit = installers(release);
  const direct = [
    kit.win && `Windows installer (.exe, ${megabytes(kit.win, "en")}): ${kit.win.url}`,
    kit.macArm && `macOS on Apple Silicon (.dmg, ${megabytes(kit.macArm, "en")}): ${kit.macArm.url}`,
    kit.macIntel && `macOS on Intel (.dmg, ${megabytes(kit.macIntel, "en")}): ${kit.macIntel.url}`,
  ].filter(Boolean);
  return [
    ...(store ? [`- Microsoft Store: ${store}`] : []),
    ...(product.winget ? [`- winget: \`winget install ${product.winget}\``] : []),
    ...(product.cask ? [`- Homebrew: \`${brewSteps(product).join(" && ")}\``] : []),
    `- Direct download: ${releasesUrl(product)}`,
    ...(release ? direct.map((one) => `  - v${release.version}, ${one}`) : []),
    ...(product.requires ? [`- Requires ${product.requires.windows} or later, or ${product.requires.macos} or later.`] : []),
  ];
}

function onDisk(product: Product): string[] {
  const t = product.en;
  if (!t.proof) return [];
  return [
    `## ${t.proof.title}`,
    "",
    t.proof.lede,
    "",
    "```md",
    t.proof.doc.body,
    "```",
    "",
    "```text",
    t.proof.tree.body,
    "```",
    "",
    t.proof.tree.note,
    "",
    "```jsonl",
    t.proof.log.body,
    "```",
    "",
    t.proof.log.note,
    "",
    t.proof.editors,
    `${t.proof.share.line} ${t.proof.share.url}`,
    "",
  ];
}

function assistants(product: Product): string[] {
  if (!product.mcp) return [];
  const said = product.en.assistant;
  return [
    "## Connect an assistant",
    "",
    `Its MCP server comes inside the app, listed in the MCP Registry as \`${product.mcp.registry}\`. With ${product.name} installed, Settings › Assistants connects the assistants it finds; by hand:`,
    "",
    ...product.mcp.connect.map(({ who, command }) => `- ${who ?? "Any other client, such as VS Code or Cursor"}: \`${command}\``),
    ...(product.listings?.length ? ["", "Also listed at:", "", ...product.listings.map(([name, url]) => `- [${name}](${url})`)] : []),
    "",
    ...(said
      ? [
          said.door,
          "",
          `${said.can.title}:`,
          "",
          ...said.can.items.map((one) => `- ${one}`),
          "",
          `${said.never.title}:`,
          "",
          ...said.never.items.map((one) => `- ${one}`),
          "",
        ]
      : []),
  ];
}

function memory(product: Product): string[] {
  const { fixes, day, cost } = product.en;
  return [
    ...(fixes
      ? [
          `## ${fixes.title}`,
          "",
          fixes.lede,
          "",
          ...fixes.rows.map((one) => `- ${one.who}. ${fixes.said.problem}: ${one.problem} ${fixes.said.fix}: ${one.fix}`),
          "",
        ]
      : []),
    ...(day
      ? [`## ${day.title}`, "", day.lede, "", ...day.steps.map((one, at) => `${at + 1}. ${one.title} ${one.body}`), "", day.close, ""]
      : []),
    ...(cost
      ? [
          `## ${cost.title}`,
          "",
          cost.lede,
          "",
          ...cost.rows.map((one) => `- ${one.what}: ${one.spends}, ${one.saving} ${cost.less}`),
          "",
          `${cost.whyTitle}:`,
          "",
          ...cost.why.map((one) => `- ${one}`),
          "",
          cost.caveat,
          "",
        ]
      : []),
  ];
}

function sharing(product: Product): string[] {
  const said = product.en.sharing;
  if (!said) return [];
  return [
    `## ${said.title}`,
    "",
    said.lede,
    "",
    ...said.points.map((one) => `- ${one.title}. ${one.body}`),
    "",
    said.caveat,
    "",
    `${said.home} ${said.site}`,
    "",
    ...said.papers.map(([name, url]) => `- [${name}](${url})`),
    `- [${said.more}](${canonical("en", docPath("en", product.slug, said.page))}#${said.anchor})`,
    "",
  ];
}

function compared(product: Product): string[] {
  const compared = comparisonOf(product.slug);
  if (!compared) return [];
  const t = compared.en;
  const row = (cells: string[]) => `| ${cells.join(" | ")} |`;
  return [
    `# ${t.heading}`,
    "",
    `Source: ${canonical("en", COMPARE_PATH.en)}`,
    "",
    t.lede,
    "",
    t.checked,
    "",
    row(["", ...compared.rivals.map((one) => one.name)]),
    row(["---", ...compared.rivals.map(() => "---")]),
    ...t.rows.map((one) => row([one.label, ...one.cells.map(({ mark, note }) => (note ? `${t.marks[mark]}: ${note}` : t.marks[mark]))])),
    "",
    ...(t.agent ? [`## ${t.agent.title}`, "", ...t.agent.body.flatMap((one) => [one, ""]), `- [${t.agent.link.label}](${t.agent.link.url})`, ""] : []),
    ...(t.faq ? [`## ${t.faq.title}`, "", ...t.faq.items.map((one) => `- ${one.q} ${one.a}`), ""] : []),
    `## ${t.stronger.title}`,
    "",
    ...t.stronger.groups.flatMap((group) => [
      ...(group.title ? [`### ${group.title}`, ""] : []),
      ...group.items.map((one) => `- ${one.name}${one.facts ? ` (${one.facts.join("; ")})` : ""}: ${one.text}`),
      "",
    ]),
    "",
    `## ${t.sources}`,
    "",
    ...compared.sources.flatMap(([name, urls]) => urls.map((url) => `- ${name}: ${url}`)),
  ];
}

export async function appLlms(): Promise<Response> {
  const product = owner();
  const t = product.en;
  const docs = (await docsOf(product.slug, "en")).filter((one) => one.data.page);
  const compared = comparisonOf(product.slug);
  const link = (title: string, path: string, note = "") => `- [${title}](${canonical("en", path)})${note ? `: ${note}` : ""}`;
  const language = t.language
    ? [
        `## ${t.language.title}`,
        "",
        t.language.line,
        "",
        `- [${t.language.title}](${t.language.url})`,
        `- [Its summary for assistants](${t.language.url}llms.txt)`,
        `- [The whole language in one file](${t.language.url}llms-full.txt)`,
        `- [${product.es.language!.title}](${product.es.language!.url})`,
        "",
      ]
    : [];
  const lines = [
    `# ${product.name}`,
    "",
    `> ${t.meta}`,
    "",
    ...(t.formerly ? [t.formerly, ""] : []),
    t.problem,
    "",
    "## What it does",
    "",
    ...(t.what ?? []).map((one) => `- ${one}`),
    ...(t.groups ?? []).flatMap((group) => [`### ${group.title}`, "", ...group.points.map((one) => `- ${one}`), ""]),
    "",
    ...memory(product),
    ...onDisk(product),
    "## Privacy",
    "",
    t.privacy,
    "",
    link("Privacy policy", privacyPath("en", product.slug)),
    "",
    "## Install",
    "",
    `Free and open source (${product.licence}) for ${product.platforms.join(" and ")}. No account.`,
    "",
    ...(await install(product)),
    "",
    ...(t.firstRun ? [`### ${t.firstRun.title}`, "", t.firstRun.body, "", `- [${t.firstRun.link}](${canonical("en", docPath("en", product.slug))}#${t.firstRun.anchor})`, ""] : []),
    ...assistants(product),
    ...sharing(product),
    "## Documentation",
    "",
    link("Overview", docPath("en", product.slug)),
    ...docs.map((one) => link(one.data.title, docPath("en", product.slug, one.data.page), one.data.description)),
    `- [Every page in one file](${canonical("en", "")}llms-full.txt)`,
    "",
    ...guidesOf(product, link),
    ...language,
    "## Questions",
    "",
    ...t.faq.map((one) => `- ${one.q} ${one.a}`),
    "",
    "## Optional",
    "",
    link("Pricing", "pricing", "free in full, no paid tier"),
    link("Support", "support"),
    ...(hasNews(product.slug) ? [link("News", NEWS_PATH.en, "one article for each version that brings something new"), `- [News feed](${canonical("en", "")}${NEWS_FEED.en})`] : []),
    ...(hasChangelog(product.slug) ? [link("What's new", CHANGELOG_PATH.en, "every release, newest first"), `- [RSS feed](${canonical("en", "")}${FEED})`] : []),
    `- [Source code](${product.repo})`,
    ...(compared ? [link(compared.en.title, COMPARE_PATH.en, `what it does that ${namesOthers(compared)} do not`)] : []),
    `- [Español](${canonical("es", "")}): ${product.es.tagline}`,
    `- [Ayuda en español](${canonical("es", docPath("es", product.slug))})`,
    `- [More tools by ${AUTHOR.handle}](${MAIN}/llms.txt)`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: TEXT });
}

export async function appLlmsFull(): Promise<Response> {
  const product = owner();
  const ordered = await docsOf(product.slug, "en");
  const pages = ordered.map((one) =>
    [
      `# ${one.data.title}`,
      "",
      `Source: ${canonical(one.data.locale, docPath(one.data.locale, product.slug, one.data.page))}`,
      `Updated: ${one.data.updated}`,
      "",
      absolute((one.body ?? "").trim()),
    ].join("\n"),
  );
  const head = `# ${product.name} documentation\n\n> ${product.en.meta}\n\nEvery page of the ${product.name} docs, in English. The same pages in Spanish live at ${canonical("es", docPath("es", product.slug))}.`;
  const pitch = memory(product);
  const extra = compared(product);
  const all = [head, ...(pitch.length ? [pitch.join("\n").trim()] : []), ...pages, ...(extra.length ? [extra.join("\n")] : [])];
  return new Response(`${all.join("\n\n---\n\n")}\n`, { headers: TEXT });
}

function guidesOf(product: Product, link: (title: string, path: string, note?: string) => string): string[] {
  const own = GUIDES.filter((one) => one.product === product.slug).map((one) => written(one, "en"));
  return own.length ? ["## Guides", "", ...own.map((t) => link(t.title, t.slug, t.description)), ""] : [];
}

function guideList(locale: Locale): string[] {
  return GUIDES.map((one) => written(one, locale)).map((t) => `- [${t.title}](${canonical(locale, t.slug)}): ${t.description}`);
}

export function mainLlms(): string {
  const comparisons = PRODUCTS.flatMap((product) => {
    const compared = comparisonOf(product.slug);
    const home = homeOf(product.slug);
    return compared ? [`- [${compared.en.title}](${home}/${COMPARE_PATH.en}/) ([español](${home}/es/${COMPARE_PATH.es}/)): ${compared.en.meta}`] : [];
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
    ...guideList("en"),
    "",
    "## Guías",
    "",
    ...guideList("es"),
    "",
    `- [Every guide in full, in one file](${MAIN}/llms-full.txt)`,
    "",
  ].join("\n");
  return text.replace("## Spanish\n", `${generated}\n## Spanish\n`);
}

function guideText(guide: Guide, locale: Locale): string {
  const t = written(guide, locale);
  return [
    `# ${t.title}`,
    "",
    `Source: ${canonical(locale, t.slug)}`,
    `Updated: ${lastChanged(guide)}`,
    "",
    t.lede,
    "",
    `## ${t.nativeTitle}`,
    "",
    ...t.nativeSteps.map((step, at) => `${at + 1}. ${step.title}. ${step.body}`),
    "",
    `## ${t.gapTitle}`,
    "",
    ...t.gap.map((one) => `- ${one}`),
    "",
    `## ${t.toolTitle}`,
    "",
    ...t.tool.map((one) => `- ${one}`),
    ...(t.also ? ["", `${t.also.line} ${t.also.url}`] : []),
    "",
    ...t.faq.flatMap((one) => [`**${one.q}** ${one.a}`, ""]),
  ].join("\n");
}

export function mainLlmsFull(): string {
  const guides = (["en", "es"] as Locale[]).flatMap((locale) => GUIDES.map((one) => guideText(one, locale)));
  return `${[mainLlms().trim(), ...guides].join("\n\n---\n\n")}\n`;
}
