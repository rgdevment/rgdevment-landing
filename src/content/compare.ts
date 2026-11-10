import type { Locale } from "../site";
import type { Comparison, Words } from "./comparisons/marks";
import { COPANDA } from "./comparisons/copanda";
import { LINKUNBOUND } from "./comparisons/linkunbound";
import { TISTY } from "./comparisons/tisty";

export type { Cell, Comparison, Mark, Words } from "./comparisons/marks";

export const COMPARE_PATH: Record<Locale, string> = { en: "compare", es: "comparar" };

const COMPARISONS: Record<string, Comparison> = { tisty: TISTY, linkunbound: LINKUNBOUND, copanda: COPANDA };

export function comparisonOf(product: string | null): Comparison | null {
  return (product && COMPARISONS[product]) || null;
}

export function compares(product: string | null): boolean {
  return comparisonOf(product) !== null;
}

export function tally(words: Words): string {
  const { rows } = words;
  const only = rows.filter(({ cells: [own, ...others] }) => own.mark === "yes" && others.every((one) => one.mark !== "yes")).length;
  const yeses = (at: number) => rows.filter(({ cells }) => cells[at].mark === "yes").length;
  const best = Math.max(...rows[0].cells.slice(1).map((_, at) => yeses(at + 1)));
  return words.only
    .replace("{only}", String(only))
    .replace("{own}", String(yeses(0)))
    .replace("{best}", String(best))
    .replace("{total}", String(rows.length));
}

export function namesOthers(comparison: Comparison): string {
  const names = comparison.rivals.slice(1).map((one) => one.name);
  return `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`;
}
