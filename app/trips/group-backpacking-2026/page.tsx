import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInSection from '../../components/FadeInSection';
import ThemeToggle from '../../components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Group Backpacking 2026 — Grant Eadie',
  description:
    'Six backpacking trips researched for a 2-3 night group trip in August, September, or October 2026 — high alpine, remote lakes, and coastal options across Washington, Oregon, and British Columbia.',
};

// ─── Types ───────────────────────────────────────────────────────────────────

interface Trip {
  num: string;
  name: string;
  sub: string;
  tags: string[];
  stats: { label: string; value: string }[];
  desc: string;
  details: { label: string; items: string[] }[];
  links: { label: string; href: string; primary?: boolean }[];
  caveat?: string;
  warning?: string;
}

// ─── Core trips ───────────────────────────────────────────────────────────────

const CORE_TRIPS: Trip[] = [
  {
    num: '01',
    name: 'Garibaldi',
    sub: 'Squamish, British Columbia',
    tags: ['High Alpine', 'BC Parks', 'Permit Required', '3.5-Hour Drive'],
    stats: [
      { label: 'Drive', value: '3.5 hrs' },
      { label: 'Distance', value: '~40 km' },
      { label: 'Elevation', value: '~2,600 m' },
      { label: 'Duration', value: '3–4 nights' },
      { label: 'Best Month', value: 'Early Sept' },
    ],
    desc: 'Garibaldi Lake is genuinely turquoise — glacial flour, not a filter. Black Tusk is a volcanic plug rising out of the surrounding peaks in a way that reads completely different from Cascades geology. No lahars, no pumice, no grey mud. Panorama Ridge looks directly down onto the lake with the Tusk framed behind it, and the scale of that view is the kind of thing that sticks. The split-camp approach — Taylor Meadows night one, Garibaldi Lake nights two and three — lets the group do Black Tusk and Panorama Ridge as separate full days rather than compressing both into one punishing push.',
    details: [
      {
        label: 'Itinerary',
        items: [
          'Night 1: Taylor Meadows (7.5 km from Rubble Creek, 820m gain). Open alpine meadows, centrally positioned for both objectives.',
          'Nights 2–3: Garibaldi Lake (2 km from Taylor Meadows, easy relocation). Lakeside.',
          'Day 2: Black Tusk day hike from Taylor Meadows (10 km RT, 700m). The final pitch is exposed Class 3 — stop at the shoulder. The lower Cinder Flats volcanic ash plain is otherworldly on its own.',
          'Day 3: Panorama Ridge (13.3 km RT from Garibaldi Lake camp, 700m, 5–6 hrs). Do not combine with Black Tusk in one day.',
          'Day 4: Pack out.',
        ],
      },
      {
        label: 'Permit Notes',
        items: [
          'camping.bcparks.ca — opens exactly 3 months in advance at 7am PT.',
          'August weekends sell out in under a minute. Early September is meaningfully lighter.',
          '~$165–200 CAD total for 5 people, 3 nights. $20 out-of-province surcharge flat per booking.',
          'Set up Campnab alerts now — multiple independent reports of landing spots this way.',
          'Taylor Meadows closes for bear activity sometime in September. Verify exact date before booking late-September.',
          'No campfires anywhere in the park.',
        ],
      },
    ],
    links: [
      { label: 'BC Parks — Garibaldi', href: 'https://bcparks.ca/garibaldi-park/', primary: true },
      { label: 'Campnab Alerts', href: 'https://campnab.com' },
    ],
  },
  {
    num: '02',
    name: 'Eagle Cap',
    sub: 'Wallowa Mountains, Oregon',
    tags: ['High Alpine', 'No Permit Required', 'Oregon', '5.5-Hour Drive'],
    stats: [
      { label: 'Drive', value: '5.5 hrs' },
      { label: 'Distance', value: '~22 mi' },
      { label: 'Elevation', value: '~3,100 ft' },
      { label: 'Duration', value: '3–4 nights' },
      { label: 'Best Month', value: 'Early Sept' },
    ],
    desc: 'This is "Oregon\'s Alps" — and it earns it. The Wallowas are fault-block granite and marble, geologically older and harder than the Cascades. No volcanic rock, no grey mud, no pumice. The light reads differently, the rock is pale gold and white, and the Lakes Basin holds 20+ named lakes within a few miles of each other — you\'re not hiking to a lake, you\'re moving through a landscape that is substantially water. Glacier Lake, beneath a granite headwall with small islands dotting it, is the standout. If your Cascades miles are all on green-grey volcanic terrain, this will feel like a different country.',
    details: [
      {
        label: 'Itinerary',
        items: [
          'Day 1: Two Pan TH to Lostine Meadows (3.7 mi, 1,380 ft gain). Easy opener.',
          'Day 2: Lostine Meadows to Mirror Lake (4.3 mi, 635 ft). Arrive early, explore granite slabs toward Moccasin.',
          'Day 3: Day hike loop through basin — Glacier Lake, Douglas, Crescent (5–6 miles from camp, no pack weight). Glacier Lake is the standout: granite headwall, small islands, fewer people.',
          'Day 4: Out (8 miles, mostly downhill). The one long day.',
          'Camp at Moccasin Lake over Mirror Lake — less crowded, better positioned for Glacier Pass. Glacier Lake itself has fewer people due to the extra climb.',
        ],
      },
      {
        label: 'Permit + Regulations',
        items: [
          'No overnight permit. Self-issue wilderness permit at the trailhead kiosk. NW Forest Pass for parking.',
          'Group size maximum of 6 in the Lakes Basin. Your group of 5 is legal.',
          'Campfires prohibited within 1/4 mile of Mirror, Glacier, Moccasin, and most basin lakes.',
          'Call Wallowa Mountains Visitor Center (541) 426-5546 for current conditions.',
          'Download GPX in Gaia before you go — the Glacier Lake trail junction is noted as hard to find.',
        ],
      },
    ],
    links: [
      { label: 'USFS Eagle Cap Wilderness', href: 'https://www.fs.usda.gov/r06/wallowa-whitman/recreation/eagle-cap-wilderness', primary: true },
      { label: 'Oregon Hikers Forum', href: 'https://www.oregonhikers.org/forum/viewtopic.php?t=28323' },
    ],
    caveat: 'Eastern Oregon wildfire smoke is a real variable in August and September. Check AQI for the Wallowas the week before you go.',
  },
  {
    num: '03',
    name: 'Royal Basin',
    sub: 'Olympic National Park, Washington',
    tags: ['High Alpine', 'Permit Required', 'Olympic NP', '3-Hour Drive'],
    stats: [
      { label: 'Drive', value: '3 hrs' },
      { label: 'Distance', value: '16 mi RT' },
      { label: 'Elevation', value: '3,940 ft' },
      { label: 'Duration', value: '2–3 nights' },
      { label: 'Best Month', value: 'September' },
    ],
    desc: 'Experienced ONP hikers consistently rank Royal Basin above the more famous High Divide / Seven Lakes Basin loop — better solitude, more rewarding alpine payoff, and the northeast rain shadow gives it meaningfully better odds of clear weather than any west-side ONP drainage. The upper basin (Imperial Tarn) has the same glacial turquoise water as Garibaldi, ringed by 7,000 ft peaks with views to the San Juans and Vancouver Island on a clear day. The landscape progression from old-growth forest to subalpine meadow to full alpine cirque is one of the better built-in reveals in any ONP trail.',
    details: [
      {
        label: 'Itinerary',
        items: [
          'Night 1 option: Royal Creek camps (~3.4–4.3 mi from TH, ~1,265 ft) — last zone where campfires allowed, mossy old-growth setting.',
          'Main camp: Royal Lake (7.2 miles from TH, ~2,600 ft gain, 10 sites). Best sites are on the far side of the lake.',
          'Base day: Unmaintained trail to upper basin and Imperial Tarn (+3/4 mi, +600–1,000 ft from Royal Lake). This is the payoff. No designated sites at the tarn — camping too close is not permitted.',
          'Olympic marmots (endemic to the peninsula) are nearly universally reported throughout.',
        ],
      },
      {
        label: 'Permit Notes',
        items: [
          'Recreation.gov (permit ID: 4098362) — 100% advance reservation. No walk-up option, ever.',
          'Opens April 15 at 7am PT. Summer weekends sell out fast.',
          '$8/person/night + $6 flat fee. ~$126 total for 5 people, 3 nights.',
          'CRITICAL: Upper basin (Imperial Tarn) is not bookable on Recreation.gov. You must call the WIC separately at (360) 565-3100. Hard cap of 3 permits/day, 12 people max. Most parties miss this step.',
          'Bear canisters required park-wide. Free loan at the Port Angeles Wilderness Information Center.',
          'Access road (FR 2870) has significant potholes — factor in 45+ min from Hwy 101.',
        ],
      },
    ],
    links: [
      { label: 'NPS — Royal Basin', href: 'https://home.nps.gov/olym/planyourvisit/royal-basin.htm', primary: true },
      { label: 'Recreation.gov Permits', href: 'https://www.recreation.gov/permits/4098362' },
      { label: 'WTA — Royal Basin', href: 'https://www.wta.org/go-hiking/hikes/royal-basin' },
    ],
    caveat: 'July through early August bugs are documented as severe — one July party cut their trip from 2 nights to 1. September largely solves this. Mountain goats are bold and attracted to urine; do not urinate near your tent.',
  },
];

// ─── Extended trips ───────────────────────────────────────────────────────────

const EXTENDED_TRIPS: Trip[] = [
  {
    num: '04',
    name: 'South Chilcotin',
    sub: 'Spruce Lake Protected Area, British Columbia',
    tags: ['Alpine Plateau', 'No Permit Required', 'BC Interior', '6–9-Hour Drive'],
    stats: [
      { label: 'Drive', value: '6–9 hrs' },
      { label: 'Distance', value: '~32 km RT' },
      { label: 'Elevation', value: '~525 m' },
      { label: 'Duration', value: '2–3 nights' },
      { label: 'Best Month', value: 'Early Sept' },
    ],
    desc: 'This is the answer to "where do BC backpackers go when they\'re not on a trail that\'s on any list." Open subalpine plateau, multiple alpine lakes (Spruce, Hummingbird, Trigger, Warner, Lorna), 200+ km of trail, and almost nobody. A 2024 six-day traverse counted two solo hikers and one couple in the entire park. It stays quiet because it\'s too far for a long weekend from Vancouver, has no guidebook presence, and the road access filters people. The word that appears independently in multiple trip reports: profound silence.',
    details: [
      {
        label: 'Itinerary',
        items: [
          'Entry: Jewel Bridge TH via Slim Creek FSR. Gun Creek Trail to Spruce Lake: 16 km, 525m gain. Gradual canyon walk, well-graded.',
          'Night 1: Spruce Lake North Campground (16 km from TH). Established sites with outhouses and bear caches.',
          'Day 2: Day hike to Sheba Ridge (19 km RT from camp) — the scenic payoff. Or a rest and swim day at the lake.',
          'Night 2–3: Stay at Spruce Lake. Push to Hummingbird or Trigger Lake for more solitude (float planes drop weekend groups at Spruce).',
          'Day 3/4: Return to Jewel Bridge.',
        ],
      },
      {
        label: 'Access + Logistics',
        items: [
          'Route A — Hurley FSR (shorter, rough): Bellingham to Pemberton (~3 hrs via Hwy 99), then 74 km of gravel on the Hurley FSR to Gold Bridge (~1.5–2 hrs). High-clearance AWD required, carry a full spare. Check isurvivedthehurley.com the day before.',
          'Route B — Lillooet/Hwy 40 (longer, any vehicle): Bellingham to Lillooet via Trans-Canada, then Hwy 40 to Gold Bridge. Total ~8–9 hours but passable in a standard vehicle.',
          'VERIFY before going: Gun Creek Trail has had intermittent wildfire closures. Call BC Parks / Cascades Forest District (1-800-665-1511) to confirm the route is open for the 2026 season.',
          'No dogs (Mountain Caribou and grizzly protection). Navigation above treeline requires skills — sparse signage. Download GPX.',
          'Grizzly habitat. Bear spray required.',
        ],
      },
    ],
    links: [
      { label: 'BC Parks — South Chilcotin', href: 'https://bcparks.ca/south-chilcotin-mountains-park/', primary: true },
    ],
    caveat: 'August brings relentless bugs on shaded trail sections, real wildfire smoke risk from interior BC fires, and knee-to-thigh-deep river crossings on Gun Creek. September largely resolves all three.',
  },
  {
    num: '05',
    name: 'Horseshoe Basin',
    sub: 'Pasayten Wilderness, Washington',
    tags: ['Arctic Tundra', 'No Permit Required', 'Pasayten', '5-Hour Drive'],
    stats: [
      { label: 'Drive', value: '5 hrs' },
      { label: 'Distance', value: '12–20 mi' },
      { label: 'Elevation', value: 'Starts at 6,000 ft' },
      { label: 'Duration', value: '2–3 nights' },
      { label: 'Best Month', value: 'Aug–Sept' },
    ],
    desc: 'Iron Gate Trailhead sits at just over 6,000 feet — you\'re in alpine terrain before you take a step. The basin is classified as genuine arctic tundra, rare in the lower 48. Rolling high plateau, open sky, pronghorn sheep. A 2024 WTA trip report described it as "beautiful, incredible, remote, quiet area that is not seeing crowds of hikers." One peak register in the area logged six parties in nine years. This is not a secret that\'s been discovered — it stays quiet because northeast Washington is not on the western Washington weekend-warrior circuit and there\'s no Instagram profile for this place.',
    details: [
      {
        label: 'Itinerary',
        items: [
          'No water at the trailhead camp — fill up before ascending.',
          'Night 1: Camp at or just past the Wilderness boundary (~6–7 miles via Boundary Trail). Flat, easy terrain on the plateau.',
          'Night 2: Deeper into Horseshoe Basin near Horseshoe Mountain. Optional Class 2 scramble of the summit itself.',
          'Night 3 option: Push toward Louden Lake — a 2024 tripper did Iron Gate to Louden over 3 days and found total solitude.',
          'Exit: Out the way you came, or via the Albert Camp Trail for a quiet loop variation.',
        ],
      },
      {
        label: 'Logistics',
        items: [
          'No overnight permit required. NW Forest Pass for parking.',
          'Last ~6 miles of spur road is genuinely rough. High clearance required, 4WD recommended in wet conditions.',
          'Bugs and biting flies through mid-August are documented as bad. Permethrin-treat clothing.',
          'Burn section from old fires slows hiking in places.',
          'Remote — no cell service. Far from everything, which is also the point.',
        ],
      },
    ],
    links: [
      { label: 'WTA — Horseshoe Basin', href: 'https://www.wta.org/go-hiking/hikes/horseshoe-basin-pasayten', primary: true },
    ],
    caveat: 'Image Lake via Suiattle River is closed until January 2028 (washout, Forest Order 06-05-26-03). Horseshoe Basin is the Pasayten alternative.',
  },
  {
    num: '06',
    name: 'Coastal Pick',
    sub: 'Juan de Fuca Marine Trail, BC — or Ozette + Shi Shi, WA',
    tags: ['Coastal', 'Two Options', 'Different Character', '2.5–5-Hour Drive'],
    stats: [
      { label: 'Drive', value: '2.5–5 hrs' },
      { label: 'JdF Distance', value: '47 km' },
      { label: 'Ozette+Shi Shi', value: '~18 mi total' },
      { label: 'Duration', value: '3–5 nights (JdF) / 4 days (combo)' },
      { label: 'Best Month', value: 'Aug–Sept' },
    ],
    desc: 'Two distinct coastal options depending on whether the Juan de Fuca Marine Trail has fully reopened. The JdF is 47 km of Vancouver Island coast — mostly old-growth forest with spectacular beach destinations (Mystic Beach, Sombrio, Bear Beach, Chin Beach). The honest frame: 87% forest, 13% beach, with the beach payoffs genuinely excellent. Closed since November 2024 for storm damage, with a summer 2026 reopening target. If it\'s still closed, the Ozette Loop plus Shi Shi Beach as a 4-day combo from Bellingham is a solid fallback — different coastal character, two distinct beaches, October-viable.',
    details: [
      {
        label: 'Juan de Fuca',
        items: [
          'VERIFY STATUS FIRST: bcparks.ca — closed since Nov 2024 (7 bridges washed out, ~$950K repairs). Summer 2026 reopening targeted but ongoing.',
          'No permit quota. $10 CAD/person/night, self-registered at trailhead. No advance booking needed.',
          'Shuttle between trailheads via West Coast Trail Express ($30 CAD/person, runs May 1 – Sept 30).',
          '4-day East to West: China Beach → Bear Beach → Chin Beach → Sombrio → Botanical Beach.',
          'Mud is the defining characteristic. Pace drops to 2–3 km/hr in places even in dry conditions. Gaiters and trekking poles are not optional.',
          'Do not plan October — precipitation climbs to 246–552mm/month (documented misery in October trip reports).',
        ],
      },
      {
        label: 'Ozette + Shi Shi',
        items: [
          'If JdF is still closed, or if October is the target month, this is the right call.',
          'Shi Shi Beach / Point of the Arches (2.5–3 hrs from Bellingham): Best sea stack scenery on the Washington coast. 3.3-mile approach each way, 1–2 nights. ONP wilderness permit + Makah Recreation Pass ($20/vehicle from Neah Bay). Walk-up viable in September/October.',
          'Ozette Loop (2.5–3 hrs): 9.2 miles, flat, 1/3 boardwalk + 1/3 beach. Two nights optimal. Makah petroglyphs at Wedding Rock are undersold in every travel blog. Sea otters are commonplace. Permits via Recreation.gov, open April 15 at 7am ($6 flat + $8/person/night).',
          'Combined 4-day trip: Shi Shi (1 night) + Ozette Loop (2 nights) from Bellingham. Different character on each stretch, entirely manageable.',
          'October is actually viable on the Washington coast — storms make it dramatic, crowds gone. Watch tide tables carefully; fall surges reduce safe-passage windows at Ozette\'s restriction points.',
        ],
      },
    ],
    links: [
      { label: 'BC Parks — Juan de Fuca', href: 'https://bcparks.ca/juan-de-fuca-park/', primary: true },
      { label: 'NPS — Wilderness Reservations', href: 'https://www.nps.gov/olym/planyourvisit/wilderness-reservations.htm' },
      { label: 'WTA — Shi Shi Beach', href: 'https://www.wta.org/go-hiking/hikes/shi-shi-beach-and-point-of-arches' },
    ],
    warning: 'Verify JdF status at bcparks.ca before committing to that option.',
  },
];

// ─── Shared trip renderer ─────────────────────────────────────────────────────

function TripArticle({ trip, total }: { trip: Trip; total: number }) {
  return (
    <article className="px-5 sm:px-8 lg:px-12 py-14 sm:py-24 border-b border-[#2A09F3]/15 dark:border-white/15 last:border-b-0">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/30 dark:text-white/30 mb-2">
            ── {trip.num} of {String(total).padStart(2, '0')}
          </p>
          <h2 className="font-[family-name:var(--font-loram)] text-[2rem] sm:text-4xl md:text-5xl leading-[1.0] tracking-tight mb-1">
            {trip.name}
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#2A09F3]/60 dark:text-white/60 mb-4 sm:mb-5">
            {trip.sub}
          </p>

          <div className="flex flex-wrap gap-2 mb-5 sm:mb-7">
            {trip.tags.map((tag) => (
              <span
                key={tag}
                className="font-[family-name:var(--font-dm-sans)] text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase px-2.5 py-1 border border-[#2A09F3]/30 dark:border-white/30 text-[#2A09F3]/75 dark:text-white/75"
              >
                {tag}
              </span>
            ))}
          </div>

          {trip.warning && (
            <p className="font-[family-name:var(--font-dm-sans)] text-[11px] sm:text-xs text-[#2A09F3] dark:text-white border-l-2 border-[#2A09F3]/60 dark:border-white/60 pl-3 mb-5 sm:mb-7 font-semibold leading-relaxed max-w-xl tracking-wide uppercase">
              ⚠ {trip.warning}
            </p>
          )}

          {trip.caveat && (
            <p className="font-[family-name:var(--font-dm-sans)] text-[11px] sm:text-xs text-[#2A09F3]/55 dark:text-white/55 border-l-2 border-[#2A09F3]/25 dark:border-white/25 pl-3 mb-5 sm:mb-7 italic leading-relaxed max-w-xl">
              {trip.caveat}
            </p>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-5 border-l border-t border-[#2A09F3]/15 dark:border-white/15 mb-7 sm:mb-10">
            {trip.stats.map((stat, i) => (
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
            {trip.desc}
          </p>

          <div className="border-t border-[#2A09F3]/15 dark:border-white/15 mb-7 sm:mb-10">
            {trip.details.map((detail) => (
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
            {trip.links.map((link) => (
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

const TOTAL = CORE_TRIPS.length + EXTENDED_TRIPS.length;

export default function GroupBackpackingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#2A09F3] text-[#2A09F3] dark:text-white">
      <ThemeToggle />

      {/* ── Header ── */}
      <header className="px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 pb-12 sm:pb-20 border-b border-[#2A09F3]/15 dark:border-white/15">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <img
              src="/shapes/shape-05.svg"
              alt=""
              width={64}
              height={64}
              className="shape-icon mb-6 sm:mb-8"
            />
          </FadeInSection>
          <FadeInSection>
            <p className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/60 dark:text-white/60 mb-4 sm:mb-6">
              ── Washington · Oregon · British Columbia &nbsp;&middot;&nbsp; Backpacking &nbsp;&middot;&nbsp; August – October 2026
            </p>
          </FadeInSection>
          <FadeInSection delay={150}>
            <h1 className="font-[family-name:var(--font-loram)] text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.97] tracking-tight">
              Six Options.<br className="hidden sm:block" /> One September Window.
            </h1>
          </FadeInSection>
          <FadeInSection delay={280}>
            <p className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#2A09F3]/60 dark:text-white/60 mt-6 sm:mt-8 max-w-lg leading-relaxed">
              Researched for a 2-3 night trip with four to five people — mixed fitness, high alpine or coastal, willing to drive. Trips 01–03 are the strongest fits for the group. Trips 04–06 have more friction but higher reward ceilings.
            </p>
          </FadeInSection>
        </div>
      </header>

      {/* ── Core trips 01–03 ── */}
      {CORE_TRIPS.map((trip) => (
        <TripArticle key={trip.num} trip={trip} total={TOTAL} />
      ))}

      {/* ── Section break ── */}
      <div className="px-5 sm:px-8 lg:px-12 py-12 sm:py-20 border-b border-[#2A09F3]/15 dark:border-white/15 bg-[#2A09F3]/4 dark:bg-white/4">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/40 dark:text-white/40 mb-3">
              ── More options
            </p>
            <p className="font-[family-name:var(--font-loram)] text-2xl sm:text-3xl leading-tight tracking-tight mb-3">
              Longer Drives + Higher Ceilings
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#2A09F3]/55 dark:text-white/55 max-w-lg leading-relaxed">
              These three trips have more logistics friction — rougher access, deeper permit planning, or a trail closure to verify. The tradeoff is genuine solitude, a different kind of trip, or a coastal option with no alpine equivalent.
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* ── Extended trips 04–06 ── */}
      {EXTENDED_TRIPS.map((trip) => (
        <TripArticle key={trip.num} trip={trip} total={TOTAL} />
      ))}

      {/* ── Footer ── */}
      <footer className="px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-t border-[#2A09F3]/15 dark:border-white/15">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#2A09F3]/30 dark:text-white/30">
            ── Sources: WTA, Reddit r/PNWhiking, BC Parks, NPS, Oregon Hikers Forum, AllTrails community reports
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
