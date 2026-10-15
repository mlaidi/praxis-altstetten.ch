'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { SITE } from '@/data/siteData';
import { CloseIcon, CalendarIcon, PhoneIcon } from './Icons';

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalImgWrap">
          <Image
            src={service.img}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
          />
          <div className="modalImgGrad" />
          <h2 className="modalImgTitle">{service.title}</h2>
        </div>
        <button className="modalClose" onClick={onClose} aria-label="Schliessen">
          <CloseIcon size={24} />
        </button>
        <div className="modalBody">
          {(() => {
            const sentences = service.full.split(/(?<=\.)\s+/);
            const leadText = sentences.slice(0, 1).join(' ');
            const details = sentences.slice(1);
            return (
              <>
                <p className="modalLead">{leadText}</p>
                {details.length > 0 && (
                  <div className="modalDetailsSection">
                    <h4 className="modalDetailsTitle">Medizinische Details & Ablauf</h4>
                    <ul className="modalDetailsList">
                      {details.map((sentence, idx) => (
                        <li key={idx} className="modalDetailsItem">
                          <span className="modalDetailsIcon">✓</span>
                          <span className="modalDetailsText">{sentence}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );
          })()}
          <div className="modalBtns">
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: 14, padding: '12px 26px' }}>
              <CalendarIcon size={18} /> Termin vereinbaren
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="btn btnOutline" style={{ fontSize: 14, padding: '12px 26px' }}>
              <PhoneIcon size={18} /> Anrufen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
