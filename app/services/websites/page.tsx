import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Websites — Gideon Solutions",
  description:
    "Professional website creation and ongoing maintenance. $200–$1,000 per year depending on complexity.",
};

export default function WebsitesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Website Creation &amp; Maintenance
        </h1>
        <p className="mb-8 text-lg text-blue-600 font-semibold">
          $200 – $1,000 per year
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            We build and maintain professional websites for individuals and
            businesses. Whether you need a simple online presence or a
            full-featured business site, we handle the design, development,
            hosting, and ongoing updates.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">
            What We Offer
          </h2>
          <p>
            Pricing depends on the complexity of your site. Here&rsquo;s what
            each tier typically looks like:
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                Simple Site — $200/year
              </h3>
              <p className="mt-1 text-sm">
                A clean, single-page or small multi-page site. Perfect for a
                personal portfolio, small business landing page, or
                informational site. Includes hosting and basic updates.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                Standard Site — $500/year
              </h3>
              <p className="mt-1 text-sm">
                A multi-page site with custom design, contact forms, and
                content management. Suitable for growing businesses that need a
                more robust online presence. Includes hosting, regular updates,
                and basic SEO.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">
                Advanced Site — $1,000/year
              </h3>
              <p className="mt-1 text-sm">
                A full-featured site with advanced functionality — e-commerce
                integrations, dynamic content, custom features, and more.
                Includes hosting, priority support, and regular maintenance.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900">
            What&rsquo;s Included
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Custom design and development</li>
            <li>Responsive layout (mobile and desktop)</li>
            <li>Web hosting and domain management</li>
            <li>Ongoing maintenance and content updates</li>
            <li>SSL certificate for secure browsing</li>
          </ul>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
