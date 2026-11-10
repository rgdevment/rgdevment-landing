export type Mark = "yes" | "part" | "no" | "soon";

export type Cell = { mark: Mark; note?: string };

export type Words = {
  title: string;
  heading: string;
  short: string;
  meta: string;
  lede: string;
  only: string;
  checked: string;
  marks: Record<Mark, string>;
  rows: { label: string; cells: Cell[]; own?: string }[];
  stronger: { title: string; lede: string; items: [string, string][] };
  sources: string;
  back: string;
};

/// The first rival is always the product itself, and every row gives one cell per rival in that order.
export type Comparison = {
  rivals: { name: string; url: string }[];
  sources: [string, string[]][];
  en: Words;
  es: Words;
};

export const yes = (note?: string): Cell => ({ mark: "yes", note });
export const part = (note?: string): Cell => ({ mark: "part", note });
export const no = (note?: string): Cell => ({ mark: "no", note });
export const soon = (note?: string): Cell => ({ mark: "soon", note });
