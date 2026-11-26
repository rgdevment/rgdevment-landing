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
    id: "agent-memory-between-sessions",
    product: "tisty",
    published: "2026-11-11",
    en: {
      slug: "guides/ai-agent-memory-between-sessions",
      title: "Give your AI coding agent memory that lasts between sessions",
      description:
        "GitHub Copilot, Claude Code, Codex and Cursor forget everything when a session ends. Why Markdown files fall short, and a memory your agent reads by section.",
      lede: "Your agent is brilliant at the file in front of it and forgets the picture: why something was decided six months ago, what failed last time, what is still left. Every new session starts with you explaining the project again.",
      nativeTitle: "What people usually do",
      nativeSteps: [
        {
          title: "Write it into CLAUDE.md or AGENTS.md",
          body: "Good for what rarely changes: how to build, the conventions. Progress and decisions written there turn it into a diary the agent rereads whole, every session.",
        },
        {
          title: "Keep a NOTES.md or a memory-bank folder",
          body: "Often hidden behind .gitignore. It grows, nobody corrects it in place, and it stays on one machine and one branch.",
        },
        {
          title: "Start a TASKS.md, or a Markdown file per session",
          body: "Easy to begin. Within weeks there are dozens of files, half of them stale, and nothing says which one still holds.",
        },
      ],
      gapTitle: "What that costs",
      gap: [
        "The agent rereads every file, whole, every session: the bigger the memory, the more each session costs before any work starts.",
        "Nothing is dated or archived, so «how did we solve this last year?» has no answer.",
        "The files go stale, pile up and get lost between branches, machines and projects.",
      ],
      toolTitle: "A memory your agent reads a section at a time",
      tool: [
        "Tisty keeps tasks with their steps and a dated journal, and documents one per subject, as Markdown on your own disk.",
        "Over MCP, your agent asks what moved since the last session, reads an outline first and then only the section it needs: on a 256 KB log, picking up the work costs about 99% less than rereading it.",
        "A finished task goes to the archive whole, and a search answers «how did we solve this?» with the line that says it.",
        "Free and open source, for Windows and macOS, with no account.",
      ],
      faq: [
        {
          q: "Does Tisty replace CLAUDE.md or AGENTS.md?",
          a: "It sits beside the ones in your repository: instructions that rarely move stay there; progress, decisions, what was ruled out and what is left go in Tisty. The ones in your home folder, like ~/.claude/CLAUDE.md, the Agents folder brings into Tisty as documents and, if you sync it, keeps up to date for every agent.",
        },
        {
          q: "Which assistants can use it?",
          a: "Any that speaks MCP: GitHub Copilot in VS Code, Claude Code, Codex, Cursor and Gemini CLI connect with one line, and Settings › Agents in Tisty connects the ones it finds on your computer.",
        },
      ],
    },
    es: {
      slug: "guias/memoria-para-tu-agente-de-ia-entre-sesiones",
      title: "Dale a tu agente de IA una memoria que dure entre sesiones",
      description:
        "GitHub Copilot, Claude Code, Codex y Cursor olvidan todo entre sesiones. Por qué el Markdown de siempre no basta, y una memoria que tu agente lee por secciones.",
      lede: "Tu agente brilla con el archivo que tiene delante y olvida el panorama: por qué se decidió algo hace seis meses, qué falló la última vez, qué falta todavía. Cada sesión nueva empieza contigo explicando otra vez el proyecto.",
      nativeTitle: "Lo que suele hacerse",
      nativeSteps: [
        {
          title: "Escribirlo en CLAUDE.md o AGENTS.md",
          body: "Sirve para lo que casi no cambia: cómo compilar, las convenciones. El avance y las decisiones escritos ahí lo vuelven un diario que el agente relee entero en cada sesión.",
        },
        {
          title: "Llevar un NOTES.md o una carpeta memory-bank",
          body: "Muchas veces escondido detrás de .gitignore. Crece, nadie lo corrige en su lugar, y se queda en un equipo y en una rama.",
        },
        {
          title: "Empezar un TASKS.md, o un Markdown por sesión",
          body: "Es fácil de empezar. En semanas hay decenas de archivos, la mitad desactualizados, y nada dice cuál sigue vigente.",
        },
      ],
      gapTitle: "Lo que eso cuesta",
      gap: [
        "El agente relee cada archivo, entero, en cada sesión: cuanto más grande la memoria, más cuesta cada sesión antes de empezar a trabajar.",
        "Nada tiene fecha ni se archiva, así que «¿cómo lo resolvimos el año pasado?» no tiene respuesta.",
        "Los archivos se desactualizan, se acumulan y se pierden entre ramas, equipos y proyectos.",
      ],
      toolTitle: "Una memoria que tu agente lee sección por sección",
      tool: [
        "Tisty guarda tareas con sus pasos y una bitácora con fechas, y documentos uno por tema, en Markdown y en tu propio disco.",
        "Por MCP, tu agente pregunta qué cambió desde la última sesión, lee primero el índice y después solo la sección que necesita: sobre una bitácora de 256 KB, retomar el trabajo cuesta cerca de un 99 % menos que releerla.",
        "Una tarea terminada pasa entera al archivo, y la búsqueda responde «¿cómo resolvimos esto?» con la línea que lo dice.",
        "Gratis y de código abierto, para Windows y macOS, sin cuenta.",
      ],
      faq: [
        {
          q: "¿Tisty reemplaza a CLAUDE.md o AGENTS.md?",
          a: "Va al lado de los de tu repositorio: las instrucciones que casi no se mueven siguen ahí; el avance, las decisiones, lo descartado y lo que falta van en Tisty. Los de tu carpeta personal, como ~/.claude/CLAUDE.md, la carpeta Agentes los trae a Tisty como documentos y, si la sincronizas, los mantiene al día para cada agente.",
        },
        {
          q: "¿Qué asistentes pueden usarlo?",
          a: "Cualquiera que hable MCP: GitHub Copilot en VS Code, Claude Code, Codex, Cursor y Gemini CLI se conectan con una línea, y Configuración › Agentes en Tisty conecta los que encuentra en tu equipo.",
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
  {
    id: "sync-claude-md-agents-md",
    product: "tisty",
    published: "2026-11-26",
    en: {
      slug: "guides/sync-claude-md-agents-md-across-agents",
      title: "Sync CLAUDE.md, AGENTS.md and skills across AI coding agents",
      description:
        "How developers try to keep CLAUDE.md, AGENTS.md, Copilot instructions and skills in sync across tools, where symlinks break, and a safer local workflow.",
      lede: "If you use Claude Code, Codex, GitHub Copilot and Cursor on the same machine, you quickly end up maintaining the same rules in four dotfiles. Edit one preference in ~/.claude/CLAUDE.md and the other agents keep following last month's rule.",
      nativeTitle: "What developers usually try first",
      nativeSteps: [
        {
          title: "Keep one master file in dotfiles and create symlinks",
          body: "Point ~/.claude/CLAUDE.md, ~/.codex/AGENTS.md and other agent files at one source file in your dotfiles repository.",
        },
        {
          title: "Copy changes across tools by hand",
          body: "Works when you only change a rule once a quarter, until an agent updates its own copy and silently drifts from the others.",
        },
      ],
      gapTitle: "Where symlinks and copies break down",
      gap: [
        "On Windows, symlinks often require Developer Mode or administrator privileges and break across WSL and native paths.",
        "There is no human review step when an AI agent edits its own instructions or skills on disk.",
        "Rules, skills and long-term project notes end up scattered across hidden folders with no shared search or version history.",
      ],
      toolTitle: "Managing agent rules and skills as reviewed documents",
      tool: [
        "Tisty's Agents folder brings your global agent rules, skills and memory into regular Markdown documents on your disk.",
        "When you enable sync, Tisty keeps each agent's files aligned without fragile cross-platform symlinks.",
        "An AI agent can propose a change to its rules over MCP, and the change reaches its files on disk only after you approve it.",
        "Free and open source under AGPL-3.0 for Windows and macOS, with local version history and no account.",
      ],
      faq: [
        {
          q: "Can an AI agent overwrite my CLAUDE.md or AGENTS.md silently through Tisty?",
          a: "No. Over MCP, an agent can only propose a change to rules or skills; nothing is written to its configuration files until you review and approve it.",
        },
        {
          q: "Does this replace repository-level CLAUDE.md or AGENTS.md files?",
          a: "No. Project-specific conventions stay in each Git repository, while your personal cross-project rules, skills and working memory stay unified and synced in Tisty.",
        },
      ],
    },
    es: {
      slug: "guias/sincronizar-claude-md-y-agents-md-entre-agentes",
      title: "Sincronizar CLAUDE.md, AGENTS.md y skills entre agentes de IA",
      description:
        "Cómo intentan muchos desarrolladores mantener CLAUDE.md, AGENTS.md y skills sincronizados entre herramientas, dónde fallan los symlinks y una forma local más segura.",
      lede: "Si usas Claude Code, Codex, GitHub Copilot y Cursor en el mismo equipo, pronto acabas manteniendo las mismas reglas en cuatro archivos ocultos. Cambias una preferencia en ~/.claude/CLAUDE.md y los demás agentes siguen aplicando la versión del mes pasado.",
      nativeTitle: "Lo que suele probarse primero",
      nativeSteps: [
        {
          title: "Mantener un archivo maestro en dotfiles y enlazarlo con symlinks",
          body: "Apuntar ~/.claude/CLAUDE.md, ~/.codex/AGENTS.md y los demás archivos a un único origen dentro de tu repositorio de dotfiles.",
        },
        {
          title: "Copiar los cambios a mano entre herramientas",
          body: "Funciona si apenas cambias tus reglas, hasta que un agente modifica su propia copia y deja de coincidir con el resto.",
        },
      ],
      gapTitle: "Dónde se rompen los symlinks y las copias",
      gap: [
        "En Windows los symlinks suelen exigir Modo de desarrollador o permisos elevados y se rompen entre rutas nativas y WSL.",
        "No existe un paso de aprobación humana cuando un agente de IA edita directamente sus propias reglas o skills en disco.",
        "Las reglas, skills y notas de proyecto quedan repartidas en carpetas ocultas sin búsqueda común ni historial de versiones.",
      ],
      toolTitle: "Gestionar reglas y skills como documentos con aprobación",
      tool: [
        "La carpeta Agentes de Tisty trae tus reglas globales, skills y memoria como documentos Markdown corrientes en tu disco.",
        "Si activas la sincronización, Tisty mantiene alineados los archivos de cada agente sin depender de symlinks frágiles.",
        "Un agente puede proponer un cambio a sus reglas por MCP, y ese cambio solo llega a sus archivos en disco cuando tú lo apruebas.",
        "Gratuito y de código abierto bajo AGPL-3.0 para Windows y macOS, con historial local de versiones y sin cuenta.",
      ],
      faq: [
        {
          q: "¿Puede un agente sobrescribir mi CLAUDE.md o AGENTS.md en silencio desde Tisty?",
          a: "No. Por MCP un agente solo puede proponer un cambio en reglas o skills; nada se escribe en sus archivos de configuración hasta que tú lo revisas y apruebas.",
        },
        {
          q: "¿Esto reemplaza al CLAUDE.md o AGENTS.md dentro de cada repositorio?",
          a: "No. Las convenciones propias de un repo siguen en ese repo, mientras tus reglas personales, skills y memoria transversal viven unificadas en Tisty.",
        },
      ],
    },
  },
  {
    id: "connect-mcp-memory-clients",
    product: "tisty",
    published: "2026-11-26",
    en: {
      slug: "guides/connect-local-mcp-memory-claude-code-cursor-vscode",
      title: "Connect local MCP memory in Claude Code, Cursor and VS Code",
      description:
        "How to connect a local Model Context Protocol memory server to Claude Code, Cursor, GitHub Copilot in VS Code or Gemini CLI without cloud accounts or API keys.",
      lede: "Most MCP memory servers ask you to run a separate background daemon, manage a vector database or create a cloud API key. If you only want your coding agents to share readable tasks and Markdown notes on your own machine, setup should take two minutes.",
      nativeTitle: "Connecting by hand over standard MCP",
      nativeSteps: [
        {
          title: "Install Tisty on Windows or macOS",
          body: "Install from Microsoft Store, winget, Homebrew or GitHub Releases. The local MCP server comes built into the desktop app — no open network port and no account.",
        },
        {
          title: "Use Settings › Agents for one-click setup",
          body: "Tisty detects Claude Code, GitHub Copilot in VS Code, Codex, Cursor and Gemini CLI on your computer and writes their MCP entry for you.",
        },
        {
          title: "Or add the MCP command directly",
          body: "In Claude Code run /plugin install tisty --marketplace rgdevment/mcp-plugins; in Gemini CLI run gemini extensions install https://github.com/rgdevment/mcp-plugins; in Cursor or VS Code add npx -y tisty-mcp.",
        },
      ],
      gapTitle: "What to check before trusting any MCP memory server",
      gap: [
        "Does it let an agent delete your files or close your own tasks without confirmation?",
        "Does it force the agent to reread giant Markdown logs every session, burning tokens?",
        "Can you read and audit everything the agent wrote in a clean desktop view and plain files on disk?",
      ],
      toolTitle: "Clear boundaries built into Tisty's MCP tools",
      tool: [
        "Your agent reads outlines first and only the section it needs, avoiding full-file rereads across sessions.",
        "An agent can propose tasks, tick its own steps and add dated journal entries, while closing tasks, deleting documents and changing your due dates stay strictly yours.",
        "Closing the MCP door takes one click in Settings › Agents, immediately refusing every agent request.",
        "Listed in the official GitHub MCP Registry as io.github.rgdevment/tisty, free and open source under AGPL-3.0.",
      ],
      faq: [
        {
          q: "Do I need an API key or a cloud account to use Tisty over MCP?",
          a: "No. Tisty's MCP server runs strictly on your own machine over local stdio, with no API key, no open network port and no cloud account.",
        },
        {
          q: "Can Claude Code and Cursor share the exact same memory?",
          a: "Yes. Both clients connect to the same local Tisty workspace, so work started in one agent can be picked up by another without copying notes by hand.",
        },
      ],
    },
    es: {
      slug: "guias/conectar-memoria-mcp-local-claude-code-cursor-vscode",
      title: "Conectar memoria MCP local en Claude Code, Cursor y VS Code",
      description:
        "Cómo conectar un servidor local de memoria MCP en Claude Code, Cursor, GitHub Copilot en VS Code o Gemini CLI sin cuentas en la nube ni claves API.",
      lede: "Casi todos los servidores MCP de memoria te piden levantar un servicio aparte, mantener una base vectorial o sacar una clave en la nube. Si solo quieres que tus agentes compartan tareas y notas en Markdown legibles en tu equipo, conectarlo debería tomar dos minutos.",
      nativeTitle: "Conectar en dos minutos por MCP estándar",
      nativeSteps: [
        {
          title: "Instala Tisty en Windows o macOS",
          body: "Desde Microsoft Store, winget, Homebrew o GitHub Releases. El servidor MCP viene dentro de la app de escritorio, sin puertos abiertos ni cuenta.",
        },
        {
          title: "Usa Configuración › Agentes con un clic",
          body: "Tisty detecta Claude Code, GitHub Copilot en VS Code, Codex, Cursor y Gemini CLI instalados en tu equipo y configura su entrada MCP automáticamente.",
        },
        {
          title: "O añade el comando MCP a mano",
          body: "En Claude Code usa /plugin install tisty --marketplace rgdevment/mcp-plugins; en Gemini CLI usa gemini extensions install https://github.com/rgdevment/mcp-plugins; en Cursor o VS Code añade npx -y tisty-mcp.",
        },
      ],
      gapTitle: "Qué revisar antes de conectar cualquier memoria MCP",
      gap: [
        "¿Puede el agente borrar tus documentos o cerrar tareas tuyas sin pedirte confirmación?",
        "¿Obliga al agente a releer archivos Markdown gigantes en cada sesión desperdiciando contexto?",
        "¿Puedes ver y auditar fácilmente todo lo que anotó en una interfaz limpia y en archivos reales en tu disco?",
      ],
      toolTitle: "Límites claros integrados en el MCP de Tisty",
      tool: [
        "Tu agente lee primero el índice y después solo la sección que necesita, evitando releer archivos enteros entre sesiones.",
        "Puede proponer tareas, marcar sus propios pasos y anotar en la bitácora con fecha, mientras cerrar tareas, borrar documentos o cambiar tus fechas sigue siendo solo tuyo.",
        "Cerrar la puerta MCP toma un clic en Configuración › Agentes y rechaza al instante cualquier intento.",
        "Publicado en el Registro oficial de MCP en GitHub como io.github.rgdevment/tisty, gratis y de código abierto bajo AGPL-3.0.",
      ],
      faq: [
        {
          q: "¿Necesito una clave API o cuenta en la nube para usar Tisty por MCP?",
          a: "No. El servidor MCP de Tisty corre solo en tu equipo por stdio local, sin clave API, sin puerto abierto y sin cuenta.",
        },
        {
          q: "¿Pueden Claude Code y Cursor compartir exactamente la misma memoria?",
          a: "Sí. Ambos clientes se conectan al mismo espacio local de Tisty, así que el trabajo que empieza un agente puede retomarlo otro sin copiar contexto a mano.",
        },
      ],
    },
  },
];
