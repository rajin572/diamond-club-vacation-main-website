import { CASA_NIZUC_HREF, PASSOVER_OFFERING_ID, TERMS_FOOTER_HREF, WEDDINGS_HREF, offeringHref } from "@/lib/routes";
import type { SiteId } from "@/lib/site-hosts";
import type { DesignLink } from "./design/types";

/** guettaways.com does not show the Passover and Casa Nizuc links; dcpassovervacations.com keeps them (client 2026-10-25). */
const HIDDEN_ON_GUETTAWAY: SiteId[] = ["guettaway"];

export const PRIMARY_NAV: DesignLink[] = [
  { label: "Passover", href: offeringHref(PASSOVER_OFFERING_ID), hiddenOn: HIDDEN_ON_GUETTAWAY },
  { label: "Casa Nizuc", href: CASA_NIZUC_HREF, hiddenOn: HIDDEN_ON_GUETTAWAY },
  { label: "Weddings & Events", href: WEDDINGS_HREF, hiddenOn: HIDDEN_ON_GUETTAWAY },
  { label: "Experiences", href: "/experiences", hiddenOn: HIDDEN_ON_GUETTAWAY },
  { label: "About", href: "/about", hiddenOn: HIDDEN_ON_GUETTAWAY },
];

export const INQUIRE_LINK: DesignLink = { label: "Inquire", href: "/inquire" };

export interface FooterColumn {
  title: string;
  links: DesignLink[];
}

export const FOOTER_BLURB =
  "Luxury kosher hospitality, extraordinary destinations and carefully curated experiences.";

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Passover Collection 2027", href: offeringHref(PASSOVER_OFFERING_ID), hiddenOn: HIDDEN_ON_GUETTAWAY },
      { label: "Casa Nizuc", href: CASA_NIZUC_HREF, hiddenOn: HIDDEN_ON_GUETTAWAY },
      { label: "Experiences", href: "/experiences", hiddenOn: HIDDEN_ON_GUETTAWAY },
    ],

  },
  {
    title: "Events",
    links: [
      { label: "Weddings", href: WEDDINGS_HREF, hiddenOn: HIDDEN_ON_GUETTAWAY },
      { label: "Private Events", href: offeringHref("private-events"), hiddenOn: HIDDEN_ON_GUETTAWAY },
      { label: "Plan Your Stay", href: "/contact", hiddenOn: HIDDEN_ON_GUETTAWAY },
    ],
  },
  {
    title: "Guest",
    links: [
      { label: "About", href: "/about", hiddenOn: HIDDEN_ON_GUETTAWAY },
      { label: "Contact", href: "/contact", hiddenOn: HIDDEN_ON_GUETTAWAY },
      { label: "Terms & Conditions", href: TERMS_FOOTER_HREF },
    ],
  },
];
