'use client';

import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';

function useIsDark() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

interface RouteMapProps {
  id: string;
  center: [number, number];
  zoom: number;
  trackUrl: string;
  startPt: [number, number];
  endPt?: [number, number];
  startLabel: string;
  endLabel?: string;
}

export default function RouteMap({
  id,
  center,
  zoom,
  trackUrl,
  startPt,
  endPt,
  startLabel,
  endLabel,
}: RouteMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<ReturnType<typeof import('leaflet')['map']> | null>(null);
  const [trackLoaded, setTrackLoaded] = useState(false);
  const isDark = useIsDark();

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up any existing map before re-creating for theme change
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
      setTrackLoaded(false);
    }

    const container = containerRef.current;

    import('leaflet').then(async (mod) => {
      const L = mod.default;
      if (!container) return;

      const TILE_DARK = 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png';
      const TILE_LIGHT = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png';
      const ATTR = '&copy; OpenStreetMap &copy; CARTO';

      const map = L.map(container, { scrollWheelZoom: false, center, zoom });
      mapRef.current = map;

      L.tileLayer(isDark ? TILE_DARK : TILE_LIGHT, {
        attribution: ATTR,
        maxZoom: 19,
      }).addTo(map);

      if (isDark) {
        // Blue overlay between tiles and route line in dark mode
        map.createPane('blueOverlay');
        const overlayPane = map.getPane('blueOverlay')!;
        overlayPane.style.zIndex = '250';
        overlayPane.style.pointerEvents = 'none';

        L.rectangle(
          [[-90, -180], [90, 180]] as [[number, number], [number, number]],
          {
            pane: 'blueOverlay',
            stroke: false,
            fillColor: '#2A09F3',
            fillOpacity: 0.48,
            interactive: false,
          }
        ).addTo(map);
      }

      try {
        const res = await fetch(trackUrl);
        const track: [number, number][] = await res.json();
        L.polyline(track, {
          color: isDark ? '#ffffff' : '#2A09F3',
          weight: isDark ? 2.5 : 2,
          opacity: 0.9,
        }).addTo(map);
        setTrackLoaded(true);
      } catch {
        setTrackLoaded(true);
      }

      const dotOpts = {
        radius: 5,
        color: isDark ? '#2A09F3' : '#ffffff',
        weight: 1.5,
        fillColor: isDark ? '#ffffff' : '#2A09F3',
        fillOpacity: 1,
        opacity: 1,
      };

      L.circleMarker(startPt, dotOpts)
        .addTo(map)
        .bindTooltip(startLabel, { direction: 'top' });

      if (endPt && endLabel) {
        L.circleMarker(endPt, dotOpts)
          .addTo(map)
          .bindTooltip(endLabel, { direction: 'top' });
      }
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  return (
    <div className="relative w-full h-[220px] sm:h-[270px] overflow-hidden border border-[#2A09F3]/20 dark:border-white/20">
      <div
        ref={containerRef}
        id={id}
        className="w-full h-full bg-[#f0ede8] dark:bg-[#0c0510]"
      />
      {!trackLoaded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.22em] uppercase text-[#2A09F3]/30 dark:text-white/25">
            Loading
          </span>
        </div>
      )}
    </div>
  );
}
