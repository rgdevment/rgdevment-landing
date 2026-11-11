import type { Assistant, Cost, Day, Fixes, Proof, Sharing } from "./products";

export const FIXES_EN: Fixes = {
  title: "Real problems, real fixes",
  lede: "What people actually run into after months of working with an AI assistant, and what happens instead when the memory lives in Tisty.",
  said: { problem: "The problem", fix: "With Tisty" },
  rows: [
    {
      who: "Developer",
      problem: "Every new session, you explain the project to your agent again.",
      fix: "It asks what moved since last time, opens the task «Move payments to v2» with its ticked steps and reads what it noted yesterday: the webhook fails on old signatures, retrying ruled out. It carries on from there.",
    },
    {
      who: "Developer",
      problem: "Your NOTES.md grew to 256 KB and the agent rereads it every time.",
      fix: "It lives as documents split by subject, in pages. The agent reads the outline and the one section it needs, about 95% less than the whole file.",
    },
    {
      who: "Anyone",
      problem: "You solved this eight months ago and cannot remember how.",
      fix: "A search for «timeouts on save» brings back the archived task as it was left: its steps, its journal and the line saying the cause was a missing index.",
    },
    {
      who: "PM",
      problem: "A month later somebody asks why it was decided that way.",
      fix: "One living document per subject, «Checkout decisions», each decision dated with its why. The agent finds it and quotes it instead of reopening the debate.",
    },
    {
      who: "QA",
      problem: "The same screen breaks again and nobody remembers last time's cases.",
      fix: "The archived regression task keeps its cases as steps, with what was seen in each.",
    },
    {
      who: "Handover",
      problem: "Context passed from PM to PO, or from developer to QA, pasted into a chat.",
      fix: "You hand over the document through Folio: encrypted on your machine before it leaves, signed by you, gone on its own after the days without use you choose.",
    },
    {
      who: "Business rules",
      problem: "What must not end up in somebody else's database.",
      fix: "Tisty keeps it on your disk and sends it nowhere. What your agent reads goes where that agent goes, so pair it with one your company allows.",
    },
    {
      who: "At home",
      problem: "The bank paperwork that comes back every year.",
      fix: "Next year, the archived task tells you how you did it last time.",
    },
  ],
};

export const FIXES_ES: Fixes = {
  title: "Problemas reales, soluciones reales",
  lede: "Lo que de verdad le pasa a quien trabaja meses con un asistente de IA, y lo que pasa en cambio cuando la memoria vive en Tisty.",
  said: { problem: "El problema", fix: "Con Tisty" },
  rows: [
    {
      who: "Desarrollo",
      problem: "En cada sesión nueva le vuelves a explicar el proyecto a tu agente.",
      fix: "Pregunta qué cambió desde la última vez, abre la tarea «Migrar pagos a v2» con sus pasos marcados y lee lo que anotó ayer: el webhook falla con firmas viejas, reintentar quedó descartado. Sigue desde ahí.",
    },
    {
      who: "Desarrollo",
      problem: "Tu NOTES.md llegó a 256 KB y el agente lo relee cada vez.",
      fix: "Vive como documentos separados por tema, en páginas. El agente lee el índice y la única sección que necesita, cerca de un 95 % menos que el archivo entero.",
    },
    {
      who: "Cualquiera",
      problem: "Resolviste esto hace ocho meses y no recuerdas cómo.",
      fix: "Buscar «timeouts al guardar» trae la tarea archivada tal como quedó: sus pasos, su bitácora y la línea que dice que la causa era un índice que faltaba.",
    },
    {
      who: "PM",
      problem: "Un mes después alguien pregunta por qué se decidió así.",
      fix: "Un documento vivo por tema, «Decisiones de checkout», con cada decisión fechada y su porqué. El agente lo encuentra y lo cita en vez de reabrir el debate.",
    },
    {
      who: "QA",
      problem: "La misma pantalla vuelve a fallar y nadie recuerda los casos de la vez anterior.",
      fix: "La tarea de regresión archivada guarda los casos como pasos, con lo que se vio en cada uno.",
    },
    {
      who: "Traspaso",
      problem: "El contexto que pasa de PM a PO, o de desarrollo a QA, pegado en un chat.",
      fix: "Entregas el documento con Folio: se cifra en tu equipo antes de salir, va firmado por ti y se va solo tras los días sin uso que elijas.",
    },
    {
      who: "Reglas de negocio",
      problem: "Lo que no puede terminar en la base de datos de otro.",
      fix: "Tisty lo guarda en tu disco y no lo manda a ninguna parte. Lo que lee tu agente va adonde va ese agente, así que úsalo con uno que tu empresa permita.",
    },
    {
      who: "En casa",
      problem: "El trámite del banco que vuelve cada año.",
      fix: "El año siguiente, la tarea archivada te dice cómo lo hiciste la vez anterior.",
    },
  ],
};

export const DAY_EN: Day = {
  title: "A day with your agent",
  lede: "What an agent connected to Tisty does with your tasks and documents, on a real piece of work.",
  steps: [
    { title: "It asks what moved", body: "since the last session, instead of rereading everything." },
    { title: "It opens the task it is on", body: "«Done when» says when it is finished, and the unticked steps say what is left." },
    { title: "It searches the archive first", body: "before proposing anything. If it was solved before, it starts from there." },
    { title: "It reads by the outline", body: "then only the section it needs, and keeps to the decisions and to what is out of scope." },
    { title: "It ticks each step and notes what it ruled out", body: "so the next session, or another agent, does not repeat the failed attempt." },
    { title: "It compacts its own notes", body: "into one dated digest when a task's page grows long. The journal stays whole." },
    { title: "It says what it did and how it knows", body: "when the work is done. You review it and close it." },
    { title: "It leaves a summary", body: "after reading a long document, for the next agent to choose by. A change to the document marks it stale." },
  ],
  close: "Your tasks tell your agent what is left and how far it may go; your documents tell it what was already decided. What it learns stays written down for next time.",
};

export const DAY_ES: Day = {
  title: "Un día con tu agente",
  lede: "Lo que hace con tus tareas y documentos un agente conectado a Tisty, en un trabajo real.",
  steps: [
    { title: "Pregunta qué cambió", body: "desde la última sesión, en vez de releerlo todo." },
    { title: "Abre la tarea en la que está", body: "«Para estar lista» le dice cuándo termina, y los pasos sin marcar, qué falta." },
    { title: "Busca primero en el archivo", body: "antes de proponer nada. Si ya se resolvió, parte de ahí." },
    { title: "Lee por el índice", body: "y después solo la sección que necesita, respetando las decisiones y lo que está fuera de alcance." },
    { title: "Marca cada paso y anota lo que descartó", body: "así la próxima sesión, u otro agente, no repite el intento fallido." },
    { title: "Compacta sus propias notas", body: "en un resumen fechado cuando la página de una tarea crece. La bitácora queda entera." },
    { title: "Dice qué hizo y cómo lo sabe", body: "cuando termina. Tú lo revisas y la cierras." },
    { title: "Deja un resumen", body: "después de leer un documento largo, para que el próximo agente elija con él. Si el documento cambia, queda marcado como desactualizado." },
  ],
  close: "Tus tareas le dicen a tu agente qué falta y hasta dónde puede llegar; tus documentos, qué ya se decidió. Lo que aprende queda escrito para la próxima vez.",
};

export const COST_EN: Cost = {
  title: "What it costs your agent",
  lede: "Tisty knows what each answer costs, and keeps cutting it. Measured on a 256 KB Markdown work log, against an agent that rereads the whole file every session:",
  head: ["The agent…", "Spends, with Tisty", "Saving"],
  rows: [
    ["Picks up the work, with nothing new", "about 1%", "99% less"],
    ["Looks for something solved months ago", "about 2%", "98% less"],
    ["Looks up one subject: the outline and one section", "about 5%, 8% at worst", "92–95% less"],
  ],
  whyTitle: "Where the saving comes from",
  why: [
    "No document holds more than 64,000 characters, so a log that size is kept as subjects in pages.",
    "No read brings more than about 12,000 characters; past that, a document comes back as its outline.",
    "The outline says what each section weighs before anything is opened.",
    "Picking up again brings only what moved, and what is finished costs nothing until it is searched.",
  ],
  caveat: "Connecting costs something too: the description of Tisty's tools weighs about a quarter of that log. An assistant that loads tools only as it uses them does not pay it whole; one that loads every tool each session saves closer to 70–75%, and below some 70 KB of notes a plain file is cheaper. Counted in characters, with the JSON each answer carries included.",
};

export const COST_ES: Cost = {
  title: "Lo que le cuesta a tu agente",
  lede: "Tisty sabe lo que cuesta cada respuesta, y lo sigue recortando. Medido sobre una bitácora de trabajo de 256 KB en Markdown, frente a un agente que relee el archivo entero en cada sesión:",
  head: ["El agente…", "Gasta, con Tisty", "Ahorro"],
  rows: [
    ["Retoma el trabajo, sin novedades", "cerca de un 1 %", "99 % menos"],
    ["Busca algo resuelto hace meses", "cerca de un 2 %", "98 % menos"],
    ["Consulta un tema: el índice y una sección", "cerca de un 5 %, 8 % en el peor caso", "92–95 % menos"],
  ],
  whyTitle: "De dónde sale el ahorro",
  why: [
    "Ningún documento pasa de 64 000 caracteres, así que una bitácora de ese tamaño queda en temas y páginas.",
    "Ninguna lectura trae más de unos 12 000 caracteres; pasado eso, un documento vuelve como su índice.",
    "El índice dice cuánto pesa cada sección antes de abrir nada.",
    "Retomar trae solo lo que cambió, y lo terminado no cuesta nada hasta que alguien lo busca.",
  ],
  caveat: "Conectarse también cuesta: la descripción de las herramientas de Tisty pesa cerca de una cuarta parte de esa bitácora. Un asistente que carga las herramientas solo a medida que las usa no la paga entera; uno que las carga todas en cada sesión ahorra más bien un 70–75 %, y con menos de unos 70 KB de notas un archivo plano sale más barato. Contado en caracteres, incluido el JSON que acompaña cada respuesta.",
};

const LOG = (title: string, entry: string) =>
  [
    `{"v":18,"ts":"2026-03-02T14:05:11Z","op":"task.add","id":"01KJ…","d":{"title":"${title}",…}}`,
    `{"v":18,"ts":"2026-03-12T09:40:27Z","op":"task.log","id":"01KJ…","d":{"body":"${entry}",…}}`,
    `{"v":18,"ts":"2026-03-14T18:02:55Z","op":"task.done","id":"01KJ…"}`,
  ].join("\n");

export const PROOF_EN: Proof = {
  title: "What stays on your disk",
  lede: "No database to export from and no format to decode. This is what Tisty keeps in its folder, as it looks after a few months of use.",
  doc: {
    name: "docs/2hq2p1ax-0003.md",
    body: `# Rina's vet visits

#rina #vet

> [!TIP]
> Bring her record book: the vet stamps it every time.

## 12 March 2026

- [x] Weigh her before the appointment
- [ ] Ask about the tick tablet

Weight: ==11.4 kg=={green} ::heart red::`,
  },
  tree: {
    title: "The folder, on Windows",
    body: `.tisty/
├─ data/
│  ├─ docs/            your documents, one .md each
│  │  ├─ 2hq2p1ax-0003.md
│  │  └─ …
│  ├─ store/           your tasks, one folder per computer
│  │  └─ dev_2hq2p1ax/
│  │     ├─ 000001.tisty
│  │     └─ active.tisty
│  └─ attachments/     the files you attached
├─ config/
└─ cache/`,
    note: "In your user folder on Windows; on a Mac, in Library/Application Support/tisty. Settings › Your data opens it.",
  },
  log: {
    name: "store/dev_2hq2p1ax/000001.tisty",
    body: LOG("Find out how to sync with OneDrive", "Large files go up in pieces"),
    note: "Abridged. Every change to a task is one more line that only adds: cat, grep and jq read it.",
  },
  editors: "Any editor opens them, and they stay where they are even if you uninstall Tisty.",
  share: {
    line: "And when someone else needs to read one, Folio shares a document through an encrypted link that expires on its own.",
    link: "Folio",
    url: "https://tisty.cl",
  },
};

export const PROOF_ES: Proof = {
  title: "Lo que queda en tu disco",
  lede: "Sin base de datos de la que exportar ni formato que descifrar. Esto es lo que Tisty guarda en su carpeta, tal como se ve tras unos meses de uso.",
  doc: {
    name: "docs/2hq2p1ax-0003.md",
    body: `# Visitas de Rina al veterinario

#rina #veterinario

> [!TIP]
> Lleva su cartilla: el veterinario la timbra cada vez.

## 12 de marzo de 2026

- [x] Pesarla antes de la consulta
- [ ] Preguntar por la pastilla contra garrapatas

Peso: ==11,4 kg=={green} ::heart red::`,
  },
  tree: {
    title: "La carpeta, en Windows",
    body: `.tisty/
├─ data/
│  ├─ docs/            tus documentos, un .md cada uno
│  │  ├─ 2hq2p1ax-0003.md
│  │  └─ …
│  ├─ store/           tus tareas, una carpeta por equipo
│  │  └─ dev_2hq2p1ax/
│  │     ├─ 000001.tisty
│  │     └─ active.tisty
│  └─ attachments/     los archivos que adjuntaste
├─ config/
└─ cache/`,
    note: "En tu carpeta de usuario en Windows; en un Mac, en Library/Application Support/tisty. Configuración › Tus datos la abre.",
  },
  log: {
    name: "store/dev_2hq2p1ax/000001.tisty",
    body: LOG("Averiguar cómo sincronizar con OneDrive", "Los archivos grandes suben por partes"),
    note: "Resumido. Cada cambio en una tarea es una línea más, que solo se agrega: lo leen cat, grep y jq.",
  },
  editors: "Los abre cualquier editor, y se quedan donde están aunque desinstales Tisty.",
  share: {
    line: "Y cuando otra persona necesita leer uno, Folio comparte un documento con un enlace cifrado que caduca solo.",
    link: "Folio",
    url: "https://tisty.cl/es/",
  },
};

export const ASSISTANT_EN: Assistant = {
  title: "Connect your assistant",
  lede: "Tisty has no AI inside: it is the memory of the assistant you already use. GitHub Copilot, Claude Code, Codex, Cursor or Gemini CLI connect over MCP, on this machine only, with no port, no account and no key. Your assistant picks up where it left off, files its work as tasks with steps, ticks them as it goes and keeps what it learns in documents, all where you can follow and audit it.",
  settings: "Or open Settings › Assistants: it finds the assistants installed on this computer and connects them with one click.",
  other: "Any other client, such as VS Code or Cursor",
  can: {
    title: "It can",
    items: [
      "Pick up where it left off: what moved since last time",
      "Read a long document by its outline and one section",
      "File a task with its steps, date and list",
      "Add to a task's journal",
      "Write documents, correct a passage and file them in folders",
      "Read and search everything, the archive included",
      "Say a task is done, for you to confirm",
    ],
  },
  never: {
    title: "It never",
    items: [
      "Closes or deletes a task",
      "Ticks a step of yours or finishes a task of yours",
      "Moves a day you set",
      "Deletes a document, or renames or empties a folder",
    ],
  },
  door: "The door is open when you install Tisty, and Settings › Assistants closes it with one click. While it is closed, everything an assistant tries is refused.",
  listed: "Listed in",
  more: "What an assistant may do, in the docs",
  page: "mcp-permissions",
};

export const ASSISTANT_ES: Assistant = {
  title: "Conecta tu asistente",
  lede: "Tisty no tiene IA dentro: es la memoria del asistente que ya usas. GitHub Copilot, Claude Code, Codex, Cursor o Gemini CLI se conectan por MCP, solo en este equipo, sin puerto, sin cuenta y sin clave. Tu asistente retoma donde quedó, anota su trabajo como tareas con pasos, los marca a medida que avanza y guarda lo que aprende en documentos, todo donde puedes seguirlo y revisarlo.",
  settings: "O abre Configuración › Asistentes: encuentra los asistentes instalados en este equipo y los conecta con un clic.",
  other: "Cualquier otro cliente, como VS Code o Cursor",
  can: {
    title: "Puede",
    items: [
      "Retomar donde quedó: lo que cambió desde la última vez",
      "Leer un documento largo por su índice y una sección",
      "Anotar una tarea con sus pasos, fecha y lista",
      "Agregar a la bitácora de una tarea",
      "Escribir documentos, corregir un pasaje y ordenarlos en carpetas",
      "Leer y buscar en todo, también en el archivo",
      "Decir que una tarea está hecha, para que tú lo confirmes",
    ],
  },
  never: {
    title: "Nunca",
    items: [
      "Cierra ni borra una tarea",
      "Marca un paso tuyo ni termina una tarea tuya",
      "Mueve un día que pusiste tú",
      "Borra un documento, ni renombra ni vacía una carpeta",
    ],
  },
  door: "La puerta viene abierta al instalar Tisty, y Configuración › Asistentes la cierra con un clic. Mientras está cerrada, todo lo que intente un asistente se rechaza.",
  listed: "Está en",
  more: "Qué puede hacer un asistente, en la ayuda",
  page: "que-puede-hacer-un-asistente",
};

const FOLIO_PAPERS = "https://github.com/rgdevment/Folio-by-Tisty/blob/main/docs/";

export const SHARING_EN: Sharing = {
  title: "Share what you know with Folio",
  lede: "When somebody else needs what you know — your PO, the QA joining the project, another team — Folio by Tisty hands them one of your documents as a link, whether they use Tisty or not. It is a service apart from the app, with a server of its own, and it keeps what you share without the key to read it.",
  points: [
    {
      title: "The key travels in the link",
      body: "Tisty encrypts the document before it leaves. The key goes in the link, after the #, which browsers never send, so Folio stores only bytes it cannot read.",
    },
    {
      title: "Read in a browser, with no account",
      body: "Whoever receives the link opens it in any browser. Nothing to install and nothing to sign up for.",
    },
    {
      title: "Gone on its own",
      body: "After the time without use you choose, 15 days at most, the link stops working and the copy is deleted. Your document stays in your Tisty, and you can stop sharing whenever you want.",
    },
    {
      title: "It says who signed it",
      body: "The page shows which key signed the document. Tisty's official documents are signed by rgdevment, shown as verified: that says who signed, not that the content is safe.",
    },
    {
      title: "What should not be there gets reported",
      body: "Anyone with the link can report what should not be there, from the same page where they read it.",
    },
  ],
  caveat: "The app has no server and collects nothing; Folio does run one. It keeps the encrypted copy until it expires and counts reads without keeping who read. After a serious report or an order, a document stops being served and may be kept for up to 180 days, or as long as the order asks.",
  home: "To learn about Folio, visit its home:",
  site: "https://tisty.cl",
  papers: [
    ["Terms of use", `${FOLIO_PAPERS}TERMS.md`],
    ["Privacy policy", `${FOLIO_PAPERS}PRIVACY.md`],
    ["Security policy", `${FOLIO_PAPERS}SECURITY.md`],
  ],
  more: "How to share, in the docs",
  page: "documents",
  anchor: "sharing",
};

export const SHARING_ES: Sharing = {
  title: "Comparte lo que sabes con Folio",
  lede: "Cuando otra persona necesita lo que sabes — tu PO, el QA que llega al proyecto, otro equipo — Folio by Tisty le entrega uno de tus documentos como un enlace, use Tisty o no. Es un servicio aparte de la aplicación, con un servidor propio, y guarda lo que compartes sin la llave para leerlo.",
  points: [
    {
      title: "La llave va en el enlace",
      body: "Tisty cifra el documento antes de que salga. La llave va en el enlace, después del #, que los navegadores nunca envían, así que Folio guarda solo bytes que no puede leer.",
    },
    {
      title: "Se lee en el navegador, sin cuenta",
      body: "Quien recibe el enlace lo abre en cualquier navegador. Nada que instalar y nada en lo que registrarse.",
    },
    {
      title: "Se va solo",
      body: "Tras el plazo sin uso que elijas, 15 días como mucho, el enlace deja de funcionar y la copia se borra. Tu documento sigue en tu Tisty, y puedes dejar de compartirlo cuando quieras.",
    },
    {
      title: "Dice quién lo firmó",
      body: "La página muestra qué llave firmó el documento. Los documentos oficiales de Tisty los firma rgdevment, que aparece como verificado: eso dice quién firmó, no que el contenido sea seguro.",
    },
    {
      title: "Lo que no debería estar se denuncia",
      body: "Cualquiera con el enlace puede denunciar lo que no debería estar ahí, desde la misma página donde lo lee.",
    },
  ],
  caveat: "La aplicación no tiene servidor ni recoge nada; Folio sí tiene uno. Guarda la copia cifrada hasta que caduca y cuenta las lecturas sin guardar quién leyó. Con una denuncia seria o una orden, un documento deja de servirse y puede guardarse hasta 180 días, o lo que la orden pida.",
  home: "Para conocer Folio, visita su sitio:",
  site: "https://tisty.cl/es/",
  papers: [
    ["Términos de uso", `${FOLIO_PAPERS}TERMINOS.md`],
    ["Política de privacidad", `${FOLIO_PAPERS}PRIVACIDAD.md`],
    ["Política de seguridad", `${FOLIO_PAPERS}SEGURIDAD.md`],
  ],
  more: "Cómo compartir, en la ayuda",
  page: "documentos",
  anchor: "compartir",
};
