import type { Assistant, Proof, Sharing } from "./products";

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
    url: "https://folio.tisty.app",
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
    url: "https://folio.tisty.app",
  },
};

export const ASSISTANT_EN: Assistant = {
  title: "Connect your assistant",
  lede: "Tisty has no AI inside. It leaves a door, MCP, for the assistant you already use: on this machine only, with no port, no account and no token. Your assistant files the tasks, writes the plans and ticks the steps, all where you can follow and audit them.",
  settings: "Or open Settings › Assistants: it finds the assistants installed on this computer and connects them with one click.",
  other: "Any other client, such as VS Code or Cursor",
  can: {
    title: "It can",
    items: [
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
  lede: "Tisty no tiene IA dentro. Deja una puerta, MCP, para el asistente que ya usas: solo en este equipo, sin puerto, sin cuenta y sin token. Tu asistente anota las tareas, escribe los planes y marca los pasos, todo donde puedes seguirlo y revisarlo.",
  settings: "O abre Configuración › Asistentes: encuentra los asistentes instalados en este equipo y los conecta con un clic.",
  other: "Cualquier otro cliente, como VS Code o Cursor",
  can: {
    title: "Puede",
    items: [
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
  title: "Share a document with Folio",
  lede: "Folio by Tisty turns one of your documents into a link, for someone who does not use Tisty. It is a service apart from the app, with a server of its own, and it keeps what you share without the key to read it.",
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
  site: "https://folio.tisty.app",
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
  title: "Comparte un documento con Folio",
  lede: "Folio by Tisty convierte uno de tus documentos en un enlace, para alguien que no usa Tisty. Es un servicio aparte de la aplicación, con un servidor propio, y guarda lo que compartes sin la llave para leerlo.",
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
  site: "https://folio.tisty.app",
  papers: [
    ["Términos de uso", `${FOLIO_PAPERS}TERMINOS.md`],
    ["Política de privacidad", `${FOLIO_PAPERS}PRIVACIDAD.md`],
    ["Política de seguridad", `${FOLIO_PAPERS}SEGURIDAD.md`],
  ],
  more: "Cómo compartir, en la ayuda",
  page: "documentos",
  anchor: "compartir",
};
