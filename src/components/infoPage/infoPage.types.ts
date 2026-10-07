import type { DesignImage } from "@/components/shared/design";

/** A simple "hero + heading + lead + call to action" page (About, Experiences, Guest Login, Weddings, Private Events). */
export interface InfoPageData {
  id: string;
  /** Browser title and social card title. */
  metaTitle: string;
  hero: {
    image: DesignImage;
    kicker: string;
    title: string;
    subtitle: string;
  };
  heading: string;
  lead: string;
  paragraphs?: string[];
  cta: { label: string; href: string };
}
