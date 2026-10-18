"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { scrollToSection } from "@/lib/scroll-to-section";

/**
 * A `next/link` that also works for in-page `#section` links on every click. Without this, clicking the same
 * card twice does nothing because the URL hash has not changed; other hrefs behave like a normal Link.
 */
export function SectionLink({ href, onClick, ...rest }: ComponentProps<typeof Link>) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || typeof href !== "string" || !href.startsWith("#")) return;
    // Let the browser keep its behaviour for new-tab / modified clicks.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

    if (scrollToSection(href.slice(1))) event.preventDefault();
  };

  return <Link href={href} onClick={handleClick} {...rest} />;
}

export default SectionLink;
