export const DOMAIN = (import.meta.env.SITE ?? "https://rgdevment.com").replace(/\/$/, "");

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const AUTHOR = {
  name: "Mario Hidalgo G.",
  handle: "rgdevment",
  github: "https://github.com/rgdevment",
  x: "https://x.com/rgdevment",
};

/// The English pages live at the root and Spanish under /es/, so a path is built once here
/// rather than in every template that needs to point at its twin.
export function href(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  return `${prefix}/${clean}${clean ? "/" : ""}` || "/";
}

export function canonical(locale: Locale, path = ""): string {
  return `${DOMAIN}${href(locale, path)}`;
}

export const PERSON_ID = `${DOMAIN}/#person`;
export const WEBSITE_ID = `${DOMAIN}/#website`;

export function withHome(locale: Locale, trail: [string, string][]): [string, string][] {
  return [[locale === "es" ? "Inicio" : "Home", ""], ...trail];
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
