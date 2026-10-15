/**
 * Robots.txt Generator
 * 
 * Next.js App Router convention: exporting a default function from
 * app/robots.js automatically generates /robots.txt
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/', 
          '/api/',
          '/leistungen-alt/',
          '/hausaerzte-zuerich-altstetten/3-columns-doctors/',
          '/galerie/4-columns-gallery',
          '/galerie/4-columns-gallery/',
          '/Galerienartikel-Typ/praxis-raeume/',
          '/wp-*.php',
          '/author/kensy/',
          '/wp-admin/',
          '/feed/',
          '/*/feed/'
        ],
      },
    ],
    sitemap: 'https://praxis-altstetten.ch/sitemap.xml',
  };
}
