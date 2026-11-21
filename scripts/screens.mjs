import { existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const SIZE = { width: 1440, height: 758 };
const WIDTHS = [720, 1080, 1280];
// The window frame Windows draws around a capture would show as a second border inside the page's own.
const EDGE = 1;

// Brainsty.png is the frame at 12 s of Brainsty.mp4: ffmpeg -ss 12 -i Brainsty.mp4 -frames:v 1 Brainsty.png
const SCREENS = [
  ["en-01-archive", "Archivo - EN - claro.png", "Archivo - EN - obscuro.png"],
  ["es-01-archivo", "Archivo - ES - claro.png", "Archivo - ES - obscuro.png"],
  ["en-02-diagrams", "Diagrama - EN - claro.png", "Diagrama - EN - obscuro.png"],
  ["es-02-diagramas", "Diagrama - ES - claro.png", "Diagrama - ES - obscuro.png"],
  ["en-03-brainstorm", "Ideas - EN - claro.png", "Ideas EN - obscuro.png"],
  ["es-03-lluvia-de-ideas", "Ideas - ES - claro.png", "Ideas ES - obscuro.png"],
  ["en-04-priorities", "Priodidad - EN - claro.png", "Prioridades - EN - obscuro.png"],
  ["es-04-prioridades", "Priodidad - ES - claro.png", "Prioridades - ES - obscuro.png"],
  ["en-05-documents", "Que es Tisty - EN - claro.png", "Que es Tisty - EN - obscuro.png"],
  ["es-05-documentos", "Que es Tisty - ES - claro.png", "Que es Tisty - ES - obscuro.png"],
  ["en-06-today", null, "Task - EN - obscuro.png"],
  ["es-06-hoy", null, "Task - ES - obscuro.png"],
  ["en-08-task", "TaskFull - EN - claro.png", "TaskFull - EN - obscuro.png"],
  ["es-08-tarea", "TaskFull - ES - claro.png", "TaskFull - ES - obscuro.png"],
  ["en-09-brainsty", null, "Brainsty.png"],
  ["en-10-agents", "traer agentes - EN - claro.png", "traer agentes - EN - obscuro.png"],
  ["es-10-agentes", "traer agentes - ES - claro.png", "traer agentes - ES - obscuro.png"],
  ["en-11-weekly-review", "Semana - EN - claro.png", "Semana - EN - obscuro.png"],
  ["es-11-revision-semanal", "Semana - ES - claro.png", "Semana - ES - obscuro.png"],
  ["en-12-diary", "Diario - EN - claro.png", "Diario - EN - obscuro.png"],
  ["es-12-diario", "Diario - ES - claro.png", "Diario - ES - obscuro.png"],
];

const folder = process.argv[2];
if (!folder) {
  console.error("usage: npm run screens -- <folder with the captures>");
  process.exit(1);
}

const missing = [...new Set(SCREENS.flatMap(([, ...captures]) => captures.filter(Boolean)))].filter((capture) => !existsSync(join(folder, capture)));
if (missing.length) {
  console.error(`screens: missing in ${folder}: ${missing.join(", ")}`);
  process.exit(1);
}

const stems = SCREENS.flatMap(([name]) => [`tisty-screen-${name}-`, `tisty-screen-${name}-dark-`]);
readdirSync("public")
  .filter((file) => stems.some((stem) => file.startsWith(stem) && /^\d+\.(avif|webp)$/.test(file.slice(stem.length))))
  .forEach((file) => rmSync(`public/${file}`));

async function save(capture, stem) {
  const file = join(folder, capture);
  const { width, height } = await sharp(file).metadata();
  const image = await sharp(file)
    .extract({ left: EDGE, top: EDGE, width: width - 2 * EDGE, height: height - 2 * EDGE })
    .resize({ ...SIZE, fit: "cover", position: "top" })
    .png()
    .toBuffer();
  const widest = (await sharp(image).metadata()).width;
  for (const size of [...WIDTHS.filter((one) => one < widest), widest]) {
    await sharp(image).resize({ width: size }).avif({ quality: 60, effort: 6, chromaSubsampling: "4:4:4" }).toFile(`${stem}-${size}.avif`);
  }
  for (const size of [WIDTHS[0], Math.min(WIDTHS.at(-1), widest)]) {
    await sharp(image).resize({ width: size }).webp({ quality: 85, smartSubsample: true }).toFile(`${stem}-${size}.webp`);
  }
  console.log(`screens: ${stem} from ${capture}`);
}

for (const [name, light, dark] of SCREENS) {
  if (light) await save(light, `public/tisty-screen-${name}`);
  if (dark) await save(dark, `public/tisty-screen-${name}-dark`);
}
