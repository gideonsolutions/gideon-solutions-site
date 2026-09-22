import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The consulting-era service pages are gone; anything still linking to
    // them lands on the company page rather than a 404.
    return [
      { source: "/services", destination: "/", permanent: true },
      { source: "/services/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
