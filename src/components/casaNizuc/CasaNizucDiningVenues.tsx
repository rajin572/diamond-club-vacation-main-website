"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { restaurantHref, type DiningVenue } from "./casaNizucDining";

type Filter = "all" | "kosher" | "non-kosher";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All dining" },
  { id: "kosher", label: "Kosher" },
  { id: "non-kosher", label: "Non-kosher" },
];

/** The restaurant directory of the Dining page: ALL / KOSHER / NON-KOSHER filter and one clickable card per restaurant, each opening its own page. */
export function CasaNizucDiningVenues({ venues }: { venues: DiningVenue[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const shown = venues.filter((venue) => filter === "all" || (filter === "kosher") === venue.kosher);

  return (
    <>
      <div className="dcv-lp-filters" role="group" aria-label="Filter restaurants">
        {FILTERS.map((item) => (
          <button key={item.id} type="button" className="dcv-lp-filter" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>
            {item.label}
          </button>
        ))}
      </div>

      <div className="dcv-lp-grid3">
        {shown.map((venue) => (
          <Link key={venue.slug} href={restaurantHref(venue.slug)} className="dcv-lp-dcard dcv-lp-dcard--link">
            <div className="dcv-lp-dcard-photo">
              <Image src={venue.image} alt={venue.title} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" />
              <span className={venue.kosher ? "dcv-lp-flag" : "dcv-lp-flag dcv-lp-flag--dark"}>{venue.kosher ? "Kosher" : "Non-kosher"}</span>
            </div>
            <div className="dcv-lp-dcard-body">
              <p className="dcv-lp-eyebrow" style={{ marginBottom: 10 }}>
                {venue.concept}
              </p>
              <h3>{venue.title}</h3>
              <p className="dcv-lp-quoteline">{venue.tagline}</p>
              <p>{venue.text}</p>
              <span className="dcv-lp-linkbtn" style={{ alignSelf: "flex-start", marginTop: 18 }}>
                Explore {venue.name} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
