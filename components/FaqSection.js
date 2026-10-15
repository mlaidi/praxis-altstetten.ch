'use client';
import { useState } from 'react';
import { SITE } from '@/data/siteData';
import { CalendarIcon, PhoneIcon } from '@/components/Icons';
import FadeIn from '@/components/FadeIn';

const FAQS = [
  {
    q: "Kann ich ohne Termin in die Hausarztpraxis Altstetten kommen (Walk-in Praxis)?",
    a: "Ja! Für Notfälle, akute Erkrankungen, Schmerzen und dringende Anliegen empfangen wir Sie während unserer Öffnungszeiten als Walk-in Praxis auch ohne vorherige Terminvereinbarung. Kommen Sie einfach an die Badenerstrasse 621, nur wenige Gehminuten vom Bahnhof Zürich-Altstetten. Notfälle werden priorisiert behandelt. Für planbare Routinekontrollen oder Check-ups können Sie jederzeit bequem online oder telefonisch einen Termin buchen."
  },
  {
    q: "Nimmt die Praxis aktuell neue Patientinnen und Patienten auf?",
    a: "Ja, wir nehmen jederzeit gerne neue Patientinnen und Patienten für die hausärztliche Grundversorgung auf. Wir arbeiten mit allen Schweizer Krankenkassen zusammen (Grundversicherung, Hausarzt- und HMO-Modelle). Kontaktieren Sie uns telefonisch unter 044 244 09 99 oder buchen Sie bequem online einen Termin."
  },
  {
    q: "Welche Sprachen sprechen die Ärzte in der Praxis Altstetten?",
    a: "Unser internationales Team betreut Sie mehrsprachig: Deutsch, Englisch (English speaking doctor / GP), Spanisch (Español), Arabisch (Arabisch sprechende Ärzte / Arabic speaking), Französisch und Rumänisch. Internationale Patientinnen und Patienten fühlen sich bei uns bestens verstanden und betreut."
  },
  {
    q: "Wie erreiche ich die Arztpraxis Altstetten vom Bahnhof und welche Quartiere werden betreut?",
    a: "Die Hausarztpraxis Zürich Altstetten befindet sich an der Badenerstrasse 621 (8048 Zürich), nur wenige Gehminuten vom Bahnhof Zürich-Altstetten entfernt. Dank der zentralen Lage sind wir schnell erreichbar aus allen Quartieren: Albisrieden, Grünau, Schlieren, Hardau, Lindenplatz und ganz Zürich West."
  },
  {
    q: "Bieten Sie Eiseninfusionen, Laboruntersuchungen und Röntgen direkt in der Praxis an?",
    a: "Ja, wir verfügen über ein eigenes Praxislabor (Blut- und Entzündungswerte in wenigen Minuten), digitales Röntgen, EKG, Lungenfunktionstests (Spirometrie) sowie Infusionstherapien (Eiseninfusion, Vitamin-Infusionen, NAD+, PRP-Therapie). Kein Umweg ins Spital – alles direkt in unserer Praxis in Zürich Altstetten."
  },
  {
    q: "Welche diagnostischen Abklärungen sind direkt in der Praxis möglich?",
    a: "Dank modernster technischer Ausstattung verfügen wir über ein eigenes Praxislabor, digitales Röntgen, Ruhe- und Langzeit-EKG sowie Lungenfunktionstests (Spirometrie). Viele Befunde liegen innerhalb weniger Minuten vor. Zusätzlich führen wir Fahreignungsabklärungen (Stufe I–III), Ohrenspülungen und umfassende Gesundheits-Check-ups direkt in unserer Praxis durch."
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="faqSection">
      <div className="faqInner">
        <div className="sectionTitle">
          <p className="sectionSub">Häufige Fragen</p>
          <h2 className="sectionH2">Häufig gestellte Fragen (FAQ) – Hausarzt &amp; Arztpraxis Altstetten</h2>
          <div className="sectionLine" />
        </div>
        <div className="faqList">
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className={`faqItem ${openFaq === i ? 'faqItemOpen' : ''}`}>
                <button
                  className="faqQuestionBtn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className={`faqChevron ${openFaq === i ? 'faqChevronOpen' : ''}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="faqAnswer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <p style={{ color: 'var(--text-light)', marginBottom: 16, fontSize: 15 }}>
            Haben Sie weitere Fragen oder benötigen Sie sofort einen Arzttermin?
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ padding: '12px 28px', fontSize: 14 }}>
              <CalendarIcon /> Online Termin vereinbaren
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="btn btnOutline" style={{ padding: '12px 28px', fontSize: 14 }}>
              <PhoneIcon /> Anrufen: {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
