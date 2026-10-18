"use client";

import { useEffect } from "react";
import { Download, ExternalLink, X } from "lucide-react";

interface BrochureModalProps {
  open: boolean;
  onClose: () => void;
}

export function BrochureModal({ open, onClose }: BrochureModalProps) {
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

  return (
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
            Passover 2027 Brochure
          </h2>

          <div className="dcv-brochure-actions">
            <a
              href="/brochure.pdf"
              download="Diamond-Club-Vacations-Passover-2027-Brochure.pdf"
              className="dcv-btn dcv-brochure-dl-btn"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
            <a
              href="/brochure.pdf"
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
              src="/brochure.pdf#view=FitH"
              title="Diamond Club Vacations Passover 2027 Brochure"
              className="dcv-brochure-iframe"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrochureModal;
