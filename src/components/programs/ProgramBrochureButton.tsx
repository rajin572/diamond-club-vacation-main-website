"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { BrochureModal } from "@/components/shared/BrochureModal";
import type { ProgramBrochure } from "./programs.types";

/** The program's own Brochure button (every program has a different brochure) with its pop-up viewer. */
export function ProgramBrochureButton({ brochure }: { brochure: ProgramBrochure }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className="dcv-btn dcv-brochure-btn" onClick={() => setOpen(true)} aria-label={`Open the ${brochure.title}`}>
        <FileText size={16} aria-hidden="true" />
        <span>Brochure</span>
      </button>
      <BrochureModal
        open={open}
        onClose={() => setOpen(false)}
        pdfHref={brochure.pdfHref}
        title={brochure.title}
        downloadName={brochure.downloadName}
      />
    </>
  );
}

export default ProgramBrochureButton;
