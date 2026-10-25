import type { ReactNode } from "react";
import LenisSmoothScroll from "@/components/ui/CustomUi/animation/components/LenisSmoothScroll";
import Footer from "./Footer";
import GuettawaySplash from "./GuettawaySplash";
import { SITE_DETECT_SCRIPT } from "@/lib/site-hosts";
import { SPLASH_DETECT_SCRIPT } from "./guettaway-splash.constants";
import Navbar from "./Navbar";

/** Public-site chrome: announcement bar, header, page, footer — scoped by `.dcv-site` (see app/design.css). */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="dcv-site">
      <script dangerouslySetInnerHTML={{ __html: SITE_DETECT_SCRIPT }} />
      <script dangerouslySetInnerHTML={{ __html: SPLASH_DETECT_SCRIPT }} />
      <GuettawaySplash />
      <LenisSmoothScroll />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default SiteShell;
