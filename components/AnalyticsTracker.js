'use client';

import { useEffect } from 'react';

export default function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (e) => {
      // Find the closest anchor tag
      const anchor = e.target.closest('a');
      if (!anchor || !anchor.href) return;

      const href = anchor.href;

      // Ensure gtag exists to avoid runtime errors
      const sendEvent = (eventName) => {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', eventName);
        }
      };

      if (href.includes('mailto:')) {
        sendEvent('generate_lead');
      } else if (href.includes('tel:')) {
        sendEvent('click_to_call');
      } else if (href.includes('app.arzt-direkt.de')) {
        sendEvent('book_appointment');
      }
    };

    // Attach listener
    document.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
