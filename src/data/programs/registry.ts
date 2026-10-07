import type { OfferingData } from "@/components/offerings/offerings.types";
import type { ExternalProgramData, ProgramData, ProgramSummary } from "@/components/programs/programs.types";
import { programHref } from "@/lib/routes";
import { DIAMOND_CLUB_RESERVE_DATA } from "./diamond-club-reserve.data";
import { BLUE_DATA } from "./blue.data";
import { GUTTAWAY_DATA } from "./guettaway.data";

/** Programs hosted on this site (overview page, details page, hotels, experiences). */
export const programsRegistry = {
  "diamond-club-reserve": DIAMOND_CLUB_RESERVE_DATA,
  blue: BLUE_DATA,
} satisfies Record<string, ProgramData>;

/** Programs that live on another website; they only appear as a card that links out. */
export const externalProgramsRegistry = {
  guttaway: GUTTAWAY_DATA,
} satisfies Record<string, ExternalProgramData>;

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

/** The cards on an offering page, in the offering's order; external programs link to their own site. */
export function getProgramSummaries(offering: OfferingData): ProgramSummary[] {
  return offering.programIds.flatMap((programId): ProgramSummary[] => {
    const internal = getProgram(programId);
    if (internal) {
      return [
        {
          id: internal.id,
          title: internal.title,
          subtitle: internal.card.subtitle,
          location: internal.card.location,
          image: internal.card.image,
          logos: internal.card.logos,
          href: programHref(offering.id, internal.id),
          external: false,
        },
      ];
    }
    const external = externalProgramsRegistry[programId as keyof typeof externalProgramsRegistry];
    if (external) {
      return [
        {
          id: external.id,
          title: external.title,
          subtitle: external.card.subtitle,
          location: external.card.location,
          image: external.card.image,
          logos: external.card.logos,
          href: external.externalUrl,
          external: true,
        },
      ];
    }
    return [];
  });
}
