'use client';

/**
 * HexImageCluster
 * ─────────────────────────────────────────────────────────────────────────────
 * Takes ONE image and slices it across 7 hexagonal cells arranged in a
 * honeycomb flower (1 centre + 6 ring). Each cell shows a different region
 * of the same image — like a mosaic broken into a hive.
 *
 * The trick: each <image> element is positioned so that the full image
 * is "painted" over the entire canvas, then each cell clips its own hex
 * window into that image. The result is one image, seamlessly split across
 * 7 touching hexagons.
 *
 * Props:
 *   src      – single image URL  (required)
 *   alt      – alt text
 *   cellSize – diameter of one hex cell in px  (default 130)
 *   className
 */

import { useId } from 'react';

interface HexImageClusterProps {
  src: string;
  alt?: string;
  cellSize?: number;
  className?: string;
}

/** Axial → pixel for pointy-top hexagons */
function buildPositions(R: number) {
  const axial: [number, number][] = [
    [ 0,  0],  // 0 centre
    [ 1,  0],  // 1 right
    [ 0,  1],  // 2 lower-right
    [-1,  1],  // 3 lower-left
    [-1,  0],  // 4 left
    [ 0, -1],  // 5 upper-left
    [ 1, -1],  // 6 upper-right
  ];
  return axial.map(([q, r]) => ({
    cx: Math.sqrt(3) * R * (q + r / 2),
    cy: R * 1.5 * r,
  }));
}

/** Pointy-top hex polygon string centred at (cx,cy), radius R minus gap */
function hexPoints(cx: number, cy: number, R: number, gap = 3): string {
  const r = R - gap;
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(' ');
}

export function HexImageCluster({
  src,
  alt = 'Service image',
  cellSize = 180,
  className = '',
}: HexImageClusterProps) {
  const uid = useId().replace(/:/g, '');
  const R   = cellSize / 2;
  const raw = buildPositions(R);

  // Canvas bounding box
  const pad  = 16;
  const minX = Math.min(...raw.map(p => p.cx)) - R - pad;
  const minY = Math.min(...raw.map(p => p.cy)) - R - pad;
  const maxX = Math.max(...raw.map(p => p.cx)) + R + pad;
  const maxY = Math.max(...raw.map(p => p.cy)) + R + pad;
  const W    = maxX - minX;
  const H    = maxY - minY;

  // Shift positions to fit inside viewBox
  const pos = raw.map(p => ({ cx: p.cx - minX, cy: p.cy - minY }));

  return (
    <div className={`relative ${className}`} style={{ width: W, height: H, maxWidth: '100%' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width={W}
        height={H}
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* One clipPath per hex cell */}
          {pos.map((p, i) => (
            
            <clipPath key={i} id={`${uid}_clip${i}`}>
              <polygon points={hexPoints(p.cx, p.cy, R, 4)} />
            </clipPath>
          ))
          }

          {/* Glow filter — strong for centre */}
          <filter id={`${uid}_glowLg`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow filter — soft for ring */}
          <filter id={`${uid}_glowSm`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Shine highlight (top-left glint on each cell) */}
          <linearGradient id={`${uid}_shine`} x1="0%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%"   stopColor="white" stopOpacity="0.12" />
            <stop offset="55%"  stopColor="white" stopOpacity="0.03" />
            <stop offset="100%" stopColor="white" stopOpacity="0"    />
          </linearGradient>

          {/* Dark vignette tint for ring cells */}
          <radialGradient id={`${uid}_vignette`} cx="50%" cy="50%" r="50%">
            <stop offset="60%"  stopColor="black" stopOpacity="0"    />
            <stop offset="100%" stopColor="black" stopOpacity="0.45" />
          </radialGradient>
        </defs>

        {pos.map((p, i) => {
            
          const isCentre  = i === 0;
          const scale = isCentre ? 1.1 : 1;
          const clipId    = `${uid}_clip${i}`;
         const scaledR = R * scale;

const ringPts = hexPoints(p.cx, p.cy, scaledR, 1);
const cellPts = hexPoints(p.cx, p.cy, scaledR, 4);
   // inner clipped cell
          const strokeCol = isCentre ? '#ff1a2e' : '#8c0415';
          const glowF     = isCentre ? `url(#${uid}_glowLg)` : `url(#${uid}_glowSm)`;

          return (
            <g key={i}>
              {/* Glow halo */}
              <polygon
                points={ringPts}
                fill="none"
                stroke={strokeCol}
                strokeWidth={isCentre ? 14 : 7}
                opacity={isCentre ? 0.5 : 0.22}
                filter={glowF}
              />

              {/* Clipped image — full canvas size so every cell shows
                  a DIFFERENT region of the same image seamlessly */}
              <g clipPath={`url(#${clipId})`}>
                <image
  href={src}
  x={-W * 0.025}
  y={-H * 0.025}
  width={W * 1.1}
  height={H * 1.1}
  preserveAspectRatio="xMidYMid meet"
/>



                {/* Brand tint — slightly stronger on ring to give depth */}
                <polygon
                  points={cellPts}
                  fill={isCentre ? 'rgba(191,6,20,0.08)' : 'rgba(0,0,0,0.25)'}
                />

                {/* Shine glint */}
                <polygon
                  points={cellPts}
                  fill={`url(#${uid}_shine)`}
                />

                {/* Edge vignette */}
                <polygon
                  points={cellPts}
                  fill={`url(#${uid}_vignette)`}
                />
              </g>

              {/* Cell border */}
              <polygon
                points={cellPts}
                fill="none"
                stroke={strokeCol}
                strokeWidth={isCentre ? 2 : 1}
                opacity={isCentre ? 1 : 0.6}
              />

              {/* Pulse ring on centre cell only */}
              {isCentre && (
                <polygon
                  points={ringPts}
                  fill="none"
                  stroke="#ff1a2e"
                  strokeWidth="2"
                  opacity="0"
                >
                  <animate attributeName="opacity"      values="0;0.65;0" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="stroke-width" values="2;6;2"    dur="3s" repeatCount="indefinite" />
                </polygon>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}