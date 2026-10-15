'use client';
import { useState, useEffect } from 'react';
import Heart from 'lucide-react/dist/esm/icons/heart.mjs';
import Activity from 'lucide-react/dist/esm/icons/activity.mjs';
import ScanLine from 'lucide-react/dist/esm/icons/scan-line.mjs';
import Ear from 'lucide-react/dist/esm/icons/ear.mjs';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check.mjs';
import Droplets from 'lucide-react/dist/esm/icons/droplets.mjs';
import FlaskConical from 'lucide-react/dist/esm/icons/flask-conical.mjs';
import Stethoscope from 'lucide-react/dist/esm/icons/stethoscope.mjs';

/* ── Layout constants (580×580 virtual canvas) ── */
const S = 580, CX = 290, CY = 290;
const IR = 220;   // central image radius
const NR = 40;    // node circle radius
const BR = 224;   // center → node center distance

const TEAL = '#47BFC4';
const TDARK = '#2E9A9F';

const rad = d => d * Math.PI / 180;
const pt = (r, d) => ({
  x: +(CX + r * Math.cos(rad(d))).toFixed(1),
  y: +(CY + r * Math.sin(rad(d))).toFixed(1),
});

/* ── 8 nodes at 45° intervals ── */
const NODES = [
  { idx: 0, angle: -90, Icon: Heart, label: 'Herzuntersuchung' },
  { idx: 1, angle: -45, Icon: Activity, label: 'Lungenuntersuchung' },
  { idx: 2, angle: 0, Icon: ScanLine, label: 'Röntgenuntersuchung' },
  { idx: 3, angle: 45, Icon: Ear, label: 'Ohrenspülung' },
  { idx: 4, angle: 90, Icon: ClipboardCheck, label: 'Check-ups & Atteste' },
  { idx: 5, angle: 135, Icon: Droplets, label: 'Mineralmangel' },
  { idx: 6, angle: 180, Icon: FlaskConical, label: 'Laboranalysen' },
  { idx: 7, angle: 225, Icon: Stethoscope, label: 'Therapien' },
];

/* labelStyle – Glassmorphic tooltip directly above the icon circle */
function labelStyle(isHovered) {
  return {
    position: 'absolute',
    bottom: 'calc(100% + 12px)',
    left: '50%',
    transform: `translateX(-50%) translateY(${isHovered ? '0' : '4px'}) translateZ(0)`,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    userSelect: 'none',
    fontSize: 12.5,
    fontWeight: 600,
    fontFamily: "var(--f-head), system-ui, sans-serif",
    letterSpacing: '.4px',
    color: '#ffffff',
    background: '#0a2024',
    border: `1.5px solid ${TEAL}`,
    borderRadius: 6,
    padding: '6px 14px',
    opacity: isHovered ? 1 : 0,
    transition: 'all .3s cubic-bezier(.4, 0, .2, 1)',
    zIndex: 9999,
    boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  };
}

export default function MedicalHero({ onNodeClick }) {
  const [hov, setHov] = useState(null);

  const handleClick = (idx) => {
    if (onNodeClick) {
      onNodeClick(idx);
    } else {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('open-service', { detail: idx }));
      }, 650);
    }
  };

  return (
    <div className="clinicalFloatCanvas" style={{ position: 'relative', width: '100%', maxWidth: S, aspectRatio: '1 / 1' }}>
      <style>{`
        @keyframes mhPop  {
          0%   { opacity: 0; transform: scale(.25); }
          65%  { transform: scale(1.12); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes clinicalOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes clinicalCounterOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        /* Orbiting wrapper and counter rotation styles */
        .orbitingWrapper {
          position: absolute;
          inset: 0;
          animation: clinicalOrbit 38s linear infinite;
          transform-origin: 50% 50%;
        }
        .counterOrbitingWrapper {
          position: relative;
          width: 100%;
          height: 100%;
          animation: clinicalCounterOrbit 38s linear infinite;
          transform-origin: 50% 50%;
        }
        
        /* Pause orbit rotation on hover */
        .clinicalFloatCanvas:hover .orbitingWrapper,
        .clinicalFloatCanvas:hover .counterOrbitingWrapper {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* ── SVG: Ambient aura & fixed central photo ── */}
      <svg viewBox={`0 0 ${S} ${S}`}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
        <defs>
          <clipPath id="mhC2"><circle cx={CX} cy={CY} r={IR} /></clipPath>
          <filter id="mhPG2" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="mhA2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={TEAL} stopOpacity=".12" />
            <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient aura */}
        <circle cx={CX} cy={CY} r={IR + 78} fill="url(#mhA2)" />

        {/* Central photo (Fixed – does not float!) */}
        <image href="/images/banner.webp"
          x={CX - IR} y={CY - IR} width={IR * 2} height={IR * 2}
          clipPath="url(#mhC2)" preserveAspectRatio="xMidYMid slice" />

        {/* Teal glow border on photo */}
        <circle cx={CX} cy={CY} r={IR}
          fill="none" stroke={TEAL} strokeWidth="2.5" strokeOpacity=".55"
          filter="url(#mhPG2)" />
        <circle cx={CX} cy={CY} r={IR}
          fill="none" stroke="rgba(255,255,255,.09)" strokeWidth="1.5" />
          
        {/* ── Concentric dashed rings around the photo ── */}
        {/* Ring 1 – closest, most opaque */}
        <circle cx={CX} cy={CY} r={IR + 22}
          fill="none"
          stroke="rgba(255,255,255,.55)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          strokeLinecap="round" />

        {/* Ring 2 */}
        <circle cx={CX} cy={CY} r={IR + 46}
          fill="none"
          stroke="rgba(255,255,255,.38)"
          strokeWidth="1.5"
          strokeDasharray="3 10"
          strokeLinecap="round" />

        {/* Ring 3 */}
        <circle cx={CX} cy={CY} r={IR + 70}
          fill="none"
          stroke="rgba(255,255,255,.22)"
          strokeWidth="1.2"
          strokeDasharray="3 14"
          strokeLinecap="round" />

        {/* Ring 4 – furthest, most transparent */}
        <circle cx={CX} cy={CY} r={IR + 96}
          fill="none"
          stroke="rgba(255,255,255,.10)"
          strokeWidth="1"
          strokeDasharray="2 16"
          strokeLinecap="round" />
      </svg>

      {/* ── Orbiting wrapper for circular flow ── */}
      <div className="orbitingWrapper">
        {/* ── Icon nodes – centered exactly on node point, floating individually ── */}
        {NODES.map((n, i) => {
          const pos = pt(BR, n.angle);
          const isH = hov === i;
          const delay = `${.26 + i * .07}s`;

          return (
            <div key={i}
              className="iconNodeContainer"
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              onClick={() => handleClick(n.idx)}
              style={{
                /* exactly centered on the computed node point */
                position: 'absolute',
                left: `${(pos.x / S) * 100}%`,
                top: `${(pos.y / S) * 100}%`,
                transform: `translate(-50%, -50%) scale(${isH ? 1.15 : 1})`,
                transition: 'transform .3s cubic-bezier(.34,1.56,.64,1)',
                zIndex: 10,
                cursor: 'pointer',
              }}
            >
              {/* Pop-in wrapper */}
              <div style={{
                position: 'relative',
                width: NR * 2,
                height: NR * 2,
                animation: `mhPop .5s ease ${delay} both`,
              }}>
                {/* Counter orbiting wrapper child (Keeps icons perfectly upright!) */}
                <div className="counterOrbitingWrapper">
                  {/* Icon circle */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: isH
                      ? `linear-gradient(135deg, ${TEAL}, ${TDARK})`
                      : 'rgba(10, 32, 36, 0.90)',
                    border: `1.5px solid ${isH ? TEAL : 'rgba(71,191,196,.30)'}`,
                    boxShadow: isH
                      ? `0 0 22px rgba(71,191,196,.60), 0 0 55px rgba(71,191,196,.20)`
                      : '0 2px 10px rgba(0,0,0,.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all .3s ease',
                    backdropFilter: 'blur(8px)',
                  }}>
                    <n.Icon size={18} color={isH ? '#fff' : TEAL} strokeWidth={1.8}
                      style={{ transition: 'color .3s' }} />
                  </div>

                  {/* Tooltip label – now INSIDE the counter-orbit ring to remain perfectly horizontal and centered directly above! */}
                  <span style={labelStyle(isH)}>
                    {n.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
