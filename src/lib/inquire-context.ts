export interface InquireContext {
  programId: string;
  /** Set when the visitor is inside a specific hotel; absent on a program's own pages. */
  resortId?: string;
}

const PROGRAM_PATH = /^\/offerings\/[^/]+\/programs\/([^/]+)/;
const RESORT_PATH = /^\/offerings\/[^/]+\/programs\/[^/]+\/resorts\/([^/]+)/;
const EXPERIENCE_PATH = /^\/offerings\/[^/]+\/programs\/[^/]+\/experiences\//;

/**
 * Which program (and hotel) the visitor is "inside", if any. Program pages and everything under them show Inquire,
 * locked to that program; inside a hotel it is also locked to the hotel. Hotel pages carry the hotel in the path;
 * experience pages (entertainment, scholars...) carry it in `?resort=` when opened from a hotel.
 * Returns null everywhere else (home, Passover collection, About...), where the header shows Contact instead.
 */
export function getInquireContext(pathname: string | null, search: string): InquireContext | null {
  if (!pathname) return null;

  const programMatch = PROGRAM_PATH.exec(pathname);
  if (!programMatch) return null;
  const programId = programMatch[1];

  const resortMatch = RESORT_PATH.exec(pathname);
  if (resortMatch) return { programId, resortId: resortMatch[1] };

  if (EXPERIENCE_PATH.test(pathname)) {
    const resortId = new URLSearchParams(search).get("resort");
    if (resortId) return { programId, resortId };
  }

  return { programId };
}

/**
 * Where the "About" link of the header leads (client 2026-10-22): inside a Passover program (Diamond Club Reserve, Guettaway,
 * Diamond Blue) and everything under it, to that program's own About page (.../programs/<id>/about); everywhere else
 * (home, Casa Nizuc, weddings, ...) to the main About page.
 */
export const MAIN_ABOUT_HREF = "/about";

export function getAboutHref(pathname: string | null): string {
  if (!pathname) return MAIN_ABOUT_HREF;
  const match = new RegExp("^(/offerings/[^/]+/programs/[^/]+)").exec(pathname);
  return match ? match[1] + "/about" : MAIN_ABOUT_HREF;
}

/**
 * Where the "Experiences" link of the header leads (client 2026-10-22): inside a hotel's pages (the hotel page, its rooms, dining, pools,
 * spa..., or an experience page opened from the hotel) to the experiences of that hotel only (the "Program" block of its page);
 * everywhere else to the main Experiences page.
 */
export const MAIN_EXPERIENCES_HREF = "/experiences";

export function getExperiencesHref(pathname: string | null, search: string): string {
  if (!pathname) return MAIN_EXPERIENCES_HREF;

  const resortMatch = new RegExp("^(/offerings/[^/]+/programs/[^/]+)/resorts/([^/]+)").exec(pathname);
  if (resortMatch) return resortMatch[0] + "#experiences";

  if (EXPERIENCE_PATH.test(pathname)) {
    const programMatch = new RegExp("^(/offerings/[^/]+/programs/[^/]+)").exec(pathname);
    const resortId = new URLSearchParams(search).get("resort");
    if (programMatch && resortId) return programMatch[1] + "/resorts/" + encodeURIComponent(resortId) + "#experiences";
  }

  return MAIN_EXPERIENCES_HREF;
}
