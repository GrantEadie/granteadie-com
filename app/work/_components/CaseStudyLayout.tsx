import Link from "next/link";
import ThemeToggle from "../../components/ThemeToggle";
import FadeInSection from "../../components/FadeInSection";

export interface CaseStudy {
  slug: string;
  title: string;
  subhead: string;
  meta: {
    year: string;
    services: string;
    with?: string;
    live?: { label: string; href: string };
  };
  brief: string;
  approach: string;
  deliverables: {
    label: string;
    body: string;
    link?: { label: string; href: string };
  }[];
  nextProject?: { slug: string; title: string };
}

function MetaRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[200px_1fr] gap-x-4 sm:gap-x-6 gap-y-1 py-3 sm:py-4">
      <dt className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.22em] uppercase opacity-60 pt-1">
        ── {label}
      </dt>
      <dd className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-lg break-words">
        {value}
      </dd>
    </div>
  );
}

function BodyBlock({
  label,
  body,
  link,
}: {
  label: string;
  body: string;
  link?: { label: string; href: string };
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-x-8 gap-y-3 py-7 sm:py-12">
      <dt className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.22em] uppercase opacity-60 pt-1">
        ── {label}
      </dt>
      <dd className="font-[family-name:var(--font-dm-sans)] text-base sm:text-lg leading-relaxed max-w-prose">
        <p>{body}</p>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-[11px] sm:text-sm tracking-[0.18em] uppercase underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
          >
            {link.label} →
          </a>
        )}
      </dd>
    </div>
  );
}

export default function CaseStudyLayout({ data }: { data: CaseStudy }) {
  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#2A09F3] text-[#2A09F3] dark:text-[#FFFFFF]">
      <ThemeToggle />

      <main className="px-5 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto">
          {/* header: wordmark + breadcrumb */}
          <header className="flex items-baseline justify-between gap-4 pb-3 sm:pb-4">
            <Link
              href="/"
              className="font-[family-name:var(--font-dm-sans)] text-[11px] sm:text-base font-semibold tracking-[0.25em] uppercase hover:opacity-70 transition-opacity"
            >
              ← Grant Eadie
            </Link>
            <span className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-sm tabular-nums tracking-wider opacity-60">
              (work / {data.slug})
            </span>
          </header>

          {/* title block */}
          <FadeInSection>
            <div className="py-12 sm:py-24 md:py-32">
              <h1 className="font-[family-name:var(--font-loram)] text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-4 sm:mb-6 max-w-4xl">
                {data.title}
              </h1>
              <p className="font-[family-name:var(--font-dm-sans)] text-base sm:text-xl md:text-2xl leading-relaxed max-w-2xl opacity-90">
                {data.subhead}
              </p>
            </div>
          </FadeInSection>

          {/* metadata */}
          <FadeInSection delay={100}>
            <dl className="divide-y divide-[#2A09F3]/15 dark:divide-[#FFFFFF]/15 border-y border-[#2A09F3]/15 dark:border-[#FFFFFF]/15 mb-16">
              <MetaRow label="YEAR" value={data.meta.year} />
              <MetaRow label="SERVICES" value={data.meta.services} />
              {data.meta.with && <MetaRow label="WITH" value={data.meta.with} />}
              {data.meta.live && (
                <MetaRow
                  label="LIVE"
                  value={
                    <a
                      href={data.meta.live.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
                    >
                      {data.meta.live.label} →
                    </a>
                  }
                />
              )}
            </dl>
          </FadeInSection>

          {/* brief + approach + deliverables */}
          <dl className="divide-y divide-[#2A09F3]/15 dark:divide-[#FFFFFF]/15 border-b border-[#2A09F3]/15 dark:border-[#FFFFFF]/15">
            <FadeInSection delay={150}>
              <BodyBlock label="BRIEF" body={data.brief} />
            </FadeInSection>
            <FadeInSection delay={200}>
              <BodyBlock label="APPROACH" body={data.approach} />
            </FadeInSection>
            {data.deliverables.map((deliverable, i) => (
              <FadeInSection key={deliverable.label} delay={250 + i * 50}>
                <BodyBlock
                  label={deliverable.label}
                  body={deliverable.body}
                  link={deliverable.link}
                />
              </FadeInSection>
            ))}
          </dl>

          {/* footer */}
          <FadeInSection delay={500}>
            <footer className="pt-10 sm:pt-12 mt-10 sm:mt-12 flex items-baseline justify-between gap-4 flex-wrap">
              <Link
                href="/#work"
                className="font-[family-name:var(--font-dm-sans)] text-[11px] sm:text-sm tracking-[0.25em] uppercase opacity-60 hover:opacity-100 transition-opacity"
              >
                ← All Work
              </Link>
              {data.nextProject && (
                <Link
                  href={`/work/${data.nextProject.slug}`}
                  className="font-[family-name:var(--font-dm-sans)] text-[11px] sm:text-sm tracking-[0.25em] uppercase opacity-60 hover:opacity-100 transition-opacity"
                >
                  Next: {data.nextProject.title} →
                </Link>
              )}
            </footer>
          </FadeInSection>
        </div>
      </main>
    </div>
  );
}
