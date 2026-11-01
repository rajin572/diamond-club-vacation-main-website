"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GUETTAWAY_PROGRAM_ID, termsHref, termsHrefForPath } from "@/lib/routes";

/**
 * Footer link to the terms of the program the visitor is browsing. Outside the Passover program pages it renders nothing,
 * except on guettaways.com (CSS, keyed on <html data-site>), where it links to Guettaway's terms on every page.
 */
export function TermsFooterLink({ label }: { label: string }) {
  const href = termsHrefForPath(usePathname());
  if (href) return <Link href={href}>{label}</Link>;
  return (
    <span className="dcv-only-guettaway dcv-only-guettaway--block">
      <Link href={termsHref(GUETTAWAY_PROGRAM_ID)}>{label}</Link>
    </span>
  );
}

export default TermsFooterLink;
