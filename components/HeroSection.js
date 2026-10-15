import dynamic from 'next/dynamic';
import { SITE } from '@/data/siteData';
import { PhoneIcon, CalendarIcon } from '@/components/Icons';

const MedicalHero = dynamic(() => import('@/components/MedicalHero'), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section id="hero" className="hero" style={{ minHeight: '100vh', padding: 0, overflow: 'hidden' }}>
      <div className="heroOrb1" /><div className="heroOrb2" /><div className="heroDots" />
      <div className="heroInnerFlex">
        {/* Text */}
        <div className="heroContent">
          <div className="heroBadgesContainer">
            <div className="heroBadge"><span className="heroBadgeDot heroBadgeDotGreen" />IHRE GESUNDHEIT IM FOKUS</div>
            <div className="heroBadge heroBadgeRed"><span className="heroBadgeDot heroBadgeDotRed" />NOTFÄLLE AUCH OHNE TERMIN (WALK-IN)</div>
            <div className="heroBadge heroBadgeBlue"><span className="heroBadgeDot heroBadgeDotBlue" />3 MIN. VOM BAHNHOF ALTSTETTEN (BADENERSTRASSE 621)</div>
          </div>
          <h1 className="heroTitle">Ihr Ärztezentrum &amp; Hausarzt<br className="hideOnMobile" />in <span className="heroTitleAccent">Zürich-Altstetten</span></h1>
          <p className="heroDesc">Ihr medizinischer Ansprechpartner im Herzen von Zürich Altstetten, nur wenige Gehminuten vom Bahnhof Altstetten entfernt. Umfassende, auf Ihre individuellen Bedürfnisse abgestimmte Erstversorgung mit modernstem Equipment.</p>
          <div className="heroBtns">
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary heroBtnBook"><CalendarIcon /> Online Termin Buchen</a>
            <a href={`tel:${SITE.phoneTel}`} className="btn btnSecondary heroBtnCall"><PhoneIcon /> {SITE.phone} Anrufen</a>
          </div>
          <div className="heroLangText">
            Wir sprechen: 🇩🇪 Deutsch | 🇬🇧 English | 🇪🇸 Español | 🇫🇷 Français | 🇸🇦 Arab
          </div>
        </div>
        {/* Radial tree – dynamically loaded, hidden on mobile via CSS .heroVisual rule */}
        <div className="heroVisual">
          <MedicalHero />
        </div>
      </div>
    </section>
  );
}
