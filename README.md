# Jaya Suriyan R: portfolio

Personal portfolio site built with Next.js 14 (App Router), TypeScript and Tailwind CSS. It's a single page with About, Experience, Projects, Skills, Education & certifications, and Contact sections, plus a working contact form.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional: only needed for the contact form
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Editing content

All text lives in [`src/data/profile.ts`](src/data/profile.ts): profile, experience, projects, skills, education and certifications. Change that file and the site updates. No component changes are needed.

- **Projects:** set `featured: true` on a project to show it as the large card. Add a `pipeline` array to draw its step diagram.
- **Email:** `profile.email` is shown on the page. Set it to `""` to hide it.

## Contact form

The form posts to `/api/contact` ([`src/app/api/contact/route.ts`](src/app/api/contact/route.ts)), which:

- validates the name, email and message
- drops bot submissions caught by a hidden honeypot field
- limits each IP to 5 messages per 10 minutes
- delivers each message by email through [Resend](https://resend.com), with the sender's address as reply-to

To turn it on, set these variables in `.env.local` and in your hosting provider:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from the Resend dashboard |
| `CONTACT_TO_EMAIL` | Inbox that receives messages |
| `CONTACT_FROM_EMAIL` | Optional sender on a domain verified in Resend. Without it, Resend's test sender only delivers to the account owner's address. |

Without these variables, the endpoint returns `503` and the form points visitors to email and LinkedIn instead.

## SEO

- Metadata, Open Graph and Twitter tags are set in [`src/app/layout.tsx`](src/app/layout.tsx).
- The link-preview image is generated in [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx).
- `sitemap.xml` and `robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`.
- `schema.org/Person` structured data is in [`src/app/page.tsx`](src/app/page.tsx).

Set `NEXT_PUBLIC_SITE_URL` to the production URL so canonical links and previews point to the right domain.

## Deploy

On Vercel, import the repository, add the environment variables above, and deploy. Vercel detects Next.js automatically and needs no other settings.
