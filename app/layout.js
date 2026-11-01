import '@/styles/globals.css';
import '@/styles/components.css';
import JsonLd from '@/components/JsonLd';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import AnalyticsTracker from '@/components/AnalyticsTracker';


/* ── Viewport (Next.js 14+ best practice: separate export) ── */
export const viewport = {
  themeColor: '#0c2340',
  width: 'device-width',
  initialScale: 1,
};

/* ── Global Metadata ── */
export const metadata = {
  title: "Hausarzt & Arztpraxis Altstetten | Ärztezentrum am Bahnhof | Notfall auch ohne Termin",
  description:
    "Suchen Sie einen Arzt oder Hausarzt in Zürich Altstetten (8048)? Unsere Arztpraxis am Bahnhof Altstetten (Badenerstrasse 621) empfängt Sie auch ohne Termin. Ihr Doktor & Ärztezentrum für Allgemeinmedizin, Labor, EKG & Notfallversorgung.",
  keywords: [
    "Hausarzt Altstetten",
    "Arztpraxis Altstetten",
    "Hausarzt Zürich",
    "Notfall Arzt Zürich",
    "Allgemeinmedizin 8048",
    "Eiseninfusion Zürich",
    "Dr. Saskia Rodriguez",
    "Dr. Awad Abuawad",
  ],
  metadataBase: new URL("https://praxis-altstetten.ch"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hausarzt & Arztpraxis Altstetten | Ärztezentrum am Bahnhof | Notfall auch ohne Termin",
    description: "Suchen Sie einen Arzt oder Hausarzt in Zürich Altstetten (8048)? Unsere Arztpraxis am Bahnhof Altstetten (Badenerstrasse 621) empfängt Sie auch ohne Termin. Ihr Doktor & Ärztezentrum für Allgemeinmedizin, Labor, EKG & Notfallversorgung.",
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Hausarztpraxis Zürich Altstetten – Moderne Arztpraxis an der Badenerstrasse 621',
        type: 'image/webp',
      },
    ],
  },

  /* ── Twitter Card ── */
  twitter: {
    card: 'summary_large_image',
  },

  /* ── Icons / Favicon ── */
  // Next.js automatically uses app/icon.png and app/apple-icon.png

  /* ── Verification ── */
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || 'iHZoLgr8WF9lElvQJUEZSOp_fRQJh2lJnSAd_sR17yg',
    // yandex: process.env.YANDEX_SITE_VERIFICATION || '',
    // bing: process.env.BING_SITE_VERIFICATION || '',
  },

  /* ── Additional Meta Tags for Local SEO ── */
  other: {
    'geo.region': 'CH-ZH',
    'geo.placename': 'Zürich Altstetten',
    'geo.position': '47.3785;8.4885',
    'ICBM': '47.3785, 8.4885',
    'revisit-after': '7 days',
    'content-language': 'de-CH',
  },

  /* ── Category ── */
  category: 'medical',

  /* ── Creator ── */
  creator: 'Jerumed Nexus GmbH',
  publisher: 'Hausarztpraxis Zürich Altstetten',
};

import Script from 'next/script';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-C7GBELNGF5" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C7GBELNGF5');
          `}
        </Script>
        <AnalyticsTracker />
        <JsonLd />
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
