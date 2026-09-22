# Gideon Solutions

The company site — [gideonsolutions.us](https://gideonsolutions.us). Two pages:
the company and its products, and a contact form.

Gideon Solutions, LLC builds software for taxes and money. The products, each on
its own site, are listed once in [`lib/products.ts`](lib/products.ts) and read
from there by the home page, the footer, the contact form and the sitemap:

- **Gideon Tax** — IRS e-file for businesses and tax professionals
- **Gideon Trucker Tax** — Form 2290 and Schedule 6 refunds for truckers
- **Gideon Keep** — the durable memory of a taxpayer's history (waitlist)
- **Gideon Steward** — household money, bills, documents and deadlines
- **Gideon Tasks** — a vouched-for community task marketplace

The consulting-era service pages (`/services/*`) are gone; they redirect to `/`.

## Tech

[Next.js](https://nextjs.org) App Router, [Tailwind CSS](https://tailwindcss.com) v4,
[Resend](https://resend.com) for the contact form, deployed on [Vercel](https://vercel.com).

## Development

```bash
npm install
npm run dev
```

The contact form needs `RESEND_API_KEY` — see [`.env.example`](.env.example).
