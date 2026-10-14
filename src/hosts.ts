export const MAIN = "https://rgdevment.com";

/// A product that owns a domain is its home page there, and everything else lives on the main site.
export const HOMES: Record<string, string> = { "https://www.tisty.app": "tisty" };

export function relocate(url: string, product: string | null): string {
  if (!product || !url.startsWith("/") || url.startsWith("//")) return url;
  const [, prefix = "", rest = ""] = url.match(/^(\/es(?=\/|$))?\/?(.*)$/) ?? [];
  const [page, tail = ""] = rest.split(/(?=[?#])/, 2);
  if (page === "" || page === `${product}/` || page === product) return `${prefix}/${tail}`;
  if (page.startsWith(`${product}/`)) return `${prefix}/${page.slice(product.length + 1)}${tail}`;
  return `${MAIN}${url}`;
}
