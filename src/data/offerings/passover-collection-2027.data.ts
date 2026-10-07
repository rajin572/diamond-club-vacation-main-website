import { AllImages } from "../../../public/images/AllImages";
import type { OfferingData } from "@/components/offerings/offerings.types";

export const PASSOVER_COLLECTION_2027_DATA: OfferingData = {
  id: "passover-collection-2027",
  title: "Passover Collection 2027",
  hero: {
    headline: "Passover Collection 2027",
    subtext: "World-Class Hospitality, Exceptional Moments",
    image: AllImages.passoverCollectionHero,
    logo: { image: AllImages.logo, alt: "Diamond Club Vacations" },
  },
  programIds: ["diamond-club-reserve", "guttaway", "blue"],
  programsSection: {
    title: "Passover Programs - 2027",
  },
};
