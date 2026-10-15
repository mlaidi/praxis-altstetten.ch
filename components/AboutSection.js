// Server Component
import { SITE } from '@/data/siteData';
import FadeIn from '@/components/FadeIn';
import PhotoSlider from '@/components/PhotoSlider';
import AboutClient from '@/components/AboutClient';

export default function AboutSection() {
  return (
    <>
      <section id="about" className="about">
        <div className="aboutInner">
          <div className="aboutGrid">
            <FadeIn className="aboutText">
              <p style={{ fontFamily: 'var(--f-head)', fontSize: 'clamp(14px, 2vw, 18px)', letterSpacing: 'clamp(1.5px, 0.4vw, 3px)', textTransform: 'uppercase', color: '#5a6168', marginBottom: 12, fontWeight: 600 }}>Über unsere Praxis</p>
              <h2 style={{ fontFamily: 'var(--f-head)', fontSize: 'clamp(23px, 3.6vw, 38px)', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.25, marginBottom: 24 }}>Allgemeinmedizin & Notfallpraxis an der Badenerstrasse (Nähe Bahnhof) – Ihr Arzt in 8048 Zürich</h2>
              <p>Ihre Gesundheit ist unser Fokus. Wir bieten Ihnen eine moderne, patientennahe und hochqualitative medizinische Versorgung in Zürich.</p>
              <p style={{ fontWeight: 600, marginTop: 24, marginBottom: 16 }}>Was uns auszeichnet:</p>
              <ul className="aboutList">
                <li className="aboutListItem">
                  <span className="aboutListIcon">✓</span>
                  <span className="aboutListText"><strong>Neue Patienten willkommen:</strong> Wir nehmen jederzeit neue Patienten auf. Konsultationen sind unter anderem auf Deutsch, Englisch und durch einen <strong>arabisch sprechenden Hausarzt</strong> möglich.</span>
                </li>
                <li className="aboutListItem">
                  <span className="aboutListIcon">✓</span>
                  <span className="aboutListText"><strong>Umfassende Betreuung:</strong> Vorsorge, präzise Diagnostik und massgeschneiderte Therapien aus einer Hand.</span>
                </li>
                <li className="aboutListItem">
                  <span className="aboutListIcon">✓</span>
                  <span className="aboutListText"><strong>Breites Spektrum:</strong> Von der schnellen Notfallbehandlung bis hin zu kleinchirurgischen Eingriffen.</span>
                </li>
                <li className="aboutListItem">
                  <span className="aboutListIcon">✓</span>
                  <span className="aboutListText"><strong>Starkes Netzwerk:</strong> Enge Zusammenarbeit mit Zürcher Fachärzten und Spitälern.</span>
                </li>
                <li className="aboutListItem">
                  <span className="aboutListIcon">✓</span>
                  <span className="aboutListText"><strong>Höchste Qualität:</strong> Zertifizierte Behandlungen nach den strengen Qualitätsstandards der FMH.</span>
                </li>
              </ul>
              <p style={{ marginBottom: 32 }}>Unser erfahrenes Team legt grössten Wert auf eine persönliche Beziehung, die auf Vertrauen und Prävention aufbaut.</p>
              <AboutClient />
            </FadeIn>
            <FadeIn delay={0.2} className="aboutVisual">
              <PhotoSlider photos={SITE.praxisPhotos} />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
