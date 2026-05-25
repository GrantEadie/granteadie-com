# Grant Eadie Resume Site

The portfolio site at `granteadie.com`, plus a system for shipping tailored resumes and cover letters per job application.

## Run it

```bash
npm run dev
```

Then open http://localhost:3000.

## Project layout

```
app/
  page.tsx                          ← main portfolio (granteadie.com)
  portfolio/page.tsx                ← PDF portfolio viewer
  resumes/
    page.tsx                        ← index of all tailored resumes
    all-points/
      page.tsx                      ← resume
      cover-letter/page.tsx         ← cover letter
    okta-conversational-marketing/
      page.tsx
      cover-letter/page.tsx
    unrivaled-sports/
      page.tsx
      cover-letter/page.tsx
  _resume/                          ← shared infra (underscore = not a route)
    LetterShell.tsx                 ← toolbar + page chrome + print CSS
    templates/                      ← starter files for new tailored resumes
```

## Adding a new tailored resume

Three minutes, end to end.

1. **Pick a template** that matches the visual style you want:
   - Tech-modern (white, two-column, blue accent) → `app/_resume/templates/resume-tech-modern.tsx.template`
   - Editorial (cream, single-column, magazine-style) → copy `app/resumes/unrivaled-sports/page.tsx` directly

2. **Copy and rename** to:
   ```
   app/resumes/<role-slug>/page.tsx
   ```
   (Drop the `.template` extension.)

3. **Fill in the marked sections** (look for `TODO:` comments). Update the import path if your slug nesting changes.

4. **Add an entry** to the `RESUMES` array in `app/resumes/page.tsx` so it shows in the index.

## Adding a matching cover letter

Same pattern, one level deeper:

1. Copy `app/_resume/templates/cover-letter-tech-modern.tsx.template` to:
   ```
   app/resumes/<role-slug>/cover-letter/page.tsx
   ```
2. Update the `TODO:` sections. Pay attention to the import path — it's `../../../_resume/LetterShell` from inside `cover-letter/`.
3. The `/resumes` index auto-shows it if you set `hasLetter: true` on the RESUMES entry.

## How the print/PDF mechanism works

Every resume and cover letter renders inside `<LetterShell>`, which provides:

- A sticky dark toolbar with a "Download PDF" button
- The 8.5×11in letter page constraint
- `@media print` and `@page` CSS so printing produces a vector-perfect single page

Clicking Download PDF calls `window.print()`. In the browser dialog, choose "Save as PDF" to export. No JS PDF libraries, no rasterization. Fonts and color are preserved.

If your content overflows 11in, the `overflow: hidden` on the page silently clips it. Trim content until everything fits.

## URL redirects

`next.config.ts` includes a redirect from `/marketing` → `/resumes/all-points` (the old All Points URL). Add more redirects there as you reorganize.

## Voice rules (because it matters across these documents)

- No em dashes. Use commas, periods, parentheses, or " — " typed as words.
- Plain English. No corporate jargon.
- Don't invent specifics. See `application-brief.md` for what you'll claim vs. avoid.

## Application brief

`application-brief.md` at the project root is the working brief you drop into a fresh AI chat to help draft answers for online applications and interviews. Keep it current as roles change.
