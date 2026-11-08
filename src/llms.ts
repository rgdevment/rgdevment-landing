import { docPath, docsOf } from "./content/docs";
import { PRODUCTS, type Product, brewSteps, releasesUrl, storeUrl } from "./content/products";
import { privacyPath } from "./content/privacy";
import { COMPARE_PATH, RIVALS, SOURCES, comparison, compares } from "./content/compare";
import { installers, latestRelease, megabytes } from "./content/releases";
import { MAIN } from "./hosts";
import { AUTHOR, HOME_PRODUCT, canonical } from "./site";

const TEXT = { "Content-Type": "text/plain; charset=utf-8" };

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

function compared(product: Product): string[] {
  if (!compares(product.slug)) return [];
  const t = comparison("en");
  const row = (cells: string[]) => `| ${cells.join(" | ")} |`;
  return [
    `# ${t.title}`,
    "",
    `Source: ${canonical("en", COMPARE_PATH.en)}`,
    "",
    t.lede,
    "",
    t.checked,
    "",
    row(["", ...RIVALS.map((one) => one.name)]),
    row(["---", ...RIVALS.map(() => "---")]),
    ...t.rows.map((one) => row([one.label, ...one.cells])),
    "",
    `## ${t.stronger.title}`,
    "",
    ...t.stronger.items.map(([name, text]) => `- ${name}: ${text}`),
    "",
    `## ${t.sources}`,
    "",
    ...SOURCES.flatMap(([name, urls]) => urls.map((url) => `- ${name}: ${url}`)),
  ];
}

export async function appLlms(): Promise<Response> {
  const product = owner();
  const t = product.en;
  const docs = (await docsOf(product.slug, "en")).filter((one) => one.data.page);
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
    "## Documentation",
    "",
    link("Overview", docPath("en", product.slug)),
    ...docs.map((one) => link(one.data.title, docPath("en", product.slug, one.data.page), one.data.description)),
    `- [Every page in one file](${canonical("en", "")}llms-full.txt)`,
    "",
    ...language,
    "## Questions",
    "",
    ...t.faq.map((one) => `- ${one.q} ${one.a}`),
    "",
    "## Optional",
    "",
    link("Pricing", "pricing", "free in full, no paid tier"),
    link("Support", "support"),
    `- [Source code](${product.repo})`,
    ...(compares(product.slug) ? [link(comparison("en").title, COMPARE_PATH.en, "how it compares with Obsidian, Notion, Todoist and Logseq")] : []),
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
      (one.body ?? "").trim(),
    ].join("\n"),
  );
  const head = `# ${product.name} documentation\n\n> ${product.en.meta}\n\nEvery page of the ${product.name} docs, in English. The same pages in Spanish live at ${canonical("es", docPath("es", product.slug))}.`;
  const extra = compared(product);
  const all = extra.length ? [head, ...pages, extra.join("\n")] : [head, ...pages];
  return new Response(`${all.join("\n\n---\n\n")}\n`, { headers: TEXT });
}
