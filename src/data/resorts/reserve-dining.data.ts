import { AllImages } from "../../../public/images/AllImages";
import type { ResortListSection } from "@/components/resorts/resorts.types";

/**
 * Restaurants and bars of the DIAMOND CLUB RESERVE program. The St. Regis Kanai Resort and The Riviera Maya EDITION
 * share one dining program, so both hotels use this section (content: stregiskanairesort.com/dine-and-drink).
 */
export const RESERVE_DINING: ResortListSection = {
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
