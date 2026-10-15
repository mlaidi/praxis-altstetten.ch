'use client';
import { useRef, useState, useEffect } from 'react';

export default function FadeIn({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: !mounted ? 1 : (visible ? 1 : 0),
        transform: !mounted ? 'none' : (visible ? 'translateY(0)' : 'translateY(24px)'),
        transition: mounted ? `opacity .55s ease ${delay}s, transform .55s ease ${delay}s` : 'none',
        willChange: mounted && !visible ? 'opacity, transform' : 'auto',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
