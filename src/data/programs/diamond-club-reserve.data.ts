import { AllImages } from "../../../public/images/AllImages";
import type { ProgramData } from "@/components/programs/programs.types";

export const DIAMOND_CLUB_RESERVE_DATA: ProgramData = {
  id: "diamond-club-reserve",
  offeringId: "passover-collection-2027",
  title: "DIAMOND CLUB RESERVE",
  kicker: "Passover 2027",
  tagline: "The Riviera Maya, Kanai · our most exclusive Passover experience",
  heroImage: AllImages.reserveIntro1,
  brochure: {
    title: "Diamond Club Reserve Brochure",
    pdfHref: "/brochure.pdf",
    downloadName: "Diamond-Club-Reserve-Passover-2027-Brochure.pdf",
  },
  card: {
    subtitle: "Our most exclusive Passover experience",
    location: "THE RIVIERA MAYA, KANAI",
    image: AllImages.passoverCollectionDiamondClubReserve,
    logos: [
      { image: AllImages.logoStRegisWhite, alt: "St. Regis Kanai" },
      { image: AllImages.logoEditionWhite, alt: "The Riviera Maya EDITION at Kanai" },
    ],
  },
  about: {
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
  hotels: {
    title: "Where you’ll stay",
    columns: 2,
    cards: [
      {
        id: "st-regis",
        title: "The St. Regis Kanai Resort",
        image: AllImages.passoverCollectionDiamondClubReserve,
        logos: [{ image: AllImages.logoStRegisWhite, alt: "St. Regis Kanai" }],
        target: { type: "resort", resortId: "st-regis" },
      },
      {
        id: "edition",
        title: "The Edition Resort",
        image: AllImages.reserveEditionResort,
        logos: [{ image: AllImages.logoEditionWhite, alt: "The Riviera Maya EDITION at Kanai" }],
        target: { type: "resort", resortId: "edition" },
      },
    ],
  },
  sections: [
    {
      title: "Program",
      blocks: [
        {
          columns: 3,
          cards: [
            {
              id: "entertainment",
              title: "Entertainment",
              image: AllImages.reserveEntertainment,
              target: { type: "experience", experienceType: "entertainment" },
            },
            {
              id: "kids-program",
              title: "Kids Program",
              image: AllImages.reserveKidsProgram,
              target: { type: "experience", experienceType: "kids-program" },
            },
            {
              id: "scholars",
              title: "Scholars",
              image: AllImages.reserveScholars,
              target: { type: "experience", experienceType: "scholars" },
            },
          ],
        },
      ],
    },
    {
      title: "Local Attractions",
      blocks: [
        {
          columns: 3,
          cards: [
            {
              id: "attractions",
              title: "Local Attractions",
              image: AllImages.reserveAttractions,
              target: { type: "experience", experienceType: "attractions" },
            },
          ],
        },
      ],
    },
  ],
  keywords: ["diamond club reserve", "st. regis kanai", "riviera maya edition", "passover 2027", "kosher luxury resort"],
};
