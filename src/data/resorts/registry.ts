import type { ResortData, ResortDetailItem } from "@/components/resorts/resorts.types";
import type { ResortDetailKind } from "@/components/resorts/ResortDetailView";
import { EDITION_RESORT_DATA } from "./edition.data";
import { ST_REGIS_RESORT_DATA } from "./st-regis.data";
import { CASA_NIZUC_DATA } from "./casa-nizuc.data";
import { getProgram } from "@/data/programs/registry";

export const resortsRegistry = {
  "st-regis": ST_REGIS_RESORT_DATA,
  edition: EDITION_RESORT_DATA,
  "casa-nizuc": CASA_NIZUC_DATA,
} satisfies Record<string, ResortData>;

export type ResortId = keyof typeof resortsRegistry;

export function getResort(resortId: string): ResortData | undefined {
  return resortsRegistry[resortId as ResortId];
}

export function getAllResorts(): ResortData[] {
  return Object.values(resortsRegistry);
}

export function getResortsForProgram(programId: string): ResortData[] {
  return getAllResorts().filter((r) => r.programId === programId);
}

/**
 * Every resort with the full parent route params (`offeringId`, `programId`, `resortId`).
 * `generateStaticParams` for every route under /resorts/[resortId] must return ALL of the
 * dynamic segments above it — leaving out `offeringId` produces no prerendered pages, and
 * with `dynamicParams = false` that turns into a 404 in production.
 */
export function getResortRouteParams() {
  return getAllResorts().flatMap((resort) => {
    const program = getProgram(resort.programId);
    if (!program) return [];
    return [
      {
        resort,
        params: { offeringId: program.offeringId, programId: resort.programId, resortId: resort.resortId },
      },
    ];
  });
}

/** The detail pages (room, restaurant, pool, spa) a resort has, in display order. */
export function getResortDetailItems(resort: ResortData, kind: ResortDetailKind): ResortDetailItem[] {
  switch (kind) {
    case "room":
      return resort.rooms.items;
    case "restaurant":
      return resort.dining?.items ?? [];
    case "pool":
      return resort.pools?.items ?? [];
    case "spa":
      return resort.spa ? [resort.spa.item] : [];
  }
}

export function getResortDetailItem(
  resort: ResortData,
  kind: ResortDetailKind,
  itemId: string
): ResortDetailItem | undefined {
  return getResortDetailItems(resort, kind).find((item) => item.id === itemId);
}
