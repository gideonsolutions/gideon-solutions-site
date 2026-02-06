import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Work — Gideon Solutions",
  description:
    "Custom software engineering, data engineering, and data science solutions for individuals and businesses.",
};

export default function CustomWorkPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Custom Software, Data Engineering &amp; Data Science
        </h1>
        <p className="mb-8 text-lg text-blue-600 font-semibold">
          Contact us for pricing
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Every business and individual has unique challenges. We build custom
            solutions — from software applications to data pipelines and
            analytical models — tailored to your specific needs.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">
            What We Do
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Software Engineering:</strong> Custom web applications,
              APIs, automation tools, and system integrations built to your
              specifications.
            </li>
            <li>
              <strong>Data Engineering:</strong> Data pipelines, ETL processes,
              database design, and infrastructure to organize and move your
              data reliably.
            </li>
            <li>
              <strong>Data Science:</strong> Statistical analysis, machine
              learning models, dashboards, and reporting to turn your data into
              actionable insights.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">
            Who This Is For
          </h2>
          <p>
            Individuals and businesses of any size. Whether you need a one-time
            project or ongoing technical partnership, we scope the work to fit
            your goals and budget.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Pricing</h2>
          <p>
            Custom work is priced per project based on scope and complexity.
            Contact us to discuss your needs and receive a detailed proposal.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
