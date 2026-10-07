import type { ReactNode } from "react";
import LenisSmoothScroll from "@/components/ui/CustomUi/animation/components/LenisSmoothScroll";
import Footer from "./Footer";
import Navbar from "./Navbar";

/** Public-site chrome: announcement bar, header, page, footer — scoped by `.dcv-site` (see app/design.css). */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="dcv-site">
      <LenisSmoothScroll />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default SiteShell;
