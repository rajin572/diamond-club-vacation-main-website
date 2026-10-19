import type { ReactNode } from "react";

const GUETTAWAY_TITLE = /^guettaway,?\s+a diamond club production$/i;

/**
 * Guettaway is always written in capitals, with "A Diamond Club Production" on the line below (client request,
 * 2026-10-19). Every other title is returned unchanged.
 */
export function formatProgramTitle(text: string): ReactNode {
  if (!GUETTAWAY_TITLE.test(text.trim())) return text;
  return (
    <>
      GUETTAWAY
      <br />
      <span className="dcv-title-sub">A Diamond Club Production</span>
    </>
  );
}

/** The same title as one line of plain text, for page titles and aria labels. */
export function plainProgramTitle(text: string): string {
  return GUETTAWAY_TITLE.test(text.trim()) ? "GUETTAWAY, A Diamond Club Production" : text;
}
