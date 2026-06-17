import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInSection from '../../components/FadeInSection';
import ThemeToggle from '../../components/ThemeToggle';
import RouteMapClient from './_components/RouteMapClient';

export const metadata: Metadata = {
  title: 'Oregon Bikepacking Routes — Grant Eadie',
  description:
    'Seven gravel bikepacking routes researched for a fall 2026 trip — three core western Oregon options plus four wider-radius alternatives including central Oregon, NorCal, and Idaho.',
};

// ─── Types ───────────────────────────────────────────────────────────────────

interface RouteMap {
  id: string;
  center: [number, number];
  zoom: number;
  trackUrl: string;
  startPt: [number, number];
  endPt?: [number, number];
  startLabel: string;
  endLabel?: string;
}

interface Route {
  num: string;
  name: string;
  sub: string;
  tags: string[];
  map: RouteMap;
  stats: { label: string; value: string }[];
  desc: string;
  details: { label: string; items: string[] }[];
  links: { label: string; href: string; primary?: boolean }[];
  caveat?: string;
}

// ─── Core routes ─────────────────────────────────────────────────────────────

const CORE_ROUTES: Route[] = [
  {
    num: '01',
    name: 'Corvallis to Coast',
    sub: 'Corvallis → Ona Beach, Oregon',
    tags: ['Point-to-Point', 'Moderate', 'Permit Required'],
    map: {
      id: 'map-c2c',
      center: [44.57, -123.69],
      zoom: 10,
      trackUrl: '/trips/oregon-bikepacking-2026/c2c.json',
      startPt: [44.56763, -123.31337],
      endPt: [44.62444, -124.06007],
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
      center: [45.53, -123.64],
      zoom: 10,
      trackUrl: '/trips/oregon-bikepacking-2026/cheddar.json',
      startPt: [45.4821, -123.84355],
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
      center: [45.49, -123.42],
      zoom: 10,
      trackUrl: '/trips/oregon-bikepacking-2026/trask.json',
      startPt: [45.52263, -122.99119],
      endPt: [45.45562, -123.84209],
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
    desc: 'The most Portland-accessible route on this list. Catch the MAX Blue Line to Hillsboro and ride west into the Coast Range without a car at the trailhead. Steep, loose gravel climbs through clear-cuts give way to rolling logging roads through the Trask River drainage before dropping into Tillamook. The OB Edition minimizes pavement throughout. Night one at Trask River County Campground along the route.',
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

// ─── Extended routes ──────────────────────────────────────────────────────────

const EXTENDED_ROUTES: Route[] = [
  {
    num: '04',
    name: 'Cascade Skyline',
    sub: 'Estacada → Salem, Oregon',
    tags: ['Point-to-Point', '4 Days', 'Check Tire Width'],
    caveat: 'Route recommends 2" (50mm) minimum — right at the edge of a 40–50mm gravel build.',
    map: {
      id: 'map-skyline',
      center: [45.01, -122.38],
      zoom: 9,
      trackUrl: '/trips/oregon-bikepacking-2026/cascade_skyline.json',
      startPt: [45.2877, -122.33465],
      endPt: [44.93232, -123.02853],
      startLabel: 'Start: Estacada',
      endLabel: 'End: Salem',
    },
    stats: [
      { label: 'Distance', value: '173 mi' },
      { label: 'Elevation', value: '15,172 ft' },
      { label: 'Gravel', value: '75%' },
      { label: 'Duration', value: '4 days' },
      { label: 'Season', value: 'July–Nov' },
    ],
    desc: 'The Cascades Skyline runs south from Estacada through the heart of the northern Oregon Cascades — Timothy Lake, Olallie Lake, the Breitenbush hot springs area, and down to Salem. It stays mostly between 3,000 and 5,500 ft elevation on a mix of forest roads and logging tracks, with 25% pavement connecting the segments. Not the dramatic above-treeline exposure of the high peaks, but genuinely remote and scenic with a manageable logistics story (TriMet in, Amtrak back). The extra day versus the 3-day options is baked in at 173 miles.',
    details: [
      {
        label: 'Camping',
        items: [
          'Timothy Lake — USFS established sites, multiple campgrounds',
          'Olallie Scenic Area — dispersed camping, rustic resort option',
          'Breitenbush area — dispersed NF, hot springs nearby',
        ],
      },
      {
        label: 'Logistics',
        items: [
          'Start via TriMet to Estacada — no Sunday service',
          'End in Salem — Amtrak Cascades back to Portland (or car shuttle)',
          'Minimum 2" tires per route notes — borderline for 40mm builds',
          'Spotty cell service except near Timothy Lake and Detroit',
        ],
      },
    ],
    links: [
      { label: 'Bikepacking.com Route', href: 'https://bikepacking.com/routes/cascade-skyline/', primary: true },
    ],
  },
  {
    num: '05',
    name: 'Central Oregon Backcountry Explorer',
    sub: 'Prineville Loop, Oregon',
    tags: ['Loop', 'Central Oregon', '3–5 Days', 'Tubeless Required'],
    map: {
      id: 'map-coce',
      center: [44.53, -120.46],
      zoom: 9,
      trackUrl: '/trips/oregon-bikepacking-2026/coce.json',
      startPt: [44.30923, -120.84709],
      startLabel: 'Start / Finish: Prineville',
    },
    stats: [
      { label: 'Distance', value: '152 mi' },
      { label: 'Elevation', value: '11,590 ft' },
      { label: 'Gravel', value: '60%' },
      { label: 'Duration', value: '3–5 days' },
      { label: 'Season', value: 'June–Oct' },
    ],
    desc: 'A loop through the Ochoco Mountains and John Day River country, starting from Prineville 50 minutes east of Bend. The 40% pavement is significant on paper, but the unpaved sections cut through high desert rimrock and ponderosa pine terrain that looks nothing like the Coast Range — wide open skies, dramatically different from western Oregon. The Spoke\'n Hostel in Mitchell (a bike-friendly bunkhouse in a town of 130 people) is a natural night-one stop. The edge case worth noting: this is eastern Oregon, and it\'s worth it.',
    details: [
      {
        label: 'Camping',
        items: [
          'Spoke\'n Hostel, Mitchell (~mi 75) — donation-based bunkhouse, bike-friendly',
          'Mitchell town park ($10, water + bathrooms)',
          'Burnt Ranch Campground — along John Day River',
          'Dispersed camping throughout Ochoco NF',
        ],
      },
      {
        label: 'Logistics',
        items: [
          'Park in Prineville (50 min from Bend, 3 hrs Portland) — true loop',
          'Walton Lake Rd closed until mid-September — check current status',
          'Goathead thorn flats are endemic — tubeless setup is not optional',
          'Snow concern only in "border seasons" (not fall broadly)',
        ],
      },
    ],
    links: [
      { label: 'Bikepacking.com Route', href: 'https://bikepacking.com/routes/central-oregon-backcountry-explorer/', primary: true },
    ],
  },
  {
    num: '06',
    name: 'NorCal Outback',
    sub: 'Klamath Falls, OR → Reno, NV',
    tags: ['Out of State', 'Point-to-Point', '6 Days'],
    caveat: 'Full route is 6 days — but the northern segment (Lava Beds through Lassen country) is worth investigating as a standalone 3-day pull.',
    map: {
      id: 'map-norcal',
      center: [40.86, -120.79],
      zoom: 7,
      trackUrl: '/trips/oregon-bikepacking-2026/norcal_outback.json',
      startPt: [42.22541, -121.77277],
      endPt: [39.52844, -119.81247],
      startLabel: 'Start: Klamath Falls area',
      endLabel: 'End: Reno, NV',
    },
    stats: [
      { label: 'Distance', value: '319 mi' },
      { label: 'Elevation', value: '16,271 ft' },
      { label: 'Gravel', value: '52%' },
      { label: 'Duration', value: '6 days' },
      { label: 'Season', value: 'Sept–Oct' },
    ],
    desc: 'The furthest afield on this list — and the most exotic. The NorCal Outback threads the least-traveled corner of northern California: the Modoc Plateau, Lava Beds National Monument, the Pit River and Bizz Johnson Rail Trail corridor, then across the Sierra Valley to Reno. The terrain is genuinely unlike anything in the PNW — high desert volcanic plateau, lava fields, vast empty sky. At 319 miles / 6 days it\'s double the group\'s window as a full ride, but the northern segment from Klamath Falls through Lava Beds to the Lassen foothills (~130 miles) could stand alone as an exceptional 3-day trip.',
    details: [
      {
        label: 'Camping',
        items: [
          'Indian Wells Campground (Lava Beds NM, mi ~50)',
          'Goumaz Campground — primitive, along Bizz Johnson Trail',
          'Bear Valley Campground — Sierra Valley section',
          'Small motels in McArthur and Loyalton for softer nights',
        ],
      },
      {
        label: 'Logistics',
        items: [
          'Lava Beds NM entry fee: $15/vehicle',
          'Amtrak Coast Starlight stops at Dunsmuir (near start)',
          'Full route ends near Reno — flights or Amtrak Zephyr back',
          'Sept–Oct is the sweet spot — fire season winding down, snow not yet',
        ],
      },
    ],
    links: [
      { label: 'Bikepacking.com Route', href: 'https://bikepacking.com/routes/norcal-outback/', primary: true },
    ],
  },
  {
    num: '07',
    name: 'Idaho Panhandle Ramble',
    sub: 'Coeur d\'Alene Loop, Idaho',
    tags: ['Out of State', 'Loop', 'Very Demanding', 'Best by Sept'],
    map: {
      id: 'map-panram',
      center: [47.40, -116.26],
      zoom: 9,
      trackUrl: '/trips/oregon-bikepacking-2026/idaho_panram.json',
      startPt: [47.67341, -116.78778],
      startLabel: 'Start / Finish: Coeur d\'Alene',
    },
    stats: [
      { label: 'Distance', value: '320 mi' },
      { label: 'Elevation', value: '30,365 ft' },
      { label: 'Gravel', value: '85%' },
      { label: 'Duration', value: '6 days' },
      { label: 'Season', value: 'June–Sept' },
    ],
    desc: 'The heaviest route on this list by elevation — 30,000 ft of gain over 320 miles through the Selkirk and Cabinet ranges of the Idaho Panhandle. Dense cedar and hemlock forests, remote creek drainages, and old-growth corridors that feel genuinely far from everything. Run as a supported event in 2023 and 2025, so real trip reports from real people exist. The 5–6 hour drive from Portland or Bellingham is a real logistics factor. Snow at elevation can start in October, so September is the safer end of the window.',
    details: [
      {
        label: 'Camping',
        items: [
          'Honeysuckle, Devils Elbow, Emerald Creek — Forest Service sites',
          'Beauty Bay Campground (near finish)',
          'Dispersed camping throughout national forest throughout',
        ],
      },
      {
        label: 'Logistics',
        items: [
          'Start / end: Coeur d\'Alene, ID — 5–6 hrs from Portland / Bellingham',
          'Bear spray required in this region',
          'Resupply: Wallace + St. Maries (larger), Avery + Clarkia (small)',
          'Best window: June–September — October snow risk at elevation is real',
        ],
      },
    ],
    links: [
      { label: 'Bikepacking.com Route', href: 'https://bikepacking.com/routes/idaho-panhandle-ramble/', primary: true },
    ],
  },
];

// ─── Shared route renderer ────────────────────────────────────────────────────

function RouteArticle({ route }: { route: Route }) {
  return (
    <article className="px-5 sm:px-8 lg:px-12 py-14 sm:py-24 border-b border-[#2A09F3]/15 dark:border-white/15 last:border-b-0">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/30 dark:text-white/30 mb-2">
            ── {route.num} of 07
          </p>
          <h2 className="font-[family-name:var(--font-loram)] text-[2rem] sm:text-4xl md:text-5xl leading-[1.0] tracking-tight mb-1">
            {route.name}
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#2A09F3]/60 dark:text-white/60 mb-4 sm:mb-5">
            {route.sub}
          </p>

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

          {route.caveat && (
            <p className="font-[family-name:var(--font-dm-sans)] text-[11px] sm:text-xs text-[#2A09F3]/55 dark:text-white/55 border-l-2 border-[#2A09F3]/25 dark:border-white/25 pl-3 mb-5 sm:mb-7 italic leading-relaxed max-w-xl">
              {route.caveat}
            </p>
          )}

          <RouteMapClient
            id={route.map.id}
            center={route.map.center}
            zoom={route.map.zoom}
            trackUrl={route.map.trackUrl}
            startPt={route.map.startPt}
            endPt={route.map.endPt}
            startLabel={route.map.startLabel}
            endLabel={route.map.endLabel}
          />

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

          <p className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base leading-[1.8] text-[#2A09F3]/85 dark:text-white/85 mb-8 sm:mb-10 max-w-[680px]">
            {route.desc}
          </p>

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
  );
}

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
              ── Western Oregon + Beyond &nbsp;&middot;&nbsp; Gravel Bikepacking &nbsp;&middot;&nbsp; September – October 2026
            </p>
          </FadeInSection>
          <FadeInSection delay={150}>
            <h1 className="font-[family-name:var(--font-loram)] text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.97] tracking-tight">
              Seven Routes.<br className="hidden sm:block" /> One Fall Window.
            </h1>
          </FadeInSection>
          <FadeInSection delay={280}>
            <p className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#2A09F3]/60 dark:text-white/60 mt-6 sm:mt-8 max-w-lg leading-relaxed">
              Researched for a fall 2026 trip with four to five athletic cyclists on gravel bikes. Routes 01–03 fit a strict 3-day window. Routes 04–07 push the constraints in interesting directions.
            </p>
          </FadeInSection>
        </div>
      </header>

      {/* ── Core routes 01–03 ── */}
      {CORE_ROUTES.map((route) => (
        <RouteArticle key={route.num} route={route} />
      ))}

      {/* ── Section break ── */}
      <div className="px-5 sm:px-8 lg:px-12 py-12 sm:py-20 border-b border-[#2A09F3]/15 dark:border-white/15 bg-[#2A09F3]/4 dark:bg-white/4">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/40 dark:text-white/40 mb-3">
              ── Wider radius
            </p>
            <p className="font-[family-name:var(--font-loram)] text-2xl sm:text-3xl leading-tight tracking-tight mb-3">
              Edge Cases + Out of State
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#2A09F3]/55 dark:text-white/55 max-w-lg leading-relaxed">
              These four routes push past the original constraints — a day longer, east of the Cascades, or into neighboring states. Included because the scenery or logistics argument is genuinely compelling.
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* ── Extended routes 04–07 ── */}
      {EXTENDED_ROUTES.map((route) => (
        <RouteArticle key={route.num} route={route} />
      ))}

      {/* ── Footer ── */}
      <footer className="px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-t border-[#2A09F3]/15 dark:border-white/15">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#2A09F3]/30 dark:text-white/30">
            ── Sources: Dirty Freehub, bikepacking.com, c2ctrail.org, RideWithGPS, BikePortland
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
