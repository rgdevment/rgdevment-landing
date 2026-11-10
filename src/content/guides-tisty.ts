import type { Guide } from "./guide";

export const TISTY_GUIDES: Guide[] = [
  {
    id: "notes-outlive-the-app",
    product: "tisty",
    published: "2026-09-24",
    updated: "2026-11-08",
    en: {
      slug: "guides/notes-you-can-read-without-the-app",
      title: "Markdown notes you can read even if the app disappears",
      description:
        "Most note applications keep your writing in a format only they understand. How to find out what you would actually keep, and how to stop depending on it.",
      lede: "The question is not whether you trust the application today. It is what is left the day it shuts down, changes its terms, or the subscription lapses and your notes end up behind a wall you wrote yourself.",
      nativeTitle: "First, find out what you would actually keep",
      nativeSteps: [
        {
          title: "Export everything, today",
          body: "Most applications offer an export. Do it once and look at what comes out: whether it is one file per note or a single archive, and whether it opens in a plain text editor.",
        },
        {
          title: "Open one of those files without the application",
          body: "If a text editor shows you your note, you are fine. If it shows a database, an encrypted blob or markup you cannot read, that export is a ransom note rather than a copy.",
        },
        {
          title: "Check what the export leaves behind",
          body: "Attachments, the links between notes, tags and history are what usually do not survive. An export that loses the links between your notes has lost most of the work.",
        },
      ],
      gapTitle: "What an export does not fix",
      gap: [
        "It is a photograph, not a way of working. You have to remember to repeat it, and the day you need it is the day you forgot.",
        "Your daily notes still live inside the application, so the dependency is intact between one export and the next.",
        "If the format is proprietary, the export gives you something you can store but not read.",
      ],
      toolTitle: "Writing straight into files that are already yours",
      tool: [
        "Tisty keeps your documents as Markdown files and your tasks as a log of JSON lines, on your own disk. There is nothing to export, because the files are the notes.",
        "Any editor opens them, with Tisty running or not, installed or not.",
        "No accounts, no subscription, no telemetry. You choose how your data travels: your own cloud, your NAS or just this computer. Free and open source.",
        "Free and open source under the AGPL-3.0, for Windows and macOS.",
      ],
      faq: [
        {
          q: "What happens to my notes if the application stops being maintained?",
          a: "It depends entirely on the format. If they are plain files on your disk, nothing happens: any editor opens them. If they live in a proprietary database, you depend on an export that still works, on a machine where the application still runs.",
        },
        {
          q: "Is Markdown enough to be safe?",
          a: "Mostly yes, because it reads as text even when nothing understands the formatting. Look at where the attachments and the links between notes live, which is what varies from one application to another.",
        },
      ],
    },
    es: {
      slug: "guias/notas-que-puedes-leer-sin-la-aplicacion",
      title: "Notas en Markdown que podrás leer aunque la app desaparezca",
      description:
        "Casi todas las aplicaciones de notas guardan lo que escribes en un formato que solo entienden ellas. Cómo saber qué te quedaría y cómo no depender de eso.",
      lede: "La pregunta no es si te fías de la aplicación hoy. Es qué queda el día que cierre, cambie sus condiciones, o se acabe la suscripción y tus notas se queden detrás de un muro que escribiste tú.",
      nativeTitle: "Primero, averigua qué te quedaría de verdad",
      nativeSteps: [
        {
          title: "Exporta todo, hoy mismo",
          body: "Casi todas ofrecen exportar. Hazlo una vez y mira qué sale: si es un archivo por nota o un paquete único, y si se abre en un editor de texto corriente.",
        },
        {
          title: "Abre uno de esos archivos sin la aplicación",
          body: "Si un editor de texto te enseña tu nota, vas bien. Si te enseña una base de datos, un bloque cifrado o un marcado ilegible, esa exportación es un rescate, no una copia.",
        },
        {
          title: "Mira qué se deja la exportación por el camino",
          body: "Los adjuntos, los enlaces entre notas, las etiquetas y el historial son lo que no suele sobrevivir. Una exportación que pierde los enlaces entre tus notas ha perdido casi todo el trabajo.",
        },
      ],
      gapTitle: "Lo que una exportación no arregla",
      gap: [
        "Es una foto, no una forma de trabajar. Tienes que acordarte de repetirla, y el día que la necesitas es el día que se te olvidó.",
        "Tus notas del día a día siguen dentro de la aplicación, así que la dependencia sigue intacta entre una exportación y la siguiente.",
        "Si el formato es propietario, la exportación te da algo que puedes guardar pero no leer.",
      ],
      toolTitle: "Escribir directamente en archivos que ya son tuyos",
      tool: [
        "Tisty guarda tus documentos como archivos Markdown y tus tareas como un registro de líneas JSON, en tu propio disco. No hay nada que exportar, porque los archivos son las notas.",
        "Los abre cualquier editor, con Tisty abierto o cerrado, instalado o no.",
        "Sin cuentas, sin suscripción y sin telemetría. Tú eliges cómo viajan tus datos: tu nube, tu NAS o solo este equipo. Gratis y de código abierto.",
        "Gratuito y de código abierto bajo la AGPL-3.0, para Windows y macOS.",
      ],
      faq: [
        {
          q: "¿Qué pasa con mis notas si la aplicación deja de mantenerse?",
          a: "Depende enteramente del formato. Si son archivos corrientes en tu disco, no pasa nada: los abre cualquier editor. Si viven en una base de datos propietaria, dependes de que la exportación siga funcionando, en un equipo donde la aplicación todavía arranque.",
        },
        {
          q: "¿Basta con que use Markdown?",
          a: "Casi siempre sí, porque se lee como texto aunque nada entienda el formato. Fíjate en dónde viven los adjuntos y los enlaces entre notas, que es lo que cambia de una aplicación a otra.",
        },
      ],
    },
  },
  {
    id: "assistant-reads-notes",
    product: "tisty",
    published: "2026-09-24",
    en: {
      slug: "guides/let-an-assistant-read-your-notes",
      title: "Let an AI assistant read your notes without uploading them",
      description:
        "The usual way to let a model work with your notes is to hand them over. There is another: leave them where they are and open a door.",
      lede: "You want the assistant to know what you wrote last Tuesday. The obvious route is to paste it in, or to keep everything in a service the model already reads. Both end with your notes on somebody else's machine.",
      nativeTitle: "What people usually do",
      nativeSteps: [
        {
          title: "Copy and paste into the conversation",
          body: "Works for one note. It does not scale, and whatever you paste reaches the provider anyway.",
        },
        {
          title: "Keep the notes in a service the model can reach",
          body: "Convenient, and it means your notes live there from now on, under its terms and its outages.",
        },
        {
          title: "Upload a folder as attachments",
          body: "A snapshot, not a connection. Anything you write afterwards is not in it.",
        },
      ],
      gapTitle: "What that costs",
      gap: [
        "Your notes stop being only yours: they sit on a server, under terms you did not write.",
        "It goes one way. The assistant reads what you sent, but cannot write back into your notes.",
        "Every conversation starts from nothing unless you keep sending the same context again.",
      ],
      toolTitle: "Opening a door instead of handing over the room",
      tool: [
        "The Model Context Protocol lets an assistant talk to a program on your own machine, with your permission, rather than to a copy of your data in the cloud.",
        "Tisty runs an MCP server, so the assistant reads and writes your notes, documents and tasks where they already are.",
        "The assistant never takes the files off the machine: what travels is the answer to the question you asked.",
        "Free and open source, for Windows and macOS.",
      ],
      faq: [
        {
          q: "What is MCP?",
          a: "The Model Context Protocol, an open standard that lets an assistant talk to programs and data sources. Instead of uploading your files, the assistant asks a program running on your machine, and that program decides what to answer.",
        },
        {
          q: "Do my notes reach the model provider?",
          a: "Only what the assistant reads in order to answer a given question travels, inside the conversation itself. The files stay on your disk; the assistant uploads nothing and syncs nothing in the background.",
        },
      ],
    },
    es: {
      slug: "guias/que-un-asistente-lea-tus-notas",
      title: "Que un asistente lea tus notas sin subirlas a ninguna nube",
      description:
        "La forma habitual de que un modelo trabaje con tus notas es entregárselas. Hay otra: dejarlas donde están y abrir una puerta.",
      lede: "Quieres que el asistente sepa qué escribiste el martes pasado. Lo evidente es pegarlo, o tenerlo todo en un servicio que el modelo ya lee. Las dos cosas acaban con tus notas en el equipo de otro.",
      nativeTitle: "Lo que suele hacerse",
      nativeSteps: [
        {
          title: "Copiar y pegar en la conversación",
          body: "Vale para una nota. No escala, y lo que pegas llega al proveedor igualmente.",
        },
        {
          title: "Tener las notas en un servicio que el modelo alcance",
          body: "Es cómodo, y significa que tus notas viven ahí a partir de ahora, con sus condiciones y sus caídas.",
        },
        {
          title: "Subir una carpeta como adjuntos",
          body: "Es una foto, no una conexión. Lo que escribas después no está en ella.",
        },
      ],
      gapTitle: "Lo que eso cuesta",
      gap: [
        "Tus notas dejan de ser solo tuyas: están en un servidor, bajo condiciones que no escribiste tú.",
        "Va en un solo sentido. El asistente lee lo que mandaste, pero no puede escribir de vuelta en tus notas.",
        "Cada conversación empieza de cero salvo que vuelvas a mandar el mismo contexto.",
      ],
      toolTitle: "Abrir una puerta en vez de entregar la habitación",
      tool: [
        "El Model Context Protocol permite que un asistente hable con un programa de tu propio equipo, con tu permiso, en lugar de con una copia de tus datos en la nube.",
        "Tisty levanta un servidor MCP, así que el asistente lee y escribe tus notas, documentos y tareas donde ya están.",
        "El asistente no saca los archivos del equipo: lo que viaja es la respuesta a lo que preguntaste.",
        "Gratuito y de código abierto, para Windows y macOS.",
      ],
      faq: [
        {
          q: "¿Qué es MCP?",
          a: "El Model Context Protocol, un estándar abierto que permite a un asistente hablar con programas y fuentes de datos. En vez de subir tus archivos, el asistente pregunta a un programa que corre en tu equipo, y ese programa decide qué contesta.",
        },
        {
          q: "¿Mis notas llegan al proveedor del modelo?",
          a: "Solo viaja lo que el asistente lee para responder a una pregunta concreta, dentro de la propia conversación. Los archivos se quedan en tu disco; el asistente no sube ni sincroniza nada por detrás.",
        },
      ],
    },
  },
  {
    id: "share-a-document",
    product: "tisty",
    published: "2026-11-08",
    en: {
      slug: "guides/share-a-document-with-someone-without-tisty",
      title: "Share a document with someone who does not use Tisty",
      description:
        "Sending a copy is easy; getting it back is not. How to hand someone a document to read, encrypted, with no account and an end of its own.",
      lede: "Someone needs to read one of your documents: the notes for a handover, a recipe, the minutes of a meeting. They do not use Tisty, and you would rather the copy did not outlive the reason you sent it.",
      nativeTitle: "What people usually do",
      nativeSteps: [
        {
          title: "Attach it to an email or a chat",
          body: "Quick, and the file stays in their inbox and on the provider's servers for as long as they keep it. A Markdown file also arrives as raw text.",
        },
        {
          title: "Upload it to a cloud drive and share a link",
          body: "The link works until you remember to take it back, and the provider holds the file readable.",
        },
        {
          title: "Paste it into a message",
          body: "Fine for a paragraph. The tables, diagrams and pictures stay behind.",
        },
      ],
      gapTitle: "What that leaves behind",
      gap: [
        "A copy you no longer control, readable by whoever stores it.",
        "No end: it stays until somebody deletes it, if anybody does.",
        "Nothing that tells the reader the copy really came from you.",
      ],
      toolTitle: "How to share it from Tisty",
      tool: [
        "Open the document and, in the panel beside it, press Share… in the Shared row.",
        "The first time, Tisty makes the key that signs what you share, backed up with your 24-word phrase, and asks you to accept Folio's terms.",
        "Choose what the other person can do and how long it lasts without use, 15 days at most, and copy the link.",
        "Whoever gets it reads it in a browser, with no account. The page says which key signed it, and anything that should not be there can be reported.",
        "Folio keeps only encrypted bytes: the key travels in the link, after the #. Your document stays in your Tisty.",
      ],
      also: { line: "To learn about Folio, the service behind the link, visit its home:", url: "https://tisty.cl" },
      faq: [
        {
          q: "Does the other person need Tisty or an account?",
          a: "No. The link opens in any browser, with no account and nothing to install.",
        },
        {
          q: "Can Folio read what I share?",
          a: "No. Tisty encrypts it before it leaves, and the key travels in the link, after the #, which browsers never send. The exception is a report that hands the operator the link to read it, in the cases Folio's terms list.",
        },
        {
          q: "What if I lose the link?",
          a: "Nobody can recover it, because the server never had its key. While the document is shared, Tisty keeps its links: copy them again from its Shared row.",
        },
      ],
    },
    es: {
      slug: "guias/compartir-un-documento-con-quien-no-usa-tisty",
      title: "Comparte un documento con alguien que no usa Tisty",
      description:
        "Mandar una copia es fácil; recuperarla, no. Cómo darle a alguien un documento para leer, cifrado, sin cuenta y con un final propio.",
      lede: "Alguien necesita leer uno de tus documentos: las notas de una entrega, una receta, el acta de una reunión. No usa Tisty, y preferirías que la copia no durara más que el motivo por el que la mandaste.",
      nativeTitle: "Lo que suele hacerse",
      nativeSteps: [
        {
          title: "Adjuntarlo a un correo o a un chat",
          body: "Es rápido, y el archivo queda en su bandeja y en los servidores del proveedor mientras lo conserve. Un archivo Markdown, además, llega como texto sin formato.",
        },
        {
          title: "Subirlo a una nube y compartir un enlace",
          body: "El enlace funciona hasta que te acuerdes de retirarlo, y el proveedor guarda el archivo legible.",
        },
        {
          title: "Pegarlo en un mensaje",
          body: "Vale para un párrafo. Las tablas, los diagramas y las imágenes se quedan por el camino.",
        },
      ],
      gapTitle: "Lo que eso deja atrás",
      gap: [
        "Una copia que ya no controlas, legible para quien la guarda.",
        "Sin final: se queda hasta que alguien la borre, si es que alguien lo hace.",
        "Nada que le diga a quien lee que la copia salió de verdad de ti.",
      ],
      toolTitle: "Cómo compartirlo desde Tisty",
      tool: [
        "Abre el documento y, en el panel de al lado, pulsa Compartir… en la fila Compartido.",
        "La primera vez, Tisty crea la llave que firma lo que compartes, respaldada con tu frase de 24 palabras, y te pide aceptar los términos de Folio.",
        "Elige qué puede hacer la otra persona y cuánto dura sin uso, 15 días como mucho, y copia el enlace.",
        "Quien lo recibe lo lee en el navegador, sin cuenta. La página dice qué llave lo firmó, y lo que no debería estar ahí se puede denunciar.",
        "Folio guarda solo bytes cifrados: la llave va en el enlace, después del #. Tu documento sigue en tu Tisty.",
      ],
      also: { line: "Para conocer Folio, el servicio detrás del enlace, visita su sitio:", url: "https://tisty.cl/es/" },
      faq: [
        {
          q: "¿La otra persona necesita Tisty o una cuenta?",
          a: "No. El enlace se abre en cualquier navegador, sin cuenta y sin instalar nada.",
        },
        {
          q: "¿Folio puede leer lo que comparto?",
          a: "No. Tisty lo cifra antes de que salga, y la llave va en el enlace, después del #, que los navegadores nunca envían. La excepción es una denuncia que le entrega al operador el enlace para leerlo, en los casos que señalan los términos de Folio.",
        },
        {
          q: "¿Y si pierdo el enlace?",
          a: "Nadie puede recuperarlo, porque el servidor nunca tuvo su llave. Mientras el documento siga compartido, Tisty guarda sus enlaces: vuelve a copiarlos desde su fila Compartido.",
        },
      ],
    },
  },
];
