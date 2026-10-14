import type { Locale } from "../site";

type Words = {
  tagline: string;
  /// Only where name plus tagline runs past what a result page shows.
  title?: string;
  meta: string;
  problem: string;
  what: string[];
  privacy: string;
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
    winget: "rgdevment.Tisty",
    cask: "tisty",
    shot: {
      src: "/tisty-social.png",
      srcEs: "/tisty-social-es.png",
      width: 1280,
      height: 640,
      en: "Tisty: the day's tasks beside the documents they left behind, kept as files on disk",
      es: "Tisty: las tareas del dia junto a los documentos que dejaron, guardados como archivos en disco",
    },
    accent: "#6F4BD8",
    icon: "/icons/tisty.png",
    en: {
      tagline: "Notes, documents and tasks. The record of what you learned solving them.",
      title: "Tisty - Notes, documents and tasks on your own disk",
      meta: "Notes, documents and tasks as plain files on your own disk, for Windows and macOS. Free and open source: no Tisty account, no server, no subscription.",
      problem:
        "A task list forgets the moment you tick the box. Six months later the same problem comes back and all that is left is knowing you solved it once, somehow.",
      what: [
        "What you finish stays: the steps you took, the dated journal, the files and the documents you leaned on. Months later you search for how you solved it, and it is there.",
        "Notes, documents and tasks kept as plain files on your own disk, readable without Tisty running.",
        "No accounts, no subscription, no telemetry. You choose how your data travels: your own cloud, your NAS or just this computer. Free and open source.",
        "An MCP door your assistant can knock on, so a model can read and write what you keep, with your permission.",
      ],
      privacy:
        "Local-first by design. The files are yours and readable without Tisty running.",
      faq: [
        {
          q: "What happens to my notes if Tisty disappears?",
          a: "Nothing. They are plain files on your disk and any editor opens them.",
        },
        {
          q: "What is the MCP door for?",
          a: "It lets an assistant read and write your notes and tasks through the Model Context Protocol, on your machine and with your permission.",
        },
      ],
    },
    es: {
      tagline: "Notas, documentos y tareas. El historial de lo que aprendiste resolviendo.",
      title: "Tisty - Notas, documentos y tareas en tu propio disco",
      meta: "Notas, documentos y tareas en archivos de tu propio disco, para Windows y macOS. Gratis y de código abierto: sin cuenta de Tisty, sin servidor y sin suscripción.",
      problem:
        "Una lista de tareas olvida en cuanto marcas la casilla. Seis meses después vuelve el mismo problema y lo único que queda es saber que ya lo resolviste una vez, de alguna manera.",
      what: [
        "Lo que cierras se queda: los pasos que diste, el diario con su fecha, los archivos y los documentos en que te apoyaste. Meses después buscas cómo lo resolviste, y está.",
        "Notas, documentos y tareas guardados como archivos corrientes en tu propio disco, legibles sin Tisty abierto.",
        "Sin cuentas, sin suscripción y sin telemetría. Tú eliges cómo viajan tus datos: tu nube, tu NAS o solo este equipo. Gratis y de código abierto.",
        "Una puerta MCP a la que tu asistente puede llamar, para que un modelo lea y escriba lo que guardas, con tu permiso.",
      ],
      privacy:
        "Local por diseño. Los archivos son tuyos y se leen sin que Tisty esté abierto.",
      faq: [
        {
          q: "¿Qué pasa con mis notas si Tisty desaparece?",
          a: "Nada. Son archivos corrientes en tu disco y los abre cualquier editor.",
        },
        {
          q: "¿Para qué sirve la puerta MCP?",
          a: "Permite que un asistente lea y escriba tus notas y tareas por el Model Context Protocol, en tu equipo y con tu permiso.",
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
      width: 1280,
      height: 640,
      en: "LinkUnbound: the picker beside a link, listing the installed browsers with the profile each one opens",
      es: "LinkUnbound: el selector junto a un enlace, con los navegadores instalados y el perfil en que abre cada uno",
    },
    accent: "#2F62D8",
    icon: "/icons/linkunbound.png",
    en: {
      tagline: "Choose which browser opens every link.",
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
    slug: "copypaste",
    name: "CopyPaste",
    repo: "https://github.com/rgdevment/CopyPaste",
    licence: "GPL-3.0",
    platforms: ["Windows", "macOS"],
    storeId: "9NBJRZF3K856",
    cask: "copypaste",
    shot: {
      src: "/copypaste-social.png",
      srcEs: "/copypaste-social-es.png",
      width: 1280,
      height: 640,
      en: "CopyPaste 3.0: the clipboard panel with its search box, filters by kind and a history of text and images",
      es: "CopyPaste 3.0: el panel del portapapeles con su buscador, los filtros por tipo y un historial de textos e imágenes",
    },
    accent: "#1E7A52",
    icon: "/icons/copypaste.png",
    en: {
      tagline: "Everything you copied, still there.",
      meta: "Free, open source clipboard manager for Windows and macOS. A searchable local history of what you copy that ignores your password manager.",
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
      faq: [
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
      tagline: "Todo lo que copiaste, ahí sigue.",
      meta: "Gestor de portapapeles gratuito y de código abierto para Windows y macOS. Historial local y buscable de lo que copias, que ignora tu gestor de contraseñas.",
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
      faq: [
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

export function releasesUrl(product: Product): string {
  return `${product.repo}/releases`;
}

export function storeUrl(product: Product): string | null {
  return product.storeId ? `https://apps.microsoft.com/detail/${product.storeId}` : null;
}
