import type { DesignLink } from "@/components/shared/design";
import { getResortsForProgram } from "@/data/resorts/registry";
import { experienceHref, inquireHref, programHref, resortHref } from "@/lib/routes";
import { EXPERIENCE_NAV_LABELS, getExperienceTypesForProgram } from "./registry";

/** Sub navigation shown on every experience page of a program: program, its hotels, its experiences, inquire. */
export function buildExperienceNav(offeringId: string, programId: string): DesignLink[] {
  return [
    { label: "Hotels", href: programHref(offeringId, programId) },
    ...getResortsForProgram(programId).map((resort) => ({
      label: resort.resortName,
      href: resortHref(offeringId, programId, resort.resortId),
    })),
    ...getExperienceTypesForProgram(programId).map((type) => ({
      label: EXPERIENCE_NAV_LABELS[type],
      href: experienceHref(offeringId, programId, type),
    })),
    { label: "Inquire", href: inquireHref({ destination: programId }) },
  ];
}
