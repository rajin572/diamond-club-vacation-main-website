import { CASA_NIZUC_HREF, PASSOVER_OFFERING_ID, offeringHref } from "@/lib/routes";
import type { DesignLink } from "./design/types";

export const PRIMARY_NAV: DesignLink[] = [
  { label: "Passover", href: offeringHref(PASSOVER_OFFERING_ID) },
  { label: "Casa Nizuc", href: CASA_NIZUC_HREF },
  { label: "Weddings & Events", href: offeringHref("weddings-events") },
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
      { label: "Weddings", href: offeringHref("weddings-events") },
      { label: "Private Events", href: offeringHref("private-events") },
      { label: "Plan Your Stay", href: "/inquire" },
    ],
  },
  {
    title: "Guest",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/inquire" },
    ],
  },
];
