import type { StaticImageData } from "next/image";
import type { SiteId } from "@/lib/site-hosts";

/** Every photo on the public site is a statically imported asset from `public/images/AllImages.ts`. */
export type DesignImage = StaticImageData;

export interface DesignLink {
  label: string;
  href: string;
  /** Header links only: the satellite sites (see lib/site-hosts) on which the link is hidden. */
  hiddenOn?: SiteId[];
  /** The link exists only on guettaways.com (shown by CSS, see `dcv-only-guettaway`); a twin of a link hidden there that leads to Guettaway's own page. */
  onlyOnGuettaway?: boolean;
}

export interface DesignStat {
  label: string;
  value: string;
}

export interface DesignFeatureGroup {
  title: string;
  items: string[];
}

/** A brand mark overlaid on a card's photo: artwork, or plain text until artwork is available. */
export interface CardLogo {
  image?: DesignImage;
  text?: string;
  alt: string;
  /** Artwork is white on a black background: blend it onto the photo instead of showing the black. */
  blend?: boolean;
}
