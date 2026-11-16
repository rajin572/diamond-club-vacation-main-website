import type { DesignLink } from "@/components/shared/design";
import { CASA_NIZUC_HREF } from "@/lib/routes";

/** The pill navigation under the banner of the year-round Casa Nizuc section pages. */
export const CASA_NIZUC_SUB_NAV: DesignLink[] = [
  { label: "About", href: `${CASA_NIZUC_HREF}/about` },
  { label: "Overview", href: `${CASA_NIZUC_HREF}/overview` },
  { label: "Shabbat", href: `${CASA_NIZUC_HREF}/shabbat` },
  { label: "Dining", href: `${CASA_NIZUC_HREF}/dining` },
  { label: "GKDE", href: `${CASA_NIZUC_HREF}/gkde` },
  { label: "Calendar of Events", href: `${CASA_NIZUC_HREF}/calendar` },
  { label: "Events", href: `${CASA_NIZUC_HREF}#events` },
];

/** The Reserve / Book buttons of the Shabbat and GKDE pages open the Inquire form for the year-round Casa Nizuc. */
export const SHABBAT_INQUIRE_HREF = "/inquire?destination=casa-nizuc&topic=shabbat";
export const GKDE_INQUIRE_HREF = "/inquire?destination=casa-nizuc&topic=gkde";

/**
 * "Book Your Stay" has to open Casa Nizuc's official Marriott reservation page; the client will send that URL (Overview and Dining briefs,
 * 2026-11-15). Until then it opens the Inquire form for the year-round Casa Nizuc.
 */
export const BOOK_STAY_HREF = "/inquire?destination=casa-nizuc&topic=stay";
