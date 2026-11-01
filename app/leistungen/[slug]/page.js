import { SERVICES, SITE } from '@/data/siteData';
import { SERVICES_DETAILED } from '@/data/servicesDetailedData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@/components/Icons';

/* ── Static Params (pre-render all service pages at build time) ── */
export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/* ── Dynamic Metadata per Service ── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const detailed = SERVICES_DETAILED[slug];
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service && !detailed) return {};

  const title = detailed?.metaTitle || `${service.title} – Hausarztpraxis Zürich Altstetten`;
  const description = detailed?.metaDesc || service?.metaDesc || service?.short;
  const ogImg = detailed?.images?.[0]?.src || service?.img || '/images/og-image.webp';

  return {
    title,
    description,
    alternates: {
      canonical: `https://praxis-altstetten.ch/leistungen/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://praxis-altstetten.ch/leistungen/${slug}`,
      images: [{ url: ogImg, width: 800, height: 600, alt: detailed?.h1 || service?.title }],
      type: 'article',
      locale: 'de_CH',
    },
  };
}

/* ── Page Component (Server Component) ── */
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const detailed = SERVICES_DETAILED[slug];
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service && !detailed) notFound();

  const title = detailed?.title || service.title;
  const h1 = detailed?.h1 || `${title} in Zürich Altstetten`;
  const intro = detailed?.intro || service.full;
  const primaryImg = detailed?.images?.[0]?.src || service.img;
  const primaryImgAlt = detailed?.images?.[0]?.alt || `${title} in der Hausarztpraxis Zürich Altstetten`;
  const secondaryImg = detailed?.images?.[1]?.src || '/images/praxis/1x.webp';
  const secondaryImgAlt = detailed?.images?.[1]?.alt || 'Hausarztpraxis Zürich Altstetten an der Badenerstrasse 621';
  const tertiaryImg = detailed?.images?.[2]?.src || '/images/praxis/3x.webp';
  const tertiaryImgAlt = detailed?.images?.[2]?.alt || 'Moderner Behandlungsraum der Hausarztpraxis Altstetten';

  /* JSON-LD MedicalProcedure Schema */
  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `https://praxis-altstetten.ch/leistungen/${slug}#procedure`,
    name: title,
    description: intro,
    url: `https://praxis-altstetten.ch/leistungen/${slug}`,
    image: `https://praxis-altstetten.ch${primaryImg}`,
    procedureType: 'http://schema.org/NoninvasiveProcedure',
    howPerformed: detailed?.procedureParagraphs?.join(' ') || service.full,
    provider: {
      '@type': ['MedicalClinic', 'MedicalBusiness'],
      '@id': 'https://praxis-altstetten.ch/#clinic',
      name: 'Hausarztpraxis Zürich Altstetten',
      url: 'https://praxis-altstetten.ch',
      telephone: '+41 44 244 09 99',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Badenerstrasse 621',
        addressLocality: 'Zürich',
        postalCode: '8048',
        addressCountry: 'CH',
      },
    },
  };

  /* BreadcrumbList Schema */
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `https://praxis-altstetten.ch/leistungen/${slug}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: 'https://praxis-altstetten.ch',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Leistungen',
        item: 'https://praxis-altstetten.ch/#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `https://praxis-altstetten.ch/leistungen/${slug}`,
      },
    ],
  };

  /* FAQPage Schema */
  const faqSchema = detailed?.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: detailed.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      }
    : null;

  /* Related services for internal linking */
  const relatedSlugs = detailed?.relatedSlugs || [];
  const relatedServices = SERVICES.filter(
    (s) => s.slug !== slug && (relatedSlugs.includes(s.slug) || relatedSlugs.length === 0)
  ).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main role="main" className="serviceDetailMain">
        <style>{`
          .serviceDetailMain {
            font-family: var(--f-body);
            color: var(--text);
            background: var(--warm-white);
            min-height: 100vh;
          }
          .serviceHero {
            background: linear-gradient(135deg, var(--navy), var(--navy-dark));
            padding: clamp(48px, 6vw, 72px) 24px clamp(60px, 8vw, 90px);
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
          }
          .serviceHero::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px);
            background-size: 28px 28px;
            pointer-events: none;
          }
          .serviceBack {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--teal-light);
            font-size: 14.5px;
            font-weight: 600;
            text-decoration: none;
            margin-bottom: 20px;
            position: relative;
            z-index: 2;
            transition: opacity .2s;
          }
          .serviceBack:hover {
            opacity: .8;
          }
          .serviceHero h1 {
            font-family: var(--f-head);
            font-size: clamp(28px, 4.5vw, 44px);
            font-weight: 700;
            margin-bottom: 16px;
            position: relative;
            z-index: 2;
            line-height: 1.25;
            color: white;
          }
          .serviceHero p {
            color: rgba(255,255,255,.9);
            font-size: clamp(16px, 2.2vw, 18px);
            max-width: 780px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
            line-height: 1.65;
          }

          .serviceContainer {
            max-width: 900px;
            margin: -40px auto 80px;
            padding: clamp(28px, 5vw, 52px);
            background: white;
            border-radius: 16px;
            box-shadow: 0 12px 48px rgba(0,0,0,0.06);
            border: 1px solid var(--border);
            position: relative;
            z-index: 3;
          }

          .serviceImageWrap {
            border-radius: 14px;
            overflow: hidden;
            margin-bottom: 36px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.08);
            border: 1px solid var(--border);
          }
          .serviceImageWrap img {
            width: 100%;
            height: clamp(220px, 45vw, 400px);
            object-fit: cover;
            display: block;
          }

          .serviceSection {
            margin-bottom: 44px;
          }
          .serviceSection h2 {
            font-family: var(--f-head);
            font-size: clamp(22px, 3.5vw, 27px);
            color: var(--navy);
            margin-bottom: 16px;
            font-weight: 700;
            line-height: 1.3;
          }
          .serviceSection p {
            font-size: 16px;
            line-height: 1.85;
            color: var(--text-light);
            margin-bottom: 16px;
          }
          .serviceSection ul {
            margin: 16px 0 24px;
            padding-left: 22px;
          }
          .serviceSection li {
            font-size: 15.5px;
            line-height: 1.8;
            color: var(--text-light);
            margin-bottom: 10px;
            list-style-type: disc;
          }

          .visualCard {
            display: flex;
            flex-direction: column;
            gap: 20px;
            background: var(--teal-mint);
            border: 1px solid var(--teal-pale);
            border-radius: 14px;
            padding: 24px;
            margin: 36px 0;
          }
          @media (min-width: 640px) {
            .visualCard {
              flex-direction: row;
              align-items: center;
            }
          }
          .visualCardImg {
            width: 100%;
            max-width: 240px;
            height: 160px;
            border-radius: 10px;
            overflow: hidden;
            flex-shrink: 0;
            box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          }
          .visualCardImg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .visualCardText h3 {
            font-family: var(--f-head);
            font-size: 20px;
            color: var(--navy);
            margin-bottom: 8px;
            font-weight: 700;
          }
          .visualCardText p {
            font-size: 14.5px;
            color: var(--text-light);
            line-height: 1.65;
            margin: 0;
          }

          .faqSection {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: clamp(24px, 4vw, 36px);
            margin: 44px 0;
          }
          .faqSection h2 {
            font-family: var(--f-head);
            font-size: clamp(22px, 3.5vw, 26px);
            color: var(--navy);
            margin-bottom: 24px;
            font-weight: 700;
          }
          .faqItem {
            margin-bottom: 20px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 20px;
          }
          .faqItem:last-child {
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
          }
          .faqQuestion {
            font-family: var(--f-head);
            font-size: 17.5px;
            color: var(--navy);
            font-weight: 700;
            margin-bottom: 8px;
            line-height: 1.4;
          }
          .faqAnswer {
            font-size: 15px;
            line-height: 1.75;
            color: var(--text-light);
          }

          .finalContactBox {
            background: linear-gradient(135deg, var(--teal-mint), #ffffff);
            border: 2px solid var(--teal-light);
            border-radius: 16px;
            padding: clamp(28px, 5vw, 40px);
            margin: 48px 0 36px;
            text-align: center;
            box-shadow: 0 8px 30px rgba(71,191,196,0.12);
          }
          .finalContactBox h3 {
            font-family: var(--f-head);
            font-size: clamp(22px, 3.5vw, 26px);
            color: var(--navy);
            margin-bottom: 12px;
            font-weight: 700;
          }
          .finalContactBox p {
            font-size: 15.5px;
            color: var(--text-light);
            max-width: 620px;
            margin: 0 auto 24px;
            line-height: 1.65;
          }
          .finalMetaGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 16px;
            text-align: left;
            margin-bottom: 28px;
            background: white;
            border-radius: 12px;
            padding: 20px;
            border: 1px solid var(--border);
          }
          .finalMetaItem {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            font-size: 14px;
            color: var(--text);
            line-height: 1.5;
          }
          .finalMetaItem strong {
            color: var(--navy);
            display: block;
          }
          .finalCtaBtns {
            display: flex;
            gap: 14px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .otherServicesSection {
            margin-top: 52px;
            padding-top: 36px;
            border-top: 1px solid var(--border);
          }
          .otherServicesSection h3 {
            font-family: var(--f-head);
            font-size: clamp(20px, 3vw, 23px);
            color: var(--navy);
            margin-bottom: 20px;
            font-weight: 700;
          }
          .otherServicesGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
          }
          .otherServiceCard {
            background: #f8fafc;
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 18px;
            text-decoration: none;
            color: var(--navy);
            transition: all .25s ease;
          }
          .otherServiceCard:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(0,0,0,0.08);
            border-color: var(--teal-light);
            background: white;
          }
          .otherServiceCard h4 {
            font-family: var(--f-head);
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 6px;
            color: var(--navy);
          }
          .otherServiceCard p {
            font-size: 13px;
            color: var(--text-light);
            line-height: 1.55;
            margin: 0;
          }
        `}</style>

        {/* ── Hero ── */}
        <div className="serviceHero">
          <Link href="/#services" className="serviceBack">
            ← Zurück zu allen Leistungen
          </Link>
          <h1>{h1}</h1>
          <p>{intro}</p>
        </div>

        {/* ── Main Container ── */}
        <div className="serviceContainer">
          {/* Main Visual */}
          <div className="serviceImageWrap">
            <Image
              src={primaryImg}
              alt={primaryImgAlt}
              width={900}
              height={400}
              priority
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>

          {/* Section 1: Wann ist die Untersuchung nötig? */}
          <section className="serviceSection">
            <h2>{detailed?.whenNeededTitle || `Wann ist eine ${title} nötig?`}</h2>
            {detailed?.whenNeededParagraphs?.map((p, i) => (
              <p key={i}>{p}</p>
            )) || <p>{service.short}</p>}

            {detailed?.whenNeededPoints?.length > 0 && (
              <ul>
                {detailed.whenNeededPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </section>

          {/* Section 2: Wie läuft die Untersuchung ab? */}
          <section className="serviceSection">
            <h2>{detailed?.procedureTitle || 'Wie läuft die Untersuchung ab?'}</h2>
            {detailed?.procedureParagraphs?.map((p, i) => (
              <p key={i}>{p}</p>
            )) || <p>{service.full}</p>}
          </section>

          {/* Visual Highlight / Diagnostics Card */}
          <div className="visualCard">
            <div className="visualCardImg">
              <Image
                src={secondaryImg}
                alt={secondaryImgAlt}
                width={240}
                height={160}
                loading="lazy"
              />
            </div>
            <div className="visualCardText">
              <h3>Moderne Diagnostik an der Badenerstrasse 621</h3>
              <p>
                In unserer Praxis in Zürich Altstetten verfügen wir über moderne medizintechnische
                Geräte und ein praxiseigenes Labor für unmittelbare Resultate. Schnelle Termine,
                keine langen Wartezeiten.
              </p>
            </div>
          </div>

          {/* Section 3: Geräte & Praxisausstattung */}
          <section className="serviceSection">
            <h2>{detailed?.equipmentTitle || `${title} direkt in der Praxis`}</h2>
            {detailed?.equipmentParagraphs?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {/* Section 4: Kosten und Krankenkasse */}
          <section className="serviceSection">
            <h2>{detailed?.costsTitle || 'Kosten und Krankenkasse'}</h2>
            {detailed?.costsParagraphs?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {/* Section 5: Häufige Fragen (FAQ) mit FAQPage-Schema */}
          {detailed?.faqs?.length > 0 && (
            <div className="faqSection">
              <h2>Häufige Fragen zu {title} (FAQ)</h2>
              {detailed.faqs.map((faq, i) => (
                <div key={i} className="faqItem">
                  <div className="faqQuestion">{faq.q}</div>
                  <div className="faqAnswer">{faq.a}</div>
                </div>
              ))}
            </div>
          )}

          {/* Final Encadré / Contact Box (wie im Referenzstandard vorgeschrieben) */}
          <div className="finalContactBox">
            <h3>Termin für {title} in Zürich Altstetten vereinbaren</h3>
            <p>
              Wir nehmen neue Patientinnen und Patienten jederzeit gerne auf. Vereinbaren Sie Ihren
              Termin unkompliziert online oder kontaktieren Sie unser Praxisteam telefonisch.
            </p>

            <div className="finalMetaGrid">
              <div className="finalMetaItem">
                <span style={{ fontSize: 20 }}>📍</span>
                <div>
                  <strong>Standort:</strong>
                  Hausarztpraxis Zürich Altstetten<br />
                  {SITE.address}
                </div>
              </div>
              <div className="finalMetaItem">
                <span style={{ fontSize: 20 }}>📞</span>
                <div>
                  <strong>Telefonische Beratung:</strong>
                  <a href={`tel:${SITE.phoneTel}`} style={{ color: 'var(--teal-dark)', fontWeight: 600 }}>
                    {SITE.phone}
                  </a>
                </div>
              </div>
              <div className="finalMetaItem">
                <span style={{ fontSize: 20 }}>🕒</span>
                <div>
                  <strong>Öffnungszeiten:</strong>
                  {SITE.hours}
                </div>
              </div>
            </div>

            <div className="finalCtaBtns">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btnPrimary"
                style={{ padding: '14px 30px', fontSize: 15 }}
              >
                <CalendarIcon /> Online Termin buchen
              </a>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="btn btnOutline"
                style={{ padding: '14px 28px', fontSize: 15 }}
              >
                <PhoneIcon /> Praxis anrufen: {SITE.phone}
              </a>
            </div>
          </div>

          {/* Additional Praxisfoto for visual richness */}
          <div style={{ margin: '32px 0', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
            <Image
              src={tertiaryImg}
              alt={tertiaryImgAlt}
              width={900}
              height={320}
              loading="lazy"
              style={{ width: '100%', height: 'auto', maxHeight: 300, objectFit: 'cover', display: 'block' }}
            />
            <div style={{ padding: '8px 16px', background: '#f8fafc', fontSize: '13px', color: 'var(--text-light)', textAlign: 'center', fontStyle: 'italic' }}>
              Praxisräumlichkeiten der Hausarztpraxis Zürich Altstetten – Moderne Grundversorgung nahe Bahnhof Altstetten.
            </div>
          </div>

          {/* Internal links to other service pages */}
          {relatedServices.length > 0 && (
            <div className="otherServicesSection">
              <h3>Weitere medizinische Leistungen in Zürich Altstetten</h3>
              <div className="otherServicesGrid">
                {relatedServices.map((s) => (
                  <Link key={s.slug} href={`/leistungen/${s.slug}`} className="otherServiceCard">
                    <h4>{s.title}</h4>
                    <p>{s.short}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
