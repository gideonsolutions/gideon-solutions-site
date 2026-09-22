import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ADDRESS, CONTACT_EMAIL, CONTACT_NAME, LEGAL_ENTITY } from "@/lib/products";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Gideon Solutions — a question, a bug, or a form you wish one of the products filed. A person answers.",
};

export default function ContactPage() {
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

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <ContactForm />
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
