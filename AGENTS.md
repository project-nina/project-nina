# Instructions for coding agents (Codex and others)

This is the website for Project Nina (www.project-nina.co.nz), a Christchurch renovator. Read `README.md` for the plain-English owner guide. This file is the technical brief.

## Stack

- Next.js 15 App Router, React 19, TypeScript, plain global CSS (`src/app/globals.css`). No Tailwind, no UI library.
- One page: `src/app/page.tsx`. Components in `src/components/`.
- `npm install`, `npm run dev` (port 3100), `npm run build`. Run `npm run build` before every commit; it must pass with no type errors.

## Rules

- **All wording lives in `src/content/copy.ts`.** Components only read from it. Never hard-code copy in components.
- **Voice:** first person, from Nina ("Talk to me", "I buy it as-is"). Warm, plain New Zealand English (e.g. "colour", "organise"). No em-dashes.
- **Two audiences:** real estate agents, and private owners/landlords. Every section must keep calling or texting Nina one tap away (header call button, sticky bottom bar on mobile, contact section).
- **Design:** every box is square-edged (`--radius: 0`). Navy (`--ink`, `--dusk`), gold (`--gold`) and red (`--red`) palette. The cartoon Nina mascots (`public/media/*.webp`) animate in as each section scrolls into view (`MascotMotion.tsx`, `data-anim` attributes); keep `prefers-reduced-motion` respected.
- **Mobile first:** check 320, 360 and 390 px widths. Nothing may scroll sideways; the logo and the sticky bar labels must stay on one line.
- **Hero film:** `public/media/nina-banner-720p.mp4` with posters `nina-banner-start.jpg` / `nina-banner-end.jpg`, controlled by `HeroFilm.tsx` (autoplays once, can be scrubbed with the paintbrush handle). Re-encode replacements with:
  `ffmpeg -i in.mp4 -vf scale=1280:-2 -c:v libx264 -crf 29 -g 12 -bf 0 -an -movflags +faststart -pix_fmt yuv420p nina-banner-720p.mp4`
  The short keyframe interval (`-g 12`) is what makes scrubbing smooth; keep it.

## Enquiry form

`src/components/ContactForm.tsx` posts JSON to `src/app/api/lead/route.ts`, which forwards it to the `LEAD_WEBHOOK_URL` environment variable (Zapier, Make or similar). This needs a server or serverless host (Vercel, Netlify, etc.). If the site is ever exported as static files, the form must be pointed at a form service instead (for example Formspree), because the API route will not exist.

## Hosting and domain

- Intended host: Vercel, connected to this GitHub repo (pushes to `main` deploy automatically). Set `LEAD_WEBHOOK_URL` in Vercel project settings.
- Domain `project-nina.co.nz` is registered at GoDaddy. Point it at Vercel: `A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com` (use whatever Vercel's Domains page shows).

## Hidden from search until launch

Three switches keep the site out of Google. Remove all three only when Nina says to launch:
1. `src/app/robots.ts`: `disallow: "/"` becomes `allow: "/"`.
2. `src/app/layout.tsx`: delete `robots: { index: false, follow: false }`.
3. `next.config.mjs`: delete the `X-Robots-Tag` header.

## Still to do (search `copy.ts` for `PLACEHOLDER`)

- Nina's real email address (currently `hello@project-nina.co.nz`).
- Real Instagram reel links and covers (`instagram.reels`). Handle is `@nabiulina.nina` until her new account exists.
- Real testimonials.
- Before-and-after projects; the section is off (`work.show = false`) until real photos exist.
