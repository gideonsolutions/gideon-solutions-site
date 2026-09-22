"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#products", label: "Products" },
  { href: "/#about", label: "How we work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-slate-900">
          {/* The canonical mark, on white — the brand's preferred background. */}
          <Image src="/gideon-logo.svg" alt="" width={30} height={30} priority />
          Gideon Solutions
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.gideontax.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gideon-blue px-3.5 py-1.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Gideon Tax<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded-md p-1 text-slate-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 md:hidden">
          <div className="flex flex-col gap-1 px-6 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
