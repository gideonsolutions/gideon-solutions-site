import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/products";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Gideon Solutions — a question, a bug, or a form you wish one of the products filed. A person answers.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Contact</p>
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

        <p className="mt-6 text-sm text-slate-500">
          Or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-blue-700 hover:underline">
            {CONTACT_EMAIL}
          </a>
          . For help inside a product, the product&rsquo;s own site has its contact page too.
        </p>
      </div>
    </div>
  );
}
