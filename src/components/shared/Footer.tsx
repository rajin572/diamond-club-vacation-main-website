import Link from "next/link";
import { TERMS_FOOTER_HREF } from "@/lib/routes";
import { FOOTER_BLURB, FOOTER_COLUMNS } from "./nav.data";
import TermsFooterLink from "./TermsFooterLink";

/** Four-column dark footer with the rounded top (client design: `footer`). */
export function Footer() {
  return (
    <footer className="dcv-footer">
      <div className="dcv-footer-inner">
        <div>
          <Link className="dcv-logo" data-hide-on="guettaway" href="/" aria-label="Diamond Club Vacations home">
            DIAMOND CLUB<small>VACATIONS</small>
          </Link>
          {/* guettaways.com: "DIAMOND CLUB / PRODUCTION", like the header (shown by CSS, see design.css). */}
          <Link className="dcv-logo dcv-logo--guettaway" href="/" aria-label="Diamond Club Production, Guettaway home">
            DIAMOND CLUB<small>PRODUCTION</small>
          </Link>
          <p>{FOOTER_BLURB}</p>
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title} data-hide-on={column.hiddenOn?.join(" ")}>
            <h4>{column.title}</h4>
            {column.links.map((link) => (
              link.href === TERMS_FOOTER_HREF ? (
                <TermsFooterLink key={`${column.title}-${link.label}`} label={link.label} />
              ) : (
                <Link key={`${column.title}-${link.label}`} href={link.href}>
                  {link.label}
                </Link>
              )
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
