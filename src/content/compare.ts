import type { Locale } from "../site";

export const COMPARE_PATH: Record<Locale, string> = { en: "compare", es: "comparar" };

export function compares(product: string | null): boolean {
  return product === "tisty";
}

type Comparison = {
  title: string;
  heading: string;
  short: string;
  meta: string;
  lede: string;
  checked: string;
  rows: { label: string; cells: string[] }[];
  stronger: { title: string; lede: string; items: [string, string][] };
  sources: string;
  back: string;
};

export const RIVALS = [
  { name: "Tisty", url: "https://github.com/rgdevment/Tisty" },
  { name: "Obsidian", url: "https://obsidian.md" },
  { name: "Notion", url: "https://www.notion.com" },
  { name: "Todoist", url: "https://www.todoist.com" },
  { name: "Logseq", url: "https://github.com/logseq/logseq" },
];

export const SOURCES: [string, string[]][] = [
  [
    "Obsidian",
    [
      "https://obsidian.md/help/data-storage",
      "https://obsidian.md/pricing",
      "https://obsidian.md/privacy",
      "https://obsidian.md/license",
      "https://obsidian.md/mobile",
      "https://obsidian.md/help/sync/collaborate",
      "https://community.obsidian.md/",
    ],
  ],
  [
    "Notion",
    [
      "https://www.notion.com/help/use-pages-offline",
      "https://www.notion.com/trust/privacy-policy",
      "https://www.notion.com/help/guides/status-property-gives-clarity-on-tasks",
      "https://www.notion.com/pricing",
      "https://developers.notion.com/guides/mcp/get-started-with-mcp",
      "https://www.notion.com/mobile",
    ],
  ],
  [
    "Todoist",
    [
      "https://www.todoist.com/privacy",
      "https://www.todoist.com/help/todoist/features/view-completed-tasks-in-todoist-J19h2s",
      "https://www.todoist.com/pricing",
      "https://www.todoist.com/help/todoist/todoist-and-ai/connect-todoist-to-an-ai-assistant-xMSzFfHng",
      "https://www.todoist.com/downloads",
    ],
  ],
  [
    "Logseq",
    [
      "https://github.com/logseq/logseq",
      "https://github.com/logseq/docs/blob/master/db-version.md",
      "https://opencollective.com/logseq",
    ],
  ],
];

const EN: Comparison = {
  title: "Tisty vs Obsidian, Notion, Todoist and Logseq compared",
  heading: "Tisty compared with Obsidian, Notion, Todoist and Logseq",
  short: "Why Tisty?",
  meta: "Where your data lives, accounts, telemetry, tasks with notes, price and MCP: Tisty side by side with Obsidian, Notion, Todoist and Logseq, with sources.",
  lede: "Tisty keeps tasks and documents in one store and one search on your own disk, and a finished task keeps everything it gathered instead of disappearing. Here is how that compares, including where the others are stronger.",
  checked: "Checked on 8 November 2026 against each project's own pages, listed at the foot. Prices in US dollars, billed monthly unless said. These change, so go and look.",
  rows: [
    {
      label: "Where your data lives",
      cells: [
        "Your disk: documents as Markdown, tasks as a log you can read",
        "Your disk, as Markdown files",
        "Notion's cloud",
        "Todoist's cloud",
        "Your disk: Markdown files, or a SQLite database in the new DB version, in beta",
      ],
    },
    {
      label: "Account",
      cells: ["None", "None; only for the paid Sync and Publish", "Required", "Required", "Only for Sync and Publish"],
    },
    {
      label: "Telemetry",
      cells: [
        "None",
        "None, says its privacy policy",
        "Yes: usage data, cookies and third-party analytics",
        "Yes: third-party analytics, Google Analytics among them",
        "Usage and diagnostics reporting you can switch off in its settings",
      ],
    },
    {
      label: "Tasks and documents together",
      cells: [
        "Yes, one store and one search",
        "Checkboxes inside notes; a task manager only through plugins",
        "Yes, through task databases",
        "Tasks only; notes are a task's description and comments",
        "Yes, a task is a block in a page",
      ],
    },
    {
      label: "A finished task",
      cells: [
        "Goes to the archive whole, page, steps, journal and files, and search finds it",
        "A ticked checkbox in its note",
        "A row marked Complete; views or filters hide it",
        "Leaves the active list; the free plan shows 7 days of history",
        "Stays in place, marked Done",
      ],
    },
    {
      label: "Open source",
      cells: ["Yes, AGPL-3.0", "No", "No", "No", "Yes, AGPL-3.0"],
    },
    {
      label: "Price",
      cells: [
        "Free, no paid tier",
        "Free; Sync $5 and Publish $10 a month",
        "Free plan; Plus $10 per member a month",
        "Free plan; Pro $7 a month",
        "Free; Sync for its Open Collective backers",
      ],
    },
    {
      label: "MCP for assistants",
      cells: [
        "Built in, on your machine; it can never close or delete",
        "No official server",
        "Official, hosted by Notion",
        "Official, hosted by Todoist",
        "Built into the DB version, still in progress",
      ],
    },
    {
      label: "Phones",
      cells: ["No mobile app", "iOS and Android", "iOS and Android", "iPhone, iPad, Android and watches", "iOS"],
    },
    {
      label: "Working with others",
      cells: [
        "No live editing; one document shared by an encrypted link that expires",
        "No live editing; shared vaults through Sync",
        "Real-time editing",
        "Projects shared with up to 5 people",
        "Real-time editing in the DB version, in alpha",
      ],
    },
  ],
  stronger: {
    title: "Where the others are stronger",
    lede: "Each of them does something better than Tisty, and it is worth saying which.",
    items: [
      ["Obsidian", "A notebook with more than ten thousand community plugins, and apps for iOS and Android. If plugins are how you work, it is hard to beat."],
      ["Notion", "Real-time editing with a team and apps everywhere. If your documents are shared work, it is built for that, once you and your data have an account there."],
      ["Todoist", "Quicker at catching a task on the phone or the watch than anything on a desktop. When the task is done, though, what you worked out has nowhere to stay."],
      ["Logseq", "Open source like Tisty, an outliner built on linking blocks, and it runs on Linux."],
      ["Tisty", "Has no phone app and no Linux build, and nobody edits a document with you live."],
    ],
  },
  sources: "Sources",
  back: "Download Tisty",
};

const ES: Comparison = {
  title: "Tisty frente a Obsidian, Notion, Todoist y Logseq",
  heading: "Tisty frente a Obsidian, Notion, Todoist y Logseq",
  short: "¿Por qué Tisty?",
  meta: "Dónde viven tus datos, cuentas, telemetría, tareas y notas, precio y MCP: Tisty junto a Obsidian, Notion, Todoist y Logseq, con fuentes.",
  lede: "Tisty guarda tareas y documentos en un mismo lugar y una misma búsqueda, en tu propio disco, y una tarea terminada conserva todo lo que reunió en vez de desaparecer. Así se compara, incluido dónde los otros son más fuertes.",
  checked: "Revisado el 8 de noviembre de 2026 en las páginas de cada proyecto, enlazadas al pie. Precios en dólares estadounidenses, con pago mensual salvo que se diga. Esto cambia, así que conviene ir a mirar.",
  rows: [
    {
      label: "Dónde viven tus datos",
      cells: [
        "Tu disco: los documentos en Markdown, las tareas en un registro legible",
        "Tu disco, en archivos Markdown",
        "La nube de Notion",
        "La nube de Todoist",
        "Tu disco: archivos Markdown, o una base SQLite en la nueva versión DB, en beta",
      ],
    },
    {
      label: "Cuenta",
      cells: ["Ninguna", "Ninguna; solo para Sync y Publish, de pago", "Obligatoria", "Obligatoria", "Solo para Sync y Publish"],
    },
    {
      label: "Telemetría",
      cells: [
        "Ninguna",
        "Ninguna, según su política de privacidad",
        "Sí: datos de uso, cookies y analítica de terceros",
        "Sí: analítica de terceros, entre ellas Google Analytics",
        "Envío de uso y diagnósticos, que se apaga en sus ajustes",
      ],
    },
    {
      label: "Tareas y documentos juntos",
      cells: [
        "Sí, un solo lugar y una sola búsqueda",
        "Casillas dentro de las notas; un gestor de tareas solo con plugins",
        "Sí, con bases de datos de tareas",
        "Solo tareas; las notas son la descripción y los comentarios de una tarea",
        "Sí, una tarea es un bloque dentro de una página",
      ],
    },
    {
      label: "Una tarea terminada",
      cells: [
        "Pasa entera al archivo, con página, pasos, bitácora y archivos, y la búsqueda la encuentra",
        "Una casilla marcada en su nota",
        "Una fila marcada como Complete; las vistas o filtros la ocultan",
        "Sale de la lista activa; el plan gratuito muestra 7 días de historial",
        "Se queda donde estaba, marcada como Done",
      ],
    },
    {
      label: "Código abierto",
      cells: ["Sí, AGPL-3.0", "No", "No", "No", "Sí, AGPL-3.0"],
    },
    {
      label: "Precio",
      cells: [
        "Gratis, sin versión de pago",
        "Gratis; Sync USD 5 y Publish USD 10 al mes",
        "Plan gratuito; Plus USD 10 por miembro al mes",
        "Plan gratuito; Pro USD 7 al mes",
        "Gratis; Sync para quienes lo apoyan en Open Collective",
      ],
    },
    {
      label: "MCP para asistentes",
      cells: [
        "Incluido, en tu equipo; nunca puede cerrar ni borrar",
        "Sin servidor oficial",
        "Oficial, alojado por Notion",
        "Oficial, alojado por Todoist",
        "Incluido en la versión DB, todavía en desarrollo",
      ],
    },
    {
      label: "Teléfonos",
      cells: ["Sin app móvil", "iOS y Android", "iOS y Android", "iPhone, iPad, Android y relojes", "iOS"],
    },
    {
      label: "Trabajar con otros",
      cells: [
        "Sin edición en vivo; un documento compartido por un enlace cifrado que caduca",
        "Sin edición en vivo; bóvedas compartidas con Sync",
        "Edición en tiempo real",
        "Proyectos compartidos con hasta 5 personas",
        "Edición en tiempo real en la versión DB, en alfa",
      ],
    },
  ],
  stronger: {
    title: "Dónde los otros son más fuertes",
    lede: "Cada uno hace algo mejor que Tisty, y vale la pena decir qué.",
    items: [
      ["Obsidian", "Un cuaderno con más de diez mil plugins de la comunidad y apps para iOS y Android. Si trabajas a punta de plugins, cuesta superarlo."],
      ["Notion", "Edición en tiempo real con un equipo y apps en todas partes. Si tus documentos son trabajo compartido, está hecho para eso, una vez que tú y tus datos tienen cuenta ahí."],
      ["Todoist", "Más rápido para anotar una tarea en el teléfono o el reloj que cualquier cosa de escritorio. Pero cuando la tarea termina, lo que resolviste no tiene dónde quedarse."],
      ["Logseq", "De código abierto como Tisty, un esquematizador hecho para enlazar bloques, y funciona en Linux."],
      ["Tisty", "No tiene app para el teléfono ni versión para Linux, y nadie edita un documento contigo en vivo."],
    ],
  },
  sources: "Fuentes",
  back: "Descargar Tisty",
};

export function comparison(locale: Locale): Comparison {
  return locale === "es" ? ES : EN;
}
