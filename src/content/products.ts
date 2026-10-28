import type { Locale } from "../site";

type Words = {
  tagline: string;
  /// Only where name plus tagline runs past what a result page shows.
  title?: string;
  meta: string;
  problem: string;
  what: string[];
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
    spike: { title: string; lede: string; steps: string[] };
    more: string;
    page: string;
    anchor: string;
  };
  faq: { q: string; a: string }[];
};

export type Product = {
  slug: string;
  name: string;
  repo: string;
  licence: string;
  platforms: string[];
  storeId?: string;
  winget?: string;
  cask?: string;
  /** Directories and registries with a page of their own for it. */
  listings?: string[];
  /** Its MCP server: the registry name and, per assistant, the command that connects it. */
  mcp?: { registry: string; connect: [string, string][] };
  shot?: {
    src: string;
    srcEs?: string;
    width: number;
    height: number;
    en: string;
    es: string;
  };
  accent: string;
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
    cask: "tisty",
    listings: [
      "https://github.com/mcp/rgdevment/tisty",
      "https://www.npmjs.com/package/tisty-mcp",
      "https://glama.ai/mcp/servers/rgdevment/Tisty",
      "https://mcpmarket.com/server/tisty",
      "https://m8ven.ai/mcp/rgdevment-tisty-15kwqt",
    ],
    mcp: {
      registry: "io.github.rgdevment/tisty",
      connect: [
        ["Claude Code", "/plugin install tisty --marketplace rgdevment/mcp-plugins"],
        ["Gemini CLI", "gemini extensions install https://github.com/rgdevment/mcp-plugins"],
        ["Any other client, such as VS Code or Cursor", "npx -y tisty-mcp"],
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
    icon: "/icons/tisty.png",
    mascot: "/tisty-head.svg",
    en: {
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
            "It starts as a task, «Find out how to sync with OneDrive». Its page gathers what you read, tried and ruled out, with the meeting recording, a video of the fault and the vendor's PDF attached.",
            "When the way is clear, it is split into parts: «Sign in», «Upload large files», «Resume a cut upload», each with its own steps and notes.",
            "The parts are completed one by one, then the spike itself, and it goes to the archive.",
            "A year later, «how did we solve the OneDrive uploads?» finds it: its page, its parts and every step, as they were left.",
          ],
        },
        more: "The whole idea, in the docs",
        page: "tasks",
        anchor: "a-task-or-a-document",
      },
      title: "Tisty - Notes, documents and tasks on your own disk",
      meta: "Notes, documents with diagrams and typed tables, and tasks as plain files on your own disk, for Windows and macOS. Free and open source: no Tisty account, no server, no subscription.",
      problem:
        "A task list forgets the moment you tick the box. Six months later the same problem comes back and all that is left is knowing you solved it once, somehow.",
      what: [
        "What you finish stays: the steps you took, the dated journal, the files and the documents you leaned on. Months later you search for how you solved it, and it is there.",
        "Notes, documents and tasks kept as plain files on your own disk, readable without Tisty running.",
        "Today puts the urgent first: overdue only past its deadline, late when the day you planned slipped by, underway once started. A thin bar shows the time gone against the parts closed.",
        "Documents that do more than text: tables whose columns know they hold dates, money, options or ratings and add themselves up, diagrams drawn by hand in a window of their own, formulas, pages and their own PDF. Still plain Markdown any editor opens.",
        "No accounts, no subscription, no telemetry. You choose how your data travels: through your Google Drive, OneDrive or WebDAV server, encrypted if you want with a phrase only you know, through a folder you already sync, or nowhere beyond this computer. Free and open source.",
        "An MCP door your assistant can knock on, so a model can read and write what you keep, with your permission.",
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
          a: "Nothing. They are plain files on your disk and any editor opens them.",
        },
        {
          q: "What is the MCP door for?",
          a: "It lets an assistant read and write your notes and tasks through the Model Context Protocol, on your machine and with your permission.",
        },
        {
          q: "Can I draw diagrams?",
          a: "Yes. A mermaid block draws it, and mind maps, database schemas, flowcharts and class diagrams are also drawn by hand in a window of their own, saved as the same text and exported as PNG, JPG or SVG.",
        },
      ],
    },
    es: {
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
            "Empieza como una tarea, «Averiguar cómo sincronizar con OneDrive». Su página reúne lo que leíste, probaste y descartaste, con la grabación de la reunión, un video de la falla y el PDF del proveedor adjuntos.",
            "Cuando el camino está claro, se divide en partes: «Iniciar sesión», «Subir archivos grandes», «Retomar una subida cortada», cada una con sus propios pasos y notas.",
            "Las partes se completan una a una, después el spike, y pasa al archivo.",
            "Un año después, «¿cómo resolvimos las subidas a OneDrive?» lo encuentra: su página, sus partes y cada paso, tal como quedaron.",
          ],
        },
        more: "La idea completa, en la ayuda",
        page: "tareas",
        anchor: "tarea-o-documento",
      },
      title: "Tisty - Notas, documentos y tareas en tu propio disco",
      meta: "Notas, documentos con diagramas y tablas con tipos, y tareas en archivos de tu propio disco, para Windows y macOS. Gratis y de código abierto: sin cuenta de Tisty, sin servidor y sin suscripción.",
      problem:
        "Una lista de tareas olvida en cuanto marcas la casilla. Seis meses después vuelve el mismo problema y lo único que queda es saber que ya lo resolviste una vez, de alguna manera.",
      what: [
        "Lo que cierras se queda: los pasos que diste, el diario con su fecha, los archivos y los documentos en que te apoyaste. Meses después buscas cómo lo resolviste, y está.",
        "Notas, documentos y tareas guardados como archivos corrientes en tu propio disco, legibles sin Tisty abierto.",
        "Hoy pone primero lo urgente: vence solo lo que pasó su límite, se atrasa lo que no hiciste el día que planeaste y queda en curso lo que ya empezó. Una barra fina compara el plazo que pasó con las partes cerradas.",
        "Documentos que hacen más que texto: tablas cuyas columnas saben si guardan fechas, montos, opciones o estrellas y se suman solas, diagramas que dibujas a mano en su propia ventana, fórmulas, páginas y su propio PDF. Y siguen siendo Markdown que abre cualquier editor.",
        "Sin cuentas, sin suscripción y sin telemetría. Tú eliges cómo viajan tus datos: por tu Google Drive, OneDrive o servidor WebDAV, cifrados si quieres con una frase que solo tú conoces, por una carpeta que ya sincronizas o a ninguna parte fuera de este equipo. Gratis y de código abierto.",
        "Una puerta MCP a la que tu asistente puede llamar, para que un modelo lea y escriba lo que guardas, con tu permiso.",
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
          a: "Nada. Son archivos corrientes en tu disco y los abre cualquier editor.",
        },
        {
          q: "¿Para qué sirve la puerta MCP?",
          a: "Permite que un asistente lea y escriba tus notas y tareas por el Model Context Protocol, en tu equipo y con tu permiso.",
        },
        {
          q: "¿Puedo dibujar diagramas?",
          a: "Sí. Un bloque mermaid lo dibuja, y los mapas mentales, los esquemas de base de datos y los diagramas de flujo y de clases también se dibujan a mano en su propia ventana, se guardan como el mismo texto y se exportan como PNG, JPG o SVG.",
        },
      ],
    },
  },
  {
    slug: "linkunbound",
    name: "LinkUnbound",
    repo: "https://github.com/rgdevment/LinkUnbound",
    licence: "GPL-3.0-only",
    platforms: ["Windows", "macOS"],
    storeId: "9N9F7C8Q43KC",
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
    icon: "/icons/linkunbound.png",
    mascot: "/linkunbound-head.svg",
    en: {
      tagline: "Choose which browser opens every link.",
      mascot: {
        title: "A bear that looks after your links.",
        body: "Steady and calm, the bear stands between the link and the browser, so every link opens where you decide.",
      },
      meta: "Free, open source browser picker for Windows and macOS. Choose which browser or profile opens every link, with rules per site and per application.",
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
      tagline: "Elige con qué navegador se abre cada enlace.",
      mascot: {
        title: "Un oso que cuida tus enlaces.",
        body: "Firme y tranquilo, el oso se para entre el enlace y el navegador, para que cada enlace se abra donde tú decides.",
      },
      meta: "Selector de navegador gratuito y de código abierto para Windows y macOS. Elige qué navegador o perfil abre cada enlace, con reglas por sitio y aplicación.",
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
    icon: "/icons/copanda.png",
    mascot: "/copanda-head.svg",
    en: {
      tagline: "An extra thumb for your clipboard.",
      title: "CoPanda - Clipboard history that stays on your machine",
      meta: "CoPanda, formerly CopyPaste: a free, open source clipboard manager for Windows and macOS. A searchable local history that ignores your password manager.",
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
      tagline: "Un pulgar extra para tu portapapeles.",
      title: "CoPanda - Historial del portapapeles que se queda en tu equipo",
      meta: "CoPanda, antes CopyPaste: gestor de portapapeles gratuito y de código abierto para Windows y macOS. Historial local y buscable que ignora tu gestor de contraseñas.",
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

export function storeUrl(product: Product): string | null {
  return product.storeId ? `https://apps.microsoft.com/detail/${product.storeId}` : null;
}
