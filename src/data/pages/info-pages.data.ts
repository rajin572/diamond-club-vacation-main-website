import { AllImages } from "../../../public/images/AllImages";
import type { InfoPageData } from "@/components/infoPage/infoPage.types";

/**
 * Simple content pages. `about`, `experiences` and `login` are top-level routes; `weddings-events` and
 * `private-events` are served by /offerings/[offeringId] (see `getInfoPageForOffering`).
 */
export const infoPagesRegistry = {
  about: {
    id: "about",
    metaTitle: "About Diamond Club Vacations",
    hero: {
      image: AllImages.home2,
      kicker: "Diamond Club Vacations",
      title: "About Diamond Club Vacations",
      subtitle:
        "Luxury kosher hospitality built around exceptional destinations, thoughtful service and memorable experiences.",
    },
    heading: "About Diamond Club Vacations",
    lead: "Luxury kosher hospitality built around exceptional destinations, thoughtful service and memorable experiences.",
    cta: { label: "Inquire", href: "/inquire" },
  },
  experiences: {
    id: "experiences",
    metaTitle: "Experiences",
    hero: {
      image: AllImages.home1,
      kicker: "Diamond Club Vacations",
      title: "Experiences",
      subtitle: "Curated hospitality, resort experiences and destination moments.",
    },
    heading: "Experiences",
    lead: "Curated hospitality, resort experiences and destination moments.",
    cta: { label: "Inquire", href: "/inquire" },
  },
  login: {
    id: "login",
    metaTitle: "Guest Login",
    hero: {
      image: AllImages.home1,
      kicker: "Diamond Club Vacations",
      title: "Guest Login",
      subtitle: "After booking, guests receive credentials for the private trip-management experience.",
    },
    heading: "Guest Login",
    lead: "After booking, guests receive credentials for the private trip-management experience.",
    cta: { label: "Inquire", href: "/inquire" },
  },
  "weddings-events": {
    id: "weddings-events",
    metaTitle: "Weddings & Destination Events",
    hero: {
      image: AllImages.eventsSource01,
      kicker: "Diamond Club Vacations",
      title: "Weddings & Destination Events",
      subtitle: "Extraordinary celebrations designed and produced by our expert team.",
    },
    heading: "Weddings & Destination Events",
    lead: "Extraordinary celebrations designed and produced by our expert team.",
    cta: { label: "Start an Inquiry", href: "/inquire?destination=weddings-events" },
  },
  "private-events": {
    id: "private-events",
    metaTitle: "Private Events",
    hero: {
      image: AllImages.eventsSource02,
      kicker: "Diamond Club Vacations",
      title: "Private Events",
      subtitle: "Let us create your dream destination event.",
    },
    heading: "Private Events",
    lead: "Let us create your dream destination event.",
    cta: { label: "Start an Inquiry", href: "/inquire?destination=private-events" },
  },
} satisfies Record<string, InfoPageData>;

export type InfoPageId = keyof typeof infoPagesRegistry;

export function getInfoPage(id: InfoPageId): InfoPageData {
  return infoPagesRegistry[id];
}

/** Offering ids that are plain content pages rather than program collections. */
export const infoPageOfferingIds = ["weddings-events", "private-events"] as const;

export function getInfoPageForOffering(offeringId: string): InfoPageData | undefined {
  return (infoPageOfferingIds as readonly string[]).includes(offeringId)
    ? infoPagesRegistry[offeringId as (typeof infoPageOfferingIds)[number]]
    : undefined;
}
