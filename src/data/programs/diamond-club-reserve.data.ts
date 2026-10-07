import { AllImages } from "../../../public/images/AllImages";
import type { ProgramData } from "@/components/programs/programs.types";

export const DIAMOND_CLUB_RESERVE_DATA: ProgramData = {
  id: "diamond-club-reserve",
  offeringId: "passover-collection-2027",
  title: "DIAMOND CLUB RESERVE",
  kicker: "Passover 2027",
  tagline: "The Riviera Maya, Kanai · our most exclusive Passover experience",
  heroImage: AllImages.reserveIntro1,
  card: {
    description: "Our most exclusive Passover experience at Kanai.",
    image: AllImages.passoverCollectionDiamondClubReserve,
  },
  overview: {
    heroImage: AllImages.reserveIntro1,
    partners: [],
    partnersLogo: {
      image: AllImages.reservePartnerLogos,
      alt: "St. Regis Kanai, The Riviera Maya · Passover 2027 at Kanai / The Riviera Maya · The Riviera Maya EDITION at Kanai",
    },
    highlights: [
      "The highest level of luxury accommodations",
      "Exclusive service & personalized attention",
      "Premium dining & signature experience",
      "Limited availability",
    ],
    aboutTitle: "About This Event",
    about: [
      "This Passover, Diamond Club will host its renowned program in Kanai at the Edition Resort & The St. Regis Luxe Tower C, exclusively reserved for our guests, creating a luxurious and intimate Five-Diamond experience.",
      "Kanai provides an extraordinary luxury escape within a 680-acre gated sanctuary. This exclusive oasis is home to the prestigious St. Regis and Edition resorts, seamlessly blending opulence with the natural beauty of the Riviera Maya and a protected mangrove reserve. 91% of Kanai’s landscape remains untouched, preserving local wildlife and the lush jungle environment.",
      "With 2 miles of pristine white sand, Kanai’s beaches sit just half a mile from one of the world’s largest coral reefs—a vibrant underwater haven of diverse marine life and stunning coral formations, making it a true paradise of nature.",
    ],
  },
  nav: [
    { label: "Overview", target: { type: "overview" } },
    { label: "St. Regis", target: { type: "resort", resortId: "st-regis" } },
    { label: "EDITION", target: { type: "resort", resortId: "edition" } },
    { label: "Attractions", target: { type: "experience", experienceType: "attractions" } },
    { label: "Inquire", target: { type: "inquire" } },
  ],
  stay: {
    title: "Where you’ll stay",
    description:
      "Choose your hotel first. Rooms, dining, pools, wellness, entertainment, kids programming and scholars live inside the hotel experience—not as disconnected Reserve pages.",
    columns: 2,
    cards: [
      {
        id: "st-regis",
        title: "The St. Regis Kanai Resort",
        description: "Explore rooms and suites, dining, pools, wellness, spa, entertainment, kids, scholars and gallery.",
        image: AllImages.stregis1,
        target: { type: "resort", resortId: "st-regis" },
      },
      {
        id: "edition",
        title: "The Riviera Maya EDITION at Kanai",
        description: "Explore the complete EDITION hotel experience and its own room and resort photography.",
        image: AllImages.edition1,
        target: { type: "resort", resortId: "edition" },
      },
    ],
  },
  destination: {
    title: "Explore the destination",
    cards: [
      {
        id: "attractions",
        title: "Attractions",
        description: "Cancun Underwater Museum, Chichén Itzá, Xplor Park and more.",
        image: AllImages.stregis1,
        target: { type: "experience", experienceType: "attractions" },
      },
    ],
  },
  keywords: ["diamond club reserve", "st. regis kanai", "riviera maya edition", "passover 2027", "kosher luxury resort"],
};
