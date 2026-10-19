"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Download, ExternalLink, X } from "lucide-react";

interface BrochureModalProps {
  open: boolean;
  onClose: () => void;
  /** The PDF to show; every program has its own brochure. */
  pdfHref?: string;
  /** Heading of the pop-up, e.g. "GUETTAWAY Brochure". */
  title?: string;
  /** File name offered by the Download button. */
  downloadName?: string;
}

export function BrochureModal({
  open,
  onClose,
  pdfHref = "/brochure.pdf",
  title = "Passover 2027 Brochure",
  downloadName = "Diamond-Club-Vacations-Passover-2027-Brochure.pdf",
}: BrochureModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  // Portal to <body> so the sticky navbar / hero stacking contexts can never cover the modal.
  return createPortal(
    <div
      className="dcv-brochure-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
      onClick={onClose}
    >
      <div
        className="dcv-brochure-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="dcv-brochure-close"
          onClick={onClose}
          aria-label="Close brochure modal"
        >
          <X size={20} />
        </button>

        <div className="dcv-brochure-header">
          <h2 id="brochure-modal-title" className="dcv-brochure-title">
            {title}
          </h2>

          <div className="dcv-brochure-actions">
            <a
              href={pdfHref}
              download={downloadName}
              className="dcv-btn dcv-brochure-dl-btn"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
            <a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="dcv-btn dcv-btn--ghost dcv-brochure-view-btn"
            >
              <ExternalLink size={16} />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>

        <div className="dcv-brochure-preview-wrap">
          <div className="dcv-brochure-frame-container">
            <iframe
              src={`${pdfHref}#view=FitH`}
              title={title}
              className="dcv-brochure-iframe"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default BrochureModal;
