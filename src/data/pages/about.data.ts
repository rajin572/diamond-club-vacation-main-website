import { AllImages } from "../../../public/images/AllImages";
import type { DesignImage } from "@/components/shared/design";
import { CASA_NIZUC_HREF, PASSOVER_OFFERING_ID, WEDDINGS_HREF, offeringHref } from "@/lib/routes";

export interface AboutPillar {
  id: string;
  title: string;
  description: string;
  image: DesignImage;
  href: string;
  linkLabel?: string;
}

export interface AboutPageData {
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    image: DesignImage;
  };
  intro: {
    heading: string;
    tagline: string;
    paragraphs: string[];
  };
  pillarsHeading: string;
  pillars: AboutPillar[];
  promise: {
    title: string;
    statement: string;
    highlight: string;
  };
}

export const ABOUT_PAGE_DATA: AboutPageData = {
  hero: {
    kicker: "DIAMOND CLUB VACATIONS",
    title: "About Diamond Club Vacations",
    subtitle: "Luxury, without compromise.",
    image: AllImages.homeHeroImage,
  },
  intro: {
    heading: "About Diamond Club Vacations",
    tagline: "Luxury, without compromise.",
    paragraphs: [
      "Now in our 14th year, Diamond Club Vacations creates world-class kosher travel experiences at the finest resorts. Based in New York, we partner with leading luxury hotel brands to deliver five-star hospitality, elevated cuisine and meticulous kashrut, so our guests never have to choose between luxury and observance.",
    ],
  },
  pillarsHeading: "What We Do",
  pillars: [
    {
      id: "passover-collection",
      title: "The Passover Collection",
      description:
        "Fully kosher Passover programs at some of the world's most celebrated resorts, including St. Regis, Edition, Waldorf Astoria, Park Hyatt and Casa Nizuc. Each program combines exceptional dining, inspiring Seders, renowned speakers and entertainment, children's programming and seamless travel, including group flights and transfers.",
      image: AllImages.homePassoverCollection,
      href: offeringHref(PASSOVER_OFFERING_ID),
      linkLabel: "Explore Passover Collection →",
    },
    {
      id: "casa-nizuc",
      title: "Casa Nizuc, Year-Round Kosher Resort",
      description:
        "Our flagship Caribbean destination in Cancún. At Casa Nizuc Resort & Spa, a Tribute Portfolio Hotel by Marriott, Diamond Club operates the entire kosher food and beverage program, open all year. Guests enjoy five dedicated kosher dining venues, from a glatt kosher steakhouse and panoramic Mediterranean dining to a Chalav Yisroel dairy kitchen and an adults-only rooftop lounge.",
      image: AllImages.casa2,
      href: CASA_NIZUC_HREF,
      linkLabel: "Explore Casa Nizuc →",
    },
    {
      id: "weddings",
      title: "Caribbean Destination Weddings",
      description:
        "Celebrate on the Caribbean coast with a fully kosher wedding. With our team running the kitchens and venues at Casa Nizuc, we handle every detail from the chuppah to the final dance, including catering, guest accommodations and travel.",
      image: AllImages.casaNizucGallery40,
      href: WEDDINGS_HREF,
      linkLabel: "Explore Destination Weddings →",
    },
    {
      id: "private-events",
      title: "Caribbean Private Events",
      description:
        "Bar and Bat Mitzvahs, family reunions, milestone celebrations and corporate retreats, all fully kosher and fully managed by our in-house team in the Caribbean.",
      image: AllImages.homePrivateEvents,
      href: "/inquire",
      linkLabel: "Inquire About Events →",
    },
    {
      id: "hotel-consulting",
      title: "Hotel Consulting",
      description:
        "We help luxury hotels enter the kosher market. Drawing on 14 years of operating experience, we advise on kosher F&B operations, kitchen design, supervision, program buyouts and guest experience.",
      image: AllImages.inquirySource01,
      href: "/contact",
      linkLabel: "Contact Hotel Consulting →",
    },
  ],
  promise: {
    title: "Our Promise",
    statement:
      "Every detail matters. Every guest is family. Every experience is built to the standard our name represents:",
    highlight: "Diamond.",
  },
};

