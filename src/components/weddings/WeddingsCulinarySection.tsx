"use client";

import Image from "next/image";
import { SectionTitle } from "@/components/shared/design";
import { WeddingImages } from "../../../public/images/weddings/weddingImages";
import { WEDDINGS_PAGE_DATA } from "@/data/pages/weddings.data";

export function WeddingsCulinarySection() {
  const { culinary } = WEDDINGS_PAGE_DATA;

  return (
    <section id="culinary" className="dcv-wrap dcv-anchor">
      <SectionTitle
        title="Culinary Artistry & Mixology"
        description="Dedicated premium dining venues featuring certified Glatt Kosher (Beit Yosef) specialties and Chalav Yisroel options with a kosher dining program."
      />

      {/* Philosophy Banner with Open Flame Kitchen Visual */}
      <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1917] via-[#24211d] to-[#121110] text-white p-8 sm:p-12 mb-14 border border-[#caa055]/40 shadow-2xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#e5c16d] block mb-3">
              {culinary.kicker}
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-normal leading-tight mb-5 text-[#fbf7ef]">
              Gourmet Innovation Meets Strict Kosher Tradition
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
              {culinary.lead}
            </p>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              {culinary.strictTradition}
            </p>

            {/* Beverage Package Callout */}
            <div className="p-5 rounded-2xl bg-white/5 border border-[#e5c16d]/30 backdrop-blur-md">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#e5c16d] mt-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#f5e6cc] leading-relaxed">
                  {culinary.ultimateBeverage}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-[#e5c16d]/40 shadow-xl">
            <Image
              src={WeddingImages.culinaryFire}
              alt="Artisanal open flame cooking at Casa Nizuc"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>

      {/* Culinary Venues Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {culinary.venues.map((venue) => (
          <div
            key={venue.id}
            className="group rounded-2xl overflow-hidden bg-white border border-[#caa055]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative h-56 w-full overflow-hidden bg-[#e8e2d8]">
              <Image
                src={venue.image}
                alt={venue.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-white bg-black/60 backdrop-blur-md border border-white/20">
                {venue.kosherStandard}
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-md text-[10px] font-medium text-white/90 bg-black/50 backdrop-blur-sm">
                {venue.location}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#caa055] block mb-1">
                  {venue.category}
                </span>
                <h4 className="text-2xl font-serif text-[#161616] mb-3">
                  {venue.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#555] leading-relaxed mb-4">
                  {venue.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#eee7dc] space-y-1.5">
                {venue.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#444]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#caa055] flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

