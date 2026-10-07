import type { StaticImageData } from "next/image";

/** Every photo on the public site is a statically imported asset from `public/images/AllImages.ts`. */
export type DesignImage = StaticImageData;

export interface DesignLink {
  label: string;
  href: string;
}

export interface DesignStat {
  label: string;
  value: string;
}

export interface DesignFeatureGroup {
  title: string;
  items: string[];
}
