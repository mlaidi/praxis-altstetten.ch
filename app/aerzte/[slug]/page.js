import { notFound } from 'next/navigation';
import { TEAM, SITE } from '@/data/siteData';
import { DOCTORS_DETAILED } from '@/data/doctorsDetailedData';
import Image from 'next/image';
import Link from 'next/link';
import {
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
} from '@/components/Icons';

export async function generateStaticParams() {
  return TEAM.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const detailed = DOCTORS_DETAILED[slug];
  const member = TEAM.find((m) => m.slug === slug);
  if (!detailed && !member) return {};

  const name = detailed?.name || member?.name;
  const title = detailed?.metaTitle || `${name} – Hausarztpraxis Zürich Altstetten`;
  const description = detailed?.metaDesc || detailed?.lead || member?.bio;
  const photo = detailed?.photo || member?.photo || '/images/og-image.webp';

  return {
    title,
    description,
    alternates: {
      canonical: `https://praxis-altstetten.ch/aerzte/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://praxis-altstetten.ch/aerzte/${slug}`,
      images: [{ url: photo, width: 800, height: 800, alt: name }],
      type: 'profile',
      locale: 'de_CH',
    },
  };
}

export default async function DoctorPage({ params }) {
  const { slug } = await params;
  const detailed = DOCTORS_DETAILED[slug];
  const member = TEAM.find((m) => m.slug === slug);

  if (!detailed && !member) {
    notFound();
  }

  const name = detailed?.name || member?.name;
  const role = detailed?.role || member?.role;
  const roleDetail = detailed?.roleDetail || member?.roleDetail;
  const photo = detailed?.photo || member?.photo;
  const initials = detailed?.initials || member?.initials || 'MZ';
  const lead = detailed?.lead || member?.bio;
  const experience = detailed?.experience || 'Erfahrener Mediziner';
  const languages = detailed?.languages || member?.languages || 'Deutsch';
  const sections = detailed?.sections || [];
  const faqs = detailed?.faqs || [];

  // Physician Schema
  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `https://praxis-altstetten.ch/aerzte/${slug}#physician`,
    name: name,
    jobTitle: role,
    description: lead,
    image: photo ? `https://praxis-altstetten.ch${photo}` : undefined,
    url: `https://praxis-altstetten.ch/aerzte/${slug}`,
    medicalSpecialty: [
      'GeneralPractice',
      'InternalMedicine',
      'PreventiveMedicine',
    ],
    worksFor: {
      '@type': ['MedicalClinic', 'MedicalBusiness'],
      '@id': 'https://praxis-altstetten.ch/#clinic',
      name: 'Hausarztpraxis Zürich Altstetten',
      url: 'https://praxis-altstetten.ch',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Badenerstrasse 621',
      addressLocality: 'Zürich',
      postalCode: '8048',
      addressCountry: 'CH',
    },
    telephone: '+41 44 244 09 99',
    knowsLanguage: languages.split(',').map((l) => l.trim()),
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `https://praxis-altstetten.ch/aerzte/${slug}#breadcrumb`,
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
        name: 'Ärzteteam',
        item: 'https://praxis-altstetten.ch/#team',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: name,
        item: `https://praxis-altstetten.ch/aerzte/${slug}`,
      },
    ],
  };

  // FAQPage Schema
  const faqSchema = faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      }
    : null;

  // Other doctors for internal linking
  const otherDoctors = TEAM.filter((m) => m.slug !== slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
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

      <main role="main" className="doctorDetailMain">
        <style>{`
          .doctorDetailMain {
            font-family: var(--f-body, system-ui, sans-serif);
            color: var(--text, #1e293b);
            background: #f8fafc;
            min-height: 100vh;
          }
          .doctorHero {
            background: linear-gradient(135deg, #0c2340 0%, #1e3a5f 100%);
            padding: clamp(48px, 6vw, 72px) 24px clamp(60px, 8vw, 90px);
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
          }
          .doctorBack {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: #5eead4;
            font-size: 14.5px;
            font-weight: 600;
            text-decoration: none;
            margin-bottom: 20px;
            transition: opacity .2s;
          }
          .doctorBack:hover { opacity: .8; }
          .doctorHero h1 {
            font-family: var(--f-head, Georgia, serif);
            font-size: clamp(28px, 4vw, 44px);
            font-weight: 700;
            margin: 0 0 12px;
            color: #ffffff;
            line-height: 1.2;
          }
          .doctorRoleBadge {
            display: inline-block;
            background: rgba(94, 234, 212, 0.15);
            color: #5eead4;
            padding: 6px 16px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 600;
            border: 1px solid rgba(94, 234, 212, 0.3);
          }
          .doctorContentWrap {
            max-width: 900px;
            margin: -40px auto 60px;
            padding: 0 20px;
            position: relative;
            z-index: 2;
          }
          .doctorProfileCard {
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px -5px rgba(0,0,0,0.08);
            border: 1px solid #e2e8f0;
            overflow: hidden;
            margin-bottom: 30px;
          }
          .doctorProfileHeader {
            display: flex;
            gap: 28px;
            align-items: center;
            padding: 32px;
            border-bottom: 1px solid #f1f5f9;
          }
          @media (max-width: 640px) {
            .doctorProfileHeader {
              flex-direction: column;
              text-align: center;
            }
          }
          .doctorPhotoWrap {
            flex-shrink: 0;
            width: 160px;
            height: 160px;
            border-radius: 50%;
            overflow: hidden;
            border: 4px solid #f8fafc;
            box-shadow: 0 4px 14px rgba(0,0,0,0.1);
            position: relative;
          }
          .doctorPhoto {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
          }
          .doctorAvatar {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0c2340;
            color: #5eead4;
            font-size: 48px;
            font-weight: 700;
          }
          .doctorHeaderMeta { flex: 1; }
          .doctorBadges {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 14px;
          }
          .doctorBadge {
            background: #f1f5f9;
            color: #475569;
            font-size: 12px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 6px;
          }
          .doctorLeadText {
            font-size: 16px;
            line-height: 1.7;
            color: #334155;
            margin: 0;
          }
          .doctorMetaStrip {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            padding: 24px 32px;
            background: #f8fafc;
            border-bottom: 1px solid #f1f5f9;
          }
          .doctorMetaItem strong {
            display: block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #64748b;
            margin-bottom: 4px;
          }
          .doctorMetaItem span {
            font-size: 14.5px;
            font-weight: 600;
            color: #0c2340;
          }
          .doctorSection {
            padding: 28px 32px;
            border-bottom: 1px solid #f1f5f9;
          }
          .doctorSection:last-child { border-bottom: none; }
          .doctorSection h2 {
            font-size: 20px;
            color: #0c2340;
            margin: 0 0 14px;
            font-weight: 700;
          }
          .doctorSection p {
            font-size: 15.5px;
            line-height: 1.75;
            color: #475569;
            margin: 0 0 12px;
          }
          .doctorSection ul {
            margin: 12px 0 0;
            padding-left: 20px;
            color: #475569;
          }
          .doctorSection li {
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 8px;
          }
          .doctorFaqSection {
            margin-top: 30px;
            background: white;
            border-radius: 16px;
            padding: 32px;
            border: 1px solid #e2e8f0;
          }
          .doctorFaqSection h2 {
            font-size: 20px;
            color: #0c2340;
            margin: 0 0 20px;
          }
          .doctorFaqItem {
            border-bottom: 1px solid #f1f5f9;
            padding: 16px 0;
          }
          .doctorFaqItem:last-child { border-bottom: none; }
          .doctorFaqQ {
            font-weight: 700;
            color: #0c2340;
            font-size: 15.5px;
            margin-bottom: 8px;
          }
          .doctorFaqA {
            font-size: 15px;
            line-height: 1.7;
            color: #475569;
          }
          .doctorCtaBox {
            margin-top: 30px;
            background: linear-gradient(135deg, #0c2340, #1e3a5f);
            color: white;
            border-radius: 16px;
            padding: 36px 32px;
            text-align: center;
          }
          .doctorCtaBox h3 {
            font-size: 22px;
            margin: 0 0 10px;
            color: white;
          }
          .doctorCtaBox p {
            font-size: 15px;
            color: #94a3b8;
            max-width: 600px;
            margin: 0 auto 24px;
            line-height: 1.6;
          }
          .doctorCtaBtns {
            display: flex;
            gap: 14px;
            justify-content: center;
            flex-wrap: wrap;
          }
          .btnDoctorPrimary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #0d9488;
            color: white;
            padding: 12px 26px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: background .2s;
          }
          .btnDoctorPrimary:hover { background: #0f766e; }
          .btnDoctorOutline {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255,255,255,0.1);
            color: white;
            padding: 12px 26px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            border: 1px solid rgba(255,255,255,0.2);
            transition: background .2s;
          }
          .btnDoctorOutline:hover { background: rgba(255,255,255,0.2); }
          .colleaguesSection {
            margin-top: 40px;
          }
          .colleaguesSection h3 {
            font-size: 18px;
            color: #0c2340;
            margin: 0 0 16px;
          }
          .colleaguesGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 16px;
          }
          .colleagueCard {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 14px;
            text-decoration: none;
            transition: transform .2s, box-shadow .2s;
          }
          .colleagueCard:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          }
          .colleagueImg {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #e2e8f0;
          }
          .colleagueAvatarSmall {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            background: #0c2340;
            color: #5eead4;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 16px;
          }
          .colleagueInfo h4 {
            font-size: 14px;
            margin: 0 0 2px;
            color: #0c2340;
          }
          .colleagueInfo p {
            font-size: 12px;
            margin: 0 0 4px;
            color: #64748b;
          }
          .colleagueLink {
            font-size: 12px;
            color: #0d9488;
            font-weight: 600;
          }
        `}</style>

        {/* Hero Banner */}
        <section className="doctorHero">
          <Link href="/#team" className="doctorBack">
            ← Zurück zur Teamübersicht
          </Link>
          <h1>{name}</h1>
          <div className="doctorRoleBadge">{roleDetail || role}</div>
        </section>

        {/* Main Content */}
        <div className="doctorContentWrap">
          <div className="doctorProfileCard">
            <div className="doctorProfileHeader">
              <div className="doctorPhotoWrap">
                {photo ? (
                  <Image
                    src={photo}
                    alt={name}
                    width={160}
                    height={160}
                    className="doctorPhoto"
                    priority
                  />
                ) : (
                  <div className="doctorAvatar">{initials}</div>
                )}
              </div>
              <div className="doctorHeaderMeta">
                <div className="doctorBadges">
                  <span className="doctorBadge">{experience}</span>
                  <span className="doctorBadge">Badenerstrasse 621</span>
                  <span className="doctorBadge">Zürich Altstetten (8048)</span>
                </div>
                <p className="doctorLeadText">{lead}</p>
              </div>
            </div>

            {/* Quick Meta Strip */}
            <div className="doctorMetaStrip">
              <div className="doctorMetaItem">
                <strong>Fachbereich &amp; Titel</strong>
                <span>{role}</span>
              </div>
              <div className="doctorMetaItem">
                <strong>Standort</strong>
                <span>Badenerstrasse 621, 8048 Zürich</span>
              </div>
              <div className="doctorMetaItem">
                <strong>Gesprochene Sprachen</strong>
                <span>{languages}</span>
              </div>
              <div className="doctorMetaItem">
                <strong>Patientenaufnahme</strong>
                <span style={{ color: '#0d9488', fontWeight: 600 }}>Neue Patienten willkommen</span>
              </div>
            </div>

            {/* Biography & Specialties */}
            {sections.map((sec, idx) => (
              <section key={idx} className="doctorSection">
                <h2>{sec.title}</h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
                {sec.bulletPoints && (
                  <ul>
                    {sec.bulletPoints.map((pt, ptIdx) => (
                      <li key={ptIdx}>{pt}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* FAQs */}
          {faqs.length > 0 && (
            <div className="doctorFaqSection">
              <h2>Häufige Fragen zu {name} in Zürich Altstetten</h2>
              {faqs.map((faq, fIdx) => (
                <div key={fIdx} className="doctorFaqItem">
                  <div className="doctorFaqQ">{faq.q}</div>
                  <div className="doctorFaqA">{faq.a}</div>
                </div>
              ))}
            </div>
          )}

          {/* Booking CTA Box */}
          <div className="doctorCtaBox">
            <h3>Termin bei {name} buchen</h3>
            <p>
              Vereinbaren Sie Ihren Termin ganz einfach online oder kontaktieren Sie unser Praxisteam telefonisch während unserer Sprechzeiten. Bei Notfällen können Sie auch ohne Voranmeldung in unserer Walk-in Praxis vorbeikommen.
            </p>
            <div className="doctorCtaBtns">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btnDoctorPrimary"
              >
                <CalendarIcon /> Online Termin buchen
              </a>
              <a href={`tel:${SITE.phoneTel}`} className="btnDoctorOutline">
                <PhoneIcon /> Praxis anrufen: {SITE.phone}
              </a>
            </div>
          </div>

          {/* Internal Linking to Colleagues */}
          {otherDoctors.length > 0 && (
            <div className="colleaguesSection">
              <h3>Weitere Ärztinnen &amp; Ärzte unseres Teams</h3>
              <div className="colleaguesGrid">
                {otherDoctors.map((colleague) => (
                  <Link
                    key={colleague.slug}
                    href={`/aerzte/${colleague.slug}`}
                    className="colleagueCard"
                  >
                    {colleague.photo ? (
                      <Image
                        src={colleague.photo}
                        alt={colleague.name}
                        width={54}
                        height={54}
                        className="colleagueImg"
                        loading="lazy"
                      />
                    ) : (
                      <div className="colleagueAvatarSmall">{colleague.initials}</div>
                    )}
                    <div className="colleagueInfo">
                      <h4>{colleague.name}</h4>
                      <p>{colleague.role}</p>
                      <span className="colleagueLink">Profil ansehen →</span>
                    </div>
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

