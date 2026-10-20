import Image from "next/image";
import type { ReactNode } from "react";
import { AllImages } from "../../public/images/AllImages";

const GUETTAWAY_TITLE = /^guettaway,?\s+a diamond club production$/i;

/**
 * Guettaway is always written in capitals, with "A Diamond Club Production" on the line below (client request,
 * 2026-10-19), and the Guettaway logo stands next to the name (client request, 2026-10-20). Every other title is returned unchanged.
 */
export function formatProgramTitle(text: string): ReactNode {
  if (!GUETTAWAY_TITLE.test(text.trim())) return text;
  return (
    <span className="dcv-title-with-logo">
      <Image className="dcv-title-logo" src={AllImages.guettawayLogo} alt="" sizes="120px" />
      <span>
        GUETTAWAY
        <br />
        <span className="dcv-title-sub">A Diamond Club Production</span>
      </span>
    </span>
  );
}

/** The same title as one line of plain text, for page titles and aria labels. */
export function plainProgramTitle(text: string): string {
  return GUETTAWAY_TITLE.test(text.trim()) ? "GUETTAWAY, A Diamond Club Production" : text;
}
