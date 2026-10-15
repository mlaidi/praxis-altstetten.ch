import { SITE, FEATURES } from '@/data/siteData';
import Image from 'next/image';
import {
  PhoneIcon, MailIcon, MapPinIcon, ClockIcon, CalendarIcon,
  ArrowRightIcon, FacebookIcon, InstagramIcon, GoogleIcon,
} from '@/components/Icons';
import FadeIn from '@/components/FadeIn';
import Stethoscope from 'lucide-react/dist/esm/icons/stethoscope.mjs';
import Microscope from 'lucide-react/dist/esm/icons/microscope.mjs';
import Pill from 'lucide-react/dist/esm/icons/pill.mjs';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check.mjs';

/* ── Client Component Islands ── */
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import NaturmedizinSection from '@/components/NaturmedizinSection';
import TeamSection from '@/components/TeamSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import FooterClient from '@/components/FooterClient';

/* ── Handcrafted Clinical Icons for SEO Hub ── */
function EmergencyWalkInIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--teal-dark)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M8 12h2l1.5-3.5 2 7 1.5-3.5h2" stroke="var(--accent-green)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationTransitIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--teal-dark)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3.2" fill="var(--teal-pale)" stroke="var(--teal-mid)" strokeWidth="2" />
    </svg>
  );
}

function DiagnostikIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--teal-dark)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
    </svg>
  );
}

function MultilingualTeamIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--teal-dark)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M19 8v5M21.5 10.5h-5" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── Section Title ── */
function SectionTitle({ sub, title, light, green }) {
  return (
    <div className="sectionTitle">
      <p className={`sectionSub ${light ? 'sectionSubLight' : ''} ${green ? 'sectionSubGreen' : ''}`}>{sub}</p>
      <h2 className={`sectionH2 ${light ? 'sectionH2Light' : ''} ${green ? 'sectionH2Green' : ''}`}>{title}</h2>
      <div className={`sectionLine ${green ? 'sectionLineGreen' : ''}`} />
    </div>
  );
}


const FEATURE_ICONS = {
  diagnostik: Stethoscope,
  labor: Microscope,
  apotheke: Pill,
  praevention: ShieldCheck,
};

/* ══════════ MAIN PAGE (Server Component) ══════════ */
export default function HomePage() {
  return (
    <>
      {/* ══════════ TOP BAR (Server-rendered) ══════════ */}
      <div className="topBar" role="banner">
        <div className="topBarInner">
          <div className="topBarLeft">
            <span className="topBarItem"><ClockIcon size={16} /> {SITE.hours}</span>
            <span className="topBarItem"><MapPinIcon size={16} /> {SITE.address}</span>
          </div>
          <div className="topBarSocial">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie uns auf Facebook"><FacebookIcon /></a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie uns auf Instagram"><InstagramIcon /></a>
            <a href={SITE.googleReview} target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie uns auf Google"><GoogleIcon /></a>
          </div>
        </div>
      </div>

      {/* ══════════ NAVBAR (Client Island) ══════════ */}
      <Navbar />

      <main role="main">

      {/* ══════════ HERO (Client Island) ══════════ */}
      <HeroSection />

      {/* ══════════ FEATURES (Server-rendered with FadeIn islands) ══════════ */}
      <section className="features">
        <div className="featuresInner">
          <div className="featuresGrid">
            {FEATURES.map((f, i) => {
              const IconComponent = FEATURE_ICONS[f.iconKey];
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="featureCard">
                    <div className="featureEmoji" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', width: 52, height: 52, borderRadius: '50%', background: 'var(--teal-pale)' }}>
                      {IconComponent ? <IconComponent size={24} color="var(--teal-dark)" strokeWidth={2} /> : null}
                    </div>
                    <div className="featureLabel">{f.label}</div>
                    <div className="featureSub">{f.sub}</div>
                    {f.desc && <div className="featureDesc">{f.desc}</div>}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT (Client Island) ══════════ */}
      <AboutSection />

      {/* ══════════ AERZTEZENTRUM & QUARTIERE ALTSTETTEN (SEO HUB) ══════════ */}
      <section id="aerztezentrum" className="seoHub">
        <div className="seoHubInner">
          <SectionTitle sub="Medizinisches Zentrum & Notfallversorgung" title="Ihr Ärztezentrum & Hausarzt in Altstetten – Zentrale Lage & Walk-in Praxis" />
          <p style={{ textAlign: 'center', fontSize: 16, lineHeight: 1.8, color: 'var(--text-light)', maxWidth: 820, margin: '-24px auto 40px' }}>
            Als modernes medizinisches Versorgungszentrum an der Badenerstrasse 621 bieten wir erstklassige Hausarztmedizin, sofortige Notfallhilfe ohne Voranmeldung und spezialisierte Facharzt-Sprechstunden für Patientinnen und Patienten aus ganz Zürich und der Region.
          </p>
          <div className="seoGrid">
            <FadeIn delay={0.05} className="seoFadeWrapper" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="seoCard">
                <div className="seoCardIcon"><EmergencyWalkInIcon /></div>
                <h3>Walk-in Notfallpraxis & Arzt ohne Termin</h3>
                <p>
                  Bei akuten Schmerzen, Infekten oder Verletzungen empfangen wir Sie während der Öffnungszeiten auch ohne Voranmeldung. Unser Team sichert eine zügige Triage und direkte Behandlung vor Ort – Ihre Notfallpraxis in Zürich Altstetten.
                </p>
                <div className="seoCardTags">
                  <span className="seoTag">Arzt ohne Termin</span>
                  <span className="seoTag">Walk-in Praxis</span>
                  <span className="seoTag">Notfallpraxis Altstetten</span>
                  <span className="seoTag">Permanence Altstetten</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="seoFadeWrapper" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="seoCard">
                <div className="seoCardIcon"><LocationTransitIcon /></div>
                <h3>Nahe Bahnhof Altstetten – Für alle Quartiere</h3>
                <p>
                  Nur wenige Gehminuten vom Bahnhof Zürich-Altstetten entfernt an der Badenerstrasse 621 (8048 Zürich). Schnell erreichbar aus allen Stadtteilen: Albisrieden, Schlieren, Grünau, Hardau, Lindenplatz und ganz Zürich West.
                </p>
                <div className="seoCardTags">
                  <span className="seoTag">Bahnhof Altstetten</span>
                  <span className="seoTag">Albisrieden</span>
                  <span className="seoTag">Schlieren</span>
                  <span className="seoTag">8048 Zürich</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="seoFadeWrapper" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="seoCard">
                <div className="seoCardIcon"><DiagnostikIcon /></div>
                <h3>Labor, EKG, Röntgen & Eiseninfusion</h3>
                <p>
                  Modernste Diagnostik direkt in unserer Arztpraxis: eigenes Praxislabor, EKG, Spirometrie (Lungenuntersuchung), digitales Röntgen sowie Infusionstherapien (Eisen, Vitamine). Kein Umweg in ein Spital – alles unter einem Dach.
                </p>
                <div className="seoCardTags">
                  <span className="seoTag">Eiseninfusion Zürich</span>
                  <span className="seoTag">Röntgen Altstetten</span>
                  <span className="seoTag">Labor</span>
                  <span className="seoTag">Vorsorge & Check-ups</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="seoFadeWrapper" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="seoCard">
                <div className="seoCardIcon"><MultilingualTeamIcon /></div>
                <h3>Mehrsprachiges Team & Neue Patienten</h3>
                <p>
                  Wir nehmen laufend neue Patienten für alle Krankenkassenmodelle auf. Unser Team berät Sie auf Deutsch, Englisch (English speaking doctor), Spanisch (Español), Arabisch (Arabisch sprechender Arzt / Arabic), Französisch und Rumänisch.
                </p>
                <div className="seoCardTags">
                  <span className="seoTag">Neue Patienten</span>
                  <span className="seoTag">English speaking GP</span>
                  <span className="seoTag">Arabischer Arzt</span>
                  <span className="seoTag">Familienarzt</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES (Client Island) ══════════ */}
      <ServicesSection />

      {/* ══════════ NATURMEDIZIN (Client Island) ══════════ */}
      <NaturmedizinSection />

      {/* ══════════ MED-ESTHEC BANNER (Server-rendered) ══════════ */}
      <section className="medEsthec">
        <div className="medEsthecInner">
          <FadeIn className="medEsthecContent">
            <div className="medEsthecLogoWrap">
              <Image
                src="/images/medesthec-logo.webp"
                alt="Med-Esthec"
                className="medEsthecLogo"
                width={400}
                height={120}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="medEsthecText">
              <p className="medEsthecSub">Auch in unserer Praxis</p>
              <h2 className="medEsthecTitle">Ästhetische Medizin</h2>
              <p className="medEsthecDesc">
                Hautverjüngung, Faltenbehandlung, PRP-Therapie und mehr — professionelle ästhetische Behandlungen direkt in unserer Praxis in Altstetten.
              </p>
              <a href="https://www.med-esthec.ch" target="_blank" rel="noopener noreferrer" className="btn btnMedEsthec">
                Mehr über Med-Esthec erfahren <ArrowRightIcon />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ PREVENTION (Server-rendered) ══════════ */}
      <section className="prevention">
        <div className="preventionDots" />
        <div className="preventionInner">
          <FadeIn>
            <div className="sectionTitle">
              <p className="sectionSub sectionSubLight">Prävention &amp; Pflege</p>
              <h2 className="sectionH2 sectionH2Light">Prävention ist der Schlüssel zu einem gesunden Leben</h2>
              <div className="sectionLine" />
            </div>
            <p>Wir beraten Sie zu Ernährung, Bewegung, Stressbewältigung und Krankheitsfrüherkennung. Durch gezielte Prävention helfen wir Ihnen, Risiken frühzeitig zu erkennen.</p>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnGreenDark" style={{ fontSize: 16, padding: '16px 36px' }}><CalendarIcon /> Jetzt Termin vereinbaren</a>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ FAQ SECTION (Client Island) ══════════ */}
      <FaqSection />

      {/* ══════════ TEAM (Client Island) ══════════ */}
      <TeamSection />

      {/* ══════════ CONTACT (Client Island) ══════════ */}
      <ContactSection />

      {/* ══════════ HOURS STRIP (Server-rendered) ══════════ */}
      <section className="hoursStrip">
        <div className="hoursInner">
          <div className="hoursText"><ClockIcon /><strong>Öffnungszeiten:</strong><span>{SITE.hours}</span></div>
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnWhite" style={{ padding: '10px 28px', fontSize: 14 }}>Jetzt Termin buchen</a>
        </div>
      </section>

      </main>

      {/* ══════════ FOOTER (Client Island) ══════════ */}
      <FooterClient />
    </>
  );
}
