import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { OPEN_DAY_CITY, OPEN_DAY_TOPIC, nextOpenDay, openDayDate, openDayTime } from "@/lib/open-day";
import { ADDRESS, CONTACT_EMAIL, CONTACT_NAME, LEGAL_ENTITY, PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Gideon Solutions — a question, a bug, or a form you wish one of the products filed. A person answers.",
};

/** `?about=` → the form's "About" choice: `open-day` for an RSVP, or a product's key. */
function interestFor(about: string | undefined): string {
  if (about === "open-day") return OPEN_DAY_TOPIC;
  return PRODUCTS.find((p) => p.key === about)?.name ?? "";
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ about?: string | string[] }>;
}) {
  const { about } = await searchParams;
  const interest = interestFor(Array.isArray(about) ? about[0] : about);
  const rsvp = interest === OPEN_DAY_TOPIC;
  const next = nextOpenDay();
  return (
    <div className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-gideon-blue">Contact</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Write to us.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
          A question about one of the products, a bug, a form you wish we filed —
          send it here. A person reads it and answers.
        </p>

        {rsvp && (
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-slate-800">
            <p className="font-semibold">RSVP for Gideon Open Day</p>
            <p className="mt-1 text-sm leading-relaxed">
              {next
                ? `${openDayDate(next)}, ${openDayTime(next)}, ${OPEN_DAY_CITY}${next.tentative ? " (date tentative)" : ""}. `
                : "The next date is being set; we'll write when it is. "}
              Tell us your name, your business, and the problem you&rsquo;d like to bring. We&rsquo;ll
              reply with the address.
            </p>
          </div>
        )}

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <ContactForm
            defaultInterest={interest}
            messagePlaceholder={rsvp ? "Your business, and the problem you'd like to bring." : undefined}
          />
        </div>

        <div className="mt-8 grid gap-6 text-sm text-slate-600 sm:grid-cols-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</h2>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 block font-medium text-gideon-blue hover:underline">
              {CONTACT_EMAIL}
            </a>
            <p className="mt-2">For help inside a product, its own site has a contact page too.</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Post</h2>
            <address className="mt-2 not-italic leading-relaxed">
              <span className="block font-medium text-slate-800">{CONTACT_NAME}</span>
              <span className="block">{LEGAL_ENTITY}</span>
              <span className="block">{ADDRESS.street1}</span>
              <span className="block">
                {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
              </span>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
