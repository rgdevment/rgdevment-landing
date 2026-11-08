import type { Locale } from "../site";
import { ASSISTANT_EN, ASSISTANT_ES, PROOF_EN, PROOF_ES } from "./tisty";

export type JourneyStep = {
  label: string;
  body: string;
  shows: ["todo" | "done" | "note" | "archived" | "search" | "found", string][];
};

export type Proof = {
  title: string;
  lede: string;
  doc: { name: string; body: string };
  tree: { title: string; body: string; note: string };
  log: { name: string; body: string; note: string };
  editors: string;
  share: { line: string; link: string; url: string };
};

export type Assistant = {
  title: string;
  lede: string;
  settings: string;
  other: string;
  can: { title: string; items: string[] };
  never: { title: string; items: string[] };
  door: string;
  listed: string;
  more: string;
  page: string;
};

type Words = {
  tagline: string;
  category: string;
  /// Only where name plus tagline runs past what a result page shows.
  title?: string;
  meta: string;
  problem: string;
  what?: string[];
  groups?: { title: string; points: string[] }[];
  privacy: string;
  /// What its own site's pricing page promises about the data, beside the price.
  data?: { line: string; checks: string[] };
  /// The name it went by before, said where the page opens.
  formerly?: string;
  /// The story behind its name, told beside its mascot.
  mascot?: { title: string; body: string };
  /// Its own site spelling out the words its documents understand, offered beside the docs.
  language?: { url: string; title: string; line: string };
  kinds?: {
    title: string;
    lede: string;
    cards: { title: string; body: string }[];
    spike: { title: string; lede: string; steps: JourneyStep[] };
    more: string;
    page: string;
    anchor: string;
  };
  faq: { q: string; a: string; link?: { label: string; path: string } }[];
  compare?: { label: string; path: string };
  firstRun?: { title: string; body: string; link: string; anchor: string };
  proof?: Proof;
  assistant?: Assistant;
};

export type Product = {
  slug: string;
  name: string;
  repo: string;
  licence: string;
  platforms: string[];
  formerName?: string;
  storeId?: string;
  requires?: { windows: string; macos: string };
  signals?: { producthunt: { url: string; post: string } };
  winget?: string;
  cask?: string;
  /** Directories and registries with a page of their own for it. */
  listings?: [string, string][];
  /** Its MCP server: the registry name and, per assistant, the command that connects it. */
  mcp?: { registry: string; connect: { who?: string; command: string }[] };
  shot?: {
    src: string;
    srcEs?: string;
    width: number;
    height: number;
    en: string;
    es: string;
  };
  accent: string;
  accentDark: string;
  icon: string;
  mascot?: string;
  en: Words;
  es: Words;
};

export const PRODUCTS: Product[] = [
  {
    slug: "tisty",
    name: "Tisty",
    repo: "https://github.com/rgdevment/Tisty",
    licence: "AGPL-3.0",
    platforms: ["Windows", "macOS"],
    storeId: "9PGVWXD8X93N",
    requires: { windows: "Windows 10 (1809)", macos: "macOS 13.3" },
    signals: { producthunt: { url: "https://www.producthunt.com/products/tisty", post: "1290086" } },
    winget: "rgdevment.Tisty",
    cask: "tisty",
    listings: [
      ["GitHub MCP Registry", "https://github.com/mcp/rgdevment/tisty"],
      ["npm", "https://www.npmjs.com/package/tisty-mcp"],
      ["Glama", "https://glama.ai/mcp/servers/rgdevment/Tisty"],
      ["MCP Market", "https://mcpmarket.com/server/tisty"],
      ["M8ven", "https://m8ven.ai/mcp/rgdevment-tisty-15kwqt"],
    ],
    mcp: {
      registry: "io.github.rgdevment/tisty",
      connect: [
        { who: "Claude Code", command: "/plugin install tisty --marketplace rgdevment/mcp-plugins" },
        { who: "Gemini CLI", command: "gemini extensions install https://github.com/rgdevment/mcp-plugins" },
        { command: "npx -y tisty-mcp" },
      ],
    },
    shot: {
      src: "/tisty-social.png",
      srcEs: "/tisty-social-es.png",
      width: 1920,
      height: 1080,
      en: "Tisty: the day's tasks with their steps, the documents beside them and the days ahead, kept as files on disk",
      es: "Tisty: las tareas del día con sus pasos, los documentos al lado y los días que vienen, guardados como archivos en disco",
    },
    accent: "#6F4BD8",
    accentDark: "#9276E1",
    icon: "/icons/tisty-mark.png",
    mascot: "/tisty-head.svg",
    en: {
      category: "Local-first notes, documents and tasks for Windows and macOS",
      tagline: "Notes, documents and tasks. The record of what you learned solving them.",
      mascot: {
        title: "A beaver that keeps what you build.",
        body: "A beaver gathers every branch it finds and builds with it, and what it builds stays. Tisty keeps what you work out the same way: the steps, the journal and the documents, there to find again months later.",
      },
      language: {
        url: "https://markdown.tisty.app/",
        title: "Tisty Markdown",
        line: "Every word a Tisty document understands, one page each: CommonMark and GitHub's additions, plus the few of Tisty's own. For writing by hand, from a script or from an assistant.",
      },
      kinds: {
        title: "A task or a document?",
        lede: "Tisty keeps two kinds of things, and telling them apart is most of using it well. Something you will do is a task. Something you will come back to is a document.",
        cards: [
          {
            title: "A task",
            body: "Something to do. It ends, often soon, and goes to the archive, but it does not go away: its page, its steps and its notes stay, and months later a search tells you how you solved it. Knowledge with a date.",
          },
          {
            title: "A document",
            body: "Something to keep. A manual, a recipe, the notes on a client or a machine, a year of minutes: read again and again, corrected and added to, and growing for years.",
          },
        ],
        spike: {
          title: "A task is also a document, one with an end",
          lede: "That is why a task has a page of its own. Take a spike, finding out how something can be done before doing it:",
          steps: [
            {
              label: "A task",
              body: "It starts like any other task: something to do, filed in its list.",
              shows: [["todo", "Find out how to sync with OneDrive"]],
            },
            {
              label: "Steps and journal",
              body: "Its page gathers what you read, tried and ruled out, with the vendor's PDF attached. When the way is clear it splits into parts, each with its steps.",
              shows: [
                ["done", "Sign in"],
                ["done", "Upload large files"],
                ["todo", "Resume a cut upload"],
                ["note", "12 Mar · large files go up in pieces"],
              ],
            },
            {
              label: "The archive",
              body: "The parts are completed one by one, then the task itself, and it goes to the archive whole: page, parts, steps and journal.",
              shows: [
                ["archived", "Find out how to sync with OneDrive"],
                ["note", "Closed 14 Mar · 3 parts · journal kept"],
              ],
            },
            {
              label: "A year later",
              body: "The same question comes back, and a search finds the task as it was left, with everything you worked out.",
              shows: [
                ["search", "onedrive uploads"],
                ["found", "Find out how to sync with OneDrive"],
                ["note", "in the archive · 3 parts · 9 steps"],
              ],
            },
          ],
        },
        more: "The whole idea, in the docs",
        page: "tasks",
        anchor: "a-task-or-a-document",
      },
      title: "Tisty: local-first notes, documents and tasks app",
      meta: "Local-first notes and tasks app for Windows and macOS: Markdown documents, tasks that keep their history, MCP for assistants. Free, open source, no account.",
      problem:
        "A task list forgets the moment you tick the box. Six months later the same problem comes back and all that is left is knowing you solved it once, somehow.",
      groups: [
        {
          title: "Capture",
          points: [
            "Type «call the bank at 3» in the quick capture, open from anywhere, and it is a task with its hour.",
            "Documents with tables that add themselves up, diagrams drawn by hand, formulas, pages and their own PDF.",
          ],
        },
        {
          title: "Plan",
          points: [
            "Today puts the urgent first: overdue only past its deadline, late when the day you planned slipped by.",
            "Steps, parts and the Eisenhower matrix by its name, with a thin bar weighing the time gone against the parts closed.",
          ],
        },
        {
          title: "Find",
          points: [
            "A finished task goes to the archive whole: its page, steps, dated journal and files.",
            "One search across open tasks, the archive and every document, even what you closed two years ago.",
          ],
        },
        {
          title: "Your data is yours",
          points: [
            "Documents in Markdown and tasks in a log you can read, on your own disk.",
            "Synced through your Google Drive, OneDrive, WebDAV server or a folder you already sync, encrypted with a phrase only you know if you want.",
            "No account, no subscription, no telemetry. Free and open source.",
          ],
        },
      ],
      privacy:
        "Local-first by design. The files are yours and readable without Tisty running.",
      data: {
        line: "On your disk or in your own cloud.",
        checks: [
          "Stays on this computer",
          "Syncs through your Google Drive, your OneDrive, your WebDAV server or a folder you choose",
          "Your cloud encrypted, if you want, with a phrase only you know",
          "No telemetry, no ads",
          "Export everything whenever you want",
        ],
      },
      faq: [
        {
          q: "What happens to my notes if Tisty disappears?",
          a: "Nothing. Your documents are Markdown files any editor opens, and your tasks a log of JSON lines that cat, grep or jq read. Both stay on your disk.",
        },
        {
          q: "How is it different from Obsidian, Notion or Todoist?",
          a: "Tisty keeps tasks and documents in one store and one search on your own disk, and finishing a task keeps everything it gathered instead of hiding it. Each of the others is stronger at something, and the comparison says where.",
          link: { label: "Read the comparison", path: "compare" },
        },
        {
          q: "What is the MCP door for?",
          a: "It lets an assistant read and write your notes and tasks through the Model Context Protocol, on your machine and with your permission.",
        },
        {
          q: "Can I draw diagrams?",
          a: "Yes. A mermaid block draws it, and mind maps, database schemas, freeform diagrams with every Mermaid shape and class diagrams are also drawn by hand in a window of their own, saved as the same text, shown on the page as you drew them and exported as PNG, JPG or SVG.",
        },
      ],
      proof: PROOF_EN,
      assistant: ASSISTANT_EN,
      compare: { label: "Why Tisty? How it compares with Obsidian, Notion, Todoist and Logseq", path: "compare" },
      firstRun: {
        title: "The first time you open Tisty",
        body: "It asks two things: your language, and where your copies should go, a folder to sync through or nowhere beyond this computer. Then it sets up your starting lists and writes you a guide, an ordinary document of yours to read, edit or throw away, that shows from the inside what a document can hold.",
        link: "Start here, in the docs",
        anchor: "start-here",
      },
    },
    es: {
      category: "Notas, documentos y tareas en tu propio disco, para Windows y macOS",
      tagline: "Notas, documentos y tareas. El historial de lo que aprendiste resolviendo.",
      mascot: {
        title: "Un castor que guarda lo que construyes.",
        body: "El castor junta cada rama que encuentra y construye con ella, y lo que construye se queda. Tisty guarda así lo que resuelves: los pasos, el diario y los documentos, listos para encontrarlos meses después.",
      },
      language: {
        url: "https://markdown.tisty.app/es/",
        title: "Markdown de Tisty",
        line: "Cada palabra que entiende un documento de Tisty, una página por cada una: CommonMark y lo que agrega GitHub, más las pocas propias de Tisty. Para escribir a mano, desde un script o desde un asistente.",
      },
      kinds: {
        title: "¿Tarea o documento?",
        lede: "Tisty guarda dos tipos de cosas, y distinguirlas es buena parte de usarlo bien. Lo que vas a hacer es una tarea. Lo que vas a volver a consultar es un documento.",
        cards: [
          {
            title: "Una tarea",
            body: "Algo por hacer. Termina, muchas veces pronto, y pasa al archivo, pero no desaparece: su página, sus pasos y sus notas se quedan, y meses después una búsqueda te cuenta cómo lo resolviste. Conocimiento con fecha.",
          },
          {
            title: "Un documento",
            body: "Algo para guardar. Un manual, una receta, las notas de un cliente o de una máquina, las actas de un año: se lee una y otra vez, se corrige y se amplía, y crece durante años.",
          },
        ],
        spike: {
          title: "Una tarea también es un documento, uno que termina",
          lede: "Por eso una tarea tiene una página propia. Piensa en un spike, una investigación para saber cómo se puede hacer algo antes de hacerlo:",
          steps: [
            {
              label: "Una tarea",
              body: "Empieza como cualquier otra tarea: algo por hacer, guardado en su lista.",
              shows: [["todo", "Averiguar cómo sincronizar con OneDrive"]],
            },
            {
              label: "Pasos y bitácora",
              body: "Su página reúne lo que leíste, probaste y descartaste, con el PDF del proveedor adjunto. Cuando el camino está claro se divide en partes, cada una con sus pasos.",
              shows: [
                ["done", "Iniciar sesión"],
                ["done", "Subir archivos grandes"],
                ["todo", "Retomar una subida cortada"],
                ["note", "12 mar · los archivos grandes suben por partes"],
              ],
            },
            {
              label: "El archivo",
              body: "Las partes se completan una a una, después la tarea, y pasa al archivo entera: página, partes, pasos y bitácora.",
              shows: [
                ["archived", "Averiguar cómo sincronizar con OneDrive"],
                ["note", "Cerrada el 14 mar · 3 partes · bitácora guardada"],
              ],
            },
            {
              label: "Un año después",
              body: "Vuelve la misma pregunta, y una búsqueda encuentra la tarea tal como quedó, con todo lo que resolviste.",
              shows: [
                ["search", "subidas onedrive"],
                ["found", "Averiguar cómo sincronizar con OneDrive"],
                ["note", "en el archivo · 3 partes · 9 pasos"],
              ],
            },
          ],
        },
        more: "La idea completa, en la ayuda",
        page: "tareas",
        anchor: "tarea-o-documento",
      },
      title: "Tisty: app de notas, documentos y tareas en tu disco",
      meta: "App de notas y tareas local para Windows y macOS: documentos en Markdown, tareas que guardan su historial y MCP para asistentes. Gratis, libre y sin cuenta.",
      problem:
        "Una lista de tareas olvida en cuanto marcas la casilla. Seis meses después vuelve el mismo problema y lo único que queda es saber que ya lo resolviste una vez, de alguna manera.",
      groups: [
        {
          title: "Capturar",
          points: [
            "Escribe «llamar al banco a las 3» en la captura rápida, que se abre desde cualquier parte, y es una tarea con su hora.",
            "Documentos con tablas que se suman solas, diagramas dibujados a mano, fórmulas, páginas y su propio PDF.",
          ],
        },
        {
          title: "Planificar",
          points: [
            "Hoy pone primero lo urgente: vence solo lo que pasó su límite, se atrasa lo que no hiciste el día que planeaste.",
            "Pasos, partes y la matriz de Eisenhower por su nombre, con una barra fina que compara el plazo que pasó con las partes cerradas.",
          ],
        },
        {
          title: "Encontrar",
          points: [
            "Una tarea terminada pasa entera al archivo: su página, sus pasos, su bitácora con fecha y sus archivos.",
            "Una sola búsqueda en las tareas abiertas, el archivo y todos los documentos, aunque lo hayas cerrado hace dos años.",
          ],
        },
        {
          title: "Tus datos son tuyos",
          points: [
            "Documentos en Markdown y tareas en un registro legible, en tu propio disco.",
            "Se sincronizan por tu Google Drive, OneDrive, servidor WebDAV o una carpeta que ya sincronizas, cifrados si quieres con una frase que solo tú conoces.",
            "Sin cuenta, sin suscripción y sin telemetría. Gratis y de código abierto.",
          ],
        },
      ],
      privacy:
        "Local por diseño. Los archivos son tuyos y se leen sin que Tisty esté abierto.",
      data: {
        line: "En tu disco o en tu propia nube.",
        checks: [
          "Se quedan en este equipo",
          "Se sincronizan por tu Google Drive, tu OneDrive, tu servidor WebDAV o una carpeta que eliges",
          "Tu nube cifrada, si quieres, con una frase que solo tú conoces",
          "Sin telemetría ni anuncios",
          "Exportas todo cuando quieras",
        ],
      },
      faq: [
        {
          q: "¿Qué pasa con mis notas si Tisty desaparece?",
          a: "Nada. Tus documentos son archivos Markdown que abre cualquier editor, y tus tareas, un registro de líneas JSON que leen cat, grep o jq. Los dos se quedan en tu disco.",
        },
        {
          q: "¿En qué se diferencia de Obsidian, Notion o Todoist?",
          a: "Tisty guarda tareas y documentos en un mismo lugar y una misma búsqueda, en tu propio disco, y terminar una tarea conserva todo lo que reunió en vez de esconderlo. Cada uno de los otros es más fuerte en algo, y la comparación dice en qué.",
          link: { label: "Leer la comparación", path: "comparar" },
        },
        {
          q: "¿Para qué sirve la puerta MCP?",
          a: "Permite que un asistente lea y escriba tus notas y tareas por el Model Context Protocol, en tu equipo y con tu permiso.",
        },
        {
          q: "¿Puedo dibujar diagramas?",
          a: "Sí. Un bloque mermaid lo dibuja, y los mapas mentales, los esquemas de base de datos, los diagramas libres con todas las formas de Mermaid y los de clases también se dibujan a mano en su propia ventana, se guardan como el mismo texto, se ven en la página tal como los dibujaste y se exportan como PNG, JPG o SVG.",
        },
      ],
      proof: PROOF_ES,
      assistant: ASSISTANT_ES,
      compare: { label: "¿Por qué Tisty? Cómo se compara con Obsidian, Notion, Todoist y Logseq", path: "comparar" },
      firstRun: {
        title: "Al abrir Tisty por primera vez",
        body: "Te pregunta dos cosas: tu idioma y adónde van tus copias, a una carpeta para sincronizar o a ninguna parte fuera de este equipo. Luego crea tus listas iniciales y te escribe una guía, un documento tuyo como cualquier otro, para leer, editar o tirar, que muestra desde dentro todo lo que cabe en un documento.",
        link: "Empieza aquí, en la ayuda",
        anchor: "para-empezar",
      },
    },
  },
  {
    slug: "linkunbound",
    name: "LinkUnbound",
    repo: "https://github.com/rgdevment/LinkUnbound",
    licence: "GPL-3.0-only",
    platforms: ["Windows", "macOS"],
    storeId: "9N9F7C8Q43KC",
    winget: "rgdevment.LinkUnbound",
    cask: "linkunbound",
    shot: {
      src: "/linkunbound-social.png",
      srcEs: "/linkunbound-social-es.png",
      width: 1920,
      height: 1080,
      en: "LinkUnbound: the picker beside a link, listing the installed browsers with the profile each one opens",
      es: "LinkUnbound: el selector junto a un enlace, con los navegadores instalados y el perfil en que abre cada uno",
    },
    accent: "#2F62D8",
    accentDark: "#5D85E1",
    icon: "/icons/linkunbound.png",
    mascot: "/linkunbound-head.svg",
    en: {
      category: "Browser picker for Windows and macOS",
      title: "LinkUnbound: browser picker for Windows and macOS",
      tagline: "Choose which browser opens every link.",
      mascot: {
        title: "A bear that looks after your links.",
        body: "Steady and calm, the bear stands between the link and the browser, so every link opens where you decide.",
      },
      meta: "Free, open source browser picker for Windows and macOS: choose the browser or browser profile that opens each link, with rules per site and per app.",
      problem:
        "A link from Teams opens in Edge. One from Slack lands wherever Windows decided last. You keep three browsers and four profiles, and nobody asks you which one you meant.",
      what: [
        "It makes itself the default browser, so every link clicked outside a browser passes through it first.",
        "If a rule covers the link it opens straight away. If not, a small picker appears beside the cursor and you choose, with the mouse or the keys 1 to 9.",
        "A rule can match the site, a particular browser profile, or the application the link came from, so everything Teams opens can go to one browser while the rest goes to another.",
        "Microsoft SafeLinks are unwrapped before any rule is matched, so a rule sees the real address instead of the redirect.",
      ],
      privacy:
        "No account, no ads, no telemetry, no server. Your rules and the links you open never leave the machine.",
      data: {
        line: "Your rules and your links stay on this computer.",
        checks: [
          "Rules and settings stay on this computer",
          "The links you open are never sent anywhere",
          "No telemetry, no ads",
          "No account to create",
        ],
      },
      faq: [
        {
          q: "Why do Teams and Outlook still open Edge?",
          a: "Both carry a setting of their own that hands links to your default browser, and that is the first thing to change: in Teams under Settings, Files and links; in classic Outlook under File, Options, Advanced. After that their links reach LinkUnbound like anybody else's. What is left is a channel of Microsoft's own that hands some links straight to Edge, which Windows 11 does not let another application stand in the middle of.",
        },
        {
          q: "Does it work with browser profiles?",
          a: "Yes. Installed browsers and their Chromium profiles are detected on their own, and a rule can send a link to one profile rather than just to the browser.",
        },
        {
          q: "What does it cost?",
          a: "Nothing, and there is no paid tier. It is released under the GPL-3.0, so you can read it, change it and share it.",
        },
      ],
    },
    es: {
      category: "Selector de navegador para Windows y macOS",
      title: "LinkUnbound: selector de navegador para Windows y macOS",
      tagline: "Elige con qué navegador se abre cada enlace.",
      mascot: {
        title: "Un oso que cuida tus enlaces.",
        body: "Firme y tranquilo, el oso se para entre el enlace y el navegador, para que cada enlace se abra donde tú decides.",
      },
      meta: "Selector de navegador gratis y de código abierto para Windows y macOS: elige qué navegador o perfil abre cada enlace, con reglas por sitio y por aplicación.",
      problem:
        "Un enlace de Teams se abre en Edge. Uno de Slack, donde Windows decidiera la última vez. Tienes tres navegadores y cuatro perfiles, y a ti no te pregunta nadie.",
      what: [
        "Se pone como navegador predeterminado, así que cada enlace que abres fuera de un navegador pasa antes por él.",
        "Si tienes una regla que lo cubre, se abre directamente. Si no, aparece un selector pequeño junto al cursor y eliges tú, con el ratón o con las teclas 1 a 9.",
        "Una regla puede ir por el sitio, por un perfil concreto del navegador, o por la aplicación de la que viene el enlace, así que todo lo que abre Teams puede ir a un navegador mientras el resto va a otro.",
        "Los SafeLinks de Microsoft se desenvuelven antes de comparar ninguna regla, así que la regla ve la dirección real y no el redirector.",
      ],
      privacy:
        "Sin cuenta, sin publicidad, sin telemetría, sin servidor. Tus reglas y los enlaces que abres no salen de este equipo.",
      data: {
        line: "Tus reglas y tus enlaces se quedan en este equipo.",
        checks: [
          "Las reglas y los ajustes se quedan en este equipo",
          "Los enlaces que abres no se envían a ninguna parte",
          "Sin telemetría ni anuncios",
          "Sin cuenta que crear",
        ],
      },
      faq: [
        {
          q: "¿Por qué Teams y Outlook siguen abriendo Edge?",
          a: "Los dos tienen un ajuste propio que entrega los enlaces a tu navegador predeterminado, y es lo primero que conviene cambiar: en Teams, en Configuración, Archivos y enlaces; en el Outlook clásico, en Archivo, Opciones, Avanzado. Con eso hecho, sus enlaces llegan a LinkUnbound como los de cualquier otra aplicación. Lo que queda es un canal propio de Microsoft que entrega algunos enlaces directamente a Edge, y Windows 11 no deja que otra aplicación se ponga en medio.",
        },
        {
          q: "¿Funciona con los perfiles del navegador?",
          a: "Sí. Detecta solo los navegadores instalados y sus perfiles de Chromium, y una regla puede mandar el enlace a un perfil concreto, no solo al navegador.",
        },
        {
          q: "¿Cuánto cuesta?",
          a: "Nada, y no hay versión de pago. Se publica bajo la GPL-3.0, así que puedes leerlo, cambiarlo y compartirlo.",
        },
      ],
    },
  },
  {
    slug: "copanda",
    name: "CoPanda",
    formerName: "CopyPaste",
    repo: "https://github.com/rgdevment/CopyPaste",
    licence: "GPL-3.0",
    platforms: ["Windows", "macOS"],
    storeId: "9NBJRZF3K856",
    cask: "copanda",
    shot: {
      src: "/copanda-social.png",
      srcEs: "/copanda-social-es.png",
      width: 1920,
      height: 1080,
      en: "CoPanda: the clipboard panel with its search box, filters by kind and a history of text and images, beside the panda",
      es: "CoPanda: el panel del portapapeles con su buscador, los filtros por tipo y un historial de textos e imágenes, junto al panda",
    },
    accent: "#3B34B8",
    accentDark: "#847FD2",
    icon: "/icons/copanda.png",
    mascot: "/copanda-head.svg",
    en: {
      category: "Clipboard manager for Windows and macOS",
      tagline: "An extra thumb for your clipboard.",
      title: "CoPanda: free clipboard manager for Windows and macOS",
      meta: "Free, open source clipboard manager for Windows and macOS, formerly CopyPaste. A searchable local history that skips your password manager. No account.",
      formerly: "Formerly CopyPaste. The same app and the same history, with a name of its own.",
      mascot: {
        title: "An extra thumb for your clipboard.",
        body: "A panda has a false thumb: an extra bone in its wrist that it uses to grip bamboo. CoPanda is that extra thumb for what you copy. It holds on to it so you can pick it up again whenever you need it.",
      },
      problem:
        "You copied an address ten minutes ago and then copied something else. It is gone, and the only way back is to go and find it again.",
      what: [
        "It keeps a history of what you copy, searchable, on your own disk.",
        "Passwords and API keys are left out: clipboard content from password managers is ignored.",
        "Copying the same text again without styles no longer discards the formatting already stored.",
        "History, images and settings can be exported and imported as a backup file.",
      ],
      privacy:
        "Everything is stored locally under your user profile. No mandatory cloud, no tracking.",
      data: {
        line: "Your history stays on this computer.",
        checks: [
          "History, images and settings stay on this computer",
          "What comes from a password manager is never kept",
          "No telemetry, no ads",
          "Export everything as a backup file",
        ],
      },
      faq: [
        {
          q: "Is CoPanda the same as CopyPaste?",
          a: "Yes. CopyPaste is now called CoPanda: the same app, the same history and the same settings. Updating keeps everything where it was.",
        },
        {
          q: "Does it store passwords?",
          a: "No. Clipboard content coming from password managers such as 1Password or Bitwarden is ignored.",
        },
        {
          q: "Where is my clipboard history kept?",
          a: "Locally, under your user profile. It is never uploaded anywhere.",
        },
      ],
    },
    es: {
      category: "Gestor de portapapeles para Windows y macOS",
      tagline: "Un pulgar extra para tu portapapeles.",
      title: "CoPanda: gestor de portapapeles gratis para Windows y macOS",
      meta: "Gestor de portapapeles gratis y libre para Windows y macOS, antes CopyPaste. Historial local con búsqueda que ignora tu gestor de contraseñas. Sin cuenta.",
      formerly: "Antes se llamaba CopyPaste. La misma aplicación y el mismo historial, con un nombre propio.",
      mascot: {
        title: "Un pulgar extra para tu portapapeles.",
        body: "El panda tiene un falso pulgar: un hueso extra en la muñeca que usa para agarrar el bambú. CoPanda es ese pulgar extra para lo que copias. Lo sostiene para que lo vuelvas a tomar cuando lo necesites.",
      },
      problem:
        "Copiaste una dirección hace diez minutos y luego copiaste otra cosa. Ya no está, y la única forma de recuperarla es ir a buscarla otra vez.",
      what: [
        "Guarda en tu propio disco el historial de lo que copias, y puedes buscar dentro.",
        "Las contraseñas y las claves de API se quedan fuera: lo que viene de un gestor de contraseñas se ignora.",
        "Volver a copiar el mismo texto sin estilos ya no descarta el formato que había guardado.",
        "El historial, las imágenes y los ajustes se pueden exportar e importar como copia de seguridad.",
      ],
      privacy:
        "Todo se guarda localmente en tu perfil de usuario. Sin nube obligatoria y sin rastreo.",
      data: {
        line: "Tu historial se queda en este equipo.",
        checks: [
          "El historial, las imágenes y los ajustes se quedan en este equipo",
          "Lo que viene de un gestor de contraseñas nunca se guarda",
          "Sin telemetría ni anuncios",
          "Exportas todo como copia de seguridad",
        ],
      },
      faq: [
        {
          q: "¿CoPanda es lo mismo que CopyPaste?",
          a: "Sí. CopyPaste ahora se llama CoPanda: la misma aplicación, el mismo historial y los mismos ajustes. Al actualizar, todo sigue donde estaba.",
        },
        {
          q: "¿Guarda las contraseñas?",
          a: "No. Lo que llega al portapapeles desde un gestor de contraseñas como 1Password o Bitwarden se ignora.",
        },
        {
          q: "¿Dónde queda el historial?",
          a: "En tu equipo, dentro de tu perfil de usuario. No se sube a ninguna parte.",
        },
      ],
    },
  },
];

/// The accent as text: the brand colour on light pages and a lighter tone that stays legible on dark ones.
export function inkOf(product: Product): string {
  return `--ink: ${product.accent}; --ink-dark: ${product.accentDark}`;
}

export function words(product: Product, locale: Locale): Words {
  return locale === "es" ? product.es : product.en;
}

export function shotSrc(product: Product, locale: Locale): string | undefined {
  const shot = product.shot;
  return shot && (locale === "es" && shot.srcEs ? shot.srcEs : shot.src);
}

/// The hero cropped to the 1.91:1 card link previews expect, so they show it whole.
export function cardOf(product: Product, locale: Locale) {
  return product.shot && { src: `/og/${product.slug}-${locale}.png`, width: 1200, height: 630 };
}

export function releasesUrl(product: Product): string {
  return `${product.repo}/releases`;
}

const TAP = "rgdevment/tap";

/// Homebrew loads a tap that is not its own only once it is trusted, and the trust is the tap's, so every cask in it needs it.
export function brewSteps(product: Product): string[] {
  return product.cask ? [`brew tap ${TAP}`, `brew trust ${TAP}`, `brew install --cask ${product.cask}`] : [];
}

export function storeUrl(product: Product): string | null {
  return product.storeId ? `https://apps.microsoft.com/detail/${product.storeId}` : null;
}
