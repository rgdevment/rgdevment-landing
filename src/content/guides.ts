import { COPANDA_GUIDES } from "./guides-copanda";
import { TISTY_GUIDES } from "./guides-tisty";
import type { Guide } from "./guide";

export type { Guide } from "./guide";
export { written } from "./guide";

const LINKUNBOUND_GUIDES: Guide[] = [
  {
    id: "teams-links",
    product: "linkunbound",
    published: "2026-09-24",
    en: {
      slug: "guides/open-teams-links-in-another-browser",
      title: "Open Teams links in a different browser (Windows and macOS)",
      description:
        "Microsoft Teams sends every link to Edge. Change the setting Teams already carries, and then decide what to do about the links that ignore it.",
      lede: "Teams hands links to Edge whatever your default browser is. There is a setting for that, and it is the first thing to try — it costs nothing and solves it for most people.",
      nativeTitle: "First, the setting Teams already has",
      nativeSteps: [
        {
          title: "Open the Teams settings",
          body: "Click your picture at the top right, then Settings.",
        },
        {
          title: "Go to Files and links",
          body: "Older builds call this section Files. Microsoft moves it around, so if the name does not match, look for the entry mentioning links.",
        },
        {
          title: "Set links to open in your default browser",
          body: "The option is usually called Link open preference, with Microsoft Edge and Default browser as the choices. Pick the default browser.",
        },
      ],
      gapTitle: "What that does not fix",
      gap: [
        "Some links still go straight to Edge down a channel of Microsoft's own that skips the default browser. Windows 11 does not allow another application to stand in the middle of it, so no tool can intercept those.",
        "Your default browser is still one browser. If you want work links in one and everything else in another, the setting does not help: it hands everything to the same place.",
        "Links from Teams arrive wrapped in SafeLinks, so what your browser receives is a Microsoft redirect rather than the address you were sent.",
      ],
      toolTitle: "Choosing per link instead",
      tool: [
        "LinkUnbound makes itself the default browser and then asks you, or applies a rule you set earlier.",
        "A rule can match the application a link came from, so everything Teams opens goes to one browser while the rest of your links go to another.",
        "SafeLinks are unwrapped before any rule is matched, so the rule sees the real destination and so do you.",
        "It is free and open source, for Windows and macOS, with no account and no telemetry.",
      ],
      faq: [
        {
          q: "Why does Teams open Edge even though Chrome is my default browser?",
          a: "Teams carries its own preference for where links open, and it ships set to Edge. Changing it under Settings, Files and links makes it respect the system default. Some links still bypass it through a channel only Edge answers to.",
        },
        {
          q: "Can I send only Teams links to one browser and keep the rest in another?",
          a: "Not with the Teams setting, which sends everything to the same default browser. A browser picker that matches on the source application can do it: the rule looks at where the link came from rather than at the address.",
        },
        {
          q: "What is a SafeLink?",
          a: "Microsoft rewrites links in Teams and Outlook so they pass through its own checking service first. The address your browser receives is that redirect, not the original, which is why rules based on the site often fail to match.",
        },
      ],
    },
    es: {
      slug: "guias/abrir-enlaces-de-teams-en-otro-navegador",
      title: "Abrir enlaces de Teams en otro navegador (Windows y macOS)",
      description:
        "Microsoft Teams manda todos los enlaces a Edge. Cambia el ajuste que Teams ya trae y decide después qué hacer con los enlaces que no lo respetan.",
      lede: "Teams entrega los enlaces a Edge sea cual sea tu navegador predeterminado. Hay un ajuste para eso, y es lo primero que conviene probar: no cuesta nada y a la mayoría le basta.",
      nativeTitle: "Primero, el ajuste que Teams ya tiene",
      nativeSteps: [
        {
          title: "Abre la configuración de Teams",
          body: "Pulsa tu foto arriba a la derecha y entra en Configuración.",
        },
        {
          title: "Entra en Archivos y enlaces",
          body: "En versiones anteriores la sección se llama solo Archivos. Microsoft la cambia de sitio, así que si el nombre no coincide busca la entrada que hable de enlaces.",
        },
        {
          title: "Elige que los enlaces se abran en tu navegador predeterminado",
          body: "La opción suele llamarse Preferencia de apertura de enlaces, con Microsoft Edge y Navegador predeterminado como alternativas. Elige la segunda.",
        },
      ],
      gapTitle: "Lo que eso no arregla",
      gap: [
        "Algunos enlaces siguen yendo directos a Edge por un canal propio de Microsoft que se salta el navegador predeterminado. Windows 11 no deja que otra aplicación se ponga en medio, así que ninguna herramienta puede interceptarlos.",
        "Tu navegador predeterminado sigue siendo uno solo. Si quieres lo del trabajo en uno y lo demás en otro, el ajuste no ayuda: lo manda todo al mismo sitio.",
        "Los enlaces de Teams llegan envueltos en SafeLinks, así que lo que recibe tu navegador es un redirector de Microsoft y no la dirección que te mandaron.",
      ],
      toolTitle: "Elegir enlace a enlace",
      tool: [
        "LinkUnbound se pone como navegador predeterminado y entonces te pregunta, o aplica la regla que dejaste puesta.",
        "Una regla puede ir por la aplicación de la que viene el enlace, así que todo lo que abre Teams va a un navegador mientras el resto va a otro.",
        "Los SafeLinks se desenvuelven antes de comparar ninguna regla, así que la regla ve la dirección real, y tú también.",
        "Es gratuito y de código abierto, para Windows y macOS, sin cuenta y sin telemetría.",
      ],
      faq: [
        {
          q: "¿Por qué Teams abre Edge si mi navegador predeterminado es Chrome?",
          a: "Teams tiene su propia preferencia sobre dónde abrir los enlaces, y viene puesta en Edge. Cambiarla en Configuración, Archivos y enlaces hace que respete el predeterminado del sistema. Aun así, algunos enlaces se saltan ese ajuste por un canal al que solo responde Edge.",
        },
        {
          q: "¿Puedo mandar solo los enlaces de Teams a un navegador y dejar el resto en otro?",
          a: "Con el ajuste de Teams no, porque lo manda todo al mismo navegador predeterminado. Un selector de navegador que sepa mirar la aplicación de origen sí puede: la regla mira de dónde viene el enlace en vez de mirar la dirección.",
        },
        {
          q: "¿Qué es un SafeLink?",
          a: "Microsoft reescribe los enlaces de Teams y Outlook para que pasen antes por su propio servicio de comprobación. La dirección que recibe tu navegador es ese redirector y no la original, y por eso fallan tantas veces las reglas basadas en el sitio.",
        },
      ],
    },
  },
  {
    id: "outlook-links",
    product: "linkunbound",
    published: "2026-09-24",
    updated: "2026-11-26",
    en: {
      slug: "guides/open-outlook-links-in-chrome-or-firefox",
      title: "Open Outlook links in Chrome or Firefox instead of Edge",
      description:
        "How to change link handling in classic Outlook and the new Outlook on Windows 11, and how to route work emails to the right browser or profile.",
      lede: "Outlook on Windows keeps its own link behaviour, separate from your system default. Whether you use classic Outlook or the new Outlook on Windows 11, start with the built-in setting first.",
      nativeTitle: "First, the settings Outlook already has",
      nativeSteps: [
        {
          title: "In classic Outlook: File, Options, Advanced",
          body: "Scroll to Link Handling and change «Open hyperlinks from Outlook in» from Microsoft Edge to Default Browser.",
        },
        {
          title: "In the new Outlook on Windows 11: Settings, General",
          body: "Open the gear icon, check General for link preferences when offered by your build, and confirm your Windows default apps under Settings, Apps, Default apps for HTTP and HTTPS.",
        },
        {
          title: "Test a link outside Microsoft 365",
          body: "Click a regular website link in an email to confirm Outlook now hands it to your Windows default browser instead of Edge.",
        },
      ],
      gapTitle: "What that does not fix",
      gap: [
        "It sends every link to the same browser. A newsletter and a work ticket end up in the same window.",
        "Links rewritten as SafeLinks still arrive as a Microsoft redirect.",
        "If you keep separate browser profiles for work and personal use, the setting knows nothing about them.",
      ],
      toolTitle: "Deciding per link",
      tool: [
        "LinkUnbound can ask every time, or route by the site, by the profile, or by the application the link came from.",
        "A rule can point at a particular Chrome or Edge profile, not just at the browser.",
        "Free and open source, Windows and macOS, no account and no telemetry.",
      ],
      faq: [
        {
          q: "Why do Outlook links ignore my default browser?",
          a: "Classic Outlook carries its own preference under File, Options, Advanced. Until it is set to the default browser, it overrides what Windows says.",
        },
        {
          q: "How does the new Outlook on Windows 11 handle links?",
          a: "The new Outlook follows Windows default HTTP/HTTPS handlers for regular links unless your build exposes a link preference under Settings, General, though Microsoft still routes some internal side-pane links directly to Edge.",
        },
      ],
    },
    es: {
      slug: "guias/abrir-enlaces-de-outlook-en-chrome-o-firefox",
      title: "Abrir enlaces de Outlook en Chrome o Firefox en vez de Edge",
      description:
        "Cómo cambiar dónde abre los enlaces el Outlook clásico y el nuevo Outlook de Windows 11, y cómo mandar cada correo al navegador o perfil correcto.",
      lede: "Outlook en Windows maneja los enlaces con sus propias reglas, aparte del navegador predeterminado. Tanto en el Outlook clásico como en el nuevo Outlook de Windows 11, conviene empezar por el ajuste integrado.",
      nativeTitle: "Primero, los ajustes que Outlook ya tiene",
      nativeSteps: [
        {
          title: "En el Outlook clásico: Archivo, Opciones, Avanzado",
          body: "Baja hasta la sección de hipervínculos y cambia «Abrir hipervínculos de Outlook en» de Microsoft Edge a Navegador predeterminado.",
        },
        {
          title: "En el nuevo Outlook de Windows 11: Configuración, General",
          body: "Pulsa el ícono del engranaje, revisa en General si tu compilación muestra la preferencia de vínculos y verifica en Windows (Configuración, Aplicaciones, Aplicaciones predeterminadas) el navegador asignado a HTTP y HTTPS.",
        },
        {
          title: "Prueba con un enlace corriente",
          body: "Pulsa un enlace normal dentro de un correo para confirmar que Outlook ya lo entrega al navegador predeterminado de Windows en lugar de Edge.",
        },
      ],
      gapTitle: "Lo que eso no arregla",
      gap: [
        "Manda todos los enlaces al mismo navegador. Un boletín y un ticket del trabajo acaban en la misma ventana.",
        "Los enlaces reescritos como SafeLinks siguen llegando como un redirector de Microsoft.",
        "Si mantienes perfiles separados para el trabajo y lo personal, el ajuste no sabe nada de ellos.",
      ],
      toolTitle: "Decidir enlace a enlace",
      tool: [
        "LinkUnbound puede preguntar cada vez, o decidir por el sitio, por el perfil, o por la aplicación de la que viene el enlace.",
        "Una regla puede apuntar a un perfil concreto de Chrome o de Edge, no solo al navegador.",
        "Gratuito y de código abierto, Windows y macOS, sin cuenta y sin telemetría.",
      ],
      faq: [
        {
          q: "¿Por qué los enlaces de Outlook ignoran mi navegador predeterminado?",
          a: "El Outlook clásico tiene su propia preferencia en Archivo, Opciones, Avanzado. Mientras no esté puesta en el navegador predeterminado, manda sobre lo que diga Windows.",
        },
        {
          q: "¿Cómo maneja los enlaces el nuevo Outlook en Windows 11?",
          a: "El nuevo Outlook usa el navegador predeterminado de Windows para HTTP/HTTPS salvo cuando tu versión muestra una preferencia propia en Configuración, General, aunque Microsoft sigue abriendo algunos paneles internos directamente en Edge.",
        },
      ],
    },
  },
  {
    id: "chrome-profile",
    product: "linkunbound",
    published: "2026-09-24",
    updated: "2026-11-08",
    en: {
      slug: "guides/send-work-links-to-a-chrome-profile",
      title: "Open links in a specific Chrome profile, work or personal",
      description:
        "Chrome opens links in whichever profile was last used. Here is why that happens and how to route a link to the profile you meant.",
      lede: "If you keep a work profile and a personal one, Chrome does not ask which you meant. It opens the last one used, and you find out when the page says you are signed in as the wrong person.",
      nativeTitle: "What Chrome itself offers",
      nativeSteps: [
        {
          title: "Each profile can be its own shortcut",
          body: "Chrome can create a desktop shortcut per profile, which opens that profile directly. It works when you start from the shortcut, not when a link arrives from another application.",
        },
        {
          title: "One profile can be made default",
          body: "Only one, and it applies to every link.",
        },
      ],
      gapTitle: "What that does not fix",
      gap: [
        "A link clicked in Slack, Teams or a PDF goes to whichever profile Chrome had open, not to the one that belongs with the link.",
        "There is no way in Chrome to say which sites belong to which profile.",
      ],
      toolTitle: "Routing by profile",
      tool: [
        "LinkUnbound detects the Chromium profiles installed on the machine, so a rule can name one.",
        "The rule can match the site, so your company's domains always land in the work profile.",
        "Or it can match the source application, so everything Slack opens goes to the work profile regardless of the address.",
        "Free and open source, Windows and macOS.",
      ],
      faq: [
        {
          q: "Why does Chrome open the wrong profile?",
          a: "Chrome opens external links in the profile that was used last. It has no notion of which sites belong to which profile, so anything arriving from outside Chrome lands wherever it happens to be.",
        },
        {
          q: "Does this work with Edge profiles too?",
          a: "Yes. Any Chromium-based browser keeps its profiles the same way, so the same kind of rule applies.",
        },
      ],
    },
    es: {
      slug: "guias/enviar-enlaces-de-trabajo-a-un-perfil-de-chrome",
      title: "Abrir enlaces en un perfil de Chrome, trabajo o personal",
      description:
        "Chrome abre los enlaces en el perfil que se usó la última vez. Por qué pasa y cómo mandar cada enlace al perfil que corresponde.",
      lede: "Si tienes un perfil del trabajo y otro personal, Chrome no pregunta cuál querías. Abre el último que usaste, y te enteras cuando la página te saluda con el nombre equivocado.",
      nativeTitle: "Lo que ofrece el propio Chrome",
      nativeSteps: [
        {
          title: "Cada perfil puede tener su acceso directo",
          body: "Chrome puede crear un acceso directo por perfil que lo abre directamente. Sirve cuando empiezas desde ese acceso directo, no cuando el enlace llega desde otra aplicación.",
        },
        {
          title: "Un perfil puede ser el predeterminado",
          body: "Solo uno, y vale para todos los enlaces.",
        },
      ],
      gapTitle: "Lo que eso no arregla",
      gap: [
        "Un enlace pulsado en Slack, en Teams o en un PDF va al perfil que Chrome tuviera abierto, no al que le corresponde.",
        "Chrome no permite decir qué sitios pertenecen a qué perfil.",
      ],
      toolTitle: "Decidir por perfil",
      tool: [
        "LinkUnbound detecta los perfiles de Chromium instalados en el equipo, así que una regla puede nombrar uno.",
        "La regla puede ir por el sitio, para que los dominios de tu empresa caigan siempre en el perfil del trabajo.",
        "O puede ir por la aplicación de origen, para que todo lo que abre Slack vaya al perfil del trabajo sea cual sea la dirección.",
        "Gratuito y de código abierto, Windows y macOS.",
      ],
      faq: [
        {
          q: "¿Por qué Chrome abre el perfil equivocado?",
          a: "Chrome abre los enlaces externos en el perfil que se usó la última vez. No tiene ninguna noción de qué sitios pertenecen a qué perfil, así que lo que llega de fuera cae donde toque.",
        },
        {
          q: "¿Sirve también con los perfiles de Edge?",
          a: "Sí. Cualquier navegador basado en Chromium guarda sus perfiles igual, así que vale el mismo tipo de regla.",
        },
      ],
    },
  },
  {
    id: "browserosaurus",
    product: "linkunbound",
    published: "2026-09-24",
    en: {
      slug: "guides/browserosaurus-alternative",
      title: "A Browserosaurus alternative that is still maintained",
      description:
        "Browserosaurus is no longer maintained and its own readme points elsewhere. What the alternatives are, on macOS and on Windows.",
      lede: "Browserosaurus was the browser picker a lot of people on macOS settled on. Its author has stopped maintaining it and the readme now sends readers to other projects. If you are looking for where to go next, this is the landscape.",
      nativeTitle: "What happened to Browserosaurus",
      nativeSteps: [
        {
          title: "It is no longer maintained",
          body: "The repository says so at the top, and points its readers at Browserino.",
        },
        {
          title: "It still works, for now",
          body: "An unmaintained application keeps running until an operating system release breaks it. That is the risk you carry by staying.",
        },
      ],
      gapTitle: "What the alternatives are",
      gap: [
        "Browserino, macOS only, GPL-3.0. The one Browserosaurus itself recommends.",
        "Finicky, macOS only, MIT. Configured by writing a file rather than by clicking.",
        "Velja, macOS only, free but closed source.",
        "Choosy, macOS only, paid.",
        "LinkUnbound, Windows and macOS, GPL-3.0.",
      ],
      toolTitle: "If you also use Windows",
      tool: [
        "Most pickers exist for one platform only, which means learning two tools and keeping two sets of rules.",
        "LinkUnbound is one application for both, with the same rules and the same window.",
        "It matches on the site, on the browser profile, or on the application a link came from, and unwraps Microsoft SafeLinks.",
        "Free and open source, no account and no telemetry.",
      ],
      faq: [
        {
          q: "Is Browserosaurus dead?",
          a: "It is not maintained any more. The repository is still there and the application still runs, but no new releases are coming, and the readme points readers at Browserino.",
        },
        {
          q: "Which browser picker works on Windows and macOS?",
          a: "Most are built for one platform. Browserino, Finicky, Velja and Choosy are macOS only; BrowserPicker and Browser Tamer are Windows. LinkUnbound and Switchbar cover both, and of those only LinkUnbound is open source.",
        },
      ],
    },
    es: {
      slug: "guias/alternativa-a-browserosaurus",
      title: "Una alternativa a Browserosaurus que siga mantenida",
      description:
        "Browserosaurus ya no se mantiene y su propio readme remite a otros proyectos. Cuáles son las alternativas, en macOS y en Windows.",
      lede: "Browserosaurus fue el selector de navegador en el que mucha gente de macOS se quedó. Su autor dejó de mantenerlo y el readme manda ahora a sus lectores a otros proyectos. Si buscas adónde ir, este es el panorama.",
      nativeTitle: "Qué pasó con Browserosaurus",
      nativeSteps: [
        {
          title: "Ya no se mantiene",
          body: "El repositorio lo dice arriba del todo y remite a sus lectores a Browserino.",
        },
        {
          title: "Sigue funcionando, por ahora",
          body: "Una aplicación sin mantenimiento funciona hasta que una versión del sistema la rompe. Ese es el riesgo de quedarse.",
        },
      ],
      gapTitle: "Cuáles son las alternativas",
      gap: [
        "Browserino, solo macOS, GPL-3.0. Es la que el propio Browserosaurus recomienda.",
        "Finicky, solo macOS, MIT. Se configura escribiendo un archivo en vez de pulsando.",
        "Velja, solo macOS, gratuito pero de código cerrado.",
        "Choosy, solo macOS, de pago.",
        "LinkUnbound, Windows y macOS, GPL-3.0.",
      ],
      toolTitle: "Si además usas Windows",
      tool: [
        "Casi todos los selectores existen para una sola plataforma, lo que obliga a aprender dos herramientas y mantener dos juegos de reglas.",
        "LinkUnbound es una sola aplicación para las dos, con las mismas reglas y la misma ventana.",
        "Decide por el sitio, por el perfil del navegador o por la aplicación de la que viene el enlace, y desenvuelve los SafeLinks de Microsoft.",
        "Gratuito y de código abierto, sin cuenta y sin telemetría.",
      ],
      faq: [
        {
          q: "¿Browserosaurus está muerto?",
          a: "Ya no se mantiene. El repositorio sigue ahí y la aplicación todavía funciona, pero no vendrán versiones nuevas, y el readme remite a Browserino.",
        },
        {
          q: "¿Qué selector de navegador funciona en Windows y en macOS?",
          a: "Casi todos están hechos para una sola plataforma. Browserino, Finicky, Velja y Choosy son solo de macOS; BrowserPicker y Browser Tamer son de Windows. LinkUnbound y Switchbar cubren las dos, y de esos solo LinkUnbound es de código abierto.",
        },
      ],
    },
  },
  {
    id: "unwrap-safelinks",
    product: "linkunbound",
    published: "2026-11-26",
    en: {
      slug: "guides/unwrap-microsoft-safelinks-before-opening-browser",
      title: "Unwrap Microsoft SafeLinks before opening your browser",
      description:
        "Outlook and Teams wrap links in safelinks.protection.outlook.com redirects that break browser routing rules. How they work and how to unwrap them locally.",
      lede: "Microsoft Defender SafeLinks rewrites every URL inside work emails and Teams chats into a long redirect under safelinks.protection.outlook.com. That breaks domain rules, clutters shared links and hides where a click really goes.",
      nativeTitle: "What you can check first",
      nativeSteps: [
        {
          title: "Hover before clicking",
          body: "Outlook usually shows the original target in the tooltip even though the underlying href points to safelinks.protection.outlook.com.",
        },
        {
          title: "Inspect the url= parameter when copying",
          body: "The real destination sits encoded inside the url= query parameter. You can decode it by hand or with a browser extension after the tab already opened.",
        },
      ],
      gapTitle: "Why browser extensions arrive too late",
      gap: [
        "By the time a browser extension decodes a SafeLink, Windows or macOS has already opened the wrong browser or wrong work profile.",
        "Domain routing rules fail because the host they see is always safelinks.protection.outlook.com instead of github.com, jira or figma.com.",
        "Disabling SafeLinks globally requires an Exchange administrator policy and is usually blocked on corporate tenants.",
      ],
      toolTitle: "Unwrapping before any rule runs",
      tool: [
        "LinkUnbound sits between Outlook or Teams and your browsers, unwrapping Microsoft SafeLinks locally on your machine before matching any rule.",
        "Both the rule engine and the picker beside your cursor see the real destination address immediately.",
        "Your work Jira, GitHub and Figma links land in the exact Chrome, Edge or Firefox profile they belong to.",
        "Free and open source under GPL-3.0 for Windows and macOS, with no account and no telemetry.",
      ],
      faq: [
        {
          q: "Does unwrapping SafeLinks send my URLs to a third-party server?",
          a: "Not in LinkUnbound. The real URL is already embedded inside the SafeLink query string, so LinkUnbound extracts it locally on your machine with zero network requests.",
        },
        {
          q: "Why do browser-picker rules fail on Outlook and Teams links?",
          a: "Because the incoming URL starts with *.safelinks.protection.outlook.com instead of the actual destination domain. Unwrapping it first lets domain rules match reliably.",
        },
      ],
    },
    es: {
      slug: "guias/desenvolver-safelinks-de-outlook-y-teams-automaticamente",
      title: "Desenvolver SafeLinks de Outlook y Teams antes de abrir el navegador",
      description:
        "Outlook y Teams envuelven los enlaces en safelinks.protection.outlook.com y rompen tus reglas de navegador. Cómo funcionan y cómo desenvolverlos en local.",
      lede: "Microsoft Defender SafeLinks reescribe cada URL en correos de trabajo y chats de Teams en un redirector largo bajo safelinks.protection.outlook.com. Eso rompe las reglas por dominio, ensucia los enlaces al copiarlos y oculta el destino real.",
      nativeTitle: "Qué puedes comprobar primero",
      nativeSteps: [
        {
          title: "Pasa el cursor antes de pulsar",
          body: "Outlook suele mostrar el destino original en la vista previa aunque el enlace real apunte a safelinks.protection.outlook.com.",
        },
        {
          title: "Extrae el parámetro url= al copiar",
          body: "La dirección verdadera viaja codificada dentro del parámetro url=. Puedes decodificarla a mano o con una extensión cuando la pestaña ya se abrió.",
        },
      ],
      gapTitle: "Por qué las extensiones del navegador llegan tarde",
      gap: [
        "Cuando una extensión decodifica el SafeLink, Windows o macOS ya abrieron el navegador equivocado o el perfil personal en vez del perfil de trabajo.",
        "Las reglas por dominio fallan porque el host que reciben siempre es safelinks.protection.outlook.com en lugar de github.com, jira o figma.com.",
        "Desactivar SafeLinks requiere permisos de administrador de Microsoft 365 y casi nunca está disponible para el usuario.",
      ],
      toolTitle: "Desenvolver antes de evaluar ninguna regla",
      tool: [
        "LinkUnbound se sitúa entre Outlook o Teams y tus navegadores, desenvolviendo los SafeLinks de Microsoft localmente antes de evaluar cualquier regla.",
        "Tanto el motor de reglas como el selector junto al cursor ven la dirección real al instante.",
        "Tus enlaces de Jira, GitHub o Figma aterrizan en el perfil exacto de Chrome, Edge o Firefox que corresponde.",
        "Gratuito y de código abierto bajo GPL-3.0 para Windows y macOS, sin cuenta y sin telemetría.",
      ],
      faq: [
        {
          q: "¿Desenvolver SafeLinks envía mis enlaces a algún servidor externo?",
          a: "No en LinkUnbound. La dirección real ya viene dentro de la cadena de consulta del SafeLink, así que LinkUnbound la extrae en tu equipo sin hacer peticiones de red.",
        },
        {
          q: "¿Por qué fallan las reglas por sitio en enlaces de Outlook y Teams?",
          a: "Porque la URL entrante empieza por *.safelinks.protection.outlook.com en lugar del dominio real. Al desenvolverlo antes, las reglas por dominio vuelven a coincidir.",
        },
      ],
    },
  },
];

/// Named in the order the products are named everywhere else: Tisty, LinkUnbound, CoPanda.
export const GUIDES: Guide[] = [...TISTY_GUIDES, ...LINKUNBOUND_GUIDES, ...COPANDA_GUIDES];
