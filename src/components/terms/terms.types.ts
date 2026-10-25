import type { DesignImage } from "@/components/shared/design";

/** One block of body copy inside a terms section. */
export type TermsBlock =
  | { type: "paragraph"; text: string; /** Bold run-in label, e.g. "Refund Policy:". */ lead?: string; strong?: boolean }
  | { type: "subheading"; text: string };

export interface TermsSection {
  heading: string;
  blocks: TermsBlock[];
}

/** The terms and conditions of one Passover program (/terms/[programId]). */
export interface TermsData {
  /** Same id as the program in `programsRegistry`. */
  programId: string;
  /** Program name shown above the heading, e.g. "DIAMOND CLUB RESERVE". */
  programName: string;
  /** The program's hotels, shown under the heading. */
  hotels: string;
  heroImage: DesignImage;
  sections: TermsSection[];
  /** Shown instead of the sections while the program's terms have not been supplied. */
  pendingNote?: string;
}
