import type { DesignLink } from "@/components/shared/design";
import { CASA_NIZUC_HREF } from "@/lib/routes";

/** "Book Your Stay" opens Casa Nizuc's official Marriott page (URL from the client, 2026-11-22). */
export const BOOK_STAY_HREF = "https://www.marriott.com/en-us/hotels/cunan-casa-nizuc-a-tribute-portfolio-resort/overview/";

/**
 * Rooms & Suites of the year-round Casa Nizuc, on this site (client 2026-11-23: everything stays on the website until the visitor books;
 * only the "Book" buttons open Marriott).
 */
export const CASA_NIZUC_ROOMS_HREF = `${CASA_NIZUC_HREF}/rooms`;

export function casaNizucRoomHref(roomId: string): string {
  return `${CASA_NIZUC_ROOMS_HREF}/${roomId}`;
}

/**
 * The pill navigation under the banner of every year-round Casa Nizuc page, main page included (client 2026-11-22, from the website
 * design package: About, Rooms & Resort, Kosher Dining, Shabbat, Experiences, Events, keeping Overview). Rooms & Resort opens the
 * rooms page of this site; Experiences is the "More to Discover" block of the main page and Events the Events & Celebrations page.
 */
export const CASA_NIZUC_SUB_NAV: DesignLink[] = [
  { label: "About", href: `${CASA_NIZUC_HREF}/about` },
  { label: "Overview", href: `${CASA_NIZUC_HREF}/overview` },
  { label: "Rooms & Resort", href: CASA_NIZUC_ROOMS_HREF },
  { label: "Kosher Dining", href: `${CASA_NIZUC_HREF}/dining` },
  { label: "Shabbat", href: `${CASA_NIZUC_HREF}/shabbat` },
  { label: "Experiences", href: `${CASA_NIZUC_HREF}#experiences` },
  { label: "Events", href: `${CASA_NIZUC_HREF}/events` },
];

/** The Reserve / Book buttons of the Shabbat and GKDE pages open the Inquire form for the year-round Casa Nizuc. */
export const SHABBAT_INQUIRE_HREF = "/inquire?destination=casa-nizuc&topic=shabbat";
export const GKDE_INQUIRE_HREF = "/inquire?destination=casa-nizuc&topic=gkde";
