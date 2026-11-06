import { NextResponse } from 'next/server';

const GONE_PATTERNS = [
  /^\/feed(\/.*)?$/i,
  /^\/comments\/feed(\/.*)?$/i,
  /^\/wp-(content|admin|includes|json)(\/.*)?$/i,
  /^\/wp-.*\.php$/i,
  /^\/xmlrpc\.php$/i,
];

// Mapping of historical 404 URLs to clean 301 destinations
const REDIRECT_MAP = [
  // 1. Service: herzuntersuchung
  { test: /^\/service\/herzuntersuchung\/?$/i, dest: '/leistungen/herzuntersuchung' },
  // 2. Service: weitere-untersuchungen -> vorsorge-checkup
  { test: /^\/service\/weitere-untersuchungen\/?$/i, dest: '/leistungen/vorsorge-checkup' },
  // 3. Service generic -> leistungen
  { test: /^\/service\/([a-zA-Z0-9_-]+)\/?$/i, dest: (m) => `/leistungen/${m[1].toLowerCase()}` },
  // 4. leistungen directory root
  { test: /^\/leistungen\/?$/i, dest: '/#services' },
  // 5. leistungen-alt (e.g. /leistungen-alt/unsere/author/kensy/)
  { test: /^\/leistungen-alt(\/.*)?$/i, dest: '/#services' },
  // 6. Old service listing
  { test: /^\/hausarztpraxis-zurich-altstetten-leistungen\/?$/i, dest: '/#services' },
  // 7. galerie (e.g. /galerie/4-columns-gallery/, /galerie/2-columns-gallery/)
  { test: /^\/galerie(\/.*)?$/i, dest: '/#about' },
  { test: /^\/Galerienartikel-Typ(\/.*)?$/i, dest: '/#about' },
  // 8. author (e.g. /author/kensy/)
  { test: /^\/author(\/.*)?$/i, dest: '/#team' },
  // 9. doctors & team archives
  { test: /^\/(doctor|team)\/(dr-)?saskia-rodriguez\/?$/i, dest: '/aerzte/dr-saskia-rodriguez' },
  { test: /^\/(doctor|team)\/(dipl-arzt-|dr-)?awad-abuawad\/?$/i, dest: '/aerzte/dipl-arzt-awad-abuawad' },
  { test: /^\/(doctor|team)\/(dr-)?amin-zahran\/?$/i, dest: '/aerzte/dr-amin-zahran' },
  { test: /^\/(doctor|team)\/(pd-dr-|dr-)?mohammad-kassar\/?$/i, dest: '/aerzte/pd-dr-mohammad-kassar' },
  { test: /^\/(doctor|team)\/(dr-)?jamil-alsaaydeh\/?$/i, dest: '/aerzte/dr-jamil-alsaaydeh' },
  { test: /^\/(doctor|team)\/(dr-)?christos-bachtsetzis\/?$/i, dest: '/aerzte/dr-christos-bachtsetzis' },
  { test: /^\/(doctor|team)\/(dr-)?(dimitrios-)?patsavoudis\/?$/i, dest: '/aerzte/dr-dimitrios-patsavoudis' },
  { test: /^\/team\/([a-zA-Z0-9_-]+)\/?$/i, dest: (m) => `/aerzte/${m[1].toLowerCase()}` },
  { test: /^\/hausaerzte-zuerich-altstetten(\/.*)?$/i, dest: '/#team' },
  { test: /^\/doctor(\/.*)?$/i, dest: '/#team' },
  { test: /^\/team\/?$/i, dest: '/#team' },
  // 10. home & 810
  { test: /^\/home\/?$/i, dest: '/' },
  { test: /^\/810\/?$/i, dest: '/' },
  // 11. FAQ
  { test: /^\/faq(s)?\/?$/i, dest: '/#faq' },
  // 12. category
  { test: /^\/category(\/.*)?$/i, dest: '/' },
  // 13. Appointments, vacancies, contact
  { test: /^\/freie-stellen\/?$/i, dest: '/#contact' },
  { test: /^\/make-an-appointment\/?$/i, dest: '/#contact' },
  { test: /^\/hausarztpraxis-altstetten-zuerich-kontakt\/?$/i, dest: '/#contact' },
  { test: /^\/(contact|kontakt)\/?$/i, dest: '/#contact' },
  { test: /^\/termin\/?$/i, dest: '/#contact' },
  // 14. Old blog & news
  { test: /^\/neuigkeiten-hausarztpraxis-zuerich-atlstetten\/?$/i, dest: '/' },
  { test: /^\/grippesaison-gesundheitstipps-fur-den-winter\/?$/i, dest: '/' },
  // 15. About / Über uns
  { test: /^\/(about|uber-uns)\/?$/i, dest: '/#about' },
  // 16. Impressum trailing slash normalization
  { test: /^\/impressum\/$/i, dest: '/impressum' },
];

export function middleware(request) {
  const { pathname, searchParams, host } = request.nextUrl;

  // 1. Canonical 301 from www to non-www
  if (host === 'www.praxis-altstetten.ch' || host === 'ipv4.praxis-altstetten.ch') {
    const canonicalUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://praxis-altstetten.ch');
    return NextResponse.redirect(canonicalUrl, 301);
  }

  // 2. 301 Redirects for historical 404 addresses to preserve authority
  for (const rule of REDIRECT_MAP) {
    const match = pathname.match(rule.test);
    if (match) {
      const destination = typeof rule.dest === 'function' ? rule.dest(match) : rule.dest;
      const targetUrl = new URL(destination, 'https://praxis-altstetten.ch');
      return NextResponse.redirect(targetUrl, 301);
    }
  }

  // 3. Return HTTP 410 Gone for pure bot / scanner endpoints with no user equivalent
  for (const pattern of GONE_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse(null, {
        status: 410,
        statusText: 'Gone',
        headers: {
          'X-Robots-Tag': 'noindex, nofollow',
          'Cache-Control': 'public, max-age=604800, stale-while-revalidate=86400',
        },
      });
    }
  }

  // 4. Strip WordPress search query params (?s=...)
  if (searchParams.has('s')) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('s');
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  // 5. Strip WordPress pagination query params (?_page=2)
  if (searchParams.has('_page')) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('_page');
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  // 6. Strip rest_route query params
  if (searchParams.has('rest_route')) {
    return new NextResponse(null, {
      status: 410,
      statusText: 'Gone',
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)',
  ],
};
