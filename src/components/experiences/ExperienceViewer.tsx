"use client";

import { useCallback, useEffect, useRef } from "react";
import type { TouchEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPinned, X } from "lucide-react";
import type { DesignImage } from "@/components/shared/design";
import type { ExperienceFact } from "./experiences.types";

export interface ViewerSlide {
  id: string;
  title: string;
  image: DesignImage;
  imageFocus?: "top" | "center";
  tag?: string;
  paragraphs: string[];
  facts?: ExperienceFact[];
  mapUrl?: string;
}

interface ExperienceViewerProps {
  /** Heading shown top-left, e.g. "Entertainment". */
  heading: string;
  slides: ViewerSlide[];
  index: number;
  layout: "cards" | "people";
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const SWIPE_DISTANCE = 50;

const pad = (value: number) => String(value).padStart(2, "0");

function Dots({ count, index, onSelect }: { count: number; index: number; onSelect: (index: number) => void }) {
  if (count < 2) return null;

  return (
    <div className="dcv-xv-dots" role="tablist" aria-label="Choose item">
      {Array.from({ length: count }, (_, dot) => (
        <button
          key={dot}
          type="button"
          role="tab"
          aria-selected={dot === index}
          aria-label={`Item ${dot + 1} of ${count}`}
          className={dot === index ? "dcv-on" : undefined}
          onClick={() => onSelect(dot)}
        />
      ))}
    </div>
  );
}

/**
 * Full-screen carousel for the "See details" links (client app: Entertainment / Attractions / Scholars details):
 * swipe, arrow keys, arrow buttons or dots move between items; Escape, the backdrop or × closes it.
 */
export function ExperienceViewer({ heading, slides, index, layout, onIndexChange, onClose }: ExperienceViewerProps) {
  const count = slides.length;
  const slide = slides[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((target: number) => onIndexChange((target + count) % count), [count, onIndexChange]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (count > 1 && event.key === "ArrowLeft") go(index - 1);
      if (count > 1 && event.key === "ArrowRight") go(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, go, index, onClose]);

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (event: TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null || count < 2) return;
    const delta = (event.changedTouches[0]?.clientX ?? start) - start;
    if (Math.abs(delta) >= SWIPE_DISTANCE) go(delta < 0 ? index + 1 : index - 1);
  };

  const focusClass = slide.imageFocus === "top" ? "dcv-focus-top" : undefined;

  return (
    <div className="dcv-xv-backdrop" data-lenis-prevent onClick={onClose}>
      <div
        className="dcv-xv"
        role="dialog"
        aria-modal="true"
        aria-label={`${heading}: ${slide.title}`}
        onClick={(event) => event.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <header className="dcv-xv-head">
          <div>
            <b>{heading}</b>
            {count > 1 && (
              <span aria-label={`Item ${index + 1} of ${count}`}>
                {pad(index + 1)}/{pad(count)}
              </span>
            )}
          </div>
          <button ref={closeRef} type="button" className="dcv-xv-close" aria-label="Close" onClick={onClose}>
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        <div className="dcv-xv-stage">
          {count > 1 && (
            <button type="button" className="dcv-xv-nav dcv-xv-prev" aria-label="Previous" onClick={() => go(index - 1)}>
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
          )}

          {layout === "people" ? (
            <article key={slide.id} className="dcv-xv-card dcv-xv-person" aria-live="polite">
              <div className="dcv-xv-avatar">
                <Image src={slide.image} alt={slide.title} fill sizes="168px" />
              </div>
              <div className="dcv-xv-bio">
                <h3>{slide.title}</h3>
                {slide.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Dots count={count} index={index} onSelect={onIndexChange} />
            </article>
          ) : (
            <article key={slide.id} className="dcv-xv-card" aria-live="polite">
              <div className="dcv-xv-media">
                <Image className="dcv-xv-backdrop-img" src={slide.image} alt="" fill sizes="40px" aria-hidden="true" />
                <Image className={focusClass} src={slide.image} alt={slide.title} fill sizes="(max-width: 700px) 92vw, 560px" />
              </div>
              <Dots count={count} index={index} onSelect={onIndexChange} />
              <div className="dcv-xv-text">
                {slide.tag && <div className="dcv-card-tag">{slide.tag}</div>}
                <h3>{slide.title}</h3>
                {slide.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {slide.facts && slide.facts.length > 0 && (
                  <dl className="dcv-facts">
                    {slide.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt>{fact.label}</dt>
                        <dd>{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {slide.mapUrl && (
                  <a className="dcv-btn dcv-btn--ghost dcv-xv-map" href={slide.mapUrl} target="_blank" rel="noopener noreferrer">
                    <MapPinned size={18} aria-hidden="true" />
                    See on map
                  </a>
                )}
              </div>
            </article>
          )}

          {count > 1 && (
            <button type="button" className="dcv-xv-nav dcv-xv-next" aria-label="Next" onClick={() => go(index + 1)}>
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExperienceViewer;
