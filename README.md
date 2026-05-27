# granteadie.com

Grant Eadie's personal site. Independent design + development practice. Bespoke websites and the design and code around them.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Layout

```
app/
  page.tsx              ← main public homepage (granteadie.com)
  portfolio/page.tsx    ← PDF portfolio viewer
  components/           ← FadeInSection, AnimatedHeading, etc.
  layout.tsx            ← root layout, fonts, metadata
  globals.css           ← Tailwind base + theme tokens
fonts/Loram.otf
public/                 ← favicons, headshot, portfolio PDF
```

## Stack

- Next.js 16 (App Router), TypeScript
- Tailwind CSS v4
- GSAP for hero + heading animations
- Loram (local) + DM Sans (Google) loaded in `app/layout.tsx`

## Deploy

Push to `main` on `github.com/GrantEadie/granteadie-com`. Vercel auto-deploys to granteadie.com.

## Voice rules

- No em dashes. Use commas, periods, parentheses, or " — " typed as words.
- Plain English. No corporate jargon.
