'use client';

import { useEffect, useRef } from 'react';

const SIZE = 90;
const POINTS = 700;

export default function GenerativeMark({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    let t = 0;

    const animate = () => {
      t += 0.0035;
      ctx.clearRect(0, 0, SIZE, SIZE);

      const isDark = document.documentElement.classList.contains('dark');
      ctx.strokeStyle = isDark ? '#FFFFFF' : '#2A09F3';
      ctx.lineWidth = 0.55;
      ctx.globalAlpha = 0.45;

      const a = 3 + Math.sin(t * 0.6) * 0.7;
      const b = 5 + Math.cos(t * 0.4) * 0.7;
      const phaseShift = t;

      const cx = SIZE / 2;
      const cy = SIZE / 2;
      const r = SIZE / 2 - 10;

      ctx.beginPath();
      for (let i = 0; i <= POINTS; i++) {
        const u = (i / POINTS) * Math.PI * 2;
        const x = cx + r * Math.sin(a * u + phaseShift);
        const y = cy + r * Math.sin(b * u);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: SIZE, height: SIZE }}
      className={`block ${className}`}
      aria-hidden="true"
    />
  );
}
