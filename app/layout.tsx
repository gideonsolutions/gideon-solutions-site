import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS, SITE_URL } from "@/lib/products";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Named from the product list, so a new product cannot be left out of it.
const names = PRODUCTS.map((p) => p.name);
const description = `Gideon Solutions builds honest software for taxes and money: ${names.slice(0, -1).join(", ")} and ${names.at(-1)}. Prices stated up front, no upsells, a person behind each one.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gideon Solutions — Honest software for taxes and money",
    template: "%s — Gideon Solutions",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Gideon Solutions",
    title: "Gideon Solutions — Honest software for taxes and money",
    description,
    url: SITE_URL,
  },
  twitter: { card: "summary", title: "Gideon Solutions", description },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-900"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* Page-view counts only: no cookies, no personal data (see /privacy). */}
        <Analytics />
      </body>
    </html>
  );
}
