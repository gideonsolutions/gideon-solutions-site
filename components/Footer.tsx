import Link from "next/link";
import { CONTACT_EMAIL, PRODUCTS } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-white">Gideon Solutions, LLC</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              Honest software for taxes and money: small products with the price on
              the page, no upsells, and a person behind each one.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Products</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.key}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {p.name}
                    {p.status === "waitlist" && (
                      <span className="ml-1 text-xs text-slate-500">(waitlist)</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Company</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/#about" className="transition-colors hover:text-white">
                  How we work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Gideon Solutions, LLC. All rights reserved.</p>
          <p className="text-slate-500">God bless.</p>
        </div>
      </div>
    </footer>
  );
}
