import type { ComingSoonPageData } from "@/components/comingSoon/comingSoon.types";

/**
 * Pages linked from the site that do not have content yet. To launch one, build its real page and remove it
 * from this registry (about / experiences are top-level routes; the two offerings are served by
 * /offerings/[offeringId]).
 */
export const comingSoonRegistry = {
  experiences: {
    id: "experiences",
    title: "Experiences",
    tagline: "Curated hospitality, resort experiences and destination moments.",
  },
  "weddings-events": {
    id: "weddings-events",
    title: "Weddings & Destination Events",
    tagline: "Extraordinary celebrations designed and produced by our expert team.",
  },
  "private-events": {
    id: "private-events",
    title: "Private Events",
    tagline: "Let us create your dream destination event.",
  },
} satisfies Record<string, ComingSoonPageData>;

export type ComingSoonId = keyof typeof comingSoonRegistry;

export function getComingSoonPage(id: ComingSoonId): ComingSoonPageData {
  return comingSoonRegistry[id];
}

/** Offering ids (under /offerings/) that are coming-soon placeholders. */
export const comingSoonOfferingIds = ["private-events"] as const;

export function getComingSoonForOffering(offeringId: string): ComingSoonPageData | undefined {
  return (comingSoonOfferingIds as readonly string[]).includes(offeringId)
    ? comingSoonRegistry[offeringId as (typeof comingSoonOfferingIds)[number]]
    : undefined;
}
