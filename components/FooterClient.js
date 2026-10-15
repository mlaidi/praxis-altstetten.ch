'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SITE, NAV_LINKS, FOOTER_SERVICES, FOOTER_PARTNERS, SERVICES } from '@/data/siteData';
import {
  PhoneIcon, MailIcon, MapPinIcon,
  FacebookIcon, InstagramIcon, StarIcon,
} from '@/components/Icons';

export default function FooterClient() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerGrid">
          {/* Col 1 – Logo & partner */}
          <div>
            <div className="footerLogo">
              <Image
                src={SITE.logoUrl}
                alt="Hausarztpraxis Zürich Altstetten"
                className="footerLogoImg"
                width={328}
                height={96}
                sizes="(max-width: 768px) 150px, 328px"
              />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 300, marginBottom: 24 }}>Von hausärztlicher Betreuung mit Vorsorge, Diagnostik und Therapie über Notfallbehandlungen bis hin zu kleinchirurgischen Eingriffen.</p>
            {/* Partner */}
            <div style={{ marginTop: 8 }}>
              <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10, color: 'rgba(255,255,255,.8)' }}>Partner</p>
              <a href="https://www.laborteam.ch" target="_blank" rel="noopener noreferrer" aria-label="Partner: Labor Team Webseite besuchen" style={{ display: 'inline-block' }}>
                <Image
                  src="/images/labor-team.webp"
                  alt="Labor Team"
                  width={75}
                  height={50}
                  sizes="75px"
                  style={{ height: 50, width: 'auto', borderRadius: 6, opacity: 0.85, transition: 'opacity .3s' }}
                />
              </a>
            </div>
          </div>

          {/* Col 2 – Navigation */}
          <div>
            <h4>Navigation</h4>
            {NAV_LINKS.map((l) => <div key={l.id} className="footerLink" onClick={() => scrollTo(l.id)}>{l.label}</div>)}
          </div>

          {/* Col 3 – Leistungen (clickable!) */}
          <div>
            <h4>Leistungen</h4>
            {FOOTER_SERVICES.map((s) => {
              if (s.link) {
                return <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer" className="footerLink">{s.label}</a>;
              }
              const slug = s.slug || (SERVICES[s.index] && SERVICES[s.index].slug);
              if (slug) {
                return <Link key={s.label} href={`/leistungen/${slug}`} className="footerLink">{s.label}</Link>;
              }
              return null;
            })}
          </div>

          {/* Col 4 – Partner & Links */}
          <div>
            <h4>Partner-Praxen</h4>
            {FOOTER_PARTNERS.map((p) => (
              <a key={p.label} href={p.link} target="_blank" rel="noopener noreferrer" className="footerLink">{p.label}</a>
            ))}
          </div>

          {/* Col 5 – Contact */}
          <div>
            <h4>Kontakt & Anfahrt</h4>
            <div className="footerContactItem"><MapPinIcon size={18} /><span>{SITE.address}</span></div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', paddingLeft: 26, marginBottom: 16, lineHeight: 1.6 }}>
              <strong>Top erreichbar mit ÖV & Auto:</strong><br/>
              • 3 Min. ab Bahnhof Altstetten<br/>
              • 10 Min. ab Schlieren & Oerlikon<br/>
              • 12 Min. ab Zürich HB
            </div>
            <div className="footerContactItem"><PhoneIcon size={18} /><a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a></div>
            <div className="footerContactItem"><MailIcon size={18} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
            <div className="footerContactItem"><StarIcon size={18} /><a href={SITE.googleReview} target="_blank" rel="noopener noreferrer">Auf Google bewerten</a></div>
            <div className="footerSocial">
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie uns auf Facebook"><FacebookIcon /></a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Besuchen Sie uns auf Instagram"><InstagramIcon /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar with legal links */}
        <div className="footerBottom">
          <p>&copy; {new Date().getFullYear()} Hausarztpraxis Zürich Altstetten. Alle Rechte vorbehalten.</p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/impressum" className="footerLegal">Impressum</Link>
            <Link href="/datenschutz" className="footerLegal">Datenschutz</Link>
            <Link href="/cookies" className="footerLegal">Cookies</Link>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>|</span>
            <span style={{ color: '#3ab0e2' }}>Designed by Jerumed Nexus</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
