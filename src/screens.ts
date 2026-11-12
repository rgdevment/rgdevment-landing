import { readdirSync } from "node:fs";
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
