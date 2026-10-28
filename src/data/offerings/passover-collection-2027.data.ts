import { AllImages } from "../../../public/images/AllImages";
import type { OfferingData } from "@/components/offerings/offerings.types";

export const PASSOVER_COLLECTION_2027_DATA: OfferingData = {
  id: "passover-collection-2027",
  title: "Passover Collection 2027",
  hero: {
    headline: "Passover Collection 2027",
    subtext: "World-Class Hospitality, Exceptional Moments",
    image: AllImages.passoverCollectionHero,
    // The wide banner shows the beach: sand, hammocks, loungers and the palm trunks (client 2026-10-20).
    imagePosition: "50% 66%",
    // logo: { image: AllImages.logo, alt: "Diamond Club Vacations" },
  },
  programIds: ["diamond-club-reserve", "guttaway", "blue"],
  // No heading above the programs (client 2026-10-22: "Passover Programs - 2027" removed).
  programsSection: {},
};
