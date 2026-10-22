"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import Link from "next/link";
import ExperienceViewer from "./ExperienceViewer";
import type { ViewerSlide } from "./ExperienceViewer";
import type { ExperienceItem } from "./experiences.types";

export interface ExperienceCardItem extends ExperienceItem {
  /** Resolved URL for `linkTo` (the server knows the offering and program). */
  href?: string;
}

interface ExperienceCardsProps {
  items: ExperienceCardItem[];
  columns: 2 | 3;
  layout?: "cards" | "people";
  /** Heading of the details viewer. */
  viewerTitle: string;
}

/**
 * Card grid for entertainment, attractions, scholars and the kids program. "See details" opens a carousel
 * through every item that has details (client app: the list screens and their detail carousels).
 */
export function ExperienceCards({ items, columns, layout = "cards", viewerTitle }: ExperienceCardsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);

  const slides = useMemo<ViewerSlide[]>(
    () =>
      items
        .filter((item) => item.details && item.image && !item.tba)
        .map((item) => ({
          id: item.id,
          title: item.details!.title,
          image: item.image!,
          imageFocus: item.imageFocus,
          tag: item.details!.tag,
          paragraphs: item.details!.paragraphs,
          facts: item.details!.facts,
          mapUrl: item.details!.mapUrl,
        })),
    [items]
  );

  const open = (id: string) => {
    const index = slides.findIndex((slide) => slide.id === id);
    if (index >= 0) setActiveIndex(index);
  };

  return (
    <>
      <div className={columns === 2 ? "dcv-grid2" : "dcv-grid3"}>
        {items.map((item) => {
          const label = item.linkLabel ?? "See details →";
          const action = item.tba ? (
            <span className="dcv-meta">{item.linkLabel ?? "To be announced"}</span>
          ) : item.href ? (
            <Link className="dcv-link" href={item.href} aria-label={`${item.title}: ${label}`}>
              {label}
            </Link>
          ) : item.details ? (
            <button type="button" className="dcv-link" aria-label={`${item.title}: ${label}`} onClick={() => open(item.id)}>
              {label}
            </button>
          ) : null;

          return layout === "people" ? (
            <article key={item.id} className="dcv-card dcv-person-card">
              <div className="dcv-person-photo">
                {item.image ? (
                  <Image src={item.image} alt={item.title} fill sizes="132px" />
                ) : (
                  <span className="dcv-person-placeholder" aria-hidden="true">
                    <User size={64} strokeWidth={1.5} />
                  </span>
                )}
              </div>
              <div className="dcv-body">
                <h3>{item.title}</h3>
                {item.description && <p className="dcv-clamp">{item.description}</p>}
                {action}
              </div>
            </article>
          ) : (
            <article key={item.id} className={item.featured ? "dcv-card dcv-card--featured" : "dcv-card"}>
              {item.image && (
              <Image
                className={item.imageFocus === "top" ? "dcv-focus-top" : undefined}
                src={item.image}
                alt={item.title}
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
              )}
              <div className="dcv-body">
                {item.tag && <div className="dcv-card-tag">{item.tag}</div>}
                <h3>{item.title}</h3>
                {item.description && <p className="dcv-clamp">{item.description}</p>}
                {action}
              </div>
            </article>
          );
        })}
      </div>

      {activeIndex !== null && (
        <ExperienceViewer
          heading={viewerTitle}
          slides={slides}
          index={activeIndex}
          layout={layout}
          onIndexChange={setActiveIndex}
          onClose={close}
        />
      )}
    </>
  );
}

export default ExperienceCards;
