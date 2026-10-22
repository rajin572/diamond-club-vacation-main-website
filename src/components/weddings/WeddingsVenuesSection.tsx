"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/shared/design";
import { WEDDINGS_PAGE_DATA } from "@/data/pages/weddings.data";

const CATEGORIES = [
  { id: "all", label: "All Spaces" },
  { id: "ceremony", label: "Ceremonies & Chuppahs" },
  { id: "banquet", label: "Banquets & Dancing" },
  { id: "reception", label: "Receptions & Pre-Function" },
  { id: "sacred", label: "Sacred & Bridal Prep" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

export function WeddingsVenuesSection() {
  const { venues } = WEDDINGS_PAGE_DATA;
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");

  const filteredVenues = venues.filter((venue) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "ceremony") {
      return (
        venue.id === "rooftop-ceremony" ||
        venue.id === "eden-terrace" ||
        venue.idealFor.some((f) => f.toLowerCase().includes("chuppah") || f.toLowerCase().includes("ceremony"))
      );
    }
    if (selectedCategory === "banquet") {
      return (
        venue.id === "grand-ballroom" ||
        venue.id === "sky-court" ||
        venue.banquet >= 100
      );
    }
    if (selectedCategory === "reception") {
      return (
        venue.id === "grand-foyer" ||
        venue.id === "motor-lobby" ||
        venue.idealFor.some((f) => f.toLowerCase().includes("badeken") || f.toLowerCase().includes("welcome") || f.toLowerCase().includes("cocktail"))
      );
    }
    if (selectedCategory === "sacred") {
      return (
        venue.id === "yuya-synagogue" ||
        venue.id === "suites-breakouts"
      );
    }
    return true;
  });

  return (
    <section id="venues" className="dcv-wrap dcv-anchor">
      <SectionTitle
        title="Curated Event Venues"
        description="From the rooftop Weddings Ceremony Sanctuary to the Grand Ballroom and Sky Court, the spaces of Casa Nizuc for every stage of your destination event."
      />

      {/* Filter Tabs */}
      <div className="dcv-gallery-tabs mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={selectedCategory === cat.id ? "dcv-on" : ""}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Venues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredVenues.map((venue) => (
          <div
            key={venue.id}
            className="group rounded-3xl overflow-hidden bg-white/90 border border-[#caa055]/30 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Venue Image */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#e8e2d8]">
              <Image
                src={venue.image}
                alt={venue.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Level Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-black/60 backdrop-blur-md border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e5c16d]" />
                {venue.level}
              </div>

              {/* Title & Tagline overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl sm:text-3xl font-serif leading-snug drop-shadow-md">
                  {venue.title}
                </h3>
                <p className="text-xs sm:text-sm font-light text-white/90 italic drop-shadow-sm">
                  {venue.tagline}
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Metric Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-5 pb-4 border-b border-[#eee7dc]">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#fbf7ef] text-[#111] border border-[#e5c16d]/40">
                    <span className="text-[#9a7a38] font-bold">Area:</span> {typeof venue.sqft === "number" ? `${venue.sqft.toLocaleString()} sq. ft.` : venue.sqft}
                  </span>
                  {venue.cocktail > 0 && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#fbf7ef] text-[#111] border border-[#e5c16d]/40">
                      <span className="text-[#9a7a38] font-bold">Cocktail:</span> {venue.cocktail} guests
                    </span>
                  )}
                  {venue.banquet > 0 && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#fbf7ef] text-[#111] border border-[#e5c16d]/40">
                      <span className="text-[#9a7a38] font-bold">Banquet:</span> {venue.banquet} guests
                    </span>
                  )}
                  {venue.theater && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#fbf7ef] text-[#111] border border-[#e5c16d]/40">
                      <span className="text-[#9a7a38] font-bold">Theater:</span> {venue.theater} seats
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-[#555] leading-relaxed mb-5">
                  {venue.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {venue.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#444]">
                      <svg
                        className="w-4 h-4 text-[#caa055] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#888] mr-1">
                    Ideal For:
                  </span>
                  {venue.idealFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#f7f5f1] text-[#333] border border-[#e5e0d7]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Venue footer info */}
              <div className="pt-4 border-t border-[#eee7dc] flex items-center justify-between text-xs text-[#888]">
                <span className="font-serif italic text-[#9a7a38] font-medium truncate pr-2">
                  {venue.tagline}
                </span>
                <span className="text-xs text-[#888] font-mono flex-shrink-0">
                  {venue.level.split("·")[0]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

