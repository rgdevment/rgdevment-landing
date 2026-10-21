import { docPath, docsOf } from "./content/docs";
import { PRODUCTS, type Product, releasesUrl, storeUrl } from "./content/products";
import { privacyPath } from "./content/privacy";
import { MAIN } from "./hosts";
import { AUTHOR, HOME_PRODUCT, canonical } from "./site";

const TEXT = { "Content-Type": "text/plain; charset=utf-8" };

function owner(): Product {
  return PRODUCTS.find((one) => one.slug === HOME_PRODUCT)!;
}

function install(product: Product): string[] {
  const store = storeUrl(product);
  return [
    ...(store ? [`- Microsoft Store: ${store}`] : []),
    ...(product.winget ? [`- winget: \`winget install ${product.winget}\``] : []),
    ...(product.cask ? [`- Homebrew: \`brew tap rgdevment/tap && brew install --cask ${product.cask}\``] : []),
    `- Direct download: ${releasesUrl(product)}`,
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
    ...t.what.map((one) => `- ${one}`),
    "",
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
    ...install(product),
    "",
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
  return new Response(`${[head, ...pages].join("\n\n---\n\n")}\n`, { headers: TEXT });
}
