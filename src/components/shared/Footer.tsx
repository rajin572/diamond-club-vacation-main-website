import Link from "next/link";
import { GUETTAWAY_CONTACT_DETAILS, InstagramIcon, WhatsAppIcon } from "@/components/contact/ContactDetails";
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
                <Link key={`${column.title}-${link.label}`} href={link.href} data-hide-on={link.hiddenOn?.join(" ")}>
                  {link.label}
                </Link>
              )
            ))}
          </div>
        ))}
        {/* guettaways.com: Guettaway's WhatsApp and Instagram as round icons on the right (shown by CSS, see design.css). */}
        <div className="dcv-only-guettaway dcv-only-guettaway--block dcv-footer-social-col">
          <div className="dcv-footer-social-row">
            <a
              className="dcv-footer-social dcv-footer-social--whatsapp"
              href={GUETTAWAY_CONTACT_DETAILS.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${GUETTAWAY_CONTACT_DETAILS.whatsapp.display}`}
            >
              <WhatsAppIcon size={22} />
            </a>
            {GUETTAWAY_CONTACT_DETAILS.instagram.map((account) => (
              <a
                key={account.label}
                className="dcv-footer-social"
                href={account.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`@${account.label} on Instagram`}
              >
                <InstagramIcon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
