import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const INPUT_DIR = './public/fotos';
const OUTPUT_DIR = './public/fotos/webp';
const MAX_WIDTH = 2000;
const QUALITY = 85;

if (!existsSync(OUTPUT_DIR)) {
  await mkdir(OUTPUT_DIR, { recursive: true });
}

const files = (await readdir(INPUT_DIR)).filter(f =>
  /\.(jpg|jpeg|JPG|JPEG)$/.test(f)
);

console.log(`Convertendo ${files.length} fotos para WebP...\n`);

for (const file of files) {
  const input = path.join(INPUT_DIR, file);
  const name = path.basename(file, path.extname(file)).toLowerCase();
  const output = path.join(OUTPUT_DIR, `${name}.webp`);

  const { size: sizeBefore } = (await import('fs')).statSync(input);

  await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output);

  const { size: sizeAfter } = (await import('fs')).statSync(output);
  const reduction = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);

  console.log(`${file} → ${name}.webp  ${(sizeBefore / 1e6).toFixed(1)}MB → ${(sizeAfter / 1e6).toFixed(1)}MB  (-${reduction}%)`);
}

console.log('\nPronto! Arquivos salvos em public/fotos/webp/');
