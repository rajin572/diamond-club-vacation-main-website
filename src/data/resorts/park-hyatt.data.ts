import { AllImages } from "../../../public/images/AllImages";
import type { ResortData } from "@/components/resorts/resorts.types";
import { rotate } from "./helpers";
import { GUETTAWAY_PROGRAM_GALLERY } from "./guettaway-program-gallery.data";

/** Park Hyatt Riviera Maya — content from the client's HTML design (diamond-club-main-design). */
export const PARK_HYATT_RESORT_DATA: ResortData = {
  programId: "guttaway",
  programTitle: "guettaway a Diamond Club production",
  resortId: "park-hyatt",
  resortName: "Park Hyatt Riviera Maya",
  kicker: "Passover 2027",
  tagline: "guettaway a Diamond Club production",
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
        title: "Rooms & Suites",
        description: "Rooms, deluxe suites and premium suites.",
        image: AllImages.series.parkHyatt[1],
        target: { type: "section", section: "rooms" },
      },
      {
        id: "pools",
        title: "Pools & Beaches",
        description: "Pools & Cabanas on a 300-meter private beach.",
        image: AllImages.parkHyattPoolPoolsAndCabanas,
        target: { type: "section", section: "pools" },
      },
      {
        id: "wellness",
        title: "Wellness & Fitness",
        description: "Fitness center and championship golf.",
        image: AllImages.parkHyattWellnessFitnessCenter,
        target: { type: "section", section: "wellness" },
      },
      {
        id: "gallery",
        title: "Gallery",
        navLabel: "Gallery",
        description: "Park Hyatt imagery only.",
        image: AllImages.series.parkHyatt[6],
        target: { type: "section", section: "gallery" },
      },
    ],
  },
  rooms: {
    title: "Rooms & Suites",
    description: "Breathe in the Caribbean Sea from our airy rooms and suites at Park Hyatt Riviera Maya, all with private balconies, a dose of sophistication and luxury amenities.",
    linkToDetails: true,
    items: [
    // Room lists. Only one block is switched on (not commented); swap with: npm run rooms -- park-hyatt=hyatt-site | original | status

    // @rooms:begin hyatt-site | hyatt.com rooms page: 11 rooms and suites with the Hyatt photos
      {
        id: "1-king-bed",
        title: "1 King Bed",
        subtitle: "1 King Bed · Resort View",
        image: AllImages.parkHyattRoomCanphP0007KingRoomInteriorView,
        description: "Step into 52 square meters of understated elegance, with a private furnished balcony offering resort views, a plush king bed and a luxe bathroom.",
        stats: [
          { label: "Room Size", value: "559 sq. ft. / 52 sq. m." },
          { label: "Bedding", value: "1 King Bed" },
          { label: "View", value: "Resort View" },
          { label: "Category", value: "Room" },
        ],
        groups: [
          {
            title: "In-room amenities",
            items: [
              "Luxury bath amenities",
              "Complimentary high-speed Wi-Fi",
              "65-inch HDTV with premium entertainment",
              "Personalized climate control",
              "Ceiling fan",
              "Blackout drapes",
              "Premium coffee & tea service",
              "In-room minibar refrigerator",
              "Dedicated work area",
              "Laptop-size in-room safe",
              "Professional hair dryer",
              "Iron & ironing board",
              "Complimentary crib available upon request",
            ],
          },
        ],
        gallery: [
          AllImages.parkHyattRoomCanphP0007KingRoomInteriorView,
        ],
      },
      {
        id: "1-king-bed-accessible-roll-in-shower-ocean-view",
        title: "1 King Bed Accessible Roll-In Shower Ocean View",
        subtitle: "1 King Bed · Ocean View",
        image: AllImages.parkHyattRoomCanphP0009KingRoomSeatingArea,
        description: "Breathe in the ocean breezes from your furnished private balcony, then retreat into 52 square meters of accessible, easy-flow space, with a plush king bed and a roll-in shower in the luxe bathroom.",
        stats: [
          { label: "Room Size", value: "559 sq. ft. / 52 sq. m." },
          { label: "Bedding", value: "1 King Bed" },
          { label: "View", value: "Ocean View" },
          { label: "Category", value: "Room" },
        ],
        groups: [
          {
            title: "In-room amenities",
            items: [
              "Emergency strobe light and strobe-light smoke detector",
              "Cordless phone",
              "Lowered thermostat and light switches",
              "Accessible bathroom with grab bars",
              "Luxury bath amenities",
              "Complimentary high-speed Wi-Fi",
              "65-inch HDTV with premium entertainment and closed captioning",
              "Personalized climate control",
              "Ceiling fan",
              "Blackout drapes",
              "Premium coffee & tea service",
              "In-room minibar refrigerator",
              "Dedicated work area",
              "Laptop-size in-room safe",
              "Professional hair dryer",
              "Iron & ironing board",
              "Complimentary crib available upon request",
            ],
          },
        ],
        gallery: [
          AllImages.parkHyattRoomCanphP0009KingRoomSeatingArea,
        ],
      },
      {
        id: "1-king-bed-ocean-view",
        title: "1 King Bed Ocean View",
        subtitle: "1 King Bed · Ocean View",
        image: AllImages.parkHyattRoomCanphP0014KingRoomTableSeating,
        description: "Soak in the ocean views from your 52-square-meter perch with a prime location. It’s furnished with a plush king bed, a private balcony and a spacious, luxe bathroom.",
        stats: [
          { label: "Room Size", value: "559 sq. ft. / 52 sq. m." },
          { label: "Bedding", value: "1 King Bed" },
          { label: "View", value: "Ocean View" },
          { label: "Category", value: "Room" },
        ],
        groups: [
          {
            title: "In-room amenities",
            items: [
              "Luxury bath amenities",
              "Complimentary high-speed Wi-Fi",
              "65-inch HDTV with premium entertainment",
              "Personalized climate control",
              "Ceiling fan",
              "Blackout drapes",
              "Premium coffee & tea service",
              "In-room minibar refrigerator",
              "Dedicated work area",
              "Laptop-size in-room safe",
              "Professional hair dryer",
              "Iron & ironing board",
              "Complimentary crib available upon request",
            ],
          },
        ],
        gallery: [
          AllImages.parkHyattRoomCanphP0014KingRoomTableSeating,
        ],
      },
      {
        id: "1-king-bed-ocean-view-with-private-pool",
        title: "1 King Bed Ocean View with Private Pool",
        subtitle: "1 King Bed · Ocean View",
        image: AllImages.parkHyattRoomCanphR0014KingGuestroomView,
        description: "Surround yourself with luxury in this 52-square-meter space, complete with a furnished terrace with ocean views and your own pool, plus a plus king bed and a seamless indoor-outdoor layout that enhances the sense of retreat.",
        stats: [
          { label: "Room Size", value: "559 sq. ft. / 52 sq. m." },
          { label: "Bedding", value: "1 King Bed" },
          { label: "View", value: "Ocean View" },
          { label: "Category", value: "Room" },
        ],
        groups: [
          {
            title: "In-room amenities",
            items: [
              "Luxury bath amenities",
              "Complimentary high-speed Wi-Fi",
              "65-inch HDTV with premium entertainment",
              "Personalized climate control",
              "Ceiling fan",
              "Blackout drapes",
              "Premium coffee & tea service",
              "In-room minibar refrigerator",
              "Dedicated work area",
              "Laptop-size in-room safe",
              "Professional hair dryer",
              "Iron & ironing board",
              "Complimentary crib available upon request",
            ],
          },
        ],
        gallery: [
          AllImages.parkHyattRoomCanphR0014KingGuestroomView,
        ],
      },
      {
        id: "2-queen-beds",
        title: "2 Queen Beds",
        subtitle: "2 Queen Beds · Resort View",
        image: AllImages.parkHyattRoomCanphP0002BeverageStation,
        description: "Kick back in 52 square meters of comfort and luxury, designed for shared comfort with two plush queen beds, a spacious bathroom stocked with upscale products and a furnished private balcony offering views of the resort.",
        stats: [
          { label: "Room Size", value: "559 sq. ft. / 52 sq. m." },
          { label: "Bedding", value: "2 Queen Beds" },
          { label: "View", value: "Resort View" },
          { label: "Category", value: "Room" },
        ],
        groups: [
          {
            title: "In-room amenities",
            items: [
              "Luxury bath amenities",
              "Complimentary high-speed Wi-Fi",
              "65-inch HDTV with premium entertainment",
              "Personalized climate control",
              "Ceiling fan",
              "Blackout drapes",
              "Premium coffee & tea service",
              "In-room minibar refrigerator",
              "Dedicated work area",
              "Laptop-size in-room safe",
              "Professional hair dryer",
              "Iron & ironing board",
              "Complimentary crib available upon request",
            ],
          },
        ],
        gallery: [
          AllImages.parkHyattRoomCanphP0002BeverageStation,
        ],
      },
      {
        id: "2-queen-beds-ocean-view",
        title: "2 Queen Beds Ocean View",
        subtitle: "2 Queen Beds · Ocean View",
        image: AllImages.parkHyattRoomCanphP0004KingRoomBalcony,
        description: "Settle into your upgraded 52-square-meter space with a well-designed layout and outfitted with two plush queen beds, plus a comfortable private furnished patio to catch ocean breezes and views.",
        stats: [
          { label: "Room Size", value: "559 sq. ft. / 52 sq. m." },
          { label: "Bedding", value: "2 Queen Beds" },
          { label: "View", value: "Ocean View" },
          { label: "Category", value: "Room" },
        ],
        groups: [
          {
            title: "In-room amenities",
            items: [
              "Luxury bath amenities",
              "Complimentary high-speed Wi-Fi",
              "65-inch HDTV with premium entertainment",
              "Personalized climate control",
              "Ceiling fan",
              "Blackout drapes",
              "Premium coffee & tea service",
              "In-room minibar refrigerator",
              "Dedicated work area",
              "Laptop-size in-room safe",
              "Professional hair dryer",
              "Iron & ironing board",
              "Complimentary crib available upon request",
            ],
          },
        ],
        gallery: [
          AllImages.parkHyattRoomCanphP0004KingRoomBalcony,
        ],
      },
      {
        id: "1-king-bed-suite-ocean-view-plunge-pool-deluxe",
        title: "1 King Bed Suite Ocean View Plunge Pool Deluxe",
        subtitle: "1 King Bed · Ocean View · Suite",
        image: AllImages.parkHyattRoomCanphP0005KingRoomEntryArtwork,
        description: "Enjoy elevated comfort in this open-concept suite with 81 square meters of refined space, boasting ocean views and a plunge pool on the large private furnished balcony, a plush king bed and a comfortable sitting area with a sofa, perfect for lounging.",
        stats: [
          { label: "Room Size", value: "871 sq. ft. / 81 sq. m." },
          { label: "Bedding", value: "1 King Bed" },
          { label: "View", value: "Ocean View" },
          { label: "Category", value: "Suite" },
        ],
        groups: [
          {
            title: "In-room amenities",
            items: [
              "Luxury bath amenities",
              "Complimentary high-speed Wi-Fi",
              "65-inch HDTV with premium entertainment",
              "Personalized climate control",
              "Ceiling fan",
              "Blackout drapes",
              "Premium coffee & tea service",
              "In-room minibar refrigerator",
              "Dedicated work area",
              "Laptop-size in-room safe",
              "Professional hair dryer",
              "Iron & ironing board",
              "Complimentary crib available upon request",
            ],
          },
        ],
        gallery: [
          AllImages.parkHyattRoomCanphP0005KingRoomEntryArtwork,
        ],
      },
      {
        id: "1-king-bed-suite-ocean-view-private-pool-deluxe",
        title: "1 King Bed Suite Ocean View Private Pool Deluxe",
        subtitle: "1 King Bed · Ocean View · Suite",
        image: AllImages.parkHyattRoomCanphP0014KingRoomTableSeating,
        description: "Live out your Mexico dreams in this spacious 81-square-meter, residence-style suite, with a plush king bed in the private bedroom and a separate open-plan living area with a sofa, serene ocean views, a private furnished terrace with pool and elevated amenities throughout.",
        stats: [
          { label: "Room Size", value: "871 sq. ft. / 81 sq. m." },
          { label: "Bedding", value: "1 King Bed" },
          { label: "View", value: "Ocean View" },
          { label: "Category", value: "Suite" },
        ],
        groups: [
          {
            title: "In-room amenities",
            items: [
              "Luxury bath amenities",
              "Complimentary high-speed Wi-Fi",
              "65-inch HDTV with premium entertainment",
              "Personalized climate control",
              "Ceiling fan",
              "Blackout drapes",
              "Premium coffee & tea service",
              "In-room minibar refrigerator",
              "Dedicated work area",
              "Laptop-size in-room safe",
              "Professional hair dryer",
              "Iron & ironing board",
              "Complimentary crib available upon request",
            ],
          },
        ],
        gallery: [
          AllImages.parkHyattRoomCanphP0014KingRoomTableSeating,
        ],
      },
      {
        id: "1-king-bed-suite-ocean-view-plunge-pool-premium",
        title: "1 King Bed Suite Ocean View Plunge Pool Premium",
        subtitle: "1 King Bed · Ocean View · Suite",
        image: AllImages.parkHyattRoomCanphP0033OneKingBedSuiteOceanViewPlungePoolDeluxeView,
        description: "Soak up views of the beach and the residential feel of this expansive, 107-square-meter suite, with an extra half bath, a plush king bed in the bedroom, a separate living area and a refreshing plunge pool on the expanded private furnished balcony.",
        stats: [
          { label: "Room Size", value: "1,151 sq. ft. / 107 sq. m." },
          { label: "Bedding", value: "1 King Bed" },
          { label: "View", value: "Ocean View" },
          { label: "Category", value: "Suite" },
        ],
        groups: [
          {
            title: "In-room amenities",
            items: [
              "Luxury bath amenities",
              "Complimentary high-speed Wi-Fi",
              "65-inch HDTV with premium entertainment",
              "Personalized climate control",
              "Ceiling fan",
              "Blackout drapes",
              "Premium coffee & tea service",
              "In-room minibar refrigerator",
              "Dedicated work area",
              "Laptop-size in-room safe",
              "Professional hair dryer",
              "Iron & ironing board",
              "Complimentary crib available upon request",
            ],
          },
        ],
        gallery: [
          AllImages.parkHyattRoomCanphP0033OneKingBedSuiteOceanViewPlungePoolDeluxeView,
          AllImages.parkHyattRoomCanphP0034OneKingBedSuiteOceanViewPlungePoolDeluxeLayout,
          AllImages.parkHyattRoomCanphP0035OneKingBedSuiteOceanViewPlungePoolDeluxeLivingRoom,
          AllImages.parkHyattRoomCanphP0036OneKingBedSuiteOceanViewPlungePoolDeluxeTerracePlunge,
          AllImages.parkHyattRoomCanphP0037OneKingBedSuiteOceanViewPlungePoolDeluxeTerrace,
          AllImages.parkHyattRoomCanphP0038OneKingBedSuiteOceanViewPlungePoolDeluxeDoorway,
          AllImages.parkHyattRoomCanphP0032OneKingBedSuiteOceanViewPlungePoolDeluxeBathroom,
        ],
      },
      {
        id: "1-king-bed-suite-ocean-view-private-pool-premium",
        title: "1 King Bed Suite Ocean View Private Pool Premium",
        subtitle: "1 King Bed · Ocean View · Suite",
        image: AllImages.parkHyattRoomCanphP0020BathroomWithBathtub,
        description: "Immerse yourself in the Riviera Maya lifestyle in your 107-square-meter suite, complete with a spacious private terrace with a pool, a separate living/dining area with its own half bath, a plush king bed in the private bedroom and stunning ocean views.",
        stats: [
          { label: "Room Size", value: "1,151 sq. ft. / 107 sq. m." },
          { label: "Bedding", value: "1 King Bed" },
          { label: "View", value: "Ocean View" },
          { label: "Category", value: "Suite" },
        ],
        groups: [
          {
            title: "In-room amenities",
            items: [
              "Luxury bath amenities",
              "Complimentary high-speed Wi-Fi",
              "65-inch HDTV with premium entertainment",
              "Personalized climate control",
              "Ceiling fan",
              "Blackout drapes",
              "Premium coffee & tea service",
              "In-room minibar refrigerator",
              "Dedicated work area",
              "Laptop-size in-room safe",
              "Professional hair dryer",
              "Iron & ironing board",
              "Complimentary crib available upon request",
            ],
          },
        ],
        gallery: [
          AllImages.parkHyattRoomCanphP0020BathroomWithBathtub,
          AllImages.parkHyattRoomCanphP0021BedroomInterior,
          AllImages.parkHyattRoomCanphP0022BedroomOceanView,
          AllImages.parkHyattRoomCanphP0023DecorDetail,
          AllImages.parkHyattRoomCanphP0024DiningArea,
          AllImages.parkHyattRoomCanphP0025LivingRoom,
          AllImages.parkHyattRoomCanphP0026OceanFrontPrivatePoolTerrace,
          AllImages.parkHyattRoomCanphP0027ShowerDetail,
          AllImages.parkHyattRoomCanphP0028BathroomBathtub,
          AllImages.parkHyattRoomCanphP0030CoffeeStation,
        ],
      },
      {
        id: "penthouse-suite-with-plunge-pool",
        title: "Penthouse Suite with Plunge Pool",
        subtitle: "1 King Bed · Ocean View · Suite",
        image: AllImages.parkHyattRoomCanphP0005KingRoomEntryArtwork,
        description: "Spread out and entertain in this exclusive, residence-style dwelling, with 214 square meters of airy space for you and your guests, complete with an expansive terrace offering 81 square meters of additional living space and a plunge pool. The suite also includes a roomy living and dining area inside and a plush king bed in the private bedroom.",
        stats: [
          { label: "Room Size", value: "2,303 sq. ft. / 214 sq. m." },
          { label: "Bedding", value: "1 King Bed" },
          { label: "View", value: "Ocean View" },
          { label: "Category", value: "Suite" },
        ],
        groups: [
          {
            title: "In-room amenities",
            items: [
              "Luxury bath amenities",
              "Complimentary high-speed Wi-Fi",
              "65-inch HDTV with premium entertainment",
              "Personalized climate control",
              "Ceiling fan",
              "Blackout drapes",
              "Premium coffee & tea service",
              "In-room minibar refrigerator",
              "Dedicated work area",
              "Laptop-size in-room safe",
              "Professional hair dryer",
              "Iron & ironing board",
              "Complimentary crib available upon request",
            ],
          },
        ],
        gallery: [
          AllImages.parkHyattRoomCanphP0005KingRoomEntryArtwork,
        ],
      },
    // @rooms:end hyatt-site

    // @rooms:begin original | The original nine rooms
    //       {
    //         id: "king-room",
    //         title: "King Room",
    //         subtitle: "1 king bed",
    //         image: AllImages.series.parkHyatt[2],
    //         description: "Warm natural woods, stone accents and floor-to-ceiling glass in a serene setting steps from the shoreline.",
    //         stats: [
    //           { label: "Bedding", value: "1 king bed" },
    //           { label: "Hotel", value: "Park Hyatt Riviera Maya" },
    //         ],
    //         groups: [
    //           {
    //             title: "Beds & Bedding",
    //             items: [
    //               "1 King or 2 Queen Beds where applicable",
    //               "Cribs permitted",
    //               "Duvet and Frette luxury linens",
    //               "Rollaway bed available upon request",
    //             ],
    //           },
    //           {
    //             title: "Room Features",
    //             items: [
    //               "Air-conditioned",
    //               "Connecting rooms available for some rooms",
    //               "Terrace",
    //             ],
    //           },
    //           {
    //             title: "Bath & Bathroom",
    //             items: [
    //               "Luxury bath amenities",
    //               "Separate bathtub and shower",
    //               "Double vanities",
    //               "Lighted makeup mirror",
    //               "Hair dryer",
    //               "Robe",
    //               "Slippers",
    //             ],
    //           },
    //           {
    //             title: "Internet & Phones",
    //             items: [
    //               "Cordless phone",
    //               "Voicemail and speaker phone",
    //               "Complimentary wireless internet",
    //             ],
    //           },
    //         ],
    //         gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 0),
    //       },
    //       {
    //         id: "queen-room",
    //         title: "Queen Room",
    //         subtitle: "1 king bed",
    //         image: AllImages.series.parkHyatt[3],
    //         description: "Designed for quiet relaxation with plush double bedding, curated organic finishes and private terrace.",
    //         stats: [
    //           { label: "Bedding", value: "1 king bed" },
    //           { label: "Hotel", value: "Park Hyatt Riviera Maya" },
    //         ],
    //         groups: [
    //           {
    //             title: "Beds & Bedding",
    //             items: [
    //               "1 King or 2 Queen Beds where applicable",
    //               "Cribs permitted",
    //               "Duvet and Frette luxury linens",
    //               "Rollaway bed available upon request",
    //             ],
    //           },
    //           {
    //             title: "Room Features",
    //             items: [
    //               "Air-conditioned",
    //               "Connecting rooms available for some rooms",
    //               "Terrace",
    //             ],
    //           },
    //           {
    //             title: "Bath & Bathroom",
    //             items: [
    //               "Luxury bath amenities",
    //               "Separate bathtub and shower",
    //               "Double vanities",
    //               "Lighted makeup mirror",
    //               "Hair dryer",
    //               "Robe",
    //               "Slippers",
    //             ],
    //           },
    //           {
    //             title: "Internet & Phones",
    //             items: [
    //               "Cordless phone",
    //               "Voicemail and speaker phone",
    //               "Complimentary wireless internet",
    //             ],
    //           },
    //         ],
    //         gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 1),
    //       },
    //       {
    //         id: "ocean-view-king",
    //         title: "Ocean View King",
    //         subtitle: "1 king bed · ocean view",
    //         image: AllImages.series.parkHyatt[4],
    //         description: "Elevated views over the Caribbean sea, with custom King bed, natural wood details, and deep soaking tub.",
    //         stats: [
    //           { label: "Bedding", value: "1 king bed" },
    //           { label: "View", value: "Ocean view" },
    //           { label: "Hotel", value: "Park Hyatt Riviera Maya" },
    //         ],
    //         groups: [
    //           {
    //             title: "Beds & Bedding",
    //             items: [
    //               "1 King or 2 Queen Beds where applicable",
    //               "Cribs permitted",
    //               "Duvet and Frette luxury linens",
    //               "Rollaway bed available upon request",
    //             ],
    //           },
    //           {
    //             title: "Room Features",
    //             items: [
    //               "Air-conditioned",
    //               "Connecting rooms available for some rooms",
    //               "Terrace",
    //             ],
    //           },
    //           {
    //             title: "Bath & Bathroom",
    //             items: [
    //               "Luxury bath amenities",
    //               "Separate bathtub and shower",
    //               "Double vanities",
    //               "Lighted makeup mirror",
    //               "Hair dryer",
    //               "Robe",
    //               "Slippers",
    //             ],
    //           },
    //           {
    //             title: "Internet & Phones",
    //             items: [
    //               "Cordless phone",
    //               "Voicemail and speaker phone",
    //               "Complimentary wireless internet",
    //             ],
    //           },
    //         ],
    //         gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 2),
    //       },
    //       {
    //         id: "ocean-view-king-private-pool",
    //         title: "Ocean View King, Private Pool",
    //         subtitle: "1 king bed · ocean view · private pool",
    //         image: AllImages.series.parkHyatt[5],
    //         description: "The perfect blend of horizon ocean vistas and your own private terrace pool for peaceful morning and evening dips.",
    //         stats: [
    //           { label: "Bedding", value: "1 king bed" },
    //           { label: "View", value: "Ocean view" },
    //           { label: "Pool", value: "Private pool" },
    //           { label: "Hotel", value: "Park Hyatt Riviera Maya" },
    //         ],
    //         groups: [
    //           {
    //             title: "Beds & Bedding",
    //             items: [
    //               "1 King or 2 Queen Beds where applicable",
    //               "Cribs permitted",
    //               "Duvet and Frette luxury linens",
    //               "Rollaway bed available upon request",
    //             ],
    //           },
    //           {
    //             title: "Room Features",
    //             items: [
    //               "Air-conditioned",
    //               "Connecting rooms available for some rooms",
    //               "Terrace",
    //             ],
    //           },
    //           {
    //             title: "Bath & Bathroom",
    //             items: [
    //               "Luxury bath amenities",
    //               "Separate bathtub and shower",
    //               "Double vanities",
    //               "Lighted makeup mirror",
    //               "Hair dryer",
    //               "Robe",
    //               "Slippers",
    //             ],
    //           },
    //           {
    //             title: "Internet & Phones",
    //             items: [
    //               "Cordless phone",
    //               "Voicemail and speaker phone",
    //               "Complimentary wireless internet",
    //             ],
    //           },
    //         ],
    //         gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 3),
    //       },
    //       {
    //         id: "plunge-pool-deluxe-suite",
    //         title: "Plunge Pool Deluxe Suite",
    //         subtitle: "1 king bed suite · ocean view · plunge pool",
    //         image: AllImages.series.parkHyatt[6],
    //         description: "Expansive luxury suite featuring an independent parlor, oversized private pool terrace, and panoramic Caribbean scenery.",
    //         stats: [
    //           { label: "Bedding", value: "1 king bed suite" },
    //           { label: "View", value: "Ocean view" },
    //           { label: "Pool", value: "Plunge pool" },
    //           { label: "Hotel", value: "Park Hyatt Riviera Maya" },
    //         ],
    //         groups: [
    //           {
    //             title: "Beds & Bedding",
    //             items: [
    //               "1 King or 2 Queen Beds where applicable",
    //               "Cribs permitted",
    //               "Duvet and Frette luxury linens",
    //               "Rollaway bed available upon request",
    //             ],
    //           },
    //           {
    //             title: "Room Features",
    //             items: [
    //               "Air-conditioned",
    //               "Connecting rooms available for some rooms",
    //               "Terrace",
    //             ],
    //           },
    //           {
    //             title: "Bath & Bathroom",
    //             items: [
    //               "Luxury bath amenities",
    //               "Separate bathtub and shower",
    //               "Double vanities",
    //               "Lighted makeup mirror",
    //               "Hair dryer",
    //               "Robe",
    //               "Slippers",
    //             ],
    //           },
    //           {
    //             title: "Internet & Phones",
    //             items: [
    //               "Cordless phone",
    //               "Voicemail and speaker phone",
    //               "Complimentary wireless internet",
    //             ],
    //           },
    //         ],
    //         gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 4),
    //       },
    //       {
    //         id: "private-pool-deluxe-suite",
    //         title: "Private Pool Deluxe Suite",
    //         subtitle: "1 king bed suite · ocean view · private pool",
    //         image: AllImages.series.parkHyatt[7],
    //         description: "Exceptional coastal retreat boasting a larger private swimming pool, secluded sun deck, and full personal concierge service.",
    //         stats: [
    //           { label: "Bedding", value: "1 king bed suite" },
    //           { label: "View", value: "Ocean view" },
    //           { label: "Pool", value: "Private pool" },
    //           { label: "Hotel", value: "Park Hyatt Riviera Maya" },
    //         ],
    //         groups: [
    //           {
    //             title: "Beds & Bedding",
    //             items: [
    //               "1 King or 2 Queen Beds where applicable",
    //               "Cribs permitted",
    //               "Duvet and Frette luxury linens",
    //               "Rollaway bed available upon request",
    //             ],
    //           },
    //           {
    //             title: "Room Features",
    //             items: [
    //               "Air-conditioned",
    //               "Connecting rooms available for some rooms",
    //               "Terrace",
    //             ],
    //           },
    //           {
    //             title: "Bath & Bathroom",
    //             items: [
    //               "Luxury bath amenities",
    //               "Separate bathtub and shower",
    //               "Double vanities",
    //               "Lighted makeup mirror",
    //               "Hair dryer",
    //               "Robe",
    //               "Slippers",
    //             ],
    //           },
    //           {
    //             title: "Internet & Phones",
    //             items: [
    //               "Cordless phone",
    //               "Voicemail and speaker phone",
    //               "Complimentary wireless internet",
    //             ],
    //           },
    //         ],
    //         gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 5),
    //       },
    //       {
    //         id: "plunge-pool-premium-suite",
    //         title: "Plunge Pool Premium Suite",
    //         subtitle: "1 king bed suite · ocean view · plunge pool",
    //         image: AllImages.series.parkHyatt[8],
    //         description: "Plunge Pool Premium Suite at Park Hyatt Riviera Maya: 1 king bed suite · ocean view · plunge pool.",
    //         stats: [
    //           { label: "Bedding", value: "1 king bed suite" },
    //           { label: "View", value: "Ocean view" },
    //           { label: "Pool", value: "Plunge pool" },
    //           { label: "Hotel", value: "Park Hyatt Riviera Maya" },
    //         ],
    //         groups: [
    //           {
    //             title: "Beds & Bedding",
    //             items: [
    //               "1 King or 2 Queen Beds where applicable",
    //               "Cribs permitted",
    //               "Duvet and Frette luxury linens",
    //               "Rollaway bed available upon request",
    //             ],
    //           },
    //           {
    //             title: "Room Features",
    //             items: [
    //               "Air-conditioned",
    //               "Connecting rooms available for some rooms",
    //               "Terrace",
    //             ],
    //           },
    //           {
    //             title: "Bath & Bathroom",
    //             items: [
    //               "Luxury bath amenities",
    //               "Separate bathtub and shower",
    //               "Double vanities",
    //               "Lighted makeup mirror",
    //               "Hair dryer",
    //               "Robe",
    //               "Slippers",
    //             ],
    //           },
    //           {
    //             title: "Internet & Phones",
    //             items: [
    //               "Cordless phone",
    //               "Voicemail and speaker phone",
    //               "Complimentary wireless internet",
    //             ],
    //           },
    //         ],
    //         gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 0),
    //       },
    //       {
    //         id: "private-pool-premium-suite",
    //         title: "Private Pool Premium Suite",
    //         subtitle: "1 king bed suite · ocean view · private pool",
    //         image: AllImages.series.parkHyatt[9],
    //         description: "Private Pool Premium Suite at Park Hyatt Riviera Maya: 1 king bed suite · ocean view · private pool.",
    //         stats: [
    //           { label: "Bedding", value: "1 king bed suite" },
    //           { label: "View", value: "Ocean view" },
    //           { label: "Pool", value: "Private pool" },
    //           { label: "Hotel", value: "Park Hyatt Riviera Maya" },
    //         ],
    //         groups: [
    //           {
    //             title: "Beds & Bedding",
    //             items: [
    //               "1 King or 2 Queen Beds where applicable",
    //               "Cribs permitted",
    //               "Duvet and Frette luxury linens",
    //               "Rollaway bed available upon request",
    //             ],
    //           },
    //           {
    //             title: "Room Features",
    //             items: [
    //               "Air-conditioned",
    //               "Connecting rooms available for some rooms",
    //               "Terrace",
    //             ],
    //           },
    //           {
    //             title: "Bath & Bathroom",
    //             items: [
    //               "Luxury bath amenities",
    //               "Separate bathtub and shower",
    //               "Double vanities",
    //               "Lighted makeup mirror",
    //               "Hair dryer",
    //               "Robe",
    //               "Slippers",
    //             ],
    //           },
    //           {
    //             title: "Internet & Phones",
    //             items: [
    //               "Cordless phone",
    //               "Voicemail and speaker phone",
    //               "Complimentary wireless internet",
    //             ],
    //           },
    //         ],
    //         gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 1),
    //       },
    //       {
    //         id: "penthouse-suite",
    //         title: "Penthouse Suite",
    //         subtitle: "Ocean view · plunge pool",
    //         image: AllImages.series.parkHyatt[10],
    //         description: "Penthouse Suite at Park Hyatt Riviera Maya: Ocean view · plunge pool.",
    //         stats: [
    //           { label: "View", value: "Ocean view" },
    //           { label: "Pool", value: "Plunge pool" },
    //           { label: "Hotel", value: "Park Hyatt Riviera Maya" },
    //         ],
    //         groups: [
    //           {
    //             title: "Beds & Bedding",
    //             items: [
    //               "1 King or 2 Queen Beds where applicable",
    //               "Cribs permitted",
    //               "Duvet and Frette luxury linens",
    //               "Rollaway bed available upon request",
    //             ],
    //           },
    //           {
    //             title: "Room Features",
    //             items: [
    //               "Air-conditioned",
    //               "Connecting rooms available for some rooms",
    //               "Terrace",
    //             ],
    //           },
    //           {
    //             title: "Bath & Bathroom",
    //             items: [
    //               "Luxury bath amenities",
    //               "Separate bathtub and shower",
    //               "Double vanities",
    //               "Lighted makeup mirror",
    //               "Hair dryer",
    //               "Robe",
    //               "Slippers",
    //             ],
    //           },
    //           {
    //             title: "Internet & Phones",
    //             items: [
    //               "Cordless phone",
    //               "Voicemail and speaker phone",
    //               "Complimentary wireless internet",
    //             ],
    //           },
    //         ],
    //         gallery: rotate(AllImages.series.parkHyatt.slice(2, 8), 2),
    //       },
    // @rooms:end original
    ],
  },
  dining: {
    title: "Dining",
    description: "Surround yourself with an array of vibrantly appealing all-inclusive choices from our varied dining and drinking venues, including four a la carte offerings.",
    images: [AllImages.parkHyattDiningBeachGrillIkal, AllImages.parkHyattDiningPatisserieMarketCafe, AllImages.parkHyattDiningNutreKitchen, AllImages.parkHyattDiningBrumaSignatureRestaurant],
    // From the hotel's Hyatt site, Restaurants & Bars (hyatt.com/park-hyatt/en-US/canph-park-hyatt-riviera-maya/dining): names, text and photos as published.
    // The opening hours are not shown on that page (they open under "Hours & More"), so none are listed here.
    items: [
      {
        id: "beach-grill-ikal",
        title: "Beach Grill - IK'AL",
        subtitle: "Beachfront restaurant",
        image: AllImages.parkHyattDiningBeachGrillIkal,
        description: "Enjoy coastal flavors with an ocean breeze in our vibrant beachfront restaurant, along with tropical cocktails and curated wines by the glass for a refined, yet casual outing. Think fresh seafood, local ingredients and Yucatecan flavors for an exciting, easy dining experience.",
        gallery: [AllImages.parkHyattDiningBeachGrillIkal],
      },
      {
        id: "patisserie-market-and-cafe",
        title: "Patisserie Market and Café",
        subtitle: "Café & Bakery",
        image: AllImages.parkHyattDiningPatisserieMarketCafe,
        description: "Stop by for specialty coffee drinks, freshly baked pastries and European-style sweets, uplifting signature affogati and Italian-inspired cafe sandwiches like tramezzini for a quick, yet civilized, meet and eat.",
        gallery: [AllImages.parkHyattDiningPatisserieMarketCafe],
      },
      {
        id: "nutre-kitchen",
        title: "Nutre Kitchen",
        subtitle: "Buffet & International Dinner",
        image: AllImages.parkHyattDiningNutreKitchen,
        description: "Begin the day with a relaxed array of choices from our buffet and cooking stations. At lunch, choose from a wide assortment of hearty and healthy global options that will satisfy the whole family. In the evening, the space transforms to an elevated but approachable and inviting dinner service across an international spectrum of flavors and ingredients.",
        gallery: [AllImages.parkHyattDiningNutreKitchen],
      },
      {
        id: "bruma",
        title: "Signature Restaurant - Bruma",
        subtitle: "Signature restaurant · Steakhouse",
        image: AllImages.parkHyattDiningBrumaSignatureRestaurant,
        description: "Keep it artful and intimate in our sophisticated steakhouse, where precisely poured cocktails and an elegant wine list meet the finest cuts of meat, pristine local seafood and some unexpected twists from our professional chefs and servers.",
        gallery: [AllImages.parkHyattDiningBrumaSignatureRestaurant],
      },
    ],
  },
  pools: {
    title: "Pools & Beach",
    description: "Feel the caress of the Caribbean sun from a quiet poolside chaise, retreat beneath a shaded cabana, or wade into the turquoise waters beyond.",
    images: [AllImages.parkHyattPoolPoolsAndCabanas],
    // The previous pools (kept, switched off): Infinity Panoramic Pool and Pool Bar, with the photos in AllImages.series.parkHyatt.
    // images: AllImages.series.parkHyatt.slice(9, 18),
    items: [
      // From the hotel's Hyatt site, "Discover Park Hyatt Riviera Maya > Pools & Cabanas" (hyatt.com/park-hyatt/en-US/canph-park-hyatt-riviera-maya).
      // The program shows "All day" instead of the opening hours (see withAllDayPools in registry.ts).
      {
        id: "pools-and-cabanas",
        title: "Pools & Cabanas",
        subtitle: "300-meter private beach · Four pools",
        image: AllImages.parkHyattPoolPoolsAndCabanas,
        description: "Across a 300-meter private beach and four pools, including a serene adults-only retreat, days slow to a beautifully unhurried cadence.",
        stats: [
          { label: "Type", value: "Pools, beach and cabanas" },
          { label: "Hours", value: "All day" },
          { label: "Location", value: "300-meter private beach" },
        ],
        groups: [
          { title: "Schedule", items: ["All day"] },
          { title: "Features", items: ["Four pools", "Serene adults-only retreat", "Shaded cabanas", "Poolside chaises", "300-meter private beach"] },
        ],
        gallery: [AllImages.parkHyattPoolPoolsAndCabanas],
      },
    ],
  },
  wellness: {
    title: "Wellness & Fitness",
    description: "A fully equipped fitness center, and championship golf at El Tinto Golf Course and the Cancun Country Club.",
    images: [AllImages.parkHyattWellnessFitnessCenter, AllImages.parkHyattWellnessChampionshipGolf],
    activities: [
      {
        id: "fitness-center",
        title: "Fitness Center",
        description: "A fully equipped fitness center with cardio and strength machines, free weights, mats and lockers.",
      },
      {
        id: "championship-golf",
        title: "Championship Golf",
        description: "Discover preferred access and exclusive rates at El Tinto Golf Course and the Cancun Country Club’s exceptional leisure facilities. Refine your game at the driving range, then enjoy spirited matches on the tennis and padel courts—all in an atmosphere of effortless sophistication.",
      },
    ],
  },
  spa: {
    item: {
      id: "spa",
      title: "Velara Spa",
      subtitle: "A sanctuary of deep restoration",
      image: AllImages.parkHyattSpaVelaraSpa,
      description: "Transition from the energy of the Riviera Maya into a sanctuary of deep restoration. Velara Spa is designed as a signature wellness destination, offering private treatment rooms, thermal experiences, and hydrotherapy. Personalized treatments, couples’ journeys, and restorative moments make wellness an integral part of every stay.",
      groups: [
        {
          title: "Treatments & Facilities",
          items: [
            "Private treatment rooms",
            "Thermal experiences",
            "Hydrotherapy",
            "Personalized treatments",
            "Couples’ journeys",
          ],
        },
      ],
      gallery: [AllImages.parkHyattSpaVelaraSpa],
    },
    section: {
      title: "Spa",
      description: "Transition from the energy of the Riviera Maya into a sanctuary of deep restoration. Velara Spa is designed as a signature wellness destination, offering private treatment rooms, thermal experiences, and hydrotherapy. Personalized treatments, couples’ journeys, and restorative moments make wellness an integral part of every stay.",
      images: [AllImages.parkHyattSpaVelaraSpa],
    },
  },
  gallery: {
    title: "Resort Gallery",
    description: "Moments from last year's Passover program at the hotel.",
    images: GUETTAWAY_PROGRAM_GALLERY,
  },
};
