import { type Comparison, type Words, no, part, yes } from "./marks";

const RIVALS = [
  { name: "LinkUnbound", url: "https://github.com/rgdevment/LinkUnbound" },
  { name: "Switchbar", url: "https://webcatalog.io/en/switchbar" },
  { name: "Browser Tamer", url: "https://github.com/aloneguid/bt" },
  { name: "BrowserPicker", url: "https://github.com/mortenn/BrowserPicker" },
  { name: "Finicky", url: "https://github.com/johnste/finicky" },
  { name: "Velja", url: "https://sindresorhus.com/velja" },
  { name: "Choosy", url: "https://choosy.app" },
];

const SOURCES: [string, string[]][] = [
  [
    "Switchbar",
    [
      "https://webcatalog.io/en/switchbar",
      "https://webcatalog.io/en/docs/category/switchbar",
      "https://webcatalog.io/en/docs/article/is-the-switchbar-app-free",
      "https://webcatalog.io/en/docs/article/choose-where-links-open-with-switchbar",
      "https://webcatalog.io/en/docs/article/route-web-links-to-a-desktop-app-or-space",
      "https://webcatalog.io/en/legal/privacy-policy",
    ],
  ],
  [
    "Browser Tamer",
    [
      "https://github.com/aloneguid/bt",
      "https://github.com/aloneguid/bt/releases",
      "https://github.com/aloneguid/bt/blob/master/docs/release-notes.md",
      "https://github.com/aloneguid/bt/blob/master/docs/README.md",
    ],
  ],
  [
    "BrowserPicker",
    [
      "https://github.com/mortenn/BrowserPicker",
      "https://github.com/mortenn/BrowserPicker/releases",
      "https://github.com/mortenn/BrowserPicker/releases/tag/v3.2.3",
    ],
  ],
  [
    "Finicky",
    [
      "https://github.com/johnste/finicky",
      "https://github.com/johnste/finicky/wiki/Configuration-(v4)",
      "https://github.com/johnste/finicky/releases",
      "https://github.com/johnste/finicky/releases/tag/v4.4.0-alpha",
    ],
  ],
  [
    "Velja",
    ["https://sindresorhus.com/velja", "https://apps.apple.com/us/app/velja/id1607635845", "https://sindresorhus.com/velja/privacy-policy"],
  ],
  [
    "Choosy",
    [
      "https://choosy.app/",
      "https://choosy.app/help/settings/rules",
      "https://choosy.app/help/settings/prompt",
      "https://choosy.app/help/settings/browsers",
      "https://choosy.app/help/settings/advanced",
      "https://choosy.app/releases",
      "https://choosy.app/privacy",
      "https://choosy.app/buy",
    ],
  ],
];

const EN: Words = {
  title: "LinkUnbound vs Finicky, Velja and Choosy: browser pickers",
  heading: "How LinkUnbound differs from Switchbar, Browser Tamer, BrowserPicker, Finicky, Velja and Choosy",
  short: "How LinkUnbound differs",
  meta: "Free, open source browser picker for Windows and macOS, compared with Finicky, Velja, Choosy, Switchbar, Browser Tamer and BrowserPicker, with sources.",
  lede: "One app for Windows and macOS that asks which browser and profile should open each link, or remembers it for you. A rule matches the site, the profile or the app the link came from, and you set it from the settings, with no file to write. Free, open source, with no account and no telemetry. Here is what it does that other browser pickers do not, and where they are stronger.",
  only: "Yes in {own} of these {total}; the closest of the others, in {best}",
  checked: "Checked on 10 November 2026 against each project's own pages, listed at the foot. A no means its own pages do not offer it. These change, so go and look.",
  marks: { yes: "Yes", part: "Partly", no: "No", soon: "Soon" },
  rows: [
    {
      label: "Windows and macOS, one app",
      cells: [
        yes("Windows 10 and 11, macOS 13 or later"),
        yes(),
        no("Windows and Linux; macOS announced"),
        no("Windows only"),
        no("macOS only"),
        no("macOS 26 or later only"),
        no("macOS 15.6 or later only"),
      ],
    },
    {
      label: "Rules by the app the link came from",
      cells: [
        yes("Everything from Slack in Brave, ahead of every address rule"),
        no("Rules by address only"),
        yes("By process and window title"),
        no("Rules by address only"),
        yes("In its JavaScript config"),
        yes(),
        yes(),
      ],
    },
    {
      label: "Browser profiles found on their own",
      cells: [
        yes("Chromium profiles; Firefox ones added by hand"),
        yes(),
        yes("Chromium and Firefox, containers included"),
        yes("Chromium only"),
        part("Named in its config file"),
        yes(),
        yes("Chromium only"),
      ],
    },
    {
      label: "Rules set without writing a file",
      cells: [
        yes("From the settings, or by remembering a choice"),
        yes("By remembering a choice"),
        yes("Lua scripting is optional"),
        yes(),
        part("A JavaScript file; a visual editor only in an alpha"),
        yes(),
        yes(),
      ],
    },
    {
      label: "Microsoft SafeLinks unwrapped before any rule",
      cells: [
        yes("The rule and the picker see the real address"),
        part("Expands short links; SafeLinks not named"),
        yes("With an un-shortener too"),
        part("Optional redirect probing; SafeLinks not named"),
        part("Only rewrites you write yourself"),
        yes("Known redirect wrappers"),
        no("Expands short links only in the picker"),
      ],
    },
    {
      label: "A picker beside the cursor, driven by keys",
      cells: [
        yes("1 to 9, or centred if you prefer"),
        part("Keys 1 to 9; position not documented"),
        part("Keys 1 to 9, on the cursor's screen"),
        part("Keys 1 to 9; position not documented"),
        no("No picker"),
        part("Letter keys; position not documented"),
        yes("Under the pointer, with ⌘1 to 9"),
      ],
    },
    {
      label: "A private window from the picker",
      cells: [yes("Hold Shift"), no("Not documented"), yes(), yes("Hold Alt"), no("No picker"), yes(), part("Some Chromium browsers")],
    },
    {
      label: "Signed automatic updates",
      cells: [
        yes("Can be turned off"),
        no("Not documented"),
        no("Through winget; builds are unsigned"),
        no("Not documented"),
        part("Checks for a new version"),
        yes("Through the Mac App Store"),
        part("Checks for a new version"),
      ],
    },
    {
      label: "Free, with no paid tier",
      own: "pricing",
      cells: [yes(), yes(), yes("Donations only"), yes(), yes(), no("Paid, with a trial"), no("Paid")],
    },
    {
      label: "Open source",
      cells: [yes("GPL-3.0-only"), no(), yes("Apache-2.0"), yes("MIT"), yes("MIT"), no(), no()],
    },
    {
      label: "No telemetry",
      cells: [
        yes("It only checks for a new version, sending nothing"),
        no("Usage data and error reports, per WebCatalog's policy"),
        yes("Removed in version 6"),
        part("Its pages do not say"),
        part("Its pages do not say"),
        part("Anonymous crash reports"),
        yes(),
      ],
    },
    {
      label: "Linux",
      cells: [no(), no(), yes(), no(), no(), no(), no()],
    },
  ],
  stronger: {
    title: "Where the others are stronger",
    lede: "Each of them does something better than LinkUnbound, and it is worth saying which.",
    groups: [
      {
        items: [
          { name: "Switchbar", text: "Sends links into WebCatalog's desktop apps and spaces, and email links to Gmail, Outlook or Apple Mail, with browser extensions and Handoff on a Mac." },
          { name: "Browser Tamer", text: "Runs on Linux, finds Firefox profiles and containers on its own, removes trackers with ClearURLs, and lets you script rules in Lua with a debugger." },
          { name: "BrowserPicker", text: "A portable build that registers without administrator rights, browsers ordered by how often you pick them, and Zen and Firefox containers." },
          { name: "Finicky", text: "Rules and address rewrites written in JavaScript or TypeScript, as far as you want to take them, down to the title of the window the link came from." },
          { name: "Velja", text: "Removes more than 200 tracking parameters, transforms addresses in JavaScript, has Shortcuts actions, and opens Zoom, Teams, Meet and Figma links straight in their apps." },
          { name: "Choosy", text: "Rules that also match modifier keys, how many browsers are running, the kind of link, AirDrop and Handoff, plus browser extensions and an address API." },
          { name: "LinkUnbound", text: "No Linux build, no scripting beyond what the settings offer, Firefox profiles added by hand, and rules copied by hand to another computer." },
        ],
      },
    ],
  },
  sources: "Sources",
  back: "Download LinkUnbound",
};

const ES: Words = {
  title: "LinkUnbound vs Finicky y Velja: selectores de navegador",
  heading: "En qué se diferencia LinkUnbound de Switchbar, Browser Tamer, BrowserPicker, Finicky, Velja y Choosy",
  short: "En qué se diferencia LinkUnbound",
  meta: "Selector de navegador gratis y libre para Windows y macOS, comparado con Finicky, Velja, Choosy, Switchbar, Browser Tamer y BrowserPicker, con fuentes.",
  lede: "Una sola app para Windows y macOS que te pregunta qué navegador y qué perfil abren cada enlace, o lo recuerda por ti. Una regla se fija en el sitio, en el perfil o en la app de la que vino el enlace, y la armas desde la configuración, sin escribir ningún archivo. Gratis, de código abierto, sin cuenta y sin telemetría. Aquí está lo que hace y que otros selectores de navegador no, y dónde ellos son más fuertes.",
  only: "Sí en {own} de estas {total}; el más cercano de los otros, en {best}",
  checked: "Revisado el 10 de noviembre de 2026 en las páginas de cada proyecto, enlazadas al pie. Un no quiere decir que sus propias páginas no lo ofrecen. Esto cambia, así que conviene ir a mirar.",
  marks: { yes: "Sí", part: "En parte", no: "No", soon: "Pronto" },
  rows: [
    {
      label: "Windows y macOS, en una sola app",
      cells: [
        yes("Windows 10 y 11, macOS 13 o posterior"),
        yes(),
        no("Windows y Linux; macOS anunciado"),
        no("Solo Windows"),
        no("Solo macOS"),
        no("Solo macOS 26 o posterior"),
        no("Solo macOS 15.6 o posterior"),
      ],
    },
    {
      label: "Reglas según la app de la que vino el enlace",
      cells: [
        yes("Todo lo de Slack en Brave, antes que cualquier regla por dirección"),
        no("Reglas solo por dirección"),
        yes("Por proceso y título de ventana"),
        no("Reglas solo por dirección"),
        yes("En su configuración en JavaScript"),
        yes(),
        yes(),
      ],
    },
    {
      label: "Perfiles del navegador detectados solos",
      cells: [
        yes("Los de Chromium; los de Firefox se agregan a mano"),
        yes(),
        yes("Chromium y Firefox, contenedores incluidos"),
        yes("Solo Chromium"),
        part("Se nombran en su archivo de configuración"),
        yes(),
        yes("Solo Chromium"),
      ],
    },
    {
      label: "Reglas sin escribir un archivo",
      cells: [
        yes("Desde la configuración, o recordando una elección"),
        yes("Recordando una elección"),
        yes("Los scripts en Lua son opcionales"),
        yes(),
        part("Un archivo JavaScript; editor visual solo en una alfa"),
        yes(),
        yes(),
      ],
    },
    {
      label: "Desenvuelve los SafeLinks de Microsoft antes de las reglas",
      cells: [
        yes("La regla y el selector ven la dirección real"),
        part("Expande enlaces cortos; no nombra SafeLinks"),
        yes("Y además expande enlaces cortos"),
        part("Sondeo de redirecciones opcional; no nombra SafeLinks"),
        part("Solo las reescrituras que escribas tú"),
        yes("Envoltorios de redirección conocidos"),
        no("Expande enlaces cortos solo en el selector"),
      ],
    },
    {
      label: "Un selector junto al cursor, que se maneja con teclas",
      cells: [
        yes("Del 1 al 9, o centrado si lo prefieres"),
        part("Teclas del 1 al 9; posición no documentada"),
        part("Teclas del 1 al 9, en la pantalla del cursor"),
        part("Teclas del 1 al 9; posición no documentada"),
        no("No tiene selector"),
        part("Teclas con letras; posición no documentada"),
        yes("Bajo el puntero, con ⌘1 a 9"),
      ],
    },
    {
      label: "Una ventana privada desde el selector",
      cells: [yes("Con Shift"), no("No documentado"), yes(), yes("Con Alt"), no("No tiene selector"), yes(), part("Algunos navegadores Chromium")],
    },
    {
      label: "Actualizaciones automáticas firmadas",
      cells: [
        yes("Se pueden apagar"),
        no("No documentado"),
        no("Por winget; versiones sin firmar"),
        no("No documentado"),
        part("Revisa si hay versión nueva"),
        yes("Por la Mac App Store"),
        part("Revisa si hay versión nueva"),
      ],
    },
    {
      label: "Gratis, sin versión de pago",
      own: "precios",
      cells: [yes(), yes(), yes("Solo donaciones"), yes(), yes(), no("De pago, con prueba"), no("De pago")],
    },
    {
      label: "Código abierto",
      cells: [yes("GPL-3.0-only"), no(), yes("Apache-2.0"), yes("MIT"), yes("MIT"), no(), no()],
    },
    {
      label: "Sin telemetría",
      cells: [
        yes("Solo revisa si hay versión nueva, sin enviar nada"),
        no("Datos de uso e informes de errores, según la política de WebCatalog"),
        yes("La quitó en la versión 6"),
        part("Sus páginas no lo dicen"),
        part("Sus páginas no lo dicen"),
        part("Informes de fallos anónimos"),
        yes(),
      ],
    },
    {
      label: "Linux",
      cells: [no(), no(), yes(), no(), no(), no(), no()],
    },
  ],
  stronger: {
    title: "Dónde los otros son más fuertes",
    lede: "Cada uno hace algo mejor que LinkUnbound, y vale la pena decir qué.",
    groups: [
      {
        items: [
          { name: "Switchbar", text: "Manda enlaces a las apps de escritorio y espacios de WebCatalog, y los de correo a Gmail, Outlook o Apple Mail, con extensiones para el navegador y Handoff en Mac." },
          { name: "Browser Tamer", text: "Funciona en Linux, encuentra solo los perfiles y contenedores de Firefox, quita rastreadores con ClearURLs y deja programar reglas en Lua con un depurador." },
          { name: "BrowserPicker", text: "Una versión portable que se registra sin permisos de administrador, navegadores ordenados según cuánto los eliges, y contenedores de Zen y Firefox." },
          { name: "Finicky", text: "Reglas y reescrituras de direcciones escritas en JavaScript o TypeScript, tan lejos como quieras llevarlas, hasta el título de la ventana de la que vino el enlace." },
          { name: "Velja", text: "Quita más de 200 parámetros de rastreo, transforma direcciones con JavaScript, tiene acciones para Atajos y abre los enlaces de Zoom, Teams, Meet y Figma directo en sus apps." },
          { name: "Choosy", text: "Reglas que también miran las teclas modificadoras, cuántos navegadores están abiertos, el tipo de enlace, AirDrop y Handoff, además de extensiones para el navegador y una API de direcciones." },
          { name: "LinkUnbound", text: "No tiene versión para Linux ni scripts más allá de lo que ofrece la configuración, los perfiles de Firefox se agregan a mano y las reglas se copian a mano a otro computador." },
        ],
      },
    ],
  },
  sources: "Fuentes",
  back: "Descargar LinkUnbound",
};

export const LINKUNBOUND: Comparison = { rivals: RIVALS, sources: SOURCES, en: EN, es: ES };
