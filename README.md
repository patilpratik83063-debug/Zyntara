# Zyntara Technologies

Enterprise AI Transformation & Intelligent Business Systems — one AI architecture, your entire business.

## Stack

- **React 19** + **Vite 6** + **TypeScript**
- **Tailwind CSS 4** (custom luxury design system — indigo / champagne on obsidian)
- **Motion** (Framer Motion 12) for scroll reveals, view transitions, and micro-interactions
- **Lucide** icons, canvas-confetti, custom particle canvas

## Run Locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
npm run lint       # TypeScript type-check (tsc --noEmit)
```

## Deploy to Vercel

The project ships with `vercel.json` (framework `vite`, output `dist`, SPA rewrites, caching + security headers) and manual code-splitting for fast loads.

### Option A — Git (recommended)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Vite — keep the defaults (Build: `npm run build`, Output: `dist`).
4. Deploy.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel            # deploy preview
vercel --prod     # deploy production
```

### Environment variables

| Name          | Required | Purpose                                      |
| ------------- | -------- | -------------------------------------------- |
| `GEMINI_API_KEY` | No*    | Gemini AI API key (used by AI Studio flows)  |

*The marketing site runs fully static without any keys. Set `GEMINI_API_KEY` only if you wire up server-side Gemini features.
