"use client";

import { SectionTitle } from "@/components/shared/design";
import { WEDDINGS_PAGE_DATA } from "@/data/pages/weddings.data";

export function WeddingsProductionSection() {
  const { productionServices } = WEDDINGS_PAGE_DATA;

  return (
    <section id="services" className="dcv-wrap dcv-anchor">
      <SectionTitle
        title="What Your Celebration Includes"
        description="Extraordinary celebrations designed and produced by our expert team, with the kosher dining program and the venues of Casa Nizuc."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productionServices.map((service, idx) => (
          <div
            key={idx}
            className="p-7 rounded-2xl bg-white border border-[#caa055]/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[#fbf7ef] border border-[#caa055]/40 flex items-center justify-center text-sm font-serif font-bold text-[#b88124] mb-4 group-hover:bg-[#caa055] group-hover:text-white transition-colors">
                0{idx + 1}
              </div>
              <h4 className="text-xl font-serif text-[#161616] mb-3">
                {service.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#eee7dc] flex items-center gap-1.5 text-[11px] font-semibold text-[#caa055] uppercase tracking-wider">
              <span>Casa Nizuc</span>
              <span>✦</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

