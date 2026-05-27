'use client';

import { useEffect, useRef } from 'react';

interface WaveformDividerProps {
  amplitude?: number;
  frequency?: number;
  speed?: number;
  className?: string;
}

export default function WaveformDivider({
  amplitude = 2,
  frequency = 0.022,
  speed = 0.025,
  className = '',
}: WaveformDividerProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;

    let t = 0;
    let width = svg.getBoundingClientRect().width;
    const height = amplitude * 2 + 1;

    const buildPath = () => {
      if (width === 0) return '';
      const steps = Math.max(40, Math.floor(width / 4));
      const cy = height / 2;
      let d = `M 0 ${cy}`;
      for (let i = 1; i <= steps; i++) {
        const x = (i / steps) * width;
        const y = cy + Math.sin(x * frequency + t) * amplitude;
        d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
      }
      return d;
    };

    const animate = () => {
      t += speed;
      path.setAttribute('d', buildPath());
      rafRef.current = requestAnimationFrame(animate);
    };

    const resize = () => {
      width = svg.getBoundingClientRect().width;
    };

    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [amplitude, frequency, speed]);

  const height = amplitude * 2 + 1;

  return (
    <svg
      ref={svgRef}
      className={`block w-full ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d=""
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.55"
      />
    </svg>
  );
}
