'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SITE, NAV_LINKS } from '@/data/siteData';
import { MenuIcon, CloseIcon } from '@/components/Icons';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbarScrolled' : ''}`} role="navigation" aria-label="Hauptnavigation">
      <div className="navInner">
        <div className="navLogo" onClick={() => scrollTo('hero')}>
          <Image
            src={SITE.logoUrl}
            alt="Hausarztpraxis Zürich Altstetten"
            className="navLogoImg"
            width={328}
            height={96}
            priority
            sizes="(max-width: 768px) 150px, 328px"
          />
        </div>
        <div className="navLinks">
          {NAV_LINKS.map((l) => (
            <button key={l.id} className="navLink" onClick={() => scrollTo(l.id)}>{l.label}</button>
          ))}
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ padding: '10px 24px', fontSize: 14 }}>Termin buchen</a>
        </div>
        <button className="mobileMenuBtn" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Menü schliessen' : 'Menü öffnen'}>{menuOpen ? <CloseIcon /> : <MenuIcon />}</button>
      </div>
      {menuOpen && (
        <div className="mobileMenu">
          {NAV_LINKS.map((l) => <div key={l.id} className="mobileMenuItem" onClick={() => scrollTo(l.id)}>{l.label}</div>)}
          <div style={{ paddingTop: 16 }}><a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ width: '100%', justifyContent: 'center' }}>Termin buchen</a></div>
        </div>
      )}
    </nav>
  );
}
