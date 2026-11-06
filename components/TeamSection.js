'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SITE, TEAM } from '@/data/siteData';
import FadeIn from '@/components/FadeIn';
import SectionTitle from '@/components/SectionTitle';
import User from 'lucide-react/dist/esm/icons/user.mjs';

export default function TeamSection() {
  return (
    <section id="team" className="team">
      <div className="teamInner">
        <SectionTitle sub="Unser Team" title="Wir sprechen Ihre Sprache – Arabisch, Englisch, Französisch & Spanisch in Zürich-Altstetten" />
        <FadeIn>
          <p className="teamDesc">Unser Ärzteteam besteht aus erfahrenen und engagierten Fachärzten, die sich mit Kompetenz und Menschlichkeit um Ihre Gesundheit kümmern.</p>
        </FadeIn>
        <div className="teamGrid">
          {TEAM.map((t, i) => (
            <FadeIn key={t.slug || i} delay={i * 0.1}>
              <Link href={`/aerzte/${t.slug}`} className="teamCard teamCardClickable" style={{ animationDelay: `-${i * 0.8}s`, textDecoration: 'none', color: 'inherit', display: 'block' }}>
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt={t.name}
                    className="teamPhoto"
                    width={240}
                    height={240}
                    sizes="(max-width: 768px) 50vw, 240px"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                ) : (
                  <div className="teamAvatar">
                    <User size={110} strokeWidth={1.5} color="var(--teal-dark)" />
                  </div>
                )}
                <h3>{t.name}</h3>
                <p>{t.role}</p>
                {t.roleDetail && <p>{t.roleDetail}</p>}
                {t.languages && <p style={{ fontSize: 11, color: 'var(--text-light)', marginTop: 4 }}>🌐 {t.languages}</p>}
                <span className="teamMore">Vollständiges Profil ansehen →</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
