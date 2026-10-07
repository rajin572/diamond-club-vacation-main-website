import { AllImages } from "../../../public/images/AllImages";
import { CASA_NIZUC_HREF, PASSOVER_OFFERING_ID, offeringHref } from "@/lib/routes";
import type { HomePageData } from "./homepage.types";

export const HOME_PAGE_DATA: HomePageData = {
  hero: {
    eyebrow: "An Elevated Pesach Experience",
    headline: "Diamond Club Vacations",
    tagline: ["Exceptional destinations", "unforgettable experiences", "for the heimish family"],
    backgroundImage: AllImages.homeHeroImage,
  },
  services: [
    {
      id: "passover-collection",
      title: "PASSOVER COLLECTION",
      description: "Three exceptional Passover experiences. One standard of excellence.",
      href: offeringHref(PASSOVER_OFFERING_ID),
      image: AllImages.homePassoverCollection,
    },
    {
      id: "casa-nizuc",
      title: "Casa Nizuc",
      description: "A year-round luxury kosher resort experience.",
      href: CASA_NIZUC_HREF,
      image: AllImages.homeCasaNizuc,
    },
    {
      id: "weddings-destination-events",
      title: "Weddings & Destination Events",
      description: "Extraordinary celebrations designed and produced by our expert team.",
      href: offeringHref("weddings-events"),
      image: AllImages.homeWeddingsDestinationEvents,
    },
    {
      id: "private-events",
      title: "Private Events",
      description: "Let us create your dream destination event",
      href: offeringHref("private-events"),
      image: AllImages.homePrivateEvents,
    },
  ],
  welcome: {
    eyebrow: "Welcome To",
    heading: "Diamond Club Vacations",
    description:
      "A one-of-a-kind Pesach experience in extraordinary destinations, combining luxury accommodations, exceptional dining, family programming and unforgettable experiences.",
    promises: [
      { title: "Luxury", subtitle: "Accommodations & Amenities" },
      { title: "Exceptional", subtitle: "Dining & Entertainment" },
      { title: "Family-Oriented", subtitle: "Programs" },
      { title: "Unforgettable", subtitle: "Experiences" },
    ],
  },
};
