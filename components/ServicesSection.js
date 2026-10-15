// Server Component
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/data/siteData';
import { ArrowRightIcon } from '@/components/Icons';
import SectionTitle from '@/components/SectionTitle';

export default function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="servicesInner">
        <SectionTitle sub="Was wir bieten" title="Unsere Leistungen" />
        <div style={{ maxWidth: 800, margin: '0 auto 40px', textAlign: 'center', color: 'var(--text-light)', lineHeight: 1.6, fontSize: '1.1rem' }}>
          In unserer Praxis in Zürich Altstetten bieten wir ein breites Spektrum an medizinischen Leistungen. 
          Von präventiven <Link href="/leistungen/vorsorge-checkup" style={{ color: 'var(--teal-text)', fontWeight: 600, textDecoration: 'underline' }}>Vorsorge-Checkups</Link> über 
          schnelle Analysen im eigenen <Link href="/leistungen/labor" style={{ color: 'var(--teal-text)', fontWeight: 600, textDecoration: 'underline' }}>Labor</Link> bis hin 
          zur gezielten Behandlung von <Link href="/leistungen/mineralmangel" style={{ color: 'var(--teal-text)', fontWeight: 600, textDecoration: 'underline' }}>Mineralmangel</Link> – 
          wir sind Ihr kompetenter Ansprechpartner für Ihre Gesundheit.
        </div>
      </div>
      <div className="servicesMarqueeContainer">
        <div className="servicesMarqueeTrack">
          {[...SERVICES, ...SERVICES].map((s, i) => {
            return (
              <Link key={i} href={`/leistungen/${s.slug}`} className="serviceCard marqueeCard" aria-label={`Mehr über ${s.title} erfahren`}>
                <div className="serviceImgWrap">
                  <Image
                    className="serviceImg"
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  <div className="serviceImgOverlay" />
                </div>
                <div className="serviceBody">
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <div className="serviceMore"><span>Mehr erfahren</span><span className="serviceArrow"><ArrowRightIcon /></span></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
