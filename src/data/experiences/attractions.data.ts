import { AllImages } from "../../../public/images/AllImages";
import type { ExperienceCategoryData } from "@/components/experiences/experiences.types";

/**
 * The extra local attractions added on 2026-10-19 from the client's TripAdvisor Cancun lists (the first 4 generic ones, boat / cenote / snorkeling / Tulum, were removed at the client's request). The list is added to
 * Diamond Club Reserve (St. Regis and EDITION) in full; Diamond Club Blue (Casa Nizuc, Cancun) takes the Cancun-only ones below. Guettaway has its own Riviera Maya set.
 */
const MORE_ATTRACTIONS: ExperienceCategoryData["items"] = [
  // From the client's TripAdvisor Cancun list (2026-10-19): the tours there that were not on the site yet.
  {
    id: "coba-ruins",
    title: "Coba Ruins",
    description: "Explore the jungle-covered Mayan city of Coba and climb Nohoch Mul, one of the tallest pyramids on the Yucatan Peninsula.",
    image: AllImages.attractionCobaRuins,
    details: {
      title: "Coba Ruins",
      paragraphs: [
        "Explore the jungle-covered Mayan city of Coba and climb Nohoch Mul, one of the tallest pyramids on the Yucatan Peninsula.",
      ],
      mapUrl: "https://maps.google.com/?q=Coba+Archaeological+Zone+Mexico",
    },
  },
  {
    id: "ek-balam",
    title: "Ek Balam",
    description: "Visit the ancient Mayan city of Ek Balam, where you can climb the great Acropolis for views over the surrounding jungle.",
    image: AllImages.attractionEkBalam,
    details: {
      title: "Ek Balam",
      paragraphs: [
        "Visit the ancient Mayan city of Ek Balam, where you can climb the great Acropolis for views over the surrounding jungle.",
      ],
      mapUrl: "https://maps.google.com/?q=Ek+Balam+Archaeological+Zone+Mexico",
    },
  },
  {
    id: "valladolid",
    title: "Valladolid",
    description: "Stroll the colorful colonial streets of Valladolid, a charming Yucatan town with a historic convent and local markets.",
    image: AllImages.attractionValladolid,
    details: {
      title: "Valladolid",
      paragraphs: [
        "Stroll the colorful colonial streets of Valladolid, a charming Yucatan town with a historic convent and local markets.",
      ],
      mapUrl: "https://maps.google.com/?q=Valladolid+Yucatan+Mexico",
    },
  },
  {
    id: "san-miguelito-ruins",
    title: "San Miguelito Ruins",
    description: "Discover a small Mayan site in the Cancun Hotel Zone, set between the lagoon and the sea, next to the Mayan Museum.",
    image: AllImages.attractionSanMiguelitoRuins,
    details: {
      title: "San Miguelito Ruins",
      paragraphs: [
        "Discover a small Mayan site in the Cancun Hotel Zone, set between the lagoon and the sea, next to the Mayan Museum.",
      ],
      mapUrl: "https://maps.google.com/?q=San+Miguelito+Archaeological+Site+Cancun",
    },
  },
  // From the client's TripAdvisor "top things to do in Cancun" list (2026-10-19). Photos are free-licensed (credits in the image registry).
  {
    id: "playa-delfines",
    title: "Playa Delfines",
    description: "Relax on one of Cancun's most beautiful public beaches: wide white sand, turquoise water and sweeping views of the Caribbean.",
    image: AllImages.attractionPlayaDelfines,
    details: {
      title: "Playa Delfines",
      paragraphs: [
        "Relax on one of Cancun's most beautiful public beaches: wide white sand, turquoise water and sweeping views of the Caribbean.",
      ],
      mapUrl: "https://maps.google.com/?q=Playa+Delfines+Cancun",
    },
  },
  {
    id: "la-isla-shopping-village",
    title: "La Isla Shopping Village",
    description: "Stroll this open-air lagoonside shopping village in the Hotel Zone, with boutiques, restaurants and a panoramic ferris wheel.",
    image: AllImages.attractionLaIslaShoppingVillage,
    details: {
      title: "La Isla Shopping Village",
      paragraphs: [
        "Stroll this open-air lagoonside shopping village in the Hotel Zone, with boutiques, restaurants and a panoramic ferris wheel.",
      ],
      mapUrl: "https://maps.google.com/?q=La+Isla+Shopping+Village+Cancun",
    },
  },
  {
    id: "mayan-museum-of-cancun",
    title: "Mayan Museum of Cancun",
    description: "See ancient Mayan artifacts and sculpture at the Mayan Museum, then walk through the archaeological site next door.",
    image: AllImages.attractionMayanMuseumCancun,
    details: {
      title: "Mayan Museum of Cancun",
      paragraphs: [
        "See ancient Mayan artifacts and sculpture at the Mayan Museum, then walk through the archaeological site next door.",
      ],
      mapUrl: "https://maps.google.com/?q=Museo+Maya+de+Cancun",
    },
  },
];

export const ATTRACTIONS_BY_PROGRAM: Record<string, ExperienceCategoryData> = {
  "diamond-club-reserve": {
    programId: "diamond-club-reserve",
    programTitle: "DIAMOND CLUB RESERVE",
    experienceType: "attractions",
    title: "Attractions",
    heroImage: AllImages.reserveAttractionXcaret,
    columns: 2,
    items: [
      {
        id: "cancun-underwater-museum",
        title: "Cancun Underwater Museum",
        description: "Dive into an underwater art gallery with over 500 sculptures, promoting coral reef conservation.",
        image: AllImages.reserveAttractionUnderwaterMuseum,
        details: {
          title: "Cancun Underwater Museum",
          paragraphs: [
            "Dive into an underwater art gallery with over 500 sculptures, promoting coral reef conservation.",
          ],
          mapUrl: "https://maps.google.com/?q=Cancun+Underwater+Museum+of+Art",
        },
      },
      {
        id: "chichen-itza",
        title: "Chichen Itza",
        description: "Step back in time at this iconic Mayan archaeological site, home to the legendary El Castillo pyramid.",
        image: AllImages.reserveAttractionChichenItza,
        details: {
          title: "Chichen Itza",
          paragraphs: [
            "Step back in time at this iconic Mayan archaeological site, home to the legendary El Castillo pyramid.",
          ],
          mapUrl: "https://maps.google.com/?q=Chichen+Itza",
        },
      },
      {
        id: "xplor-park",
        title: "Xplor Park",
        description: "An exhilarating adventure park with zip-lines, underground rivers, and amphibious vehicles for thrill-seekers.",
        image: AllImages.reserveAttractionXplor,
        details: {
          title: "Xplor Park",
          paragraphs: [
            "An exhilarating adventure park with zip-lines, underground rivers, and amphibious vehicles for thrill-seekers.",
          ],
          mapUrl: "https://maps.google.com/?q=Xplor+Park+Playa+del+Carmen",
        },
      },
      {
        id: "xcaret-park",
        title: "Xcaret Park",
        description: "A spectacular eco-archaeological park that celebrates the culture and nature of Mexico.",
        image: AllImages.reserveAttractionXcaret,
        details: {
          title: "Xcaret Park",
          paragraphs: [
            "A spectacular eco-archaeological park that celebrates the culture and nature of Mexico.",
          ],
          mapUrl: "https://maps.google.com/?q=Xcaret+Park+Mexico",
        },
      },
      ...MORE_ATTRACTIONS,
    ],
  },
  blue: {
    programId: "blue",
    programTitle: "Casa Nizuc by DCV",
    experienceType: "attractions",
    title: "Attractions",
    heroImage: AllImages.reserveAttractionXcaret,
    columns: 2,
    items: [
      {
        id: "cancun-underwater-museum",
        title: "Cancun Underwater Museum",
        description: "Dive into an underwater art gallery with over 500 sculptures, promoting coral reef conservation.",
        image: AllImages.reserveAttractionUnderwaterMuseum,
        details: {
          title: "Cancun Underwater Museum",
          paragraphs: [
            "Dive into an underwater art gallery with over 500 sculptures, promoting coral reef conservation.",
          ],
          mapUrl: "https://maps.google.com/?q=Cancun+Underwater+Museum+of+Art",
        },
      },
      {
        id: "chichen-itza",
        title: "Chichen Itza",
        description: "Step back in time at this iconic Mayan archaeological site, home to the legendary El Castillo pyramid.",
        image: AllImages.reserveAttractionChichenItza,
        details: {
          title: "Chichen Itza",
          paragraphs: [
            "Step back in time at this iconic Mayan archaeological site, home to the legendary El Castillo pyramid.",
          ],
          mapUrl: "https://maps.google.com/?q=Chichen+Itza",
        },
      },
      {
        id: "xplor-park",
        title: "Xplor Park",
        description: "An exhilarating adventure park with zip-lines, underground rivers, and amphibious vehicles for thrill-seekers.",
        image: AllImages.reserveAttractionXplor,
        details: {
          title: "Xplor Park",
          paragraphs: [
            "An exhilarating adventure park with zip-lines, underground rivers, and amphibious vehicles for thrill-seekers.",
          ],
          mapUrl: "https://maps.google.com/?q=Xplor+Park+Playa+del+Carmen",
        },
      },
      {
        id: "xcaret-park",
        title: "Xcaret Park",
        description: "A spectacular eco-archaeological park that celebrates the culture and nature of Mexico.",
        image: AllImages.reserveAttractionXcaret,
        details: {
          title: "Xcaret Park",
          paragraphs: [
            "A spectacular eco-archaeological park that celebrates the culture and nature of Mexico.",
          ],
          mapUrl: "https://maps.google.com/?q=Xcaret+Park+Mexico",
        },
      },
      // Casa Nizuc is in Cancun: local attractions from the client's TripAdvisor Cancun lists (2026-10-19), reused from the shared list.
      ...MORE_ATTRACTIONS.filter((a) => ["playa-delfines", "la-isla-shopping-village", "mayan-museum-of-cancun", "san-miguelito-ruins"].includes(a.id)),
      {
        id: "torre-escenica",
        title: "Torre Escenica",
        description: "Ride the rotating observation tower for panoramic views of the Nichupte lagoon, the Hotel Zone and the Caribbean Sea.",
        image: AllImages.attractionTorreEscenica,
        details: {
          title: "Torre Escenica",
          paragraphs: [
            "Ride the rotating observation tower for panoramic views of the Nichupte lagoon, the Hotel Zone and the Caribbean Sea.",
          ],
          mapUrl: "https://maps.google.com/?q=Torre+Escenica+Cancun",
        },
      },
    ],
  },
  guttaway: {
    programId: "guttaway",
    programTitle: "Guettaway a Diamond Club production",
    experienceType: "attractions",
    title: "Attractions",
    heroImage: AllImages.reserveAttractionXcaret,
    columns: 2,
    items: [
      // From the client's TripAdvisor Riviera Maya list (2026-10-19). Guettaway only; photos are free-licensed (credits in the image registry).
      {
        id: "xel-ha-park",
        title: "Xel-Ha Park",
        description: "Snorkel, float down the river and meet colorful parrots at this natural aquarium park on the Riviera Maya coast, by Xcaret.",
        image: AllImages.attractionXelHaPark,
        details: {
          title: "Xel-Ha Park",
          paragraphs: [
            "Snorkel, float down the river and meet colorful parrots at this natural aquarium park on the Riviera Maya coast, by Xcaret.",
          ],
          mapUrl: "https://maps.google.com/?q=Xel-Ha+Park+Mexico",
        },
      },
      {
        id: "rio-secreto",
        title: "Rio Secreto",
        description: "Walk and swim through a spectacular underground river cave of stalactites and crystal-clear water near Playa del Carmen.",
        image: AllImages.attractionRioSecreto,
        details: {
          title: "Rio Secreto",
          paragraphs: [
            "Walk and swim through a spectacular underground river cave of stalactites and crystal-clear water near Playa del Carmen.",
          ],
          mapUrl: "https://maps.google.com/?q=Rio+Secreto+Playa+del+Carmen",
        },
      },
      {
        id: "tulum-ruins",
        title: "Tulum Ruins",
        description: "Walk through an ancient Mayan walled city set on the cliffs above the Caribbean Sea.",
        image: AllImages.attractionTulumRuins,
        details: {
          title: "Tulum Ruins",
          paragraphs: [
            "Walk through an ancient Mayan walled city set on the cliffs above the Caribbean Sea.",
          ],
          mapUrl: "https://maps.google.com/?q=Tulum+Archaeological+Zone",
        },
      },
      {
        id: "gran-cenote",
        title: "Gran Cenote",
        description: "Swim in the crystal-clear freshwater of one of Tulum's most beautiful cenotes, a natural pool framed by rock and jungle.",
        image: AllImages.attractionGranCenote,
        details: {
          title: "Gran Cenote",
          paragraphs: [
            "Swim in the crystal-clear freshwater of one of Tulum's most beautiful cenotes, a natural pool framed by rock and jungle.",
          ],
          mapUrl: "https://maps.google.com/?q=Gran+Cenote+Tulum",
        },
      },
      {
        id: "cenote-dos-ojos",
        title: "Cenote Dos Ojos",
        description: "Explore the two connected cenotes of Dos Ojos, famous for turquoise water, cave formations and easy snorkeling.",
        image: AllImages.attractionCenoteDosOjos,
        details: {
          title: "Cenote Dos Ojos",
          paragraphs: [
            "Explore the two connected cenotes of Dos Ojos, famous for turquoise water, cave formations and easy snorkeling.",
          ],
          mapUrl: "https://maps.google.com/?q=Cenotes+Dos+Ojos+Tulum",
        },
      },
      {
        id: "playa-paraiso",
        title: "Playa Paraiso",
        description: "Relax on the white sand and gentle turquoise waves of Playa Paraiso, one of the most beautiful beaches near Tulum.",
        image: AllImages.attractionPlayaParaiso,
        details: {
          title: "Playa Paraiso",
          paragraphs: [
            "Relax on the white sand and gentle turquoise waves of Playa Paraiso, one of the most beautiful beaches near Tulum.",
          ],
          mapUrl: "https://maps.google.com/?q=Playa+Paraiso+Tulum",
        },
      },
      // 4 more from the client's TripAdvisor lists (2026-10-19), replacing the original 4 (Underwater Museum, Chichen Itza, Xplor, Xcaret) on Guettaway.
      {
        id: "coba-ruins",
        title: "Coba Ruins",
        description: "Explore the jungle-covered Mayan city of Coba and climb Nohoch Mul, one of the tallest pyramids on the Yucatan Peninsula.",
        image: AllImages.attractionCobaRuins,
        details: {
          title: "Coba Ruins",
          paragraphs: [
            "Explore the jungle-covered Mayan city of Coba and climb Nohoch Mul, one of the tallest pyramids on the Yucatan Peninsula.",
          ],
          mapUrl: "https://maps.google.com/?q=Coba+Archaeological+Zone+Mexico",
        },
      },
      {
        id: "ek-balam",
        title: "Ek Balam",
        description: "Visit the ancient Mayan city of Ek Balam, where you can climb the great Acropolis for views over the surrounding jungle.",
        image: AllImages.attractionEkBalam,
        details: {
          title: "Ek Balam",
          paragraphs: [
            "Visit the ancient Mayan city of Ek Balam, where you can climb the great Acropolis for views over the surrounding jungle.",
          ],
          mapUrl: "https://maps.google.com/?q=Ek+Balam+Archaeological+Zone+Mexico",
        },
      },
      {
        id: "valladolid",
        title: "Valladolid",
        description: "Stroll the colorful colonial streets of Valladolid, a charming Yucatan town with a historic convent and local markets.",
        image: AllImages.attractionValladolid,
        details: {
          title: "Valladolid",
          paragraphs: [
            "Stroll the colorful colonial streets of Valladolid, a charming Yucatan town with a historic convent and local markets.",
          ],
          mapUrl: "https://maps.google.com/?q=Valladolid+Yucatan+Mexico",
        },
      },
      {
        id: "yal-ku-lagoon",
        title: "Yal-Ku Lagoon",
        description: "Snorkel among colorful fish in the calm, turquoise waters of this natural lagoon near Akumal, ringed by mangroves.",
        image: AllImages.attractionYalKuLagoon,
        details: {
          title: "Yal-Ku Lagoon",
          paragraphs: [
            "Snorkel among colorful fish in the calm, turquoise waters of this natural lagoon near Akumal, ringed by mangroves.",
          ],
          mapUrl: "https://maps.google.com/?q=Yal-Ku+Lagoon+Akumal",
        },
      },
    ],
  },
};
