# Aura Air Engineering & Misting Systems — Website

Marketing & lead-generation website for **Aura Air Engineering & Misting Systems**
(a Gladson group company). Built with **Next.js 16 (App Router)**, **TypeScript**,
**Tailwind CSS v4**, and deployed on **Vercel**.

> Tagline: _Engineering Environments. Enhancing Life._

## Stack

| Layer      | Choice                                      |
| ---------- | ------------------------------------------- |
| Framework  | Next.js 16 (App Router, static prerender)   |
| Language   | TypeScript                                  |
| Styling    | Tailwind CSS v4 (brand palette as CSS vars) |
| Fonts      | Montserrat (display) + Inter (body)         |
| Icons      | lucide-react (brand logos inline SVG)       |
| Forms      | Web3Forms (free, no backend)                |
| Hosting    | Vercel                                      |

## Brand palette

Primary `#122F4D` · Secondary `#1E6799` · Accent `#B19F7C` · Surface `#F5EFDF`
· Canvas `#FAFAF7` · Line `#D1D1D1` · Ink `#1F2937`. Defined in
`src/app/globals.css`.

## Project structure

```
src/
  app/                 # routes (home, about, solutions, industries, careers, contact, …)
    solutions/[slug]/  # dynamic solution detail pages (SSG)
    sitemap.ts robots.ts
  components/          # Navbar, Footer, Logo, forms, UI primitives
  lib/
    site.ts            # contacts, nav, social, form key
    content.ts         # solutions, industries, stats, certifications
    faqs.ts            # FAQ content per page
```

To edit copy, services, or FAQs, change the files in `src/lib/` — no component edits needed.

## Local development

```bash
npm install
cp .env.example .env.local   # add your Web3Forms key
npm run dev                  # http://localhost:3000
npm run build                # production build check
```

## Contact forms

Forms post to [Web3Forms](https://web3forms.com) (free). Create an access key tied
to `info@auraairengineering.com` and set it as `NEXT_PUBLIC_WEB3FORMS_KEY` locally
and in Vercel → Project → Settings → Environment Variables. Until set, forms show a
configuration notice and won't deliver.

## Deploy to Vercel

**Option A — Git (recommended):**

```bash
git remote add origin https://github.com/auraairengineering-sys/auraairengineering-website.git
git push -u origin main
```

Then import the repo at [vercel.com/new](https://vercel.com/new), add the
`NEXT_PUBLIC_WEB3FORMS_KEY` env var, and deploy. Set the custom domain
`auraairengineering.com` in Vercel → Domains.

**Option B — Vercel CLI:**

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## SEO

- Per-page metadata + Open Graph (via the Next.js Metadata API)
- `sitemap.xml` and `robots.txt` generated automatically
- JSON-LD structured data: Organization, Service (per solution), FAQPage
- Semantic headings, descriptive alt text, canonical URLs

## TODO before launch

- [ ] Replace the placeholder SVG logo (`src/components/Logo.tsx`) with the real brand logo
- [ ] Add real social URLs in `src/lib/site.ts`
- [ ] Set the Web3Forms key
- [ ] Add real Projects/Case Studies & Insights content (currently "coming soon")
- [ ] Integrate Zoho Commerce on the Products page
- [ ] Legal review of Privacy & Terms pages
- [ ] (Optional) Multilingual support — EN/AR/ES/FR was discussed in planning
