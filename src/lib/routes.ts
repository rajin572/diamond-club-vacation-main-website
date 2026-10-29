/**
 * Single source of truth for every URL under /offerings/[offeringId]/...
 * Replaces the old per-component hardcoded "/passover-collection-2027/..." string templates.
 */

/** The one commercial offering with real program pages today. */
export const PASSOVER_OFFERING_ID = "passover-collection-2027";

export function offeringHref(offeringId: string): string {
  return `/offerings/${offeringId}`;
}

/** Weddings & Destination Events: its own page at /weddings-events, not under /offerings (client 2026-10-22). */
export const WEDDINGS_HREF = "/weddings-events";

/** A program's page: its hotels. */
export function programHref(offeringId: string, programId: string): string {
  return `${offeringHref(offeringId)}/programs/${programId}`;
}

export function resortHref(
  offeringId: string,
  programId: string,
  resortId: string
): string {
  return `${programHref(offeringId, programId)}/resorts/${resortId}`;
}

export function roomHref(
  offeringId: string,
  programId: string,
  resortId: string,
  roomId: string
): string {
  return `${resortHref(offeringId, programId, resortId)}/rooms/${roomId}`;
}

export function poolHref(
  offeringId: string,
  programId: string,
  resortId: string,
  poolId: string
): string {
  return `${resortHref(offeringId, programId, resortId)}/pools/${poolId}`;
}

export function diningHref(
  offeringId: string,
  programId: string,
  resortId: string
): string {
  return `${resortHref(offeringId, programId, resortId)}/dining`;
}

export function restaurantHref(
  offeringId: string,
  programId: string,
  resortId: string,
  restaurantId: string
): string {
  return `${resortHref(offeringId, programId, resortId)}/restaurants/${restaurantId}`;
}

export function spaHref(
  offeringId: string,
  programId: string,
  resortId: string
): string {
  return `${resortHref(offeringId, programId, resortId)}/spa`;
}

/**
 * An experience page of a program. Pass `resortId` when linking from inside a hotel so the page keeps
 * that hotel's sub navigation and its Inquire button stays locked to the same hotel.
 */
export function experienceHref(
  offeringId: string,
  programId: string,
  experienceType: string,
  resortId?: string
): string {
  const base = `${programHref(offeringId, programId)}/experiences/${experienceType}`;
  return resortId ? `${base}?resort=${encodeURIComponent(resortId)}` : base;
}

export interface InquireHrefParams {
  destination: string;
  resort?: string;
  room?: string;
  dining?: string;
  pool?: string;
  topic?: string;
  service?: string;
  holiday?: string;
}

/**
 * Centralizes the /inquire?... querystring builder. Every resort/program section used to
 * hand-build this string with a hardcoded resort slug (e.g. "resort=edition") baked in —
 * this is the single place that logic now lives.
 */
export function inquireHref(params: InquireHrefParams): string {
  const search = new URLSearchParams();
  search.set("holiday", params.holiday ?? "passover-2027");
  search.set("destination", params.destination);
  if (params.resort) search.set("resort", params.resort);
  if (params.room) search.set("room", params.room);
  if (params.dining) search.set("dining", params.dining);
  if (params.pool) search.set("pool", params.pool);
  if (params.topic) search.set("topic", params.topic);
  if (params.service) search.set("service", params.service);
  return `/inquire?${search.toString()}`;
}

/** Every Passover program has its own terms and conditions page. */
export function termsHref(programId: string): string {
  return `/terms/${programId}`;
}

/** The footer link the Terms & Conditions entry carries; its real target depends on the page (see `termsHrefForPath`). */
export const TERMS_FOOTER_HREF = "#terms";

/**
 * Where the footer's Terms & Conditions link goes from `pathname`: the terms of the program whose pages
 * (/offerings/[offeringId]/programs/[programId]/...) or terms page the visitor is on, `null` everywhere else
 * (home page, year-round Casa Nizuc, weddings, ...), where the link is not shown.
 */
export function termsHrefForPath(pathname: string): string | null {
  const match = pathname.match(/^\/offerings\/[^/]+\/programs\/([^/]+)/) ?? pathname.match(/^\/terms\/([^/]+)/);
  return match ? termsHref(match[1]) : null;
}

/**
 * The year-round Casa Nizuc page (client 2026-10-22: completely separate from Diamond Blue's Casa Nizuc under Passover). Every "Casa Nizuc" link of the home page,
 * the header and the footer points here.
 */
export const CASA_NIZUC_HREF = "/casa-nizuc";
export const REQUEST_A_QUOTE_HREF = "/request-a-quote";

/** Login page (design only for now). `brand=guettaway` shows the Guettaway branding on the other domains' Guettaway pages. */
export const LOGIN_HREF = "/login";
export const GUETTAWAY_LOGIN_HREF = "/login?brand=guettaway";
