'use client';
import { useState, useEffect } from 'react';
import { SITE, NATURMEDIZIN } from '@/data/siteData';
import { CalendarIcon, CloseIcon } from '@/components/Icons';
import FadeIn from '@/components/FadeIn';

/* ── Full list modal ── */
function NaturmedizinModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', h);
    };
  }, [onClose]);

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div
        className="modalContent"
        style={{ maxWidth: 860 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="modalClose"
          onClick={onClose}
          aria-label="Schliessen"
        >
          <CloseIcon size={24} />
        </button>
        <div className="natMedModalBody">
          <h2 className="natMedModalTitle">
            Alle Behandlungen &amp; Therapien
          </h2>
          <div className="natMedModalGrid">
            {NATURMEDIZIN.map((n, idx) => (
              <div key={idx} className="natMedCard">
                <div className="natMedCardIcon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1293ca" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="natMedCardTitle">{n.title}</h3>
                  <p className="natMedCardDesc">{n.desc}</p>
                </div>
                <div>
                  <span className="natMedCardPrice">{n.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: 15, padding: '14px 32px' }}>
              <CalendarIcon /> Termin vereinbaren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NaturmedizinSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <NaturmedizinModal onClose={() => setModalOpen(false)} />}

      <section id="naturmedizin" className="naturmedizinSection">
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <div className="sectionTitle">
            <p className="sectionSub">Ganzheitliche Medizin</p>
            <h2 className="sectionH2">NAD+-, Vitamin- &amp; Eiseninfusionen, PRP-Therapie: Präventivmedizin in Zürich</h2>
            <div className="sectionLine" />
          </div>
          <p className="natMedSectionSubtitle">
            Moderne Infusionstherapien, regenerative Behandlungen und evidenzbasierte Naturmedizin — für mehr Energie, Vitalität und Langlebigkeit.
          </p>

          <div className="natMedGrid">
            {/* First 5 cards */}
            {NATURMEDIZIN.slice(0, 5).map((n, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.06}>
                <div className="natMedCard">
                  <div className="natMedCardIcon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1293ca" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="natMedCardTitle">{n.title}</h3>
                    <p className="natMedCardDesc">{n.desc}</p>
                  </div>
                  <div>
                    <span className="natMedCardPrice">{n.price}</span>
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* 6th card – "show more" CTA */}
            <FadeIn delay={0.15}>
              <div
                onClick={() => setModalOpen(true)}
                className="natMedCtaCard"
              >
                <div className="natMedCtaIconWrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
                <h3 className="natMedCtaTitle">
                  +{NATURMEDIZIN.length - 5} weitere
                </h3>
                <p className="natMedCtaDesc">
                  Klicken Sie hier, um alle Behandlungen zu sehen
                </p>
              </div>
            </FadeIn>
          </div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: 15, padding: '14px 32px' }}>
              <CalendarIcon /> Termin vereinbaren
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
