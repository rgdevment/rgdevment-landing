import { existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const WIDEST = 1440;
const WIDTHS = [720, 1080, 1280];
// Same cut as the README's round-corners.sh: the window frame and its halo go, the desktop in the corners turns transparent.
const EDGE = 2;
const RADIUS = 8;

// A screen goes in only with its light and its dark capture, both in its own language.
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
  ["en-08-task", "TaskFull - EN - claro.png", "TaskFull - EN - obscuro.png"],
  ["es-08-tarea", "TaskFull - ES - claro.png", "TaskFull - ES - obscuro.png"],
  ["en-09-brainsty", "18-network-far-light.png", "18-network-far-dark.png"],
  ["es-09-brainsty", "18-red-lejos-claro.png", "18-red-lejos-oscuro.png"],
  ["en-10-agents", "traer agentes - EN - claro.png", "traer agentes - EN - obscuro.png"],
  ["es-10-agentes", "traer agentes - ES - claro.png", "traer agentes - ES - obscuro.png"],
  ["en-11-weekly-review", "Semana - EN - claro.png", "Semana - EN - obscuro.png"],
  ["es-11-revision-semanal", "Semana - ES - claro.png", "Semana - ES - obscuro.png"],
  ["en-12-diary", "Diario - EN - claro.png", "Diario - EN - obscuro.png"],
  ["es-12-diario", "Diario - ES - claro.png", "Diario - ES - obscuro.png"],
];

const folders = process.argv.slice(2);
if (!folders.length) {
  console.error("usage: npm run screens -- <folder with the captures> [<another folder> ...]");
  process.exit(1);
}

const where = (capture) => folders.map((folder) => join(folder, capture)).find((file) => existsSync(file));
const missing = SCREENS.flatMap(([, ...captures]) => captures).filter((capture) => !where(capture));
if (missing.length) {
  console.error(`screens: missing in ${folders.join(", ")}: ${missing.join(", ")}`);
  process.exit(1);
}

const stems = SCREENS.flatMap(([name]) => [`tisty-screen-${name}-`, `tisty-screen-${name}-dark-`]);
readdirSync("public")
  .filter((file) => stems.some((stem) => file.startsWith(stem) && /^\d+\.(avif|webp)$/.test(file.slice(stem.length))))
  .forEach((file) => rmSync(`public/${file}`));

function cornerMask(width, height) {
  const alpha = Buffer.alloc(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = Math.max(0, Math.abs(x + 0.5 - width / 2) - (width / 2 - RADIUS));
      const dy = Math.max(0, Math.abs(y + 0.5 - height / 2) - (height / 2 - RADIUS));
      alpha[y * width + x] = Math.round(255 * Math.min(1, Math.max(0, RADIUS + 0.5 - Math.hypot(dx, dy))));
    }
  }
  return alpha;
}

async function save(capture, stem) {
  const file = where(capture);
  const { width, height } = await sharp(file).metadata();
  const [w, h] = [width - 2 * EDGE, height - 2 * EDGE];
  const rgb = await sharp(file).extract({ left: EDGE, top: EDGE, width: w, height: h }).removeAlpha().raw().toBuffer();
  const rounded = await sharp(rgb, { raw: { width: w, height: h, channels: 3 } })
    .joinChannel(cornerMask(w, h), { raw: { width: w, height: h, channels: 1 } })
    .png()
    .toBuffer();
  const image = await sharp(rounded).resize({ width: Math.min(WIDEST, w) }).png().toBuffer();
  const widest = (await sharp(image).metadata()).width;
  for (const size of [...WIDTHS.filter((one) => one < widest), widest]) {
    await sharp(image).resize({ width: size }).avif({ quality: 60, effort: 6, chromaSubsampling: "4:4:4" }).toFile(`${stem}-${size}.avif`);
  }
  for (const size of [WIDTHS[0], Math.min(WIDTHS.at(-1), widest)]) {
    await sharp(image).resize({ width: size }).webp({ quality: 85, alphaQuality: 100, smartSubsample: true }).toFile(`${stem}-${size}.webp`);
  }
  console.log(`screens: ${stem} from ${capture}`);
}

for (const [name, light, dark] of SCREENS) {
  await save(light, `public/tisty-screen-${name}`);
  await save(dark, `public/tisty-screen-${name}-dark`);
}
