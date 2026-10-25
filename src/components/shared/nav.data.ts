import { CASA_NIZUC_HREF, PASSOVER_OFFERING_ID, TERMS_FOOTER_HREF, WEDDINGS_HREF, offeringHref } from "@/lib/routes";
import type { DesignLink } from "./design/types";

export const PRIMARY_NAV: DesignLink[] = [
  { label: "Passover", href: offeringHref(PASSOVER_OFFERING_ID) },
  { label: "Casa Nizuc", href: CASA_NIZUC_HREF },
  { label: "Weddings & Events", href: WEDDINGS_HREF },
  { label: "Experiences", href: "/experiences" },
  { label: "About", href: "/about" },
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
      { label: "Passover Collection 2027", href: offeringHref(PASSOVER_OFFERING_ID) },
      { label: "Casa Nizuc", href: CASA_NIZUC_HREF },
      { label: "Experiences", href: "/experiences" },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "Weddings", href: WEDDINGS_HREF },
      { label: "Private Events", href: offeringHref("private-events") },
      { label: "Plan Your Stay", href: "/contact" },
    ],
  },
  {
    title: "Guest",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Terms & Conditions", href: TERMS_FOOTER_HREF },
    ],
  },
];
