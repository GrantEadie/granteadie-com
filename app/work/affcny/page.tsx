import type { Metadata } from "next";
import CaseStudyLayout, { type CaseStudy } from "../_components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "AFFCNY — Grant Eadie",
  description:
    "Site rebuild for a 50-year-old foster, adoptive, and kinship family nonprofit in New York, with Rare Dimension.",
};

const data: CaseStudy = {
  slug: "affcny",
  title: "AFFCNY",
  subhead:
    "A 50-year-old New York nonprofit serving foster, adoptive, and kinship families. Site rebuild on Bricks Builder with major performance and maintenance wins.",
  meta: {
    year: "2024",
    services: "Web design, custom development, information architecture",
    with: "Rare Dimension",
    live: { label: "affcny.org", href: "https://affcny.org" },
  },
  brief:
    "AFFCNY has served foster, adoptive, and kinship families across New York for 50 years. Their existing WordPress site had grown into something staff couldn't easily maintain: 50+ plugins, page loads averaging 4.5 seconds, and an information architecture that buried the calls to action. Events and family resources were the most-used parts of the site, but the hardest to find.",
  approach:
    "Rebuilt the site on Bricks Builder with native Gutenberg editing so staff could publish without learning a separate tool. Dropped plugin count from 50+ to 6. Reworked information architecture from the ground up alongside Take Two Services, who handled the copy. Custom calendar and event handling, dynamic navigation that adapts to family situation, and the full legacy site archived rather than dropped.",
  deliverables: [
    {
      label: "CONTENT + IA",
      body: "A full information-architecture overhaul, alongside Take Two Services. Consolidated redundant pages, sharpened the language and calls to action, and reorganized the site around how families actually use it (events, resources, contact) instead of how the org chart looks.",
    },
    {
      label: "BUILD",
      body: "Custom Bricks Builder setup that publishes to native Gutenberg blocks, so staff can write and edit without learning a new tool. Bespoke calendar with event categorization, dynamic navigation that responds to family type, and an architecture that won't drift back into plugin sprawl.",
    },
    {
      label: "RESULTS",
      body: "Page load times went from 4.5 seconds to 0.2 seconds. Plugin count down 90%. Staff can publish on their own without the site getting brittle. The legacy site was archived rather than dropped, so nothing was lost in the migration.",
    },
  ],
  nextProject: { slug: "twispworks", title: "TwispWorks Foundation" },
};

export default function Page() {
  return <CaseStudyLayout data={data} />;
}
