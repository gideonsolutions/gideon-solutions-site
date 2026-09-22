"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { useActionState, useState } from "react";
import { sendContactEmail, type ContactResult } from "@/app/contact/action";
import { PRODUCTS } from "@/lib/products";

/** Set on the Vercel project when the Turnstile widget exists; absent, the form still works (see action.ts). */
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactResult | null, FormData>(
    sendContactEmail,
    null,
  );
  // When the form was first shown; a reply faster than a person can type is refused.
  const [startedAt] = useState(() => Date.now());

  return (
    <form action={formAction} className="relative space-y-5">
      <input type="hidden" name="startedAt" value={startedAt} />
      {/* A field no person sees or fills; a script filling every box does. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
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

      {TURNSTILE_SITE_KEY && (
        <Turnstile siteKey={TURNSTILE_SITE_KEY} options={{ size: "normal", theme: "light" }} />
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-gideon-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
