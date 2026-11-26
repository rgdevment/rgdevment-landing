import type { Locale } from "../site";
import { COMPARE_PATH, comparisonOf } from "./compare";

export interface VersusCopy {
  title: string;
  heading: string;
  short: string;
  meta: string;
  lede: string;
  chooseOwn: { title: string; points: string[] };
  chooseRival: { title: string; points: string[] };
  faq: { q: string; a: string }[];
}

export interface Versus {
  product: string;
  slug: string;
  rivalName: string;
  en: VersusCopy;
  es: VersusCopy;
}

export const VERSUS: Versus[] = [
  {
    product: "tisty",
    slug: "obsidian",
    rivalName: "Obsidian",
    en: {
      title: "Tisty vs Obsidian: local Markdown, tasks and AI MCP memory",
      heading: "Tisty vs Obsidian",
      short: "Tisty vs Obsidian",
      meta: "Honest cell-by-cell comparison of Tisty and Obsidian: local Markdown files, built-in task management, MCP AI agent memory, pricing and open source licence.",
      lede: "Both keep your notes as plain Markdown files on your own disk without forcing a cloud account. They diverge on what comes built in: Obsidian is an extensible personal knowledge vault driven by community plugins, while Tisty pairs documents with a full task workflow, hand-drawn Mermaid diagrams and a built-in local MCP server for AI agents — free and open source under AGPL-3.0.",
      chooseOwn: {
        title: "Choose Tisty if…",
        points: [
          "You want tasks and documents in one local store where finished tasks keep their full journal, checklist and files in a searchable archive.",
          "You want Claude Code, Cursor, Gemini CLI or VS Code to read and write a shared local memory over a built-in MCP server that never deletes your work.",
          "You want hand-drawn mind maps, database schemas and class diagrams stored as plain Mermaid text rather than separate JSON canvas files.",
          "You prefer open source software (AGPL-3.0) that is completely free with no paid Sync or Publish tiers.",
        ],
      },
      chooseRival: {
        title: "Choose Obsidian if…",
        points: [
          "You rely on a massive plugin ecosystem, Dataview queries or custom themes tailored to a personal wiki.",
          "You need Linux, iOS or Android apps today (Tisty currently targets Windows and macOS).",
          "You prefer an official hosted publishing service (Obsidian Publish) or first-party mobile sync out of the box.",
        ],
      },
      faq: [
        {
          q: "Can Tisty and Obsidian read the same Markdown files?",
          a: "Yes. Both store regular UTF-8 Markdown files on your disk, so documents written in Tisty remain readable in Obsidian or any plain text editor.",
        },
        {
          q: "Does Obsidian have an official built-in MCP server like Tisty?",
          a: "Obsidian ships a CLI and community plugins for AI integrations, but does not include an official built-in MCP server with guardrails preventing an agent from closing tasks or deleting notes. Tisty ships its local MCP server inside the app.",
        },
        {
          q: "Is Tisty completely free with no paid add-ons?",
          a: "Yes. Tisty is free and open source under AGPL-3.0 with no paid tier, no paid Sync or Publish add-ons, and no account required.",
        },
      ],
    },
    es: {
      title: "Tisty vs Obsidian: Markdown local, tareas y memoria MCP",
      heading: "Tisty frente a Obsidian",
      short: "Tisty vs Obsidian",
      meta: "Comparativa directa entre Tisty y Obsidian: archivos Markdown locales, gestión de tareas integrada, servidor MCP para agentes de IA, licencia libre y precios.",
      lede: "Ambas guardan tus notas como archivos Markdown reales en tu disco sin exigir cuenta en la nube. Se diferencian en lo que viene integrado: Obsidian es una bóveda extensible basada en plugins de la comunidad, mientras que Tisty une documentos con gestión completa de tareas, diagramas Mermaid dibujados y un servidor MCP local integrado para agentes de IA, gratis y de código abierto bajo AGPL-3.0.",
      chooseOwn: {
        title: "Elige Tisty si…",
        points: [
          "Quieres tareas y documentos en el mismo espacio local, donde cada tarea terminada conserva su historial, pasos y archivos en un archivo buscable.",
          "Usas Claude Code, Cursor, Gemini CLI o VS Code y quieres memoria compartida local por MCP integrado sin que el agente pueda borrar nada.",
          "Necesitas mapas mentales, esquemas de base de datos o diagramas de clases guardados como texto Mermaid puro y no en JSON.",
          "Prefieres software libre (AGPL-3.0) completamente gratis, sin planes de pago por sincronización ni publicación.",
        ],
      },
      chooseRival: {
        title: "Elige Obsidian si…",
        points: [
          "Dependes de su enorme ecosistema de plugins, consultas Dataview o temas avanzados para una wiki personal.",
          "Necesitas hoy mismo apps para Linux, iOS o Android (Tisty funciona en Windows y macOS).",
          "Prefieres pagar por un servicio gestionado de publicación web (Obsidian Publish) o sincronización móvil oficial.",
        ],
      },
      faq: [
        {
          q: "¿Pueden Tisty y Obsidian leer los mismos archivos Markdown?",
          a: "Sí. Ambas trabajan con archivos Markdown corrientes en tu disco, así que tus documentos de Tisty siguen siendo legibles en Obsidian o cualquier editor de texto.",
        },
        {
          q: "¿Obsidian incluye servidor MCP oficial como Tisty?",
          a: "Obsidian ofrece CLI y plugins comunitarios, pero no un servidor MCP oficial integrado con límites de seguridad que impidan al agente cerrar tareas o borrar documentos. En Tisty el servidor MCP local viene dentro de la app.",
        },
        {
          q: "¿Tisty es gratis incluso en el trabajo?",
          a: "Sí. Tisty es gratis y de código abierto bajo AGPL-3.0, sin planes de pago ni funciones bloqueadas.",
        },
      ],
    },
  },
  {
    product: "linkunbound",
    slug: "velja",
    rivalName: "Velja",
    en: {
      title: "LinkUnbound vs Velja: browser picker for Windows and macOS",
      heading: "LinkUnbound vs Velja",
      short: "LinkUnbound vs Velja",
      meta: "Side-by-side comparison of LinkUnbound and Velja: Windows and macOS support, open source GPL-3.0 licence, source-app rules, SafeLinks unwrapping and Chromium profiles.",
      lede: "Both apps intercept clicks so you can choose a browser or apply automatic routing rules by website and source app. The biggest split is platform and openness: Velja is a polished macOS-only closed-source app (requiring macOS 26+), whereas LinkUnbound runs on both Windows 10/11 and macOS 13+, is free and open source under GPL-3.0, and requires no account or telemetry.",
      chooseOwn: {
        title: "Choose LinkUnbound if…",
        points: [
          "You work on Windows 10/11, or switch between a Windows PC and a Mac and want the same browser picker and rules on both.",
          "You run macOS 13, 14 or 15 and cannot install macOS 26 required by recent Velja releases.",
          "You want open source software (GPL-3.0) whose code you can audit before making it your default browser.",
          "You want a free cursor-side picker driven by number keys 1 to 9 (with no paid tier) and source-app rules across both Windows and macOS.",
        ],
      },
      chooseRival: {
        title: "Choose Velja if…",
        points: [
          "You only use macOS 26 or newer and want deep macOS-native integrations such as Shortcuts actions and menu bar utilities.",
          "You rely on Velja's native support for routing directly into desktop web apps (like Figma or Zoom) alongside browsers.",
          "You do not need Windows support or open source code.",
        ],
      },
      faq: [
        {
          q: "Is Velja available for Windows?",
          a: "No. Velja is macOS-only and currently requires macOS 26 or later. LinkUnbound works on both Windows 10/11 and macOS 13 or later.",
        },
        {
          q: "Do both LinkUnbound and Velja route links by the app they came from?",
          a: "Yes. Both let you match the source application (such as Slack, Teams or Outlook) as well as the website address and browser profile.",
        },
        {
          q: "Does LinkUnbound unwrap Microsoft SafeLinks automatically?",
          a: "Yes. LinkUnbound extracts the real destination URL from Microsoft SafeLinks before evaluating your rules or showing the picker, all locally on your machine.",
        },
      ],
    },
    es: {
      title: "LinkUnbound vs Velja: selector de navegador Windows y macOS",
      heading: "LinkUnbound frente a Velja",
      short: "LinkUnbound vs Velja",
      meta: "Comparativa directa entre LinkUnbound y Velja: soporte para Windows y macOS, código abierto GPL-3.0, reglas por app origen, SafeLinks y perfiles de navegador.",
      lede: "Ambas apps interceptan los enlaces para elegir navegador o aplicar reglas automáticas según el sitio y la app de origen. La mayor diferencia está en plataforma y apertura: Velja es solo para macOS (versión 26+) y de código cerrado, mientras que LinkUnbound funciona en Windows 10/11 y macOS 13+, es gratis y de código abierto bajo GPL-3.0, sin cuenta ni telemetría.",
      chooseOwn: {
        title: "Elige LinkUnbound si…",
        points: [
          "Trabajas en Windows 10/11 o alternas entre Windows y Mac y quieres el mismo selector y reglas en ambos equipos.",
          "Usas macOS 13, 14 o 15 y no puedes instalar macOS 26 como piden las versiones recientes de Velja.",
          "Prefieres software libre (GPL-3.0) cuyo código cualquiera puede revisar antes de ponerlo como navegador predeterminado.",
          "Quieres un selector gratis junto al cursor controlado con las teclas 1 a 9 (sin plan de pago) y reglas por app de origen en Windows y macOS.",
        ],
      },
      chooseRival: {
        title: "Elige Velja si…",
        points: [
          "Solo usas macOS 26 o posterior y valoras integraciones exclusivas de macOS como Atajos (Shortcuts) y barra de menús.",
          "Necesitas abrir enlaces directamente en apps nativas de macOS además de navegadores.",
          "No necesitas soporte para Windows ni código abierto.",
        ],
      },
      faq: [
        {
          q: "¿Existe Velja para Windows?",
          a: "No. Velja es exclusivo de macOS (actualmente requiere macOS 26 o posterior). LinkUnbound funciona en Windows 10/11 y macOS 13 o posterior.",
        },
        {
          q: "¿Ambas permiten crear reglas según la app donde hiciste clic?",
          a: "Sí. Tanto LinkUnbound como Velja pueden enrutar enlaces según la aplicación de origen (por ejemplo Teams, Slack u Outlook), el dominio y el perfil de navegador.",
        },
        {
          q: "¿LinkUnbound limpia los enlaces SafeLinks de Microsoft 365?",
          a: "Sí. Extrae la URL real de SafeLinks en tu propio equipo antes de aplicar tus reglas o mostrar el selector.",
        },
      ],
    },
  },
];

export function versusOf(product: string | null): Versus[] {
  return product ? VERSUS.filter((one) => one.product === product) : [];
}

export function versusEntry(product: string | null, slug: string): Versus | null {
  return versusOf(product).find((one) => one.slug === slug) ?? null;
}

export function versusPath(locale: Locale, slug: string): string {
  return `${COMPARE_PATH[locale]}/${slug}`;
}

export function versusRows(versus: Versus, locale: Locale) {
  const compared = comparisonOf(versus.product);
  if (!compared) return null;
  const rivalIndex = compared.rivals.findIndex((one) => one.name === versus.rivalName);
  if (rivalIndex < 1) return null;
  const words = compared[locale];
  const rival = compared.rivals[rivalIndex];
  const rivalSources = compared.sources.find(([name]) => name === versus.rivalName)?.[1] ?? [];
  return {
    ownName: compared.rivals[0].name,
    rival,
    checked: words.checked,
    marks: words.marks,
    sourcesLabel: words.sources,
    back: words.back,
    rivalSources,
    rows: words.rows.map((row) => ({
      label: row.label,
      own: row.own,
      ownCell: row.cells[0],
      rivalCell: row.cells[rivalIndex],
    })),
  };
}
