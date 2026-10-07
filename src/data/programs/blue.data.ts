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
    description: "Luxury made accessible with Casa Nizuc as the hotel experience.",
    image: AllImages.passoverCollectionDiamondBlueByDcv,
  },
  overview: {
    heroImage: AllImages.passoverCollectionDiamondBlueByDcv,
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
  nav: [
    { label: "Overview", target: { type: "overview" } },
    { label: "Inquire", target: { type: "inquire" } },
  ],
  stay: {
    title: "Where you’ll stay",
    description:
      "Casa Nizuc is the hotel for this program, while Diamond Blue by DCV’s entertainment, kids program, scholars and attractions remain program-specific.",
    columns: 4,
    cards: [
      {
        id: "casa-nizuc",
        title: "Casa Nizuc",
        description: "Explore the hotel.",
        image: AllImages.casa1,
        target: { type: "resort", resortId: "casa-nizuc" },
      },
      {
        id: "entertainment",
        title: "Entertainment",
        description: "Program entertainment.",
        image: AllImages.entertainment1,
        target: { type: "experience", experienceType: "entertainment" },
      },
      {
        id: "kids-program",
        title: "Kids Program",
        description: "Family programming.",
        image: AllImages.kids1,
        target: { type: "experience", experienceType: "kids-program" },
      },
      {
        id: "scholars",
        title: "Scholars",
        description: "Featured speakers.",
        image: AllImages.home1,
        target: { type: "experience", experienceType: "scholars" },
      },
    ],
  },
  keywords: ["diamond blue", "casa nizuc", "accessible luxury passover", "passover 2027"],
};
