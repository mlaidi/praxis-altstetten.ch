/**
 * Robots.txt Generator – Hausarztpraxis Zürich Altstetten
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

const CANONICAL = 'https://praxis-altstetten.ch';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
        ],
      },
    ],
    sitemap: `${CANONICAL}/sitemap.xml`,
  };
}
