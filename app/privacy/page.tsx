import type { Metadata } from "next";
import Link from "next/link";
import { ADDRESS, CONTACT_EMAIL, LEGAL_ENTITY, PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What gideonsolutions.us collects, what it does with it, and how to reach the person responsible.",
};

const UPDATED = "September 22, 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-gideon-blue">Privacy</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          What this site collects, and what it does with it.
        </h1>
        <p className="mt-4 text-sm text-slate-500">Last updated {UPDATED}.</p>

        <div className="prose-slate mt-10 space-y-8 text-base leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">This page covers gideonsolutions.us only</h2>
            <p className="mt-2">
              This is the company site of {LEGAL_ENTITY}. It describes our products and lets you write to
              us. It has no accounts, takes no payments, and holds no tax data. Each product runs on its
              own site with its own privacy policy, which governs what you do there:{" "}
              {PRODUCTS.map((p, i) => (
                <span key={p.key}>
                  <a href={p.href} className="text-gideon-blue hover:underline" target="_blank" rel="noopener noreferrer">
                    {p.name}
                  </a>
                  {i < PRODUCTS.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">The contact form</h2>
            <p className="mt-2">
              When you write to us, the name, email address, subject and message you type are sent as an
              email to {CONTACT_EMAIL} through Resend, our email provider, and kept in that mailbox so we
              can reply. We use them for nothing else: no list, no newsletter, no sharing. Ask and we
              delete the thread.
            </p>
            <p className="mt-2">
              To keep the form from being used by bots, it carries a hidden field a person never fills
              in, notes how long the form was open, and — where enabled — asks Cloudflare Turnstile to
              confirm a person sent it. Turnstile may set a cookie of its own for that check;{" "}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                className="text-gideon-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare&rsquo;s policy
              </a>{" "}
              describes it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Analytics</h2>
            <p className="mt-2">
              We use Vercel Web Analytics to count page views. It sets no cookies and stores no personal
              data: each visit is recorded as a hashed, unnamed event that is not tied to you across days
              or sites. It tells us which pages are read, not who read them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Hosting</h2>
            <p className="mt-2">
              The site is served by Vercel, which keeps ordinary server logs (IP address, time, page
              requested) for a short period to run and secure the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Cookies</h2>
            <p className="mt-2">
              This site sets none of its own. The only cookie that can appear is Turnstile&rsquo;s, on the
              contact page, when that check is on.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Who is responsible</h2>
            <p className="mt-2">
              {LEGAL_ENTITY}, {ADDRESS.street1}, {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}. Questions
              about this page, or a request to see or delete what we hold from a message you sent, go to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gideon-blue hover:underline">
                {CONTACT_EMAIL}
              </a>{" "}
              or the <Link href="/contact" className="text-gideon-blue hover:underline">contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
