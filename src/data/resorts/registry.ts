import type { ResortData, ResortDetailItem } from "@/components/resorts/resorts.types";
import type { ResortDetailKind } from "@/components/resorts/ResortDetailView";
import { EDITION_RESORT_DATA } from "./edition.data";
import { ST_REGIS_RESORT_DATA } from "./st-regis.data";
import { CASA_NIZUC_DATA } from "./casa-nizuc.data";
import { WALDORF_ASTORIA_RESORT_DATA } from "./waldorf-astoria.data";
import { PARK_HYATT_RESORT_DATA } from "./park-hyatt.data";
import { getProgram } from "@/data/programs/registry";

/**
 * Pools and beaches are open all day during the program (client request 2026-10-19): no opening times are shown, only
 * "All day". The times in the hotel data files are kept, this just replaces them when the pages are built.
 */
function withAllDayPools(data: ResortData): ResortData {
  if (!data.pools) return data;
  const items = data.pools.items.map((item): ResortDetailItem => ({
    ...item,
    // No "Fee" line on pool details (client 2026-10-19); the Fee values stay in the hotel data files.
    stats: item.stats?.filter((stat) => stat.label !== "Fee").map((stat) => (stat.label === "Hours" ? { ...stat, value: "All day" } : stat)),
    groups: item.groups?.map((group) => (group.title === "Schedule" ? { ...group, items: ["All day"] } : group)),
  }));
  return { ...data, pools: { ...data.pools, items } };
}

export const resortsRegistry = {
  "st-regis": withAllDayPools(ST_REGIS_RESORT_DATA),
  edition: withAllDayPools(EDITION_RESORT_DATA),
  "waldorf-astoria": withAllDayPools(WALDORF_ASTORIA_RESORT_DATA),
  "park-hyatt": withAllDayPools(PARK_HYATT_RESORT_DATA),
  "casa-nizuc": withAllDayPools(CASA_NIZUC_DATA),
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
