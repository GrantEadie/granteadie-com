# CLAUDE.md

Project-specific context for Claude Code sessions in this repo. Inherits the voice and behavior rules from `/Users/granteadie/CLAUDE.md` (the top-level working directory file). Read both.

## What this project is

**granteadie.com** — Grant's personal site, positioned as an independent design + development practice. The deployed face of "Grant Eadie, freelance" (separate from Rare Dimension, which is the agency with Matt).

Used to be a dual-purpose repo (portfolio + tailored-resume system for job applications). The resume system was extracted into `~/projects/resume-tool/` (localhost-only) so this repo can carry a single positioning.

## Positioning

The site sells: bespoke websites and the design and code around them. Small projects for individuals and small businesses. Wider scope than Rare Dimension (which is nonprofit/municipal-focused) and smaller scope than agency engagements: one-off sites, dev-for-hire, working from someone else's design, custom plugins, ongoing maintenance.

Tagline: **"Quietly making bespoke websites and the design and code around them. Pacific Northwest."**

Visual direction: **label-grid / documentary**. All-caps wordmark, structured metadata blocks (`ROLE`, `BASED`, `STATUS`, `EMAIL`), Loram for display, DM Sans for labels and body. Restraint everywhere. The site itself demonstrates the pitch.

## Relationship to Rare Dimension

Separate practice. RD is the agency (Grant + Matt, nonprofit-leaning, WordPress + Bricks + ACF). granteadie.com is for things RD wouldn't take: smaller scopes, individuals, one-offs, dev-for-hire on someone else's design.

The site shouldn't pretend RD doesn't exist (the work timeline references it as Grant's current role), but the pitch on this site is for Grant directly, not for the agency.

## Stack

- Next.js 16 App Router, TypeScript
- Tailwind CSS v4 (theme via `app/globals.css`)
- GSAP for hero + heading animations
- Local Loram + Google DM Sans loaded in `app/layout.tsx`
- Vercel auto-deploys from `main`. Domain: granteadie.com.
- No test suite

## File layout

```
app/
  page.tsx                # Main public homepage (granteadie.com)
  portfolio/page.tsx      # PDF portfolio viewer
  components/             # FadeInSection, AnimatedHeading, etc.
  layout.tsx              # Root layout, fonts, metadata
  globals.css             # Tailwind base + theme tokens
fonts/Loram.otf           # Display face
public/                   # Favicons, headshot, portfolio PDF
```

## Components

In `app/components/`, used by `app/page.tsx`:

- `FadeInSection` — Intersection Observer scroll reveal wrapper with `delay` prop
- `AnimatedHeading` — GSAP letter-by-letter entrance + cursor-repel hover
- `AnimatedHeroHeading` — hero-specific variant
- `AnimatedDecorativeShape` — GSAP SVG path-draw animation
- `ThemeToggle` — light/dark switcher; toggles `.dark` class on `<html>`, persisted to localStorage
- `PDFViewerClient` — dynamically imported (`ssr: false`) for `react-pdf` compatibility

## Voice rules

From the top-level CLAUDE.md. Reinforce here:

- **No em dashes.** Use commas, periods, parentheses, or " — " typed as separate words. Date ranges use en dashes (–) which are not what the rule bans.
- Plain English, conversational. No corporate jargon, no "synergize," no "leverage actionable insights."
- Confident but not cocky. Specific over vague.
- Push back when Grant is about to do something dumb.

## Deploy

Push to `main` on `github.com/GrantEadie/granteadie-com` (renamed from `grants-resume`). Vercel auto-deploys to granteadie.com.
