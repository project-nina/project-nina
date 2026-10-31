# Project Nina

Website for Nina, a Christchurch renovator (as-is, where-is, TLC, assisted sales, subdivisions). Two pathways from the hero: agents and private owners/landlords. Contacting Nina is one tap everywhere.

- Next.js 15 app, self-contained in this folder.
- All wording lives in `src/content/copy.ts`. Items marked `PLACEHOLDER` need real details.
- Media in `public/media/` (banner film, posters, Nina's photos).
- Enquiries POST to `/api/lead`, which forwards to `LEAD_WEBHOOK_URL` when set.
- Noindex until launch: `src/app/robots.ts`, the `robots` metadata in `src/app/layout.tsx` and the `X-Robots-Tag` header in `next.config.mjs`.

## Run locally

```bash
npm install
npm run dev   # http://localhost:3100
```

## Hosting now

Vercel project `pitch-project-nina` on Kiri's account. The domain `www.project-nina.co.nz` is registered at GoDaddy; point it at Vercel with the DNS records Vercel gives when the domain is added (usually an A record `76.76.21.21` for the bare domain and a CNAME `cname.vercel-dns.com` for `www`).

## Handing over to Nina later

1. **Code**: Kiri creates a repo for Nina (or Nina creates one and adds Kiri), then from the `pitches` repo: `git subtree split --prefix project-nina -b project-nina-export` and push that branch to the new repo's `main`. Then transfer the repo to Nina's GitHub account (Settings → Transfer).
2. **Hosting**: in Vercel, transfer the `pitch-project-nina` project to Nina's Vercel account or team (Project Settings → Transfer), or import her new repo into her own Vercel account. Re-add the `LEAD_WEBHOOK_URL` environment variable there.
3. **Domain**: move the domain into Nina's GoDaddy account (GoDaddy account change), then add it to her Vercel project and keep the same DNS records.
4. **Go public**: remove the three noindex settings above and redeploy.
