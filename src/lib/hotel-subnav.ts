import type { DesignLink } from "@/components/shared/design";
import { getResort } from "@/data/resorts/registry";
import { diningHref, programHref, resortHref, spaHref } from "@/lib/routes";

interface BuildHotelSubNavOptions {
  offeringId: string;
  programId: string;
  resortId: string;
  isHotelMainPage?: boolean;
}

/**
 * Builds the canonical hotel subnav bar matching the exact client specification:
 * 0. Home (the program page with its hotels)
 * 1. Hotel Overview
 * 2. Program
 * 3. Local Attractions
 * 4. Rooms & Suites
 * 5. Dining
 * 6. Pools & Beach
 * 7. Wellness & Fitness
 * 8. Spa
 * 9. Gallery
 */
export function buildHotelSubNav({
  offeringId,
  programId,
  resortId,
  isHotelMainPage = false,
}: BuildHotelSubNavOptions): DesignLink[] {
  const resort = getResort(resortId);
  const hotelBase = resortHref(offeringId, programId, resortId);
  const prefix = isHotelMainPage ? "" : hotelBase;

  const links: DesignLink[] = [
    {
      // Back to the program's hotel list, so another hotel of the program can be picked at once.
      label: "Home",
      href: programHref(offeringId, programId),
    },
    {
      label: resort?.overviewLabel ?? "Hotel Overview",
      href: isHotelMainPage ? "#overview" : hotelBase,
    },
    {
      label: "Program",
      href: `${prefix}#experiences`,
    },
    {
      label: "Local Attractions",
      href: `${prefix}#explore`,
    },
    {
      label: "Rooms & Suites",
      href: `${prefix}#rooms`,
    },
    {
      label: "Dining",
      href: diningHref(offeringId, programId, resortId),
    },
    {
      label: "Pools & Beach",
      href: `${prefix}#pools`,
    },
    {
      label: "Wellness & Fitness",
      href: `${prefix}#wellness`,
    },
  ];

  if (resort?.spa) {
    links.push({
      label: "Spa",
      // Park Hyatt has a Spa block on its main page; every other hotel has a spa page of its own.
      href: resort.spa.section ? `${prefix}#spa` : spaHref(offeringId, programId, resortId),
    });
  }

  links.push({
    label: "Gallery",
    href: `${prefix}#gallery`,
  });

  return links;
}
