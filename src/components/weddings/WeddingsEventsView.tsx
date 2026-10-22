"use client";

import { SubNav } from "@/components/shared/design";
import type { DesignLink } from "@/components/shared/design";
import { WeddingsHero } from "./WeddingsHero";
import { WeddingsVision } from "./WeddingsVision";
import { WeddingsVenuesSection } from "./WeddingsVenuesSection";
import { WeddingsCulinarySection } from "./WeddingsCulinarySection";
import { WeddingsAccommodationsSection } from "./WeddingsAccommodationsSection";
import { WeddingsCapacitySection } from "./WeddingsCapacitySection";
import { WeddingsGallerySection } from "./WeddingsGallerySection";
import { WeddingsLocationSection } from "./WeddingsLocationSection";
import { WeddingsProductionSection } from "./WeddingsProductionSection";

const SUB_NAV_ITEMS: DesignLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Venues", href: "#venues" },
  { label: "Culinary & Kosher", href: "#culinary" },
  { label: "Sanctuaries", href: "#accommodations" },
  { label: "Capacities & Layout", href: "#capacities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Production", href: "#services" },
];

export function WeddingsEventsView() {
  return (
    <div className="dcv-site-page weddings-page pb-16">
      {/* Curved-bottom Hero with single Brochure Download button */}
      <WeddingsHero />

      {/* Floating Sticky Sub-Navigation */}
      <SubNav items={SUB_NAV_ITEMS} label="Weddings & Events Sections" />

      {/* Main Content Sections */}
      <WeddingsVision />
      <WeddingsVenuesSection />
      <WeddingsCulinarySection />
      <WeddingsAccommodationsSection />
      <WeddingsCapacitySection />
      <WeddingsGallerySection />
      <WeddingsLocationSection />
      <WeddingsProductionSection />
    </div>
  );
}

export default WeddingsEventsView;
