import type { Guide } from "./guide";

export const COPANDA_GUIDES: Guide[] = [
  {
    id: "windows-clipboard-history",
    product: "copanda",
    published: "2026-09-24",
    updated: "2026-11-26",
    en: {
      slug: "guides/windows-clipboard-history",
      title: "Windows clipboard history: what Win+V does, where it stops",
      description:
        "Windows keeps a clipboard history and most people never switch it on. How to enable it, and the three limits that make people look for something else.",
      lede: "Windows has had a clipboard history for years, hidden behind a shortcut nobody mentions. Turn it on first: for a lot of people it is enough, and it costs one setting.",
      nativeTitle: "First, switch on the one Windows already has",
      nativeSteps: [
        {
          title: "Press Windows + V",
          body: "If history is off, Windows offers to enable it right there.",
        },
        {
          title: "Or enable it in Settings",
          body: "Settings, System, Clipboard, and turn on Clipboard history.",
        },
        {
          title: "Pin what you want to keep",
          body: "Each entry has a pin. Pinned items survive a restart; everything else does not.",
        },
      ],
      gapTitle: "The three limits nobody tells you about",
      gap: [
        "It keeps 25 entries. The twenty-sixth pushes out the first, and there is no setting to raise it.",
        "It is wiped every time you restart, except what you pinned. The address you copied on Friday is gone on Monday.",
        "Each entry is capped at about 4 MB, so a large image simply does not make it into the history.",
        "There is no search: twenty-five entries is a list you scroll by hand. And while Win+V does respect the system exclusion flag from desktop password managers such as 1Password or Bitwarden, any secret or token copied from a browser, terminal or chat stays there in plain sight until you restart.",
      ],
      toolTitle: "When twenty-five is not enough",
      tool: [
        "CoPanda keeps a history that survives restarts and that you can search.",
        "What a password manager marks as secret is ignored, so the passwords it hands over never reach the history.",
        "History, images and settings can be exported and imported as a backup file.",
        "Free and open source under the GPL-3.0, for Windows and macOS.",
      ],
      faq: [
        {
          q: "How many items does the Windows clipboard history keep?",
          a: "Twenty-five. When a new one arrives the oldest is dropped, and the limit cannot be changed.",
        },
        {
          q: "Why is my clipboard history empty after restarting?",
          a: "Because Windows clears it on restart by design. Only pinned entries survive.",
        },
        {
          q: "Does the clipboard history store passwords?",
          a: "Windows 10 and 11 respect the system exclusion flag used by desktop password managers such as 1Password and Bitwarden, so those entries stay out. Passwords or tokens copied from a browser field, terminal or plain text file are still stored like any other text until cleared or restarted.",
        },
      ],
    },
    es: {
      slug: "guias/historial-del-portapapeles-en-windows",
      title: "Historial del portapapeles en Windows: los límites de Win+V",
      description:
        "Windows guarda un historial del portapapeles y casi nadie lo tiene activado. Cómo encenderlo, y los tres límites por los que la gente acaba buscando otra cosa.",
      lede: "Windows lleva años con un historial del portapapeles, escondido tras un atajo que nadie menciona. Enciéndelo primero: a mucha gente le basta, y cuesta un ajuste.",
      nativeTitle: "Primero, enciende el que Windows ya trae",
      nativeSteps: [
        {
          title: "Pulsa Windows + V",
          body: "Si el historial está apagado, Windows te ofrece activarlo ahí mismo.",
        },
        {
          title: "O actívalo en Configuración",
          body: "Configuración, Sistema, Portapapeles, y enciende el historial del portapapeles.",
        },
        {
          title: "Ancla lo que quieras conservar",
          body: "Cada entrada tiene un alfiler. Lo anclado sobrevive al reinicio; lo demás, no.",
        },
      ],
      gapTitle: "Los tres límites que nadie te cuenta",
      gap: [
        "Guarda 25 entradas. La vigesimosexta echa a la primera, y no hay ajuste para subirlo.",
        "Se borra cada vez que reinicias, salvo lo que anclaste. La dirección que copiaste el viernes ya no está el lunes.",
        "Cada entrada tiene un tope de unos 4 MB, así que una imagen grande sencillamente no entra en el historial.",
        "No hay búsqueda: veinticinco entradas son una lista que recorres a mano. Y aunque Win+V sí respeta la marca de exclusión de gestores de escritorio como 1Password o Bitwarden, cualquier clave o token que copies desde un navegador, la terminal o un chat queda guardada en claro hasta que reinicies.",
      ],
      toolTitle: "Cuando veinticinco no bastan",
      tool: [
        "CoPanda guarda un historial que sobrevive a los reinicios y en el que puedes buscar.",
        "Lo que un gestor de contraseñas marca como secreto se ignora, así que las contraseñas que entrega nunca entran en el historial.",
        "El historial, las imágenes y los ajustes se pueden exportar e importar como copia de seguridad.",
        "Gratuito y de código abierto bajo la GPL-3.0, para Windows y macOS.",
      ],
      faq: [
        {
          q: "¿Cuántos elementos guarda el historial del portapapeles de Windows?",
          a: "Veinticinco. Cuando entra uno nuevo se cae el más viejo, y el límite no se puede cambiar.",
        },
        {
          q: "¿Por qué mi historial del portapapeles está vacío tras reiniciar?",
          a: "Porque Windows lo borra al reiniciar, por diseño. Solo sobreviven las entradas ancladas.",
        },
        {
          q: "¿El historial del portapapeles guarda contraseñas?",
          a: "Windows 10 y 11 respetan la marca de exclusión del sistema que usan gestores de escritorio como 1Password y Bitwarden, así que esas contraseñas no se guardan. En cambio, las claves o tokens copiados desde un navegador, la terminal o un archivo de texto sí quedan en el historial como cualquier texto hasta que los borres o reinicies.",
        },
      ],
    },
  },
  {
    id: "mac-clipboard-history",
    product: "copanda",
    published: "2026-09-24",
    updated: "2026-11-08",
    en: {
      slug: "guides/clipboard-history-on-mac",
      title: "Mac clipboard history: why macOS has none and how to get one",
      description:
        "macOS remembers exactly one thing you copied. What the Finder can show you, and what you need if you want more than the last item.",
      lede: "Unlike Windows, macOS has no clipboard history at all. It holds the last thing you copied and that is the whole feature, which is why every Mac ends up with a third-party manager sooner or later.",
      nativeTitle: "What macOS itself offers",
      nativeSteps: [
        {
          title: "See what is on the clipboard",
          body: "In the Finder, open the Edit menu and choose Show Clipboard. A window appears with the current contents.",
        },
        {
          title: "That is all of it",
          body: "There is no list, no previous item and nothing to scroll. Copy again and the previous one is gone for good.",
        },
      ],
      gapTitle: "What that leaves you without",
      gap: [
        "No history: what you copied ten minutes ago cannot be recovered by any means.",
        "No search, because there is nothing to search.",
        "Nothing survives a restart, and nothing can be pinned.",
      ],
      toolTitle: "Giving the Mac the history it never had",
      tool: [
        "CoPanda keeps a searchable history of what you copy, on your own disk.",
        "It ignores what a password manager marks as secret, so the passwords it hands over stay out of it.",
        "The same application and the same history on Windows and macOS.",
        "Free and open source under the GPL-3.0.",
      ],
      faq: [
        {
          q: "Does macOS have a clipboard history like Windows?",
          a: "No. macOS keeps only the last item copied. The Finder can show it under Edit, Show Clipboard, but there is no list of previous items.",
        },
        {
          q: "Can I recover something I copied and then replaced?",
          a: "Not with macOS alone: the previous contents are gone. Only a clipboard manager running at the time would have kept it.",
        },
      ],
    },
    es: {
      slug: "guias/historial-del-portapapeles-en-mac",
      title: "Portapapeles en Mac: por qué no hay historial y cómo tenerlo",
      description:
        "macOS recuerda exactamente una cosa de las que copiaste. Qué puede enseñarte el Finder y qué necesitas si quieres algo más que el último elemento.",
      lede: "A diferencia de Windows, macOS no tiene historial del portapapeles. Guarda lo último que copiaste y esa es toda la función, y por eso cada Mac acaba tarde o temprano con un gestor de terceros.",
      nativeTitle: "Lo que ofrece el propio macOS",
      nativeSteps: [
        {
          title: "Ver qué hay en el portapapeles",
          body: "En el Finder, abre el menú Edición y elige Mostrar portapapeles. Aparece una ventana con el contenido actual.",
        },
        {
          title: "Y eso es todo",
          body: "No hay lista, ni elemento anterior, ni nada por lo que bajar. Copias otra cosa y lo anterior desaparece para siempre.",
        },
      ],
      gapTitle: "Lo que eso te deja sin",
      gap: [
        "Sin historial: lo que copiaste hace diez minutos no se recupera de ninguna manera.",
        "Sin búsqueda, porque no hay nada donde buscar.",
        "Nada sobrevive a un reinicio, y nada se puede anclar.",
      ],
      toolTitle: "Darle al Mac el historial que nunca tuvo",
      tool: [
        "CoPanda guarda en tu propio disco un historial de lo que copias, y puedes buscar dentro.",
        "Ignora lo que un gestor de contraseñas marca como secreto, así que las contraseñas que entrega se quedan fuera.",
        "La misma aplicación y el mismo historial en Windows y en macOS.",
        "Gratuito y de código abierto bajo la GPL-3.0.",
      ],
      faq: [
        {
          q: "¿macOS tiene historial del portapapeles como Windows?",
          a: "No. macOS guarda solo el último elemento copiado. El Finder puede enseñártelo en Edición, Mostrar portapapeles, pero no hay lista de elementos anteriores.",
        },
        {
          q: "¿Puedo recuperar algo que copié y luego reemplacé?",
          a: "Con macOS a secas no: el contenido anterior ya no está. Solo lo habría conservado un gestor de portapapeles que estuviera funcionando en ese momento.",
        },
      ],
    },
  },
  {
    id: "clipboard-offline-ocr",
    product: "copanda",
    published: "2026-11-26",
    en: {
      slug: "guides/extract-text-from-clipboard-screenshots-offline-ocr",
      title: "Extract text from clipboard screenshots with offline OCR",
      description:
        "How to copy text out of screenshots natively on Windows and macOS, and how to make every screenshot in your clipboard history searchable offline.",
      lede: "You take a screenshot of an error message, a receipt or a slide, paste it into chat, and an hour later you need the code inside it. Both Windows and macOS can read text on screen, yet neither makes your past screenshots searchable.",
      nativeTitle: "First, the tools Windows and macOS already give you",
      nativeSteps: [
        {
          title: "On Windows: Snipping Tool or PowerToys Text Extractor",
          body: "Open Snipping Tool's Text Actions on a screenshot, or press Win+Shift+T with Microsoft PowerToys to drag a box and copy text from the screen.",
        },
        {
          title: "On macOS: Live Text in Preview or Quick Look",
          body: "Open a saved screenshot in Preview or press Space in Finder and select the text directly inside the image.",
        },
      ],
      gapTitle: "Where those tools stop",
      gap: [
        "They only work on the image in front of you right now; you cannot search across twenty screenshots you copied yesterday.",
        "If you copied an image straight to the clipboard without saving a file, macOS loses it the next time you press Cmd+C.",
        "They do not transform what you extract — formatting JSON, converting a HEX color or stripping styles still takes extra steps.",
      ],
      toolTitle: "Searching and copying text inside clipboard images locally",
      tool: [
        "CoPanda runs offline OCR locally on screenshots you copy, so typing a word from an image finds that screenshot in your history immediately.",
        "Extract and paste the recognized text as plain text in one step, without uploading screenshots to any cloud service.",
        "Pair it with Paste as… to format or minify JSON, convert HEX/RGB/HSL colors or change text case on the fly.",
        "Free and open source under GPL-3.0 for Windows and macOS, with no account and no telemetry.",
      ],
      faq: [
        {
          q: "Does CoPanda upload my screenshots to recognize text?",
          a: "No. OCR runs locally on your computer using your system's capabilities, so screenshots never leave your disk.",
        },
        {
          q: "Can I search for words that only appeared inside an image?",
          a: "Yes. CoPanda indexes the text recognized inside copied images so the same search box finds both text entries and screenshots.",
        },
      ],
    },
    es: {
      slug: "guias/extraer-texto-de-capturas-en-el-portapapeles-ocr-local",
      title: "Extraer texto de capturas en el portapapeles con OCR local",
      description:
        "Cómo copiar texto desde capturas con las herramientas nativas de Windows y macOS, y cómo buscar dentro de cualquier captura guardada en tu portapapeles sin nube.",
      lede: "Haces una captura de un error, una boleta o una presentación, la pegas en un chat y una hora después necesitas el código que salía en esa imagen. Windows y macOS leen texto en pantalla, pero ninguno te deja buscar dentro de tus capturas pasadas.",
      nativeTitle: "Primero, lo que ya traen Windows y macOS",
      nativeSteps: [
        {
          title: "En Windows: Herramienta Recortes o PowerToys Text Extractor",
          body: "Usa Acciones de texto en Recortes sobre una captura abierta, o instala Microsoft PowerToys y pulsa Win+Shift+T para seleccionar un área en pantalla.",
        },
        {
          title: "En macOS: Texto en vivo en Vista Previa o Vista Rápida",
          body: "Abre una captura guardada en Vista Previa o pulsa Espacio en el Finder para seleccionar directamente el texto dentro de la imagen.",
        },
      ],
      gapTitle: "Dónde se quedan cortas",
      gap: [
        "Solo sirven sobre la imagen que tienes delante: no puedes buscar una palabra entre veinte capturas que copiaste ayer.",
        "Si copiaste la captura directo al portapapeles sin guardarla como archivo, macOS la borra en cuanto pulsas Cmd+C otra vez.",
        "No transforman lo copiado: formatear un JSON, pasar un color HEX a RGB o pegar sin estilos exige abrir otra herramienta.",
      ],
      toolTitle: "Buscar y copiar texto dentro de tus capturas en local",
      tool: [
        "CoPanda ejecuta OCR 100 % local sobre las capturas que copias, así que escribir una palabra de la imagen encuentra esa captura en tu historial al instante.",
        "Extrae y pega el texto reconocido como texto plano en un paso, sin subir tus imágenes a ninguna nube.",
        "Combínalo con Pegar como… para formatear o minificar JSON, convertir colores HEX/RGB/HSL o cambiar mayúsculas al pegar.",
        "Gratuito y de código abierto bajo GPL-3.0 para Windows y macOS, sin cuenta y sin telemetría.",
      ],
      faq: [
        {
          q: "¿CoPanda sube mis capturas a internet para leer el texto?",
          a: "No. El OCR se ejecuta localmente en tu equipo, así que ninguna imagen sale de tu disco.",
        },
        {
          q: "¿Puedo buscar palabras que solo aparecían dentro de una imagen?",
          a: "Sí. CoPanda indexa el texto reconocido en las capturas copiadas para que el mismo buscador encuentre textos e imágenes.",
        },
      ],
    },
  },
  {
    id: "maccy-ditto-alternative",
    product: "copanda",
    published: "2026-11-26",
    en: {
      slug: "guides/maccy-and-ditto-alternative-windows-mac",
      title: "A Maccy and Ditto alternative for both Windows and macOS",
      description:
        "Ditto is Windows-only and Maccy is macOS-only. What to consider if you work across both systems and want one open source clipboard manager.",
      lede: "If you use Ditto on Windows or Maccy on macOS, you already know how good a lightweight open source clipboard manager feels. The friction starts the day you use both systems and have to learn two shortcuts, two search habits and two backup formats.",
      nativeTitle: "Why people start with Ditto or Maccy",
      nativeSteps: [
        {
          title: "Ditto on Windows",
          body: "Open source, fast and battle-tested on Windows, with network sync and deep settings — but Windows-only and dated visually.",
        },
        {
          title: "Maccy on macOS",
          body: "Open source, minimal and native to macOS, loved for its speed and built-in image text search — but unavailable on Windows and without JSON or color paste transforms.",
        },
      ],
      gapTitle: "What you still miss across two machines",
      gap: [
        "Different apps, different shortcuts and different export formats between your Windows PC and your Mac.",
        "In Ditto, excluding password managers often means maintaining manual executable exclusion lists rather than relying purely on system secret flags.",
        "Neither combines local screenshot OCR, type filters, portable backups and Paste as… transforms (JSON formatting, HEX/RGB/HSL color conversion) across both Windows and macOS.",
      ],
      toolTitle: "One open source clipboard manager for both",
      tool: [
        "CoPanda runs natively on both Windows and macOS under GPL-3.0 with the same search, filters and portable backup file.",
        "It automatically ignores secrets marked by 1Password, Bitwarden and other desktop password managers.",
        "Includes offline OCR for screenshots and Paste as… transforms for developers and designers.",
        "Free, open source, local-first, with no account and no telemetry.",
      ],
      faq: [
        {
          q: "Is there a Maccy equivalent for Windows?",
          a: "Maccy itself is macOS-only. CoPanda brings a fast, open source, local-first clipboard history with offline image OCR and Paste as… transforms to both Windows and macOS.",
        },
        {
          q: "Does CoPanda replace Ditto if I need LAN clipboard sync?",
          a: "If you rely on Ditto's built-in peer-to-peer LAN sync between Windows PCs, Ditto is stronger there. CoPanda stays strictly local on each machine with manual backup export/import.",
        },
      ],
    },
    es: {
      slug: "guias/alternativa-a-maccy-en-windows-y-ditto-en-mac",
      title: "Alternativa a Maccy en Windows y a Ditto en Mac",
      description:
        "Ditto solo existe en Windows y Maccy solo en macOS. Qué conviene revisar si trabajas en ambos sistemas y buscas un solo gestor de portapapeles libre.",
      lede: "Si usas Ditto en Windows o Maccy en macOS, ya sabes lo cómodo que es un gestor de portapapeles libre y ligero. La fricción aparece cuando trabajas en ambos sistemas y te toca mantener dos atajos, dos formas de buscar y dos formatos distintos.",
      nativeTitle: "Por qué tanta gente empieza con Ditto o Maccy",
      nativeSteps: [
        {
          title: "Ditto en Windows",
          body: "De código abierto, rápido y muy probado en Windows, con sincronización por red local y muchos ajustes, pero exclusivo de Windows.",
        },
        {
          title: "Maccy en macOS",
          body: "De código abierto, minimalista y muy veloz en Mac (donde ya busca texto en imágenes), pero no existe en Windows ni ofrece transformaciones de pegado como JSON o colores.",
        },
      ],
      gapTitle: "Qué sigue faltando entre Windows y Mac",
      gap: [
        "Dos programas distintos, dos memorias musculares y copias de seguridad incompatibles entre tu PC y tu Mac.",
        "En Ditto, excluir gestores de contraseñas suele requerir listas manuales de ejecutables en vez de apoyarse solo en las marcas de secreto del sistema.",
        "Ninguno reúne en ambas plataformas OCR local sobre capturas, filtros por tipo, copias portables y Pegar como… (formatear JSON, convertir colores HEX/RGB/HSL).",
      ],
      toolTitle: "Un solo gestor libre para los dos sistemas",
      tool: [
        "CoPanda corre en Windows y macOS bajo licencia GPL-3.0 con la misma búsqueda, los mismos filtros y copias de seguridad portables.",
        "Ignora automáticamente lo que 1Password, Bitwarden y otros gestores de escritorio marcan como secreto.",
        "Incluye OCR offline sobre capturas y Pegar como… para desarrollo y diseño.",
        "Gratis, de código abierto, 100 % local, sin cuenta y sin telemetría.",
      ],
      faq: [
        {
          q: "¿Existe un equivalente a Maccy para Windows?",
          a: "Maccy es exclusivo de macOS. CoPanda ofrece un historial rápido, libre y local tanto en Windows como en macOS, sumando OCR offline y transformaciones al pegar.",
        },
        {
          q: "¿CoPanda reemplaza a Ditto si necesito sincronizar por red local?",
          a: "Si dependes de la sincronización LAN directa entre equipos Windows de Ditto, Ditto sigue siendo más fuerte en eso. CoPanda se mantiene estrictamente local con exportación e importación manual.",
        },
      ],
    },
  },
];
