import { AllImages } from "../../../public/images/AllImages";
import { GUETTAWAYS_URL } from "@/lib/external-links";
import type { ExternalProgramData } from "@/components/programs/programs.types";

/** Guettaway A DCV Program is run on its own website, so this site only shows its card. */
export const GUTTAWAY_DATA: ExternalProgramData = {
  id: "guttaway",
  offeringId: "passover-collection-2027",
  title: "Guettaway A DCV Program",
  card: {
    subtitle: "Elevated Pesach for the Heimish Family",
    location: "THE RIVIERA MAYA, AMAI",
    image: AllImages.passoverCollectionGuettawayADvcProgram,
    // Text stand-ins until the Waldorf Astoria and Park Hyatt logo artwork is supplied.
    logos: [
      { text: "Waldorf Astoria", alt: "Waldorf Astoria Riviera Maya" },
      { text: "Park Hyatt", alt: "Park Hyatt Riviera Maya" },
    ],
  },
  externalUrl: GUETTAWAYS_URL,
};
