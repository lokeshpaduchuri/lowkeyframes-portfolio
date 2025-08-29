// Minimal sitemap generator pulling album IDs from src/app/data/albums.ts
// Run automatically before build via package.json "prebuild"
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ORIGIN = 'https://lowkeyframes.com';
const ROOT = resolve(process.cwd());
const albumsTsPath = resolve(ROOT, 'src/app/data/albums.ts');
const sitemapPath = resolve(ROOT, 'src/assets/sitemap.xml');

function extractAlbumIds(ts) {
  const ids = [];
  const regex = /id:\s*'([^']+)'/g;
  let m;
  while ((m = regex.exec(ts)) !== null) {
    ids.push(m[1]);
  }
  return Array.from(new Set(ids));
}

function buildUrl(loc) {
  return `  <url><loc>${ORIGIN}${loc}</loc></url>`;
}

function main() {
  const baseRoutes = ['/', '/portfolio', '/photography', '/reviews', '/about', '/contact'];
  let albumRoutes = [];
  try {
    const ts = readFileSync(albumsTsPath, 'utf8');
    const ids = extractAlbumIds(ts);
    albumRoutes = ids.map(id => `/album/${id}`);
  } catch (e) {
    console.warn('Could not read albums.ts to extract album routes:', e.message);
  }
  const urls = [...baseRoutes, ...albumRoutes].map(buildUrl).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  writeFileSync(sitemapPath, xml, 'utf8');
  console.log('Sitemap written to', sitemapPath);
}

main();

