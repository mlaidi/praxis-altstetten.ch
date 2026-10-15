import React from 'react';

import { SITE } from '@/data/siteData';

export default function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta">
      <a href={`tel:${SITE.phoneTel}`} className="sm-cta-btn btn-call" aria-label="Telefonisch anrufen: 044 244 09 99">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        Anrufen
      </a>
      <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="sm-cta-btn btn-book" aria-label="Online Termin buchen">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
        </svg>
        Termin buchen
      </a>
    </div>
  );
}
