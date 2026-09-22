/**
 * The products Gideon Solutions builds — the one list the home page, the
 * footer, the contact form and the sitemap read, so a product is added or
 * described in exactly one place.
 *
 * The blurbs are what each product's own site says about itself, shortened;
 * they carry no prices, because prices live on the product sites and drift.
 */

export type ProductStatus = "live" | "waitlist";

export interface Product {
  /** URL slug used for anchors and keys. */
  key: string;
  name: string;
  /** One line — what it is. */
  tagline: string;
  /** Two or three sentences — who it is for and what it does. */
  description: string;
  href: string;
  status: ProductStatus;
  /** Tailwind classes for the card's accent (icon tile + hover ring). */
  accent: string;
}

export const PRODUCTS: readonly Product[] = [
  {
    key: "tax",
    name: "Gideon Tax",
    tagline: "Honest IRS e-file for businesses and tax professionals",
    description:
      "Excise returns (Forms 2290, 720 and 8849), the employment-tax series (Forms 940–945), information returns and more, e-filed straight to the IRS. Prices are stated before you start, every return is checked before you pay, and a person reviews what the software cannot.",
    href: "https://www.gideontax.com/",
    status: "live",
    accent: "bg-blue-600",
  },
  {
    key: "trucker-tax",
    name: "Gideon Trucker Tax",
    tagline: "Form 2290 and Schedule 6 refunds, for truckers, in English and Spanish",
    description:
      "The Heavy Highway Vehicle Use Tax without the upsells: file Form 2290, get your stamped Schedule 1, renew next year for a dollar a truck, and claim a Form 8849 refund when a truck is sold, destroyed, stolen or driven under the mileage limit.",
    href: "https://www.gideontruckertax.com/",
    status: "live",
    accent: "bg-amber-600",
  },
  {
    key: "keep",
    name: "Gideon Keep",
    tagline: "The durable memory of your tax life",
    description:
      "Tax forms are temporary; your tax history shouldn't be. Keep retains, verifies and structures the facts, documents, relationships and carryforwards a return is built from, so each January starts from what is already known. In development, alongside Gideon Tax; the waitlist is open.",
    href: "https://www.gideonkeep.com/",
    status: "waitlist",
    accent: "bg-emerald-600",
  },
  {
    key: "steward",
    name: "Gideon Steward",
    tagline: "Know what's due, what's saved, what's safe to spend",
    description:
      "Money, bills, documents and deadlines in one calm place, before any of them become emergencies. Built on the idea of stewardship: taking care of what you've been given. No ads, no upsells, a free month to start.",
    href: "https://www.gideonsteward.com/",
    status: "live",
    accent: "bg-violet-600",
  },
  {
    key: "tasks",
    name: "Gideon Tasks",
    tagline: "A trustworthy task marketplace for your community",
    description:
      "An invite-only marketplace for everyday work — errands, repairs, tutoring, tax prep. Doers are vouched for by their local church, nonprofit or community organization; payments are held in escrow through Stripe, under one transparent fee that falls as the community grows.",
    href: "https://www.gideontasks.com/",
    status: "live",
    accent: "bg-rose-600",
  },
] as const;

/** The company's contact address, single-sourced. */
export const CONTACT_EMAIL = "ian@gideonsolutions.us";
export const SITE_URL = "https://gideonsolutions.us";
