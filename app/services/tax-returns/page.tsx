import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Returns — Gideon Solutions",
  description:
    "Individual income tax preparation and filing. Federal and state returns for $125 per return.",
};

export default function TaxReturnsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Tax Return Preparation
        </h1>
        <p className="mb-8 text-lg text-blue-600 font-semibold">
          $125 per return
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            We prepare and file individual income tax returns — both federal and
            state — so you can be confident your taxes are done right. Our
            service is straightforward: you provide your documents, and we handle
            the rest.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">
            What&rsquo;s Included
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Federal income tax return preparation and e-filing</li>
            <li>State income tax return preparation and e-filing</li>
            <li>Review of W-2s, 1099s, and other income documents</li>
            <li>Standard deductions and common credits</li>
            <li>Electronic filing for faster refunds</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">
            Who This Is For
          </h2>
          <p>
            This service is designed for individuals with straightforward tax
            situations — W-2 employees, freelancers with 1099 income, and anyone
            who wants accurate, affordable tax preparation without the
            complexity of large tax firms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Pricing</h2>
          <p>
            <strong>$125 per return.</strong> This covers one federal return and
            one state return. Additional state returns are available at a
            reduced rate. No hidden fees — the price you see is the price you
            pay.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
