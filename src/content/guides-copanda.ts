import type { Guide } from "./guide";

export const COPANDA_GUIDES: Guide[] = [
  {
    id: "windows-clipboard-history",
    product: "copanda",
    published: "2026-09-24",
    en: {
      slug: "guides/windows-clipboard-history",
      title: "Windows clipboard history: what Win+V does and where it stops",
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
        "There is no search. Twenty-five entries is a list you scroll, and it does not tell a password apart from a shopping list.",
      ],
      toolTitle: "When twenty-five is not enough",
      tool: [
        "CoPanda keeps a history that survives restarts and that you can search.",
        "Clipboard content coming from password managers is ignored, so credentials never reach the history.",
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
          a: "Windows does not tell one kind of text from another, so anything you copy can end up there. A dedicated manager can ignore what comes from a password manager.",
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
        "No hay búsqueda. Veinticinco entradas son una lista por la que bajas a mano, y no distingue una contraseña de la lista de la compra.",
      ],
      toolTitle: "Cuando veinticinco no bastan",
      tool: [
        "CoPanda guarda un historial que sobrevive a los reinicios y en el que puedes buscar.",
        "Lo que llega al portapapeles desde un gestor de contraseñas se ignora, así que las credenciales nunca entran en el historial.",
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
          a: "Windows no distingue un tipo de texto de otro, así que cualquier cosa que copies puede acabar ahí. Un gestor dedicado sí puede ignorar lo que venga de un gestor de contraseñas.",
        },
      ],
    },
  },
  {
    id: "mac-clipboard-history",
    product: "copanda",
    published: "2026-09-24",
    en: {
      slug: "guides/clipboard-history-on-mac",
      title: "Clipboard history on macOS: why there is not one",
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
        "It ignores clipboard content from password managers, so credentials stay out of it.",
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
      title: "Historial del portapapeles en macOS: por qué no hay ninguno",
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
        "Ignora lo que llega al portapapeles desde un gestor de contraseñas, así que las credenciales se quedan fuera.",
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
];
