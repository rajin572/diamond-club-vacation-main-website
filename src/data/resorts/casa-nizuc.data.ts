import { AllImages } from "../../../public/images/AllImages";
import type { ResortData } from "@/components/resorts/resorts.types";

/** Casa Nizuc — content from the client's HTML design (diamond-club-main-design). */
export const CASA_NIZUC_DATA: ResortData = {
  programId: "blue",
  programTitle: "Casa Nizuc by DCV",
  resortId: "casa-nizuc",
  resortName: "Casa Nizuc",
  kicker: "Casa Nizuc by DCV",
  heroLogo: { image: AllImages.casaNizucLogoWhite, alt: "Casa Nizuc", height: 96 },
  tagline: "Luxury made accessible",
  heroImage: AllImages.series.casa[0],
  overviewLabel: "Overview",
  showSubNav: true,
  overview: {
    title: "Discover Casa Nizuc",
    description: "Explore rooms and suites, dining, pools and beach, wellness and fitness, and a gallery dedicated to Casa Nizuc.",
    cards: [
      {
        id: "rooms",
        title: "Rooms & Suites",
        description: "Classic, Deluxe and Nizuc Suite categories.",
        image: AllImages.casaNizucRoomKingBalcony,
        target: { type: "section", section: "rooms" },
      },
      {
        id: "pools",
        title: "Pools & Beaches",
        description: "Resort pool and beach experiences.",
        image: AllImages.casaNizucPool,
        target: { type: "section", section: "pools" },
      },
      {
        id: "wellness",
        title: "Wellness & Fitness",
        description: "Fitness and restorative experiences.",
        image: AllImages.casaNizucGallery27,
        target: { type: "section", section: "wellness" },
      },
      {
        id: "gallery",
        title: "Gallery",
        navLabel: "Gallery",
        description: "A Casa Nizuc-only gallery.",
        image: AllImages.casaNizucGallery00,
        target: { type: "section", section: "gallery" },
      },
    ],
  },
  rooms: {
    title: "Rooms & Suites",
    description: "After a day in paradise, enjoy a deep and soothing night sleep. Private terraces for unforgettable sunsets and soothing ocean breezes. Daydreaming views: unforgettable sunrises and sunsets from your suite in the top floors.",
    linkToDetails: true,
    // From the hotel's Marriott rooms page (marriott.com/es/hotels/cunan-casa-nizuc-a-tribute-portfolio-resort/rooms): the 9 rooms and suites with their beds and views.
    // Everything below comes from each room's "See more" pop-up on that page (client 2026-10-26, "the Casa Nizuc rooms are missing all the info"), word for word apart from capitals and the
    // Spanish names ("Major" = Master). The photos are not tied to a room in the data we have: each room shows the Marriott room photos that match its beds.
    items: [
      {
        id: "classic",
        title: "Classic Guest Room",
        subtitle: "Queen or Double",
        image: AllImages.casaNizucRoomTwoDoubles,
        description: "Room, Queen or Double. Queen or Double, Mini-fridge, 31m²/334ft², Living area, Wireless Internet access (charges apply), Coffee and tea service.",
        stats: [
          { label: "Room Size", value: "334 sq. ft. / 31 sq. m." },
          { label: "Bedding", value: "Queen or Double" },
          { label: "Guests", value: "2 Guests (max.)" },
          { label: "Cots", value: "1 cot allowed" },
        ],
        groups: [
          {
            title: "Beds and bedding", items: [
              "Maximum capacity: 2",
              "Queen or Double",
              "Extra beds are not allowed",
              "Cots are allowed: 1",
              "Quilt",
            ]
          },
          {
            title: "Room features", items: [
              "31m²/334ft²",
              "With air conditioning",
              "Individual climate control",
              "Non-smoking room",
              "Living area",
            ]
          },
          {
            title: "Bathroom features", items: [
              "Shower",
              "Lighted makeup mirror",
              "Hair dryer",
              "Coat",
              "Slippers",
            ]
          },
          {
            title: "Furniture and decoration", items: [
              "In-room safe (charges apply)",
              "Desk, for writing/working, power outlet",
              "Iron and ironing board",
            ]
          },
          {
            title: "Food and drinks", items: [
              "Complimentary bottled water",
              "Coffee and tea service",
              "Instant hot water",
              "Minibar",
            ]
          },
          {
            title: "Kitchen features", items: [
              "Mini refrigerator",
              "Plates and glasses",
            ]
          },
          {
            title: "Internet and telephones", items: [
              "Telephones: 1",
              "Cordless phone, Voicemail, and Speakerphone",
              "Wireless Internet access (charges apply)",
            ]
          },
          {
            title: "Entertainment", items: [
              "Premium movie channels",
              "Cable/satellite",
              "CNN and ESPN",
              "Radio",
            ]
          },
          {
            title: "Accessibility", items: [
              "This type of room does not offer rooms with facilities for people with mobility problems",
              "This type of room does not offer rooms with facilities for people with mobility problems with wheelchair-accessible showers",
              "This type of room does not offer rooms with facilities for people with hearing problems",
            ]
          },
        ],
        gallery: [AllImages.casaNizucRoomTwoDoubles, AllImages.casaNizucRoomKingBalcony],
      },
      {
        id: "deluxe-1-king-partial-ocean-view",
        title: "Luxury Room",
        subtitle: "1 King · Partial Ocean View · Balcony",
        image: AllImages.casaNizucRoomKingBalcony,
        description: "1 King, partial ocean view, balcony. 1 King bed, Mini-fridge, 37m²/398ft², Living area, Wireless Internet access (charges apply), Coffee and tea service.",
        stats: [
          { label: "Room Size", value: "398 sq. ft. / 37 sq. m." },
          { label: "Bedding", value: "1 King" },
          { label: "View", value: "Partial Ocean View" },
          { label: "Guests", value: "2 Guests (max.)" },
        ],
        groups: [
          {
            title: "Beds and bedding", items: [
              "Maximum capacity: 2",
              "1 King",
              "Extra beds are not allowed",
              "Cots are allowed: 1",
              "Quilt",
            ]
          },
          {
            title: "Room features", items: [
              "37m²/398ft²",
              "With air conditioning",
              "Individual climate control",
              "Non-smoking room",
              "Living area",
            ]
          },
          {
            title: "Bathroom features", items: [
              "Lighted makeup mirror",
              "Hair dryer",
              "Coat",
              "Slippers",
            ]
          },
          {
            title: "Furniture and decoration", items: [
              "In-room safe (charges apply)",
              "Desk, for writing/working, power outlet",
              "Iron and ironing board",
            ]
          },
          {
            title: "Food and drinks", items: [
              "Complimentary bottled water",
              "Coffee and tea service",
              "Instant hot water",
              "Minibar",
            ]
          },
          {
            title: "Kitchen features", items: [
              "Mini refrigerator",
              "Plates and glasses",
            ]
          },
          {
            title: "Internet and telephones", items: [
              "Telephones: 1",
              "Cordless phone, Voicemail, and Speakerphone",
              "Wireless Internet access (charges apply)",
            ]
          },
          {
            title: "Entertainment", items: [
              "Premium movie channels",
              "Cable/satellite",
              "CNN and ESPN",
              "Radio",
            ]
          },
          {
            title: "Accessibility", items: [
              "This type of room does not offer rooms with facilities for people with mobility problems",
              "This type of room does not offer rooms with facilities for people with mobility problems with wheelchair-accessible showers",
              "This type of room does not offer rooms with facilities for people with hearing problems",
            ]
          },
        ],
        gallery: [AllImages.casaNizucRoomKingBalcony, AllImages.casaNizucRoomKingBath],
      },
      {
        id: "deluxe-2-double-partial-ocean-view",
        title: "Luxury Room",
        subtitle: "2 Double · Partial Ocean View · Balcony",
        image: AllImages.casaNizucRoomTwoDoubles,
        description: "2 Double Rooms, Partial Ocean View, Balcony. 2 Double Rooms, Mini Fridge, 37m²/398ft², Living Area, Complimentary Wireless Internet Access, Coffee and Tea Service.",
        stats: [
          { label: "Room Size", value: "398 sq. ft. / 37 sq. m." },
          { label: "Bedding", value: "2 Double" },
          { label: "View", value: "Partial Ocean View" },
          { label: "Guests", value: "4 Guests (max.)" },
        ],
        groups: [
          {
            title: "Beds and bedding", items: [
              "Maximum capacity: 4",
              "2 Double",
              "Extra beds are not allowed",
              "Cribs are not allowed",
              "Quilt",
            ]
          },
          {
            title: "Room features", items: [
              "37m²/398ft²",
              "With air conditioning",
              "Individual climate control",
              "Outdoor spaces: balcony (1)",
              "Living area",
            ]
          },
          {
            title: "Bathroom features", items: [
              "Shower",
              "Lighted makeup mirror",
              "Hair dryer",
              "Coat",
              "Slippers",
            ]
          },
          {
            title: "Furniture and decoration", items: [
              "In-room safe (charges apply)",
              "Desk, for writing/working, power outlet",
              "Iron and ironing board",
            ]
          },
          {
            title: "Food and drinks", items: [
              "Complimentary bottled water",
              "Coffee and tea service",
              "Instant hot water",
              "Minibar",
            ]
          },
          {
            title: "Kitchen features", items: [
              "Mini refrigerator",
              "Plates and glasses",
            ]
          },
          {
            title: "Internet and telephones", items: [
              "Telephones: 1",
              "Cordless phone, Voicemail, and Speakerphone",
              "Complimentary wireless Internet access",
            ]
          },
          {
            title: "Entertainment", items: [
              "Premium movie channels",
              "Cable/satellite",
              "CNN and ESPN",
              "Radio",
            ]
          },
          {
            title: "Accessibility", items: [
              "This type of room does not offer rooms with facilities for people with mobility problems",
              "This type of room offers rooms with facilities for people with mobility problems, including wheelchair-accessible showers.",
              "This type of room offers rooms with facilities for people with hearing problems, including devices with alarms and visual notifications for the door and telephone.",
            ]
          },
        ],
        gallery: [AllImages.casaNizucRoomTwoDoubles],
      },
      {
        id: "deluxe-1-king-ocean-view",
        title: "Luxury Room",
        subtitle: "1 King · Ocean View · Balcony",
        image: AllImages.casaNizucRoomKingBath,
        description: "1 King, ocean view, balcony. 1 King bed, Mini-fridge, 37m²/398ft², Living area, Wireless Internet access (charges apply), Coffee and tea service.",
        stats: [
          { label: "Room Size", value: "398 sq. ft. / 37 sq. m." },
          { label: "Bedding", value: "1 King" },
          { label: "View", value: "Ocean View" },
          { label: "Guests", value: "2 Guests (max.)" },
        ],
        groups: [
          {
            title: "Beds and bedding", items: [
              "Maximum capacity: 2",
              "1 King",
              "Extra beds are not allowed",
              "Cribs are not allowed",
              "Quilt",
            ]
          },
          {
            title: "Room features", items: [
              "37m²/398ft²",
              "With air conditioning",
              "Individual climate control",
              "Non-smoking room",
              "Outdoor spaces: balcony (1)",
              "Living area",
            ]
          },
          {
            title: "Bathroom features", items: [
              "Shower",
              "Lighted makeup mirror",
              "Hair dryer",
              "Coat",
              "Slippers",
            ]
          },
          {
            title: "Furniture and decoration", items: [
              "In-room safe (charges apply)",
              "Desk, for writing/working, power outlet",
              "Iron and ironing board",
            ]
          },
          {
            title: "Food and drinks", items: [
              "Complimentary bottled water",
              "Coffee and tea service",
              "Instant hot water",
              "Minibar",
            ]
          },
          {
            title: "Kitchen features", items: [
              "Mini refrigerator",
              "Plates and glasses",
            ]
          },
          {
            title: "Internet and telephones", items: [
              "Telephones: 1",
              "Cordless phone, Voicemail, and Speakerphone",
              "Wireless Internet access (charges apply)",
            ]
          },
          {
            title: "Entertainment", items: [
              "Premium movie channels",
              "Cable/satellite",
              "CNN and ESPN",
              "Radio",
            ]
          },
          {
            title: "Accessibility", items: [
              "This type of room does not offer rooms with facilities for people with mobility problems",
              "This type of room does not offer rooms with facilities for people with mobility problems with wheelchair-accessible showers",
              "This type of room does not offer rooms with facilities for people with hearing problems",
            ]
          },
        ],
        gallery: [AllImages.casaNizucRoomKingBath, AllImages.casaNizucRoomKingBalcony],
      },
      {
        id: "deluxe-2-double-ocean-view",
        title: "Luxury Room",
        subtitle: "2 Double · Ocean View · Balcony",
        image: AllImages.casaNizucRoomTwoDoubles,
        description: "2 Double Rooms, Sea View, Balcony. 2 Double Rooms, Mini Fridge, 37m²/398ft², Living Area, Wireless Internet Access (charges apply), Coffee and Tea Service.",
        stats: [
          { label: "Room Size", value: "398 sq. ft. / 37 sq. m." },
          { label: "Bedding", value: "2 Double" },
          { label: "View", value: "Ocean View" },
          { label: "Guests", value: "4 Guests (max.)" },
        ],
        groups: [
          {
            title: "Beds and bedding", items: [
              "Maximum capacity: 4",
              "2 Double",
              "Extra beds are not allowed",
              "Cots are allowed: 1",
              "Quilt",
            ]
          },
          {
            title: "Room features", items: [
              "37m²/398ft²",
              "With air conditioning",
              "Individual climate control",
              "Non-smoking room",
              "Outdoor spaces: balcony (1)",
              "Living area",
            ]
          },
          {
            title: "Bathroom features", items: [
              "Shower",
              "Lighted makeup mirror",
              "Hair dryer",
              "Coat",
              "Slippers",
            ]
          },
          {
            title: "Furniture and decoration", items: [
              "In-room safe (charges apply)",
              "Desk, for writing/working, power outlet",
              "Iron and ironing board",
            ]
          },
          {
            title: "Food and drinks", items: [
              "Complimentary bottled water",
              "Coffee and tea service",
              "Instant hot water",
              "Minibar",
            ]
          },
          {
            title: "Kitchen features", items: [
              "Mini refrigerator",
              "Plates and glasses",
            ]
          },
          {
            title: "Internet and telephones", items: [
              "Telephones: 1",
              "Cordless phone, Voicemail, and Speakerphone",
              "Wireless Internet access (charges apply)",
            ]
          },
          {
            title: "Entertainment", items: [
              "Premium movie channels",
              "Cable/satellite",
              "CNN and ESPN",
              "Radio",
            ]
          },
          {
            title: "Accessibility", items: [
              "This type of room does not offer rooms with facilities for people with mobility problems",
              "This type of room does not offer rooms with facilities for people with mobility problems with wheelchair-accessible showers",
              "This type of room does not offer rooms with facilities for people with hearing problems",
            ]
          },
        ],
        gallery: [AllImages.casaNizucRoomTwoDoubles],
      },
      {
        id: "1-bedroom-junior-suite",
        title: "1 Bedroom Junior Suite",
        subtitle: "1 King · Sofa Bed · Partial Ocean View · Balcony",
        image: AllImages.casaNizucRoomSuiteLiving,
        description: "1 King bed, sofa bed, partial ocean view, balcony. 1 King bed, sofa bed, mini-fridge, 57m²/613ft², separate living room, wireless internet access (charges apply), coffee and tea service.",
        stats: [
          { label: "Room Size", value: "613 sq. ft. / 57 sq. m." },
          { label: "Bedding", value: "1 King, Sofa bed" },
          { label: "View", value: "Partial Ocean View" },
          { label: "Guests", value: "4 Guests (max.)" },
        ],
        groups: [
          {
            title: "Beds and bedding", items: [
              "Maximum capacity: 4",
              "1 King",
              "Sofa bed",
              "Extra beds are allowed: 1",
              "Cots are allowed: 1",
              "Maximum number of cots/extra beds allowed: 1",
              "Quilt",
            ]
          },
          {
            title: "Room features", items: [
              "57m²/613ft²",
              "With air conditioning",
              "Individual climate control",
              "Non-smoking room",
              "Outdoor spaces: balcony (2)",
              "Separate living room",
            ]
          },
          {
            title: "Bathroom features", items: [
              "Shower",
              "Lighted makeup mirror",
              "Hair dryer",
              "Coat",
              "Slippers",
            ]
          },
          {
            title: "Furniture and decoration", items: [
              "Couch",
              "In-room safe (charges apply)",
              "Desk, for writing/working, power outlet",
              "Iron and ironing board",
            ]
          },
          {
            title: "Food and drinks", items: [
              "Complimentary bottled water",
              "Coffee and tea service",
              "Instant hot water",
              "Minibar",
            ]
          },
          {
            title: "Kitchen features", items: [
              "Mini refrigerator",
              "Plates and glasses",
            ]
          },
          {
            title: "Internet and telephones", items: [
              "Telephones: 2",
              "Cordless phone, Voicemail, and Speakerphone",
              "Wireless Internet access (charges apply)",
            ]
          },
          {
            title: "Entertainment", items: [
              "Premium movie channels",
              "Cable/satellite",
              "CNN and ESPN",
              "Radio",
            ]
          },
          {
            title: "Accessibility", items: [
              "This type of room does not offer rooms with facilities for people with mobility problems",
              "This type of room does not offer rooms with facilities for people with mobility problems with wheelchair-accessible showers",
              "This type of room does not offer rooms with facilities for people with hearing problems",
            ]
          },
        ],
        gallery: [AllImages.casaNizucRoomSuiteLiving, AllImages.casaNizucRoomKingBalcony],
      },
      {
        id: "master-1-bedroom-suite-ocean-view",
        title: "Master 1 Bedroom Suite",
        subtitle: "1 King · Sofa Bed · Ocean View · Corner Room",
        image: AllImages.casaNizucRoomSuiteLiving,
        description: "1 bedroom suite, 1 King bed, sofa bed, ocean view, corner room. 1 King bed, sofa bed, mini-fridge, 72m²/775ft², separate living room, complimentary wireless internet access, coffee and tea service.",
        stats: [
          { label: "Room Size", value: "775 sq. ft. / 72 sq. m." },
          { label: "Bedding", value: "1 King, Sofa bed" },
          { label: "View", value: "Ocean View" },
          { label: "Guests", value: "4 Guests (max.)" },
        ],
        groups: [
          {
            title: "Beds and bedding", items: [
              "Maximum capacity: 4",
              "1 King",
              "Sofa bed",
              "Extra beds are allowed: 1",
              "Cots are allowed: 1",
              "Maximum number of cots/extra beds allowed: 1",
              "Quilt",
            ]
          },
          {
            title: "Room features", items: [
              "72m²/775ft²",
              "With air conditioning",
              "Individual climate control",
              "Separate living room",
            ]
          },
          {
            title: "Bathroom features", items: [
              "Shower",
              "Lighted makeup mirror",
              "Hair dryer",
              "Coat",
              "Slippers",
            ]
          },
          {
            title: "Furniture and decoration", items: [
              "Couch",
              "In-room safe (charges apply)",
              "Desk, for writing/working, power outlet",
              "Iron and ironing board",
            ]
          },
          {
            title: "Food and drinks", items: [
              "Complimentary bottled water",
              "Coffee and tea service",
              "Instant hot water",
              "Minibar",
            ]
          },
          {
            title: "Kitchen features", items: [
              "Mini refrigerator",
              "Plates and glasses",
            ]
          },
          {
            title: "Internet and telephones", items: [
              "Telephones: 2",
              "Cordless phone, Voicemail, and Speakerphone",
              "Complimentary wireless Internet access",
            ]
          },
          {
            title: "Entertainment", items: [
              "Premium movie channels",
              "Cable/satellite",
              "CNN and ESPN",
              "Radio",
            ]
          },
          {
            title: "Accessibility", items: [
              "This type of room does not offer rooms with facilities for people with mobility problems",
              "This type of room offers rooms with facilities for people with mobility problems, including wheelchair-accessible showers.",
              "This type of room does not offer rooms with facilities for people with hearing problems",
            ]
          },
        ],
        gallery: [AllImages.casaNizucRoomSuiteLiving, AllImages.casaNizucRoomKingBath],
      },
      {
        id: "master-1-bedroom-suite-oceanfront",
        title: "Master 1 Bedroom Suite",
        subtitle: "1 King · Sofa Bed · Oceanfront · Corner Room · Balcony",
        image: AllImages.casaNizucRoomSuiteLiving,
        description: "1 bedroom suite, 1 king bed, sofa bed, oceanfront, corner room. 1 King, sofa bed, Mini fridge, 73m²/785ft², Separate living room, Complimentary wireless internet access, Coffee and tea service.",
        stats: [
          { label: "Room Size", value: "785 sq. ft. / 73 sq. m." },
          { label: "Bedding", value: "1 King, Sofa bed" },
          { label: "View", value: "Oceanfront" },
          { label: "Guests", value: "4 Guests (max.)" },
        ],
        groups: [
          {
            title: "Beds and bedding", items: [
              "Maximum capacity: 4",
              "1 King",
              "Sofa bed",
              "Extra beds are allowed: 1",
              "Cots are allowed: 1",
              "Maximum number of cots/extra beds allowed: 1",
              "Quilt",
            ]
          },
          {
            title: "Room features", items: [
              "73m²/785ft²",
              "With air conditioning",
              "Individual climate control",
              "Non-smoking room",
              "Outdoor spaces: balcony (2)",
              "Separate living room",
            ]
          },
          {
            title: "Bathroom features", items: [
              "Shower",
              "Lighted makeup mirror",
              "Hair dryer",
              "Coat",
              "Slippers",
            ]
          },
          {
            title: "Furniture and decoration", items: [
              "Couch",
              "In-room safe (charges apply)",
              "Desk, for writing/working, power outlet",
              "Iron and ironing board",
            ]
          },
          {
            title: "Food and drinks", items: [
              "Complimentary bottled water",
              "Coffee and tea service",
              "Instant hot water",
              "Minibar",
            ]
          },
          {
            title: "Kitchen features", items: [
              "Mini refrigerator",
              "Plates and glasses",
            ]
          },
          {
            title: "Internet and telephones", items: [
              "Telephones: 2",
              "Cordless phone, Voicemail, and Speakerphone",
              "Complimentary wireless Internet access",
            ]
          },
          {
            title: "Entertainment", items: [
              "Premium movie channels",
              "Cable/satellite",
              "CNN and ESPN",
              "Radio",
            ]
          },
          {
            title: "Accessibility", items: [
              "This type of room does not offer rooms with facilities for people with mobility problems",
              "This type of room offers rooms with facilities for people with mobility problems, including wheelchair-accessible showers.",
              "This type of room offers rooms with facilities for people with hearing problems, including devices with alarms and visual notifications for the door and telephone.",
            ]
          },
        ],
        gallery: [AllImages.casaNizucRoomSuiteLiving, AllImages.casaNizucRoomKingBalcony],
      },
      {
        id: "nizuc-2-bedroom-signature-suite",
        title: "Nizuc 2 Bedroom Signature Suite",
        subtitle: "Bedroom 1: 1 King · Bedroom 2: 2 Double · Sofa Bed · Ocean View",
        image: AllImages.casaNizucRoomSuiteLiving,
        description: "Signature Suite with 2 bedrooms, ocean view, balcony. Bedroom 1: 1 King, Bedroom 2: 2 Double, sofa bed, Bathrooms: 2, Mini-fridge, 93m²/1001ft², Separate living room, Complimentary wireless internet access, Coffee and tea service.",
        stats: [
          { label: "Room Size", value: "1,001 sq. ft. / 93 sq. m." },
          { label: "Bedroom 1", value: "1 King" },
          { label: "Bedroom 2", value: "2 Double" },
          { label: "Guests", value: "6 Guests (max.)" },
        ],
        groups: [
          {
            title: "Beds and bedding", items: [
              "Maximum capacity: 6",
              "Bedroom 1: 1 King",
              "Bedroom 2: 2 Double",
              "Sofa bed",
              "Extra beds are allowed: 1",
              "Cots are allowed: 1",
              "Maximum number of cots/extra beds allowed: 1",
              "Quilt",
            ]
          },
          {
            title: "Room features", items: [
              "93m²/1001ft²",
              "With air conditioning",
              "Individual climate control",
              "Non-smoking room",
              "Outdoor spaces: balcony (3)",
              "Separate living room",
            ]
          },
          {
            title: "Bathroom features", items: [
              "Bathrooms: 2",
              "Shower",
              "Lighted makeup mirror",
              "Hair dryer",
              "Coat",
              "Slippers",
            ]
          },
          {
            title: "Furniture and decoration", items: [
              "Couch",
              "In-room safe (charges apply)",
              "Desk, for writing/working, power outlet",
              "Iron and ironing board",
            ]
          },
          {
            title: "Food and drinks", items: [
              "Complimentary bottled water",
              "Coffee and tea service",
              "Instant hot water",
              "Minibar",
            ]
          },
          {
            title: "Kitchen features", items: [
              "Mini refrigerator",
              "Plates and glasses",
            ]
          },
          {
            title: "Internet and telephones", items: [
              "Telephones: 3",
              "Cordless phone, Voicemail, and Speakerphone",
              "Complimentary wireless Internet access",
            ]
          },
          {
            title: "Entertainment", items: [
              "Premium movie channels",
              "Cable/satellite",
              "CNN and ESPN",
              "Radio",
            ]
          },
          {
            title: "Accessibility", items: [
              "This type of room does not offer rooms with facilities for people with mobility problems",
              "This type of room does not offer rooms with facilities for people with mobility problems with wheelchair-accessible showers",
              "This type of room does not offer rooms with facilities for people with hearing problems",
            ]
          },
        ],
        gallery: [AllImages.casaNizucRoomSuiteLiving, AllImages.casaNizucRoomTwoDoubles, AllImages.casaNizucRoomKingBalcony],
      },
    ],
  },
  dining: {
    title: "Dining",
    description: "Enjoy food and drinks offered at Casa Nizuc.",
    images: [AllImages.casaNizucDiningMayim, AllImages.casaNizucDiningAshan, AllImages.casaNizucDiningZait, AllImages.casaNizucDiningZaitTerrace, AllImages.casaNizucDiningNoam, AllImages.casaNizucDiningOfek, AllImages.casaNizucDiningMussa, AllImages.casaNizucDiningGrandBallroom, AllImages.guettawayDiningDessertBuffet,
    AllImages.guettawayDiningStrawberryTartlets,
    AllImages.guettawayDiningMousseTarts,
    AllImages.guettawayDiningRoastedLambRack,
    AllImages.guettawayDiningShawarmaRotisserie,
    AllImages.guettawayDiningPizzaCutter,],
    // From the hotel's Marriott dining page (marriott.com/en-us/hotels/cunan-casa-nizuc-a-tribute-portfolio-resort/dining/): names, text, meal periods, dress code and photos as published.
    // Barawa (swim-up bar) and La Boya (poolside snack bar) are on that page too, without a photo, so they are not listed here.
    items: [
      {
        id: "mayim",
        title: "Mayim",
        subtitle: "",
        image: AllImages.casaNizucDiningMayim,
        description: "It is about reconnecting with the origin. Have breakfast, lunch, and dinner with the silent jungle. It is not an ordinary buffet, it is an altar of wood and water, an immersive experience where the cuisine is designed to put your soul at peace.",
        stats: [{ label: "Serves", value: "Breakfast, lunch and dinner" }, { label: "Dress Code", value: "Casual" }],
        gallery: [AllImages.casaNizucDiningMayim],
      },
      {
        id: "ashan",
        title: "Âshân",
        subtitle: "",
        image: AllImages.casaNizucDiningAshan,
        description: "The Temple of Taste. Experience premium steaks with perfect texture and smoky flavors in a natural Eden. Nature and cuisine intertwine here for an unforgettable sensory journey. Enjoy to the last bite!",
        stats: [{ label: "Serves", value: "Lunch and dinner" }, { label: "Dress Code", value: "Formal" }],
        gallery: [AllImages.casaNizucDiningAshan],
      },
      {
        id: "zait",
        title: "Zait",
        subtitle: "",
        image: AllImages.casaNizucDiningZait,
        description: "Zait is an ode to the essential, a Mediterranean house that has left the earth behind, and now inhabits the sky. Every meal is a journey between the terrestrial and the celestial. A simple, tasteful banquet, served where Mediterranean meets divine.",
        stats: [{ label: "Serves", value: "Lunch and dinner" }, { label: "Dress Code", value: "Formal" }],
        gallery: [AllImages.casaNizucDiningZait, AllImages.casaNizucDiningZaitTerrace],
      },
      {
        id: "noam",
        title: "Noam",
        subtitle: "",
        image: AllImages.casaNizucDiningNoam,
        description: "Every coffee is an artisanal ritual. Awaken your senses with aromas of roasted beans. In this sensory depth, you will find a unique sweetness and delicacy among textures and temperatures.",
        stats: [{ label: "Serves", value: "Breakfast, lunch and dinner" }, { label: "Dress Code", value: "Casual" }],
        gallery: [AllImages.casaNizucDiningNoam],
      },
      {
        id: "ofek",
        title: "Ofek",
        subtitle: "",
        image: AllImages.casaNizucDiningOfek,
        description: "Ofek is a space that inspires the art of soaring above the clouds, serving cocktails meticulously crafted with tropical fruits, fresh botanicals, and light-bodied spirits.",
        stats: [{ label: "Dress Code", value: "Casual" }],
        gallery: [AllImages.casaNizucDiningOfek],
      },
      {
        id: "mussa",
        title: "Mussa",
        subtitle: "",
        image: AllImages.casaNizucDiningMussa,
        description: "Where time stands still. Discover the peace of your intended destination. Our cocktails tell unique stories, harmonizing with the clouds, the ocean, and the mangroves. The ideal backdrop for beginning your next memorable journey.",
        stats: [{ label: "Dress Code", value: "Casual" }],
        gallery: [AllImages.casaNizucDiningMussa],
      },
      // Added 2026-10-22 from the client's message (text and photo as sent).
      {
        id: "grand-ballroom-yom-tov-dining",
        title: "Grand Ballroom – Yom Tov Dining",
        subtitle: "",
        image: AllImages.casaNizucDiningGrandBallroom,
        description: "Celebrate Yom Tov with elegant holiday dinners in our beautiful Grand Ballroom, featuring exceptional gourmet cuisine, attentive service, and a warm, festive atmosphere for family and friends.",
        gallery: [AllImages.casaNizucDiningGrandBallroom],
      },
    ],
  },
  pools: {
    title: "Pools & Beach",
    description: "El Eden and Ofek pools, a whirlpool, a water slide and cabanas.",
    images: [AllImages.casaNizucGallery31, AllImages.casaNizucPool, AllImages.casaNizucGallery30, AllImages.casaNizucGallery28, AllImages.casaNizucGallery29, AllImages.casaNizucGallery19, AllImages.casaNizucDiningOfek],
    // From the hotel's Marriott experiences page (marriott.com/en-us/hotels/cunan-casa-nizuc-a-tribute-portfolio-resort/experiences/).
    // That page shows "Photo Coming Soon" for every pool, so the photos are the pool photos of the hotel's Marriott photos page (marriott.com/.../photos/), not one pool photo.
    items: [
      {
        id: "el-eden",
        title: "El Eden",
        subtitle: "Outdoor, on property · Children's pool",
        image: AllImages.casaNizucGallery31,
        description: "Outdoor pool on the property, with a children's pool, a swim-up bar and a lifeguard on duty. The pool is heated and towels are provided.",
        stats: [{ label: "Type", value: "Outdoor, on property" }, { label: "Location", value: "Outdoor. On property" }],
        groups: [{ title: "Features", items: ["Children's pool", "Lifeguard on duty", "Pool heated", "Swim-up bar", "Towels provided"] }],
        gallery: [AllImages.casaNizucGallery31, AllImages.casaNizucPool, AllImages.casaNizucGallery30, AllImages.casaNizucGallery19],
      },
      {
        id: "ofek-pool",
        title: "Ofek Pool",
        subtitle: "Outdoor, on property · Adult-only infinity pool",
        image: AllImages.casaNizucGallery28,
        description: "Adult-only infinity pool on the property, heated, with a lifeguard on duty and towels provided.",
        stats: [{ label: "Type", value: "Outdoor, on property" }, { label: "Location", value: "Outdoor. On property" }],
        groups: [{ title: "Features", items: ["Adult-only pool", "Infinity pool", "Pool heated", "Lifeguard on duty", "Towels provided"] }],
        gallery: [AllImages.casaNizucGallery28, AllImages.casaNizucGallery29, AllImages.casaNizucDiningOfek],
      },
      {
        id: "cabanas",
        title: "Cabanas",
        subtitle: "Cabanas & Palapas · Pool",
        image: AllImages.casaNizucGallery30,
        description: "Rediscover peace in our cozy Cabanas & Palapas, designed for ultimate relaxation. Whether it’s a weekend getaway or a quiet retreat, paradise is now within reach.",
        stats: [{ label: "Type", value: "Cabanas & Palapas" }, { label: "Location", value: "Pool" }, { label: "Fee", value: "$100.00" }],
        gallery: [AllImages.casaNizucGallery30],
      },
      {
        id: "whirlpool",
        title: "Whirlpool",
        subtitle: "Eden Pool",
        image: AllImages.casaNizucGallery31,
        description: "A whirlpool at the Eden pool, included with your stay.",
        stats: [{ label: "Type", value: "Whirlpool" }, { label: "Location", value: "Eden Pool" }],
        gallery: [AllImages.casaNizucGallery31],
      },
      {
        id: "water-slide",
        title: "Water Slide",
        subtitle: "Pool",
        image: AllImages.casaNizucGallery31,
        description: "A water slide, included with your stay.",
        stats: [{ label: "Type", value: "Water slide" }],
        gallery: [AllImages.casaNizucGallery31],
      },
    ],
  },
  wellness: {
    title: "Wellness & Fitness",
    description: "The Wellness Center, the Fitness Studio and the Dribblers family club.",
    images: [AllImages.casaNizucGallery27],
    // From the hotel's Marriott experiences page. It has no photos for these ("Photo Coming Soon"), so the photos are the fitness center, kids club and tennis photos of its Marriott photos page.
    activities: [
      {
        id: "wellness-center",
        title: "Wellness Center",
        description: "A sanctuary where the art of living meets deep well-being. Sensory architecture and nature converge for unprecedented relaxation. Pause, reconnect, and find peace in organic design. Here, nature and art prove that living fully is the ultimate luxury. Appointment required.",
      },
      {
        id: "fitness-studio",
        title: "Fitness Studio",
        description: "This is your wellness sanctuary, designed to ignite inspiration throughout your routine. A fully equipped gym with cardiovascular equipment, elliptical machines, exercise bikes, free weights and machine based training, rowing machines, strength equipment, treadmills and weight machines. Fresh water and clean hand towels. Complimentary.",
      },
      {
        id: "dribblers",
        title: "Dribblers",
        description: "Dribblers, our family entertainment club, welcomes kids, teens and adults.",
      },
    ],
  },
  // Spa & Wellness is taken out for now (client 2026-10-29). Uncomment this block to bring the spa block, card, nav link and detail page back.
  // From the Spa tab of the hotel's Marriott overview page ("Wellness Center"); its photo there is Marriott's "Photo Coming Soon" placeholder.
  // The client's message of 2026-10-22 ("Spa & Wellness", for Casa Nizuc), word for word. The photo is still Marriott's placeholder.
  // spa: {
  //   item: {
  //     id: "spa",
  //     title: "Spa & Wellness",
  //     subtitle: "Dedicated spa cabins",
  //     image: AllImages.casaNizucSpaWellnessCenter,
  //     description: "While the full-service spa is still under development, dedicated spa cabins are available, offering a variety of relaxing massage treatments for a rejuvenating experience.",
  //     gallery: [AllImages.casaNizucSpaWellnessCenter],
  //   },
  //   // Own block on the hotel page (like Pools and Wellness).
  //   section: {
  //     title: "Spa & Wellness",
  //     description: "While the full-service spa is still under development, dedicated spa cabins are available, offering a variety of relaxing massage treatments for a rejuvenating experience.",
  //     images: [AllImages.casaNizucSpaWellnessCenter],
  //   },
  // },
  gallery: {
    title: "Resort Gallery",
    description: "A dedicated gallery for Casa Nizuc.",
    // From the hotel's Marriott photos page (marriott.com/en-us/hotels/cunan-casa-nizuc-a-tribute-portfolio-resort/photos/), in its order: hotel, rooms, suites, dining, recreation, kids club,
    // plus the synagogue, banquet halls and wedding set-up from Events and Meetings (the boardrooms and breakout lounges are left out).
    images: [
      AllImages.casaNizucTower,
      AllImages.casaNizucGallery00,
      // The tower and the entrance, new photos from the client (2026-10-27).
      AllImages.casaNizucTowerNew,
      AllImages.casaNizucEntrance,
      AllImages.casaNizucGallery01,
      AllImages.casaNizucGallery02,
      AllImages.casaNizucGallery03,
      AllImages.casaNizucGallery04,
      AllImages.casaNizucGallery05,
      AllImages.casaNizucGallery06,
      AllImages.casaNizucRoomTwoDoubles,
      AllImages.casaNizucGallery08,
      AllImages.casaNizucGallery09,
      AllImages.casaNizucRoomSuiteLiving,
      AllImages.casaNizucRoomKingBath,
      AllImages.casaNizucRoomKingBalcony,
      AllImages.casaNizucGallery13,
      AllImages.casaNizucGallery14,
      AllImages.casaNizucDiningNoam,
      AllImages.casaNizucGallery16,
      AllImages.casaNizucDiningZaitTerrace,
      AllImages.casaNizucGallery18,
      AllImages.casaNizucGallery19,
      AllImages.casaNizucDiningZait,
      AllImages.casaNizucDiningOfek,
      AllImages.casaNizucDiningMayim,
      AllImages.casaNizucDiningAshan,
      AllImages.casaNizucDiningMussa,
      AllImages.casaNizucGallery25,
      AllImages.casaNizucGallery26,
      AllImages.casaNizucGallery27,
      AllImages.casaNizucGallery28,
      AllImages.casaNizucGallery29,
      AllImages.casaNizucGallery30,
      AllImages.casaNizucGallery31,
      AllImages.casaNizucPool,
      AllImages.casaNizucGallery32,
      AllImages.casaNizucGallery33,
      AllImages.casaNizucGallery38,
      AllImages.casaNizucGallery39,
      AllImages.casaNizucGallery40,
      AllImages.casaNizucGallery42,
      AllImages.casaNizucGallery43,
    ],
  },
};
