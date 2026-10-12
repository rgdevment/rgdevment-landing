import { PRODUCTS, type Product } from "./products";
import type { Locale } from "../site";

export type Release = { product: Product; version: string; date: string; url: string };

const RECENT_DAYS = 21;
const asked = new Map<string, Promise<Release | null>>();

async function ask(product: Product): Promise<Release | null> {
  const repo = product.repo.replace("https://github.com/", "");
  const token = process.env.GITHUB_TOKEN;
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return null;
    const body = await response.json();
    return { product, version: body.tag_name.replace(/^v/, ""), date: body.published_at, url: body.html_url };
  } catch {
    return null;
  }
}

/// Asked once per build: a failed answer only hides the notice, it never stops the site going out.
export function latestRelease(product: Product): Promise<Release | null> {
  if (!asked.has(product.slug)) asked.set(product.slug, ask(product));
  return asked.get(product.slug)!;
}

export async function newestRelease(): Promise<Release | null> {
  const all = (await Promise.all(PRODUCTS.map(latestRelease))).filter((one) => one !== null);
  const newest = all.sort((a, b) => b.date.localeCompare(a.date))[0];
  const age = newest ? (Date.now() - Date.parse(newest.date)) / 86_400_000 : Infinity;
  return age <= RECENT_DAYS ? newest : null;
}

export function releaseDate(release: Release, locale: Locale): string {
  return new Date(release.date).toLocaleDateString(locale === "es" ? "es-CL" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
