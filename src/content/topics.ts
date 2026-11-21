import type { Locale } from "../site";

export type Topic = "agent" | "alone" | "data";

export const TOPICS_OF = "tisty";

export const TOPICS: Topic[] = ["agent", "alone", "data"];

export const TOPIC_PATH: Record<Topic, Record<Locale, string>> = {
  agent: { en: "with-your-agent", es: "con-tu-agente" },
  alone: { en: "on-your-own", es: "solo-para-ti" },
  data: { en: "your-data", es: "tus-datos" },
};

export const TOPIC_LABEL: Record<Topic, Record<Locale, string>> = {
  agent: { en: "With your agent", es: "Con tu agente" },
  alone: { en: "On your own", es: "Solo para ti" },
  data: { en: "Your data", es: "Tus datos" },
};

export const TOPIC_PAGES = TOPICS.flatMap((one) => Object.values(TOPIC_PATH[one]));
