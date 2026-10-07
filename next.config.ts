import type { NextConfig } from "next";
import { GUETTAWAYS_URL } from "./src/lib/external-links";
import { PASSOVER_OFFERING_ID, programHref } from "./src/lib/routes";

const nextConfig: NextConfig = {
  /* config options here */
  // Lets the dev server accept requests when opened via the machine's LAN IP
  // (e.g. testing on a phone/tablet on the same network) instead of only localhost.
  allowedDevOrigins: ["127.0.0.1", "localhost", "10.10.28.44"],

  async redirects() {
    return [
      // Guettaway A DCV Program lives on its own website; send old on-site URLs there.
      {
        source: `${programHref(PASSOVER_OFFERING_ID, "guttaway")}/:path*`,
        destination: GUETTAWAYS_URL,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
