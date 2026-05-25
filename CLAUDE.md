# CLAUDE.md

Project-specific context for Claude Code sessions working in this repo. Inherits the voice and behavior rules from `/Users/granteadie/CLAUDE.md` (the top-level working directory file). Read both.

## What this project is

Two things in one repo:

1. **Grant's personal portfolio at granteadie.com.** Lives at `app/page.tsx`. Animated hero, work timeline, skills, contact. Personal/warm voice.
2. **A tailored resume + cover letter system at `/resumes/[role-slug]`.** Built so Grant can ship a custom resume and matching cover letter per job application in about three minutes. Each is print-perfect (vector PDF via `window.print()`), hard-locked to a single 8.5×11 page.

The portfolio is the public face. The resume system is a working tool.

## Stack

- Next.js 16 App Router, TypeScript
- Tailwind CSS v4 (theme via `app/globals.css`)
- GSAP for hero + heading animations (main page only)
- Local Loram + Google DM Sans loaded in `app/layout.tsx`
- No test suite

## File layout

```
app/
  page.tsx                          # Main portfolio (granteadie.com)
  portfolio/page.tsx                # PDF portfolio viewer
  components/                       # FadeInSection, AnimatedHeading, etc.
  resumes/
    page.tsx                        # Index listing every tailored doc
    [role-slug]/
      page.tsx                      # Resume
      cover-letter/page.tsx         # Matching cover letter
  _resume/                          # Shared infra (underscore = not a route)
    LetterShell.tsx                 # Toolbar + page wrapper + print CSS
    templates/                      # Starter files for new tailored resumes
```

See `README.md` for the 3-minute workflow to add a new tailored resume.

## Shipped tailored resumes (as of 2026-05-25)

| Slug | Company | Role |
|---|---|---|
| `all-points` | All Points 3PL | Director of Digital Marketing |
| `okta-conversational-marketing` | Okta | Conversational Marketing Specialist |
| `unrivaled-sports` | Unrivaled Sports | Contract Graphic Designer |
| `workos` | WorkOS | Brand Designer |

Each has a matching `/cover-letter` route. `/marketing` redirects to `/resumes/all-points` (legacy URL) via `next.config.ts`.

## How tailored resumes work

Every resume and cover letter renders inside `<LetterShell label="..." sheetColor="..." frameColor="...">`. The shell:

- Provides the sticky dark toolbar with the "Download PDF" button
- Wraps the printable sheet (8.5×11 in)
- Sets `@page` and `@media print` CSS so printing produces a clean single page
- Does *not* impose visual theme — each page provides its own typography, colors, and layout inside its `<article className="...-page">` block

Three visual styles exist so far:
- **Tech-modern** (white sheet, blue accent, two-column): All Points, Okta. Template at `app/_resume/templates/resume-tech-modern.tsx.template`.
- **Editorial** (cream sheet, italic Loram display, single column): Unrivaled Sports. No extracted template yet (copy `unrivaled-sports/page.tsx` directly).
- **Minimal-technical** (white sheet, sans throughout, single small dot accent): WorkOS. Designed for SaaS/dev-tool brand contexts.

## Positioning Grant is running across applications

Three angles, picked per role type:

1. **Marketing-leaning roles** (All Points, Okta-style): "marketing-minded developer who turns websites into qualified-lead engines + AI workflow operator." Hard-leans on Rare Dimension agency work + custom Claude agents + GA4/SEO chops.
2. **Design-leaning roles** (Unrivaled, WorkOS-style): "designer first, twelve years of brand identity / editorial / motion / web, who also happens to be technical." Surfaces music industry visual roots + Workona dev-tool credential.
3. **Personal site (granteadie.com)**: stays broad and warm. Subtitle "Designer · Developer · Etc". Original community-focused bio preserved. **No "AI Operator" or similar buzzword labels** — Grant finds those goofy on a personal site, so AI stays in resumes/LinkedIn only, not on the public portfolio.

## Categories of roles to watch for

Good fits:
- Director / Head of Digital Marketing at small-to-mid B2B service companies
- Brand Designer / Design Lead at design-forward SaaS (especially dev tools — Workona experience makes the dev-tool world a natural match)
- AI-fluent marketing / content / ops roles
- Contract design gigs (sports, music, lifestyle)
- Hybrid Bellevue/Seattle (Grant is 90 min north in Bellingham)

Skip:
- Pure backend engineer roles (stack mismatch; reduces him to his weakest dimension)
- Internal-only postings (King County etc., can't apply)
- Anything where the design + dev + marketing + AI combo gets flattened to one axis

## Pipeline status

Active applications and the strategic context behind each are tracked in `application-brief.md` (gitignored, lives locally). Memory files at `/Users/granteadie/.claude/projects/-Users-granteadie-projects-grant-eadie-resume/memory/` hold the same context for Claude sessions. **Ask Grant for current status if it matters — it changes fast.**

## Local-only files (gitignored)

These exist in Grant's working tree but are excluded from the repo for privacy:

- `application-brief.md` — strategic brief he pastes into fresh AI chats for application drafting help. Has the "things I'll claim with what confidence" table.
- `linkedin-update.md` — copy-paste-ready LinkedIn profile content.

Both should stay gitignored. Treat them as authoritative on positioning when current.

## Voice rules

From the top-level CLAUDE.md. Reinforce here because they matter most across these documents:

- **No em dashes.** Use commas, periods, parentheses, or " — " typed as separate words. The rule is hard. Date ranges use en dashes (–) which are typographically correct and not what the rule bans.
- Plain English, conversational. No corporate jargon, no "synergize," no "leverage actionable insights."
- Confident but not cocky. Specific over vague.
- Push back when Grant is about to do something dumb. Don't just agree.
- Don't invent specifics on resumes or cover letters. See the brief for what to claim with what confidence.

## How to add a new tailored resume

The fast path:

1. Copy `app/_resume/templates/resume-tech-modern.tsx.template` (or clone an existing role's `page.tsx`) to `app/resumes/<new-slug>/page.tsx`.
2. Fill in the TODO sections. Keep imports correct for the nesting depth.
3. Add the matching cover letter at `app/resumes/<new-slug>/cover-letter/page.tsx`.
4. Add a row to the `RESUMES` array in `app/resumes/page.tsx`.

When in doubt, mirror an existing role.

## Deploy

Push to `main` on `github.com/GrantEadie/grants-resume`. Vercel auto-deploys to granteadie.com from there.

## Component reference (main page only)

These live in `app/components/` and are used by `app/page.tsx`. The `/resumes` system does not use them — resumes are self-contained inside their `<LetterShell>`.

- `FadeInSection` — Intersection Observer scroll reveal wrapper with `delay` prop
- `AnimatedHeading` — GSAP letter-by-letter entrance + cursor-repel hover
- `AnimatedHeroHeading` — hero-specific variant
- `AnimatedDecorativeShape` — GSAP SVG path-draw animation
- `ThemeToggle` — light/dark switcher; toggles `.dark` class on `<html>`, persisted to localStorage
- `PDFViewerClient` — dynamically imported (`ssr: false`) for `react-pdf` compatibility
