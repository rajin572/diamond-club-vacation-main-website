import type { ResortDetailItem } from "./resorts.types";

/** A venue gets its own page only when there is something to show besides its photo and name. */
export function hasDetailPage(item: ResortDetailItem): boolean {
  return Boolean(item.description) || (item.stats?.length ?? 0) > 0 || (item.groups?.length ?? 0) > 0;
}
