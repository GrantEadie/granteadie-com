import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInSection from '../components/FadeInSection';
import ThemeToggle from '../components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Trips — Grant Eadie',
  description: 'Personal logs and route research. Bikepacking and backpacking in the Pacific Northwest and beyond.',
};

// ─── Scattered shapes ────────────────────────────────────────────────────────

const SCATTERED_SHAPES = [
  { src: '/shapes/shape-01.svg', size: 96,  top: '4%',  left: '3%',   opacity: 0.07, rotate: 0   },
  { src: '/shapes/shape-20.svg', size: 72,  top: '8%',  left: '82%',  opacity: 0.09, rotate: 12  },
  { src: '/shapes/shape-07.svg', size: 110, top: '18%', left: '55%',  opacity: 0.05, rotate: -8  },
  { src: '/shapes/shape-03.svg', size: 64,  top: '32%', left: '6%',   opacity: 0.08, rotate: 0   },
  { src: '/shapes/shape-09.svg', size: 80,  top: '28%', left: '90%',  opacity: 0.07, rotate: 6   },
  { src: '/shapes/shape-12.svg', size: 56,  top: '50%', left: '1%',   opacity: 0.10, rotate: -4  },
  { src: '/shapes/shape-14.svg', size: 88,  top: '55%', left: '75%',  opacity: 0.07, rotate: 15  },
  { src: '/shapes/shape-19.svg', size: 48,  top: '65%', left: '48%',  opacity: 0.09, rotate: 0   },
  { src: '/shapes/shape-02.svg', size: 100, top: '72%', left: '10%',  opacity: 0.06, rotate: -10 },
  { src: '/shapes/shape-11.svg', size: 60,  top: '80%', left: '88%',  opacity: 0.08, rotate: 8   },
  { src: '/shapes/shape-08.svg', size: 76,  top: '88%', left: '35%',  opacity: 0.07, rotate: -5  },
  { src: '/shapes/shape-17.svg', size: 52,  top: '14%', left: '28%',  opacity: 0.08, rotate: 20  },
];

// ─── Trip cards ───────────────────────────────────────────────────────────────

const TRIPS = [
  {
    num: '01',
    icon: '/shapes/shape-15.svg',
    title: 'Oregon Bikepacking',
    sub: 'Western Oregon + Beyond',
    dates: 'September – October 2026',
    desc: 'Seven gravel bikepacking routes researched for a fall trip. Three core western Oregon options plus four wider-radius alternatives including central Oregon, NorCal, and Idaho.',
    count: '7 routes',
    href: '/trips/oregon-bikepacking-2026',
  },
  {
    num: '02',
    icon: '/shapes/shape-05.svg',
    title: 'Group Backpacking',
    sub: 'Washington · Oregon · British Columbia',
    dates: 'August – October 2026',
    desc: 'Six backpacking options for a 2–3 night trip with five people. High alpine, remote lakes, and coastal options. September consensus across nearly all of them.',
    count: '6 options',
    href: '/trips/group-backpacking-2026',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TripsPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#2A09F3] text-[#2A09F3] dark:text-white overflow-hidden">
      <ThemeToggle />

      {/* ── Scattered background shapes ── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        {SCATTERED_SHAPES.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt=""
            width={s.size}
            height={s.size}
            className="shape-icon absolute"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              opacity: s.opacity,
              transform: s.rotate ? `rotate(${s.rotate}deg)` : undefined,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10">

        {/* ── Header ── */}
        <header className="px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 pb-14 sm:pb-24 border-b border-[#2A09F3]/15 dark:border-white/15">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <p className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/50 dark:text-white/50 mb-5 sm:mb-7">
                ── Personal logs and route research
              </p>
            </FadeInSection>
            <FadeInSection delay={120}>
              <h1 className="font-[family-name:var(--font-loram)] text-[4rem] sm:text-7xl md:text-8xl lg:text-9xl leading-[0.93] tracking-tight">
                Trips.
              </h1>
            </FadeInSection>
            <FadeInSection delay={240}>
              <p className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#2A09F3]/55 dark:text-white/55 mt-7 sm:mt-9 max-w-sm leading-relaxed">
                Pacific Northwest, mostly. Backpacking and biking. Research collected before trips, notes added after.
              </p>
            </FadeInSection>
          </div>
        </header>

        {/* ── Trip cards ── */}
        <main>
          {TRIPS.map((trip, i) => (
            <Link
              key={trip.num}
              href={trip.href}
              className="group block px-5 sm:px-8 lg:px-12 py-12 sm:py-20 border-b border-[#2A09F3]/15 dark:border-white/15 no-underline transition-colors duration-150 hover:bg-[#2A09F3]/[0.03] dark:hover:bg-white/[0.03]"
            >
              <div className="max-w-5xl mx-auto">
                <FadeInSection delay={i * 80}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-12">

                    {/* ── Left: text ── */}
                    <div className="flex-1">
                      <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/30 dark:text-white/30 mb-3">
                        ── {trip.num}
                      </p>
                      <h2 className="font-[family-name:var(--font-loram)] text-[2rem] sm:text-4xl md:text-5xl leading-[1.0] tracking-tight mb-1 group-hover:opacity-80 transition-opacity">
                        {trip.title}
                      </h2>
                      <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#2A09F3]/55 dark:text-white/55 mb-1">
                        {trip.sub}
                      </p>
                      <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.18em] uppercase text-[#2A09F3]/35 dark:text-white/35 mb-6">
                        {trip.dates}
                      </p>
                      <p className="font-[family-name:var(--font-dm-sans)] text-sm leading-[1.75] text-[#2A09F3]/70 dark:text-white/70 max-w-md mb-7">
                        {trip.desc}
                      </p>
                      <div className="flex items-center gap-5">
                        <span className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.2em] uppercase px-4 py-2.5 border border-[#2A09F3]/35 dark:border-white/30 text-[#2A09F3] dark:text-white group-hover:border-[#2A09F3]/70 dark:group-hover:border-white/70 transition-colors">
                          See research →
                        </span>
                        <span className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.18em] uppercase text-[#2A09F3]/30 dark:text-white/30">
                          {trip.count}
                        </span>
                      </div>
                    </div>

                    {/* ── Right: icon ── */}
                    <div className="flex-shrink-0 sm:pt-2">
                      <img
                        src={trip.icon}
                        alt=""
                        width={120}
                        height={120}
                        className="shape-icon opacity-60 group-hover:opacity-90 transition-opacity"
                      />
                    </div>

                  </div>
                </FadeInSection>
              </div>
            </Link>
          ))}
        </main>

        {/* ── Gear ── */}
        <section>
          <div className="px-5 sm:px-8 lg:px-12 py-8 sm:py-10 border-b border-[#2A09F3]/15 dark:border-white/15">
            <div className="max-w-5xl mx-auto">
              <FadeInSection>
                <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/35 dark:text-white/35 mb-5">
                  ── Gear guides
                </p>
              </FadeInSection>
            </div>
          </div>
          <Link
            href="/trips/bikepacking-gear"
            className="group block px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-b border-[#2A09F3]/15 dark:border-white/15 no-underline transition-colors duration-150 hover:bg-[#2A09F3]/[0.03] dark:hover:bg-white/[0.03]"
          >
            <div className="max-w-5xl mx-auto">
              <FadeInSection>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <div>
                    <h2 className="font-[family-name:var(--font-loram)] text-[1.75rem] sm:text-3xl md:text-4xl leading-[1.0] tracking-tight mb-1 group-hover:opacity-80 transition-opacity">
                      Bikepacking Bags
                    </h2>
                    <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#2A09F3]/55 dark:text-white/55">
                      Four-bag system, three builds under $500 — Primos Super Dame, 5-day trip
                    </p>
                  </div>
                  <span className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.2em] uppercase px-4 py-2.5 border border-[#2A09F3]/35 dark:border-white/30 text-[#2A09F3] dark:text-white group-hover:border-[#2A09F3]/70 dark:group-hover:border-white/70 transition-colors self-start sm:self-auto flex-shrink-0">
                    See gear guide →
                  </span>
                </div>
              </FadeInSection>
            </div>
          </Link>
        </section>

        {/* ── Footer ── */}
        <footer className="px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#2A09F3]/25 dark:text-white/25">
              ── granteadie.com/trips
            </span>
            <Link
              href="/"
              className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#2A09F3]/40 dark:text-white/40 hover:text-[#2A09F3]/80 dark:hover:text-white/80 transition-colors no-underline"
            >
              ← granteadie.com
            </Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
