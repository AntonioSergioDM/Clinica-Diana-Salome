import { readFile, mkdir } from 'node:fs/promises';
import { basename, join } from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicImages = join(root, 'public', 'images');
const content = JSON.parse(await readFile(join(root, 'src', 'content', 'site', 'pt.json'), 'utf8'));
const batches = [
  ['header', content.header, 1800],
  ['services', [...new Set(content.services.map(item => item.image))], 1100],
  ['team', [...new Set(content.team.map(item => item.image))], 500],
  ['testimonials', [...new Set(content.testimonials.map(item => item.image))], 320],
];

for (const [folder, files, width] of batches) {
  const outputDir = join(publicImages, 'optimized', folder);
  await mkdir(outputDir, { recursive: true });
  for (const filename of files) {
    const input = join(publicImages, folder, filename);
    const output = join(outputDir, `${basename(filename).replace(/\.[^.]+$/, '')}.webp`);
    await sharp(input).rotate().resize({ width, height: width, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80, effort: 5 }).toFile(output);
  }
}
