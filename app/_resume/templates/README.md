# Resume Templates

Templates for creating new tailored resumes and cover letters fast.

## What's here

- `resume-tech-modern.tsx.template` — white sheet, blue accent, dense two-column. For marketing, growth, analytics, AI, ops, conventional white-collar roles.
- `cover-letter-tech-modern.tsx.template` — companion cover letter, same visual system.
- For an editorial / design-led style, copy the structure of `app/resumes/unrivaled-sports/page.tsx` directly. (Not extracted yet — only needed it once.)

## Why .template extension

These files end in `.tsx.template` rather than `.tsx` so Next.js's App Router doesn't try to treat them as routes. The `_resume` parent folder is also underscore-prefixed for the same reason.

## Workflow for a new tailored resume

See the project root `README.md`.
