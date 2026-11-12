import { readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const SIZE = { width: 1440, height: 758 };
const WIDTHS = [720, 1080, 1280];
// The window frame Windows draws around a capture would show as a second border inside the page's own.
const EDGE = 1;

const SCREENS = [
  ["en-01-archive", "tareas-archivos-en.png"],
  ["es-01-archivo", "tareas-archivos.png"],
  ["en-02-diagrams", "Diagramas-en.png"],
  ["es-02-diagramas", "Diagramas.png"],
  ["en-03-brainstorm", "brainstorm-en.png"],
  ["es-03-lluvia-de-ideas", "brainstorm-es.png"],
  ["en-04-priorities", "tareas-prioridades-en.png"],
  ["es-04-prioridades", "tareas-prioridades.png"],
  ["en-05-documents", "documentos-en.png"],
  ["es-05-documentos", "documentos.png"],
  ["en-06-today", "tareas-genera-en.png"],
  ["es-06-hoy", "tareas-general.png"],
  ["en-07-folio", "Compartir-en.png", "inside"],
  ["es-07-folio", "Compartir.png", "inside"],
];

const folder = process.argv[2];
if (!folder) {
  console.error("usage: npm run screens -- <folder with the captures>");
  process.exit(1);
}

readdirSync("public").filter((name) => name.startsWith("tisty-screen-")).forEach((name) => rmSync(`public/${name}`));

for (const [name, capture, fit = "cover"] of SCREENS) {
  const file = join(folder, capture);
  const { width, height } = await sharp(file).metadata();
  const image = await sharp(file)
    .extract({ left: EDGE, top: EDGE, width: width - 2 * EDGE, height: height - 2 * EDGE })
    .resize({ ...SIZE, fit, position: "top" })
    .png()
    .toBuffer();
  const widest = (await sharp(image).metadata()).width;
  const stem = `public/tisty-screen-${name}`;
  for (const size of [...WIDTHS.filter((one) => one < widest), widest]) {
    await sharp(image).resize({ width: size }).avif({ quality: 60, effort: 6, chromaSubsampling: "4:4:4" }).toFile(`${stem}-${size}.avif`);
  }
  for (const size of [WIDTHS[0], Math.min(WIDTHS.at(-1), widest)]) {
    await sharp(image).resize({ width: size }).webp({ quality: 85, smartSubsample: true }).toFile(`${stem}-${size}.webp`);
  }
  console.log(`screens: public/tisty-screen-${name} from ${capture}`);
}
