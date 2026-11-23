import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { CASA_NIZUC_HREF } from "@/lib/routes";

/** One restaurant of the Dining page. `menuUrl` (a menu PDF) and `reservationUrl` (the restaurant's reservation platform) are filled in when the client sends them. */
export type DiningVenue = (typeof CASA_NIZUC_PAGE.dining.venues)[number] & { menuUrl?: string; reservationUrl?: string };
export type DiningMeal = (typeof CASA_NIZUC_PAGE.dining.meals)[number];

/**
 * The non-kosher restaurants (Brisa, La Boya) are off the year-round Casa Nizuc pages (client 2026-11-23): no card, no filter, no page.
 * Their data is kept; set this to true to bring them back.
 */
export const SHOW_NON_KOSHER_DINING = false;

export const DINING_VENUES: DiningVenue[] = CASA_NIZUC_PAGE.dining.venues.filter((venue) => SHOW_NON_KOSHER_DINING || venue.kosher);

export function restaurantHref(slug: string): string {
  return `${CASA_NIZUC_HREF}/restaurants/${slug}`;
}

export function getDiningVenue(slug: string): DiningVenue | undefined {
  return DINING_VENUES.find((venue) => venue.slug === slug);
}

/** The Dining page restaurant with this name (e.g. "Âshân"), for links from the GKDE page. */
export function getDiningVenueByName(name: string): DiningVenue | undefined {
  return DINING_VENUES.find((venue) => venue.name === name);
}

const plain = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();

/** The meal services (with hours) in which a restaurant is named. */
export function getMealsForVenue(venueName: string, meals: DiningMeal[] = CASA_NIZUC_PAGE.dining.meals): DiningMeal[] {
  const name = plain(venueName);
  return meals.filter((meal) => plain(meal.where).includes(name));
}
