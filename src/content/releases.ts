import { PRODUCTS, type Product } from "./products";
import type { Locale } from "../site";

export type Asset = { name: string; size: number; url: string };
export type Release = { product: Product; version: string; date: string; url: string; assets: Asset[] };
export type Installers = { win?: Asset; macArm?: Asset; macIntel?: Asset };

const RECENT_DAYS = 21;
const asked = new Map<string, Promise<Release | null>>();
const starred = new Map<string, Promise<number | null>>();

async function github(path: string) {
  const token = process.env.GITHUB_TOKEN;
  try {
    const response = await fetch(`https://api.github.com/repos/${path}`, {
      headers: { Accept: "application/vnd.github+json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      signal: AbortSignal.timeout(8000),
    });
    return response.ok ? await response.json() : null;
  } catch {
    return null;
  }
}

const repoOf = (product: Product) => product.repo.replace("https://github.com/", "");

async function ask(product: Product): Promise<Release | null> {
  const body = await github(`${repoOf(product)}/releases/latest`);
  if (!body) return null;
  return {
    product,
    version: body.tag_name.replace(/^v/, ""),
    date: body.published_at,
    url: body.html_url,
    assets: (body.assets ?? []).map((one: { name: string; size: number; browser_download_url: string }) => ({
      name: one.name,
      size: one.size,
      url: one.browser_download_url,
    })),
  };
}

export type Published = { tag: string; date: string; url: string; body: string; stable: boolean };

const listed = new Map<string, Promise<Published[]>>();

async function list(product: Product): Promise<Published[]> {
  const all: Published[] = [];
  for (let page = 1; ; page++) {
    const batch = await github(`${repoOf(product)}/releases?per_page=100&page=${page}`);
    if (!Array.isArray(batch)) break;
    all.push(
      ...batch.map((one) => ({
        tag: one.tag_name,
        date: one.published_at,
        url: one.html_url,
        body: one.body ?? "",
        stable: !one.draft && !one.prerelease,
      })),
    );
    if (batch.length < 100) break;
  }
  return all;
}

export function everyRelease(product: Product): Promise<Published[]> {
  if (!listed.has(product.slug)) listed.set(product.slug, list(product));
  return listed.get(product.slug)!;
}

/// Asked once per build: a failed answer only hides the notice, it never stops the site going out.
export function latestRelease(product: Product): Promise<Release | null> {
  if (!asked.has(product.slug)) asked.set(product.slug, ask(product));
  return asked.get(product.slug)!;
}

export function stars(product: Product): Promise<number | null> {
  if (!starred.has(product.slug)) {
    starred.set(product.slug, github(repoOf(product)).then((body) => body?.stargazers_count ?? null));
  }
  return starred.get(product.slug)!;
}

export function installers(release: Release | null): Installers {
  const find = (pattern: RegExp) => release?.assets.find((one) => pattern.test(one.name));
  return {
    win: find(/installer-.*-windows-x86_64\.exe$/),
    macArm: find(/installer-.*-macos-aarch64\.dmg$/),
    macIntel: find(/installer-.*-macos-x86_64\.dmg$/),
  };
}

export function megabytes(asset: Asset, locale: Locale): string {
  const size = (asset.size / 1_000_000).toLocaleString(locale === "es" ? "es-CL" : "en-US", { maximumFractionDigits: 1 });
  return `${size} MB`;
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
