import { AllImages } from "../../../public/images/AllImages";
import type { ProgramData } from "@/components/programs/programs.types";

export const GUTTAWAY_DATA: ProgramData = {
  id: "guttaway",
  offeringId: "passover-collection-2027",
  title: "guettaway a Diamond Club production",
  kicker: "Passover 2027",
  tagline: "Elevated Pesach for the Heimish Family",
  heroImage: AllImages.guettawayMain1,
  card: {
    subtitle: "Elevated Pesach for the Heimish Family",
    location: "THE RIVIERA MAYA, AMAI",
    image: AllImages.passoverCollectionGuettawayADvcProgram,
    logos: [
      { image: AllImages.guettawayMain2, alt: "Waldorf Astoria Riviera Maya", blend: true },
      { image: AllImages.guettawayMain4, alt: "Park Hyatt Riviera Maya", blend: true },
    ],
  },
  hotels: {
    title: "Where you’ll stay",
    columns: 2,
    cards: [
      {
        id: "waldorf-astoria",
        title: "Waldorf Astoria Riviera Maya",
        image: AllImages.guettawayMain1,
        logos: [{ image: AllImages.guettawayMain2, alt: "Waldorf Astoria Riviera Maya", blend: true }],
        target: { type: "resort", resortId: "waldorf-astoria" },
      },
      {
        id: "park-hyatt",
        title: "Park Hyatt Riviera Maya",
        image: AllImages.guettawayMain3,
        logos: [{ image: AllImages.guettawayMain4, alt: "Park Hyatt Riviera Maya", blend: true }],
        target: { type: "resort", resortId: "park-hyatt" },
      },
    ],
  },
  about: {
    // Text stand-ins until the Waldorf Astoria and Park Hyatt dark-on-light logo artwork is supplied.
    partners: [
      { name: "Waldorf Astoria", detail: "Riviera Maya" },
      { name: "Park Hyatt", detail: "Riviera Maya" },
    ],
    highlights: [
      "Luxury accommodations & amenities",
      "Exceptional dining & entertainment",
      "Family-oriented programs",
      "Outstanding value",
    ],
    aboutTitle: "About This Event",
    about: [
      "Guettaway × Diamond Club Vacations come together to create a first-of-its-kind, elevated Heimish Passover experience not simply a program, but a destination.",
      "Set across two spectacular five-diamond resorts, Waldorf Astoria Riviera Maya and Park Hyatt Riviera Maya, this extraordinary beachfront sanctuary spans hundreds of acres of pristine coastline and lush tropical jungle.",
      "Guests will enjoy world-class accommodations, exceptional dining, pristine beaches, outstanding amenities and service, thoughtfully curated entertainment, and dedicated separate swimming options all designed to deliver an uncompromising luxury Passover experience unlike anything before it.",
      "When two of the world’s leading luxury hotel brands and two of the most experienced names in kosher hospitality come together, it’s more than a program. It’s an experience.",
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
  keywords: ["guettaway", "waldorf astoria riviera maya", "park hyatt riviera maya", "heimish pesach", "passover 2027"],
};
