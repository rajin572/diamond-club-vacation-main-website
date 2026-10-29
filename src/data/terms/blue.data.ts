import { AllImages } from "../../../public/images/AllImages";
import type { TermsData } from "@/components/terms/terms.types";

/**
 * Diamond Blue (Casa Nizuc) terms have not been supplied: the client's "Casa Nizuc Team" PDF is an introduction letter, not terms.
 * Replace `pendingNote` with `sections` once the real terms arrive.
 */
export const BLUE_TERMS: TermsData = {
  programId: "blue",
  programName: "Casa Nizuc by DCV",
  hotels: "Casa Nizuc",
  heroImage: AllImages.casa2,
  sections: [],
  pendingNote:
    "The terms and conditions for Casa Nizuc by DCV will be published here soon. For questions about your reservation, please contact us.",
};
