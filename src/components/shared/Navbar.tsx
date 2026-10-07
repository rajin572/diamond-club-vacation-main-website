import Link from "next/link";
import { INQUIRE_LINK, PRIMARY_NAV } from "./nav.data";
import { MobileMenu } from "./MobileMenu";

/** Announcement bar + sticky header (client design: `.top` + `header`). */
export function Navbar() {
  return (
    <>
      <div className="dcv-top">LUXURY KOSHER HOSPITALITY · WORLDWIDE</div>
      <header className="dcv-header">
        <div className="dcv-nav">
          <Link className="dcv-logo" href="/" aria-label="Diamond Club Vacations home">
            DIAMOND CLUB<small>VACATIONS</small>
          </Link>
          <nav className="dcv-navlinks" aria-label="Primary">
            {PRIMARY_NAV.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link className="dcv-btn" href={INQUIRE_LINK.href}>
              {INQUIRE_LINK.label}
            </Link>
          </nav>
          <MobileMenu links={PRIMARY_NAV} inquire={INQUIRE_LINK} />
        </div>
      </header>
    </>
  );
}

export default Navbar;
