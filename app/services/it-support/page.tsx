import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Support — Gideon Solutions",
  description:
    "Corporate IT support — prepare and configure standard Windows, Mac, and Linux machines for your team.",
};

export default function ITSupportPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Corporate IT Support
        </h1>
        <p className="mb-8 text-lg text-blue-600 font-semibold">
          Contact us for pricing
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            We help businesses get their teams set up and running. Our IT
            support service focuses on preparing standard workstations —
            Windows, Mac, and Linux — so your employees have everything they
            need from day one.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">
            What We Provide
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Workstation setup and configuration (Windows, macOS, and Linux)
            </li>
            <li>Operating system installation and updates</li>
            <li>Standard software and tool installation</li>
            <li>Security configuration and policy enforcement</li>
            <li>Network and printer configuration</li>
            <li>User account setup and access provisioning</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">
            Who This Is For
          </h2>
          <p>
            Businesses that need reliable machine provisioning for their teams.
            Whether you&rsquo;re onboarding a handful of new hires or rolling
            out machines across a department, we handle the setup so your IT
            team can focus on higher-level priorities.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Pricing</h2>
          <p>
            Pricing varies by fleet size and configuration requirements.
            Contact us to discuss your needs and receive a tailored quote.
          </p>
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
