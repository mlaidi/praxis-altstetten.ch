// Server Component
import { SITE } from '@/data/siteData';
import { MapPinIcon, PhoneIcon, MailIcon, CalendarIcon, StarIcon } from '@/components/Icons';
import FadeIn from '@/components/FadeIn';
import SectionTitle from '@/components/SectionTitle';

export default function ContactSection() {
  const contacts = [
    { icon: <MapPinIcon />, title: 'Adresse', lines: [SITE.addressStreet, SITE.addressCity], href: SITE.mapsLink },
    { icon: <PhoneIcon />, title: 'Telefon', lines: [SITE.phone], href: `tel:${SITE.phoneTel}` },
    { icon: <MailIcon />, title: 'E-Mail', lines: [SITE.email], href: `mailto:${SITE.email}` },
    { icon: <CalendarIcon />, title: 'Online Termin', lines: ['Jetzt buchen'], href: SITE.bookingUrl },
    { icon: <StarIcon />, title: 'Google Bewertung', lines: ['Bewerten Sie uns'], href: SITE.googleReview },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contactInner">
        <SectionTitle sub="Kontakt" title="So erreichen Sie uns" />
        <div className="contactGrid">
          {contacts.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="contactCard">
                <div className="contactCardIcon">{c.icon}</div>
                <h3>{c.title}</h3>
                {c.lines.map((l, j) => <p key={j}>{l}</p>)}
              </a>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <div className="mapWrap">
            <iframe title="Praxis Altstetten Karte" src={SITE.mapEmbed} loading="lazy" allowFullScreen />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
