"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV } from "./nav.data";
import { MobileMenu } from "./MobileMenu";
import { getExperiencesHref, getInquireContext } from "@/lib/inquire-context";
import { SectionLink } from "./design/SectionLink";
import { REQUEST_A_QUOTE_HREF, inquireHref } from "@/lib/routes";
import { MAIN_SITE_URL } from "@/lib/site-hosts";
import { AllImages } from "../../../public/images/AllImages";

const GUETTAWAY_PROGRAM_ID = "guttaway";

function subscribeToLocation(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

/** Round seal badge + vertical divider + DIAMOND CLUB / VACATIONS (client design). */
function DiamondClubBrand() {
  return (
    <>
      <Image src={AllImages.logo} alt="Diamond Club Vacations" width={54} height={54} priority className="dcv-brand-badge" />
      <span className="dcv-brand-divider" aria-hidden="true" />
      <div className="dcv-brand-text">
        <span className="dcv-brand-title">DIAMOND CLUB</span>
        <span className="dcv-brand-sub">VACATIONS</span>
      </div>
    </>
  );
}

/** Announcement bar + sticky header with the brand mark and the context-aware action button (the Brochure buttons live on the program pages). */
export function Navbar() {
  const pathname = usePathname();
  // Read the query string without useSearchParams, which would force a Suspense boundary around the whole header.
  const search = useSyncExternalStore(subscribeToLocation, () => window.location.search, () => "");

  // Inquire inside a program or one of its hotels (locked to that program, and hotel when there is one);
  // Request a Quote on regular Casa Nizuc (/casa-nizuc and /casa-nizuc/[section]); Contact elsewhere.
  const isCasaNizuc = pathname === "/casa-nizuc/" || (pathname ? pathname.startsWith("/casa-nizuc/") : false);
  const inquiry = getInquireContext(pathname, search);
  const actionLabel = isCasaNizuc ? "REQUEST A QUOTE" : inquiry ? "INQUIRE" : "CONTACT";
  const actionHref = isCasaNizuc
    ? REQUEST_A_QUOTE_HREF
    : inquiry
      ? inquireHref({ destination: inquiry.programId, resort: inquiry.resortId })
      : "/contact";
  // On the Inquire or Request a Quote page itself there is no action button (client 2026-10-22).
  // "About" always leads to the main About page (/about) per client specification.
  // "Experiences" shows the experiences of the hotel the visitor is in, or the main Experiences page elsewhere.
  const experiencesHref = getExperiencesHref(pathname, search);
  const navLinks = PRIMARY_NAV.map((link) =>
    link.href === "/experiences" ? { ...link, href: experiencesHref } : link
  );
  const onInquirePage =
    pathname === "/inquire" ||
    (pathname ? pathname.startsWith("/inquire/") : false) ||
    pathname === "/request-a-quote" ||
    (pathname ? pathname.startsWith("/request-a-quote/") : false);
  // Guettaway pages (its own domain, or the program and its hotels on the other sites) swap the main brand for the Guettaway one (client 2026-10-26).
  const onGuettawayPage = inquiry?.programId === GUETTAWAY_PROGRAM_ID;

  return (
    <>
      <div className="dcv-top">LUXURY KOSHER HOSPITALITY · WORLDWIDE</div>
      <header className="dcv-header">
        <div className="dcv-nav">
          {/* Left side brand. Each site shows its own block (CSS, keyed on <html data-site>, see lib/site-hosts), so the right one is there before React loads. */}
          {!onGuettawayPage && (
            <Link className="dcv-brand" data-hide-on="passover guettaway" href="/" aria-label="Diamond Club Vacations home">
              <DiamondClubBrand />
            </Link>
          )}

          {/* dcpassovervacations.com only: the logo and the name open the main site in a new tab (client 2026-10-25). */}
          {!onGuettawayPage && (
            <a
              className="dcv-brand dcv-brand--passover"
              href={MAIN_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Diamond Club Vacations home (opens in a new tab)"
            >
              <DiamondClubBrand />
            </a>
          )}

          {/* Guettaway: the Guettaway logo replaces the Diamond Club seal, next to "DIAMOND CLUB PRODUCTION" (client 2026-10-26; the logo in the hero stays).
              Shown by CSS on guettaways.com (see design.css), and by `--on` on the Guettaway program's pages of the other sites. "/" leads to the Guettaway page there (client 2026-10-25). */}
          <Link
            className={`dcv-brand dcv-brand--guettaway${onGuettawayPage ? " dcv-brand--on" : ""}`}
            href="/"
            aria-label="Diamond Club Production, Guettaway home"
          >
            <Image src={AllImages.guettawayLogo} alt="Guettaway" width={42} height={52} priority className="dcv-brand-seal" />
            <span className="dcv-brand-divider" aria-hidden="true" />
            <div className="dcv-brand-text">
              <span className="dcv-brand-title">DIAMOND CLUB</span>
              <span className="dcv-brand-sub">PRODUCTION</span>
            </div>
          </Link>

          <nav className="dcv-navlinks" aria-label="Primary">
            {navLinks.map((link) => (
              <SectionLink key={link.label} href={link.href} data-hide-on={link.hiddenOn?.join(" ")}>
                {link.label}
              </SectionLink>
            ))}

            {/* Inquire inside a program / hotel; Contact on all other pages */}
            {!onInquirePage && (
              <Link className="dcv-btn" href={actionHref}>
                {actionLabel}
              </Link>
            )}
          </nav>

          <MobileMenu
            links={navLinks}
            inquire={{ label: actionLabel, href: actionHref }}
            isPassoverPage={Boolean(inquiry)}
            hideAction={onInquirePage}
          />
        </div>
      </header>
    </>
  );
}

export default Navbar;
