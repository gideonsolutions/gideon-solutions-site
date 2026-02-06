import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Company info */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">
              Gideon Solutions
            </h3>
            <p className="text-sm leading-relaxed">
              Professional services for individuals and businesses. Tax
              preparation, web development, custom software, and IT support.
            </p>
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
                  href="/services/custom-work"
                  className="transition-colors hover:text-white"
                >
                  Custom Work
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
