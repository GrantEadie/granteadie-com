import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import FadeInSection from "./components/FadeInSection";

const HERO_META = [
  { label: "ROLE", value: "Designer + developer" },
  { label: "BASED", value: "Pacific Northwest" },
  { label: "STATUS", value: "Open for small projects" },
  {
    label: "EMAIL",
    value: "me@granteadie.com",
    href: "mailto:me@granteadie.com",
  },
];

const PROJECTS = [
  {
    year: "2024",
    title: "AFFCNY",
    role: "Web design + custom dev, with Rare Dimension",
    note: "Rebuilt a 50-year-old foster, adoptive, and kinship family nonprofit's site on Bricks Builder. From 50+ plugins to 6. Load times 4.5s to 0.2s.",
    href: "/work/affcny",
    linkLabel: "case study",
    internal: true,
  },
  {
    year: "2022",
    title: "TwispWorks Foundation",
    role: "Brand + web, with Rare Dimension",
    note: "Brand system and custom WordPress build for a Methow Valley nonprofit campus. Hand-drawn interactive map driven by the CMS.",
    href: "/work/twispworks",
    linkLabel: "case study",
    internal: true,
  },
];

const BACKGROUND = [
  {
    year: "2019–NOW",
    title: "Rare Dimension",
    role: "Co-founder, designer + developer",
    note: "Independent web agency with my partner Matt. Nonprofits, municipalities, small institutions.",
    href: "https://raredimension.com/work/",
    linkLabel: "see work",
  },
  {
    year: "2022–2024",
    title: "Workona",
    role: "Software engineer",
    note: "Helped ship a Chrome extension that scaled past 500,000 users. Up close with a growth-stage product team.",
    href: "https://workona.com/",
    linkLabel: "check it out",
  },
  {
    year: "2019–2022",
    title: "Smiling Woods Yurts",
    role: "Dev, design, communications",
    note: "Custom internal tools, public site rebuild, full brand refresh.",
    href: "https://smilingwoodsyurts.com/",
    linkLabel: "in the wild",
  },
  {
    year: "2014–2019",
    title: "Touring Musician",
    role: "Solo records and side projects",
    note: "A few albums, time on the road.",
    href: "https://open.spotify.com/artist/41JNAYVuPs7zwJbQBQ6tec",
    linkLabel: "give it a listen",
  },
];

const APPROACH = [
  {
    label: "SITES",
    body: "New custom builds, or building from someone else's design (your designer, your Figma, or your agency's). For individuals, small businesses, and other agencies who need a build hand.",
  },
  {
    label: "CUSTOM CODE",
    body: "Plugins, integrations, automations, small bespoke things on existing sites.",
  },
  {
    label: "CARE",
    body: "Ongoing maintenance and small new features for sites already built (WordPress mostly). Monthly retainer.",
  },
  {
    label: "PRICING",
    body: "Most projects land $1.5k–$8k. Hard cap $10k; anything bigger is Rare Dimension territory.",
  },
];

function SectionHeader({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 mb-12 pb-4 border-b border-[#2A09F3]/30 dark:border-[#FFFFFF]/30">
      <h2 className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
        {label}
      </h2>
      <span className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm tabular-nums tracking-wider opacity-60">
        ({number})
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#2A09F3] text-[#2A09F3] dark:text-[#FFFFFF]">
      <ThemeToggle />

      {/* 01 — Hero */}
      <section className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-5xl w-full mx-auto flex-1 flex flex-col">
          <header className="flex items-baseline justify-between gap-4 pb-4 border-b border-[#2A09F3]/30 dark:border-[#FFFFFF]/30">
            <span className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base font-semibold tracking-[0.25em] uppercase">
              Grant Eadie
            </span>
            <span className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm tabular-nums tracking-wider opacity-60">
              (01)
            </span>
          </header>

          <div className="flex-1 flex items-center py-12 sm:py-16">
            <FadeInSection>
              <h1 className="font-[family-name:var(--font-loram)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-3xl">
                Quietly making bespoke websites and the design and code around them.
              </h1>
            </FadeInSection>
          </div>

          <FadeInSection delay={300}>
            <dl className="font-[family-name:var(--font-dm-sans)] divide-y divide-[#2A09F3]/15 dark:divide-[#FFFFFF]/15">
              {HERO_META.map(({ label, value, href }) => (
                <div
                  key={label}
                  className="grid grid-cols-[auto_1fr] sm:grid-cols-[200px_1fr] gap-x-6 gap-y-1 py-3 sm:py-4"
                >
                  <dt className="text-xs sm:text-sm tracking-[0.22em] uppercase opacity-60 pt-0.5 sm:pt-1">
                    ── {label}
                  </dt>
                  <dd className="text-base sm:text-lg">
                    {href ? (
                      <a
                        href={href}
                        className="underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 pt-4 border-t border-[#2A09F3]/30 dark:border-[#FFFFFF]/30 flex justify-end">
              <a
                href="#work"
                className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.25em] uppercase opacity-60 hover:opacity-100 transition-opacity"
              >
                Scroll ↓
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 02 — Selected work */}
      <section
        id="work"
        className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-[#2A09F3]/15 dark:border-[#FFFFFF]/15"
      >
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <SectionHeader number="02" label="Selected Work" />
          </FadeInSection>

          <FadeInSection>
            <h3 className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm tracking-[0.22em] uppercase opacity-60 mb-2">
              ── Projects
            </h3>
          </FadeInSection>

          <ul className="divide-y divide-[#2A09F3]/15 dark:divide-[#FFFFFF]/15 mb-16">
            {PROJECTS.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 100}>
                <li className="grid grid-cols-1 sm:grid-cols-[160px_1fr_auto] gap-x-8 gap-y-3 py-8 sm:py-10 items-start">
                  <span className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm tracking-[0.18em] uppercase tabular-nums opacity-60 pt-1">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-loram)] text-2xl sm:text-3xl leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="font-[family-name:var(--font-dm-sans)] italic text-sm sm:text-base opacity-70 mb-2">
                      {item.role}
                    </p>
                    <p className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base max-w-prose leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                  <Link
                    href={item.href}
                    className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm tracking-[0.18em] uppercase underline underline-offset-4 decoration-1 hover:decoration-2 transition-all whitespace-nowrap sm:pt-1"
                  >
                    {item.linkLabel} →
                  </Link>
                </li>
              </FadeInSection>
            ))}
          </ul>

          <FadeInSection>
            <h3 className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm tracking-[0.22em] uppercase opacity-60 mb-2">
              ── Background
            </h3>
          </FadeInSection>

          <ul className="divide-y divide-[#2A09F3]/15 dark:divide-[#FFFFFF]/15">
            {BACKGROUND.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 100}>
                <li className="grid grid-cols-1 sm:grid-cols-[160px_1fr_auto] gap-x-8 gap-y-3 py-8 sm:py-10 items-start">
                  <span className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm tracking-[0.18em] uppercase tabular-nums opacity-60 pt-1">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-loram)] text-2xl sm:text-3xl leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="font-[family-name:var(--font-dm-sans)] italic text-sm sm:text-base opacity-70 mb-2">
                      {item.role}
                    </p>
                    <p className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base max-w-prose leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm tracking-[0.18em] uppercase underline underline-offset-4 decoration-1 hover:decoration-2 transition-all whitespace-nowrap sm:pt-1"
                  >
                    {item.linkLabel} →
                  </a>
                </li>
              </FadeInSection>
            ))}
          </ul>

          <FadeInSection delay={400}>
            <div className="pt-8 mt-4 border-t border-[#2A09F3]/15 dark:border-[#FFFFFF]/15">
              <Link
                href="/portfolio"
                className="font-[family-name:var(--font-dm-sans)] text-sm tracking-[0.18em] uppercase underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
              >
                See the full portfolio →
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 03 — Approach */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-[#2A09F3]/15 dark:border-[#FFFFFF]/15">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <SectionHeader number="03" label="Approach" />
          </FadeInSection>

          <dl className="divide-y divide-[#2A09F3]/15 dark:divide-[#FFFFFF]/15">
            {APPROACH.map((item, i) => (
              <FadeInSection key={item.label} delay={i * 100}>
                <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-x-8 gap-y-3 py-8 sm:py-10">
                  <dt className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm tracking-[0.22em] uppercase opacity-60 pt-1">
                    ── {item.label}
                  </dt>
                  <dd className="font-[family-name:var(--font-dm-sans)] text-base sm:text-lg leading-relaxed max-w-prose">
                    {item.body}
                  </dd>
                </div>
              </FadeInSection>
            ))}
          </dl>
        </div>
      </section>

      {/* 04 — Contact */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-[#2A09F3]/15 dark:border-[#FFFFFF]/15">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <SectionHeader number="04" label="Contact" />
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="py-8 sm:py-12">
              <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm tracking-[0.22em] uppercase opacity-60 mb-3">
                ── EMAIL
              </p>
              <a
                href="mailto:me@granteadie.com"
                className="font-[family-name:var(--font-loram)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight underline underline-offset-[0.15em] decoration-2 hover:decoration-[3px] transition-all break-all sm:break-normal"
              >
                me@granteadie.com
              </a>
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            <footer className="pt-8 mt-12 border-t border-[#2A09F3]/15 dark:border-[#FFFFFF]/15 flex items-center justify-between gap-4 flex-wrap">
              <span className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.25em] uppercase opacity-60">
                © 2026 Grant Eadie
              </span>
              <span className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.25em] uppercase opacity-60">
                Bellingham, WA
              </span>
            </footer>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
