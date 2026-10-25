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
    // The "Casa Nizuc Team" text supplied by the client (2026-10-25), word for word. Lines between double stars are shown in bold.
    aboutTitle: "Introducing Casa Nizuc by DCV",
    about: [
      "**Passover 2027 | Cancun, Mexico**",
      "**The Diamond Club Tradition. A Fresh New Experience.**",
      "For years, Diamond Club Vacations has been recognized for creating exceptional Passover experiences at some of the Caribbean's most prestigious resorts. Our reputation has been built on outstanding hospitality, exceptional kosher cuisine, personalized service, and a commitment to making every guest feel at home.",
      "Over the years, many have asked whether we could bring that same dedication to quality and hospitality to a more accessible Passover experience.",
      "**Casa Nizuc by DCV is our answer.**",
      "A fresh concept designed around what matters most: beautiful accommodations, outstanding dining, warm hospitality, and exceptional value.",
      "**Welcome to Casa Nizuc**",
      "For Passover 2027, we're delighted to introduce Casa Nizuc Resort, part of Marriott Bonvoy's Tribute Portfolio collection, located in Cancun's beautiful Nizuc area.",
      "With contemporary accommodations, distinctive dining venues, inviting rooftop spaces, and an exclusive beach club just a five-minute walk away, Casa Nizuc offers a refreshing blend of relaxation, entertainment, and Caribbean charm.",
      "From leisurely mornings by the water to memorable evenings with family and friends, every day offers something to enjoy.",
      "**A Passover Experience Designed Around You**",
      "At Casa Nizuc, we focus on the elements that make a vacation truly special.",
      "Enjoy a diverse culinary experience featuring multiple kosher dining venues, delicious holiday meals, and attentive service. Our thoughtfully planned program also includes entertainment, engaging activities, and a professionally organized children's program designed to keep our younger guests smiling throughout their stay.",
      "Whether you're relaxing at the beach club, enjoying our rooftop atmosphere, or celebrating the holiday surrounded by family and friends, Casa Nizuc brings together everything you need for a wonderful Passover getaway.",
      "**The Diamond Club Difference**",
      "What makes Casa Nizuc special is the experience and personal attention behind it.",
      "Backed by the expertise of Diamond Club Vacations, our dedicated team brings years of hospitality experience, culinary excellence, and a genuine passion for creating unforgettable vacations.",
      "Our philosophy is simple: **exceptional hospitality should be about how you're treated, not how much you spend.**",
      "We look forward to welcoming you and your family to Casa Nizuc for Passover 2027.",
      "**Casa Nizuc by DCV — Exceptional Hospitality. Extraordinary Value.**",
      "Warmest regards,",
      "**DCV & The Casa Nizuc Team**",
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
      title: "Program",
      blocks: [
        {
          columns: 3,
          cards: [
            {
              id: "entertainment",
              title: "Entertainment",
              image: AllImages.reserveEntertainmentConcert,
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
      title: "Local Attractions",
      blocks: [
        {
          // The Beach Club and La Aldea have no pages, so "See details →" opens a pop-up with the client's text (2026-10-22).
          columns: 3,
          cards: [
            {
              id: "attractions",
              title: "Local Attractions",
              image: AllImages.reserveAttractions,
              target: { type: "experience", experienceType: "attractions" },
            },
            {
              id: "beach-club",
              title: "Beach Club",
              image: AllImages.blueBeachClub,
              imagePosition: "center 40%",
              details: {
                title: "Exclusive Aldea Nizuc Beach Club",
                image: AllImages.casaNizucBeachClubMap,
                paragraphs: [
                  "Just a five-minute walk from the hotel, our exclusive beach club offers a beautiful Caribbean escape reserved for our guests. Soak up the sun, relax by the turquoise waters, and enjoy exciting daytime beach parties, refreshing drinks, and unforgettable moments by the sea.",
                ],
              },
            },
            {
              id: "la-aldea",
              title: "La Aldea",
              image: AllImages.blueLaAldea,
              details: {
                title: "La Aldea Nizuc – A Vibrant Lifestyle Destination",
                paragraphs: [
                  "Discover La Aldea Nizuc, a vibrant destination where stunning architecture, lush nature, art, dining, shopping, and entertainment come together. Explore beautifully designed spaces, unique boutiques, and lively surroundings, all just steps from Casa Nizuc.",
                ],
              },
            },
          ],
        },
      ],
    },
  ],
  keywords: ["diamond blue", "casa nizuc", "accessible luxury passover", "passover 2027"],
};
