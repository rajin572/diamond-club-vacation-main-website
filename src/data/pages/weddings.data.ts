import { WeddingImages } from "../../../public/images/weddings/weddingImages";
import { AllImages } from "../../../public/images/AllImages";
import type { StaticImageData } from "next/image";

export interface WeddingVenue {
  id: string;
  title: string;
  level: string;
  tagline: string;
  sqft: number | string;
  theater?: number;
  school?: number;
  uform?: number;
  cocktail: number;
  banquet: number;
  image: StaticImageData;
  secondaryImage?: StaticImageData;
  description: string;
  features: string[];
  idealFor: string[];
}

export interface DiningVenue {
  id: string;
  title: string;
  category: string;
  kosherStandard: string;
  location: string;
  image: StaticImageData;
  description: string;
  highlights: string[];
}

export interface RoomCategory {
  id: string;
  title: string;
  units: string;
  sqft: number | string;
  image: StaticImageData;
  secondaryImage?: StaticImageData;
  description: string;
  highlights: string[];
}

export interface CapacityRow {
  space: string;
  type: "meeting" | "venue";
  level: string;
  sqft: number | string;
  theater: number | string;
  school: number | string;
  uform: number | string;
  cocktail: number | string;
  banquet: number | string;
}

export interface ResortLevelInfo {
  level: string;
  name: string;
  highlights: string[];
  description: string;
}

export const WEDDINGS_PAGE_DATA = {
  hero: {
    kicker: "CASA NIZUC · TRIBUTE PORTFOLIO RESORT · CANCÚN",
    headline: "Weddings & Destination Events",
    subtext: "Extraordinary celebrations designed and produced by our expert team.",
    image: AllImages.casaNizucGallery40,
    brochureHref: "/documents/Casa-Nizuc-Wedding-Presentation.pdf",
    brochureFilename: "Casa-Nizuc-Wedding-Presentation.pdf",
  },

  vision: {
    eyebrow: "Where Your Forever Begins",
    heading: "Your Dreamiest I Do",
    lead: "The ultimate coastal canvas to immortalize your love story. Framed by the raw beauty of the ocean on one side and the golden glow of the lagoon on the other, our exquisite, design-driven event spaces elevate your special day into an unforgettable masterpiece.",
    secondaryLead: "From intimate, free-spirited ceremonies to grand, high-energy celebrations, we blend breathtaking backdrops with curated, boutique sophistication—ensuring your beginning is just as captivating as the journey ahead.",
    arrivalStory: "Your journey begins high above the coast on the 23rd floor, where our sky lobby welcomes guests with breathtaking, unobstructed ocean views. Designed with a seamless organic philosophy, the space flows naturally to immediately ease the mind, while lobby bar Mussa serves as the perfect venue to toast your arrival against a stunning marine backdrop.",
    badges: [
      {
        title: "Glatt Kosher & Chalav Yisroel",
        subtitle: "Glatt Kosher (Beit Yosef) meat and Chalav Yisroel dairy, across the resort's kosher dining venues.",
      },
      {
        title: "Ocean & Lagoon Panoramas",
        subtitle: "The Caribbean Sea on one side and the golden glow of the Nichupté Lagoon on the other.",
      },
      {
        title: "On-Site Synagogue",
        subtitle: "Yuya Synagogue on the 3rd level, with seating for up to 25.",
      },
      {
        title: "Designed & Produced by Our Team",
        subtitle: "Extraordinary celebrations designed and produced by our expert team.",
      },
      {
        title: "8 Minutes from the Airport",
        subtitle: "Blvd. Kukulcán km 23.2, in the Cancún Hotel Zone.",
      },
    ],
  },

  venues: [
    {
      id: "rooftop-ceremony",
      title: "Weddings Ceremony Sanctuary",
      level: "24th Level · Rooftop (Adults Only)",
      tagline: "The Rooftop Sanctuary for Your Ceremony",
      sqft: 3767,
      cocktail: 200,
      banquet: 150,
      image: WeddingImages.rooftopCeremony,
      description: "The Weddings Ceremony Sanctuary is on the 24th-level rooftop, the same level as Ofek and its sky pool. The rooftop is adults only.",
      features: ["24th-level rooftop, adults only", "Beside Ofek and the sky pool", "200 guests for cocktails or 150 seated"],
      idealFor: ["Ceremony", "Cocktail Hour", "Banquet"],
    },
    {
      id: "grand-ballroom",
      title: "The Grand Ballroom (Paloma & Cuco)",
      level: "3rd Level · Celebration Floor",
      tagline: "Banquets and Dancing",
      sqft: 4951,
      theater: 450,
      school: 230,
      uform: 100,
      cocktail: 450,
      banquet: 300,
      image: WeddingImages.ballroomBanquet,
      secondaryImage: AllImages.casaNizucGallery39,
      description: "The Grand Ballroom divides into two ballrooms, Paloma and Cuco, of 2,476 sq. ft. each. It sits on the 3rd level beside the Foyer and the Yuya Synagogue.",
      features: ["Divides into Paloma and Cuco", "300 seated banquet or 450 cocktail", "Next to the Grand Foyer"],
      idealFor: ["Wedding Banquets", "Dancing", "Receptions"],
    },
    {
      id: "grand-foyer",
      title: "Grand Arrival Foyer",
      level: "3rd Level · Celebration Floor",
      tagline: "Welcome Receptions and Cocktails",
      sqft: 2153,
      cocktail: 180,
      banquet: 0,
      image: WeddingImages.breakoutLounge2,
      description: "The 3rd-level Foyer connects the Grand Ballroom, the Yuya Synagogue and the breakout rooms, and holds up to 180 for a cocktail reception.",
      features: ["Connects the Ballroom, Synagogue and breakout rooms", "180 guests for a cocktail reception"],
      idealFor: ["Welcome Reception", "Cocktail Reception"],
    },
    {
      id: "eden-terrace",
      title: "El Edén Garden Terrace",
      level: "Ground Level · Eden Pools",
      tagline: "Open-Air Garden Terrace",
      sqft: 3660,
      cocktail: 300,
      banquet: 200,
      image: WeddingImages.gardenCeremony,
      description: "El Edén Terrace is on the ground level, by the Eden pools and next to Âshân Steakhouse.",
      features: ["Open-air terrace by the Eden pools", "300 guests for cocktails or 200 seated", "Next to Âshân Steakhouse"],
      idealFor: ["Cocktail Hour", "Dinner", "Reception"],
    },
    {
      id: "yuya-synagogue",
      title: "Yuya Synagogue",
      level: "3rd Level · Synagogue",
      tagline: "The On-Site Synagogue",
      sqft: 312,
      theater: 25,
      school: 15,
      uform: 12,
      cocktail: 25,
      banquet: 0,
      image: AllImages.casaNizucGallery38,
      description: "Yuya is the synagogue inside the hotel, on the 3rd level beside the Foyer, with seating for up to 25.",
      features: ["On-site synagogue, 3rd level", "Seating for up to 25", "Beside the Grand Foyer"],
      idealFor: ["Minyan", "Prayer", "Family Gatherings"],
    },
    {
      id: "sky-court",
      title: "Sky Court",
      level: "5th Level · Open Air",
      tagline: "The Largest Event Venue",
      sqft: 6189,
      cocktail: 450,
      banquet: 350,
      image: AllImages.casaNizucGallery26,
      description: "Sky Court is the resort's largest event space, 6,189 sq. ft. on the 5th level. It also holds the resort's sports courts.",
      features: ["Largest event venue, 6,189 sq. ft.", "450 guests for cocktails or 350 seated"],
      idealFor: ["Large Celebrations", "Banquet", "Reception"],
    },
    {
      id: "motor-lobby",
      title: "Motor Lobby & Grand Colonnade",
      level: "2nd Level · Main Entrance",
      tagline: "The Main Entrance",
      sqft: 4682,
      cocktail: 350,
      banquet: 250,
      image: AllImages.casaNizucGallery06,
      description: "The Motor Lobby is the resort's main entrance on the 2nd level, with the concierge, the tour desks and Noam. It is also used as an event space.",
      features: ["Main entrance and Grand Colonnade", "350 guests for cocktails or 250 seated"],
      idealFor: ["Arrival", "Cocktail Reception"],
    },
    {
      id: "suites-breakouts",
      title: "Breakout Rooms & Boardroom",
      level: "3rd Level · Meeting Wing",
      tagline: "Canario, Gaviota and the Toh Boardroom",
      sqft: 1550,
      cocktail: 110,
      banquet: 60,
      image: WeddingImages.breakoutLounge1,
      description: "Canario (624 sq. ft.) and Gaviota (614 sq. ft.) are the 3rd-level breakout rooms; Toh (312 sq. ft.) is the boardroom. The Wedding Showroom is on the same level.",
      features: ["Canario, 624 sq. ft.", "Gaviota, 614 sq. ft.", "Toh Boardroom, 312 sq. ft."],
      idealFor: ["Breakout Meetings", "Preparation", "Small Gatherings"],
    },
  ] satisfies WeddingVenue[],

  culinary: {
    kicker: "AN UNCOMPROMISING GASTRONOMIC JOURNEY",
    headline: "Culinary Artistry & Mixology",
    lead: "From prime cuts to oceanfront sips, our curated dining concepts cater to every craving, day and night. Elevating our culinary narrative to new heights, we proudly feature dedicated premium venues with specialized Kosher dining.",
    strictTradition: "Seamlessly blending gourmet innovation with strict tradition, our offerings include certified Glatt Kosher (Beit Yosef) specialties and Chalav Yisroel options—ensuring an uncompromising, world-class gastronomic experience for every discerning palate.",
    ultimateBeverage: "Upgrade your stay with Casa Nizuc's premium beverage experience, creating the feel of a luxury all-inclusive resort while preserving the exclusivity of our hospitality program.",
    image: WeddingImages.culinaryFire,
    secondaryImage: AllImages.casaNizucDiningZaitTerrace,
    venues: [
      {
        id: "ashan",
        title: "Âshân Steakhouse",
        category: "Signature Glatt Kosher Steakhouse",
        kosherStandard: "Glatt Kosher (Beit Yosef)",
        location: "Ground Floor",
        image: AllImages.casaNizucDiningAshan,
        description: "A sophisticated, upscale steakhouse showcasing premium USDA Prime meats, handcrafted appetizers, exceptional global wines, and a refined evening dining atmosphere.",
        highlights: ["Premium USDA Prime meats", "Global wines", "Banquet capacity: 80"],
      },
      {
        id: "zait",
        title: "Zait Mediterranean",
        category: "Mediterranean Glatt Kosher Panoramic Restaurant",
        kosherStandard: "Glatt Kosher (Beit Yosef)",
        location: "23rd Floor",
        image: AllImages.casaNizucDiningZait,
        description: "Perched on the 23rd floor, Zait pairs breathtaking, panoramic Caribbean views and hotel zone skyline with authentic Mediterranean cuisine. It is also home to Casa Nizuc's exclusive, curated Wine Cellar.",
        highlights: ["Panoramic Caribbean views", "Casa Nizuc's Wine Cellar", "Banquet capacity: 90"],
      },
      {
        id: "mayim",
        title: "Mayim Dairy Kitchen",
        category: "Contemporary Three Meal Dairy Kitchen",
        kosherStandard: "Chalav Yisroel",
        location: "4th Level",
        image: AllImages.casaNizucDiningMayim,
        description: "The only kosher certified international breakfast buffet at the destination, including homemade breads and pastries, a show cooking station, and a complete variety of daily Caribbean fruit and Mexican specialties. For lunch and dinner: fresh fish, artisan hand-rolled pastas, gourmet salads, handcrafted desserts, and seasonal chef-inspired specialties.",
        highlights: ["Breakfast, lunch and dinner", "Show cooking station", "Banquet capacity: 200"],
      },
      {
        id: "ofek",
        title: "Ofek Rooftop Sky Lounge",
        category: "Adults-Only Glatt Kosher Rooftop Sky Pool & Lounge",
        kosherStandard: "Glatt Kosher",
        location: "24th Level",
        image: AllImages.casaNizucDiningOfek,
        description: "A sophisticated rooftop sanctuary offering handcrafted mixology cocktails, a premium bites menu, endless ocean views, luxury private lounges, and an elegant, high-energy social atmosphere.",
        highlights: ["Rooftop sky pool", "Handcrafted cocktails", "Beside the Weddings Ceremony Sanctuary"],
      },
      {
        id: "noam",
        title: "Noam Coffee House",
        category: "Artisan Coffee House & Ice Cream Parlor",
        kosherStandard: "Chalav Yisroel",
        location: "2nd Level · Motor Lobby",
        image: AllImages.casaNizucDiningNoam,
        description: "Your daily stop for fresh pastries, gourmet sandwiches, expert espresso and specialty coffees, fresh juices, and premium grab-and-go and ice cream selections served throughout the day.",
        highlights: ["Pastries and sandwiches", "Specialty coffees", "Grab-and-go and ice cream"],
      },
      {
        id: "laboya",
        title: "La Boya Poolside",
        category: "Casual Poolside Snack Bar",
        kosherStandard: "Kosher",
        location: "Ground Level · Eden Pool",
        image: AllImages.casaNizucGallery19,
        description: "Casual poolside snack a la carte, serving curated salads, hamburgers, home made pizzas and Mexican antojitos in the Eden heart right by the water.",
        highlights: ["Salads and hamburgers", "Home made pizzas", "Mexican antojitos"],
      },
      {
        id: "mussa",
        title: "Mussa Lobby Bar",
        category: "Lobby & Sports Bar",
        kosherStandard: "Kosher",
        location: "23rd Floor · Lobby",
        image: AllImages.casaNizucDiningMussa,
        description: "Our Lobby & Sports bar offers you the perfect prelude to your stay. Sip craft cocktails at our 23rd-floor lobby bar, where organic design meets breathtaking marine views for a truly sophisticated welcome.",
        highlights: ["23rd-floor lobby bar", "Craft cocktails", "Marine views"],
      },
    ] satisfies DiningVenue[],
  },

  accommodations: {
    kicker: "RESORT LIVING",
    headline: "Your Sanctuary",
    lead: "Each of our guestrooms is a uniquely curated canvas of coastal character, capturing the independent spirit of our destination through captivating design, expressive details, and effortless comfort.",
    subtext: "Framed by floor-to-ceiling perspectives, every sanctuary offers a guaranteed view of nature’s finest work—whether waking up to the endless azure of the open ocean or winding down to the mesmerizing, golden sunsets over the serene lagoon.",
    categories: [
      {
        id: "master-suites",
        title: "Master Suites",
        units: "46 Units",
        sqft: 775,
        image: WeddingImages.masterSuiteBed,
        secondaryImage: AllImages.casaNizucRoomSuiteLiving,
        description: "The pinnacle of our design narrative. These grand, light-filled sanctuaries boast an expansive, independent living room, offering statement spaces curated for travelers who demand an uncompromising sense of place and the absolute finest in coastal lifestyle.",
        highlights: ["46 units, 775 sq. ft.", "Expansive, independent living room"],
      },
      {
        id: "junior-suites",
        title: "Junior Suites",
        units: "17 Units",
        sqft: 614,
        image: WeddingImages.juniorSuite,
        description: "An experiential layout designed to blur the lines between relaxation and indulgence. These oversized suites feature a distinct, separate living room area, presenting fluid environments to lounge, host, or simply get lost in the surrounding views.",
        highlights: ["17 units, 614 sq. ft.", "Separate living room area"],
      },
      {
        id: "deluxe-rooms",
        title: "Deluxe Rooms",
        units: "154 Units",
        sqft: 398,
        image: AllImages.casaNizucRoomKingBalcony,
        description: "Our most expansive category, where space meets thoughtful, expressive design. These guestrooms marry elevated comfort with curated details, offering a sophisticated home base for your coastal escape.",
        highlights: ["154 units, 398 sq. ft.", "King or two double beds"],
      },
      {
        id: "classic-rooms",
        title: "Classic Rooms",
        units: "17 Units",
        sqft: 334,
        image: WeddingImages.classicRoom,
        description: "Intimate, design-forward sanctuaries meticulously crafted for the modern wanderer, blending tactile organic textures with a vibrant boutique aesthetic.",
        highlights: ["17 units, 334 sq. ft.", "Queen or double bed"],
      },
      {
        id: "family-suites",
        title: "Family Suites (Composite Suites)",
        units: "Two Connected Units",
        sqft: "",
        image: WeddingImages.familySuite,
        description: "The ultimate high-design retreat for multigenerational travelers. Artfully structured as a two-unit connected sanctuary, these suites offer the perfect harmony of togetherness and privacy.",
        highlights: ["Two connected units", "Togetherness and privacy"],
      },
    ] satisfies RoomCategory[],
  },

  capacityChart: [
    { space: "Grand Ballroom", type: "meeting", level: "3rd Level", sqft: 4951, theater: 450, school: 230, uform: 100, cocktail: 450, banquet: 300 },
    { space: "• Cuco Ballroom", type: "meeting", level: "3rd Level", sqft: 2476, theater: 225, school: 115, uform: 50, cocktail: 225, banquet: 150 },
    { space: "• Paloma Ballroom", type: "meeting", level: "3rd Level", sqft: 2476, theater: 225, school: 115, uform: 50, cocktail: 225, banquet: 150 },
    { space: "Grand Foyer", type: "meeting", level: "3rd Level", sqft: 2153, theater: "—", school: "—", uform: "—", cocktail: 180, banquet: "—" },
    { space: "Yuya Synagogue", type: "meeting", level: "3rd Level", sqft: 312, theater: 25, school: 15, uform: 12, cocktail: 25, banquet: "—" },
    { space: "Canario Suite", type: "meeting", level: "3rd Level", sqft: 624, theater: 50, school: 25, uform: 15, cocktail: 55, banquet: 30 },
    { space: "Gaviota Suite", type: "meeting", level: "3rd Level", sqft: 614, theater: 50, school: 25, uform: 15, cocktail: 55, banquet: 30 },
    { space: "Toh Boardroom", type: "meeting", level: "3rd Level", sqft: 312, theater: "—", school: 10, uform: "—", cocktail: "—", banquet: "—" },
    { space: "El Edén Terrace", type: "venue", level: "Ground Floor", sqft: 3660, theater: "—", school: "—", uform: "—", cocktail: 300, banquet: 200 },
    { space: "Rooftop Ceremony Sanctuary", type: "venue", level: "24th Level", sqft: 3767, theater: "—", school: "—", uform: "—", cocktail: 200, banquet: 150 },
    { space: "Sky Court", type: "venue", level: "5th Level", sqft: 6189, theater: "—", school: "—", uform: "—", cocktail: 450, banquet: 350 },
    { space: "Motor Lobby", type: "venue", level: "2nd Level", sqft: 4682, theater: "—", school: "—", uform: "—", cocktail: 350, banquet: 250 },
    { space: "Mayim Dining Room", type: "venue", level: "4th Level", sqft: 3444, theater: "—", school: "—", uform: "—", cocktail: "—", banquet: 200 },
    { space: "Zait (+ Wine Cellar)", type: "venue", level: "23rd Level", sqft: "2207 + 290", theater: "—", school: "—", uform: "—", cocktail: "—", banquet: 90 },
    { space: "Âshân Steakhouse", type: "venue", level: "Ground Floor", sqft: 1830, theater: "—", school: "—", uform: "—", cocktail: "—", banquet: 80 },
  ] satisfies CapacityRow[],

  resortLevels: [
    {
      level: "Ground Floor",
      name: "El Edén Pools & Âshân Steakhouse",
      description: "Tropical garden enclave, lagoon pools, water slides, swim-up bar, and our signature steakhouse.",
      highlights: ["Main Resort Pool & Hot Tub", "Family Pool with Water Games & Water Slides", "Âshân Glatt Kosher Steakhouse", "Barawa Pool Bar & La Boya Poolside Snack", "The Cave Entertainment Zone & Jungle Paths"],
    },
    {
      level: "2nd Level",
      name: "Motor Lobby & Grand Colonnade",
      description: "Arrival colonnade, guest reception, concierge, and artisanal coffee house.",
      highlights: ["Main Entrance & Grand Colonnade", "Noam Coffee House & Ice Cream Parlor (Chalav Yisroel)", "Concierge Express & Lounge Area", "Tour Desks & Boutique Convenience Shop"],
    },
    {
      level: "3rd Level",
      name: "Celebration Center & Yuya Synagogue",
      description: "The primary event hub housing our grand ballrooms, dedicated synagogue, and bridal suites.",
      highlights: ["Grand Ballroom (4,951 sq. ft. · Paloma & Cuco)", "Grand Arrival Foyer (2,153 sq. ft.)", "Yuya Synagogue (dedicated on-site prayer sanctuary)", "Canario & Gaviota Bridal / Groom Preparation Suites", "Toh Boardroom & Wedding Showroom", "Fitness Gym & Dribblers Family Club"],
    },
    {
      level: "4th Level",
      name: "Mayim Three-Meal Kitchen",
      description: "Dedicated culinary level featuring our expansive international dairy kitchen.",
      highlights: ["Mayim Three-Meal Dairy Kitchen (Chalav Yisroel)", "International Breakfast Buffet & Live Show Cooking", "Fresh Fish & Artisan Pasta Specialities (Capacity: 200 banquet)"],
    },
    {
      level: "5th Level",
      name: "Summit Court & Sky Court",
      description: "Open-air elevated arena for grand receptions, live concerts, and sports celebrations.",
      highlights: ["Sky Court Celebration Arena (6,189 sq. ft. · 450 cocktail / 350 banquet)", "Summit Court Sports Club & Open-Air Viewing Platform"],
    },
    {
      level: "23rd Level",
      name: "Sky Lobby, Zait & Mussa",
      description: "High-altitude guest reception with panoramic ocean vistas, Mediterranean dining, and wine cellar.",
      highlights: ["23rd Floor Oceanfront Sky Lobby & Reception", "Zait Mediterranean Glatt Kosher Restaurant & Curated Wine Cellar", "Mussa Lobby & Sports Bar with Craft Mixology"],
    },
    {
      level: "24th Level (Rooftop)",
      name: "Weddings Ceremony Sanctuary & Ofek Sky Lounge",
      description: "The highest peak of the resort: an adults-only open-air sanctuary overlooking sea and lagoon.",
      highlights: ["Weddings Ceremony Sanctuary (3,767 sq. ft. · Sunset Chuppah)", "Ofek Adults-Only Rooftop Sky Pool & Cocktail Lounge", "Unobstructed 360-degree Caribbean & Lagoon Panoramas"],
    },
  ] satisfies ResortLevelInfo[],

  location: {
    address: "Blvd. Kukulcán km 23.2, Zona Hotelera, 77500. Cancún, Quintana Roo, Mexico",
    transit: [
      { time: "8 Min", place: "Cancún International Airport (CUN)" },
      { time: "10 Min", place: "El Tinto Golf Course" },
      { time: "12 Min", place: "Cancún Downtown" },
    ],
    mapImage: WeddingImages.locationMap,
  },

  productionServices: [
    {
      title: "Kosher Dining Program",
      description: "Glatt Kosher (Beit Yosef) meat and Chalav Yisroel dairy at the resort's kosher dining venues.",
    },
    {
      title: "On-Site Synagogue",
      description: "Yuya Synagogue on the 3rd level, beside the Grand Foyer, with seating for up to 25.",
    },
    {
      title: "Ceremony & Reception Venues",
      description: "From the rooftop Weddings Ceremony Sanctuary to the Grand Ballroom (up to 450 for cocktails) and Sky Court (up to 450).",
    },
    {
      title: "Ultimate Luxury Beverage Experience",
      description: "Casa Nizuc's premium beverage experience, creating the feel of a luxury all-inclusive resort.",
    },
  ],

  contacts: {
    title: "Plan Your Extraordinary Celebration",
    subtitle: "Let our expert team bring your dream destination event to life at Casa Nizuc.",
    inquireUrl: "/inquire?destination=casa-nizuc&topic=weddings-events",
    contactUrl: "/contact",
    brochureUrl: "/documents/Casa-Nizuc-Wedding-Presentation.pdf",
  },
};

