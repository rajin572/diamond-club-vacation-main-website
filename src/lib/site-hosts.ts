import { PASSOVER_OFFERING_ID, offeringHref, programHref } from "./routes";

/**
 * One build is served on three domains (client 2026-10-25):
 *  - dcvacations.com            the whole site ("main")
 *  - dcpassovervacations.com    opens on the Passover collection; its logo opens the main site in a new tab ("passover")
 *  - guettaways.com             opens on the Guettaway program ("guettaway")
 * `.+` after the dot also accepts `.localhost`, so each site can be tried locally (http://guettaways.localhost:3000).
 */
export type SiteId = "main" | "passover" | "guettaway";

export const MAIN_SITE_URL = "https://dcvacations.com";

export const SATELLITE_SITES = {
  passover: { hostPattern: "(www\\.)?dcpassovervacations\\..+", homePath: offeringHref(PASSOVER_OFFERING_ID) },
  guettaway: { hostPattern: "(www\\.)?guettaways\\..+", homePath: programHref(PASSOVER_OFFERING_ID, "guttaway") },
} satisfies Record<string, { hostPattern: string; homePath: string }>;

export function siteIdFromHostname(hostname: string): SiteId {
  for (const [siteId, site] of Object.entries(SATELLITE_SITES)) {
    if (new RegExp(`^${site.hostPattern}$`, "i").test(hostname)) return siteId as SiteId;
  }
  return "main";
}

/** Attribute on <html> that tells the CSS which site this is (see SITE_DETECT_SCRIPT). */
export const SITE_ATTR = "data-site";

/**
 * Runs before the page paints (inline in <body>) and sets `data-site` on <html>, so the links hidden on a satellite site
 * (`data-hide-on` in design.css) are never shown, not even for the moment before React has loaded.
 */
export const SITE_DETECT_SCRIPT = `(function(){try{
var h=location.hostname,p=${JSON.stringify(
  Object.fromEntries(Object.entries(SATELLITE_SITES).map(([siteId, site]) => [siteId, site.hostPattern]))
)};
for(var k in p){if(new RegExp("^"+p[k]+"$","i").test(h)){document.documentElement.setAttribute("${SITE_ATTR}",k);break}}
}catch(e){}})();`;
