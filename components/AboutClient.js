'use client';
import { useState } from 'react';
import AboutModal from '@/components/AboutModal';

export default function AboutClient() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      {aboutOpen && <AboutModal onClose={() => setAboutOpen(false)} />}
      <button onClick={() => setAboutOpen(true)} className="btn btnPrimary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '16px', marginTop: '8px' }}>
        Mehr erfahren
      </button>
    </>
  );
}
