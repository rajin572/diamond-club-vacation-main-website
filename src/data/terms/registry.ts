import type { TermsData } from "@/components/terms/terms.types";
import { BLUE_TERMS } from "./blue.data";
import { DIAMOND_CLUB_RESERVE_TERMS } from "./diamond-club-reserve.data";
import { GUETTAWAY_TERMS } from "./guettaway.data";

/** Keyed by program id. */
export const termsRegistry = {
  "diamond-club-reserve": DIAMOND_CLUB_RESERVE_TERMS,
  guttaway: GUETTAWAY_TERMS,
  blue: BLUE_TERMS,
} satisfies Record<string, TermsData>;

export type TermsProgramId = keyof typeof termsRegistry;

export function getTerms(programId: string): TermsData | undefined {
  return termsRegistry[programId as TermsProgramId];
}

export function getAllTerms(): TermsData[] {
  return Object.values(termsRegistry);
}
