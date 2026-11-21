import { AGENTS } from "./agents";
import { TOPIC_LABEL } from "./topics";
import type { Locale } from "../site";

export type Card = { title: string; body: string; page?: string; anchor?: string };

export type Door = { title: string; line: string; points: string[]; link: string };

export type HomeWords = {
  doors: { title: string; lede: string; agent: Door; alone: Door };
  best: string;
  data: { title: string; lede: string; points: string[]; free: string; link: string; policy: string };
  faqMore: string;
  more: { title: string; compare: string; news: string; docs: string; guides: string };
};

export type TopicWords = {
  title: string;
  meta: string;
  heading: string;
  lede: string;
  intro: string;
  others: string;
  guides: string;
};

export type AgentWords = TopicWords & {
  roles: { title: string; lede: string; you: { title: string; items: string[] }; agent: { title: string; items: string[] } };
  trust: { title: string; cards: Card[] };
  works: string;
};

export type AloneWords = TopicWords & {
  daily: { title: string; lede: string; cards: Card[] };
  screens: string;
  features: string;
};

export type DataWords = TopicWords & {
  keeps: { title: string; cards: Card[] };
  licence: { title: string; body: string; free: string; policy: string; source: string };
};

export const FREE: Record<Locale, string> = {
  en: "Yes, Tisty is free and will stay free, under the AGPL-3.0 licence. No accounts, no telemetry, and it keeps being developed and improved.",
  es: "Sí, Tisty es gratis y lo seguirá siendo, bajo la licencia AGPL-3.0. Sin cuentas ni telemetría, y en constante desarrollo y mejora.",
};

export const STORY: Record<Locale, string> = {
  en: "I started building Tisty to solve a problem of my own, and little by little I saw it was not only mine: everyone ran into it, and each solved it their own way.",
  es: "Comencé a desarrollar Tisty para resolver un problema personal, y fui viendo que ese problema no era solo mío: a todos les pasaba, y cada uno lo resolvía a su manera.",
};

export const SYMPTOM: Record<Locale, string> = {
  en: "You stop explaining. It stops starting over.",
  es: "Ni tú vuelves a explicar, ni él vuelve a empezar.",
};

export const HOME: Record<Locale, HomeWords> = {
  en: {
    doors: {
      title: "Two ways in, one memory",
      lede: `${STORY.en} So Tisty works with your agent, on your own, or both at once: it is the same Tisty, and nothing in it waits for an agent.`,
      agent: {
        title: TOPIC_LABEL.agent.en,
        line: SYMPTOM.en,
        points: [
          "It asks what moved and opens the task it was on, instead of rereading everything.",
          "It reads the outline and one section: about 3% of what rereading a 256 KB log costs.",
          "Everything it writes carries its name, and what it calls done waits for you under To confirm.",
          "It never closes or deletes. Deciding and closing stay yours.",
        ],
        link: "Tisty with your agent",
      },
      alone: {
        title: TOPIC_LABEL.alone.en,
        line: "Nothing to connect, nothing missing.",
        points: [
          "Type «call the bank at 3» and it is a task with its hour, read by rules on your machine, with no AI.",
          "One living document per subject, with tables, diagrams, formulas and its own PDF.",
          "Today, the week and a diary of one line a day keep your days in order.",
          "Brainsty shows everything you keep joined, so what you forgot comes back.",
        ],
        link: "Tisty on your own",
      },
    },
    best: "A closer look",
    data: {
      title: "Your data stays yours",
      lede: "Everything Tisty keeps is a file on your disk that opens without it.",
      points: ["On your disk, in Markdown", "No account", "No telemetry", "Your own cloud, encrypted if you want", "Open source, AGPL-3.0"],
      free: FREE.en,
      link: "Where your data lives",
      policy: "Privacy policy",
    },
    faqMore: "Every question, in the docs",
    more: { title: "Keep reading", compare: "How Tisty compares", news: "News", docs: "Documentation", guides: "Guides" },
  },
  es: {
    doors: {
      title: "Dos puertas, una sola memoria",
      lede: `${STORY.es} Por eso Tisty funciona con tu agente, solo para ti o de las dos formas a la vez: es el mismo Tisty, y nada en él espera a un agente.`,
      agent: {
        title: TOPIC_LABEL.agent.es,
        line: SYMPTOM.es,
        points: [
          "Pregunta qué cambió y abre la tarea en la que estaba, en vez de releerlo todo.",
          "Lee el índice y una sección: cerca de un 3 % de lo que cuesta releer una bitácora de 256 KB.",
          "Todo lo que escribe lleva su nombre, y lo que da por hecho te espera en Por confirmar.",
          "Nunca cierra ni borra. Decidir y cerrar siguen siendo tuyos.",
        ],
        link: "Tisty con tu agente",
      },
      alone: {
        title: TOPIC_LABEL.alone.es,
        line: "Nada que conectar, nada que falte.",
        points: [
          "Escribe «llamar al banco a las 3» y es una tarea con su hora, leída por reglas en tu equipo, sin IA.",
          "Un documento vivo por tema, con tablas, diagramas, fórmulas y su propio PDF.",
          "Hoy, la semana y un diario de una línea al día mantienen tus días en orden.",
          "Brainsty muestra todo lo que guardas unido, así lo que olvidaste vuelve.",
        ],
        link: "Tisty solo para ti",
      },
    },
    best: "Más de cerca",
    data: {
      title: "Tus datos son tuyos",
      lede: "Todo lo que guarda Tisty es un archivo en tu disco que se abre sin él.",
      points: ["En tu disco, en Markdown", "Sin cuenta", "Sin telemetría", "Tu propia nube, cifrada si quieres", "Código abierto, AGPL-3.0"],
      free: FREE.es,
      link: "Dónde viven tus datos",
      policy: "Política de privacidad",
    },
    faqMore: "Todas las preguntas, en la ayuda",
    more: { title: "Para seguir leyendo", compare: "Cómo se compara Tisty", news: "Noticias", docs: "Ayuda", guides: "Guías" },
  },
};

export const AGENT_PAGE: Record<Locale, AgentWords> = {
  en: {
    title: "Tisty with your AI agent: shared memory over MCP",
    meta: "Your agent picks up where it left off and reads one section, not everything. It works the detail; you decide and close. Local Markdown, over MCP.",
    heading: "Tisty with your AI agent",
    lede: SYMPTOM.en,
    intro:
      "Your AI agent knows the details better than anyone, and forgets them the moment the session ends. With Tisty it keeps them in your tasks and documents, where you read them too: it works the detail, and you see the whole.",
    roles: {
      title: "Two roles, one memory",
      lede: "Nothing closes without you. That is not a setting: it is how the tools your agent gets are built.",
      you: {
        title: "You",
        items: ["Decide what gets done and why", "See the whole and move between projects", "Pick up, read, review and confirm", "Close"],
      },
      agent: {
        title: "Your agent",
        items: [
          "Works the how and the detail",
          "Knows the task it is on in depth",
          "Notes what it tried and ruled out, ticks steps and says done",
          "Never closes or deletes",
        ],
      },
    },
    trust: {
      title: "What it writes, you can follow",
      cards: [
        { title: "Signed", body: "Everything it writes carries its name: inside a task it reads «by Claude Code» or «by Codex», and Settings › Assistants counts what each one wrote." },
        { title: "To confirm", body: "When it says a task is done, the task waits under To confirm, with its account in the journal, until you decide.", page: "mcp-permissions" },
        { title: "Your steps stay yours", body: "It cannot tick a step you wrote, finish a task of yours or move a day you set." },
      ],
    },
    works: `Settings › Assistants finds and connects ${AGENTS.en.all}.`,
    others: "The other ways in",
    guides: "Guides for working with an agent",
  },
  es: {
    title: "Tisty con tu agente de IA: memoria compartida por MCP",
    meta: "Tu agente retoma donde quedó y lee una sección, no todo. Él trabaja el detalle; tú decides y cierras. Markdown local, por MCP y gratis.",
    heading: "Tisty con tu agente de IA",
    lede: SYMPTOM.es,
    intro:
      "Tu agente de IA conoce el detalle mejor que nadie, y lo olvida en cuanto termina la sesión. Con Tisty lo guarda en tus tareas y documentos, donde tú también lo lees: él trabaja el detalle, y tú ves el conjunto.",
    roles: {
      title: "Dos papeles, una sola memoria",
      lede: "Nada se cierra sin ti. No es un ajuste: así están hechas las herramientas que recibe tu agente.",
      you: {
        title: "Tú",
        items: ["Decides qué se hace y por qué", "Ves el conjunto y te mueves entre proyectos", "Retomas, lees, revisas y confirmas", "Cierras"],
      },
      agent: {
        title: "Tu agente",
        items: [
          "Trabaja el cómo y el detalle",
          "Conoce a fondo la tarea en la que está",
          "Anota lo que probó y lo que descartó, marca pasos y dice «listo»",
          "Nunca cierra ni borra",
        ],
      },
    },
    trust: {
      title: "Lo que escribe, lo puedes seguir",
      cards: [
        { title: "Con firma", body: "Todo lo que escribe lleva su nombre: dentro de una tarea dice «por Claude Code» o «por Codex», y Configuración › Asistentes cuenta lo que escribió cada uno." },
        { title: "Por confirmar", body: "Cuando dice que una tarea está hecha, la tarea espera en Por confirmar, con su cuenta en la bitácora, hasta que decidas.", page: "que-puede-hacer-un-asistente" },
        { title: "Tus pasos siguen siendo tuyos", body: "No puede marcar un paso que escribiste tú, terminar una tarea tuya ni mover un día que pusiste." },
      ],
    },
    works: `Configuración › Asistentes encuentra y conecta ${AGENTS.es.all}.`,
    others: "Las otras puertas",
    guides: "Guías para trabajar con un agente",
  },
};

export const ALONE_PAGE: Record<Locale, AloneWords> = {
  en: {
    title: "Tisty on your own: notes, documents and tasks",
    meta: "Notes, documents and tasks just for you, with no agent: the editor, the week, the diary, Ideas and Brainsty to see it joined. Local Markdown, free.",
    heading: "Tisty on your own",
    lede: "Your place for notes, documents and tasks.",
    intro:
      "No agent to connect and nothing held back for one. Everything here works the day you install Tisty, on your machine, and it reads as easily as it writes.",
    daily: {
      title: "Every day",
      lede: "What keeps a day, a week and a year in order, with nothing to set up first.",
      cards: [
        { title: "Write where you read", body: "No editing mode to open: you click and type on the page as it reads, and the Markdown stays underneath.", page: "markdown-editor" },
        { title: "The week and the calendar", body: "Today puts the urgent first, a column tells you what is coming this week, and a calendar file brings its events in as tasks.", page: "tasks", anchor: "from-a-calendar" },
        { title: "The diary", body: "One book a year, a page a month and a line a day, with the tasks you closed that day folded under it. No agent reads it until you open it.", page: "documents", anchor: "diary" },
        { title: "Natural language, with no AI", body: "The day, the list and the priority come out of the sentence you type, read by rules on your machine: no model, no request, no cloud.", page: "natural-language" },
        { title: "Widgets", body: "A widget block draws a panel of figures or a small table in Tisty's colours, HTML and CSS and nothing else.", page: "widgets" },
        { title: "What you forgot comes back", body: "The Library lists the documents you have not opened in a while, and A document at random opens one you have not opened this week.", page: "documents", anchor: "rediscovering-what-you-forgot" },
      ],
    },
    screens: "Ideas, priorities and diagrams",
    features: "Everything it does for you",
    others: "The other ways in",
    guides: "Guides",
  },
  es: {
    title: "Tisty solo para ti: notas, documentos y tareas",
    meta: "Notas, documentos y tareas solo para ti, sin agente: el editor, la semana, el diario, Ideas y Brainsty para verlo unido. Markdown local y gratis.",
    heading: "Tisty solo para ti",
    lede: "Tu lugar para notas, documentos y tareas.",
    intro:
      "Ningún agente que conectar y nada guardado para uno. Todo lo de aquí funciona el día que instalas Tisty, en tu equipo, y se lee tan fácil como se escribe.",
    daily: {
      title: "Cada día",
      lede: "Lo que mantiene en orden un día, una semana y un año, sin nada que configurar antes.",
      cards: [
        { title: "Escribes donde lees", body: "Sin modo de edición que abrir: haces clic y escribes en la página tal como se lee, y el Markdown queda debajo.", page: "editor-markdown" },
        { title: "La semana y el calendario", body: "Hoy pone primero lo urgente, una columna te dice qué viene esta semana, y un archivo de calendario trae sus eventos como tareas.", page: "tareas", anchor: "desde-un-calendario" },
        { title: "El diario", body: "Un libro por año, una página por mes y una línea al día, con las tareas que cerraste ese día plegadas debajo. Ningún agente lo lee mientras no lo abras.", page: "documentos", anchor: "diario" },
        { title: "Lenguaje natural, sin IA", body: "El día, la lista y la prioridad salen de la frase que escribes, leída por reglas en tu equipo: sin modelo, sin petición, sin nube.", page: "lenguaje-natural" },
        { title: "Widgets", body: "Un bloque widget dibuja un panel de cifras o una tabla pequeña con los colores de Tisty, HTML y CSS y nada más.", page: "widgets-en-documentos" },
        { title: "Lo olvidado vuelve", body: "La Biblioteca lista los documentos que hace tiempo no abres, y Un documento al azar abre uno que no has abierto esta semana.", page: "documentos", anchor: "redescubrir-lo-olvidado" },
      ],
    },
    screens: "Ideas, prioridades y diagramas",
    features: "Todo lo que hace por ti",
    others: "Las otras puertas",
    guides: "Guías",
  },
};

export const DATA_PAGE: Record<Locale, DataWords> = {
  en: {
    title: "Your data in Tisty: local Markdown, no account",
    meta: "On your disk, as Markdown any editor opens. Sync through Google Drive, OneDrive, WebDAV or a folder, encrypted if you want. No account, no telemetry.",
    heading: "Your data in Tisty",
    lede: "On your disk or in your own cloud.",
    intro: "What you keep in Tisty is yours to read, move and take away. Nothing to sign up for, and nothing locked in a format only Tisty understands.",
    keeps: {
      title: "Kept, synced and gone back to",
      cards: [
        { title: "Sync through your own cloud", body: "Tisty talks to your Google Drive, OneDrive or WebDAV server directly, or uses a folder you already sync. A phrase only you know can encrypt what goes up.", page: "sync-and-backup" },
        { title: "Earlier versions", body: "Each document keeps its earlier versions on your computer: see what changed and go back to it." },
        { title: "Backups", body: "Create backup, in Settings › Your data, writes one zip with your whole history wherever you like, and restores from the same place. A synced folder is not a backup.", page: "sync-and-backup", anchor: "backups" },
      ],
    },
    licence: {
      title: "Free and open source",
      body: "The code is on GitHub under the AGPL-3.0, so anyone can read what Tisty does with your data, and what is published stays free for anyone to carry on.",
      free: FREE.en,
      policy: "Read the privacy policy",
      source: "View the source code",
    },
    others: "The other ways in",
    guides: "Guides",
  },
  es: {
    title: "Tus datos en Tisty: Markdown local, sin cuenta",
    meta: "En tu disco, en Markdown que abre cualquier editor. Se sincroniza por Google Drive, OneDrive, WebDAV o una carpeta, cifrado si quieres. Sin telemetría.",
    heading: "Tus datos en Tisty",
    lede: "En tu disco o en tu propia nube.",
    intro: "Lo que guardas en Tisty es tuyo para leerlo, moverlo y llevártelo. Nada en lo que registrarse, y nada encerrado en un formato que solo entiende Tisty.",
    keeps: {
      title: "Guardado, sincronizado y de vuelta",
      cards: [
        { title: "Sincroniza por tu propia nube", body: "Tisty habla directo con tu Google Drive, OneDrive o servidor WebDAV, o usa una carpeta que ya sincronizas. Una frase que solo tú conoces puede cifrar lo que sube.", page: "sincronizar-y-respaldar" },
        { title: "Versiones anteriores", body: "Cada documento guarda sus versiones anteriores en tu equipo: ves qué cambió y vuelves a eso." },
        { title: "Respaldos", body: "Crear respaldo, en Configuración › Tus datos, escribe un zip con toda tu historia donde quieras, y restaura desde ahí. Una carpeta sincronizada no es un respaldo.", page: "sincronizar-y-respaldar", anchor: "respaldos" },
      ],
    },
    licence: {
      title: "Gratis y de código abierto",
      body: "El código está en GitHub bajo la AGPL-3.0, así que cualquiera puede leer qué hace Tisty con tus datos, y lo publicado sigue libre para que cualquiera lo continúe.",
      free: FREE.es,
      policy: "Leer la política de privacidad",
      source: "Ver el código fuente",
    },
    others: "Las otras puertas",
    guides: "Guías",
  },
};
