import { AllImages } from "../../../public/images/AllImages";
import type { ProgramData } from "@/components/programs/programs.types";

export const DIAMOND_CLUB_RESERVE_DATA: ProgramData = {
  id: "diamond-club-reserve",
  offeringId: "passover-collection-2027",
  title: "DIAMOND CLUB RESERVE",
  kicker: "Passover 2027",
  tagline: "The Riviera Maya, Kanai · our most exclusive Passover experience",
  heroImage: AllImages.reserveIntro1,
  // The 2026 Kanai info book (DC-Kanai-Info-Book-2026.pdf, sent by the client 2026-10-20) is used until the 2027 brochure exists.
  brochure: {
    title: "Diamond Club Reserve Brochure",
    pdfHref: "/brochures/diamond-club-reserve.pdf",
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
    // The "Kanai About Us" text supplied by the client (2026-10-25), word for word. Lines between double stars are shown in bold.
    aboutTitle: "A Boutique Passover Experience",
    about: [
      "**The St. Regis & EDITION Resorts at Kanai | Riviera Maya**",
      "**Welcome to Diamond Club Reserve**",
      "This Passover, Diamond Club Vacations invites you to experience something truly extraordinary at two of the Riviera Maya’s most spectacular beachfront resorts — The St. Regis and The Riviera Maya EDITION at Kanai.",
      "Combining world-class hospitality with the signature warmth and personal attention that define Diamond Club, our boutique Passover experience brings together exceptional cuisine, inspiring programming, outstanding entertainment, and unforgettable family moments in a setting unlike any other.",
      "**Discover Kanai — A Destination Like No Other**",
      "Nestled along the pristine Caribbean coastline, Kanai is an exclusive 680-acre development surrounded by protected natural beauty. Home to The St. Regis and EDITION resorts, this remarkable destination offers breathtaking architecture, lush tropical landscapes, and nearly two miles of white-sand beaches.",
      "Conveniently located approximately 30 minutes from Cancun International Airport and just minutes from Playa del Carmen, Kanai provides the perfect balance of privacy, sophistication, and accessibility.",
      "**Two Iconic Resorts. One Extraordinary Experience.**",
      "Discover the distinctive elegance of The St. Regis and the contemporary sophistication of The Riviera Maya EDITION.",
      "From spectacular beachfront pools and beautifully designed accommodations to world-class spas, wellness facilities, private cabanas, and inviting outdoor spaces, every detail creates an atmosphere of relaxation and indulgence.",
      "Whether enjoying a peaceful morning by the Caribbean Sea, exploring the natural beauty of the Riviera Maya, or spending quality time with family and friends, every day offers something special.",
      "**The Diamond Club Experience**",
      "At Diamond Club, we believe that an exceptional Passover experience is about much more than a beautiful destination.",
      "Our dedicated culinary team presents an outstanding selection of gourmet dining experiences, complemented by carefully curated wines, premium beverages, and attentive service.",
      "Throughout your stay, enjoy inspiring speakers, spectacular live entertainment, thoughtfully planned activities, and a vibrant holiday atmosphere.",
      "For our younger guests, our professionally organized children's program offers engaging activities, exciting entertainment, and dedicated supervision, allowing parents to relax and enjoy their vacation.",
      "**Hospitality That Feels Personal**",
      "What truly sets Diamond Club apart is our commitment to making every guest feel at home.",
      "From the moment you arrive until your final farewell, our team is dedicated to delivering the personalized service, attention to detail, and welcoming atmosphere that have become the hallmarks of the Diamond Club experience.",
      "We look forward to welcoming you and your family for an unforgettable Passover 2027 at Kanai.",
      "**Warmest wishes,**",
      "**Joel & The Diamond Club Team**",
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
              title: "Scholars & Cantor",
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
