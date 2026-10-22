import { AllImages } from "../../../public/images/AllImages";
import type { ProgramData } from "@/components/programs/programs.types";

export const GUTTAWAY_DATA: ProgramData = {
  id: "guttaway",
  offeringId: "passover-collection-2027",
  title: "Guettaway a Diamond Club production",
  kicker: "Passover 2027",
  tagline: "Elevated Pesach for the Heimish Family",
  heroImage: AllImages.guettawayMain1,
  brochure: {
    title: "GUETTAWAY Brochure",
    pdfHref: "/brochures/guettaway.pdf",
    downloadName: "Guettaway-Pesach-2027-Brochure.pdf",
  },
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
    // On the program's own page the About block keeps its earlier text; the brochure text below is the About page.
    pageAbout: {
      aboutTitle: "About This Event",
      about: [
        "Guettaway × Diamond Club Vacations come together to create a first-of-its-kind, elevated Heimish Passover experience not simply a program, but a destination.",
        "Set across two spectacular five-diamond resorts, Waldorf Astoria Riviera Maya and Park Hyatt Riviera Maya, this extraordinary beachfront sanctuary spans hundreds of acres of pristine coastline and lush tropical jungle.",
        "Guests will enjoy world-class accommodations, exceptional dining, pristine beaches, outstanding amenities and service, thoughtfully curated entertainment, and dedicated separate swimming options all designed to deliver an uncompromising luxury Passover experience unlike anything before it.",
        "When two of the world’s leading luxury hotel brands and two of the most experienced names in kosher hospitality come together, it’s more than a program. It’s an experience.",
      ],
    },
    // The text of page 2 of the Guettaway brochure (client 2026-10-22), word for word. It is shown on the Guettaway About page.
    aboutTitle: "2 World-Class Resorts — 1 Incredible Guettaway.",
    // The same text, split into the parts of the designed About page (brochure page 2).
    story: {
      heading: "2 World-Class Resorts — 1 Incredible Guettaway.",
      intro: [
        "For nearly a decade, the Bordeaux Group has been setting a distinctive standard for Pesach hospitality. As the group behind more than 20 kosher restaurants throughout the New York tri-state area and the creators of Pesach with Bordeaux and Guettaway, they bring a rich culinary legacy and a passion for unforgettable experiences.",
        "At the heart of it are Shai and Miriam Guetta, whose personal touch, exceptional dining, and warm, vibrant atmosphere have made Guettaway an experience guests return to year after year.",
        "More than exceptional food and hospitality, Guettaway is about a special community, familiar faces, unmistakable energy, and a Yom Tov atmosphere that feels both elevated and welcoming.",
      ],
      quote: "This Pesach, everything you love about Guettaway is coming to the Riviera Maya, on a scale never before imagined.",
      resorts: [
        "Two extraordinary resorts. The legendary Waldorf Astoria and Park Hyatt, brought together to create an unprecedented luxury Pesach destination, featuring the world’s first all-inclusive Park Hyatt experience.",
        "The same signature hospitality. The same exceptional culinary standards. The same vibrant energy and distinctive crowd that have become synonymous with Guettaway.",
      ],
      vision: {
        title: "The Guettaway Vision.",
        subtitle: "Powered by Diamond Club Vacations.",
        paragraphs: [
          "Behind this extraordinary production stands Diamond Club Vacations, one of the Caribbean’s most experienced luxury kosher resort operators, with a proven track record of transforming world-renowned resorts into exceptional Pesach destinations.",
          "With over a decade of experience, Diamond Club specializes in full-scale resort operations, sophisticated culinary infrastructure, large-scale productions, and personalized guest services. From managing hundreds of staff members and complex logistics to delivering exceptional dining and world-class entertainment, every detail is carefully orchestrated.",
          "Through longstanding relationships with leading international hotel brands and a deep-rooted presence in Mexico, Diamond Club brings the expertise, resources, and operational excellence required to seamlessly execute a production of this magnitude.",
        ],
      },
      closing: {
        title: "Guettaway sets the tone. Diamond Club makes it seamless.",
        text: "Together, two leaders in their respective fields are creating an extraordinary Five Diamond Pesach experience across two iconic luxury resorts, with the unmistakable heart and soul of Guettaway.",
      },
      note: {
        title: "Kashrus & Program",
        text: "Our program is Non-Gebrokts, under the strict supervision of Rabbi Nesanel Sommer. Separate swimming pools and beach access for men and women will be provided.",
      },
    },
    about: [
      "For nearly a decade, the Bordeaux Group has been setting a distinctive standard for Pesach hospitality. As the group behind more than 20 kosher restaurants throughout the New York tri-state area and the creators of Pesach with Bordeaux and Guettaway, they bring a rich culinary legacy and a passion for unforgettable experiences.",
      "At the heart of it are Shai and Miriam Guetta, whose personal touch, exceptional dining, and warm, vibrant atmosphere have made Guettaway an experience guests return to year after year.",
      "More than exceptional food and hospitality, Guettaway is about a special community, familiar faces, unmistakable energy, and a Yom Tov atmosphere that feels both elevated and welcoming.",
      "**This Pesach, everything you love about Guettaway is coming to the Riviera Maya, on a scale never before imagined.**",
      "Two extraordinary resorts. The legendary Waldorf Astoria and Park Hyatt, brought together to create an unprecedented luxury Pesach destination, featuring the world’s first all-inclusive Park Hyatt experience.",
      "The same signature hospitality. The same exceptional culinary standards. The same vibrant energy and distinctive crowd that have become synonymous with Guettaway.",
      "**The Guettaway Vision. Powered by Diamond Club Vacations.**",
      "Behind this extraordinary production stands Diamond Club Vacations, one of the Caribbean’s most experienced luxury kosher resort operators, with a proven track record of transforming world-renowned resorts into exceptional Pesach destinations.",
      "With over a decade of experience, Diamond Club specializes in full-scale resort operations, sophisticated culinary infrastructure, large-scale productions, and personalized guest services. From managing hundreds of staff members and complex logistics to delivering exceptional dining and world-class entertainment, every detail is carefully orchestrated.",
      "Through longstanding relationships with leading international hotel brands and a deep-rooted presence in Mexico, Diamond Club brings the expertise, resources, and operational excellence required to seamlessly execute a production of this magnitude.",
      "**Guettaway sets the tone. Diamond Club makes it seamless.**",
      "Together, two leaders in their respective fields are creating an extraordinary Five Diamond Pesach experience across two iconic luxury resorts, with the unmistakable heart and soul of Guettaway.",
      "**Kashrus & Program:** Our program is Non-Gebrokts, under the strict supervision of Rabbi Nesanel Sommer. Separate swimming pools and beach access for men and women will be provided.",
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
              image: AllImages.blueEntertainment,
              target: { type: "experience", experienceType: "entertainment" },
            },
            {
              id: "kids-program",
              title: "Kids Program",
              image: AllImages.guettawayKidsProgram,
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
