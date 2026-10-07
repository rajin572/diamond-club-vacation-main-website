import type { DesignFeatureGroup, DesignImage, DesignStat } from "@/components/shared/design";

/** One detail page under a resort: a room, a restaurant, a pool or the spa. */
export interface ResortDetailItem {
  id: string;
  title: string;
  /** One line shown under the title on list cards and in the detail hero (e.g. "1 King Bed · Ocean View"). */
  subtitle: string;
  /** Card thumbnail. */
  image: DesignImage;
  description: string;
  /** Up to four key facts shown as a strip above the description. */
  stats?: DesignStat[];
  groups?: DesignFeatureGroup[];
  gallery: DesignImage[];
}

export interface ResortWellnessActivity {
  id: string;
  title: string;
  description: string;
  timing?: string;
}

export type ResortSectionId = "rooms" | "dining" | "pools" | "wellness" | "spa" | "gallery";

/** Where an overview card or sub-nav item points: a section of the resort page, or a program-level experience page. */
export type ResortTarget =
  | { type: "section"; section: ResortSectionId }
  | { type: "experience"; experienceType: string };

export interface ResortCategoryCard {
  id: string;
  title: string;
  /** Shorter label for the sub navigation when it differs from the card title (e.g. "Gallery"). */
  navLabel?: string;
  description: string;
  image: DesignImage;
  target: ResortTarget;
}

/** A titled block with a photo mosaic. */
export interface ResortGallerySection {
  title: string;
  description: string;
  images: DesignImage[];
}

export interface ResortListSection extends ResortGallerySection {
  /** Venues that have their own detail page, listed as chips under the heading. */
  items: ResortDetailItem[];
}

export interface ResortData {
  programId: string;
  programTitle: string;
  resortId: string;
  resortName: string;
  /** Hero eyebrow, e.g. "DIAMOND CLUB RESERVE" or "Passover 2027". */
  kicker: string;
  /** Hero sub-line. */
  tagline: string;
  heroImage: DesignImage;

  /** First label of the floating sub navigation ("Hotel Overview", "Overview", ...). */
  overviewLabel: string;
  /** Render the floating sub navigation under the hero. */
  showSubNav: boolean;
  /** Append an "Inquire" pill to the sub navigation. */
  subNavInquire?: boolean;
  overview: {
    title: string;
    description: string;
    cards: ResortCategoryCard[];
  };

  rooms: {
    title: string;
    description: string;
    items: ResortDetailItem[];
    /** Whether room cards link to their detail pages. */
    linkToDetails: boolean;
  };
  dining?: ResortListSection;
  pools?: ResortListSection;
  wellness?: ResortGallerySection & { activities: ResortWellnessActivity[] };
  /**
   * The spa's detail page. When `section` is set the spa also gets its own block on the resort page
   * (Park Hyatt); otherwise it is reached from the Wellness block.
   */
  spa?: { item: ResortDetailItem; section?: ResortGallerySection };
  gallery: ResortGallerySection;
}
