import Link from "next/link";
import { ADDRESS, CONTACT_EMAIL, CONTACT_NAME, LEGAL_ENTITY, PRODUCTS } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-slate-900">{LEGAL_ENTITY}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              Honest software for taxes and money: small products with the price on
              the page, no upsells, and a person behind each one.
            </p>
            <address className="mt-5 text-sm not-italic leading-relaxed">
              <span className="block font-medium text-slate-800">{CONTACT_NAME}</span>
              <span className="block">{ADDRESS.street1}</span>
              <span className="block">
                {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
              </span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-gideon-blue hover:underline">
                {CONTACT_EMAIL}
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Products</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.key}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-slate-900"
                  >
                    {p.name}
                    {p.status === "waitlist" && (
                      <span className="ml-1 text-xs text-slate-400">(waitlist)</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Company</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/#about" className="transition-colors hover:text-slate-900">
                  How we work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-slate-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-slate-900">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {LEGAL_ENTITY}. All rights reserved.</p>
          <p className="text-slate-500">God bless.</p>
        </div>
      </div>
    </footer>
  );
}
