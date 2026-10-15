'use client';
import { useEffect } from 'react';
import { SITE } from '@/data/siteData';
import { CloseIcon, CalendarIcon } from '@/components/Icons';

export default function AboutModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', h); };
  }, [onClose]);

  const sections = [
    { icon: '🏥', title: 'Unsere Praxis', text: 'Seit 2018 betreuen wir Patientinnen und Patienten im Herzen von Zürich Altstetten. Unsere moderne Praxis vereint langjährige Erfahrung mit modernster medizinischer Infrastruktur – von eigenem Labor über digitales Röntgen bis hin zur hauseigenen Apotheke.' },
    { icon: '💚', title: 'Was wir bieten', text: 'Wir decken das gesamte Spektrum der Allgemeinmedizin ab: hausärztliche Betreuung, Vorsorgeuntersuchungen, Diagnostik mit EKG und Spirometrie, Laboranalysen, Impfungen, kleinchirurgische Eingriffe, Eiseninfusionen, PRP-Therapie und Fahreignungsabklärungen.' },
    { icon: '🤝', title: 'Unser Engagement', text: 'Persönliche Betreuung steht bei uns an erster Stelle. Wir nehmen uns Zeit für jede Patientin und jeden Patienten und arbeiten eng mit Fachärzten, Spitälern und Apotheken der Region zusammen – nach den Qualitätsstandards der FMH.' },
    { icon: '🎯', title: 'Unsere Vision', text: 'Wir möchten Ihr verlässlicher Gesundheitspartner sein – ein Leben lang. Durch gezielte Prävention, individuelle Beratung und eine offene, vertrauensvolle Arzt-Patient-Beziehung tragen wir zu Ihrer langfristigen Gesundheit und Ihrem Wohlbefinden bei.' },
  ];

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 680 }}>
        <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-dark))', padding: 'clamp(28px, 5vw, 40px) clamp(18px, 4vw, 32px)', borderRadius: '16px 16px 0 0', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '16px 16px 0 0', backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <p style={{ fontFamily: 'var(--f-head)', fontSize: 13, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--green-light)', marginBottom: 8, fontWeight: 600, position: 'relative' }}>Hausarztpraxis Zürich Altstetten</p>
          <h2 style={{ fontFamily: 'var(--f-head)', fontSize: 'clamp(24px, 4vw, 30px)', fontWeight: 700, color: 'white', lineHeight: 1.2, position: 'relative', paddingRight: 36 }}>Mehr über uns</h2>
          <div style={{ width: 48, height: 3, marginTop: 14, borderRadius: 2, position: 'relative', background: 'linear-gradient(90deg, #1293ca, var(--green-light))' }} />
        </div>
        <button className="modalClose" onClick={onClose} aria-label="Schliessen" style={{ color: 'white' }}><CloseIcon size={24} /></button>
        <div style={{ padding: 'clamp(20px, 4vw, 32px) clamp(18px, 4vw, 32px) clamp(24px, 4vw, 40px)' }}>
          {sections.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, marginBottom: i < sections.length - 1 ? 24 : 0, paddingBottom: i < sections.length - 1 ? 24 : 0, borderBottom: i < sections.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, background: 'var(--green-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{s.icon}</div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--f-head)', fontSize: 17, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--text-light)' }}>{s.text}</p>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 28, textAlign: 'center' }}>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: 15, padding: '14px 32px' }}><CalendarIcon /> Termin vereinbaren</a>
          </div>
        </div>
      </div>
    </div>
  );
}
