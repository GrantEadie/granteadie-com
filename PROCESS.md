# PROCESS — granteadie.com repositioning

**Last updated:** 2026-05-27

Living doc for repositioning granteadie.com from "resume site for job applications" to "independent design + development practice for individuals and small businesses."

## Where we are now

**Phase: post-split, pre-redesign.**

The resume system (tailored resumes + cover letters at `/resumes/*`) has been extracted into a separate localhost-only project at `~/projects/resume-tool/`. This repo no longer carries that machinery and can focus on a single positioning.

`app/page.tsx` is still the old homepage (warm general portfolio voice, hero with "Designer · Developer · Etc"). It needs to be rebuilt to match the new positioning. Everything else on the site (`/portfolio` PDF viewer, components, fonts, layout) stays.

## Positioning (settled)

**Pitch:** independent design + development practice. Smaller scope than Rare Dimension, broader range: bespoke sites, dev-for-hire, working from someone else's design, custom plugins, maintenance. For individuals and small businesses.

**Tagline:** Quietly making bespoke websites and the design and code around them. Pacific Northwest.

**Visual direction:** label-grid / documentary. Loram (display) + DM Sans (labels and body). All-caps wordmark, structured metadata blocks. Restraint.

## Rungs

| # | Rung | Status |
|---|---|---|
| 1 | Split out resume-tool into its own project | Done 2026-05-27 |
| 2 | Strip resume system + old job-search docs from this repo | Done 2026-05-27 |
| 3 | Rename GitHub repo + local folder to `granteadie-com` | Pending (next step) |
| 4 | Rebuild `app/page.tsx` hero with label-grid direction | Pending |
| 5 | Add sections below hero: selected work, approach, contact | Pending |
| 6 | Sharpen copy + voice pass | Pending |
| 7 | Deploy to production via Vercel | Pending |

## Decisions log

- **2026-05-27** — Settled tagline as "Quietly making bespoke websites and the design and code around them. Pacific Northwest."
- **2026-05-27** — Settled visual direction as label-grid / documentary (Awwwards-coded but restrained, not maximalist).
- **2026-05-27** — Decided the freelance practice sits separate from Rare Dimension. Same shape, smaller scope, broader services.
- **2026-05-27** — Extracted the resume system + job-search docs into `~/projects/resume-tool/` (localhost-only, no remote, separate git history).
- **2026-05-27** — Settled the GitHub repo rename: `grants-resume` → `granteadie-com`. Local folder will match.

## Sections planned (below the hero)

Three sections, all in the same label-grid voice:

1. **Selected work** — long table-style index. Project name, year, role, one-line description. Documentary.
2. **Approach / how I work** — two or three labeled blocks (e.g. `── PROCESS`, `── STACK`, `── PRICING`).
3. **Contact** — minimal block, real email, no form.

## Open questions

- Should the existing work-timeline content (Rare Dimension, Workona, Smiling Woods Yurts, touring musician) carry forward into the new "Selected work" section, or get reshaped as project-level entries rather than employment-level entries? Probably both: a short "background" line, then a project index.
- Does the `/portfolio` PDF viewer route stay as-is, or get folded into the new homepage somehow?
- Vercel project name (currently tied to the GitHub repo name) — cosmetic rename only when we do the GitHub rename.

## Timeline

- **2026-05-27** — Repo split, docs rewritten, settled tagline + visual direction.
- **Next** — Rename GitHub + folder, then rebuild homepage.
