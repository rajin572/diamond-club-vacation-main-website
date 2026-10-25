"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { termsHrefForPath } from "@/lib/routes";

/** Footer link to the terms of the program the visitor is browsing; renders nothing outside the Passover program pages. */
export function TermsFooterLink({ label }: { label: string }) {
  const href = termsHrefForPath(usePathname());
  return href ? <Link href={href}>{label}</Link> : null;
}

export default TermsFooterLink;
