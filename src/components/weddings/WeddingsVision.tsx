"use client";

import Image from "next/image";
import { AllImages } from "../../../public/images/AllImages";
import { WEDDINGS_PAGE_DATA } from "@/data/pages/weddings.data";

export function WeddingsVision() {
  const { vision } = WEDDINGS_PAGE_DATA;

  return (
    <section id="overview" className="dcv-wrap dcv-anchor">
      {/* Editorial Header */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#caa055] block mb-3">
          {vision.eyebrow}
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#171717] font-normal leading-tight mb-6">
          {vision.heading}
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#caa055] to-transparent mx-auto mb-8" />
        <p className="text-lg sm:text-xl font-serif italic text-[#333] leading-relaxed mb-6 max-w-3xl mx-auto">
          &ldquo;{vision.lead}&rdquo;
        </p>
        <p className="text-sm sm:text-base text-[#666] leading-relaxed max-w-2xl mx-auto">
          {vision.secondaryLead}
        </p>
      </div>

      {/* Arrival Experience Card */}
      <div className="dcv-wedding-quote-card mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b88124] block mb-2">
              The 23rd-Floor Oceanfront Welcome
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#161616] mb-4">
              Welcome Home to Casa Nizuc
            </h3>
            <p className="text-sm sm:text-base text-[#555] leading-relaxed mb-4">
              {vision.arrivalStory}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#111] bg-[#fbf7ef] border border-[#e5c16d]/50 px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#caa055]" />
                23rd-Floor Sky Lobby & Bar Mussa
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#111] bg-[#fbf7ef] border border-[#e5c16d]/50 px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#caa055]" />
                Caribbean Sea & Nichupté Lagoon
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#caa055]/30">
            <Image
              src={AllImages.casaNizucGallery05}
              alt="Lobby arrival at Casa Nizuc"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>

      {/* Five Golden Feature Pillars */}
      <div className="dcv-wedding-badge-grid">
        {vision.badges.map((badge, idx) => (
          <div key={idx} className="dcv-wedding-badge group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f7e7c4] to-[#caa055] flex items-center justify-center text-[#111] font-serif font-bold text-sm mb-4 shadow-sm group-hover:scale-110 transition-transform">
              0{idx + 1}
            </div>
            <h4 className="text-base font-serif font-bold text-[#161616] mb-2 leading-snug">
              {badge.title}
            </h4>
            <p className="text-xs text-[#666] leading-relaxed">
              {badge.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

