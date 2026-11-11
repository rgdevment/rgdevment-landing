import { type Comparison, type Words, no, part, yes } from "./marks";

const RIVALS = [
  { name: "CoPanda", url: "https://github.com/rgdevment/CopyPaste" },
  { name: "Win+V", url: "https://support.microsoft.com/en-us/windows/apps/using-the-clipboard" },
  { name: "Ditto", url: "https://github.com/sabrogden/Ditto" },
  { name: "CopyQ", url: "https://hluk.github.io/CopyQ/" },
  { name: "Maccy", url: "https://maccy.app" },
  { name: "Paste", url: "https://pasteapp.io" },
  { name: "Raycast", url: "https://www.raycast.com/core-features/clipboard-history" },
];

const SOURCES: [string, string[]][] = [
  [
    "Win+V",
    [
      "https://support.microsoft.com/en-us/windows/apps/using-the-clipboard",
      "https://learn.microsoft.com/en-us/windows/win32/dataxchg/clipboard-formats",
      "https://learn.microsoft.com/en-us/windows/privacy/configure-windows-diagnostic-data-in-your-organization",
    ],
  ],
  [
    "Ditto",
    [
      "https://github.com/sabrogden/Ditto",
      "https://github.com/sabrogden/Ditto/wiki",
      "https://github.com/sabrogden/Ditto/wiki/Auto-Delete",
      "https://github.com/sabrogden/Ditto/wiki/Privacy-Policy",
      "https://github.com/sabrogden/Ditto/releases",
    ],
  ],
  [
    "CopyQ",
    [
      "https://github.com/hluk/CopyQ",
      "https://hluk.github.io/CopyQ/",
      "https://copyq.readthedocs.io/en/latest/security.html",
      "https://copyq.readthedocs.io/en/latest/backup.html",
      "https://copyq.readthedocs.io/en/latest/synchronize.html",
      "https://copyq.readthedocs.io/en/latest/faq.html",
      "https://github.com/hluk/copyq-commands",
    ],
  ],
  ["Maccy", ["https://maccy.app/", "https://maccy.app/privacy-policy", "https://github.com/p0deje/Maccy", "https://github.com/p0deje/Maccy/releases"]],
  [
    "Paste",
    [
      "https://pasteapp.io/",
      "https://pasteapp.io/pricing",
      "https://pasteapp.io/privacy",
      "https://pasteapp.io/help/search-and-filters",
      "https://pasteapp.io/help/control-history-retention",
      "https://pasteapp.io/help/what-paste-captures",
      "https://pasteapp.io/help/where-paste-stores-your-data",
      "https://pasteapp.io/help/paste-as-plain-text",
    ],
  ],
  [
    "Raycast",
    [
      "https://manual.raycast.com/clipboard-history",
      "https://manual.raycast.com/cloud-sync",
      "https://www.raycast.com/core-features/clipboard-history",
      "https://www.raycast.com/pricing",
      "https://www.raycast.com/privacy",
    ],
  ],
];

const EN: Words = {
  title: "CoPanda vs Ditto, CopyQ, Maccy: clipboard managers compared",
  heading: "How CoPanda differs from Win+V, Ditto, CopyQ, Maccy, Paste and Raycast",
  short: "How CoPanda differs",
  meta: "Free, open source clipboard manager for Windows and macOS, compared with Win+V, Ditto, CopyQ, Maccy, Paste and Raycast, cell by cell and with sources.",
  lede: "One clipboard history for Windows and macOS, kept on your own disk for as long as you choose. It finds the text inside your screenshots, filters by kind and pastes the same item in another form. Free, open source, with no account and no telemetry. Here is what it does that the clipboard managers you may already know do not, and where they are stronger.",
  only: "Yes in {own} of these {total}; the closest of the others, in {best}",
  checked: "Checked on 10 November 2026 against each project's own pages, listed at the foot. A no means its own pages do not offer it. These change, so go and look.",
  marks: { yes: "Yes", part: "Partly", no: "No", soon: "Soon" },
  rows: [
    {
      label: "Windows and macOS",
      cells: [
        yes("Windows 10 and 11, macOS 13.3 or later"),
        no("Windows only"),
        no("Windows only"),
        yes("Linux too"),
        no("macOS 14 or later only"),
        no("Mac, iPhone and iPad"),
        yes(),
      ],
    },
    {
      label: "A history kept as long as you choose",
      cells: [
        yes("7, 30 or 90 days, or forever"),
        no("25 items; unpinned ones go on restart"),
        yes("By count or by days"),
        yes("By number of items"),
        yes("By number of items"),
        yes("From a day to forever"),
        part("Over three months only with Pro"),
      ],
    },
    {
      label: "Search finds the text inside images",
      cells: [
        yes("Read on your computer by the system itself"),
        no(),
        no(),
        no("An add-on reads the screen, not the history"),
        yes(),
        yes(),
        yes("An optional setting"),
      ],
    },
    {
      label: "Filter the history by kind",
      cells: [yes("Fifteen kinds, from #image or a click"), no(), no("Groups and starred clips"), part("Through tabs and commands"), no(), yes("By type, app, date or device"), yes()],
    },
    {
      label: "Paste the same item in another form",
      cells: [
        yes("Markdown, formatted JSON, a colour in another notation…"),
        no(),
        part("Case, trimming and the like; no Markdown or JSON"),
        part("Through add-on commands"),
        no(),
        no("AI rewriting instead"),
        part("Only the formats the source app gave"),
      ],
    },
    {
      label: "Paste as plain text",
      cells: [yes("Shift+Enter, or Alt+Shift+V without opening it"), no("Not in Win+V"), yes(), yes("A command you add"), yes(), yes(), yes()],
    },
    {
      label: "Leaves out what password managers mark as secret",
      cells: [yes(), yes(), part("Only in nightly builds"), yes("Since version 8"), yes(), yes(), yes()],
    },
    {
      label: "Export and import the history as a file",
      cells: [yes("A .cpbackup with images and settings"), no(), yes(), yes(), no(), no("Only through Time Machine or iCloud"), yes("In an encrypted export file")],
    },
    {
      label: "Free, with no paid tier",
      own: "pricing",
      cells: [yes(), yes("Comes with Windows"), yes(), yes(), yes(), no("Subscription or lifetime licence"), no("Pro is paid")],
    },
    {
      label: "Open source",
      cells: [yes("GPL-3.0-only"), no(), yes("GPL-3.0"), yes("GPL-3.0"), yes("MIT"), no(), no()],
    },
    {
      label: "No telemetry",
      cells: [
        yes("It only checks for a new version, sending nothing"),
        no("Windows diagnostic data"),
        yes(),
        yes(),
        part("Its policy allows error reports"),
        no("Analytics and crash reports"),
        no("Usage analytics"),
      ],
    },
    {
      label: "Sync between computers",
      cells: [
        no("On purpose; a backup file takes it across"),
        yes("With a Microsoft account; off by default"),
        part("To chosen PCs on your network"),
        part("A plugin mirrors a tab to a folder"),
        no(),
        yes("Through iCloud"),
        no("Left out of Cloud Sync"),
      ],
    },
    {
      label: "Linux",
      cells: [no(), no(), no(), yes(), no(), no(), no()],
    },
  ],
  stronger: {
    title: "Where the others are stronger",
    lede: "Each of them does something better than CoPanda, and it is worth saying which.",
    groups: [
      {
        items: [
          { name: "Win+V", text: "Built into Windows with nothing to install, and it can sync what you copy across PCs through a Microsoft account." },
          { name: "Ditto", text: "Sends clips to other computers on your network, and has years of power features behind it: groups, many special pastes and scripting." },
          { name: "CopyQ", text: "Runs on Linux too, and is scriptable from end to end: command line, tabs, automatic commands and optional encryption." },
          { name: "Maccy", text: "Small, fast and made for the keyboard, with native macOS controls, and it already searches the text inside images." },
          { name: "Paste", text: "Syncs the history and pinboards through iCloud to iPhone and iPad, and has pinboards shared with a team." },
          { name: "Raycast", text: "Part of a launcher with many other tools, with the same clipboard features on Mac and Windows." },
          { name: "CoPanda", text: "No Linux build, no phone app, nothing scriptable, and no sync between computers: a backup file is how the history moves." },
        ],
      },
    ],
  },
  sources: "Sources",
  back: "Download CoPanda",
};

const ES: Words = {
  title: "CoPanda vs Ditto, CopyQ y Maccy: gestores de portapapeles",
  heading: "En qué se diferencia CoPanda de Win+V, Ditto, CopyQ, Maccy, Paste y Raycast",
  short: "En qué se diferencia CoPanda",
  meta: "Gestor de portapapeles gratis y libre para Windows y macOS, comparado con Win+V, Ditto, CopyQ, Maccy, Paste y Raycast, con fuentes.",
  lede: "Un solo historial del portapapeles para Windows y macOS, guardado en tu propio disco por el tiempo que elijas. Encuentra el texto dentro de tus capturas, filtra por tipo y pega lo mismo en otra forma. Gratis, de código abierto, sin cuenta y sin telemetría. Aquí está lo que hace y que los gestores del portapapeles que quizá ya conoces no, y dónde ellos son más fuertes.",
  only: "Sí en {own} de estas {total}; el más cercano de los otros, en {best}",
  checked: "Revisado el 10 de noviembre de 2026 en las páginas de cada proyecto, enlazadas al pie. Un no quiere decir que sus propias páginas no lo ofrecen. Esto cambia, así que conviene ir a mirar.",
  marks: { yes: "Sí", part: "En parte", no: "No", soon: "Pronto" },
  rows: [
    {
      label: "Windows y macOS",
      cells: [
        yes("Windows 10 y 11, macOS 13.3 o posterior"),
        no("Solo Windows"),
        no("Solo Windows"),
        yes("También Linux"),
        no("Solo macOS 14 o posterior"),
        no("Mac, iPhone y iPad"),
        yes(),
      ],
    },
    {
      label: "Un historial que dura lo que tú elijas",
      cells: [
        yes("7, 30 o 90 días, o para siempre"),
        no("25 elementos; los no fijados se van al reiniciar"),
        yes("Por cantidad o por días"),
        yes("Por cantidad de elementos"),
        yes("Por cantidad de elementos"),
        yes("De un día a para siempre"),
        part("Más de tres meses solo con Pro"),
      ],
    },
    {
      label: "La búsqueda encuentra el texto dentro de las imágenes",
      cells: [
        yes("Lo lee el propio sistema, en tu computador"),
        no(),
        no(),
        no("Un complemento lee la pantalla, no el historial"),
        yes(),
        yes(),
        yes("Un ajuste opcional"),
      ],
    },
    {
      label: "Filtrar el historial por tipo",
      cells: [yes("Quince tipos, con #imagen o un clic"), no(), no("Grupos y recortes destacados"), part("Con pestañas y comandos"), no(), yes("Por tipo, app, fecha o dispositivo"), yes()],
    },
    {
      label: "Pegar lo mismo en otra forma",
      cells: [
        yes("Markdown, JSON formateado, un color en otra notación…"),
        no(),
        part("Mayúsculas, recortes y similares; sin Markdown ni JSON"),
        part("Con comandos complementarios"),
        no(),
        no("Reescritura con IA en su lugar"),
        part("Solo los formatos que dio la app de origen"),
      ],
    },
    {
      label: "Pegar como texto sin formato",
      cells: [yes("Shift+Enter, o Alt+Shift+V sin abrirlo"), no("No en Win+V"), yes(), yes("Un comando que agregas"), yes(), yes(), yes()],
    },
    {
      label: "Deja fuera lo que los gestores de contraseñas marcan como secreto",
      cells: [yes(), yes(), part("Solo en versiones nocturnas"), yes("Desde la versión 8"), yes(), yes(), yes()],
    },
    {
      label: "Exportar e importar el historial como archivo",
      cells: [yes("Un .cpbackup con imágenes y ajustes"), no(), yes(), yes(), no(), no("Solo con Time Machine o iCloud"), yes("En un archivo de exportación cifrado")],
    },
    {
      label: "Gratis, sin versión de pago",
      own: "precios",
      cells: [yes(), yes("Viene con Windows"), yes(), yes(), yes(), no("Suscripción o licencia de por vida"), no("Pro es de pago")],
    },
    {
      label: "Código abierto",
      cells: [yes("GPL-3.0-only"), no(), yes("GPL-3.0"), yes("GPL-3.0"), yes("MIT"), no(), no()],
    },
    {
      label: "Sin telemetría",
      cells: [
        yes("Solo revisa si hay versión nueva, sin enviar nada"),
        no("Datos de diagnóstico de Windows"),
        yes(),
        yes(),
        part("Su política permite informes de errores"),
        no("Analítica e informes de fallos"),
        no("Analítica de uso"),
      ],
    },
    {
      label: "Sincronizar entre computadores",
      cells: [
        no("A propósito; un archivo de respaldo lo lleva"),
        yes("Con una cuenta Microsoft; apagado de inicio"),
        part("A los PC que elijas en tu red"),
        part("Un complemento refleja una pestaña en una carpeta"),
        no(),
        yes("Por iCloud"),
        no("Queda fuera de Cloud Sync"),
      ],
    },
    {
      label: "Linux",
      cells: [no(), no(), no(), yes(), no(), no(), no()],
    },
  ],
  stronger: {
    title: "Dónde los otros son más fuertes",
    lede: "Cada uno hace algo mejor que CoPanda, y vale la pena decir qué.",
    groups: [
      {
        items: [
          { name: "Win+V", text: "Viene con Windows, sin instalar nada, y puede sincronizar lo que copias entre PC con una cuenta Microsoft." },
          { name: "Ditto", text: "Manda recortes a otros computadores de tu red y tiene años de funciones avanzadas detrás: grupos, muchas formas de pegado especial y scripts." },
          { name: "CopyQ", text: "También funciona en Linux y se programa de punta a punta: línea de comandos, pestañas, comandos automáticos y cifrado opcional." },
          { name: "Maccy", text: "Pequeño, rápido y pensado para el teclado, con controles nativos de macOS, y ya busca el texto dentro de las imágenes." },
          { name: "Paste", text: "Sincroniza el historial y los tableros por iCloud con el iPhone y el iPad, y tiene tableros compartidos con un equipo." },
          { name: "Raycast", text: "Es parte de un lanzador con muchas otras herramientas, con las mismas funciones del portapapeles en Mac y en Windows." },
          { name: "CoPanda", text: "No tiene versión para Linux ni app para el teléfono, no se programa con scripts y no sincroniza entre computadores: el historial se mueve con un archivo de respaldo." },
        ],
      },
    ],
  },
  sources: "Fuentes",
  back: "Descargar CoPanda",
};

export const COPANDA: Comparison = { rivals: RIVALS, sources: SOURCES, en: EN, es: ES };
