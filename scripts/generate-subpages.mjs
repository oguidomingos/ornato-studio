/**
 * Post-build script: generates SEO subpages from dist/index.html
 * Each subpage shares the same React app but has unique meta tags for SEO.
 *
 * Usage: node scripts/generate-subpages.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';

const distDir = join(dirname(new URL(import.meta.url).pathname), '..', 'dist');
const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

const subpages = [
  {
    slug: 'tatuagem-bras\u00edlia',
    title: 'Tatuagem em Bras\u00edlia-DF | Hanna Almeida | Realismo, Fine Line & Ornamental',
    description: 'Procurando tatuagem em Bras\u00edlia? Hanna Almeida \u00e9 tatuadora especialista em realismo, fine line e ornamental em Bras\u00edlia-DF. 8 anos de experi\u00eancia. Agende sua sess\u00e3o.',
    keywords: 'tatuagem bras\u00edlia, tattoo bras\u00edlia, tatuadora bras\u00edlia, tatuagem realismo bras\u00edlia, fine line bras\u00edlia, tatuagem ornamental bras\u00edlia, tattoo DF, tatuador bras\u00edlia, est\u00fadio tatuagem bras\u00edlia',
    canonical: 'https://www.hannatattoo.com.br/tatuagem-bras%C3%ADlia',
    ogTitle: 'Tatuagem em Bras\u00edlia-DF | Hanna Almeida',
    ogDescription: 'Procurando tatuagem em Bras\u00edlia? Hanna Almeida \u00e9 tatuadora especialista em realismo, fine line e ornamental. 8 anos de experi\u00eancia. Agende.',
    twitterTitle: 'Tatuagem em Bras\u00edlia-DF | Hanna Almeida',
    twitterDescription: 'Tatuadora em Bras\u00edlia-DF com 8 anos de experi\u00eancia. Realismo, fine line e ornamental. Agende sua sess\u00e3o.',
  },
];

for (const page of subpages) {
  let html = baseHtml;

  // Replace title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${page.description}"`
  );

  // Replace meta keywords
  html = html.replace(
    /<meta name="keywords" content="[^"]*"/,
    `<meta name="keywords" content="${page.keywords}"`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${page.canonical}"`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${page.ogTitle}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${page.ogDescription}"`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${page.canonical}"`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${page.twitterTitle}"`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${page.twitterDescription}"`
  );

  const outDir = join(distDir, page.slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
  console.log(`Generated: ${page.slug}/index.html`);
}
