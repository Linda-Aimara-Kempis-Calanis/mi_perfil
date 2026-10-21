import type { CSSProperties } from 'react';

const baseProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
} as const;

/* ---------- Hero: mother–child immunology network ---------- */
export function HeroIllustration({ className = '' }: { className?: string }) {
  return (
    <svg {...baseProps} viewBox="0 0 400 400" className={className}>
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#hero-glow)" />

      {/* connection lines */}
      <g stroke="#0f766e" strokeOpacity="0.25" strokeWidth="1.2">
        <line x1="120" y1="130" x2="200" y2="200" />
        <line x1="280" y1="130" x2="200" y2="200" />
        <line x1="200" y1="320" x2="200" y2="200" />
        <line x1="80" y1="240" x2="200" y2="200" />
        <line x1="320" y1="250" x2="200" y2="200" />
      </g>

      {/* central node – representing the immune system */}
      <circle cx="200" cy="200" r="26" fill="#0d4f4a" className="node-pulse" />
      <circle cx="200" cy="200" r="14" fill="#5eead4" />

      {/* surrounding cells */}
      <g>
        <circle cx="120" cy="130" r="20" fill="#0f766e" fillOpacity="0.85" className="node-float" />
        <circle cx="120" cy="130" r="9" fill="#5eead4" fillOpacity="0.8" />
      </g>
      <g style={{ animationDelay: '1.2s' } as CSSProperties}>
        <circle cx="280" cy="130" r="16" fill="#0d4f4a" fillOpacity="0.7" className="node-float" />
        <circle cx="280" cy="130" r="7" fill="#5eead4" fillOpacity="0.7" />
      </g>
      <g style={{ animationDelay: '0.6s' } as CSSProperties}>
        <circle cx="200" cy="320" r="22" fill="#0f766e" fillOpacity="0.8" className="node-float" />
        <circle cx="200" cy="320" r="10" fill="#5eead4" fillOpacity="0.75" />
      </g>
      <g style={{ animationDelay: '1.8s' } as CSSProperties}>
        <circle cx="80" cy="240" r="14" fill="#0d4f4a" fillOpacity="0.6" className="node-float" />
      </g>
      <g style={{ animationDelay: '0.9s' } as CSSProperties}>
        <circle cx="320" cy="250" r="18" fill="#0f766e" fillOpacity="0.75" className="node-float" />
        <circle cx="320" cy="250" r="8" fill="#5eead4" fillOpacity="0.7" />
      </g>
    </svg>
  );
}

/* ---------- About: lab + laptop integration ---------- */
export function AboutIllustration({ className = '' }: { className?: string }) {
  return (
    <svg {...baseProps} viewBox="0 0 360 360" className={className}>
      <defs>
        <linearGradient id="about-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d4f4a" />
          <stop offset="100%" stopColor="#0f766e" />
        </linearGradient>
      </defs>

      {/* petri dish / cell culture */}
      <circle cx="110" cy="120" r="70" fill="#0d4f4a" fillOpacity="0.08" stroke="url(#about-grad)" strokeWidth="2" />
      <circle cx="110" cy="120" r="60" fill="none" stroke="#0f766e" strokeOpacity="0.2" strokeWidth="1" />
      {/* cells inside dish */}
      <circle cx="92" cy="105" r="12" fill="#0f766e" fillOpacity="0.6" />
      <circle cx="128" cy="130" r="9" fill="#0d4f4a" fillOpacity="0.5" />
      <circle cx="100" cy="140" r="7" fill="#0f766e" fillOpacity="0.7" />
      <circle cx="135" cy="100" r="6" fill="#0d4f4a" fillOpacity="0.4" />

      {/* connecting arrow */}
      <g stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" className="dash-flow">
        <path d="M190 120 Q 210 110, 230 120" strokeDasharray="6 4" />
        <path d="M226 116 L 232 120 L 226 124" fill="none" />
      </g>

      {/* laptop / data */}
      <rect x="230" y="90" width="100" height="64" rx="6" fill="#0d4f4a" fillOpacity="0.1" stroke="url(#about-grad)" strokeWidth="2" />
      <rect x="222" y="152" width="116" height="8" rx="4" fill="#0f766e" fillOpacity="0.3" />
      {/* bars on screen */}
      <rect x="242" y="128" width="10" height="18" rx="2" fill="#0f766e" fillOpacity="0.7" className="bar-rise" style={{ ['--bh' as string]: '18px' } as CSSProperties} />
      <rect x="258" y="118" width="10" height="28" rx="2" fill="#0f766e" fillOpacity="0.55" className="bar-rise" style={{ animationDelay: '0.3s', ['--bh' as string]: '28px' } as CSSProperties} />
      <rect x="274" y="108" width="10" height="38" rx="2" fill="#0d4f4a" fillOpacity="0.6" className="bar-rise" style={{ animationDelay: '0.6s', ['--bh' as string]: '38px' } as CSSProperties} />
      <rect x="290" y="122" width="10" height="24" rx="2" fill="#0f766e" fillOpacity="0.5" className="bar-rise" style={{ animationDelay: '0.9s', ['--bh' as string]: '24px' } as CSSProperties} />
      <rect x="306" y="112" width="10" height="34" rx="2" fill="#0d4f4a" fillOpacity="0.55" className="bar-rise" style={{ animationDelay: '1.2s', ['--bh' as string]: '34px' } as CSSProperties} />

      {/* DNA helix bottom */}
      <g stroke="#0f766e" strokeWidth="2" fill="none" className="helix-rotate" transform-origin="180 280">
        <path d="M140 260 Q 180 300, 140 340" strokeOpacity="0.5" />
        <path d="M220 260 Q 180 300, 220 340" strokeOpacity="0.5" />
        <line x1="150" y1="270" x2="210" y2="270" strokeOpacity="0.3" />
        <line x1="160" y1="285" x2="200" y2="285" strokeOpacity="0.3" />
        <line x1="160" y1="315" x2="200" y2="315" strokeOpacity="0.3" />
        <line x1="150" y1="330" x2="210" y2="330" strokeOpacity="0.3" />
      </g>
    </svg>
  );
}

/* ---------- Flow cytometry dots ---------- */
export function CytometryFigure({ className = '' }: { className?: string }) {
  const dots = [
    { x: 60, y: 80, r: 6, c: '#0f766e', o: 0.7 },
    { x: 90, y: 60, r: 5, c: '#0d4f4a', o: 0.6 },
    { x: 120, y: 90, r: 7, c: '#5eead4', o: 0.5 },
    { x: 150, y: 70, r: 5, c: '#0f766e', o: 0.8 },
    { x: 70, y: 120, r: 8, c: '#0d4f4a', o: 0.5 },
    { x: 110, y: 130, r: 6, c: '#5eead4', o: 0.6 },
    { x: 170, y: 110, r: 5, c: '#0f766e', o: 0.7 },
    { x: 200, y: 80, r: 6, c: '#0d4f4a', o: 0.6 },
    { x: 50, y: 160, r: 5, c: '#5eead4', o: 0.4 },
    { x: 140, y: 170, r: 7, c: '#0f766e', o: 0.7 },
    { x: 190, y: 150, r: 6, c: '#0d4f4a', o: 0.5 },
    { x: 220, y: 120, r: 5, c: '#5eead4', o: 0.6 },
  ];
  return (
    <svg {...baseProps} viewBox="0 0 260 220" className={className}>
      <rect x="20" y="30" width="220" height="170" rx="8" fill="#faf8f3" stroke="#0f766e" strokeOpacity="0.25" strokeWidth="1.5" />
      {/* axes */}
      <line x1="40" y1="180" x2="230" y2="180" stroke="#0d4f4a" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="40" y1="180" x2="40" y2="45" stroke="#0d4f4a" strokeOpacity="0.3" strokeWidth="1" />
      {/* quadrant dividers */}
      <line x1="135" y1="180" x2="135" y2="45" stroke="#0f766e" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="40" y1="112" x2="230" y2="112" stroke="#0f766e" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 3" />
      {/* dots */}
      {dots.map((d, i) => (
        <circle key={i} cx={d.x + 20} cy={d.y} r={d.r} fill={d.c} fillOpacity={d.o} className="dot-pop" style={{ animationDelay: `${i * 0.12}s` } as CSSProperties} />
      ))}
      {/* labels */}
      <text x="235" y="184" fontSize="8" fill="#0d4f4a" fillOpacity="0.5" fontFamily="Inter, sans-serif">CD4</text>
      <text x="28" y="42" fontSize="8" fill="#0d4f4a" fillOpacity="0.5" fontFamily="Inter, sans-serif" transform="rotate(-90 28 42)">CD8</text>
    </svg>
  );
}

/* ---------- RNA-seq / transcriptomics heatmap ---------- */
export function HeatmapFigure({ className = '' }: { className?: string }) {
  const rows = 8;
  const cols = 10;
  const palette = ['#0d4f4a', '#0f766e', '#14938a', '#2cb5a8', '#5eead4', '#a7f3d0'];
  const cells = Array.from({ length: rows * cols }, (_, i) => {
    const v = Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.8));
    return palette[Math.floor(v * palette.length)];
  });
  return (
    <svg {...baseProps} viewBox="0 0 260 210" className={className}>
      <rect x="15" y="15" width="230" height="180" rx="6" fill="#faf8f3" stroke="#0f766e" strokeOpacity="0.2" strokeWidth="1" />
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const idx = r * cols + c;
          return (
            <rect
              key={`${r}-${c}`}
              x={25 + c * 21}
              y={25 + r * 20}
              width={19}
              height={18}
              rx={2}
              fill={cells[idx]}
              fillOpacity={0.3 + (idx % 5) * 0.14}
              className="cell-fade"
              style={{ animationDelay: `${idx * 0.03}s` } as CSSProperties}
            />
          );
        })
      )}
      {/* dendrogram left */}
      <g stroke="#0d4f4a" strokeOpacity="0.3" strokeWidth="1" fill="none">
        <path d="M8 35 L 15 35 M 8 75 L 15 75 M 8 55 L 8 35 M 8 55 L 8 75 M 8 55 L 15 55" />
      </g>
    </svg>
  );
}

/* ---------- T-cell ---------- */
export function TCellFigure({ className = '' }: { className?: string }) {
  return (
    <svg {...baseProps} viewBox="0 0 200 200" className={className}>
      <defs>
        <radialGradient id="tcell-grad" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#0f766e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0d4f4a" stopOpacity="0.3" />
        </radialGradient>
      </defs>
      {/* membrane ripples */}
      <circle cx="100" cy="100" r="72" fill="none" stroke="#0f766e" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="3 3" className="spin-slow" style={{ transformOrigin: '100px 100px' } as CSSProperties} />
      <circle cx="100" cy="100" r="60" fill="url(#tcell-grad)" stroke="#0f766e" strokeWidth="2" />
      {/* receptors */}
      <g stroke="#0d4f4a" strokeWidth="2.5" strokeLinecap="round">
        <line x1="100" y1="40" x2="100" y2="28" />
        <line x1="155" y1="70" x2="166" y2="62" />
        <line x1="160" y1="120" x2="172" y2="126" />
        <line x1="120" y1="160" x2="126" y2="172" />
        <line x1="55" y1="145" x2="45" y2="154" />
        <line x1="40" y1="90" x2="28" y2="86" />
      </g>
      <g fill="#0d4f4a">
        <circle cx="100" cy="26" r="4" />
        <circle cx="168" cy="61" r="4" />
        <circle cx="174" cy="127" r="4" />
        <circle cx="127" cy="174" r="4" />
        <circle cx="44" cy="156" r="4" />
        <circle cx="26" cy="85" r="4" />
      </g>
      {/* nucleus */}
      <circle cx="100" cy="100" r="26" fill="#0d4f4a" fillOpacity="0.7" />
      <text x="100" y="104" fontSize="11" fill="#5eead4" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">T</text>
    </svg>
  );
}

/* ---------- Teaching: chalkboard + code ---------- */
export function TeachingFigure({ className = '' }: { className?: string }) {
  return (
    <svg {...baseProps} viewBox="0 0 260 200" className={className}>
      {/* board */}
      <rect x="20" y="20" width="160" height="110" rx="6" fill="#0d4f4a" fillOpacity="0.92" />
      <rect x="16" y="16" width="168" height="118" rx="8" fill="none" stroke="#0f766e" strokeWidth="2" />
      {/* code lines */}
      <g fontFamily="monospace" fontSize="9" fill="#5eead4">
        <text x="32" y="42">library(DESeq2)</text>
        <text x="32" y="58" fillOpacity="0.7">dds &lt;- DESeqDataSet(</text>
        <text x="44" y="72" fillOpacity="0.6">countData, design</text>
        <text x="32" y="86" fillOpacity="0.7">)</text>
        <text x="32" y="104" fill="#a7f3d0">results(dds)</text>
      </g>
      {/* chalk */}
      <rect x="186" y="126" width="26" height="5" rx="2" fill="#0f766e" />
      <rect x="186" y="126" width="10" height="5" rx="2" fill="#5eead4" />

      {/* students dots */}
      <g fill="#0d4f4a" fillOpacity="0.5">
        <circle cx="60" cy="165" r="8" />
        <circle cx="100" cy="170" r="9" />
        <circle cx="140" cy="165" r="8" />
        <circle cx="190" cy="168" r="7" />
      </g>
      <g fill="#0f766e" fillOpacity="0.4">
        <rect x="48" y="175" width="24" height="14" rx="4" />
        <rect x="88" y="180" width="24" height="14" rx="4" />
        <rect x="128" y="175" width="24" height="14" rx="4" />
        <rect x="180" y="178" width="20" height="14" rx="4" />
      </g>
    </svg>
  );
}

/* ---------- Outreach: megaphone / wave ---------- */
export function OutreachFigure({ className = '' }: { className?: string }) {
  return (
    <svg {...baseProps} viewBox="0 0 260 200" className={className}>
      {/* sound waves */}
      <g fill="none" stroke="#5eead4" strokeWidth="2.5" strokeLinecap="round" className="wave-pulse">
        <path d="M170 100 Q 185 80, 170 60" strokeOpacity="0.7" />
        <path d="M185 100 Q 208 75, 185 50" strokeOpacity="0.5" style={{ animationDelay: '0.3s' } as CSSProperties} />
        <path d="M200 100 Q 230 70, 200 40" strokeOpacity="0.35" style={{ animationDelay: '0.6s' } as CSSProperties} />
      </g>
      {/* megaphone */}
      <g fill="#0d4f4a" fillOpacity="0.8">
        <path d="M30 90 L 120 70 L 120 130 L 30 110 Z" />
      </g>
      <rect x="120" y="70" width="50" height="60" rx="4" fill="#0f766e" fillOpacity="0.7" />
      <rect x="120" y="70" width="12" height="60" fill="#5eead4" fillOpacity="0.5" />
      {/* handle */}
      <rect x="18" y="92" width="14" height="16" rx="3" fill="#0d4f4a" />
      {/* people receiving */}
      <g fill="#0d4f4a" fillOpacity="0.5">
        <circle cx="150" cy="170" r="7" />
        <circle cx="180" cy="175" r="6" />
        <circle cx="210" cy="170" r="7" />
        <circle cx="235" cy="175" r="6" />
      </g>
    </svg>
  );
}

/* ---------- DNA strand ---------- */
export function DnaFigure({ className = '' }: { className?: string }) {
  return (
    <svg {...baseProps} viewBox="0 0 120 240" className={className}>
      <g className="helix-rotate" style={{ transformOrigin: '60px 120px' } as CSSProperties}>
        <path d="M30 10 Q 90 60, 30 120 Q -30 180, 30 230" fill="none" stroke="#0f766e" strokeWidth="2.5" strokeOpacity="0.6" />
        <path d="M90 10 Q 30 60, 90 120 Q 150 180, 90 230" fill="none" stroke="#0d4f4a" strokeWidth="2.5" strokeOpacity="0.6" />
        {Array.from({ length: 9 }).map((_, i) => {
          const y = 20 + i * 25;
          const left = 30 + Math.sin(i * 0.7) * 25;
          const right = 90 - Math.sin(i * 0.7) * 25;
          return <line key={i} x1={left} y1={y} x2={right} y2={y} stroke="#5eead4" strokeWidth="2" strokeOpacity="0.5" />;
        })}
      </g>
    </svg>
  );
}
