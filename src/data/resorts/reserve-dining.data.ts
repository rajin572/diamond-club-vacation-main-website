import { AllImages } from "../../../public/images/AllImages";
import type { ResortListSection } from "@/components/resorts/resorts.types";

/** Restaurants and bars from the hotel's own site, stregiskanairesort.com/dine-and-drink (7 venues, with descriptions, hours). */
const HOTEL_SITE_DINING: ResortListSection = {
  title: "Dine & Drink",
  description:
    "Savor eight distinctive restaurants and bars, from contemporary Latin cuisine at Toro and Middle Eastern flavors at Chaya to beachfront seafood at Riviera. Gather for afternoon tea and Mexican cacao tastings in The Library, linger over cocktails at the intimate bar, or enjoy casual bites at Jack’s Club and Pik Nik, with vegetarian and vegan menu options available.",
  images: [
    AllImages.stregisDineSeasideRe,
    AllImages.stregisDineOceanFacingDiningRoom,
    AllImages.stregisDinePatternedTileDiningRoom,
    AllImages.stregisDineOutdoorDiningTerrace,
    AllImages.stregisDineBackBarBottlesOrchids,
    AllImages.stregisDineGarnishedRedCocktailTropicalGreenery,
    AllImages.stregisDineAfternoonTeaServiceTheLibrary,
    AllImages.stregisDinePikNikGrabAndGoDisplay,
  ],
  items: [
    {
      id: "toro",
      title: "Toro",
      subtitle: "Latin American Restaurant",
      image: AllImages.stregisDineOceanFacingDiningRoom,
      description: "A refined Latin American restaurant at The St. Regis Kanai Resort, Riviera Maya serving dishes that reflect the spirit of Mexico and Latin America in an eclectic, well-appointed residential setting. Toro suits guests seeking a polished contemporary dinner, with Chef Richard Sandoval’s direction shaping a vibrant, elegant experience.",
      stats: [
        { label: "Cuisine", value: "Latin American Restaurant" },
        { label: "Serves", value: "Dinner" },
        { label: "Hours", value: "Vary — see concierge" },
      ],
      gallery: [AllImages.stregisDineOceanFacingDiningRoom],
    },
    {
      id: "chaya",
      title: "Chaya",
      subtitle: "Eastern Mediterranean Restaurant",
      image: AllImages.stregisDinePatternedTileDiningRoom,
      description: "A vibrant Eastern Mediterranean restaurant at The St. Regis Kanai Resort, Riviera Maya combining Mediterranean flavors with fresh local Quintana Roo ingredients and Yucatan accents. Chaya suits relaxed breakfasts and atmospheric dinners, with outdoor seating and evening live music.",
      stats: [
        { label: "Cuisine", value: "Eastern Mediterranean Restaurant" },
        { label: "Serves", value: "Breakfast & Dinner" },
        { label: "Hours", value: "Vary — see concierge" },
      ],
      gallery: [AllImages.stregisDinePatternedTileDiningRoom],
    },
    {
      id: "riviera",
      title: "Riviera",
      subtitle: "Mexican Mediterranean Seafood Restaurant",
      image: AllImages.stregisDineOutdoorDiningTerrace,
      description: "A beachfront seafood restaurant at The St. Regis Kanai Resort, Riviera Maya serving fresh local ingredients inspired by the Mexican and Mediterranean Rivieras. Riviera is perfect for oceanfront meals with bright coastal flavors, a Smart Casual feel and an easy Riviera Maya elegance.",
      stats: [
        { label: "Cuisine", value: "Mexican Mediterranean Seafood Restaurant" },
        { label: "Serves", value: "Dinner" },
        { label: "Hours", value: "Vary — see concierge" },
      ],
      gallery: [AllImages.stregisDineOutdoorDiningTerrace],
    },
    {
      id: "st-regis-bar",
      title: "The St. Regis Bar",
      subtitle: "Cocktail Bar",
      image: AllImages.stregisDineBackBarBottlesOrchids,
      description: "An intimate cocktail bar at The St. Regis Kanai Resort, Riviera Maya featuring night-sky views, a 20-person setting and the Kanai Mary, a local take on the signature Bloody Mary. The St. Regis Bar suits elegant evening drinks, with champagne sabering marking day’s end.",
      stats: [
        { label: "Cuisine", value: "Cocktail Bar" },
        { label: "Serves", value: "Signature Cocktails" },
        { label: "Hours", value: "5:00 p.m. – midnight" },
      ],
      gallery: [AllImages.stregisDineBackBarBottlesOrchids],
    },
    {
      id: "jacks-club",
      title: "Jack's Club",
      subtitle: "American Sports Bar",
      image: AllImages.stregisDineGarnishedRedCocktailTropicalGreenery,
      description: "A hidden adults-only sports bar at The St. Regis Kanai Resort, Riviera Maya offering American finger food, a pool table, foosball and an outdoor deck with plunge pools. Jack’s Club suits laid-back afternoons of fries, mini-burgers and chicken wings in a playful speakeasy setting.",
      stats: [
        { label: "Cuisine", value: "American Sports Bar" },
        { label: "Serves", value: "Drinks & Finger Food" },
        { label: "Hours", value: "11:00 a.m. – 6:00 p.m." },
      ],
      gallery: [AllImages.stregisDineGarnishedRedCocktailTropicalGreenery],
    },
    {
      id: "the-library",
      title: "The Library",
      subtitle: "Mexican Chocolate Café",
      image: AllImages.stregisDineAfternoonTeaServiceTheLibrary,
      description: "An intimate Mexican chocolate café at The St. Regis Kanai Resort, Riviera Maya offering delicacies made with Mexican cacao and the property’s Afternoon Tea. The Library is perfect for unhurried conversation and sweet tastings, with a refined salon feel.",
      stats: [
        { label: "Cuisine", value: "Mexican Chocolate Café" },
        { label: "Serves", value: "Chocolate & Afternoon Tea" },
        { label: "Hours", value: "Vary — see concierge" },
      ],
      gallery: [AllImages.stregisDineAfternoonTeaServiceTheLibrary],
    },
    {
      id: "pik-nik",
      title: "Pik Nik",
      subtitle: "Grab-and-Go Café",
      image: AllImages.stregisDinePikNikGrabAndGoDisplay,
      description: "A convenient grab-and-go café at The St. Regis Kanai Resort, Riviera Maya offering deli-style bites and to-go meals for days spent exploring the resort or Quintana Roo. Pik Nik suits guests looking for an easy morning pickup, with a casual, efficient feel.",
      stats: [
        { label: "Cuisine", value: "Grab-and-Go Café" },
        { label: "Serves", value: "Grab-and-Go Deli Bites" },
        { label: "Hours", value: "7:00 a.m. – 11:00 a.m." },
      ],
      gallery: [AllImages.stregisDinePikNikGrabAndGoDisplay],
    },
  ],
};

/**
 * Restaurants and bars from the client's website, www.dcpassovervacations.com/restaurants: his 8 photos with their names.
 * The page has no text per restaurant, so these cards show a photo and a name only.
 */
const CLIENT_DINING: ResortListSection = {
  title: "The Diamond Club Dining Experience",
  description:
    "We are proud to feature great unique indoor & outdoor Dining options including 4 Luxury Bars, all stocked with top shelf wines and Liquors.",
  images: [
    AllImages.dcvDiningBanner,
    AllImages.dcvDiningSoolBeachClub,
    AllImages.dcvDiningGalato,
    AllImages.dcvDiningKiis,
    AllImages.dcvDiningOceanaFishAndChips,
    AllImages.dcvDiningLobbyBar,
    AllImages.dcvDiningPizzo,
    AllImages.dcvDiningKitchen,
  ],
  items: [
    {
      id: "sool-beach-club",
      title: "So'ol Beach Club",
      subtitle: "",
      image: AllImages.dcvDiningSoolBeachClub,
      description: "Enjoy relaxed beachfront dining with refreshing flavors, light bites, and tropical favorites, all served in a beautiful setting overlooking the Caribbean Sea.",
      gallery: [AllImages.dcvDiningSoolBeachClub],
    },
    {
      id: "galato",
      title: "Galato",
      subtitle: "",
      image: AllImages.dcvDiningGalato,
      description: "A delightful destination for refreshing frozen treats, delicious ice cream, and sweet indulgences, perfect for a relaxing afternoon under the Riviera Maya sun.",
      gallery: [AllImages.dcvDiningGalato],
    },
    {
      id: "kiis",
      title: "KIIS",
      subtitle: "",
      image: AllImages.dcvDiningKiis,
      description: "An elegant dining experience featuring beautifully prepared dishes, creative flavors, and a sophisticated atmosphere designed for memorable evenings.",
      gallery: [AllImages.dcvDiningKiis],
    },
    {
      id: "oceana-fish-and-chips",
      title: "Oceana Fish & Chips",
      subtitle: "",
      image: AllImages.dcvDiningOceanaFishAndChips,
      description: "Enjoy fresh seafood favorites, crispy fish and chips, and delicious coastal-inspired dishes in a vibrant, open-air tropical setting.",
      gallery: [AllImages.dcvDiningOceanaFishAndChips],
    },
    {
      id: "lobby-bar",
      title: "Lobby Bar",
      subtitle: "",
      image: AllImages.dcvDiningLobbyBar,
      description: "A sophisticated gathering place offering handcrafted cocktails, premium beverages, and a relaxed atmosphere to unwind and socialize.",
      gallery: [AllImages.dcvDiningLobbyBar],
    },
    {
      id: "pizzo",
      title: "PIZZO",
      subtitle: "",
      image: AllImages.dcvDiningPizzo,
      description: "A casual and inviting dining destination serving freshly prepared pizza, flavorful specialties, and delicious bites in a lively outdoor atmosphere.",
      gallery: [AllImages.dcvDiningPizzo],
    },
    {
      id: "kitchen",
      title: "Kitchen",
      subtitle: "",
      image: AllImages.dcvDiningKitchen,
      description: "Start every morning with a lavish breakfast featuring freshly prepared favorites and an extensive selection of gourmet offerings. During Chol Hamoed, return for an exceptional dinner experience showcasing our signature culinary creations.",
      gallery: [AllImages.dcvDiningKitchen],
    },
    {
      id: "grand-ballroom-yom-tov-dining",
      title: "Grand Ballroom – Yom Tov Dining",
      subtitle: "Festive holiday meals",
      image: AllImages.reserveGrandBallroomYomTov,
      description: "Celebrate Yom Tov in the elegant Grand Ballroom, transformed into a beautiful dining setting for our festive holiday meals. Enjoy exceptional gourmet cuisine, attentive service, and a warm, inviting atmosphere as family and friends gather to celebrate together.",
      gallery: [AllImages.reserveGrandBallroomYomTov],
    },
    {
      id: "grand-ballroom-shabbat-yom-tov-kiddushim",
      title: "Grand Ballroom – Shabbat & Yom Tov Kiddushim",
      subtitle: "Kiddushim",
      image: AllImages.reserveGrandBallroomKiddushim,
      description: "Experience our lavish Shabbat and Yom Tov Kiddushim, featuring an impressive selection of gourmet specialties, traditional favorites, premium wines, and beautifully presented delicacies. A wonderful opportunity to gather, socialize, and celebrate in an elegant and festive atmosphere.",
      gallery: [AllImages.reserveGrandBallroomKiddushim],
    },
  ],
};

/** The dining versions. Switch with: npm run rooms -- dining=client | dining=hotel-site (see scripts/swap-rooms.mjs). */
export const RESERVE_DINING_VERSIONS = {
  client: CLIENT_DINING,
  "hotel-site": HOTEL_SITE_DINING,
} as const;

// @dining:active
export const RESERVE_DINING: ResortListSection = RESERVE_DINING_VERSIONS["client"];
