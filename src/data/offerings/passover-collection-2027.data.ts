import { AllImages } from "../../../public/images/AllImages";
import type { OfferingData } from "@/components/offerings/offerings.types";

export const PASSOVER_COLLECTION_2027_DATA: OfferingData = {
  id: "passover-collection-2027",
  title: "Passover Collection 2027",
  hero: {
    kicker: "Passover",
    headline: "Passover Collection 2027",
    subtext: "World-class hospitality. Exceptional moments.",
    image: AllImages.passoverCollectionHero,
  },
  programIds: ["diamond-club-reserve", "guttaway", "blue"],
  programsSection: {
    title: "Three distinct programs",
    description: "Each program has its own hotels, rooms, dining and program content. Hotel assets are kept separate.",
  },
};
