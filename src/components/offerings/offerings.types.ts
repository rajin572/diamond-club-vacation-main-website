import type { DesignImage } from "@/components/shared/design";

export interface OfferingData {
  id: string;
  /** Used for the browser title and structured data. */
  title: string;
  hero: {
    kicker: string;
    headline: string;
    subtext: string;
    image: DesignImage;
  };
  /** Programs shown on the offering page, in order (hosted here or linked out). */
  programIds: string[];
  programsSection: {
    title: string;
    description: string;
  };
}
