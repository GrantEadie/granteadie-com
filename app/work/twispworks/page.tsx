import type { Metadata } from "next";
import CaseStudyLayout, { type CaseStudy } from "../_components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "TwispWorks Foundation — Grant Eadie",
  description:
    "Brand and web design for a nonprofit campus in the Methow Valley, with Rare Dimension.",
};

const data: CaseStudy = {
  slug: "twispworks",
  title: "TwispWorks Foundation",
  subhead:
    "A nonprofit campus and cultural hub in Methow Valley, Washington. Brand identity and custom WordPress build with Rare Dimension.",
  meta: {
    year: "2022",
    services: "Web design, brand identity, custom code, print",
    with: "Rare Dimension",
    live: { label: "twispworks.org", href: "https://twispworks.org" },
  },
  brief:
    "TwispWorks runs a community campus on a former Forest Service site in Twisp, Washington. Workspaces, museum, arts programs, lodging, all spread across a sprawling property. They needed a brand that could carry the breadth of their programs, a website that could show all of it without becoming a kitchen sink, and a way for visitors to actually find their way around the campus.",
  approach:
    "Built the brand identity from the ground up: logo, type, color, full guidelines. Custom WordPress site organized around how the campus actually works, not how a typical org chart looks. The most interesting problem was wayfinding. Visitors kept getting lost on a property with no clear map, so we built a hand-drawn campus map overlaid on satellite imagery, with all building data driven by the CMS so staff could keep it current themselves.",
  deliverables: [
    {
      label: "LIVE MAP",
      body: "An interactive map of the TwispWorks campus, hand-drawn and overlaid on satellite imagery. Building data, tenant info, and program details all pulled from WordPress so staff update content in one place and the map updates everywhere. Solves the visitor wayfinding problem without forcing anyone to maintain a separate tool.",
    },
    {
      label: "INVESTMENT NETWORK",
      body: "An animated explainer video and visual application timeline for the Methow Investment Network, the foundation's small-business lending program. The lending process is complex enough to be intimidating; the animation makes it feel approachable enough to start. Motion graphics by Isaac Sommers, video by 2Loons Productions.",
    },
    {
      label: "PRINT",
      body: "A 14-page annual report with custom photography and copy, a condensed mailing brochure, and a two-sided strategic plan sheet. Print materials kept in the same visual system as the website so the brand reads as one thing across channels.",
    },
  ],
  nextProject: { slug: "affcny", title: "AFFCNY" },
};

export default function Page() {
  return <CaseStudyLayout data={data} />;
}
