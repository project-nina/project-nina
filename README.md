# Project Nina

Website for Project Nina, www.project-nina.co.nz. Nina buys, renovates and brings tired Christchurch homes back to life (as-is, where-is, TLC, assisted sales, subdivisions). Two pathways from the top of the page: real estate agents, and private owners/landlords. Calling, texting or messaging Nina is one tap from anywhere on the page.

Built with Next.js 15. Hosted on Vercel.

## Changing the words

Every piece of text on the site lives in one file: `src/content/copy.ts`.

1. Open the file on GitHub and click the pencil icon.
2. Change the text between the quote marks. Leave the quote marks and commas in place.
3. Click **Commit changes**. Vercel rebuilds and publishes the site in about a minute.

Things still to fill in (search the file for `PLACEHOLDER`):
- Testimonials from agents and owners.
- Real Instagram reel links (`instagram.reels`). Each reel needs its link, a cover image and a caption.
- Email address, if `hello@project-nina.co.nz` isn't the one to use.
- Instagram handle: currently `@nabiulina.nina`. Change `instagram.handle` and `instagram.url` once the new account exists.
- The before-and-after section is switched off (`work.show = false`). Add real projects and set it to `true`.

## Changing pictures and the banner film

Pictures live in `public/media/`. To swap one, upload a new file with **exactly the same name** (Add file → Upload files, inside `public/media`).

- `nina-banner-720p.mp4`: the hero film. Its first and last frames are `nina-banner-start.jpg` and `nina-banner-end.jpg`.
- `nina-mascot.webp`, `nina-wave.webp`, `nina-point.webp` and the other `.webp` files: cartoon Nina in each section.
- `nina-logo.png` and `/icon.png`: the logo and the browser tab icon.
- `port-hills.jpg`: the hero background.

## Enquiry form

The form sends each enquiry to `/api/lead`. That forwards it as JSON to the address in the `LEAD_WEBHOOK_URL` setting, for example a Zapier or Make webhook that emails Nina or adds a row to a sheet. Without that setting, enquiries are only written to the Vercel logs, so set it up before launch.

In Vercel: Project → Settings → Environment Variables → add `LEAD_WEBHOOK_URL` → redeploy.

## Hosting on Vercel

1. Sign in to vercel.com with Nina's GitHub account.
2. **Add New → Project**, pick `project-nina/project-nina`, keep the defaults, click **Deploy**.
3. Add the `LEAD_WEBHOOK_URL` setting (above).

From then on, every change to `main` goes live automatically.

## Connecting www.project-nina.co.nz

1. In Vercel: Project → Settings → Domains → add `project-nina.co.nz` and `www.project-nina.co.nz`.
2. In GoDaddy: DNS for project-nina.co.nz → use the records Vercel shows. Usually that is an `A` record for `@` pointing to `76.76.21.21`, and a `CNAME` for `www` pointing to `cname.vercel-dns.com`.
3. Wait up to an hour. Vercel adds the padlock (HTTPS) on its own.

If the domain is still in Kiri's GoDaddy account, move it to Nina's first (GoDaddy → Domain → Transfer to another GoDaddy account).

## Letting Google find the site

The site is currently hidden from search engines. When Nina is ready to launch, remove these three things and commit:
- `src/app/robots.ts`: change `disallow: "/"` to `allow: "/"`.
- `src/app/layout.tsx`: delete the `robots: { index: false, follow: false }` line.
- `next.config.mjs`: delete the `X-Robots-Tag` header.

## Running it on a computer (optional)

```bash
npm install
npm run dev   # then open http://localhost:3100
```
