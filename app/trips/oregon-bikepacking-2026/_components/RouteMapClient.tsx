'use client';

import dynamic from 'next/dynamic';
import type RouteMapType from './RouteMap';
import type { ComponentProps } from 'react';

const RouteMap = dynamic(() => import('./RouteMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[220px] sm:h-[270px] bg-[#f0ede8] dark:bg-[#0c0510] border border-[#2A09F3]/20 dark:border-white/20 flex items-center justify-center">
      <span className="font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.22em] uppercase text-[#2A09F3]/30 dark:text-white/25">
        Loading
      </span>
    </div>
  ),
});

export default function RouteMapClient(props: ComponentProps<typeof RouteMapType>) {
  return <RouteMap {...props} />;
}
