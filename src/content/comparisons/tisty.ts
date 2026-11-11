import { type Comparison, type Words, no, part, soon, yes } from "./marks";

const RIVALS = [
  { name: "Tisty", url: "https://github.com/rgdevment/Tisty" },
  { name: "Notion", url: "https://www.notion.com" },
  { name: "Craft", url: "https://www.craft.do" },
  { name: "Todoist", url: "https://www.todoist.com" },
  { name: "Logseq", url: "https://github.com/logseq/logseq" },
  { name: "Obsidian", url: "https://obsidian.md" },
  { name: "Joplin", url: "https://joplinapp.org" },
];

const SOURCES: [string, string[]][] = [
  [
    "Notion",
    [
      "https://www.notion.com/help/search",
      "https://www.notion.com/security",
      "https://www.notion.com/help/use-pages-offline",
      "https://www.notion.com/trust/privacy-policy",
      "https://www.notion.com/help/sharing-and-permissions",
      "https://www.notion.com/releases/2021-12-23",
      "https://www.notion.com/product/ai/use-cases/translate-your-content",
      "https://developers.notion.com/guides/mcp/get-started-with-mcp",
      "https://www.notion.com/pricing",
      "https://www.notion.com/desktop",
      "https://www.notion.com/mobile",
    ],
  ],
  [
    "Craft",
    [
      "https://support.craft.do/en/plan-and-do/tasks/completing-and-editing-tasks",
      "https://support.craft.do/en/organize-and-find/search",
      "https://support.craft.do/en/account-and-subscription/data-and-security/data-storage",
      "https://support.craft.do/en/account-and-subscription/storage-and-recovery/external-locations",
      "https://support.craft.do/en/account-and-subscription/data-and-security/encryption",
      "https://support.craft.do/en/integrate/mcp",
      "https://support.craft.do/en/share-and-publish/publish",
      "https://support.craft.do/en/write-and-edit/mermaid-diagrams",
      "https://www.craft.do/privacy",
      "https://www.craft.do/pricing",
      "https://support.craft.do/en/introduction/platforms",
    ],
  ],
  [
    "Todoist",
    [
      "https://www.todoist.com/help/todoist/features/view-completed-tasks-in-todoist-J19h2s",
      "https://www.todoist.com/help/todoist/features/introduction-to-search-fAfiDSAp",
      "https://www.todoist.com/security",
      "https://www.todoist.com/help/account-and-billing/account/set-up-your-todoist-account-N6PSTd4CH",
      "https://www.todoist.com/privacy",
      "https://github.com/Doist/todoist-mcp",
      "https://www.todoist.com/help/todoist/features/collaborate-with-friends-or-family-in-todoist-tzkGUy",
      "https://www.todoist.com/pricing",
      "https://www.todoist.com/downloads",
    ],
  ],
  [
    "Logseq",
    [
      "https://github.com/logseq/docs/blob/master/db-version.md",
      "https://github.com/logseq/docs/blob/master/db-version-changes.md",
      "https://github.com/logseq/logseq",
      "https://github.com/logseq/og",
      "https://blog.logseq.com/privacy-policy/",
      "https://blog.logseq.com/how-to-setup-and-use-logseq-sync/",
      "https://discuss.logseq.com/t/how-to-sync-your-logseq-graph-across-devices/8462",
      "https://github.com/logseq/logseq/releases",
    ],
  ],
  [
    "Obsidian",
    [
      "https://obsidian.md/help/plugins/search",
      "https://obsidian.md/help/sync-notes",
      "https://obsidian.md/pricing",
      "https://obsidian.md/privacy",
      "https://obsidian.md/help/sync/security",
      "https://obsidian.md/help/cli",
      "https://obsidian.md/help/publish/security",
      "https://obsidian.md/help/plugins/canvas",
      "https://obsidian.md/help/advanced-syntax",
      "https://obsidian.md/license",
      "https://obsidian.md/download",
    ],
  ],
  [
    "Joplin",
    [
      "https://joplinapp.org/help/apps/to-dos/",
      "https://joplinapp.org/help/apps/search/",
      "https://joplinapp.org/help/faq/",
      "https://joplinapp.org/help/apps/sync/",
      "https://joplinapp.org/help/apps/sync/e2ee/",
      "https://joplinapp.org/privacy/",
      "https://joplinapp.org/help/dev/spec/ai_mcp/",
      "https://joplinapp.org/news/20260831-release-3-7/",
      "https://joplinapp.org/news/20210513-095238/",
      "https://joplinapp.org/help/apps/whiteboard/",
      "https://joplinapp.org/help/apps/markdown/",
      "https://github.com/laurent22/joplin/blob/dev/LICENSE",
      "https://joplinapp.org/plans/",
      "https://joplinapp.org/download/",
    ],
  ],
];

const EN: Words = {
  title: "Tisty vs Notion, Obsidian, Todoist: notes, tasks, AI memory",
  heading: "How Tisty differs from Notion, Craft, Todoist, Logseq, Obsidian and Joplin",
  short: "How Tisty differs",
  meta: "Local notes, tasks and AI agent memory, compared with Notion, Obsidian, Todoist, Logseq, Craft and Joplin: what Tisty does that they do not, with sources.",
  lede: "A finished task is kept, not ticked off. Tisty keeps tasks and documents in one store and one search on your own disk, and a finished task goes to the archive whole, with everything it gathered. Private and secure from the start: no account, no telemetry, and what leaves your disk can go end-to-end encrypted. And it is the local memory and context of your AI agent, over MCP. Here is what it does that the apps you may already know do not, and where they are stronger.",
  only: "{only} of these {total} only Tisty does in full",
  checked: "Checked on 8 November 2026 against each project's own pages, listed at the foot. A no means its own pages do not offer it. These change, so go and look.",
  marks: { yes: "Yes", part: "Partly", no: "No", soon: "Soon" },
  rows: [
    {
      label: "A finished task kept whole",
      cells: [
        yes("To the archive with its page, steps, parts, journal and files, and search finds it"),
        part("Marked done in place"),
        part("To the Logbook, out of search"),
        part("Hidden; search finds it"),
        part("Marked done in place"),
        part("A ticked box in its note"),
        part("Hidden in its notebook"),
      ],
    },
    {
      label: "One document in several languages",
      cells: [yes("One switch, and Translate into… writes the copy"), no("AI translates a copy"), no(), no(), no(), no(), no()],
    },
    {
      label: "Share a document by an encrypted link that expires on its own",
      cells: [
        yes("With Folio by Tisty: no accounts, private, gone after up to 15 days without use"),
        part("Links can expire; not end-to-end encrypted"),
        part("Links can expire; not end-to-end encrypted"),
        no(),
        no(),
        no(),
        no("Shared notes are not encrypted"),
      ],
    },
    {
      label: "Diagrams drawn by hand, saved as Mermaid text",
      cells: [
        yes("Mind maps, database schemas, freeform and class diagrams"),
        part("Mermaid as code"),
        part("Mermaid as code"),
        no(),
        no("Mermaid only with a plugin"),
        part("Mermaid as code; Canvas saves JSON"),
        part("Mermaid as code; the whiteboard saves JSON"),
      ],
    },
    {
      label: "An assistant (MCP) on your machine that cannot delete",
      cells: [
        yes("Built in, with no network; it never closes or deletes a task, or deletes a document"),
        part("Hosted by Notion"),
        part("Hosted by Craft"),
        part("Hosted by Todoist"),
        part("Local in the DB beta"),
        no("No official server"),
        part("Local; it can move notes to the trash"),
      ],
    },
    {
      label: "Free, with no paid tier",
      own: "pricing",
      cells: [yes(), no("Paid plans"), no("Paid plans"), no("Paid plans"), no("Sync is paid"), no("Sync and Publish are paid"), no("Joplin Cloud is paid")],
    },
    {
      label: "Tasks and documents in one search",
      cells: [yes("The archive included"), yes(), part("Not the Inbox tasks"), part("Tasks only"), yes(), yes(), yes()],
    },
    {
      label: "Sync through your own cloud, with no server of theirs",
      cells: [
        yes("Google Drive, OneDrive or WebDAV, end-to-end encrypted if you want, or any folder"),
        no(),
        part("A folder on macOS, not advised across devices"),
        no(),
        part("Any synced folder, in the file-based app"),
        yes("Any synced folder"),
        yes("OneDrive, Dropbox, WebDAV or S3"),
      ],
    },
    {
      label: "End-to-end encryption with a key only you hold",
      cells: [yes("Optional, with a 24-word phrase"), no(), no(), no(), part("With paid Sync"), part("With paid Sync"), yes()],
    },
    {
      label: "Your data as files you read without the app",
      cells: [
        yes("Markdown and a log you can read"),
        no(),
        no(),
        no(),
        part("Markdown in the file-based app; a database in DB"),
        yes("Markdown"),
        no("A database; Markdown on export"),
      ],
    },
    {
      label: "No account",
      cells: [yes(), no(), no(), no(), yes("Only Sync and Publish ask for one"), yes("Only Sync and Publish ask for one"), yes()],
    },
    {
      label: "No telemetry",
      cells: [
        yes("It only checks for a new version, sending nothing"),
        no(),
        no(),
        no("Google Analytics among others"),
        no("Usage data, which can be turned off"),
        yes(),
        yes("Nothing without your consent"),
      ],
    },
    {
      label: "Open source",
      cells: [yes("AGPL-3.0-only"), no(), no(), no(), yes("AGPL-3.0"), no(), yes("AGPL-3.0")],
    },
    {
      label: "Phone apps",
      cells: [soon(), yes(), yes(), yes(), yes(), yes(), yes()],
    },
    {
      label: "Linux",
      cells: [no(), no(), no(), yes(), yes(), yes(), yes()],
    },
  ],
  stronger: {
    title: "Where the others are stronger",
    lede: "Each of them does something better than Tisty, and it is worth saying which: the free ones that keep your notes on your disk first, then the ones with paid plans that keep them in their cloud.",
    groups: [
      {
        title: "Free, on your disk",
        label: "What it does better than Tisty",
        items: [
          { name: "Logseq", facts: ["Open source · AGPL-3.0", "Free", "On your disk", "Windows, macOS, Linux, iOS"], text: "An outliner built on linking blocks, and it runs on Linux and on phones." },
          { name: "Joplin", facts: ["Open source · AGPL-3.0", "Free", "On your disk", "Windows, macOS, Linux, Android, iOS"], text: "On every system, Linux, phones and the terminal included, with end-to-end encrypted sync to a cloud you choose." },
          { name: "Obsidian", facts: ["Closed source", "Free for personal use", "On your disk", "Windows, macOS, Linux, iOS, Android"], text: "A notebook with thousands of community plugins, and apps for Linux, iOS and Android. If plugins are how you work, it is hard to beat." },
        ],
      },
      {
        title: "Paid plans, in their cloud",
        label: "What it does better than Tisty",
        items: [
          { name: "Notion", facts: ["Closed source", "Freemium", "Their servers, with an account", "Every platform"], text: "Real-time editing with a team, and apps for phones and the web. If your documents are shared work, it is built for that, once you and your data have an account there." },
          { name: "Todoist", facts: ["Closed source", "Freemium", "Their servers, with an account", "Every platform"], text: "Quicker at catching a task on the phone than anything on a desktop, on every system, Linux and the web included. When the task is done, though, what you worked out has nowhere to stay." },
          { name: "Craft", facts: ["Closed source", "Freemium", "Their cloud", "macOS, iOS, Windows, Android, web"], text: "Polished documents on Mac, Windows, iPhone, iPad, Android and the web, and pages you publish with a password and an end date." },
        ],
      },
      {
        title: "And where Tisty falls short",
        label: "What it lacks",
        items: [
          { name: "Tisty", facts: ["Open source · AGPL-3.0", "Free, no paid tier", "On your disk, no account", "Windows, macOS"], text: "Has no phone app and no Linux build, nobody edits a document with you live, and tasks from another app have to be typed again." },
        ],
      },
    ],
  },
  agent: {
    title: "Memory and context for your AI agent, over MCP",
    body: [
      "Tisty has no AI inside, on purpose: it is the memory and context of the assistant you already use. GitHub Copilot, Claude Code, Codex or Cursor connect over its local MCP server, with no account and nothing sent over the network.",
      "An AI agent is stateless: it forgets the moment the session ends. With Tisty it asks what changed since last time, opens the task it was on with its ticked steps and dated journal, and reads a long document by its outline and one section instead of the whole file. On a 256 KB Markdown log, picking up the work costs about 99% less than rereading it.",
      "What it learns stays written down for next time, on your disk, where you can follow and audit it, and closing a task is always yours.",
    ],
    link: { label: "Give your AI coding agent memory that lasts between sessions", url: "https://rgdevment.dev/guides/ai-agent-memory-between-sessions/" },
  },
  faq: {
    title: "Questions about Tisty and AI agents",
    items: [
      { q: "Is Tisty a memory for AI coding agents?", a: "Yes. Tisty is a local app for notes, documents and tasks whose built-in MCP server gives GitHub Copilot, Claude Code, Codex or Cursor memory and context between sessions: the agent asks what changed, reads a long document by its outline and one section, and files its work as tasks you review and close." },
      { q: "Does Tisty have AI built in?", a: "No, and it sends nothing to a model. It is the memory of the assistant you already use, over MCP on your own machine; what that assistant reads goes wherever that assistant goes, so pair it with one you trust." },
      { q: "Which AI assistants work with Tisty?", a: "Any assistant that speaks MCP. GitHub Copilot in VS Code, Claude Code, Codex, Cursor and Gemini CLI connect with one line, and Settings › Assistants in Tisty connects the ones it finds on your computer." },
      { q: "Does it replace CLAUDE.md, AGENTS.md or a memory-bank folder?", a: "It sits beside them. Instructions that rarely change stay in your repository; progress, decisions, what was ruled out and what is left go in Tisty, dated, searchable and read a section at a time." },
    ],
  },
  sources: "Sources",
  back: "Download Tisty",
};

const ES: Words = {
  title: "Tisty vs Notion, Obsidian y Todoist: notas, tareas e IA",
  heading: "En qué se diferencia Tisty de Notion, Craft, Todoist, Logseq, Obsidian y Joplin",
  short: "En qué se diferencia Tisty",
  meta: "Notas, tareas y memoria local para tu agente de IA, frente a Notion, Obsidian, Todoist, Logseq, Craft y Joplin: lo que Tisty hace y ellas no, con fuentes.",
  lede: "Una tarea terminada se guarda, no se tacha. Tisty guarda tareas y documentos en un mismo lugar y una misma búsqueda, en tu propio disco, y una tarea terminada pasa entera al archivo, con todo lo que reunió. Privado y seguro desde el principio: sin cuenta, sin telemetría, y lo que sale de tu disco puede ir cifrado de extremo a extremo. Y es la memoria y el contexto locales de tu agente de IA, por MCP. Aquí está lo que hace y que las apps que quizá ya conoces no hacen, y dónde ellas son más fuertes.",
  only: "{only} de estas {total} solo Tisty las hace por completo",
  checked: "Revisado el 8 de noviembre de 2026 en las páginas de cada proyecto, enlazadas al pie. Un no quiere decir que sus propias páginas no lo ofrecen. Esto cambia, así que conviene ir a mirar.",
  marks: { yes: "Sí", part: "En parte", no: "No", soon: "Pronto" },
  rows: [
    {
      label: "Una tarea terminada se guarda entera",
      cells: [
        yes("Al archivo con su página, pasos, partes, bitácora y archivos, y la búsqueda la encuentra"),
        part("Se marca hecha donde está"),
        part("Al Logbook, fuera de la búsqueda"),
        part("Se oculta; la búsqueda la encuentra"),
        part("Se marca hecha donde está"),
        part("Una casilla marcada en su nota"),
        part("Se oculta en su libreta"),
      ],
    },
    {
      label: "Un documento en varios idiomas",
      cells: [yes("Un selector, y Traducir a… escribe la copia"), no("La IA traduce una copia"), no(), no(), no(), no(), no()],
    },
    {
      label: "Compartir un documento con un enlace cifrado que caduca solo",
      cells: [
        yes("Con Folio by Tisty: sin cuentas, privado, se borra tras hasta 15 días sin uso"),
        part("El enlace puede caducar; sin cifrado de extremo a extremo"),
        part("El enlace puede caducar; sin cifrado de extremo a extremo"),
        no(),
        no(),
        no(),
        no("Las notas compartidas no van cifradas"),
      ],
    },
    {
      label: "Diagramas dibujados a mano, guardados como texto Mermaid",
      cells: [
        yes("Mapas mentales, esquemas de base de datos, diagramas libres y de clases"),
        part("Mermaid como código"),
        part("Mermaid como código"),
        no(),
        no("Mermaid solo con un plugin"),
        part("Mermaid como código; Canvas guarda JSON"),
        part("Mermaid como código; la pizarra guarda JSON"),
      ],
    },
    {
      label: "Un asistente (MCP) en tu equipo que no puede borrar",
      cells: [
        yes("Incluido y sin red; nunca cierra ni borra una tarea, ni borra un documento"),
        part("Alojado por Notion"),
        part("Alojado por Craft"),
        part("Alojado por Todoist"),
        part("Local en la beta DB"),
        no("Sin servidor oficial"),
        part("Local; puede mandar notas a la papelera"),
      ],
    },
    {
      label: "Gratis, sin versión de pago",
      own: "precios",
      cells: [yes(), no("Planes de pago"), no("Planes de pago"), no("Planes de pago"), no("Sync es de pago"), no("Sync y Publish son de pago"), no("Joplin Cloud es de pago")],
    },
    {
      label: "Tareas y documentos en una sola búsqueda",
      cells: [yes("Con el archivo incluido"), yes(), part("Sin las tareas del Inbox"), part("Solo tareas"), yes(), yes(), yes()],
    },
    {
      label: "Sincronizar por tu propia nube, sin servidor de ellos",
      cells: [
        yes("Google Drive, OneDrive o WebDAV, cifrado de extremo a extremo si quieres, o cualquier carpeta"),
        no(),
        part("Una carpeta en macOS, no recomendada entre equipos"),
        no(),
        part("Cualquier carpeta sincronizada, en la app de archivos"),
        yes("Cualquier carpeta sincronizada"),
        yes("OneDrive, Dropbox, WebDAV o S3"),
      ],
    },
    {
      label: "Cifrado de extremo a extremo con una llave que solo tú tienes",
      cells: [yes("Opcional, con una frase de 24 palabras"), no(), no(), no(), part("Con Sync, de pago"), part("Con Sync, de pago"), yes()],
    },
    {
      label: "Tus datos en archivos que se leen sin la app",
      cells: [
        yes("Markdown y un registro legible"),
        no(),
        no(),
        no(),
        part("Markdown en la app de archivos; una base de datos en DB"),
        yes("Markdown"),
        no("Una base de datos; Markdown al exportar"),
      ],
    },
    {
      label: "Sin cuenta",
      cells: [yes(), no(), no(), no(), yes("Solo la piden Sync y Publish"), yes("Solo la piden Sync y Publish"), yes()],
    },
    {
      label: "Sin telemetría",
      cells: [
        yes("Solo busca si hay versión nueva, sin enviar nada"),
        no(),
        no(),
        no("Google Analytics, entre otros"),
        no("Datos de uso, que se pueden apagar"),
        yes(),
        yes("Nada sin tu permiso"),
      ],
    },
    {
      label: "Código abierto",
      cells: [yes("AGPL-3.0-only"), no(), no(), no(), yes("AGPL-3.0"), no(), yes("AGPL-3.0")],
    },
    {
      label: "Apps para el teléfono",
      cells: [soon(), yes(), yes(), yes(), yes(), yes(), yes()],
    },
    {
      label: "Linux",
      cells: [no(), no(), no(), yes(), yes(), yes(), yes()],
    },
  ],
  stronger: {
    title: "Dónde los otros son más fuertes",
    lede: "Cada uno hace algo mejor que Tisty, y vale la pena decir qué: primero los gratuitos que guardan tus notas en tu disco, después los que tienen planes de pago y las guardan en su nube.",
    groups: [
      {
        title: "Gratis y en tu disco",
        label: "Lo que hace mejor que Tisty",
        items: [
          { name: "Logseq", facts: ["Código abierto · AGPL-3.0", "Gratis", "En tu disco", "Windows, macOS, Linux, iOS"], text: "Un esquematizador hecho para enlazar bloques, y funciona en Linux y en el teléfono." },
          { name: "Joplin", facts: ["Código abierto · AGPL-3.0", "Gratis", "En tu disco", "Windows, macOS, Linux, Android, iOS"], text: "En todos los sistemas, Linux, el teléfono y la terminal incluidos, con sincronización cifrada de extremo a extremo a la nube que elijas." },
          { name: "Obsidian", facts: ["Código cerrado", "Gratis para uso personal", "En tu disco", "Windows, macOS, Linux, iOS, Android"], text: "Un cuaderno con miles de plugins de la comunidad y apps para Linux, iOS y Android. Si trabajas a punta de plugins, cuesta superarlo." },
        ],
      },
      {
        title: "Con planes de pago y en su nube",
        label: "Lo que hace mejor que Tisty",
        items: [
          { name: "Notion", facts: ["Código cerrado", "Freemium", "En sus servidores, con cuenta", "Todas las plataformas"], text: "Edición en tiempo real con un equipo, y apps para el teléfono y la web. Si tus documentos son trabajo compartido, está hecho para eso, una vez que tú y tus datos tienen cuenta ahí." },
          { name: "Todoist", facts: ["Código cerrado", "Freemium", "En sus servidores, con cuenta", "Todas las plataformas"], text: "Más rápido para anotar una tarea en el teléfono que cualquier cosa de escritorio, en todos los sistemas, Linux y la web incluidos. Pero cuando la tarea termina, lo que resolviste no tiene dónde quedarse." },
          { name: "Craft", facts: ["Código cerrado", "Freemium", "En su nube", "macOS, iOS, Windows, Android, web"], text: "Documentos muy cuidados en Mac, Windows, iPhone, iPad, Android y la web, y páginas que publicas con contraseña y fecha de término." },
        ],
      },
      {
        title: "Y donde Tisty se queda corto",
        label: "Lo que le falta",
        items: [
          { name: "Tisty", facts: ["Código abierto · AGPL-3.0", "Gratis, sin versión de pago", "En tu disco, sin cuenta", "Windows, macOS"], text: "No tiene app para el teléfono ni versión para Linux, nadie edita un documento contigo en vivo, y las tareas de otra app hay que escribirlas de nuevo." },
        ],
      },
    ],
  },
  agent: {
    title: "Memoria y contexto para tu agente de IA, por MCP",
    body: [
      "Tisty no trae IA dentro, a propósito: es la memoria y el contexto del asistente que ya usas. GitHub Copilot, Claude Code, Codex o Cursor se conectan por su servidor MCP local, sin cuenta y sin enviar nada por la red.",
      "Un agente de IA no guarda estado: olvida en cuanto termina la sesión. Con Tisty pregunta qué cambió desde la última vez, abre la tarea en la que estaba con sus pasos marcados y su bitácora con fechas, y lee un documento largo por su índice y una sección en vez del archivo entero. Sobre una bitácora de 256 KB en Markdown, retomar el trabajo cuesta cerca de un 99 % menos que releerla.",
      "Lo que aprende queda escrito para la próxima vez, en tu disco, donde puedes seguirlo y revisarlo, y cerrar una tarea siempre es tuyo.",
    ],
    link: { label: "Dale a tu agente de IA una memoria que dure entre sesiones", url: "https://rgdevment.dev/es/guias/memoria-para-tu-agente-de-ia-entre-sesiones/" },
  },
  faq: {
    title: "Preguntas sobre Tisty y los agentes de IA",
    items: [
      { q: "¿Tisty sirve como memoria para agentes de IA de programación?", a: "Sí. Tisty es una app local de notas, documentos y tareas cuyo servidor MCP integrado les da a GitHub Copilot, Claude Code, Codex o Cursor memoria y contexto entre sesiones: el agente pregunta qué cambió, lee un documento largo por su índice y una sección, y anota su trabajo como tareas que tú revisas y cierras." },
      { q: "¿Tisty trae IA integrada?", a: "No, y no le envía nada a ningún modelo. Es la memoria del asistente que ya usas, por MCP y en tu propio equipo; lo que ese asistente lee va adonde va ese asistente, así que úsalo con uno en el que confíes." },
      { q: "¿Qué asistentes de IA funcionan con Tisty?", a: "Cualquiera que hable MCP. GitHub Copilot en VS Code, Claude Code, Codex, Cursor y Gemini CLI se conectan con una línea, y Configuración › Asistentes en Tisty conecta los que encuentra en tu equipo." },
      { q: "¿Reemplaza a CLAUDE.md, AGENTS.md o una carpeta memory-bank?", a: "Va al lado. Las instrucciones que casi no cambian siguen en tu repositorio; el avance, las decisiones, lo descartado y lo que falta van en Tisty, con fecha, buscables y leídos una sección a la vez." },
    ],
  },
  sources: "Fuentes",
  back: "Descargar Tisty",
};

export const TISTY: Comparison = { rivals: RIVALS, sources: SOURCES, en: EN, es: ES };
