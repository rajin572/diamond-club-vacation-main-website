import type { DesignImage } from "@/components/shared/design";

export interface OfferingData {
  id: string;
  /** Used for the browser title and structured data. */
  title: string;
  hero: {
    kicker?: string;
    headline: string;
    subtext: string;
    image: DesignImage;
    /** CSS object-position of the banner photo (which part of a tall photo shows in the wide banner). */
    imagePosition?: string;
    /** Brand badge shown above the headline. */
    logo?: { image: DesignImage; alt: string };
  };
  /** Programs shown on the offering page, in order (hosted here or linked out). */
  programIds: string[];
  programsSection: {
    title: string;
    description?: string;
  };
}
