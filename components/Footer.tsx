import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">
              Gideon Solutions
            </h3>
            <p className="text-sm leading-relaxed">
              Small, focused products and professional services for
              individuals and businesses.
            </p>
          </div>

          {/* Products links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.gideontax.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Gideon Tax
                </a>
              </li>
              <li>
                <a
                  href="https://www.gideontasks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Gideon Tasks
                </a>
              </li>
              <li>
                <a
                  href="https://www.gideonsteward.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Gideon Steward
                </a>
              </li>
              <li>
                <a
                  href="https://www.gideonkeep.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Gideon Keep <span className="text-xs text-gray-500">(soon)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/tax-returns"
                  className="transition-colors hover:text-white"
                >
                  Tax Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/services/websites"
                  className="transition-colors hover:text-white"
                >
                  Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-support"
                  className="transition-colors hover:text-white"
                >
                  IT Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-work"
                  className="transition-colors hover:text-white"
                >
                  Custom Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:ian@gideonsolutions.us"
                  className="transition-colors hover:text-white"
                >
                  ian@gideonsolutions.us
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Gideon Solutions. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
