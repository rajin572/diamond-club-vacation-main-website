import { SATELLITE_SITES } from "@/lib/site-hosts";
import type { EmailBrand } from "./templates";

/** The Guettaway domain (guettaways.com), read from the page the form was sent from. */
function fromGuettawayDomain(request: Request) {
  const source = request.headers.get("origin") ?? request.headers.get("referer");
  let host = request.headers.get("host") ?? "";
  try {
    if (source) host = new URL(source).hostname;
  } catch {
    // keep the Host header
  }
  return new RegExp(`^${SATELLITE_SITES.guettaway.hostPattern}$`, "i").test(host.split(":")[0]);
}

/** Guettaway branding when the form was sent from the Guettaway site, or for an inquiry about the Guettaway program. */
export function emailBrandFor(request: Request, experienceId?: string): EmailBrand {
  return experienceId === "guttaway" || fromGuettawayDomain(request) ? "guettaway" : "dcv";
}
