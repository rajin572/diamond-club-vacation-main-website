"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle, Wrap } from "@/components/shared/design";
import { diningHref } from "@/lib/routes";
import { AllImages } from "../../../public/images/AllImages";
import type { ResortListSection } from "./resorts.types";
import { KosherSupervisionModal, CelebrityChefsModal } from "./DiningModals";

interface ResortDiningCardsProps {
  offeringId: string;
  programId: string;
  resortId: string;
  resortName: string;
  dining: ResortListSection;
}

export function ResortDiningCards({
  offeringId,
  programId,
  resortId,
  resortName,
  dining,
}: ResortDiningCardsProps) {
  const [activeModal, setActiveModal] = useState<"supervision" | "chefs" | null>(null);

  // Supervision and Chef images customized by program
  const isGuettaway = programId === "guettaway" || resortId === "waldorf-astoria" || resortId === "park-hyatt";
  const supervisionImage = isGuettaway
    ? AllImages.kosherGettSupervision
    : AllImages.rabbiNissimHiluOneKosher; // Reserve: Rabbi Hilu in front of the One Kosher wall (client 2026-10-19)
  // Chaim Levy is the Guettaway chef only; Diamond Club Reserve (and Blue) go back to Donny Rogoff (client 2026-10-19).
  const chefImage = isGuettaway ? AllImages.chefChaimLevyCard : AllImages.chefDonnyRogoffCard;
  const diningImage = dining.images[0] ?? AllImages.stregis2;
  const diningPageUrl = diningHref(offeringId, programId, resortId);

  return (
    <Wrap className="dcv-wrap--stack">
      {/* No text on the right of the title (client 2026-10-19). */}
      <SectionTitle title="Dining" />

      <div className="dcv-dining-blocks">
        {/* TOP: Dining Card - Navigates to dedicated dining page */}
        <div className="dcv-dining-top-card">
          <Link
            href={diningPageUrl}
            className="dcv-card dcv-card--interactive"
            style={{ display: "block", textDecoration: "none" }}
          >
            <Image
              src={diningImage}
              alt={`${resortName} Dining`}
              sizes="(max-width: 900px) 100vw, 1140px"
              priority={false}
            />
            <div className="dcv-body">
              <h3>Dining</h3>
              <p>Explore our kosher restaurants, multi-course Passover menus, and private Seders.</p>
              <span className="dcv-link">
                Explore Menus &amp; Dining →
              </span>
            </div>
          </Link>
        </div>

        {/* BOTTOM: Kosher Supervision & Celebrity Chefs (2 columns) */}
        <div className="dcv-grid2">
          {/* Bottom Left: Kosher Supervision */}
          <article
            className="dcv-card dcv-card--interactive"
            onClick={() => setActiveModal("supervision")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveModal("supervision");
              }
            }}
          >
            <Image
              src={supervisionImage}
              alt="Kosher Supervision"
              sizes="(max-width: 900px) 100vw, 50vw"
              priority={false}
              // The Guettaway banner is a wide wordmark (2048x725): show it whole (contain), never cropped (client 2026-10-19).
              style={isGuettaway ? { objectFit: "contain", backgroundColor: "#fff" } : { objectPosition: "center 20%" }}
            />
            <div className="dcv-body">
              <h3>Kosher Supervision</h3>
              <p>Glatt Kosher, Cholov Yisroel &amp; Bishul Yisroel under strict rabbinical supervision.</p>
              <span className="dcv-link">View Supervision →</span>
            </div>
          </article>

          {/* Bottom Right: Celebrity Chefs */}
          <article
            className="dcv-card dcv-card--interactive"
            onClick={() => setActiveModal("chefs")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveModal("chefs");
              }
            }}
          >
            <Image
              src={chefImage}
              alt={isGuettaway ? "Executive Chef Chaim Levy" : "Executive Chef Donny Rogoff"}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority={false}
              style={{ objectFit: "contain", backgroundColor: "#fff" }}
            />
            <div className="dcv-body">
              <h3>Celebrity Chefs</h3>
              <p>Acclaimed executive culinary masters crafting bespoke Passover fine dining.</p>
              <span className="dcv-link">Meet Our Chefs →</span>
            </div>
          </article>
        </div>
      </div>

      {/* Modal 1: Kosher Supervision */}
      <KosherSupervisionModal
        isOpen={activeModal === "supervision"}
        onClose={() => setActiveModal(null)}
        programId={programId}
      />

      {/* Modal 2: Celebrity Chefs */}
      <CelebrityChefsModal
        isOpen={activeModal === "chefs"}
        onClose={() => setActiveModal(null)}
        programId={programId}
      />
    </Wrap>
  );
}

export const ResortDiningSection = ResortDiningCards;
export default ResortDiningCards;
