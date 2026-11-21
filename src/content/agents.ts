import type { Locale } from "../site";

export const AGENTS_SHORT = ["GitHub Copilot", "Claude Code", "Codex", "Cursor", "Gemini CLI"];

/// As the app's own catalog names every client Settings › Assistants connects.
export const AGENTS_ALL = [
  "Claude Code",
  "Claude Desktop",
  "Codex",
  "GitHub Copilot CLI",
  "Visual Studio Code",
  "Cursor",
  "Devin Desktop",
  "Windsurf",
  "Antigravity",
  "Gemini CLI",
  "Qwen Code",
  "OpenCode",
  "Kilo Code",
  "Zed",
  "Junie",
  "Kiro",
  "Warp",
  "LM Studio",
  "Amp",
  "Augment",
  "Factory Droid",
  "Trae",
  "Cline",
  "Roo Code",
  "BoltAI",
  "Goose",
  "Continue",
];

const JOINS = { en: { and: "and", or: "or" }, es: { and: "y", or: "o" } };

export function agentList(locale: Locale, join: "and" | "or", names = AGENTS_SHORT): string {
  return `${names.slice(0, -1).join(", ")} ${JOINS[locale][join]} ${names.at(-1)}`;
}

export const AGENTS = {
  en: { and: agentList("en", "and"), or: agentList("en", "or"), all: agentList("en", "and", AGENTS_ALL) },
  es: { and: agentList("es", "and"), or: agentList("es", "or"), all: agentList("es", "and", AGENTS_ALL) },
};
