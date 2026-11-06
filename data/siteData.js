/* ══════════════════════════════════════════════
   Praxis Seefeld – Site Data
   ══════════════════════════════════════════════ */

export const SITE = {
  name: "Hausarztpraxis Zürich Altstetten",
  shortName: "Praxis Altstetten",
  bookingUrl: "https://app.arzt-direkt.de/hausarztpraxis-zuerich/booking",
  phone: "044 - 244 09 99",
  phoneTel: "0442440999",
  email: "praxis-altstetten@hin.ch",
  address: "Badenerstrasse 621, CH-8048 Zürich",
  addressStreet: "Badenerstrasse 621",
  addressCity: "CH-8048 Zürich",
  hours: "Mo – Fr: 08:30 – 13:00 & 14:00 – 18:00 | Sa: nach Vereinbarung",
  facebook: "https://www.facebook.com/profile.php?id=61561645107988",
  instagram: "https://www.instagram.com/praxenjerumed/",
  googleReview: "https://g.page/r/CfUEGEV0luM_EBM/review",
  mapEmbed: "https://maps.google.com/maps?q=Badenerstrasse%20621,%208048%20Z%C3%BCrich&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsLink: "https://maps.google.com/?q=Badenerstrasse+621+8048+Zürich",
  logoUrl: "/images/logo.webp",
  praxisPhotos: [
    { src: "/images/praxis/1x.webp", alt: "Empfang der Praxis" },
    { src: "/images/praxis/3x.webp", alt: "Behandlungsraum" },
    { src: "/images/praxis/4x.webp", alt: "Praxislabor" },
    { src: "/images/praxis/5x.webp", alt: "Chirurgieraum" },
    { src: "/images/praxis/6x.webp", alt: "Operationsraum" },
  ],
};

export const SERVICES = [
  {
    slug: "herzuntersuchung",
    title: "Herzuntersuchung",
    img: "/images/services/Herzuntersuchung.webp",
    short: "Umfassende kardiologische Diagnostik mit EKG.",
    metaDesc: "Kardiologische Diagnostik in Zürich Altstetten: Ruhe- & Langzeit-EKG, Herz-Kreislauf-Check & Notfall-Biomarker an der Badenerstrasse 621. Jetzt Termin buchen!",
    full: "Umfassende kardiologische Diagnostik mit modernsten EKG-Geräten für Ihre Herzgesundheit. Wir führen Ruhe-EKGs und Langzeit-EKGs durch, um Herzrhythmusstörungen und andere kardiale Auffälligkeiten frühzeitig zu erkennen. Bei Bedarf überweisen wir Sie an spezialisierte Kardiologen in der Region.",
  },
  {
    slug: "lungenuntersuchungen",
    title: "Lungenuntersuchungen",
    img: "/images/services/Lungenuntersuchungen.webp",
    short: "Spirometrie und Lungenfunktionstests.",
    metaDesc: "Lungenfunktionstest & Spirometrie in Zürich Altstetten. Präzise Diagnostik bei Asthma, Husten & Atemnot an der Badenerstrasse 621. Jetzt Termin vereinbaren!",
    full: "Spirometrie und Lungenfunktionstests für eine präzise Diagnose Ihrer Atemwege. Ob Asthma, COPD oder andere Lungenerkrankungen – wir klären Ihre Beschwerden sorgfältig ab. Unsere modernen Spirometriesysteme ermöglichen schnelle und zuverlässige Messungen direkt in unserer Praxis.",
  },
  {
    slug: "roentgenuntersuchung",
    title: "Röntgenuntersuchung",
    img: "/images/services/Röntgenuntersuchung.webp",
    short: "Röntgen direkt in unserer Praxis.",
    metaDesc: "Digitales Röntgen in Zürich Altstetten ohne Wartezeit: Sofortdiagnostik für Knochen, Thorax & Gelenke an der Badenerstrasse 621. KVG-Abrechnung. Jetzt Termin!",
    full: " Röntgenuntersuchung direkt in unserer Praxis für schnelle und zuverlässige Bildgebung. Ob Thorax-Röntgen, Knochen oder Gelenke – wir liefern Ihnen schnelle Resultate ohne lange Wartezeiten.",
  },
  {
    slug: "fahreignungsabklaerung",
    title: "Fahreignungsabklärung",
    img: "/images/services/Fahreignungsabklärung.webp",
    short: "Medizinische Abklärung der Fahreignung Stufe I bis III.",
    metaDesc: "Fahreignungsabklärung Stufe 1 bis 3 in Zürich Altstetten. Ärztliche Kontrolluntersuchung für Senioren & Berufschauffeure nach StVA-Richtlinien. Jetzt buchen!",
    full: "Medizinische Abklärung der Fahreignung Stufe I bis III – schnell und unkompliziert. Ab einem bestimmten Alter oder bei bestimmten Erkrankungen ist eine ärztliche Bestätigung der Fahreignung notwendig. Wir führen die Untersuchung gemäss den Richtlinien des Strassenverkehrsamtes durch und stellen Ihnen das entsprechende Attest aus.",
  },
  {
    slug: "ohrenspuelung",
    title: "Ohrenspülung",
    img: "/images/services/Ohrenspülung.webp",
    short: "Professionelle Ohrenreinigung und -spülung.",
    metaDesc: "Professionelle Ohrenspülung in Zürich Altstetten: Sanfte Cerumen-Entfernung bei verstopftem Ohr & Hörminderung. Sofortige Hilfe an der Badenerstrasse 621.",
    full: "Professionelle Ohrenreinigung und -spülung für besseres Hören und Wohlbefinden. Verstopfte Gehörgänge durch Cerumen (Ohrenschmalz) können zu Hörminderung und Beschwerden führen. Wir entfernen Cerumen schonend und effektiv, sodass Sie sofort wieder besser hören können.",
  },
  {
    slug: "check-ups",
    title: "Check-ups & Atteste",
    img: "/images/services/Fahreignungsabklärung.webp",
    short: "Medizinische Check-ups und Ausstellung von Attesten.",
    metaDesc: "Medizinische Check-ups & Atteste in Zürich Altstetten. Umfassende Vorsorge, Laboranalysen & Zeugnisse für Beruf, Sport und Reisen. Jetzt Termin vereinbaren!",
    full: "Medizinische Check-ups und Ausstellung von Gesundheitsattesten – schnell und unkompliziert. Ob für den Beruf, den Sport oder allgemeine Vorsorge, wir führen die notwendigen Untersuchungen sorgfältig durch und stellen Ihnen das entsprechende ärztliche Attest aus.",
  },
  {
    slug: "mineralmangel",
    title: "Mineral- & Eisenmangel",
    img: "/images/services/Eisenmangel.webp",
    short: "Behandlung bei Mineral- und Eisenmangel mittels Infusion.",
    metaDesc: "Diagnostik & Infusionstherapie bei Mineralstoff- und Eisenmangel in Zürich Altstetten. Schnelle Hilfe bei chronischer Müdigkeit an der Badenerstrasse 621.",
    full: "Behandlung von Erschöpfung und Müdigkeit bei Mineral- und Eisenmangel mittels Infusionen. Ein Mangel an essenziellen Mineralien oder Eisen ist eine der häufigsten Ursachen für chronische Müdigkeit und Leistungsminderung. In unserer Praxis bieten wir Ihnen eine schnelle und effektive Behandlung durch massgeschneiderte intravenöse Infusionen an.",
  },
  {
    slug: "labor",
    title: "Labor",
    img: "/images/services/Labor.webp",
    short: "Modernste Laborgeräte für schnelle Analysen.",
    metaDesc: "Praxiseigenes Sofortlabor in Zürich Altstetten: Blutbild, CRP, Troponin & Stoffwechselwerte in wenigen Minuten ausgewertet. KVG-anerkannt. Jetzt Termin buchen!",
    full: "Modernste Laborgeräte für schnelle Ergebnisse und umfassende Analysen. Unser Praxislabor deckt ein breites Spektrum an Laboruntersuchungen ab: von Blutbild und Entzündungswerten bis zu Stoffwechsel- und Schilddrüsenparametern. Viele Ergebnisse liegen innerhalb weniger Minuten vor.",
  },
  {
    slug: "therapien",
    title: "Therapien",
    img: "/images/services/Leistungen und Therapien.webp",
    short: "Infusionstherapien, Impfungen und individuelle Behandlungen.",
    metaDesc: "Ganzheitliche Therapien in Zürich Altstetten: Infusionen, Wundversorgung, Impfberatung und Schmerztherapie an der Badenerstrasse 621. Jetzt beraten lassen!",
    full: "Unser therapeutisches Angebot umfasst Infusionstherapien (Eisen, Vitamine), Impfberatungen, Reisemedizin, Wundversorgung und kleinchirurgische Eingriffe. Wir erstellen für Sie einen individuellen Therapieplan, der auf Ihre Bedürfnisse abgestimmt ist.",
  },
  {
    slug: "vorsorge-checkup",
    title: "Vorsorge & Check-up",
    img: "/images/services/Weitere Untersuchungen.webp",
    short: "Gesundheitschecks und Vorsorgeuntersuchungen.",
    metaDesc: "Vorsorge-Checkup in Zürich Altstetten: Ganzheitliche Gesundheitsuntersuchung, Herz-Kreislauf-Screening & Krebsfrüherkennung. Sichern Sie jetzt Ihre Vorsorge!",
    full: "Umfassende Vorsorgeuntersuchungen und Gesundheitschecks für Ihre langfristige Gesundheit. Wir bieten individuelle Check-ups, reisemedizinische Beratung, Ernährungsberatung und gezielte Früherkennung von Risikofaktoren.",
  },
  {
    slug: "notfallpraxis-walk-in",
    title: "Notfallarzt & Walk-in Praxis",
    img: "/images/services/Notfallpraxis.webp",
    short: "Arzt ohne Termin für Notfälle und akute Beschwerden in Zürich Altstetten.",
    metaDesc: "Walk-in Praxis & Notfallarzt ohne Termin in Zürich Altstetten (3 Min. vom Bahnhof Altstetten). Rasche Behandlung akuter Beschwerden. Auch für Schlieren. Jetzt buchen!",
    full: "Notfallarzt & Walk-in Praxis in Zürich Altstetten. Wir sind für akute medizinische Notfälle und plötzliche Beschwerden da. Sie können als Walk-in Patient ohne Voranmeldung vorbeikommen, um bei Fieber, Schmerzen, Verletzungen oder Infektionen sofortige Hilfe zu erhalten. Unsere Praxis liegt zentral nahe dem Bahnhof Altstetten und ist auch aus Schlieren und Albisrieden schnell erreichbar.",
  },
  {
    slug: "eiseninfusion-labor",
    title: "Eisenzentrum & Eiseninfusion",
    img: "/images/services/Eiseninfusion.webp",
    short: "Umfassende Labordiagnostik und Eiseninfusionen bei Mangelerscheinungen.",
    metaDesc: "Eisenzentrum & Eiseninfusion in Zürich Altstetten: Gezielte Diagnostik & intravenöse Ferritin-Therapie bei Erschöpfung. KVG-anerkannt an der Badenerstr. 621.",
    full: "Eisenzentrum & Eiseninfusion in Zürich Altstetten. Ein Eisenmangel führt oft zu chronischer Müdigkeit, Konzentrationsschwäche und Leistungsabfall. In unserem praxiseigenen Labor bestimmen wir sofort Ihre Ferritin- und Blutwerte und führen anschliessend massgeschneiderte Eiseninfusionen durch, um Ihre Speicher sicher und nachhaltig aufzufüllen.",
  },
];

export const TEAM = [
  {
    slug: "dr-saskia-rodriguez",
    name: "Dr. med. (RO) Saskia Rodriguez",
    role: "Praktische Ärztin",
    roleDetail: "Allgemeinmedizin Leitung Jerumed",
    initials: "SR",
    photo: "/images/team/Dr. Saskia.webp",
    bio: "Dr. med. Saskia Rodriguez ist diplomierte Ärztin für Allgemeinmedizin mit MEBEKO-Anerkennung. Sie legt besonderen Wert auf eine ganzheitliche, einfühlsame Grundversorgung, Frauengesundheit und Prävention. Sie betreut Patientinnen und Patienten mehrsprachig auf Deutsch, Spanisch, Englisch, Französisch und Rumänisch.",
    qualifications: [
      "Staatsexamen und ärztliche Approbation in Rumänien",
      "Anerkennung des Arztdiploms in der Schweiz (MEBEKO)",
      "Umfassende klinische Erfahrung in der Allgemeinmedizin",
      "Besonderes Interesse an Frauengesundheit und Prävention"
    ],
    languages: "Deutsch, Spanisch, Englisch, Französisch, Rumänisch",
  },
  {
    slug: "dipl-arzt-awad-abuawad",
    name: "Dipl. Arzt Awad Abuawad",
    role: "Praktischer Arzt",
    roleDetail: "Allgemeinmedizin FMH Leitung Jerumed",
    initials: "AA",
    photo: "/images/team/Dr. Awad.webp",
    bio: "A. Abuawad ist diplomierter Arzt für Allgemeinmedizin und leitet die Hausarztpraxis Zürich Altstetten (ehemals Praxisgemeinschaft Altstetten / PGA AG) seit über 20 Jahren. Er betreut Patientinnen und Patienten aller Altersgruppen mit Schwerpunkt auf ganzheitlicher Grundversorgung, Notfallmedizin und Prävention.",
    qualifications: [
      "Staatsexamen und Approbation als Arzt",
      "Über 20 Jahre klinische Erfahrung in der Grundversorgung",
      "Gründer und ärztlicher Leiter Jerumed Praxis Altstetten",
      "Schwerpunkte: Innere Medizin, Notfallmedizin, Präventivmedizin"
    ],
    languages: "Deutsch, Arabisch",
  },
  {
    slug: "dr-amin-zahran",
    name: "Dr.med. Amin Zahran",
    role: "Facharzt für Allgemein Medizin",
    roleDetail: "Allgemeine Innere Medizin FMH Lehrarzt",
    initials: "AZ",
    photo: "/images/team/Dr.-Amin-Zahran.webp",
    bio: "Dr.med. Amin Zahran ist Facharzt für Allgemeinmedizin und anerkannter FMH-Lehrarzt mit langjähriger Spital- und Praxiserfahrung in der Schweiz. Er steht für eine fundierte internistische Diagnostik, leitliniengerechte Betreuung chronischer Erkrankungen und einfühlsame Betreuung auf Deutsch und Arabisch.",
    qualifications: [
      "Facharzt für Allgemeine Innere Medizin FMH",
      "Akkreditierter Lehrarzt für Allgemeinmedizin",
      "Langjährige Erfahrung an Schweizer Akutspitälern",
      "Schwerpunkte: Innere Medizin, Notfalltriage, Diagnostik"
    ],
    languages: "Deutsch, Arabisch",
  },
  {
    slug: "pd-dr-mohammad-kassar",
    name: "PD Dr. med. Mohammad Kassar",
    role: "Facharzt Kardiologie",
    roleDetail: "FMH Facharzt Allgemein Innere Medizin & Kardiologie",
    initials: "MK",
    photo: "/images/team/Dr Mohamed Kassar.webp",
    bio: "PD Dr. med. Mohammad Kassar ist Facharzt für Kardiologie sowie Facharzt für Allgemeine Innere Medizin FMH. Als habilitierter Privatdozent verbindet er universitäre Spitzenmedizin bei Herz-Kreislauf-Erkrankungen, Bluthochdruck und Rhythmusstörungen mit engagierter hausärztlicher Patientenbetreuung auf Deutsch, Arabisch und Englisch.",
    qualifications: [
      "Facharzt für Kardiologie FMH",
      "Facharzt für Allgemeine Innere Medizin FMH",
      "Habilitation und Privatdozent für Kardiologie",
      "Schwerpunkte: Herz-Kreislauf-Check, EKG, Kardiologie"
    ],
    languages: "Deutsch, Arabisch, Englisch",
  },
  {
    slug: "dr-jamil-alsaaydeh",
    name: "Dr. med. Jamil Alsaaydeh",
    role: "Facharzt für Urologie",
    roleDetail: "Urologische Sprechstunde & Vorsorge",
    initials: "JS",
    photo: "/images/team/Dr.-med.-Jamil-Alsaaydeh.webp",
    bio: "Dr. med. Jamil Alsaaydeh ist Facharzt für Urologie mit langjähriger klinischer Praxiserfahrung. An der Badenerstrasse 621 bietet er urologische Fachdiagnostik, Vorsorgeuntersuchungen (Prostata, Blase) und Männergesundheit in diskreter und moderner Atmosphäre auf Deutsch, Arabisch, Englisch und Russisch an.",
    qualifications: [
      "Facharzt für Urologie",
      "Langjährige operative und ambulante Klinikerfahrung",
      "Schwerpunkte: Männergesundheit, Vorsorge, Blasenleiden"
    ],
    languages: "Deutsch, Arabisch, Englisch, Russisch",
  },
  {
    slug: "dr-christos-bachtsetzis",
    name: "Dr.med (CY) Christos Sergios Bachtsetzis",
    role: "Allgemein Medizin",
    roleDetail: "Spezialisierung in Longevity Medizin",
    initials: "CB",
    photo: "/images/team/Dr. Chris.webp",
    bio: "Chris Bachtsetzis ist ein international tätiger Mediziner mit Schwerpunkt auf Allgemeinmedizin, Prävention und modernen Ansätzen der Gesundheitsoptimierung. Mit fundierter Berufserfahrung in der Schweiz verbindet er evidenzbasierte Medizin mit innovativen Konzepten aus Biohacking, IV-Infusionen und mitochondrialer Zelloptimierung.",
    qualifications: [
      "Allgemeinmedizin & klinische Grundversorgung",
      "Weiterbildung in Langlebigkeits- und Präventionsmedizin",
      "Schwerpunkte: IV-Infusionen, Longevity, Stressregulation"
    ],
    languages: "Deutsch, Englisch, Griechisch",
  },
  {
    slug: "dr-dimitrios-patsavoudis",
    name: "Dr. med. Dimitrios Patsavoudis",
    role: "Ehemaliger Praxisarzt",
    roleDetail: "Patienteninformation ehem. Praxisgemeinschaft Altstetten",
    initials: "DP",
    photo: "/images/team/Dr. Awad.webp",
    bio: "Information für Patientinnen und Patienten von Dr. med. Dimitrios Patsavoudis: Dr. Patsavoudis war über viele Jahre als geschätzter Hausarzt in der ehemaligen Praxisgemeinschaft Altstetten (PGA AG) an der Badenerstrasse 621 tätig. Alle Patientendossiers und die kontinuierliche ärztliche Betreuung werden an diesem Standort nahtlos durch unser Praxisteam fortgeführt.",
    qualifications: [
      "Ehemaliger Hausarzt der Praxisgemeinschaft Altstetten (PGA AG)",
      "Patientendossiers und Vorbefunde nahtlos am Standort vorhanden"
    ],
    languages: "Deutsch, Griechisch",
  },
];

export const FOOTER_SERVICES = [
  { label: "Herzuntersuchung", slug: "herzuntersuchung" },
  { label: "Lungenuntersuchungen", slug: "lungenuntersuchungen" },
  { label: "Röntgenuntersuchung", slug: "roentgenuntersuchung" },
  { label: "Fahreignungsabklärung", slug: "fahreignungsabklaerung" },
  { label: "Ohrenspülung", slug: "ohrenspuelung" },
  { label: "Check-ups & Atteste", slug: "check-ups" },
  { label: "Mineral- & Eisenmangel", slug: "mineralmangel" },
  { label: "Laboranalysen", slug: "labor" },
  { label: "Therapien", slug: "therapien" },
  { label: "Vorsorge & Check-up", slug: "vorsorge-checkup" },
  { label: "Walk-in Notfallpraxis", slug: "notfallpraxis-walk-in" },
  { label: "Eisenzentrum Zürich", slug: "eiseninfusion-labor" },
];

export const FOOTER_PARTNERS = [
  { label: "Jerumed Shop", link: "https://jerumed.com" },
  { label: "Praxen Jerumed", link: "https://praxen-jerumed.ch/en" },
  { label: "Ästhetische Medizin", link: "https://www.med-esthec.ch" },
  { label: "Hausarztpraxis am Seefeld", link: "https://praxis-seefeld.ch/" },
  { label: "Hausarztpraxis Winterthur", link: "https://hausarztpraxis-winterthur.ch/" },
  { label: "Hausarztpraxis Duebendorf", link: "https://hausarztpraxis-duebendorf.ch/" },
  { label: "Spitex Jerumed", link: "https://spitex-jerumed.ch" },
  { label: "Jerumed Nexus", link: "https://jerumed-nexus.ch" },
  { label: "Praxis Felsnau", link: "https://praxis-felsenau.ch/" },
  { label: "Labor Team Wyss", link: "https://www.laborteam.ch" },
];

export const NAV_LINKS = [
  { label: "Startseite", id: "hero" },
  { label: "Leistungen", id: "services" },
  { label: "Über uns", id: "about" },
  { label: "Team", id: "team" },
  { label: "Kontakt", id: "contact" },
];

export const FEATURES = [
  { label: "Präzise Diagnostik", sub: "Modernste Technik", iconKey: "diagnostik", desc: "Mittels modernem Röntgen, EKG und Spirometrie sichern wir eine schnelle und fundierte Befunderhebung direkt vor Ort." },
  { label: "Eigenes Labor", sub: "Schnelle Befunde", iconKey: "labor", desc: "Umfassende Blut- und Urinwerte werten wir direkt in der Praxis aus – für verlässliche Ergebnisse in wenigen Minuten." },
  { label: "Hauseigene Apotheke", sub: "Direkt vor Ort", iconKey: "apotheke", desc: "Beziehen Sie Ihre verordneten Medikamente direkt bei uns oder bestellen Sie diese bequem via Telefon und E-Mail vor." },
  { label: "Ganzheitliche Prävention", sub: "Vorsorge & Beratung", iconKey: "praevention", desc: "Mit maßgeschneiderten Vorsorgeuntersuchungen und persönlicher Beratung schützen wir proaktiv Ihre Gesundheit und Ihr Wohlbefinden." },
];
export const NATURMEDIZIN = [
  { title: "Vitamin-C-Hochdosis IV", desc: "Stärkt das Immunsystem, wirkt antioxidativ und unterstützt bei Infektanfälligkeit und chronischer Erschöpfung.", price: "ab CHF 250" },
  { title: "NAD+ Infusion", desc: "Das «Anti-Aging-Molekül» fördert die zelluläre Energieproduktion und ist hocheffektiv bei chronischer Müdigkeit.", price: "ab CHF 450" },
  { title: "Glutathion-Infusion", desc: "Das stärkste körpereigene Antioxidans zur Entgiftung und zum Schutz vor oxidativem Stress.", price: "ab CHF 280" },
  { title: "Eisen-Infusion", desc: "Schnelle Behandlung von Eisenmangel — eine der häufigsten Ursachen für ständige Müdigkeit und Erschöpfung.", price: "ab CHF 200" },
  { title: "Aminosäuren-Infusion", desc: "Bausteine für Muskelaufbau, Neurotransmitter-Balance und mentale Klarheit bei Erschöpfungszuständen.", price: "ab CHF 300" },
  { title: "Vitamin-Shots (B12, D3)", desc: "Schnelle intramuskuläre Versorgung mit Vitamin B12, D3 oder B-Komplex gegen Müdigkeit und Antriebslosigkeit.", price: "ab CHF 50" },
  { title: "Ozon-Eigenbluttherapie", desc: "Verbessert die Sauerstoffversorgung der Zellen, wirkt durchblutungsfördernd und aktiviert das Immunsystem.", price: "ab CHF 180" },
  { title: "PRP-Eigenbluttherapie", desc: "Plättchenreiches Plasma zur natürlichen Geweberegeneration bei Gelenk- und Hautproblemen.", price: "ab CHF 350" },
  { title: "Peptidtherapie", desc: "Spezifische Aminosäureketten zur Unterstützung von Heilungsprozessen und Anti-Aging.", price: "ab CHF 300" },
  { title: "Rotlichttherapie", desc: "Fördert die Durchblutung und unterstützt die zelluläre Energieproduktion in den Mitochondrien.", price: "ab CHF 80" },
  { title: "PEMF-Therapie", desc: "Pulsierende Magnetfeldtherapie zur Verbesserung der Mikrozirkulation und Zellregeneration.", price: "ab CHF 100" },
  { title: "Mikronährstofftherapie", desc: "Gezielte, laborbasierte Supplementierung zum Ausgleich von Defiziten und Stoffwechseloptimierung.", price: "ab CHF 150" },
  { title: "Stressmedizin & Burnout", desc: "Ganzheitliche Konzepte zur Cortisol-Regulation, Resilienz-Stärkung und Behandlung von Erschöpfung.", price: "ab CHF 200" },
  { title: "Long-Covid-Therapie", desc: "Spezialprogramm bei Post-Covid-Fatigue, Atembeschwerden und anhaltender Erschöpfung.", price: "ab CHF 300" },
  { title: "Hormonoptimierung", desc: "Diagnostik und Ausgleich hormoneller Dysbalancen mit bioidentischen Hormonen.", price: "ab CHF 350" },
];
