export const MAIN = "https://rgdevment.com";

/// A product that owns a domain is its home page there, and everything else lives on the main site.
export const HOMES: Record<string, string> = { "https://www.tisty.app": "tisty" };

/// Pages a product's own site keeps for itself, showing only that product.
const OWN = ["pricing", "support", "precios", "apoyar"];

export function homeOf(product: string): string | undefined {
  return Object.keys(HOMES).find((domain) => HOMES[domain] === product);
}

export function relocate(url: string, product: string | null): string {
  if (!product) return away(url);
  if (!url.startsWith("/") || url.startsWith("//")) return url;
  const [, prefix = "", rest = ""] = url.match(/^(\/es(?=\/|$))?\/?(.*)$/) ?? [];
  const [page, tail = ""] = rest.split(/(?=[?#])/, 2);
  if (OWN.includes(page.replace(/\/$/, ""))) return url;
  if (page === "" || page === `${product}/` || page === product) return `${prefix}/${tail}`;
  if (page.startsWith(`${product}/`)) return `${prefix}/${page.slice(product.length + 1)}${tail}`;
  return `${MAIN}${url}`;
}

/// On the main site, a page of a product that owns a domain has moved there.
function away(url: string): string {
  const path = url.startsWith(`${MAIN}/`) ? url.slice(MAIN.length) : url;
  if (!path.startsWith("/") || path.startsWith("//")) return url;
  const first = path.match(/^(?:\/es(?=\/|$))?\/?([^/?#]*)/)?.[1] ?? "";
  const home = first ? homeOf(first) : undefined;
  return home ? `${home}${relocate(path, first)}` : url;
}

/// Cloudflare Pages rules sending the main site's old pages of each moved product to its domain.
export function redirects(): string {
  return Object.entries(HOMES)
    .flatMap(([domain, product]) => [
      `/${product} ${domain}/ 301`,
      `/${product}/* ${domain}/:splat 301`,
      `/es/${product} ${domain}/es/ 301`,
      `/es/${product}/* ${domain}/es/:splat 301`,
    ])
    .join("\n")
    .concat("\n");
}
