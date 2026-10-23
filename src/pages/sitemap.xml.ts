import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const urls = [new URL('/', site!), new URL('/en/', site!)];
  const entries = urls.map(url => `  <url><loc>${url.toString()}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
