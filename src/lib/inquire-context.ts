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
