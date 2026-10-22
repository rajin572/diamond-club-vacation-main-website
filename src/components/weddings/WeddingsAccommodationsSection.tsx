"use client";

import Image from "next/image";
import { SectionTitle } from "@/components/shared/design";
import { AllImages } from "../../../public/images/AllImages";
import { WEDDINGS_PAGE_DATA } from "@/data/pages/weddings.data";

export function WeddingsAccommodationsSection() {
  const { accommodations } = WEDDINGS_PAGE_DATA;

  return (
    <section id="accommodations" className="dcv-wrap dcv-anchor">
      <SectionTitle
        title="Your Sanctuary"
        description="Captivating design, tactile organic textures, and guaranteed views of either the open azure Caribbean ocean or the golden sunsets over Nichupté Lagoon."
      />

      {/* Editorial Sanctuary Narrative */}
      <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#f7f5f1] via-white to-[#fbf7ef] border border-[#caa055]/30 mb-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#caa055] block mb-2">
              {accommodations.kicker}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#161616] mb-4">
              Restful Luxury for Wedding Couples & Guests
            </h3>
            <p className="text-sm sm:text-base text-[#444] leading-relaxed mb-4">
              {accommodations.lead}
            </p>
            <p className="text-xs sm:text-sm text-[#666] leading-relaxed italic">
              {accommodations.subtext}
            </p>
          </div>
          <div className="lg:col-span-4 relative h-60 rounded-2xl overflow-hidden border border-[#caa055]/30 shadow-md">
            <Image
              src={AllImages.casaNizucRoomKingBalcony}
              alt="A Casa Nizuc guestroom with a balcony"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
          </div>
        </div>
      </div>

      {/* Accommodations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {accommodations.categories.map((room) => (
          <div
            key={room.id}
            className={`group rounded-2xl overflow-hidden bg-white border border-[#caa055]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
              room.id === "master-suites" ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            {/* Image Area */}
            <div className={`relative ${room.id === "master-suites" ? "h-72 sm:h-80" : "h-60"} w-full overflow-hidden bg-[#e8e2d8]`}>
              <Image
                src={room.image}
                alt={room.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-black/60 backdrop-blur-md border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e5c16d]" />
                {room.units}
              </div>
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold text-[#111] bg-[#f5e6cc] border border-[#caa055]/50 shadow-sm">
                {typeof room.sqft === "number" ? `${room.sqft} sq. ft.` : room.sqft}
              </div>
            </div>

            {/* Room Details */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-serif text-[#161616] mb-2">
                  {room.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#555] leading-relaxed mb-5">
                  {room.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#eee7dc] space-y-1.5">
                {room.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#444]">
                    <svg
                      className="w-3.5 h-3.5 text-[#caa055] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
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

