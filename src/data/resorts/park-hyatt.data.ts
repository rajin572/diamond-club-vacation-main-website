import { AllImages } from "../../../public/images/AllImages";
import type { ResortData } from "@/components/resorts/resorts.types";
import { rotate } from "./helpers";

/** Park Hyatt Riviera Maya — content from the client's HTML design (diamond-club-main-design). */
export const PARK_HYATT_RESORT_DATA: ResortData = {
  programId: "guttaway",
  programTitle: "Guettaway A DCV Program",
  resortId: "park-hyatt",
  resortName: "Park Hyatt Riviera Maya",
  kicker: "Passover 2027",
  tagline: "Guettaway A DCV Program",
  heroImage: AllImages.series.parkHyatt[0],
  overviewLabel: "Overview",
  showSubNav: true,
  subNavInquire: true,
  overview: {
    title: "Discover Park Hyatt",
    description: "Rooms, dining, pools, wellness, spa and a dedicated gallery for the hotel.",
    cards: [
      {
        id: "rooms",
        title: "Rooms & Suits",
        description: "Rooms, deluxe suites and premium suites.",
        image: AllImages.series.parkHyatt[1],
        target: { type: "section", section: "rooms" },
      },
      {
        id: "dining",
        title: "Dining",
        description: "IK’AL, Patisserie Market and Café, Bruma Woodfire and Alchemia.",
        image: AllImages.series.parkHyatt[2],
        target: { type: "section", section: "dining" },
      },
      {
        id: "pools",
        title: "Pools & Beach",
        description: "Infinity Panoramic Pool and resort water experiences.",
        image: AllImages.series.parkHyatt[3],
        target: { type: "section", section: "pools" },
      },
      {
        id: "wellness",
        title: "Wellness & Fitness",
        description: "Wellness Deck, Salt & Soul Yoga, meditation and fitness.",
        image: AllImages.series.parkHyatt[4],
        target: { type: "section", section: "wellness" },
      },
      {
        id: "spa",
        title: "Spa",
        description: "Hydrotherapy pools, Turkish hammam, steam, chromotherapy and treatments.",
        image: AllImages.series.parkHyatt[5],
        target: { type: "section", section: "spa" },
      },
      {
        id: "gallery",
        title: "Resort Gallery",
        navLabel: "Gallery",
        description: "Park Hyatt imagery only.",
        image: AllImages.series.parkHyatt[6],
        target: { type: "section", section: "gallery" },
      },
    ],
  },
  rooms: {
    title: "All room categories",
    description: "Every Park Hyatt room category is listed below.",
    linkToDetails: true,
    items: [
      {
        id: "king-room",
        title: "King Room",
        subtitle: "1 king bed",
        image: AllImages.series.parkHyatt[2],
        description: "Warm natural woods, stone accents and floor-to-ceiling glass in a serene setting steps from the shoreline.",
        stats: [
          { label: "Bedding", value: "1 king bed" },
          { label: "Hotel", value: "Park Hyatt Riviera Maya" },
        ],
        groups: [
          {
            title: "Beds & Bedding",
            items: [
              "1 King or 2 Queen Beds where applicable",
              "Cribs permitted",
              "Duvet and Frette luxury linens",
              "Rollaway bed available upon request",
            ],
          },
          {
            title: "Room Features",
            items: [
              "Air-conditioned",
              "Connecting rooms available for some rooms",
              "Terrace",
            ],
          },
          {
            title: "Bath & Bathroom",
            items: [
              "Luxury bath amenities",
              "Separate bathtub and shower",
              "Double vanities",
              "Lighted makeup mirror",
              "Hair dryer",
              "Robe",
              "Slippers",
            ],
          },
          {
            title: "Internet & Phones",
            items: [
              "Cordless phone",
              "Voicemail and speaker phone",
              "Complimentary wireless internet",
            ],
          },
        ],
        gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 0),
      },
      {
        id: "queen-room",
        title: "Queen Room",
        subtitle: "1 king bed",
        image: AllImages.series.parkHyatt[3],
        description: "Designed for quiet relaxation with plush double bedding, curated organic finishes and private terrace.",
        stats: [
          { label: "Bedding", value: "1 king bed" },
          { label: "Hotel", value: "Park Hyatt Riviera Maya" },
        ],
        groups: [
          {
            title: "Beds & Bedding",
            items: [
              "1 King or 2 Queen Beds where applicable",
              "Cribs permitted",
              "Duvet and Frette luxury linens",
              "Rollaway bed available upon request",
            ],
          },
          {
            title: "Room Features",
            items: [
              "Air-conditioned",
              "Connecting rooms available for some rooms",
              "Terrace",
            ],
          },
          {
            title: "Bath & Bathroom",
            items: [
              "Luxury bath amenities",
              "Separate bathtub and shower",
              "Double vanities",
              "Lighted makeup mirror",
              "Hair dryer",
              "Robe",
              "Slippers",
            ],
          },
          {
            title: "Internet & Phones",
            items: [
              "Cordless phone",
              "Voicemail and speaker phone",
              "Complimentary wireless internet",
            ],
          },
        ],
        gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 1),
      },
      {
        id: "ocean-view-king",
        title: "Ocean View King",
        subtitle: "1 king bed · ocean view",
        image: AllImages.series.parkHyatt[4],
        description: "Elevated views over the Caribbean sea, with custom King bed, natural wood details, and deep soaking tub.",
        stats: [
          { label: "Bedding", value: "1 king bed" },
          { label: "View", value: "Ocean view" },
          { label: "Hotel", value: "Park Hyatt Riviera Maya" },
        ],
        groups: [
          {
            title: "Beds & Bedding",
            items: [
              "1 King or 2 Queen Beds where applicable",
              "Cribs permitted",
              "Duvet and Frette luxury linens",
              "Rollaway bed available upon request",
            ],
          },
          {
            title: "Room Features",
            items: [
              "Air-conditioned",
              "Connecting rooms available for some rooms",
              "Terrace",
            ],
          },
          {
            title: "Bath & Bathroom",
            items: [
              "Luxury bath amenities",
              "Separate bathtub and shower",
              "Double vanities",
              "Lighted makeup mirror",
              "Hair dryer",
              "Robe",
              "Slippers",
            ],
          },
          {
            title: "Internet & Phones",
            items: [
              "Cordless phone",
              "Voicemail and speaker phone",
              "Complimentary wireless internet",
            ],
          },
        ],
        gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 2),
      },
      {
        id: "ocean-view-king-private-pool",
        title: "Ocean View King, Private Pool",
        subtitle: "1 king bed · ocean view · private pool",
        image: AllImages.series.parkHyatt[5],
        description: "The perfect blend of horizon ocean vistas and your own private terrace pool for peaceful morning and evening dips.",
        stats: [
          { label: "Bedding", value: "1 king bed" },
          { label: "View", value: "Ocean view" },
          { label: "Pool", value: "Private pool" },
          { label: "Hotel", value: "Park Hyatt Riviera Maya" },
        ],
        groups: [
          {
            title: "Beds & Bedding",
            items: [
              "1 King or 2 Queen Beds where applicable",
              "Cribs permitted",
              "Duvet and Frette luxury linens",
              "Rollaway bed available upon request",
            ],
          },
          {
            title: "Room Features",
            items: [
              "Air-conditioned",
              "Connecting rooms available for some rooms",
              "Terrace",
            ],
          },
          {
            title: "Bath & Bathroom",
            items: [
              "Luxury bath amenities",
              "Separate bathtub and shower",
              "Double vanities",
              "Lighted makeup mirror",
              "Hair dryer",
              "Robe",
              "Slippers",
            ],
          },
          {
            title: "Internet & Phones",
            items: [
              "Cordless phone",
              "Voicemail and speaker phone",
              "Complimentary wireless internet",
            ],
          },
        ],
        gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 3),
      },
      {
        id: "plunge-pool-deluxe-suite",
        title: "Plunge Pool Deluxe Suite",
        subtitle: "1 king bed suite · ocean view · plunge pool",
        image: AllImages.series.parkHyatt[6],
        description: "Expansive luxury suite featuring an independent parlor, oversized private pool terrace, and panoramic Caribbean scenery.",
        stats: [
          { label: "Bedding", value: "1 king bed suite" },
          { label: "View", value: "Ocean view" },
          { label: "Pool", value: "Plunge pool" },
          { label: "Hotel", value: "Park Hyatt Riviera Maya" },
        ],
        groups: [
          {
            title: "Beds & Bedding",
            items: [
              "1 King or 2 Queen Beds where applicable",
              "Cribs permitted",
              "Duvet and Frette luxury linens",
              "Rollaway bed available upon request",
            ],
          },
          {
            title: "Room Features",
            items: [
              "Air-conditioned",
              "Connecting rooms available for some rooms",
              "Terrace",
            ],
          },
          {
            title: "Bath & Bathroom",
            items: [
              "Luxury bath amenities",
              "Separate bathtub and shower",
              "Double vanities",
              "Lighted makeup mirror",
              "Hair dryer",
              "Robe",
              "Slippers",
            ],
          },
          {
            title: "Internet & Phones",
            items: [
              "Cordless phone",
              "Voicemail and speaker phone",
              "Complimentary wireless internet",
            ],
          },
        ],
        gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 4),
      },
      {
        id: "private-pool-deluxe-suite",
        title: "Private Pool Deluxe Suite",
        subtitle: "1 king bed suite · ocean view · private pool",
        image: AllImages.series.parkHyatt[7],
        description: "Exceptional coastal retreat boasting a larger private swimming pool, secluded sun deck, and full personal concierge service.",
        stats: [
          { label: "Bedding", value: "1 king bed suite" },
          { label: "View", value: "Ocean view" },
          { label: "Pool", value: "Private pool" },
          { label: "Hotel", value: "Park Hyatt Riviera Maya" },
        ],
        groups: [
          {
            title: "Beds & Bedding",
            items: [
              "1 King or 2 Queen Beds where applicable",
              "Cribs permitted",
              "Duvet and Frette luxury linens",
              "Rollaway bed available upon request",
            ],
          },
          {
            title: "Room Features",
            items: [
              "Air-conditioned",
              "Connecting rooms available for some rooms",
              "Terrace",
            ],
          },
          {
            title: "Bath & Bathroom",
            items: [
              "Luxury bath amenities",
              "Separate bathtub and shower",
              "Double vanities",
              "Lighted makeup mirror",
              "Hair dryer",
              "Robe",
              "Slippers",
            ],
          },
          {
            title: "Internet & Phones",
            items: [
              "Cordless phone",
              "Voicemail and speaker phone",
              "Complimentary wireless internet",
            ],
          },
        ],
        gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 5),
      },
      {
        id: "plunge-pool-premium-suite",
        title: "Plunge Pool Premium Suite",
        subtitle: "1 king bed suite · ocean view · plunge pool",
        image: AllImages.series.parkHyatt[8],
        description: "Plunge Pool Premium Suite at Park Hyatt Riviera Maya: 1 king bed suite · ocean view · plunge pool.",
        stats: [
          { label: "Bedding", value: "1 king bed suite" },
          { label: "View", value: "Ocean view" },
          { label: "Pool", value: "Plunge pool" },
          { label: "Hotel", value: "Park Hyatt Riviera Maya" },
        ],
        groups: [
          {
            title: "Beds & Bedding",
            items: [
              "1 King or 2 Queen Beds where applicable",
              "Cribs permitted",
              "Duvet and Frette luxury linens",
              "Rollaway bed available upon request",
            ],
          },
          {
            title: "Room Features",
            items: [
              "Air-conditioned",
              "Connecting rooms available for some rooms",
              "Terrace",
            ],
          },
          {
            title: "Bath & Bathroom",
            items: [
              "Luxury bath amenities",
              "Separate bathtub and shower",
              "Double vanities",
              "Lighted makeup mirror",
              "Hair dryer",
              "Robe",
              "Slippers",
            ],
          },
          {
            title: "Internet & Phones",
            items: [
              "Cordless phone",
              "Voicemail and speaker phone",
              "Complimentary wireless internet",
            ],
          },
        ],
        gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 0),
      },
      {
        id: "private-pool-premium-suite",
        title: "Private Pool Premium Suite",
        subtitle: "1 king bed suite · ocean view · private pool",
        image: AllImages.series.parkHyatt[9],
        description: "Private Pool Premium Suite at Park Hyatt Riviera Maya: 1 king bed suite · ocean view · private pool.",
        stats: [
          { label: "Bedding", value: "1 king bed suite" },
          { label: "View", value: "Ocean view" },
          { label: "Pool", value: "Private pool" },
          { label: "Hotel", value: "Park Hyatt Riviera Maya" },
        ],
        groups: [
          {
            title: "Beds & Bedding",
            items: [
              "1 King or 2 Queen Beds where applicable",
              "Cribs permitted",
              "Duvet and Frette luxury linens",
              "Rollaway bed available upon request",
            ],
          },
          {
            title: "Room Features",
            items: [
              "Air-conditioned",
              "Connecting rooms available for some rooms",
              "Terrace",
            ],
          },
          {
            title: "Bath & Bathroom",
            items: [
              "Luxury bath amenities",
              "Separate bathtub and shower",
              "Double vanities",
              "Lighted makeup mirror",
              "Hair dryer",
              "Robe",
              "Slippers",
            ],
          },
          {
            title: "Internet & Phones",
            items: [
              "Cordless phone",
              "Voicemail and speaker phone",
              "Complimentary wireless internet",
            ],
          },
        ],
        gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 1),
      },
      {
        id: "penthouse-suite",
        title: "Penthouse Suite",
        subtitle: "Ocean view · plunge pool",
        image: AllImages.series.parkHyatt[10],
        description: "Penthouse Suite at Park Hyatt Riviera Maya: Ocean view · plunge pool.",
        stats: [
          { label: "View", value: "Ocean view" },
          { label: "Pool", value: "Plunge pool" },
          { label: "Hotel", value: "Park Hyatt Riviera Maya" },
        ],
        groups: [
          {
            title: "Beds & Bedding",
            items: [
              "1 King or 2 Queen Beds where applicable",
              "Cribs permitted",
              "Duvet and Frette luxury linens",
              "Rollaway bed available upon request",
            ],
          },
          {
            title: "Room Features",
            items: [
              "Air-conditioned",
              "Connecting rooms available for some rooms",
              "Terrace",
            ],
          },
          {
            title: "Bath & Bathroom",
            items: [
              "Luxury bath amenities",
              "Separate bathtub and shower",
              "Double vanities",
              "Lighted makeup mirror",
              "Hair dryer",
              "Robe",
              "Slippers",
            ],
          },
          {
            title: "Internet & Phones",
            items: [
              "Cordless phone",
              "Voicemail and speaker phone",
              "Complimentary wireless internet",
            ],
          },
        ],
        gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 2),
      },
    ],
  },
  dining: {
    title: "Dining",
    description: "IK’AL serves coastal dining with fresh seafood, local ingredients and Yucatecan flavors, every day from 11:00 AM to 11:00 PM (casual dress).",
    images: AllImages.series.parkHyatt.slice(8, 17),
    items: [
      {
        id: "ik-al",
        title: "IK’AL",
        subtitle: "Signature Mexican & Contemporary · Dinner",
        image: AllImages.series.parkHyatt[8],
        description: "Coastal dining with fresh seafood, local ingredients and Yucatecan flavors.",
        stats: [
          { label: "Cuisine", value: "Signature Mexican & Contemporary" },
          { label: "Meal Period", value: "Dinner" },
          { label: "Hours", value: "11:00 AM – 11:00 PM" },
          { label: "Dress Code", value: "Casual" },
        ],
        groups: [{ title: "Schedule", items: ["Every day: 11:00 AM – 11:00 PM"] }],
        gallery: rotate(AllImages.series.parkHyatt.slice(8, 17), 0),
      },
      {
        id: "patisserie-market-and-cafe",
        title: "Patisserie Market and Café",
        subtitle: "Café & Bakery · All Day",
        image: AllImages.series.parkHyatt[9],
        description: "Artisanal kosher breads, fresh pastries, specialty coffees and curated market bites throughout the holiday.",
        stats: [
          { label: "Cuisine", value: "Café & Bakery" },
          { label: "Meal Period", value: "All Day" },
          { label: "Hours", value: "6:30 AM – 9:00 PM" },
          { label: "Dress Code", value: "Casual" },
        ],
        groups: [{ title: "Schedule", items: ["Monday to Sunday: 6:30 AM – 9:00 PM"] }],
        gallery: rotate(AllImages.series.parkHyatt.slice(8, 17), 1),
      },
      {
        id: "bruma-woodfire",
        title: "Bruma Woodfire",
        subtitle: "Wood-Fired Grill · Lunch & Dinner",
        image: AllImages.series.parkHyatt[10],
        description: "Open flame grilling of prime aged meats, whole roasted Caribbean catch, and wood-fired vegetables overlooking the sea.",
        stats: [
          { label: "Cuisine", value: "Wood-Fired Grill" },
          { label: "Meal Period", value: "Lunch & Dinner" },
          { label: "Hours", value: "12:00 PM – 10:30 PM" },
          { label: "Dress Code", value: "Smart Casual" },
        ],
        groups: [
          { title: "Schedule", items: ["Monday to Sunday: 12:00 PM – 10:30 PM"] },
        ],
        gallery: rotate(AllImages.series.parkHyatt.slice(8, 17), 2),
      },
      {
        id: "alchemia",
        title: "Alchemia",
        subtitle: "Cocktail & Mocktail Lounge · Evening",
        image: AllImages.series.parkHyatt[11],
        description: "An intimate lounge crafting bespoke infusions, tropical mocktails, and light kosher bar bites in a chic ambiance.",
        stats: [
          { label: "Cuisine", value: "Cocktail & Mocktail Lounge" },
          { label: "Meal Period", value: "Evening" },
          { label: "Hours", value: "5:00 PM – 12:00 AM" },
          { label: "Dress Code", value: "Resort Elegant" },
        ],
        groups: [
          { title: "Schedule", items: ["Monday to Sunday: 5:00 PM – 12:00 AM"] },
        ],
        gallery: rotate(AllImages.series.parkHyatt.slice(8, 17), 3),
      },
    ],
  },
  pools: {
    title: "Pools & Beach",
    description: "A luxurious, serene pool atmosphere with hammocks, food and specialty cocktails.",
    images: AllImages.series.parkHyatt.slice(9, 18),
    items: [
      {
        id: "infinity-panoramic-pool",
        title: "Infinity Panoramic Pool",
        subtitle: "Outdoor · Beachfront terrace",
        image: AllImages.series.parkHyatt[9],
        description: "A panoramic infinity pool with sweeping Caribbean views, spacious sun decks, and dedicated pool service.",
        stats: [
          { label: "Type", value: "Outdoor" },
          { label: "Hours", value: "7:00 AM – 8:00 PM" },
          { label: "Location", value: "Beachfront terrace" },
        ],
        groups: [{ title: "Schedule", items: ["Monday to Sunday: 7:00 AM – 8:00 PM"] }],
        gallery: rotate(AllImages.series.parkHyatt.slice(9, 18), 0),
      },
      {
        id: "pool-bar",
        title: "Pool Bar",
        subtitle: "Pool · Poolside Deck",
        image: AllImages.series.parkHyatt[10],
        description: "Refreshing poolside drinks, tropical mocktails, fresh coconut water and light kosher bites served right to your lounger.",
        stats: [
          { label: "Type", value: "Pool" },
          { label: "Hours", value: "10:00 AM – 6:30 PM" },
          { label: "Location", value: "Poolside Deck" },
        ],
        groups: [
          { title: "Schedule", items: ["Monday to Sunday: 10:00 AM – 6:30 PM"] },
        ],
        gallery: rotate(AllImages.series.parkHyatt.slice(9, 18), 1),
      },
    ],
  },
  wellness: {
    title: "Wellness & Fitness",
    description: "Yoga classes, meditation, wellness workshops and daily fitness programming.",
    images: AllImages.series.parkHyatt.slice(10, 19),
    activities: [
      {
        id: "salt-and-soul-yoga",
        title: "Salt & Soul Yoga",
        description: "Yoga classes, meditation and wellness workshops.",
      },
      {
        id: "rituals",
        title: "Rituals",
        description: "Drawn from ancient traditions, our spa rituals restore balance.",
      },
      { id: "meditation", title: "Meditation", description: "Guided sessions to start or close the day." },
      {
        id: "fitness",
        title: "Fitness",
        description: "Stay active with daily fitness classes, from exercise to strength work.",
      },
    ],
  },
  spa: {
    item: {
      id: "spa",
      title: "The Spa",
      subtitle: "An afternoon that undoes the year",
      image: AllImages.series.parkHyatt[11],
      description: "Hydrotherapy pools, hammam and steam rooms, massages, facials and a full salon, with treatments bookable through your concierge.",
      stats: [
        { label: "Location", value: "Lower level, main building" },
        { label: "Hours", value: "8:00 AM – 11:00 PM" },
      ],
      groups: [
        {
          title: "Treatments & Facilities",
          items: [
            "Hydrotherapy pools",
            "Hammam and steam rooms",
            "Tailored facial revitalizations",
            "Restorative full-body massages",
            "Full hair and beauty salon",
            "Private wellness suites",
          ],
        },
      ],
      gallery: AllImages.series.parkHyatt.slice(11, 20),
    },
    section: {
      title: "Spa",
      description: "Hydrotherapy pools, a Turkish hammam, steam and chromotherapy treatment, massages, facials, a wellness deck, beauty salon and fitness center.",
      images: AllImages.series.parkHyatt.slice(11, 20),
    },
  },
  gallery: {
    title: "Resort Gallery",
    description: "Photography of Park Hyatt Riviera Maya.",
    images: AllImages.series.parkHyatt.slice(12, 21),
  },
};
