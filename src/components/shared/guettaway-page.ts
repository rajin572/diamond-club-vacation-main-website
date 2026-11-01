import { resolveDetailedExperience } from "@/components/inquire/inquire.data";
import { getInquireContext } from "@/lib/inquire-context";
import { GUETTAWAY_PROGRAM_ID } from "@/lib/routes";

/** The Inquire and Request a Quote pages (no action button in the header, and the program comes from `?destination=`). */
export function isInquirePath(pathname: string | null): boolean {
  if (!pathname) return false;
  return (
    pathname === "/inquire" ||
    pathname.startsWith("/inquire/") ||
    pathname === "/request-a-quote" ||
    pathname.startsWith("/request-a-quote/")
  );
}

export function isLoginPath(pathname: string | null): boolean {
  return pathname === "/login" || (pathname ? pathname.startsWith("/login/") : false);
}

/**
 * Whether the visitor is on a Guettaway page of any site: the Guettaway program and everything under it (its hotels, experiences...),
 * the Inquire page about it, its terms page, or the login page opened from one of them. guettaways.com itself is not covered here:
 * it is detected by CSS from <html data-site> (lib/site-hosts). Shared by the header brand and the footer's social icons.
 */
export function isGuettawayPage(pathname: string | null, search: string): boolean {
  const params = new URLSearchParams(search);
  // The Inquire page itself is not inside a program, so it takes the program from its ?destination= (client 2026-10-31).
  const inquiringAboutGuettaway =
    isInquirePath(pathname) &&
    /guettaway/i.test(resolveDetailedExperience(params.get("destination") ?? params.get("program"), params.get("resort")).label);
  // The program's terms page (/terms/guttaway) is a Guettaway page too (client 2026-10-31).
  const termsProgramId = pathname ? /^\/terms\/([^/]+)/.exec(pathname)?.[1] : undefined;
  // The login page opened from a Guettaway page (/login?brand=guettaway) keeps the Guettaway brand (client 2026-10-31).
  const loginForGuettaway = isLoginPath(pathname) && params.get("brand") === "guettaway";
  return (
    getInquireContext(pathname, search)?.programId === GUETTAWAY_PROGRAM_ID ||
    inquiringAboutGuettaway ||
    termsProgramId === GUETTAWAY_PROGRAM_ID ||
    loginForGuettaway
  );
}
