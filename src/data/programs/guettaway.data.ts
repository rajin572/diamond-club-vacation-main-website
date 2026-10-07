import { AllImages } from "../../../public/images/AllImages";
import { GUETTAWAYS_URL } from "@/lib/external-links";
import type { ExternalProgramData } from "@/components/programs/programs.types";

/** Guettaway A DCV Program is run on its own website, so this site only shows its card. */
export const GUTTAWAY_DATA: ExternalProgramData = {
  id: "guttaway",
  offeringId: "passover-collection-2027",
  title: "Guettaway A DCV Program",
  card: {
    description:
      "Elevated Pesach for the Heimish family across Waldorf Astoria Riviera Maya and Park Hyatt Riviera Maya.",
    image: AllImages.passoverCollectionGuettawayADvcProgram,
  },
  externalUrl: GUETTAWAYS_URL,
};
