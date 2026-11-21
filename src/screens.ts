import { readdirSync } from "node:fs";
import sharp from "sharp";
import type { Screen } from "./content/products";
import { versioned } from "./versioned";

export type Format = "avif" | "webp";
export type Variant = { path: string; width: number };

export const SCREEN_SIZES = "(min-width: 1088px) 1024px, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)";

const PUBLIC = readdirSync("./public");

export function variantsOf(image: string, format: Format): Variant[] {
  const pattern = new RegExp(`^${image.slice(1)}-(\\d+)\\.${format}$`);
  return PUBLIC.flatMap((name) => {
    const width = name.match(pattern)?.[1];
    return width ? [{ path: `/${name}`, width: Number(width) }] : [];
  }).sort((a, b) => a.width - b.width);
}

export function srcsetOf(image: string, format: Format): string {
  return variantsOf(image, format).map((one) => `${versioned(one.path)} ${one.width}w`).join(", ");
}

async function pictureOf(image: string, alt: string) {
  const webp = variantsOf(image, "webp");
  if (!webp.length) return null;
  const { width, height } = await sharp(`./public${webp.at(-1)!.path}`).metadata();
  return { width, height, alt, avif: srcsetOf(image, "avif"), webp: srcsetOf(image, "webp"), fallback: versioned(webp[0].path) };
}

export async function shadesOf(screen: Screen) {
  const light = await pictureOf(screen.image, screen.alt);
  const dark = await pictureOf(`${screen.image}-dark`, screen.alt);
  if (!light || !dark) throw new Error(`Screens: ${screen.image} needs its light and its dark capture`);
  return [
    { shade: "light", picture: light },
    { shade: "dark", picture: dark },
  ];
}
