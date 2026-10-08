import { AllImages } from "../../../public/images/AllImages";
import type { ProgramData } from "@/components/programs/programs.types";

export const BLUE_DATA: ProgramData = {
  id: "blue",
  offeringId: "passover-collection-2027",
  title: "Diamond Blue by DCV",
  kicker: "Passover 2027",
  tagline: "Luxury made accessible.",
  heroImage: AllImages.casa2,
  card: {
    subtitle: "Luxury made accessible",
    location: "CANCUN MEXICO",
    image: AllImages.passoverCollectionDiamondBlueByDcv,
    logos: [{ image: AllImages.home3, alt: "Casa Nizuc Resort & Spa", blend: true }],
  },
  about: {
    partners: [
      { name: "Casa Nizuc", detail: "A Tribute Portfolio Resort" },
      { name: "Marriott Bonvoy" },
    ],
    highlights: [
      "Full Diamond Club Passover experience",
      "Beautiful resort & excellent dining",
      "Family-friendly atmosphere",
      "Most accessible price point",
    ],
    aboutTitle: "About This Event",
    aboutStrong: "Diamond Blue by DCV",
    about: [
      "Diamond Blue by DCV was created to make an exceptional Passover experience more accessible. Enjoy the hospitality, outstanding cuisine, attentive service and thoughtful programming you expect from Diamond Club Vacations — all at an exceptional value.",
      "Set at the brand-new Casa Nizuc Resort, Diamond Blue brings together great food, entertainment and warm hospitality for a memorable Passover in the Riviera Maya.",
    ],
  },
  hotels: {
    title: "Where you’ll stay",
    columns: 1,
    cards: [
      {
        id: "casa-nizuc",
        title: "Casa Nizuc",
        image: AllImages.passoverCollectionDiamondBlueByDcv,
        // Text stand-in for the "Casa Nizuc – A Tribute Portfolio Resort" mark until the artwork is supplied.
        logos: [{ text: "Casa Nizuc", alt: "Casa Nizuc, a Tribute Portfolio Resort" }],
        target: { type: "resort", resortId: "casa-nizuc" },
      },
    ],
  },
  sections: [
    {
      title: "Programs",
      blocks: [
        {
          columns: 3,
          cards: [
            {
              id: "entertainment",
              title: "Entertainment",
              image: AllImages.blueEntertainment,
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
              image: AllImages.blueScholars,
              target: { type: "experience", experienceType: "scholars" },
            },
          ],
        },
      ],
    },
    {
      title: "Explore",
      blocks: [
        {
          // Beach Club and La Aldea have no pages yet, so they are static tiles.
          columns: 3,
          cards: [
            {
              id: "attractions",
              title: "Attractions",
              image: AllImages.reserveAttractions,
              target: { type: "experience", experienceType: "attractions" },
            },
            { id: "beach-club", title: "Beach Club", image: AllImages.blueBeachClub },
            { id: "la-aldea", title: "La Aldea", image: AllImages.blueLaAldea },
          ],
        },
      ],
    },
  ],
  keywords: ["diamond blue", "casa nizuc", "accessible luxury passover", "passover 2027"],
};
