import type { NextConfig } from "next";
import { SATELLITE_SITES } from "./src/lib/site-hosts";

const nextConfig: NextConfig = {
  /* config options here */
  // Lets the dev server accept requests when opened via the machine's LAN IP
  // (e.g. testing on a phone/tablet on the same network) instead of only localhost.
  allowedDevOrigins: ["127.0.0.1", "localhost", "10.10.28.44"],
  // 90 is used for the banner photos (sharper than the default 75, client 2026-10-20).
  images: { qualities: [75, 90] },
  // The Weddings page lives at /weddings-events; the older addresses lead to it.
  async redirects() {
    return [
      { source: "/offerings/weddings-events", destination: "/weddings-events", permanent: true },
      { source: "/weddings", destination: "/weddings-events", permanent: true },
      // The same build is served on three domains: the satellite domains open on their own page (see src/lib/site-hosts.ts).
      ...Object.values(SATELLITE_SITES).map((site) => ({
        source: "/",
        has: [{ type: "host" as const, value: site.hostPattern }],
        destination: site.homePath,
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
