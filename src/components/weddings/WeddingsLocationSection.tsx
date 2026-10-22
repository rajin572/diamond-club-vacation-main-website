"use client";

import Image from "next/image";
import { SectionTitle } from "@/components/shared/design";
import { WeddingImages } from "../../../public/images/weddings/weddingImages";
import { WEDDINGS_PAGE_DATA } from "@/data/pages/weddings.data";

export function WeddingsLocationSection() {
  const { location } = WEDDINGS_PAGE_DATA;

  return (
    <section id="location" className="dcv-wrap dcv-anchor">
      <SectionTitle
        title="Location & Arrival"
        description="Nestled at the tranquil southern gateway of the Cancún Hotel Zone, offering seclusion between the Caribbean Sea and Nichupté Lagoon just 8 minutes from the airport."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Location Narrative & Transit Metrics */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#caa055]/30 shadow-sm">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#caa055] block mb-2">
              Privileged Geography
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#161616] mb-3">
              Between Ocean & Lagoon
            </h3>
            <p className="text-xs sm:text-sm text-[#555] leading-relaxed mb-6">
              Located at {location.address}, Casa Nizuc enjoys one of the most exclusive settings in the Mexican Caribbean.
            </p>

            {/* Travel Times Grid */}
            <div className="grid grid-cols-2 gap-4">
              {location.transit.map((t, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#fbf7ef] border border-[#e5c16d]/30 text-center"
                >
                  <span className="text-xl sm:text-2xl font-serif font-bold text-[#111] block">
                    {t.time}
                  </span>
                  <span className="text-[11px] text-[#666] leading-tight block mt-1">
                    {t.place}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Location Map Visual */}
        <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden border border-[#caa055]/30 shadow-lg bg-[#d5e7ed]">
          <Image
            src={WeddingImages.locationMap}
            alt="Cancun Hotel Zone Map showing Casa Nizuc"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      </div>
    </section>
  );
}

