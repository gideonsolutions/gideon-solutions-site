import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Gideon Solutions",
  description: "Get in touch with Gideon Solutions.",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Contact Us</h1>

        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <p className="mb-6 text-gray-700 leading-relaxed">
            Ready to get started or have questions about our services? Fill out
            the form below and we&rsquo;ll respond promptly.
          </p>

          <ContactForm />

          <p className="mt-6 text-sm text-gray-500">
            Or email us directly at{" "}
            <a
              href="mailto:ian@gideonsolutions.us"
              className="text-blue-600 hover:text-blue-800"
            >
              ian@gideonsolutions.us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
