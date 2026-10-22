import { Download } from "lucide-react";
import type { ProgramBrochure } from "./programs.types";

/**
 * The program's own Brochure button (every program has a different brochure). It downloads the PDF right away:
 * no pop-up and no preview (client request 2026-10-22).
 */
export function ProgramBrochureButton({ brochure }: { brochure: ProgramBrochure }) {
  return (
    <a
      className="dcv-btn dcv-brochure-btn"
      href={brochure.pdfHref}
      download={brochure.downloadName}
      aria-label={`Download the ${brochure.title}`}
    >
      <Download size={16} aria-hidden="true" />
      <span>Brochure</span>
    </a>
  );
}

export default ProgramBrochureButton;
