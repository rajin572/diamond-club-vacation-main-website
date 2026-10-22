"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/shared/design";
import { WeddingImages } from "../../../public/images/weddings/weddingImages";
import { WEDDINGS_PAGE_DATA } from "@/data/pages/weddings.data";

const TABS = [
  { id: "chart", label: "Capacity Specifications Table" },
  { id: "floorplan", label: "3rd-Floor Celebration Center Layout" },
  { id: "levels", label: "Multi-Level Resort Directory" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function WeddingsCapacitySection() {
  const { capacityChart, resortLevels } = WEDDINGS_PAGE_DATA;
  const [activeTab, setActiveTab] = useState<TabId>("chart");

  return (
    <section id="capacities" className="dcv-wrap dcv-anchor">
      <SectionTitle
        title="Capacities & Spatial Layout"
        description="Detailed square footage, seating capacities, and architectural floor plans from the official Casa Nizuc presentation."
      />

      {/* Tab Switcher */}
      <div className="dcv-gallery-tabs mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? "dcv-on" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Capacity Table */}
      {activeTab === "chart" && (
        <div className="space-y-6">
          <div className="dcv-wedding-table-wrap">
            <table className="dcv-wedding-table">
              <thead>
                <tr>
                  <th>Space / Venue</th>
                  <th>Level</th>
                  <th>Sq. Ft.</th>
                  <th>Theater</th>
                  <th>School</th>
                  <th>U-Form</th>
                  <th>Cocktail</th>
                  <th>Banquet</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#fcfaf5] text-[11px] uppercase tracking-wider font-bold text-[#888]">
                  <td colSpan={8} className="py-2.5 px-4 font-sans text-[#caa055]">
                    3rd-Level Meeting & Celebration Spaces
                  </td>
                </tr>
                {capacityChart
                  .filter((r) => r.type === "meeting")
                  .map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        row.space.includes("Grand Ballroom")
                          ? "dcv-highlight-row"
                          : ""
                      }
                    >
                      <td className="font-medium text-[#111]">{row.space}</td>
                      <td className="text-[#666] text-xs">{row.level}</td>
                      <td className="font-mono text-xs">{typeof row.sqft === "number" ? row.sqft.toLocaleString() : row.sqft}</td>
                      <td className="font-mono text-xs">{row.theater}</td>
                      <td className="font-mono text-xs">{row.school}</td>
                      <td className="font-mono text-xs">{row.uform}</td>
                      <td className="font-mono text-xs font-semibold text-[#111]">{row.cocktail}</td>
                      <td className="font-mono text-xs font-semibold text-[#111]">{row.banquet}</td>
                    </tr>
                  ))}

                <tr className="bg-[#fcfaf5] text-[11px] uppercase tracking-wider font-bold text-[#888]">
                  <td colSpan={8} className="py-2.5 px-4 font-sans text-[#caa055]">
                    Specialty Event Venues & Terraces
                  </td>
                </tr>
                {capacityChart
                  .filter((r) => r.type === "venue")
                  .map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        row.space.includes("Rooftop") || row.space.includes("El Edén")
                          ? "dcv-highlight-row"
                          : ""
                      }
                    >
                      <td className="font-medium text-[#111]">{row.space}</td>
                      <td className="text-[#666] text-xs">{row.level}</td>
                      <td className="font-mono text-xs">{typeof row.sqft === "number" ? row.sqft.toLocaleString() : row.sqft}</td>
                      <td className="font-mono text-xs">{row.theater}</td>
                      <td className="font-mono text-xs">{row.school}</td>
                      <td className="font-mono text-xs">{row.uform}</td>
                      <td className="font-mono text-xs font-semibold text-[#111]">{row.cocktail}</td>
                      <td className="font-mono text-xs font-semibold text-[#111]">{row.banquet}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#888] italic text-right">
            * Grand Ballroom (4,951 sq. ft.) is divisible into Paloma (2,476 sq. ft.) and Cuco (2,476 sq. ft.). Source: Official Casa Nizuc presentation capacity matrix.
          </p>
        </div>
      )}

      {/* Tab 2: 3rd Floor Architectural Layout */}
      {activeTab === "floorplan" && (
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden border border-[#caa055]/40 bg-white p-4 sm:p-6 shadow-md">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#faf7f2]">
              <Image
                src={WeddingImages.eventSpacesMap}
                alt="3rd Floor Event Center Floor Map Casa Nizuc"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            
            {/* Legend & Guide */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[#eee7dc] text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#f3d4cb]" />
                <span className="font-medium text-[#222]">Grand Ballroom (4,951 sqft)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#fae8dc]" />
                <span className="font-medium text-[#222]">Grand Foyer (2,153 sqft)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#caa055]" />
                <span className="font-medium text-[#222]">Yuya Synagogue (312 sqft)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#e8cbbd]" />
                <span className="font-medium text-[#222]">Canario & Gaviota Suites</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Multi-Level Resort Layout */}
      {activeTab === "levels" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resortLevels.map((lvl, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#caa055]/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#111] bg-gradient-to-r from-[#f7e7c4] to-[#caa055]">
                  {lvl.level}
                </span>
                <span className="text-xs text-[#888] font-mono">Floor Level</span>
              </div>
              <h4 className="text-xl font-serif text-[#161616] mb-2">{lvl.name}</h4>
              <p className="text-xs sm:text-sm text-[#555] mb-4 leading-relaxed">{lvl.description}</p>
              <div className="pt-3 border-t border-[#eee7dc] space-y-1">
                {lvl.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#444]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#caa055] flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
