import { ExternalLink } from "lucide-react";
import type { ProgramBrochure } from "./programs.types";

/**
 * The program's own Brochure button (every program has a different brochure). It opens the PDF in a new tab, where the
 * visitor can download it if they want: no pop-up, no direct download (client request 2026-10-26, was a direct download on 2026-10-22).
 */
export function ProgramBrochureButton({ brochure }: { brochure: ProgramBrochure }) {
  return (
    <a
      className="dcv-btn dcv-brochure-btn"
      href={brochure.pdfHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the ${brochure.title} in a new tab`}
    >
      <ExternalLink size={16} aria-hidden="true" />
      <span>Brochure</span>
    </a>
  );
}

export default ProgramBrochureButton;
