import { SERVICES, SITE } from '@/data/siteData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CalendarIcon, PhoneIcon, ArrowRightIcon } from '@/components/Icons';

/* ── Static Params (pre-render all service pages at build time) ── */
export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/* ── Dynamic Metadata per Service ── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} – Hausarztpraxis Zürich Altstetten`,
    description: service.metaDesc || `${service.full.slice(0, 155)}…`,
    alternates: {
      canonical: `https://praxis-altstetten.ch/leistungen/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Hausarztpraxis Zürich Altstetten`,
      description: service.metaDesc || service.short,
      url: `https://praxis-altstetten.ch/leistungen/${slug}`,
      images: [{ url: service.img, width: 800, height: 600, alt: service.title }],
      type: 'article',
      locale: 'de_CH',
    },
  };
}

/* ── Page Component (Server Component) ── */
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  /* Split description into lead sentence + details */
  const sentences = service.full.split(/(?<=\.)\s+/);
  const leadText = sentences.slice(0, 1).join(' ');
  const details = sentences.slice(1);

  /* JSON-LD Structured Data for this service */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `https://praxis-altstetten.ch/leistungen/${slug}#procedure`,
    name: service.title,
    description: service.full,
    url: `https://praxis-altstetten.ch/leistungen/${slug}`,
    image: `https://praxis-altstetten.ch${service.img}`,
    procedureType: 'http://schema.org/NoninvasiveProcedure',
    howPerformed: service.full,
    provider: {
      '@type': ['MedicalClinic', 'MedicalBusiness'],
      '@id': 'https://praxis-altstetten.ch/#clinic',
      name: 'Hausarztpraxis Zürich Altstetten',
      url: 'https://praxis-altstetten.ch',
    },
    availableService: {
      '@type': 'MedicalTherapy',
      name: service.title,
      description: service.short,
    },
  };

  /* BreadcrumbList Schema for service detail */
  const breadcrumbJsonLd = {
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
        name: service.title,
        item: `https://praxis-altstetten.ch/leistungen/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="legalPage">
        <style>{`
          .servicePageHero { background: linear-gradient(135deg, var(--navy), var(--navy-dark)); padding: clamp(36px, 6vw, 48px) clamp(16px, 4vw, 24px) clamp(32px, 5vw, 44px); text-align: center; position: relative; overflow: hidden; }
          .servicePageHero::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,.03) 1px, transparent 1px); background-size: 24px 24px; }
          .servicePageHero h1 { font-family: var(--f-head); font-size: clamp(26px, 4vw, 42px); font-weight: 700; color: white; margin-bottom: 8px; position: relative; word-break: break-word; }
          .servicePageHero p { color: rgba(255,255,255,.7); font-size: clamp(14px, 2vw, 15px); position: relative; max-width: 600px; margin: 0 auto; }
          .servicePageBack { display: inline-flex; align-items: center; gap: 6px; color: var(--teal-light); font-size: 14px; font-weight: 600; text-decoration: none; margin-bottom: 20px; transition: opacity .2s; position: relative; }
          .servicePageBack:hover { opacity: .7; }
          .servicePageBody { max-width: 800px; margin: 0 auto; padding: clamp(32px, 6vw, 48px) clamp(16px, 4vw, 24px) 80px; }
          .servicePageImgWrap { border-radius: 16px; overflow: hidden; margin-bottom: 32px; box-shadow: 0 8px 30px rgba(0,0,0,.08); }
          .servicePageImgWrap img { width: 100%; height: clamp(200px, 48vw, 360px); object-fit: cover; display: block; }
          .servicePageLead { font-size: clamp(16px, 2.5vw, 18px); line-height: 1.85; color: var(--text); font-weight: 500; margin-bottom: 24px; }
          .servicePageDetails { background: var(--cream); border-radius: 14px; padding: clamp(20px, 4vw, 28px); margin-bottom: 32px; border: 1px solid var(--border); }
          .servicePageDetails h3 { font-family: var(--f-head); font-size: clamp(18px, 2.8vw, 20px); font-weight: 700; color: var(--navy); margin-bottom: 16px; }
          .servicePageDetailItem { display: flex; gap: 12px; margin-bottom: 14px; font-size: 15px; line-height: 1.75; color: var(--text-light); }
          .servicePageDetailItem:last-child { margin-bottom: 0; }
          .servicePageDetailIcon { color: var(--teal-dark); font-weight: 700; flex-shrink: 0; margin-top: 2px; }
          .servicePageCta { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 32px; }
          .servicePageOther { margin-top: 48px; }
          .servicePageOther h3 { font-family: var(--f-head); font-size: clamp(20px, 3vw, 22px); font-weight: 700; color: var(--navy); margin-bottom: 20px; }
          .servicePageOtherGrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
          .servicePageOtherCard { background: white; border-radius: 12px; padding: 20px; border: 1px solid var(--border); transition: all .3s; text-decoration: none; color: var(--navy); }
          .servicePageOtherCard:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,.08); border-color: var(--teal-light); }
          .servicePageOtherCard h4 { font-family: var(--f-head); font-size: 16px; font-weight: 700; margin-bottom: 6px; }
          .servicePageOtherCard p { font-size: 13px; color: var(--text-light); line-height: 1.6; }
          @media (max-width: 600px) {
            .servicePageCta .btn { width: 100%; justify-content: center; }
            .servicePageOtherGrid { grid-template-columns: 1fr; }
          }
        `}</style>

        {/* Hero */}
        <div className="servicePageHero">
          <a href="/" className="servicePageBack">← Zurück zur Startseite</a>
          <h1>{service.title}</h1>
          <p>{service.short}</p>
        </div>

        {/* Body */}
        <div className="servicePageBody">
          {/* Service Image */}
          <div className="servicePageImgWrap">
            <Image
              src={service.img}
              alt={service.title}
              width={800}
              height={360}
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: 'cover', width: '100%', height: 'clamp(200px, 48vw, 360px)' }}
            />
          </div>

          {/* Lead paragraph */}
          <p className="servicePageLead">{leadText}</p>

          {/* Details */}
          {details.length > 0 && (
            <div className="servicePageDetails">
              <h3>Details &amp; Ablauf</h3>
              {details.map((sentence, idx) => (
                <div key={idx} className="servicePageDetailItem">
                  <span className="servicePageDetailIcon">✓</span>
                  <span>{sentence}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="servicePageCta">
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: 15, padding: '14px 32px' }}>
              <CalendarIcon /> Termin vereinbaren
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="btn btnOutline" style={{ fontSize: 15, padding: '14px 32px' }}>
              <PhoneIcon /> {SITE.phone}
            </a>
          </div>

          {/* Other services */}
          <div className="servicePageOther">
            <h3>Weitere Leistungen</h3>
            <div className="servicePageOtherGrid">
              {SERVICES.filter((s) => s.slug !== slug).slice(0, 4).map((s) => (
                <a key={s.slug} href={`/leistungen/${s.slug}`} className="servicePageOtherCard">
                  <h4>{s.title}</h4>
                  <p>{s.short}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
