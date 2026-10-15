'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { SITE } from '@/data/siteData';

export default function PhotoSlider({ photos }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const next = useCallback(() => setCurrent(c => (c + 1) % photos.length), [photos.length]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + photos.length) % photos.length), [photos.length]);

  useEffect(() => {
    const t = setTimeout(() => {
      timerRef.current = setInterval(next, 4500);
    }, 1000);
    return () => {
      clearTimeout(t);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const goTo = (i) => { setCurrent(i); clearInterval(timerRef.current); timerRef.current = setInterval(next, 4500); };

  return (
    <div className="sliderWrap">
      <div className="sliderTrack" style={{ transform: `translateX(-${current * 100}%)` }}>
        {photos.map((p, i) => (
          <div key={i} style={{ position: 'relative', minWidth: '100%', height: '100%', flexShrink: 0 }}>
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 100vw, 513px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <div className="sliderOverlay">
        <p className="sliderAddress">{SITE.addressStreet}</p>
        <p className="sliderCity">{SITE.addressCity}</p>
      </div>
      <button className="sliderArrow sliderArrowL" onClick={prev} aria-label="Vorherige">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button className="sliderArrow sliderArrowR" onClick={next} aria-label="Nächste">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 6 15 12 9 18" /></svg>
      </button>
      <div className="sliderDots">
        {photos.map((_, i) => (
          <button key={i} className={`sliderDot ${i === current ? 'sliderDotActive' : ''}`} onClick={() => goTo(i)} aria-label={`Foto ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
