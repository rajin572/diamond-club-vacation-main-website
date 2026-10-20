"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DetailHero,
  PhotoGallery,
  SectionTitle,
  SubNav,
  Wrap,
  DesignButton,
} from "@/components/shared/design";
import type { DesignLink } from "@/components/shared/design";
import { restaurantHref, inquireHref } from "@/lib/routes";
import { buildHotelSubNav } from "@/lib/hotel-subnav";
import { AllImages } from "../../../public/images/AllImages";
import type { ResortData } from "./resorts.types";
import { hasDetailPage } from "./resort-items";
import { DescriptionText } from "./DescriptionText";
import { KosherSupervisionModal, CelebrityChefsModal } from "./DiningModals";

/**
 * Client request 2026-10-19: the Kosher Supervision / Chef cards ("Passover Culinary Program") and the inquiry block belong
 * to the hotel page, not the Dining page, which lists only the restaurants. Kept here, switched off, so they can be turned back on.
 */
const SHOW_CULINARY_PROGRAM_ON_DINING_PAGE = false;
const SHOW_DINING_INQUIRY_ON_DINING_PAGE = false;

interface ResortDiningPageViewProps {
  offeringId: string;
  programId: string;
  data: ResortData;
}

export function ResortDiningPageView({
  offeringId,
  programId,
  data,
}: ResortDiningPageViewProps) {
  const [activeModal, setActiveModal] = useState<"supervision" | "chefs" | null>(null);

  const dining = data.dining;
  const isGuettaway =
    programId === "guettaway" ||
    data.resortId === "waldorf-astoria" ||
    data.resortId === "park-hyatt";

  const supervisionImage = isGuettaway
    ? AllImages.kosherGettSupervision
    : AllImages.rabbiNissimHiluOneKosher; // Reserve: Rabbi Hilu in front of the One Kosher wall (client 2026-10-19)
  // Chaim Levy is the Guettaway chef only; Diamond Club Reserve (and Blue) go back to Donny Rogoff (client 2026-10-19).
  const chefImage = isGuettaway ? AllImages.chefChaimLevyCard : AllImages.chefDonnyRogoffCard;
  const heroImage = dining?.images?.[0] ?? data.heroImage;

  const navItems: DesignLink[] = buildHotelSubNav({
    offeringId,
    programId,
    resortId: data.resortId,
    isHotelMainPage: false,
  });

  const inquireDiningUrl = inquireHref({
    destination: programId,
    resort: data.resortId,
    topic: "dining",
  });

  return (
    <>
      <DetailHero
        image={heroImage}
        kicker={data.programTitle || "Passover 2027"}
        title={`${data.resortName} Dining`}
        subtitle="World-class Glatt Kosher fine dining, celebrated guest master chefs, and strict rabbinical supervision."
        logo={data.heroLogo ? { ...data.heroLogo, wordmark: true } : undefined}
      />

      <SubNav items={navItems} label={`${data.resortName} sections`} />

      {/* SECTION 1: Culinary Overview & Interactive Modals */}
      {SHOW_CULINARY_PROGRAM_ON_DINING_PAGE && (
      <Wrap className="dcv-wrap--stack">
        <SectionTitle
          title="Passover Culinary Program"
        />

        <div className="dcv-grid2">
          {/* Kosher Supervision Card */}
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
              <div className="dcv-card-tag">Glatt Kosher · Cholov Yisroel</div>
              <h3>Kosher Supervision</h3>
              <p>
                Strict rabbinical oversight with 24/7 on-site mashgichim, Bishul Yisroel,
                Chassidishe Shechita, and non-gebrokts options.
              </p>
              <span className="dcv-link">View Supervision Credentials →</span>
            </div>
          </article>

          {/* Celebrity Chefs Card */}
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
              <div className="dcv-card-tag">Master Chefs · Fine Dining</div>
              <h3>Celebrity Chefs</h3>
              <p>
                Acclaimed international culinary masters crafting bespoke multi-course menus,
                artisanal pastries, and gastronomic holiday showcases.
              </p>
              <span className="dcv-link">Meet Our Executive Chefs →</span>
            </div>
          </article>
        </div>
      </Wrap>
      )}

      {/* SECTION 2: Complete Passover Restaurant Venues Grid */}
      {dining && dining.items.length > 0 && (
        <Wrap id="restaurants" className="dcv-wrap--stack">
          <SectionTitle title={dining.title} />

          <div className="dcv-grid3">
            {dining.items.map((item) => (
              // A venue with only a photo and a name (no text) is a plain tile: no "View details" link, no page.
              <article key={item.id} className={hasDetailPage(item) ? "dcv-card" : "dcv-card dcv-card--static"}>
                <Image
                  src={item.image}
                  alt={item.title}
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <div className="dcv-body">
                  {item.subtitle && <div className="dcv-card-tag">{item.subtitle}</div>}
                  <h3>{item.title}</h3>
                  {item.description && (
                    <p>
                      <DescriptionText text={item.description} />
                    </p>
                  )}
                  {item.stats && item.stats.some((stat) => stat.label === "Serves" || stat.label === "Hours") && (
                    <ul className="dcv-card-meta">
                      {item.stats
                        .filter((stat) => stat.label === "Serves" || stat.label === "Hours")
                        .map((stat) => (
                          <li key={stat.label}>
                            <b>{stat.label}:</b> {stat.value}
                          </li>
                        ))}
                    </ul>
                  )}
                  {hasDetailPage(item) && (
                    <Link
                      href={restaurantHref(offeringId, programId, data.resortId, item.id)}
                      className="dcv-link"
                    >
                      View details →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Wrap>
      )}

      {/* SECTION 3: Signature Passover Culinary Highlights */}
      <Wrap className="dcv-wrap--stack">
        <SectionTitle
          title="Holiday Culinary Experiences"
        />

        <div className="dcv-grid4">
          <article className="dcv-card">
            <div className="dcv-body">
              <div className="dcv-card-tag">Yom Tov &amp; Seders</div>
              <h3 style={{ fontSize: "22px" }}>Exquisite Seders</h3>
              <p>
                Private family dining rooms or lavish communal Seders led by renowned rabbis and
                cantors, with round handmade Shmurah Matzah and reserve kosher wines.
              </p>
            </div>
          </article>

          <article className="dcv-card">
            <div className="dcv-body">
              <div className="dcv-card-tag">All-Day Sweet &amp; Savory</div>
              <h3 style={{ fontSize: "22px" }}>Viennese Tearoom</h3>
              <p>
                Continuous artisanal French pastries, Belgian chocolates, fresh tropical fruit
                carvings, specialty espresso bar, and gourmet midnight buffets.
              </p>
            </div>
          </article>

          <article className="dcv-card">
            <div className="dcv-body">
              <div className="dcv-card-tag">Pool &amp; Oceanfront</div>
              <h3 style={{ fontSize: "22px" }}>Beachside Barbecue</h3>
              <p>
                Daily outdoor rotisseries, wood-smoked briskets, artisanal kosher burgers, fresh
                ceviches, and handcrafted tropical mocktails by the ocean.
              </p>
            </div>
          </article>

          <article className="dcv-card">
            <div className="dcv-body">
              <div className="dcv-card-tag">Children &amp; Families</div>
              <h3 style={{ fontSize: "22px" }}>Young Gourmets</h3>
              <p>
                Kid-friendly gourmet buffets, early family dining hours, child-approved holiday
                staples, and house-churned artisanal kosher ice cream parlor.
              </p>
            </div>
          </article>
        </div>
      </Wrap>

      {/* SECTION 4: Full Culinary Photo Gallery */}
      {dining && dining.images.length > 0 && (
        <Wrap id="gallery" className="dcv-wrap--stack">
          <SectionTitle
            title="Culinary Photo Gallery"
          />
          <PhotoGallery images={dining.images} alt={`${data.resortName} dining`} />
        </Wrap>
      )}

      {/* SECTION 5: Inquire / Reservations CTA */}
      {SHOW_DINING_INQUIRY_ON_DINING_PAGE && (
      <Wrap className="dcv-wrap--stack">
        <div
          style={{
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          <div
            style={{
              background: "#fbf9f4",
              border: "1px solid rgba(202, 160, 85, 0.3)",
              borderRadius: "20px",
              padding: "48px 24px",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
          <div className="dcv-card-tag" style={{ display: "inline-block", marginBottom: "12px" }}>
            PASSOVER 2027 RESERVATIONS
          </div>
          <h2 style={{ fontSize: "32px", margin: "0 0 12px", fontFamily: "var(--dcv-serif)" }}>
            Plan Your Dining Experience
          </h2>
          <p
            style={{
              color: "var(--dcv-muted)",
              fontSize: "16px",
              lineHeight: 1.6,
              maxWidth: "540px",
              margin: "0 auto 24px",
            }}
          >
            Have dietary preferences, need a private Seder room, or wish to reserve special seating?
            Our culinary concierge team is at your service.
          </p>
          <DesignButton href={inquireDiningUrl}>Inquire About Dining</DesignButton>
          </div>
        </div>
      </Wrap>
      )}

      {/* Modals */}
      <KosherSupervisionModal
        isOpen={activeModal === "supervision"}
        onClose={() => setActiveModal(null)}
        programId={programId}
      />

      <CelebrityChefsModal
        isOpen={activeModal === "chefs"}
        onClose={() => setActiveModal(null)}
        programId={programId}
      />
    </>
  );
}

export default ResortDiningPageView;
