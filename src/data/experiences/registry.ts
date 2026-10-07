import type { ExperienceCategoryData, KidsDayCampData } from "@/components/experiences/experiences.types";
import { ATTRACTIONS_BY_PROGRAM } from "./attractions.data";
import { ENTERTAINMENT_BY_PROGRAM } from "./entertainment.data";
import { SCHOLARS_BY_PROGRAM } from "./scholars.data";
import { KIDS_PROGRAM_BY_PROGRAM } from "./kids-program.data";
import { KIDS_DAY_CAMP_BY_PROGRAM } from "./kids-day-camp.data";

/** Card-grid experience pages, keyed by experience type then program id. */
const categoriesByType: Record<string, Record<string, ExperienceCategoryData>> = {
  attractions: ATTRACTIONS_BY_PROGRAM,
  entertainment: ENTERTAINMENT_BY_PROGRAM,
  "kids-program": KIDS_PROGRAM_BY_PROGRAM,
  scholars: SCHOLARS_BY_PROGRAM,
};

/** Order and labels of the experience pages in a program's sub navigation. */
export const EXPERIENCE_NAV_LABELS: Record<string, string> = {
  attractions: "Attractions",
  entertainment: "Entertainment",
  "kids-program": "Kids Program",
  scholars: "Scholars",
};

export function getExperienceData(programId: string, experienceType: string): ExperienceCategoryData | undefined {
  return categoriesByType[experienceType]?.[programId];
}

export function getKidsDayCampData(programId: string): KidsDayCampData | undefined {
  return KIDS_DAY_CAMP_BY_PROGRAM[programId];
}

/** Experience pages a program offers, in navigation order. */
export function getExperienceTypesForProgram(programId: string): string[] {
  return Object.keys(EXPERIENCE_NAV_LABELS).filter((type) => categoriesByType[type]?.[programId]);
}

/** Every experience-type slug that can appear in a program's URL (card-grid pages plus the day camp page). */
export function getAllExperienceSlugsForProgram(programId: string): string[] {
  return [...getExperienceTypesForProgram(programId), ...(getKidsDayCampData(programId) ? ["kids-day-camp"] : [])];
}
