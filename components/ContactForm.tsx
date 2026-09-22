"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactResult } from "@/app/contact/action";
import { PRODUCTS } from "@/lib/products";

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactResult | null, FormData>(
    sendContactEmail,
    null,
  );

  return (
    <form action={formAction} className="space-y-5">
      {state && (
        <div
          role={state.success ? "status" : "alert"}
          className={`rounded-lg p-4 text-sm ${
            state.success
              ? "border border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border border-red-200 bg-red-50 text-red-900"
          }`}
        >
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Name <span className="text-red-600">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Email <span className="text-red-600">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-slate-700">
          About
        </label>
        <select id="interest" name="interest" className={inputClass} defaultValue="">
          <option value="">Choose a product, or leave it blank</option>
          {PRODUCTS.map((p) => (
            <option key={p.key} value={p.name}>
              {p.name}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea id="message" name="message" rows={6} required className={inputClass} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
