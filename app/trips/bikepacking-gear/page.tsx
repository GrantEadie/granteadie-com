import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInSection from '../../components/FadeInSection';
import ThemeToggle from '../../components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Bikepacking Gear — Grant Eadie',
  description:
    'Bag system research for a 5-day gravel bikepacking trip on the Primos Super Dame. Four-bag setup, product picks across budget and mid tiers, and three complete builds under $500.',
};

// ─── Data ────────────────────────────────────────────────────────────────────

const POSITIONS = [
  {
    num: '01',
    name: 'Saddle Bag',
    role: 'Primary capacity — sleeping bag, tent, clothing.',
    rule: 'Go 14–18L for a camping trip. 7–10L is enough for inn-to-inn only. Mounts rack-free via seatpost. No dropper post = full options available.',
    tiers: [
      { label: 'Budget', product: 'Revelate Designs Viscacha', price: '~$115' },
      { label: 'Mid', product: 'Restrap 14L or 18L (1000D Cordura)', price: '~$140–170' },
      { label: 'Premium', product: 'Tailfin CargoPack 18L', price: '~$250+' },
    ],
  },
  {
    num: '02',
    name: 'Handlebar Bag',
    role: 'Light and bulky items only — sleeping bag liner, down jacket, puffy.',
    rule: 'Heavy front loads measurably degrade handling. Flared bars improve bag clearance but do not change the physics. Pack light here.',
    tiers: [
      { label: 'Budget', product: 'Revelate Designs Sweetroll', price: '~$100' },
      { label: 'Mid', product: 'Ortlieb Handlebar Pack', price: '~$120' },
      { label: 'Premium', product: 'Apidura Expedition Handlebar Pack', price: '~$150' },
    ],
  },
  {
    num: '03',
    name: 'Frame Bag',
    role: 'Dense and heavy items — tools, food, water filter.',
    rule: 'Low-centered weight is the best position for anything heavy. Measure your frame triangle before ordering — a compact frame may only fit a half-frame bag.',
    tiers: [
      { label: 'Budget', product: 'Rhinowalk half-frame bag', price: '~$30' },
      { label: 'Mid', product: 'Apidura Backcountry Frame Pack', price: '~$90–120' },
      { label: 'Premium', product: 'Apidura Expedition Frame Pack', price: '~$130+' },
    ],
  },
  {
    num: '04',
    name: 'Top Tube Bag',
    role: 'Phone, snacks, lip balm — grab without stopping.',
    rule: 'Not a major capacity position. The point is accessibility while riding, not volume.',
    tiers: [
      { label: 'Budget', product: 'Topeak TriBag', price: '~$20' },
      { label: 'Mid', product: 'Revelate Designs Mag Tank', price: '~$55' },
    ],
  },
];

const BUILDS = [
  {
    label: 'A',
    tier: 'Budget',
    total: '~$265',
    recommended: false,
    items: [
      { position: 'Saddle', product: 'Revelate Designs Viscacha', price: '~$115' },
      { position: 'Handlebar', product: 'Revelate Designs Sweetroll', price: '~$100' },
      { position: 'Frame', product: 'Rhinowalk half-frame', price: '~$30' },
      { position: 'Top tube', product: 'Topeak TriBag', price: '~$20' },
    ],
    note: 'Revelate is a real brand — this is not a budget compromise. Good choice if you want to keep it tight.',
  },
  {
    label: 'B',
    tier: 'Mid-range',
    total: '~$415',
    recommended: true,
    items: [
      { position: 'Saddle', product: 'Restrap 14L', price: '~$140' },
      { position: 'Handlebar', product: 'Ortlieb Handlebar Pack', price: '~$120' },
      { position: 'Frame', product: 'Apidura Backcountry Frame Pack', price: '~$100' },
      { position: 'Top tube', product: 'Revelate Mag Tank', price: '~$55' },
    ],
    note: 'The sweet spot. Ortlieb and Restrap are field-proven, Apidura frame bags fit gravel geometry well.',
  },
  {
    label: 'C',
    tier: 'Mixed',
    total: '~$430',
    recommended: false,
    items: [
      { position: 'Saddle', product: 'Restrap 14L', price: '~$140' },
      { position: 'Handlebar', product: 'Swift Industries Catalyst', price: '~$155' },
      { position: 'Frame', product: 'Rhinowalk half-frame', price: '~$30' },
      { position: 'Top tube', product: 'Revelate Mag Tank', price: '~$55' },
    ],
    note: 'Splurge on the Swift handlebar bag you were already considering, save on the frame bag.',
  },
];

const RULES = [
  {
    label: 'No rack needed',
    body: 'Soft bags mount directly to the frame and seatpost. Racks are a touring solution for 2+ week expeditions or very heavy loads. The Primos Super Dame is almost certainly not optimized for rack mounts anyway.',
  },
  {
    label: 'Weight distribution',
    body: 'Heavy items (tools, food, water) go in the frame bag — low and centered. The handlebar bag is for compressible, light things. Saddle bag carries the bulk. Never overload the front.',
  },
  {
    label: 'Measure your frame triangle',
    body: 'Before ordering a full frame bag, confirm the Primos frame triangle has clearance. A compact or sloping top tube may only fit a half-frame bag, which gives you 2–3L instead of 4–6L. Meaningful difference for 5 days.',
  },
  {
    label: 'Check fit at checkout',
    body: 'Apidura and Restrap both have frame fit checkers on their sites. Use them. Bag returns are annoying.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BikepackingGearPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#2A09F3] text-[#2A09F3] dark:text-white">
      <ThemeToggle />

      {/* ── Header ── */}
      <header className="px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 pb-12 sm:pb-20 border-b border-[#2A09F3]/15 dark:border-white/15">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/60 dark:text-white/60 mb-4 sm:mb-6">
              ── Primos Super Dame &nbsp;&middot;&nbsp; Gravel Bikepacking &nbsp;&middot;&nbsp; 5-day trip
            </p>
          </FadeInSection>
          <FadeInSection delay={150}>
            <h1 className="font-[family-name:var(--font-loram)] text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.97] tracking-tight">
              Bikepacking Gear.
            </h1>
          </FadeInSection>
          <FadeInSection delay={280}>
            <p className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#2A09F3]/60 dark:text-white/60 mt-6 sm:mt-8 max-w-lg leading-relaxed">
              Four bags, no rack. Researched for a 5-day self-supported trip. Already have the bike, lights, and pump — this covers everything else.
            </p>
          </FadeInSection>
        </div>
      </header>

      {/* ── Bag positions ── */}
      <section>
        {POSITIONS.map((pos, i) => (
          <article
            key={pos.num}
            className="px-5 sm:px-8 lg:px-12 py-12 sm:py-20 border-b border-[#2A09F3]/15 dark:border-white/15"
          >
            <div className="max-w-5xl mx-auto">
              <FadeInSection delay={i * 60}>
                <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/30 dark:text-white/30 mb-2">
                  ── {pos.num} of 04
                </p>
                <h2 className="font-[family-name:var(--font-loram)] text-[2rem] sm:text-4xl md:text-5xl leading-[1.0] tracking-tight mb-1">
                  {pos.name}
                </h2>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#2A09F3]/60 dark:text-white/60 mb-6 sm:mb-8">
                  {pos.role}
                </p>

                <p className="font-[family-name:var(--font-dm-sans)] text-[11px] sm:text-xs text-[#2A09F3]/55 dark:text-white/55 border-l-2 border-[#2A09F3]/25 dark:border-white/25 pl-3 mb-7 sm:mb-10 italic leading-relaxed max-w-xl">
                  {pos.rule}
                </p>

                <div className="border-t border-[#2A09F3]/15 dark:border-white/15">
                  {pos.tiers.map((tier) => (
                    <div
                      key={tier.label}
                      className="grid grid-cols-1 sm:grid-cols-[120px_1fr_auto] border-b border-[#2A09F3]/15 dark:border-white/15 py-4 sm:py-5 gap-1 sm:gap-6 sm:items-center"
                    >
                      <span className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/45 dark:text-white/45">
                        ── {tier.label}
                      </span>
                      <span className="font-[family-name:var(--font-dm-sans)] text-sm text-[#2A09F3]/85 dark:text-white/85">
                        {tier.product}
                      </span>
                      <span className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.12em] text-[#2A09F3]/45 dark:text-white/45 sm:text-right">
                        {tier.price}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </article>
        ))}
      </section>

      {/* ── Section break ── */}
      <div className="px-5 sm:px-8 lg:px-12 py-12 sm:py-20 border-b border-[#2A09F3]/15 dark:border-white/15 bg-[#2A09F3]/4 dark:bg-white/4">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/40 dark:text-white/40 mb-3">
              ── Complete builds
            </p>
            <p className="font-[family-name:var(--font-loram)] text-2xl sm:text-3xl leading-tight tracking-tight mb-3">
              Three Kits Under $500
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] text-sm text-[#2A09F3]/55 dark:text-white/55 max-w-lg leading-relaxed">
              All three cover every position. Build B is the call if you&apos;re not sure.
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* ── Builds ── */}
      <section>
        {BUILDS.map((build, i) => (
          <article
            key={build.label}
            className="px-5 sm:px-8 lg:px-12 py-12 sm:py-20 border-b border-[#2A09F3]/15 dark:border-white/15"
          >
            <div className="max-w-5xl mx-auto">
              <FadeInSection delay={i * 60}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7 sm:mb-10">
                  <div>
                    <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/30 dark:text-white/30 mb-1">
                      ── Build {build.label}
                    </p>
                    <h2 className="font-[family-name:var(--font-loram)] text-[1.75rem] sm:text-3xl md:text-4xl leading-[1.0] tracking-tight">
                      {build.tier}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    {build.recommended && (
                      <span className="font-[family-name:var(--font-dm-sans)] text-[9px] font-semibold tracking-[0.18em] uppercase px-3 py-1.5 bg-[#2A09F3] text-white dark:bg-white dark:text-[#2A09F3]">
                        Recommended
                      </span>
                    )}
                    <span className="font-[family-name:var(--font-dm-sans)] text-lg sm:text-2xl font-light tracking-tight text-[#2A09F3]/60 dark:text-white/60">
                      {build.total}
                    </span>
                  </div>
                </div>

                <div className="border-t border-[#2A09F3]/15 dark:border-white/15 mb-6">
                  {build.items.map((item) => (
                    <div
                      key={item.position}
                      className="grid grid-cols-1 sm:grid-cols-[120px_1fr_auto] border-b border-[#2A09F3]/15 dark:border-white/15 py-4 sm:py-5 gap-1 sm:gap-6 sm:items-center"
                    >
                      <span className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/45 dark:text-white/45">
                        ── {item.position}
                      </span>
                      <span className="font-[family-name:var(--font-dm-sans)] text-sm text-[#2A09F3]/85 dark:text-white/85">
                        {item.product}
                      </span>
                      <span className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.12em] text-[#2A09F3]/45 dark:text-white/45 sm:text-right">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="font-[family-name:var(--font-dm-sans)] text-[11px] sm:text-xs text-[#2A09F3]/55 dark:text-white/55 border-l-2 border-[#2A09F3]/25 dark:border-white/25 pl-3 italic leading-relaxed max-w-xl">
                  {build.note}
                </p>
              </FadeInSection>
            </div>
          </article>
        ))}
      </section>

      {/* ── Rules ── */}
      <div className="px-5 sm:px-8 lg:px-12 py-12 sm:py-20 border-b border-[#2A09F3]/15 dark:border-white/15 bg-[#2A09F3]/4 dark:bg-white/4">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <p className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/40 dark:text-white/40 mb-3">
              ── Before you buy
            </p>
            <p className="font-[family-name:var(--font-loram)] text-2xl sm:text-3xl leading-tight tracking-tight mb-8">
              Key Rules
            </p>
            <div className="border-t border-[#2A09F3]/15 dark:border-white/15">
              {RULES.map((rule) => (
                <div
                  key={rule.label}
                  className="grid grid-cols-1 sm:grid-cols-[200px_1fr] border-b border-[#2A09F3]/15 dark:border-white/15 py-5 sm:py-6 gap-2 sm:gap-8"
                >
                  <dt className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.22em] uppercase text-[#2A09F3]/55 dark:text-white/55 sm:pt-0.5">
                    ── {rule.label}
                  </dt>
                  <dd className="font-[family-name:var(--font-dm-sans)] text-sm leading-[1.7] text-[#2A09F3]/80 dark:text-white/80 max-w-[560px]">
                    {rule.body}
                  </dd>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#2A09F3]/25 dark:text-white/25">
            ── Sources: bikepacking.com, BikeRadar, Treeline Review, GravelUp
          </span>
          <Link
            href="/trips"
            className="font-[family-name:var(--font-dm-sans)] text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#2A09F3]/40 dark:text-white/40 hover:text-[#2A09F3]/80 dark:hover:text-white/80 transition-colors no-underline"
          >
            ← trips
          </Link>
        </div>
      </footer>
    </div>
  );
}
