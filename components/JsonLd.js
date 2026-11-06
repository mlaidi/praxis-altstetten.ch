/* ══════════════════════════════════════════════════════════════
   JSON-LD Structured Data – Hausarztpraxis Zürich Altstetten
   All URLs use the canonical domain (ohne www).
   ══════════════════════════════════════════════════════════════ */

const CANONICAL = 'https://praxis-altstetten.ch';

/* ── MedicalClinic Schema ── */
const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "MedicalBusiness", "Physician"],
  "@id": `${CANONICAL}/#clinic`,
  "name": "Hausarztpraxis Zürich Altstetten",
  "alternateName": [
    "Jerumed Praxis Altstetten", "Arztpraxis Altstetten", "Gesundheitszentrum Altstetten",
    "Medizinische Praxis Altstetten", "Ärztezentrum Altstetten", "Gemeinschaftspraxis Altstetten",
    "Praxisgemeinschaft Altstetten", "Ärztehaus Altstetten", "Praxis Altstetten",
    "Walk-in Praxis Altstetten", "Notfallpraxis Altstetten", "Permanence Altstetten",
    "Arztpraxis am Bahnhof Altstetten", "Hausarztpraxis am Bahnhof Altstetten",
    "Hausarzt Zürich Altstetten", "Ärztezentrum-Altstetten Zürich",
    "Altstetten Arztpraxis", "PGA Altstetten"
  ],
  "url": CANONICAL,
  "mainEntityOfPage": CANONICAL,
  "logo": `${CANONICAL}/images/logo.webp`,
  "image": `${CANONICAL}/images/og-image.webp`,
  "description": "Ihre Hausarztpraxis, Walk-in Notfallpraxis & Ärztezentrum am Bahnhof Zürich-Altstetten an der Badenerstrasse 621 (ehemals Praxisgemeinschaft Altstetten / PGA AG). Schnelle Termine, Notfälle ohne Voranmeldung, Praxislabor, digitales Röntgen und EKG.",
  "telephone": "+41 44 244 09 99",
  "email": "info@praxis-altstetten.ch",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Badenerstrasse 621",
    "addressLocality": "Zürich",
    "postalCode": "8048",
    "addressCountry": "CH"
  },
  "employee": [
    {
      "@type": "Physician",
      "@id": `${CANONICAL}/#physician-awad-abuawad`,
      "name": "Dipl. Arzt Awad Abuawad",
      "jobTitle": "Praktischer Arzt für Allgemeinmedizin (Leitung Jerumed)",
      "url": `${CANONICAL}/#team`,
      "worksFor": { "@id": `${CANONICAL}/#clinic` }
    },
    {
      "@type": "Physician",
      "@id": `${CANONICAL}/#physician-saskia-rodriguez`,
      "name": "Dr. med. Saskia Rodriguez",
      "jobTitle": "Praktische Ärztin für Allgemeinmedizin",
      "url": `${CANONICAL}/#team`,
      "worksFor": { "@id": `${CANONICAL}/#clinic` }
    },
    {
      "@type": "Physician",
      "@id": `${CANONICAL}/#physician-amin-zahran`,
      "name": "Dr. med. Amin Zahran",
      "jobTitle": "Facharzt für Allgemeinmedizin (Lehrarzt)",
      "url": `${CANONICAL}/#team`,
      "worksFor": { "@id": `${CANONICAL}/#clinic` }
    },
    {
      "@type": "Physician",
      "@id": `${CANONICAL}/#physician-mohammad-kassar`,
      "name": "PD Dr. med. Mohammad Kassar",
      "jobTitle": "Facharzt für Kardiologie & Allgemeine Innere Medizin FMH",
      "url": `${CANONICAL}/#team`,
      "worksFor": { "@id": `${CANONICAL}/#clinic` }
    },
    {
      "@type": "Physician",
      "@id": `${CANONICAL}/#physician-jamil-alsaaydeh`,
      "name": "Dr. med. Jamil Alsaaydeh",
      "jobTitle": "Facharzt für Urologie",
      "url": `${CANONICAL}/#team`,
      "worksFor": { "@id": `${CANONICAL}/#clinic` }
    },
    {
      "@type": "Physician",
      "@id": `${CANONICAL}/#physician-christos-bachtsetzis`,
      "name": "Christos Bachtsetzis",
      "jobTitle": "Allgemeinmedizin & Prävention",
      "url": `${CANONICAL}/#team`,
      "worksFor": { "@id": `${CANONICAL}/#clinic` }
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.3914,
    "longitude": 8.4917
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "13:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "14:00",
      "closes": "18:00"
    }
  ],
  "availableLanguage": [
    { "@type": "Language", "name": "German", "alternateName": "de" },
    { "@type": "Language", "name": "Arabic", "alternateName": "ar" },
    { "@type": "Language", "name": "English", "alternateName": "en" },
    { "@type": "Language", "name": "Spanish", "alternateName": "es" },
    { "@type": "Language", "name": "French", "alternateName": "fr" }
  ],
  "medicalSpecialty": [
    "General Practice",
    "Preventive Medicine"
  ],
  "areaServed": [
    { "@type": "City", "name": "Zürich", "sameAs": "https://www.wikidata.org/wiki/Q72" },
    { "@type": "AdministrativeArea", "name": "Altstetten" },
    { "@type": "AdministrativeArea", "name": "Albisrieden" },
    { "@type": "AdministrativeArea", "name": "Schlieren" },
    { "@type": "AdministrativeArea", "name": "Grünau" },
    { "@type": "AdministrativeArea", "name": "Bahnhof Altstetten" },
    { "@type": "AdministrativeArea", "name": "8048 Zürich" },
    { "@type": "AdministrativeArea", "name": "Kanton Zürich" }
  ],
  "knowsAbout": [
    "Arzt", "Doktor", "Hausarzt", "Hausarztpraxis", "Praxis Altstetten",
    "Walk-in Klinik", "Gesundheitszentrum", "Medizinische Praxis", "Arzt in der Nähe",
    "Ärztezentrum Altstetten", "Gemeinschaftspraxis Altstetten", "Praxisgemeinschaft Altstetten",
    "Arzt ohne Termin", "Walk-in Praxis", "Notfallpraxis Altstetten", "Permanence Altstetten",
    "EKG Zürich Altstetten", "Labor Zürich", "Röntgen Altstetten",
    "Eiseninfusion Zürich", "Eisenzentrum Zürich", "Eisenmangel Spezialist",
    "Vorsorgeuntersuchung Zürich", "Lungenuntersuchungen", "Fahreignungsabklärung Zürich",
    "NAD+ Infusion Zürich", "PRP Therapie Zürich",
    "Neue Patienten Altstetten", "English speaking doctor", "Arabischer Arzt Zürich",
    "Hausarzt Spanisch", "Zweisprachige Ärzte Zürich",
    "Badenerstrasse 621", "Bahnhof Altstetten", "8048 Zürich"
  ],
  "hasMap": "https://maps.google.com/?q=Hausarztpraxis+Zürich+Altstetten+Badenerstrasse",
  "priceRange": "$$",
  "currenciesAccepted": "CHF",
  "paymentAccepted": "Krankenkasse, Barzahlung, Kreditkarte",
  "sameAs": [
    "https://praxen-jerumed.ch",
    "https://hausarztpraxis-duebendorf.ch/",
    "https://hausarztpraxis-winterthur.ch/",
    "https://praxis-seefeld.ch/",
    "https://spitex-jerumed.ch/",
    "https://www.med-esthec.ch"
  ],
  "parentOrganization": {
    "@type": "MedicalOrganization",
    "@id": "https://praxen-jerumed.ch/#organization",
    "name": "Praxen Jerumed"
  },
  "medicalService": [
    { "@type": "MedicalProcedure", "@id": `${CANONICAL}/#service-ekg`, "name": "EKG Zürich Altstetten" },
    { "@type": "MedicalProcedure", "@id": `${CANONICAL}/#service-labor`, "name": "Labordiagnostik Zürich" },
    { "@type": "MedicalProcedure", "@id": `${CANONICAL}/#service-spirometrie`, "name": "Spirometrie / Lungentest" },
    { "@type": "MedicalProcedure", "@id": `${CANONICAL}/#service-fahreignung`, "name": "Fahreignungsabklärung Zürich" },
    { "@type": "MedicalTherapy", "@id": `${CANONICAL}/#service-nad`, "name": "NAD+ Infusion Zürich" },
    { "@type": "MedicalTherapy", "@id": `${CANONICAL}/#service-vitamin`, "name": "Vitamin Infusion Zürich" },
    { "@type": "MedicalTherapy", "@id": `${CANONICAL}/#service-eisen`, "name": "Eiseninfusion Zürich" },
    { "@type": "MedicalTherapy", "@id": `${CANONICAL}/#service-prp`, "name": "PRP Therapie Zürich" }
  ]
};

/* ── WebSite Schema (für Sitelinks-Suchfeld) ── */
const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${CANONICAL}/#website`,
  name: 'Hausarztpraxis Zürich Altstetten',
  url: CANONICAL,
  inLanguage: 'de-CH',
  publisher: { '@id': `${CANONICAL}/#clinic` },
};

/* ── BreadcrumbList Schema ── */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${CANONICAL}/#breadcrumb`,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Startseite',
      item: CANONICAL,
    },
  ],
};

/* ── FAQPage Schema ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${CANONICAL}/#faq`,
  "mainEntityOfPage": CANONICAL,
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ist die Hausarztpraxis Zürich Altstetten die ehemalige Praxisgemeinschaft Altstetten (PGA)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Die Hausarztpraxis Zürich Altstetten an der Badenerstrasse 621 führt den traditionsreichen Standort der ehemaligen Praxisgemeinschaft Altstetten (PGA AG) mit erweitertem Ärzteteam, modernster medizintechnischer Diagnostik und eigenem Walk-in Notfalldienst fort. Alle Patientendossiers und die vertraute Betreuung bleiben nahtlos erhalten."
      }
    },
    {
      "@type": "Question",
      "name": "Können auch Patientinnen und Patienten aus Schlieren oder Zürich-West ohne Termin kommen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, selbstverständlich! Unsere Praxis liegt an der Badenerstrasse 621 direkt an der Tramlinie 2 (Haltestelle Lindenplatz oder Freihofstrasse) und nur 3 Minuten vom Bahnhof Altstetten. Patientinnen und Patienten aus Schlieren, Albisrieden, Regensdorf und ganz Zürich-West erreichen uns in wenigen Minuten für dringende Konsultationen ohne Voranmeldung."
      }
    },
    {
      "@type": "Question",
      "name": "Nimmt die Praxis Altstetten neue Patienten auf?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, wir nehmen jederzeit neue Patienten für die hausärztliche Grundversorgung auf. Wir arbeiten mit allen Schweizer Krankenkassen zusammen (Grundversicherung, Hausarzt- und HMO-Modelle). Sie können sich ganz einfach online oder telefonisch unter 044 244 09 99 bei uns anmelden."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich ohne Termin in die Hausarztpraxis Altstetten kommen (Walk-in Praxis)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja! Für Notfälle, akute Erkrankungen, Schmerzen und dringende Anliegen empfangen wir Sie während unserer Öffnungszeiten als Walk-in Praxis auch ohne vorherige Terminvereinbarung. Kommen Sie einfach an die Badenerstrasse 621, nur wenige Gehminuten vom Bahnhof Altstetten. Notfälle werden priorisiert behandelt."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Sprachen sprechen die Ärzte in der Praxis Altstetten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unser internationales Team betreut Sie mehrsprachig: Deutsch, Englisch (English speaking doctor / GP), Spanisch (Español), Arabisch (Arabisch sprechende Ärzte / Arabic speaking), Französisch und Rumänisch. Internationale Patientinnen und Patienten fühlen sich bei uns bestens verstanden."
      }
    },
    {
      "@type": "Question",
      "name": "Wie erreiche ich die Arztpraxis Altstetten vom Bahnhof und welche Quartiere werden betreut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Hausarztpraxis Zürich Altstetten befindet sich an der Badenerstrasse 621 (8048 Zürich), nur wenige Gehminuten vom Bahnhof Zürich-Altstetten entfernt. Dank der zentralen Lage sind wir aus allen Quartieren schnell erreichbar: Albisrieden, Grünau, Schlieren, Hardau und ganz Zürich West."
      }
    },
    {
      "@type": "Question",
      "name": "Bieten Sie Eiseninfusionen, Laboruntersuchungen und Röntgen direkt in der Praxis an?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, wir verfügen über ein eigenes Praxislabor (Blut- und Entzündungswerte in wenigen Minuten), digitales Röntgen, EKG, Lungenfunktionstests (Spirometrie) sowie Infusionstherapien (Eiseninfusion, Vitamin-Infusionen, NAD+, PRP-Therapie). Kein Umweg ins Spital – alles direkt in unserer Praxis in Zürich Altstetten."
      }
    },
    {
      "@type": "Question",
      "name": "Welche diagnostischen Abklärungen sind direkt in der Praxis möglich?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dank modernster technischer Ausstattung verfügen wir über ein eigenes Praxislabor, digitales Röntgen, Ruhe- und Langzeit-EKG sowie Lungenfunktionstests (Spirometrie). Viele Befunde liegen innerhalb weniger Minuten vor. Zusätzlich führen wir Fahreignungsabklärungen (Stufe I–III), Ohrenspülungen und umfassende Gesundheits-Check-ups direkt in unserer Praxis durch."
      }
    }
  ]
};


/* ══════════ Exportierte Komponente ══════════ */
export default function JsonLd() {
  return (
    <>
      {/* MedicalBusiness / Praxis */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />
      {/* WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      {/* Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
