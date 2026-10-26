"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { DesignImage } from "./types";

export interface InfoCardData {
  id: string;
  image: DesignImage;
  title: string;
  /** Short blurb on the card. */
  description?: string;
  /** Link text on the card (default "Explore →", like the other cards). */
  linkLabel?: string;
  alt?: string;
  /** Small gold line above the pop-up title. */
  kicker?: string;
  /** Line under the pop-up title. */
  subtitle?: string;
  /** The pop-up's content. */
  children: ReactNode;
}

const CARD_SIZES = "(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw";

/** Pop-up with a title bar and a scrolling body; closes on the X, Escape, the backdrop or the Close button (same look as the dining pop-ups). */
export function InfoModal({ card, onClose }: { card: InfoCardData; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="dcv-brochure-overlay dcv-modal-3d-stage" role="dialog" aria-modal="true" aria-label={card.title} onClick={onClose}>
      <div className="dcv-brochure-modal dcv-dining-popup-modal dcv-info-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="dcv-brochure-close" onClick={onClose} aria-label={`Close ${card.title}`}>
          <X size={20} />
        </button>

        <div className="dcv-brochure-header">
          <div>
            {card.kicker && <div className="dcv-brochure-kicker">{card.kicker}</div>}
            <h2 className="dcv-brochure-title">{card.title}</h2>
            {card.subtitle && <p className="dcv-brochure-sub">{card.subtitle}</p>}
          </div>
        </div>

        <div className="dcv-brochure-preview-wrap" data-lenis-prevent>
          <div className="dcv-info-modal-photo">
            <Image src={card.image} alt={card.alt ?? ""} sizes="(max-width: 900px) 100vw, 800px" priority />
          </div>
          <div className="dcv-dining-modal-bio dcv-info-modal-body">{card.children}</div>
          <div className="dcv-dining-modal-footer">
            <button type="button" className="dcv-btn dcv-btn--primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface InfoCardGridProps {
  cards: InfoCardData[];
  /** Grid class: dcv-grid2 / dcv-grid3 / dcv-grid4. */
  gridClass?: string;
  /** One big card in the middle of the row (like the Dining card). */
  featured?: boolean;
}

/**
 * Image cards that open a pop-up with the details (client 2026-10-26: the main Casa Nizuc page uses the same cards and pop-ups as the
 * Passover hotel pages). The whole card is the button, like the Kosher Supervision and Chefs cards.
 */
export function InfoCardGrid({ cards, gridClass = "dcv-grid3", featured = false }: InfoCardGridProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = cards.find((card) => card.id === activeId);

  return (
    <>
      <div className={gridClass}>
        {cards.map((card) => (
          <article key={card.id} className={`dcv-card dcv-card--tilt${featured ? " dcv-card--featured" : ""}`}>
            <Image src={card.image} alt={card.alt ?? ""} sizes={featured ? "(max-width: 900px) 100vw, 900px" : CARD_SIZES} />
            <div className="dcv-body">
              <h3>{card.title}</h3>
              {card.description && <p>{card.description}</p>}
              <button type="button" className="dcv-link" aria-haspopup="dialog" onClick={() => setActiveId(card.id)}>
                {card.linkLabel ?? "Explore →"}
              </button>
            </div>
          </article>
        ))}
      </div>
      {active && <InfoModal card={active} onClose={() => setActiveId(null)} />}
    </>
  );
}
