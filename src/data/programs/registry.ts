import type { OfferingData } from "@/components/offerings/offerings.types";
import type { ProgramData, ProgramSummary } from "@/components/programs/programs.types";
import { programHref } from "@/lib/routes";
import { DIAMOND_CLUB_RESERVE_DATA } from "./diamond-club-reserve.data";
import { BLUE_DATA } from "./blue.data";
import { GUTTAWAY_DATA } from "./guettaway.data";

export const programsRegistry = {
  "diamond-club-reserve": DIAMOND_CLUB_RESERVE_DATA,
  guttaway: GUTTAWAY_DATA,
  blue: BLUE_DATA,
} satisfies Record<string, ProgramData>;

export type ProgramId = keyof typeof programsRegistry;

export function getProgram(programId: string): ProgramData | undefined {
  return programsRegistry[programId as ProgramId];
}

export function getAllPrograms(): ProgramData[] {
  return Object.values(programsRegistry);
}

export function getProgramsForOffering(offeringId: string): ProgramData[] {
  return getAllPrograms().filter((p) => p.offeringId === offeringId);
}

/** The cards on an offering page, in the offering's order. */
export function getProgramSummaries(offering: OfferingData): ProgramSummary[] {
  return offering.programIds.flatMap((programId): ProgramSummary[] => {
    const program = getProgram(programId);
    if (!program) return [];
    return [
      {
        id: program.id,
        title: program.title,
        subtitle: program.card.subtitle,
        location: program.card.location,
        image: program.card.image,
        logos: program.card.logos,
        href: programHref(offering.id, program.id),
      },
    ];
  });
}
