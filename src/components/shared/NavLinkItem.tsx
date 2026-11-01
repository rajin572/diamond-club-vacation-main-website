import { SectionLink } from "./design/SectionLink";
import type { DesignLink } from "./design/types";

/** A header or mobile-menu link, hidden or shown per site (CSS, keyed on <html data-site>, see lib/site-hosts). */
export function NavLinkItem({ link }: { link: DesignLink }) {
  const item = (
    <SectionLink href={link.href} data-hide-on={link.hiddenOn?.join(" ")}>
      {link.label}
    </SectionLink>
  );
  return link.onlyOnGuettaway ? <span className="dcv-only-guettaway dcv-only-guettaway--block">{item}</span> : item;
}

export default NavLinkItem;
