"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
import type { DesignLink } from "./design/types";

interface MobileMenuProps {
  links: DesignLink[];
  inquire: DesignLink;
  onOpenBrochure?: () => void;
  isPassoverPage?: boolean;
}

/** Hamburger + dropdown shown below 900px, where the client's design hides the link row. */
export function MobileMenu({ links, inquire, onOpenBrochure, isPassoverPage }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Collapse the menu after any navigation.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  const buttonLabel = inquire?.label ?? (isPassoverPage ? "Inquire" : "Contact");
  const buttonHref = inquire?.href ?? (isPassoverPage ? "/inquire?holiday=passover-2027" : "/contact");

  return (
    <>
      <button
        type="button"
        className="dcv-menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="dcv-mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <nav id="dcv-mobile-menu" className="dcv-mobile-menu" aria-label="Mobile">
          {/* Brochure button placed before Passover */}
          <button
            type="button"
            className="dcv-mobile-brochure-link"
            onClick={() => {
              setOpen(false);
              onOpenBrochure?.();
            }}
          >
            <span className="dcv-brochure-pulse-dot" aria-hidden="true" />
            <FileText size={16} />
            <span>Brochure</span>
          </button>

          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link className="dcv-btn" href={buttonHref}>
            {buttonLabel}
          </Link>
        </nav>
      )}
    </>
  );
}

export default MobileMenu;
