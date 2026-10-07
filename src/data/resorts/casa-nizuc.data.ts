import { AllImages } from "../../../public/images/AllImages";
import type { ResortData } from "@/components/resorts/resorts.types";
import { rotate } from "./helpers";

/** Casa Nizuc — content from the client's HTML design (diamond-club-main-design). */
export const CASA_NIZUC_DATA: ResortData = {
  programId: "blue",
  programTitle: "Diamond Blue by DCV",
  resortId: "casa-nizuc",
  resortName: "Casa Nizuc",
  kicker: "Year-Round Resort",
  tagline: "Year-round luxury kosher hospitality in Cancún.",
  heroImage: AllImages.series.casa[0],
  overviewLabel: "Overview",
  showSubNav: true,
  overview: {
    title: "Discover Casa Nizuc",
    description: "Explore rooms and suites, dining, pools and beach, wellness and fitness, and a gallery dedicated to Casa Nizuc.",
    cards: [
      {
        id: "rooms",
        title: "Rooms & Suits",
        description: "Classic, Deluxe and Nizuc Suite categories.",
        image: AllImages.series.casaRooms[0],
        target: { type: "section", section: "rooms" },
      },
      {
        id: "dining",
        title: "Dining",
        description: "Mayim, Âshân, Zait and Noam.",
        image: AllImages.series.casaDining[0],
        target: { type: "section", section: "dining" },
      },
      {
        id: "pools",
        title: "Pools & Beach",
        description: "Resort pool and beach experiences.",
        image: AllImages.series.casaRoomDetail[0],
        target: { type: "section", section: "pools" },
      },
      {
        id: "wellness",
        title: "Wellness & Fitness",
        description: "Spa, fitness and restorative experiences.",
        image: AllImages.series.casa[1],
        target: { type: "section", section: "wellness" },
      },
      {
        id: "gallery",
        title: "Resort Gallery",
        navLabel: "Gallery",
        description: "A Casa Nizuc-only gallery.",
        image: AllImages.series.casaRoomGallery[0],
        target: { type: "section", section: "gallery" },
      },
    ],
  },
  rooms: {
    title: "Rooms & Suits",
    description: "",
    linkToDetails: true,
    items: [
      {
        id: "classic",
        title: "Classic",
        subtitle: "1 Queen Bed",
        image: AllImages.series.casaRooms[0],
        description: "A serene haven featuring refined contemporary décor, private terrace, and lush garden outlooks.",
        stats: [
          { label: "Bedding", value: "1 Queen Bed" },
          { label: "Hotel", value: "Casa Nizuc" },
        ],
        gallery: rotate(AllImages.series.casaRoomGallery, 0),
      },
      {
        id: "deluxe-1-queen",
        title: "Deluxe",
        subtitle: "1 Queen Bed · Partial Ocean View",
        image: AllImages.series.casaRooms[1],
        description: "Gracefully appointed with a plush queen bed, artisanal furnishings, and a comfortable reading nook.",
        stats: [
          { label: "Bedding", value: "1 Queen Bed" },
          { label: "View", value: "Partial Ocean View" },
          { label: "Hotel", value: "Casa Nizuc" },
        ],
        gallery: rotate(AllImages.series.casaRoomGallery, 1),
      },
      {
        id: "deluxe-1-king",
        title: "Deluxe King",
        subtitle: "1 King Bed · Ocean View",
        image: AllImages.series.casaRooms[2],
        description: "Generous layout with a king-sized bed, floor-to-ceiling sliding glass doors, and glimpses of the Caribbean Sea.",
        stats: [
          { label: "Bedding", value: "1 King Bed" },
          { label: "View", value: "Ocean View" },
          { label: "Hotel", value: "Casa Nizuc" },
        ],
        gallery: rotate(AllImages.series.casaRoomGallery, 2),
      },
      {
        id: "nizuc-suite",
        title: "Nizuc Suite",
        subtitle: "1001 sq. ft. / 93 sq. m. · Ocean View",
        image: AllImages.series.casaRooms[3],
        description: "The largest of our suites, with a king bed, two double beds and a sofa bed, and an ocean view across the Aldea Nizuc.",
        stats: [
          { label: "Room Size", value: "1001 sq. ft." },
          { label: "Metric", value: "93 sq. m." },
          { label: "View", value: "Ocean View" },
          { label: "Hotel", value: "Casa Nizuc" },
        ],
        gallery: AllImages.series.casaRoomGallery,
      },
    ],
  },
  dining: {
    title: "Dining",
    description: "Mayim, Âshân, Zait and Noam.",
    images: AllImages.series.casaDining,
    items: [
      {
        id: "mayim",
        title: "Mayim",
        subtitle: "Signature Kosher Mexican & Seafood · Dinner",
        image: AllImages.series.casaDining[0],
        description: "Casa Nizuc's premier dining destination, showcasing freshly caught Caribbean seafood, inventive Mexican coastal classics, and elevated Glatt Kosher gastronomy.",
        stats: [
          { label: "Cuisine", value: "Signature Kosher Mexican & Seafood" },
          { label: "Meal Period", value: "Dinner" },
          { label: "Hours", value: "Dinner: 6:00 PM – 10:30 PM" },
          { label: "Dress Code", value: "Resort Elegant" },
        ],
        groups: [
          { title: "Schedule", items: ["Monday – Sunday: 6:00 PM – 10:30 PM"] },
          {
            title: "Good to know",
            items: [
              "Reservations: Recommended through Concierge",
              "Kosher supervision: Glatt Kosher, Cholov Yisroel, Bishul Yisroel under strict rabbinical supervision",
            ],
          },
          {
            title: "Highlights",
            items: [
              "Catch of the day ceviche bar",
              "Handcrafted artisanal mocktails and kosher wine cellar",
              "Oceanfront terrace seating with candlelit tables",
              "Cholov Yisroel dairy-free gourmet pastry selections",
            ],
          },
        ],
        gallery: rotate(AllImages.series.casaDining, 0),
      },
      {
        id: "ashan",
        title: "Ashan",
        subtitle: "Wood-Fired Grill & Steakhouse · Lunch & Dinner",
        image: AllImages.series.casaDining[1],
        description: "Prime cuts of Glatt Kosher beef, charred vegetables, and rustic open-flame cooking infused with aromatic Mexican hardwoods.",
        stats: [
          { label: "Cuisine", value: "Wood-Fired Grill & Steakhouse" },
          { label: "Meal Period", value: "Lunch & Dinner" },
          { label: "Hours", value: "Lunch: 12:30 PM – 3:30 PM | Dinner: 6:30 PM – 11:00 PM" },
          { label: "Dress Code", value: "Smart Casual" },
        ],
        groups: [
          { title: "Schedule", items: ["Lunch: 12:30 PM – 3:30 PM", "Dinner: 6:30 PM – 11:00 PM"] },
          {
            title: "Good to know",
            items: [
              "Reservations: Recommended for Dinner",
              "Kosher supervision: Glatt Kosher under strict rabbinical supervision",
            ],
          },
          {
            title: "Highlights",
            items: [
              "Dry-aged Tomahawk and Ribeye cuts",
              "Smoked brisket and artisanal kosher sausages",
              "Open fire kitchen experience",
              "Outdoor garden patio dining",
            ],
          },
        ],
        gallery: rotate(AllImages.series.casaDining, 1),
      },
      {
        id: "zait",
        title: "Zait",
        subtitle: "Mediterranean & Levant Bites · Lunch & Afternoon",
        image: AllImages.series.casaDining[2],
        description: "Vibrant Mediterranean flavors featuring freshly baked flatbreads, vibrant mezze, aromatic spices, and sun-drenched coastal salads.",
        stats: [
          { label: "Cuisine", value: "Mediterranean & Levant Bites" },
          { label: "Meal Period", value: "Lunch & Afternoon" },
          { label: "Hours", value: "Lunch & Afternoon: 11:30 AM – 5:00 PM" },
          { label: "Dress Code", value: "Casual Resort Wear" },
        ],
        groups: [
          { title: "Schedule", items: ["Monday – Sunday: 11:30 AM – 5:00 PM"] },
          {
            title: "Good to know",
            items: [
              "Reservations: Walk-ins Welcome",
              "Kosher supervision: Glatt Kosher under strict rabbinical supervision",
            ],
          },
          {
            title: "Highlights",
            items: [
              "Freshly whipped dips and warm flatbreads",
              "Grilled skewers and Mediterranean ocean bass",
              "Refreshing citrus infusions and juices",
              "Shaded poolside pergola seating",
            ],
          },
        ],
        gallery: rotate(AllImages.series.casaDining, 2),
      },
      {
        id: "noam",
        title: "Noam",
        subtitle: "Artisanal Bakery & Café · Daily Breakfast & Afternoon",
        image: AllImages.series.casaDining[3],
        description: "A tranquil morning sanctuary serving freshly brewed single-origin Mexican coffees, freshly pressed juices, and handcrafted kosher Passover delicacies.",
        stats: [
          { label: "Cuisine", value: "Artisanal Bakery & Café" },
          { label: "Meal Period", value: "Daily Breakfast & Afternoon" },
          { label: "Hours", value: "Daily: 7:00 AM – 4:00 PM" },
          { label: "Dress Code", value: "Casual" },
        ],
        groups: [
          { title: "Schedule", items: ["Monday – Sunday: 7:00 AM – 4:00 PM"] },
          {
            title: "Good to know",
            items: [
              "Reservations: No reservation required",
              "Kosher supervision: Glatt Kosher, Mehadrin supervision",
            ],
          },
          {
            title: "Highlights",
            items: [
              "Specialty espresso and pour-over bar",
              "Fresh tropical juice bar and fruit bowls",
              "Cholov Yisroel Passover treats and pastries",
              "Outdoor morning garden terrace",
            ],
          },
        ],
        gallery: rotate(AllImages.series.casaDining, 3),
      },
    ],
  },
  pools: {
    title: "Pools & Beach",
    description: "Resort pool and beach experiences.",
    images: AllImages.series.casaRoomDetail,
    items: [
      {
        id: "ocean-front-infinity-pool",
        title: "Ocean Front Infinity Pool",
        subtitle: "Beach · Beach",
        image: AllImages.series.casaRoomDetail[0],
        description: "A stunning freshwater infinity pool that appears to merge seamlessly with the turquoise waters of the Caribbean Sea, flanked by sun loungers and full butler service.",
        stats: [
          { label: "Type", value: "Beach" },
          { label: "Hours", value: "Daily: 8:00 AM – 7:00 PM" },
          { label: "Location", value: "Beach" },
        ],
        groups: [
          { title: "Schedule", items: ["Daily: 8:00 AM – 7:00 PM"] },
          {
            title: "Amenities",
            items: [
              "Endless horizon Caribbean views",
              "Dedicated poolside beverage service",
              "Complimentary chilled towels and sun care",
              "Adjacent shallow wading area",
            ],
          },
        ],
        gallery: rotate(AllImages.series.casaRoomDetail, 0),
      },
      {
        id: "diamond-exclusive-beaches",
        title: "Diamond Exclusive Beaches",
        subtitle: "Beach · Punta Nizuc Shoreline",
        image: AllImages.series.casaRoomDetail[1],
        description: "Pristine white-sand beaches exclusively reserved for Diamond Club guests, featuring calm swimming waters, plush beach beds, and shade umbrellas.",
        stats: [
          { label: "Type", value: "Beach" },
          { label: "Hours", value: "Daily: Sunrise to Sunset" },
          { label: "Location", value: "Punta Nizuc Shoreline" },
        ],
        groups: [
          { title: "Schedule", items: ["Daily: Sunrise to Sunset"] },
          {
            title: "Amenities",
            items: [
              "Soft white sand and calm coral reef waters",
              "Full beachside food & refreshment service",
              "Water sports center access",
              "Private cabana reservations available",
            ],
          },
        ],
        gallery: rotate(AllImages.series.casaRoomDetail, 1),
      },
      {
        id: "pool-bar",
        title: "Pool Bar",
        subtitle: "Pool · Main Infinity Pool Lower Deck",
        image: AllImages.series.casaRoomDetail[2],
        description: "Sip refreshing kosher tropical mocktails, artisanal chilled drinks, and light midday snacks without ever having to leave the water.",
        stats: [
          { label: "Type", value: "Pool" },
          { label: "Hours", value: "Daily: 10:00 AM – 6:30 PM" },
          { label: "Location", value: "Main Infinity Pool Lower Deck" },
        ],
        groups: [
          { title: "Schedule", items: ["Daily: 10:00 AM – 6:30 PM"] },
          {
            title: "Amenities",
            items: [
              "Swim-up stools in shallow water",
              "Shaded pergola lounge",
              "Handcrafted signature kosher beverages",
              "Fresh fruit skewers and chilled coconut water",
            ],
          },
        ],
        gallery: rotate(AllImages.series.casaRoomDetail, 2),
      },
      {
        id: "private-cabanas",
        title: "Private Cabanas",
        subtitle: "Beach · Beachfront & Poolside Gardens",
        image: AllImages.series.casaRoomDetail[3],
        description: "Secluded luxury cabanas furnished with daybeds, ceiling fans, Wi-Fi, and a dedicated butler tending to your every holiday comfort.",
        stats: [
          { label: "Type", value: "Beach" },
          { label: "Hours", value: "Daily: 9:00 AM – 6:00 PM" },
          { label: "Location", value: "Beachfront & Poolside Gardens" },
        ],
        groups: [
          { title: "Schedule", items: ["Daily: 9:00 AM – 6:00 PM"] },
          {
            title: "Amenities",
            items: [
              "Dedicated private butler",
              "Stocked mini-fridge with chilled refreshments",
              "Plush king-size outdoor daybed",
              "Fresh fruit service throughout the afternoon",
            ],
          },
        ],
        gallery: rotate(AllImages.series.casaRoomDetail, 3),
      },
      {
        id: "beach-club",
        title: "Beach Club",
        subtitle: "Coastal Social Club · Aldea Nizuc beach",
        image: AllImages.series.casaRoomDetail[4],
        description: "The vibrant heart of daytime social life at Casa Nizuc, offering oceanfront cabanas, acoustic sessions, and sunset gatherings.",
        stats: [
          { label: "Type", value: "Coastal Social Club" },
          { label: "Hours", value: "Daily: 10:00 AM – 8:00 PM" },
          { label: "Location", value: "Aldea Nizuc beach" },
        ],
        groups: [
          { title: "Schedule", items: ["Daily: 10:00 AM – 8:00 PM"] },
          {
            title: "Amenities",
            items: [
              "Live afternoon acoustic sessions and DJ sets",
              "Plush double sunbeds and VIP cabanas",
              "Curated kosher coastal bites menu",
              "Stunning panoramic sunset viewpoints",
            ],
          },
        ],
        gallery: rotate(AllImages.series.casaRoomDetail, 4),
      },
      {
        id: "la-aldea",
        title: "La Aldea",
        subtitle: "Cultural & Eco Gathering Hub · Aldea Nizuc",
        image: AllImages.series.casaRoomDetail[5],
        description: "A cultural and outdoor gathering sanctuary immersed in the Mayan jungle, hosting workshops, traditional artisan demonstrations, and evening fireside storytelling.",
        stats: [
          { label: "Type", value: "Cultural & Eco Gathering Hub" },
          { label: "Hours", value: "Open Daily with Scheduled Events" },
          { label: "Location", value: "Aldea Nizuc" },
        ],
        groups: [
          { title: "Schedule", items: ["Daily: 9:00 AM – 10:00 PM"] },
          {
            title: "Amenities",
            items: [
              "Traditional Mayan botanical garden trails",
              "Evening fireside kumzits and storytelling",
              "Eco-crafts and family workshops",
              "Relaxed hammocks nestled in the canopy",
            ],
          },
        ],
        gallery: rotate(AllImages.series.casaRoomDetail, 5),
      },
    ],
  },
  wellness: {
    title: "Wellness & Fitness",
    description: "Spa, fitness and restorative experiences.",
    images: AllImages.series.casa,
    activities: [
      {
        id: "facials",
        title: "Facials",
        description: "Curated, prestige skincare and technology for a tailored facial.",
      },
      {
        id: "massages",
        title: "Massages",
        description: "Deeply relaxing from head to toe, for every kind of tension.",
      },
      {
        id: "steam-room",
        title: "Steam Room",
        description: "Detoxify, relax and rejuvenate as the soothing steam restores you.",
      },
      {
        id: "body-treatments",
        title: "Body treatments",
        description: "Body rituals that offer a journey of renewal through time-honoured techniques.",
      },
      {
        id: "salt-soul-yoga",
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
        id: "fitness-with-haya",
        title: "Fitness with Haya",
        description: "Daily fitness classes to challenge your body with the resort team.",
      },
      {
        id: "floating-core-workout",
        title: "Floating Core Workout",
        description: "A pool-based workout with stunning views over the ocean.",
      },
    ],
  },
  spa: {
    item: {
      id: "spa",
      title: "The Spa",
      subtitle: "An ancient sanctuary for body, mind, and spirit.",
      image: AllImages.series.casa[0],
      description: "Facials using prestige skincare and technology, massages from head to toe, a steam room and body rituals drawn from time-honoured techniques.",
      stats: [
        { label: "Location", value: "South Wing, Ground Level adjacent to Serenity Gardens" },
        { label: "Hours", value: "Daily: 9:00 AM – 8:00 PM" },
      ],
      groups: [
        {
          title: "Treatments & Facilities",
          items: [
            "Facials",
            "Body treatments",
            "Massages",
            "Spa rituals",
            "Steam room",
            "Wellness deck",
          ],
        },
        {
          title: "Treatments",
          items: [
            "Nizuc Thermal Journey — 90 min",
            "Mayan Cacao Wrap & Polish — 75 min",
            "Deep Ocean Sea Mineral Restorative — 90 min",
            "Bespoke Aromatherapy Massage — 60 / 90 min",
            "Hot River Stone Ritual — 75 min",
            "Radiance Cellular Facial — 60 min",
          ],
        },
        {
          title: "Amenities",
          items: [
            "Thermal hydrotherapy circuit with vitality pool",
            "Aromatic eucalyptus steam room",
            "Cedar dry sauna and ice fountain",
            "Outdoor jungle relaxation deck with herbal tea bar",
            "Private couples treatment suites with soaking tubs",
          ],
        },
      ],
      gallery: AllImages.series.casa,
    },
  },
  gallery: {
    title: "Resort Gallery",
    description: "A dedicated gallery for Casa Nizuc.",
    images: AllImages.series.casaRoomGallery,
  },
};
