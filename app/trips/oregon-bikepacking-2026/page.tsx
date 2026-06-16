import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInSection from '../../components/FadeInSection';
import ThemeToggle from '../../components/ThemeToggle';
import RouteMapClient from './_components/RouteMapClient';

export const metadata: Metadata = {
  title: 'Oregon Bikepacking Routes — Grant Eadie',
  description:
    'Three gravel bikepacking routes in western Oregon: Corvallis to Coast, CheddarHead, and North Trask. Researched for a 3-day trip with friends.',
};

// ─── Data ────────────────────────────────────────────────────────────────────

const ROUTES = [
  {
    num: '01',
    name: 'Corvallis to Coast',
    sub: 'Corvallis → Ona Beach, Oregon',
    tags: ['Point-to-Point', 'Moderate', 'Permit Required'],
    map: {
      id: 'map-c2c',
      center: [44.57, -123.69] as [number, number],
      zoom: 10,
      trackUrl: '/trips/oregon-bikepacking-2026/c2c.json',
      startPt: [44.56763, -123.31337] as [number, number],
      endPt: [44.62444, -124.06007] as [number, number],
      startLabel: 'Start: Corvallis',
      endLabel: 'End: Ona Beach',
    },
    stats: [
      { label: 'Distance', value: '65 mi' },
      { label: 'Elevation', value: '5,500 ft' },
      { label: 'Gravel', value: '~55%' },
      { label: 'Duration', value: '2–3 days' },
      { label: 'Season', value: 'May–Oct' },
    ],
    desc: 'The definitive western Oregon gravel route. Out of Corvallis on a flat multi-use path, then a long climb into the Coast Range on old forest roads and gated timber company land. A sweet descent on Sugar Bowl Creek trail before the route drops into the coastal valley and finishes at Ona Beach south of Newport. The natural overnight split is Big Elk Campground around mile 33. A 4-day, 157-mile loop variant returns from Yachats through the Five Rivers valley.',
    details: [
      {
        label: 'Camping',
        items: [
          'Marys River Grange (mi ~8) — $5 donation, advance notice required',
          'Big Elk Campground (mi ~33) — Siuslaw NF, pit toilets, well water, $5–10',
          'South Beach State Park (end) — hiker/biker sites near Newport',
        ],
      },
      {
        label: 'Logistics',
        items: [
          'Starker Forests permit — free, call 541-929-2477 (M–F)',
          'Emery Investments permit — free, email license photo in advance',
          'Sugar Bowl Creek singletrack closed Oct 16 – May 15',
          'Return: NW Connector bus Newport → Corvallis, or car shuttle',
        ],
      },
    ],
    links: [
      { label: 'Dirty Freehub + GPX', href: 'https://dirtyfreehub.org/routes/oregon/c2c/', primary: true },
      { label: 'c2ctrail.org', href: 'https://c2ctrail.org/bicycle-routes/' },
      { label: 'Trip report', href: 'https://www.bikeforums.net/touring/1254113-trip-report-bikepacking-c2c.html' },
    ],
  },
  {
    num: '02',
    name: 'CheddarHead',
    sub: 'Tillamook State Forest, Oregon',
    tags: ['Loop', 'Very Demanding', 'No Permits'],
    map: {
      id: 'map-cheddar',
      center: [45.53, -123.64] as [number, number],
      zoom: 10,
      trackUrl: '/trips/oregon-bikepacking-2026/cheddar.json',
      startPt: [45.4821, -123.84355] as [number, number],
      startLabel: 'Start / Finish: Tillamook',
    },
    stats: [
      { label: 'Distance', value: '90 mi' },
      { label: 'Elevation', value: '10,900 ft' },
      { label: 'Gravel', value: '~60%' },
      { label: 'Duration', value: '3 days' },
      { label: 'Season', value: 'May–Oct' },
    ],
    desc: 'The hardest route on this list, and the one with the cleanest 3-day structure. Named campgrounds are baked into the itinerary and the loop requires no shuttle. The route digs deep into Tillamook State Forest through logging roads, ridge climbs, and the Wilson River Trail. First serious climb hits around mile 15: Hembre Ridge, 4.5 miles at 8% sustained. Jordan Creek CG is night one, Jones Creek CG is night two. Day three brings Cedar Butte and the Kilchis River Road descent back to Tillamook.',
    details: [
      {
        label: 'Camping',
        items: [
          'Jordan Creek CG (mi ~30, Night 1) — Tillamook State Forest, no fee',
          'Jones Creek CG (mi ~55, Night 2) — near Tillamook Forest Center, no fee',
        ],
      },
      {
        label: 'Logistics',
        items: [
          'True loop — starts and ends in Tillamook, no shuttle needed',
          'Yield to logging trucks on road sections, especially weekday mornings',
          '50mm+ tires recommended — do not ride wet (roots, mud on singletrack)',
          'PLB strongly encouraged — extremely remote in the middle section',
        ],
      },
    ],
    links: [
      { label: 'Dirty Freehub + GPX', href: 'https://dirtyfreehub.org/routes/oregon/cheddarhead/', primary: true },
    ],
  },
  {
    num: '03',
    name: 'North Trask',
    sub: 'Hillsboro → Tillamook, Oregon',
    tags: ['Point-to-Point', 'Moderate', 'MAX Access'],
    map: {
      id: 'map-trask',
      center: [45.49, -123.42] as [number, number],
      zoom: 10,
      trackUrl: '/trips/oregon-bikepacking-2026/trask.json',
      startPt: [45.52263, -122.99119] as [number, number],
      endPt: [45.45562, -123.84209] as [number, number],
      startLabel: 'Start: Hillsboro MAX',
      endLabel: 'End: Tillamook',
    },
    stats: [
      { label: 'Distance', value: '64 mi' },
      { label: 'Elevation', value: '~4,200 ft' },
      { label: 'Gravel', value: '~65%' },
      { label: 'Duration', value: '1–2 days' },
      { label: 'Season', value: 'Apr–Oct' },
    ],
    desc: 'The most Portland-accessible route on this list. Catch the MAX Blue Line to Hillsboro and ride west into the Coast Range without a car at the trailhead. Steep, loose gravel climbs through clear-cuts give way to rolling logging roads through the Trask River drainage before dropping into Tillamook. The OB Edition minimizes pavement throughout. Night one at Trask River County Campground along the route. The most frequently ridden of the three, with the most current trip reports.',
    details: [
      {
        label: 'Camping',
        items: [
          'Trask River County CG — confirmed overnight along route',
          'Tillamook (end) — motels and campgrounds in town',
        ],
      },
      {
        label: 'Logistics',
        items: [
          'Start via MAX Blue Line from Portland — no car required at trailhead',
          'Return: Pacific Transit bus Tillamook → Portland (or car shuttle)',
          'No permits required throughout',
          'Weekday mornings: active logging truck traffic on road sections',
        ],
      },
    ],
    links: [
      { label: 'RideWithGPS Track', href: 'https://ridewithgps.com/routes/7600381', primary: true },
      { label: 'Trip report', href: 'https://familyride.us/2019/06/20/riding-to-the-oregon-coast-via-the-trask-trail/' },
      { label: 'BikePortland', href: 'https://bikeportland.org/2018/08/10/when-moms-escape-tackling-the-unpaved-trask-river-road-route-to-the-coast-287264' },
    ],
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function OregonBikepackingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#2A09F3] text-[#2A09F3] dark:text-white">
      <ThemeToggle />

      {/* ── Header ── */}
      <header className="px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 pb-12 sm:pb-20 border-b border-[#2A09F3]/15 dark:border-white/15">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/60 dark:text-white/60 mb-4 sm:mb-6">
              ── Western Oregon &nbsp;&middot;&nbsp; Gravel Bikepacking &nbsp;&middot;&nbsp; September – October 2026
            </p>
          </FadeInSection>
          <FadeInSection delay={150}>
            <h1 className="font-[family-name:var(--font-loram)] text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.97] tracking-tight">
              Three Routes for<br className="hidden sm:block" /> the Coast Range
            </h1>
          </FadeInSection>
          <FadeInSection delay={280}>
            <p className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#2A09F3]/60 dark:text-white/60 mt-6 sm:mt-8 max-w-lg leading-relaxed">
              Researched for a fall 2026 trip. Four to five athletic cyclists, gravel bikes, 3-day window. All routes are west of the Cascades.
            </p>
          </FadeInSection>
        </div>
      </header>

      {/* ── Routes ── */}
      {ROUTES.map((route) => (
        <article
          key={route.num}
          className="px-5 sm:px-8 lg:px-12 py-14 sm:py-24 border-b border-[#2A09F3]/15 dark:border-white/15 last:border-b-0"
        >
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              {/* Kicker + name */}
              <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/30 dark:text-white/30 mb-2">
                ── {route.num} of 03
              </p>
              <h2 className="font-[family-name:var(--font-loram)] text-[2rem] sm:text-4xl md:text-5xl leading-[1.0] tracking-tight mb-1">
                {route.name}
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#2A09F3]/60 dark:text-white/60 mb-4 sm:mb-5">
                {route.sub}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5 sm:mb-7">
                {route.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-dm-sans)] text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase px-2.5 py-1 border border-[#2A09F3]/30 dark:border-white/30 text-[#2A09F3]/75 dark:text-white/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Map */}
              <RouteMapClient
                id={route.map.id}
                center={route.map.center}
                zoom={route.map.zoom}
                trackUrl={route.map.trackUrl}
                startPt={route.map.startPt}
                endPt={'endPt' in route.map ? route.map.endPt : undefined}
                startLabel={route.map.startLabel}
                endLabel={'endLabel' in route.map ? route.map.endLabel : undefined}
              />

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-5 border-l border-t border-[#2A09F3]/15 dark:border-white/15 mb-7 sm:mb-10">
                {route.stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`border-r border-b border-[#2A09F3]/15 dark:border-white/15 px-4 py-3 sm:py-4 ${
                      i === 4 ? 'col-span-2 sm:col-span-1' : ''
                    }`}
                  >
                    <dt className="font-[family-name:var(--font-dm-sans)] text-[9px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/55 dark:text-white/55 block mb-1">
                      {stat.label}
                    </dt>
                    <dd className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base leading-[1.8] text-[#2A09F3]/85 dark:text-white/85 mb-8 sm:mb-10 max-w-[680px]">
                {route.desc}
              </p>

              {/* Label grid — camping + logistics */}
              <div className="border-t border-[#2A09F3]/15 dark:border-white/15 mb-7 sm:mb-10">
                {route.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="grid grid-cols-1 sm:grid-cols-[140px_1fr] border-b border-[#2A09F3]/15 dark:border-white/15 py-5 sm:py-6 gap-2 sm:gap-0"
                  >
                    <dt className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/55 dark:text-white/55 sm:pt-0.5">
                      ── {detail.label}
                    </dt>
                    <dd>
                      <ul className="space-y-2">
                        {detail.items.map((item) => (
                          <li
                            key={item}
                            className="font-[family-name:var(--font-dm-sans)] text-sm leading-[1.65] text-[#2A09F3]/80 dark:text-white/80"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2.5">
                {route.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.2em] uppercase
                      px-4 py-2.5 border transition-all duration-150 no-underline
                      ${link.primary
                        ? 'bg-[#2A09F3] text-white border-[#2A09F3] hover:bg-[#2A09F3]/85 dark:bg-white dark:text-[#2A09F3] dark:border-white dark:hover:bg-white/88'
                        : 'border-[#2A09F3]/35 text-[#2A09F3] hover:border-[#2A09F3]/70 hover:bg-[#2A09F3]/5 dark:border-white/30 dark:text-white dark:hover:border-white/70 dark:hover:bg-white/8'
                      }
                    `}
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </FadeInSection>
          </div>
        </article>
      ))}

      {/* ── Footer ── */}
      <footer className="px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-t border-[#2A09F3]/15 dark:border-white/15">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#2A09F3]/30 dark:text-white/30">
            ── Sources: Dirty Freehub, c2ctrail.org, RideWithGPS, BikePortland
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
  );
}
