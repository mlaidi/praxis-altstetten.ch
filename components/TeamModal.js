'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { SITE } from '@/data/siteData';
import { CloseIcon, CalendarIcon, PhoneIcon } from '@/components/Icons';
import User from 'lucide-react/dist/esm/icons/user.mjs';

export default function TeamModal({ member, onClose }) {
  if (!member) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', h); };
  }, [onClose]);

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 560 }}>
        {/* Header with photo */}
        <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-dark))', padding: 'clamp(28px, 5vw, 40px) clamp(18px, 4vw, 32px)', borderRadius: '16px 16px 0 0', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '16px 16px 0 0', backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                width={110}
                height={110}
                sizes="110px"
                style={{ borderRadius: '50%', objectFit: 'cover', margin: '0 auto 20px', display: 'block', border: '4px solid rgba(255,255,255,.15)', boxShadow: '0 8px 30px rgba(0,0,0,.3)' }}
              />
            ) : (
              <div style={{ width: 110, height: 110, borderRadius: '50%', margin: '0 auto 20px', background: 'linear-gradient(135deg, #1293ca, var(--green-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid rgba(255,255,255,.15)' }}>
                <User size={72} strokeWidth={1.5} color="white" />
              </div>
            )}
            <h2 style={{ fontFamily: 'var(--f-head)', fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: 700, color: 'white', marginBottom: 6 }}>{member.name}</h2>
            <p style={{ fontSize: 14, color: 'var(--teal-pale)', fontWeight: 500, whiteSpace: 'pre-line' }}>{member.role}</p>
          </div>
        </div>
        <button className="modalClose" onClick={onClose} aria-label="Schliessen" style={{ color: 'white' }}><CloseIcon size={24} /></button>
        {/* Bio */}
        <div style={{ padding: 'clamp(20px, 4vw, 32px) clamp(18px, 4vw, 32px) clamp(24px, 4vw, 40px)' }}>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-light)' }}>{member.bio}</p>
          
          {member.qualifications && (
            <div style={{ marginTop: 20 }}>
              <h4 style={{ fontSize: 16, color: 'var(--navy)', marginBottom: 12 }}>Qualifikationen & Erfahrung:</h4>
              <ul style={{ paddingLeft: 20, color: 'var(--text-light)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                {member.qualifications.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
            </div>
          )}

          <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: 14, padding: '12px 26px', flex: '1 1 200px', justifyContent: 'center' }}><CalendarIcon size={18} /> Termin vereinbaren</a>
            <a href={`tel:${SITE.phoneTel}`} className="btn btnOutline" style={{ fontSize: 14, padding: '12px 26px', flex: '1 1 140px', justifyContent: 'center' }}><PhoneIcon size={18} /> Anrufen</a>
          </div>
        </div>
      </div>
    </div>
  );
}
