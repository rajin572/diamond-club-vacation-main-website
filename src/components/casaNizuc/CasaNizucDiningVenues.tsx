"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, X } from "lucide-react";
import type { DesignImage } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";

type VenueItem = (typeof CASA_NIZUC_PAGE.dining.venues)[number];
type MealItem = (typeof CASA_NIZUC_PAGE.dining.meals)[number];

function venueMatchesRow(venueName: string, whereText: string): boolean {
  const normVenue = venueName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
  const normWhere = whereText
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  return normWhere.includes(normVenue);
}

function getMealsForVenue(venueName: string, meals: MealItem[]): MealItem[] {
  return meals.filter((m) => venueMatchesRow(venueName, m.where));
}

/**
 * Authentic Passover Casa Nizuc dining popover/modal.
 * Replicates the exact layout, CSS classes, and structure of DiningModals.tsx:
 * dcv-brochure-overlay, dcv-brochure-modal dcv-dining-popup-modal,
 * dcv-brochure-header, dcv-dining-modal-banner-wrap, dcv-dining-modal-bio,
 * dcv-supervision-details-grid, and dcv-dining-modal-footer.
 * Clean feature items — no tables or charts anywhere.
 */
function DiningVenueModal({
  venue,
  meals,
  kicker = "CASA NIZUC · DINING VENUE",
  onClose,
}: {
  venue: VenueItem;
  meals: MealItem[];
  kicker?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const venueMeals = getMealsForVenue(venue.name, meals);

  return (
    <div
      className="dcv-brochure-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="dcv-brochure-modal dcv-dining-popup-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="dcv-brochure-close"
          onClick={onClose}
          aria-label={`Close ${venue.name} details`}
        >
          <X size={20} />
        </button>

        <div className="dcv-brochure-header">
          <div className="dcv-brochure-kicker">{kicker}</div>
          <h2 className="dcv-brochure-title">{venue.name}</h2>
          {venue.kind && <p className="dcv-brochure-sub">{venue.kind}</p>}
        </div>

        <div className="dcv-brochure-preview-wrap" data-lenis-prevent>
          <div className="dcv-dining-modal-banner-wrap">
            <Image
              src={venue.image}
              alt={venue.name}
              width={1200}
              height={700}
              sizes="(max-width: 900px) 100vw, 680px"
              priority
            />
          </div>

          <div className="dcv-dining-modal-bio">
            {venue.badge && (
              <div style={{ marginBottom: 14 }}>
                <span className="dcv-venue-card-badge" style={{ display: "inline-block", position: "static" }}>
                  {venue.badge}
                </span>
              </div>
            )}

            <p>{venue.text}</p>

            {venueMeals.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <h3 style={{ margin: "22px 0 12px", fontFamily: "var(--dcv-serif)", fontSize: 20, color: "#1a1a1a" }}>
                  Hours &amp; Meal Service
                </h3>
                <div className="dcv-supervision-details-grid">
                  {venueMeals.map((meal) => (
                    <div key={meal.meal} className="dcv-supervision-feat">
                      <Clock className="dcv-feat-icon" size={18} aria-hidden="true" />
                      <div>
                        <strong>
                          {meal.meal} {meal.hours ? `· ${meal.hours}` : ""}
                        </strong>
                        <span>{meal.what}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="dcv-dining-modal-footer">
            <button
              type="button"
              className="dcv-btn dcv-btn--primary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CasaNizucDiningVenues({
  venues,
  meals,
}: {
  venues: VenueItem[];
  meals: MealItem[];
}) {
  const [activeVenue, setActiveVenue] = useState<VenueItem | null>(null);

  return (
    <>
      <div className="dcv-grid3">
        {venues.map((venue) => (
          <article
            key={venue.name}
            className="dcv-card dcv-card--interactive"
            role="button"
            tabIndex={0}
            onClick={() => setActiveVenue(venue)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveVenue(venue);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <div style={{ position: "relative", width: "100%", height: 280, overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              {venue.badge && (
                <span className="dcv-venue-card-badge" style={{ position: "absolute", top: 14, right: 14 }}>
                  {venue.badge}
                </span>
              )}
            </div>
            <div className="dcv-body">
              <div className="dcv-card-tag">{venue.kind}</div>
              <h3>{venue.name}</h3>
              <p>{venue.text}</p>
              <span className="dcv-link" style={{ marginTop: "auto", display: "inline-block", paddingTop: 12 }}>
                View Hours &amp; Details →
              </span>
            </div>
          </article>
        ))}
      </div>

      {activeVenue && (
        <DiningVenueModal
          venue={activeVenue}
          meals={meals}
          kicker="CASA NIZUC · DINING VENUE"
          onClose={() => setActiveVenue(null)}
        />
      )}
    </>
  );
}

export function CasaNizucGkdeVenues({
  venues,
  meals,
  allVenues,
  venueImages,
}: {
  venues: (typeof CASA_NIZUC_PAGE.gkde.venues);
  meals: MealItem[];
  allVenues: VenueItem[];
  venueImages: Record<string, DesignImage>;
}) {
  const [activeVenue, setActiveVenue] = useState<VenueItem | null>(null);

  return (
    <>
      <div className="dcv-grid3">
        {venues.map((venue) => (
          <article
            key={venue.name}
            className="dcv-card dcv-card--interactive"
            role="button"
            tabIndex={0}
            onClick={() => {
              const found = allVenues.find((v) => venueMatchesRow(venue.name, v.name));
              setActiveVenue(
                found ?? {
                  name: venue.name,
                  kind: venue.kind,
                  text: venue.text,
                  badge: "Included in GKDE",
                  image: venueImages[venue.name],
                }
              );
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const found = allVenues.find((v) => venueMatchesRow(venue.name, v.name));
                setActiveVenue(
                  found ?? {
                    name: venue.name,
                    kind: venue.kind,
                    text: venue.text,
                    badge: "Included in GKDE",
                    image: venueImages[venue.name],
                  }
                );
              }
            }}
            style={{ cursor: "pointer" }}
          >
            {venueImages[venue.name] && (
              <div style={{ position: "relative", width: "100%", height: 260, overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
                <Image
                  src={venueImages[venue.name]}
                  alt={venue.name}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
            <div className="dcv-body">
              <div className="dcv-card-tag">{venue.kind}</div>
              <h3>{venue.name}</h3>
              <p>{venue.text}</p>
              <span className="dcv-link" style={{ marginTop: "auto", display: "inline-block", paddingTop: 12 }}>
                View Hours &amp; Details →
              </span>
            </div>
          </article>
        ))}
      </div>

      {activeVenue && (
        <DiningVenueModal
          venue={activeVenue}
          meals={meals}
          kicker="CASA NIZUC · CULINARY COLLECTION"
          onClose={() => setActiveVenue(null)}
        />
      )}
    </>
  );
}
