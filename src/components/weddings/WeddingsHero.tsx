"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { WEDDINGS_PAGE_DATA } from "@/data/pages/weddings.data";

export function WeddingsHero() {
  const { hero } = WEDDINGS_PAGE_DATA;

  return (
    <section className="dcv-hero">
      <Image
        src={hero.image}
        alt="Weddings & Destination Events at Casa Nizuc"
        priority
        sizes="100vw"
        quality={92}
        style={{ objectPosition: "50% 50%" }}
      />
      <div className="dcv-copy">
        <div className="dcv-kicker">{hero.kicker}</div>
        <h1>{hero.headline}</h1>
        <div className="dcv-hero-subtitle">{hero.subtext}</div>
        <div className="dcv-hero-actions">
          <a
            className="dcv-btn dcv-brochure-btn"
            href={hero.brochureHref}
            download={hero.brochureFilename}
            aria-label="Download Casa Nizuc Wedding Presentation"
          >
            <Download size={16} aria-hidden="true" />
            <span>Brochure</span>
          </a>
        </div>
      </div>
    </section>
  );
}
