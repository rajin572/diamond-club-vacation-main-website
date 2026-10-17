"use client";

import { useEffect } from "react";
import { Download, ExternalLink, X, FileText, CheckCircle2 } from "lucide-react";

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
          <div className="dcv-brochure-kicker">PASSOVER COLLECTION 2027</div>
          <h2 id="brochure-modal-title" className="dcv-brochure-title">
            Diamond Club Vacations Brochure
          </h2>
          <p className="dcv-brochure-sub">
            Preview our official Passover 2027 guide featuring destinations, luxury resorts, gourmet culinary programs, and exclusive accommodations.
          </p>

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
          <div className="dcv-brochure-summary-card">
            <div className="dcv-brochure-highlights-badge">
              <FileText size={14} />
              <span>Brochure Highlights</span>
            </div>
            <div className="dcv-brochure-features-list">
              <div className="dcv-brochure-feat">
                <CheckCircle2 size={16} className="dcv-feat-icon" />
                <div>
                  <strong>guettaway a Diamond Club production</strong>
                  <span>Waldorf Astoria & Park Hyatt Riviera Maya</span>
                </div>
              </div>
              <div className="dcv-brochure-feat">
                <CheckCircle2 size={16} className="dcv-feat-icon" />
                <div>
                  <strong>Diamond Blue by DCV</strong>
                  <span>Casa Nizuc — Beachfront Luxury at Exceptional Value</span>
                </div>
              </div>
              <div className="dcv-brochure-feat">
                <CheckCircle2 size={16} className="dcv-feat-icon" />
                <div>
                  <strong>Diamond Club Reserve</strong>
                  <span>The St. Regis Kanai & The Riviera Maya EDITION</span>
                </div>
              </div>
              <div className="dcv-brochure-feat">
                <CheckCircle2 size={16} className="dcv-feat-icon" />
                <div>
                  <strong>Strictly Glatt Kosher Hospitality</strong>
                  <span>Celebrated Chefs, Full Tea Rooms, Kids Camps & Scholars</span>
                </div>
              </div>
            </div>
          </div>

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

