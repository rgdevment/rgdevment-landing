import { HOMES, MAIN, relocate } from "./hosts";

export const DOMAIN = (import.meta.env.SITE ?? MAIN).replace(/\/$/, "");
export const HOME_PRODUCT: string | null = HOMES[DOMAIN] ?? null;

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const AUTHOR = {
  name: "Mario Hidalgo G.",
  handle: "rgdevment",
  github: "https://github.com/rgdevment",
  x: "https://x.com/rgdevment",
  linkedin: "https://www.linkedin.com/in/rgdevment/",
  coffee: "https://buymeacoffee.com/rgdevment",
  avatar: "https://avatars.githubusercontent.com/u/10289498",
  role: "Independent software developer",
  about: "Makes free, open source desktop apps for Windows and macOS, with no account and no telemetry: Tisty, LinkUnbound and CoPanda.",
  knows: ["Desktop applications", "Windows", "macOS", "Rust", "Model Context Protocol", "Privacy by design"],
};

/// The English pages live at the root and Spanish under /es/, so a path is built once here
/// rather than in every template that needs to point at its twin.
function local(locale: Locale, path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  return `${prefix}/${clean}${clean ? "/" : ""}`;
}

export function href(locale: Locale, path = ""): string {
  return relocate(local(locale, path), HOME_PRODUCT);
}

export function mainHref(locale: Locale, path = ""): string {
  return `${MAIN}${local(locale, path)}`;
}

export function canonical(locale: Locale, path = ""): string {
  const to = href(locale, path);
  return to.startsWith("/") ? `${DOMAIN}${to}` : to;
}

export function appId(product: string): string {
  return `${canonical("en", product)}#app`;
}

export const PERSON_ID = `${MAIN}/#person`;
export const WEBSITE_ID = `${DOMAIN}/#website`;

export function withHome(locale: Locale, trail: [string, string][]): [string, string][] {
  if (HOME_PRODUCT) return trail;
  return [[locale === "es" ? "Inicio" : "Home", ""], ...trail];
}

export function longDate(date: string, locale: Locale): string {
  return new Date(date).toLocaleDateString(locale === "es" ? "es-CL" : "en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function crumbs(locale: Locale, trail: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: withHome(locale, trail).map(([name, path], at) => ({
      "@type": "ListItem",
      position: at + 1,
      name,
      item: canonical(locale, path),
    })),
  };
}
