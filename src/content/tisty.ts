import type { Proof } from "./products";

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
};
