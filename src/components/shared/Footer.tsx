import Link from "next/link";
import { FOOTER_BLURB, FOOTER_COLUMNS } from "./nav.data";

/** Four-column dark footer with the rounded top (client design: `footer`). */
export function Footer() {
  return (
    <footer className="dcv-footer">
      <div className="dcv-footer-inner">
        <div>
          <Link className="dcv-logo" href="/" aria-label="Diamond Club Vacations home">
            DIAMOND CLUB<small>VACATIONS</small>
          </Link>
          <p>{FOOTER_BLURB}</p>
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h4>{column.title}</h4>
            {column.links.map((link) => (
              <Link key={`${column.title}-${link.label}`} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
