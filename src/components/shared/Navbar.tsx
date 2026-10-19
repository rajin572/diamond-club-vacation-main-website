"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV } from "./nav.data";
import { MobileMenu } from "./MobileMenu";
import { getInquireContext } from "@/lib/inquire-context";
import { inquireHref } from "@/lib/routes";
import { AllImages } from "../../../public/images/AllImages";

function subscribeToLocation(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

/** Announcement bar + sticky header with the brand mark and the context-aware action button (the Brochure buttons live on the program pages). */
export function Navbar() {
  const pathname = usePathname();
  // Read the query string without useSearchParams, which would force a Suspense boundary around the whole header.
  const search = useSyncExternalStore(subscribeToLocation, () => window.location.search, () => "");

  // Inquire inside a program or one of its hotels (locked to that program, and hotel when there is one); Contact elsewhere.
  const inquiry = getInquireContext(pathname, search);
  const actionLabel = inquiry ? "INQUIRE" : "CONTACT";
  const actionHref = inquiry ? inquireHref({ destination: inquiry.programId, resort: inquiry.resortId }) : "/contact";

  return (
    <>
      <div className="dcv-top">LUXURY KOSHER HOSPITALITY · WORLDWIDE</div>
      <header className="dcv-header">
        <div className="dcv-nav">
          {/* Left side brand: round seal badge + vertical divider + DIAMOND CLUB / VACATIONS */}
          <Link className="dcv-brand" href="/" aria-label="Diamond Club Vacations home">
            <Image
              src={AllImages.logo}
              alt="Diamond Club Vacations"
              width={54}
              height={54}
              priority
              className="dcv-brand-badge"
            />
            <span className="dcv-brand-divider" aria-hidden="true" />
            <div className="dcv-brand-text">
              <span className="dcv-brand-title">DIAMOND CLUB</span>
              <span className="dcv-brand-sub">VACATIONS</span>
            </div>
          </Link>

          <nav className="dcv-navlinks" aria-label="Primary">
            {PRIMARY_NAV.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}

            {/* Inquire inside a program / hotel; Contact on all other pages */}
            <Link className="dcv-btn" href={actionHref}>
              {actionLabel}
            </Link>
          </nav>

          <MobileMenu
            links={PRIMARY_NAV}
            inquire={{ label: actionLabel, href: actionHref }}
            isPassoverPage={Boolean(inquiry)}
          />
        </div>
      </header>
    </>
  );
}

export default Navbar;
