import type { DesignLink } from "@/components/shared/design";
import { CASA_NIZUC_HREF } from "@/lib/routes";

/** "Book Your Stay" opens Casa Nizuc's official Marriott page (URL from the client, 2026-11-22). */
export const BOOK_STAY_HREF = "https://www.marriott.com/en-us/hotels/cunan-casa-nizuc-a-tribute-portfolio-resort/overview/";

/**
 * The pill navigation under the banner of every year-round Casa Nizuc page, main page included (client 2026-11-22, from the website
 * design package: About, Rooms & Resort, Kosher Dining, Shabbat, Experiences, Events, keeping Overview). Rooms & Resort opens the
 * Marriott page; Experiences is the "Discover & Reserve Your Experience" boxes and Events the events block of the main page.
 */
export const CASA_NIZUC_SUB_NAV: DesignLink[] = [
  { label: "About", href: `${CASA_NIZUC_HREF}/about` },
  { label: "Overview", href: `${CASA_NIZUC_HREF}/overview` },
  { label: "Rooms & Resort", href: BOOK_STAY_HREF },
  { label: "Kosher Dining", href: `${CASA_NIZUC_HREF}/dining` },
  { label: "Shabbat", href: `${CASA_NIZUC_HREF}/shabbat` },
  { label: "Experiences", href: `${CASA_NIZUC_HREF}#overview` },
  { label: "Events", href: `${CASA_NIZUC_HREF}#events` },
];

/** The Reserve / Book buttons of the Shabbat and GKDE pages open the Inquire form for the year-round Casa Nizuc. */
export const SHABBAT_INQUIRE_HREF = "/inquire?destination=casa-nizuc&topic=shabbat";
export const GKDE_INQUIRE_HREF = "/inquire?destination=casa-nizuc&topic=gkde";
