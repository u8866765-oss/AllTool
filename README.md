# ToolNova source code

Next.js 14 + TypeScript static-export starter for a global online tools website.

## Included
- Premium responsive interface with light/dark theme
- Searchable homepage, six categories and 20 individual tool pages
- Unique metadata/canonical URLs, sitemap, robots.txt and WebApplication structured data
- Working browser-side tools: image resize/format export, word/character counter, case converter, duplicate-line remover, password generator, UUID, age, percentage, discount and BMI calculators
- Adsterra placement placeholders and ads.txt placeholder
- About, Contact, Privacy, Terms and Disclaimer pages

## Important: before public launch
Some catalogue entries are intentionally marked as not fully implemented: QR code image rendering and PDF merger/splitter/JPG-to-PDF need tested client-side libraries. Image compressor currently performs basic canvas JPEG export, not advanced optimization; image cropper is currently a resize/export starter. Do not advertise incomplete features as working.
Replace the placeholder domain `toolnova.pages.dev`, email `hello@yourdomain.com`, legal text and sitemap URLs with your real details. Add the exact Adsterra code and ads.txt record only after publisher approval. Update the privacy policy for the services you actually use.

## Run locally
Node.js 18.17+:
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build static site
```bash
npm run build
```
Static output is generated in `out/`.

## Cloudflare Pages deployment
1. Push this folder to a GitHub repository.
2. Create a Cloudflare Pages project and connect the repository.
3. Build command: `npm run build`
4. Build output directory: `out`
5. Deploy. Replace canonical and sitemap hostnames with the assigned Pages hostname.
6. Add a custom domain later if you purchase one.

## Adsterra
Insert only the ad code supplied by your approved Adsterra account. Keep ads separate from tool controls and result/download buttons. Add the exact publisher record to public/ads.txt if supplied.

## SEO launch checklist
- Verify the live domain in Google Search Console and submit /sitemap.xml
- Confirm canonical URLs and robots.txt use the actual hostname
- Write original instructions, examples and limitations for every tool
- Test all features, keyboard access, mobile layouts and Core Web Vitals
- Do not publish thin or duplicate pages
