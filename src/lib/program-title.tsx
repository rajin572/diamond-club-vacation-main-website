import Image from "next/image";
import type { ReactNode } from "react";
import { AllImages } from "../../public/images/AllImages";

const GUETTAWAY_TITLE = /^guettaway,?\s+a diamond club production$/i;

/**
 * Guettaway is shown with its logo next to the name (client request 2026-10-20). The Reserve and Blue logos were taken off again on
 * 2026-10-22 (the files stay in the image registry: reserveLogo, blueLogo). Guettaway is always written in capitals, with "A Diamond Club Production" on the line below (client request, 2026-10-19).
 * Every other title is returned unchanged. The logos have a transparent background: on a dark banner (`onDark`) the white version is used, on a light card the colored one.
 */
export function formatProgramTitle(text: string, onDark = false): ReactNode {
  const title = text.trim();
  if (GUETTAWAY_TITLE.test(title)) {
    return (
      <span className="dcv-title-with-logo">
        <Image className="dcv-title-logo" src={onDark ? AllImages.guettawayLogoWhite : AllImages.guettawayLogo} alt="" sizes="120px" />
        <span>
          GUETTAWAY
          <br />
          <span className="dcv-title-sub">A Diamond Club Production</span>
        </span>
      </span>
    );
  }
  return text;
}

/** The same title as one line of plain text, for page titles and aria labels. */
export function plainProgramTitle(text: string): string {
  return GUETTAWAY_TITLE.test(text.trim()) ? "GUETTAWAY, A Diamond Club Production" : text;
}
