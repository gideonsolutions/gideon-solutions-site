import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";

function TaxIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zm12 7h.01" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
    </svg>
  );
}

const products = [
  {
    title: "Gideon Tax",
    description:
      "Federal and state tax filing with transparent pricing and no hidden fees.",
    href: "https://www.gideontax.com/",
    icon: <TaxIcon />,
  },
  {
    title: "Gideon Tasks",
    description:
      "An invite-only community marketplace connecting people with vetted local volunteers for errands, repairs, and tutoring.",
    href: "https://www.gideontasks.com/",
    icon: <ChecklistIcon />,
  },
  {
    title: "Gideon Steward",
    description:
      "Personal finance and document management — bills, savings, and important paperwork in one place.",
    href: "https://www.gideonsteward.com/",
    icon: <WalletIcon />,
  },
  {
    title: "Gideon Keep",
    description:
      "Year-round record-keeping for self-employed people and small businesses, so annual filing is simpler.",
    href: "https://www.gideonkeep.com/",
    status: "coming-soon" as const,
    icon: <FolderIcon />,
  },
];

const services = [
  {
    title: "Tax Returns",
    description:
      "Individual income tax preparation and filing — federal and state returns handled with care and accuracy.",
    price: "$125 per return",
    href: "/services/tax-returns",
    icon: <TaxIcon />,
  },
  {
    title: "Websites",
    description:
      "Professional website creation and ongoing maintenance, from simple landing pages to full-featured business sites.",
    price: "$200 – $1,000 / year",
    href: "/services/websites",
    icon: <WebIcon />,
  },
  {
    title: "IT Support",
    description:
      "Corporate IT support — we prepare and configure standard Windows, Mac, and Linux machines for your team.",
    price: "Contact us",
    href: "/services/it-support",
    icon: <SupportIcon />,
  },
  {
    title: "Custom Work",
    description:
      "Software engineering, data engineering, and data science solutions tailored to your unique needs.",
    price: "Contact us",
    href: "/services/custom-work",
    icon: <CodeIcon />,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f172a] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Gideon Solutions
          </h1>
          <p className="mb-2 text-xl text-blue-300">
            Products &amp; Services for Individuals &amp; Businesses
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-gray-400">
            We build small, focused products and offer professional services
            for everyday needs — tax, tasks, finances, and custom software.
            Honest pricing, no fluff.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
            Our Products
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-600">
            A growing family of small tools we build and maintain.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.href} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-600">
            Hands-on work for individuals and businesses.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
