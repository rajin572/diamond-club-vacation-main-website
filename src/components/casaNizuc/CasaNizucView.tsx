"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import {
  DesignCard,
  DetailHero,
  PhotoGallery,
  SectionTitle,
  SubNav,
  Wrap,
} from "@/components/shared/design";
import type { DesignImage, DesignLink } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { AllImages } from "../../../public/images/AllImages";
import { PopupTable } from "./CasaNizucParts";

const SUB_NAV: DesignLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "About", href: "#about" },
  { label: "Shabbat", href: "#shabbat" },
  { label: "Dining", href: "#dining" },
  { label: "GKDE", href: "#gkde" },
  { label: "Calendar", href: "#calendar" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
];

const CASA_NIZUC_MAIN_GALLERY: DesignImage[] = [
  AllImages.series.casa[0],
  AllImages.casaNizucTowerDay,
  AllImages.casaNizucDiningZait,
  AllImages.casaNizucPool,
  AllImages.casaNizucEntrance,
  AllImages.casaNizucDiningAshan,
  AllImages.casaNizucGallery31,
  AllImages.casaNizucMayimBuffet,
  AllImages.casaNizucDiningOfek,
  AllImages.casaNizucTowerNight,
  AllImages.casaNizucRoomSuiteLiving,
  AllImages.casaNizucEventsChandeliers,
];

/**
 * The year-round Casa Nizuc page, /casa-nizuc: the kosher resort that has it all.
 * Designed matching the authentic Passover Casa Nizuc resort aesthetic:
 * full-width hero with wordmark, sticky subnav, featured GKDE top card,
 * streamlined sections (About, Shabbat, Dining, GKDE, Calendar, Events with pop-up),
 * and a full photo gallery at the bottom.
 */
export function CasaNizucView() {
  const { hero, overview, about, shabbat, dining, gkde, seasons, events } = CASA_NIZUC_PAGE;
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  useEffect(() => {
    if (!isEventModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsEventModalOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isEventModalOpen]);

  return (
    <>
      {/* Hero Header */}
      <DetailHero
        image={hero.image}
        kicker={hero.kicker}
        title={
          <span>
            THE KOSHER RESORT
            <br />
            THAT HAS IT ALL
          </span>
        }
        subtitle={hero.subtitle}
        logo={{ image: AllImages.casaNizucLogoWhite, alt: "Casa Nizuc Resort & Spa", position: "left", wordmark: true }}
      />
      <SubNav items={SUB_NAV} label="Casa Nizuc sections" />

      {/* SECTION 1: Discover Casa Nizuc (GKDE Featured Card at top, 4 cards below) */}
      <Wrap id="overview">
        <SectionTitle title={overview.title} />
        <div className="dcv-grid4">
          {overview.cards.map((card) => (
            <DesignCard
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              href={`#${card.id}`}
              featured={"featured" in card ? Boolean(card.featured) : false}
            />
          ))}
        </div>
      </Wrap>

      {/* SECTION 2: About The Resort */}
      <Wrap id="about" className="dcv-wrap--stack">
        <SectionTitle title="The Resort" />
        <p className="dcv-lead" style={{ maxWidth: 840, marginBottom: 16 }}>
          {about.lead}
        </p>
        <p style={{ fontSize: 16, color: "var(--dcv-muted)", lineHeight: 1.7, maxWidth: 900, marginBottom: 28 }}>
          {about.paragraphs[0]}
        </p>

        <div className="dcv-grid3">
          {/* Card 1: The Property */}
          <article className="dcv-card">
            <div style={{ position: "relative", width: "100%", height: 260, overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
              <Image
                src={AllImages.casaNizucTowerDay}
                alt="Casa Nizuc Property"
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="dcv-body">
              <div className="dcv-card-tag">The Property</div>
              <h3>The Resort</h3>
              <p>{about.paragraphs[1]}</p>
              <Link href={`${CASA_NIZUC_HREF}/about`} className="dcv-link" style={{ marginTop: "auto", display: "inline-block", paddingTop: 12 }}>
                Explore Details →
              </Link>
            </div>
          </article>

          {/* Card 2: At a Glance */}
          <article className="dcv-card">
            <div style={{ position: "relative", width: "100%", height: 260, overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
              <Image
                src={AllImages.casaNizucEntrance}
                alt="Casa Nizuc Entrance"
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="dcv-body">
              <div className="dcv-card-tag">By The Numbers</div>
              <h3>At a Glance</h3>
              <ul className="dcv-card-meta" style={{ margin: "14px 0", fontSize: 14 }}>
                {about.glance.map((item) => (
                  <li key={item.label} style={{ marginBottom: 6 }}>
                    <b>{item.value}</b> {item.label}
                  </li>
                ))}
              </ul>
              <Link href={`${CASA_NIZUC_HREF}/about`} className="dcv-link" style={{ marginTop: "auto", display: "inline-block", paddingTop: 12 }}>
                View Facts &amp; Numbers →
              </Link>
            </div>
          </article>

          {/* Card 3: Kosher-Friendly By Design */}
          <article className="dcv-card">
            <div style={{ position: "relative", width: "100%", height: 260, overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
              <Image
                src={AllImages.casaNizucGallery31}
                alt="Kosher-Friendly by Design"
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="dcv-body">
              <div className="dcv-card-tag">Observance Built In</div>
              <h3>Kosher-Friendly by Design</h3>
              <p>“{about.quote}” {about.features[0].text}</p>
              <Link href={`${CASA_NIZUC_HREF}/about`} className="dcv-link" style={{ marginTop: "auto", display: "inline-block", paddingTop: 12 }}>
                See What Is Built In →
              </Link>
            </div>
          </article>
        </div>
      </Wrap>

      {/* SECTION 3: Shabbat (Featured Card, no bottom 3 cards per user request) */}
      <Wrap id="shabbat" className="dcv-wrap--stack">
        <SectionTitle title="Shabbat" />
        <p className="dcv-lead" style={{ maxWidth: 840, marginBottom: 16 }}>
          {shabbat.lead}
        </p>

        <div className="dcv-dining-top-card">
          <Link
            href={`${CASA_NIZUC_HREF}/shabbat`}
            className="dcv-card dcv-card--interactive"
            style={{ display: "block", textDecoration: "none" }}
          >
            <Image
              src={shabbat.image}
              alt="Shabbat at Casa Nizuc"
              sizes="(max-width: 900px) 100vw, 1140px"
              priority={false}
            />
            <div className="dcv-body">
              <div className="dcv-card-tag">Weekly Shabbat Program</div>
              <h3>{shabbat.heading}</h3>
              <p>{shabbat.text}</p>
              <span className="dcv-link">
                Explore Shabbat Schedule &amp; Services →
              </span>
            </div>
          </Link>
        </div>
      </Wrap>

      {/* SECTION 4: Dining (Featured Card, no venue cards on here per user request) */}
      <Wrap id="dining" className="dcv-wrap--stack">
        <SectionTitle title="Dining" />
        <p className="dcv-lead" style={{ maxWidth: 840, marginBottom: 16 }}>
          {dining.lead}
        </p>

        <div className="dcv-dining-top-card">
          <Link
            href={`${CASA_NIZUC_HREF}/dining`}
            className="dcv-card dcv-card--interactive"
            style={{ display: "block", textDecoration: "none" }}
          >
            <Image
              src={dining.venues[1]?.image ?? AllImages.casaNizucDiningZait}
              alt="Dining at Casa Nizuc"
              sizes="(max-width: 900px) 100vw, 1140px"
              priority={false}
            />
            <div className="dcv-body">
              <div className="dcv-card-tag">Five Kosher Destinations · One Hotel</div>
              <h3>{dining.heading}</h3>
              <p>{dining.text}</p>
              <span className="dcv-link">
                Explore Menus, Venues &amp; Hours →
              </span>
            </div>
          </Link>
        </div>
      </Wrap>

      {/* SECTION 5: GKDE & Ofek */}
      <Wrap id="gkde" className="dcv-wrap--stack">
        <SectionTitle title="GKDE" />
        <p className="dcv-lead" style={{ maxWidth: 840, marginBottom: 16 }}>
          {gkde.lead}
        </p>

        <div className="dcv-grid2">
          {/* Card 1: GKDE Experience */}
          <article className="dcv-card">
            <div style={{ position: "relative", width: "100%", height: 300, overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
              <Image
                src={gkde.image}
                alt="Gourmet Kosher Dining Experience"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="dcv-body">
              <div className="dcv-card-tag">All-Inclusive Dining Package</div>
              <h3>{gkde.tagline}</h3>
              <p>{gkde.intro[0]}</p>
              <Link href={`${CASA_NIZUC_HREF}/gkde`} className="dcv-link" style={{ marginTop: "auto", display: "inline-block", paddingTop: 12 }}>
                Explore GKDE Venues &amp; Pricing →
              </Link>
            </div>
          </article>

          {/* Card 2: Ofek Rooftop Lounge */}
          <article className="dcv-card">
            <div style={{ position: "relative", width: "100%", height: 300, overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
              <Image
                src={gkde.ofek.image}
                alt="Ofek Rooftop Sky Pool"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="dcv-body">
              <div className="dcv-card-tag">Adults-Only Rooftop</div>
              <h3>{gkde.ofek.heading}</h3>
              <p>{gkde.ofek.lead}</p>
              <Link href={`${CASA_NIZUC_HREF}/ofek`} className="dcv-link" style={{ marginTop: "auto", display: "inline-block", paddingTop: 12 }}>
                Explore Ofek Rooftop →
              </Link>
            </div>
          </article>
        </div>
      </Wrap>

      {/* SECTION 6: Calendar of Events (Shown like previous, linking to calendar) */}
      <Wrap id="calendar" className="dcv-wrap--stack">
        <SectionTitle title="Calendar of Events" />
        <p className="dcv-lead" style={{ maxWidth: 840, marginBottom: 16 }}>
          {seasons.lead}
        </p>

        <div className="dcv-dining-top-card">
          <Link
            href={`${CASA_NIZUC_HREF}/calendar`}
            className="dcv-card dcv-card--interactive"
            style={{ display: "block", textDecoration: "none" }}
          >
            <Image
              src={seasons.list[2].image}
              alt="Calendar of Events"
              sizes="(max-width: 900px) 100vw, 1140px"
              priority={false}
            />
            <div className="dcv-body">
              <div className="dcv-card-tag">Full Programming · All Inclusive</div>
              <h3>{seasons.heading}</h3>
              <p>{seasons.lead}</p>
              <span className="dcv-link">
                View the calendar →
              </span>
            </div>
          </Link>
        </div>
      </Wrap>

      {/* SECTION 7: Events & Celebrations (Clicking card opens details pop-up) */}
      <Wrap id="events" className="dcv-wrap--stack">
        <SectionTitle title={events.heading} />
        <p className="dcv-lead" style={{ maxWidth: 840, marginBottom: 16 }}>
          {events.lead}
        </p>

        <div className="dcv-dining-top-card">
          <article
            className="dcv-card dcv-card--interactive"
            role="button"
            tabIndex={0}
            onClick={() => setIsEventModalOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsEventModalOpen(true);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={events.image}
              alt="Events & Celebrations"
              sizes="(max-width: 900px) 100vw, 1140px"
              priority={false}
            />
            <div className="dcv-body">
              <div className="dcv-card-tag">Weddings &amp; Simchas</div>
              <h3>Events &amp; Celebrations</h3>
              <p>{events.lead}</p>
              <span className="dcv-link">
                View events &amp; venues →
              </span>
            </div>
          </article>
        </div>
      </Wrap>

      {/* SECTION 8: Photo Gallery at the very bottom */}
      <Wrap id="gallery" className="dcv-wrap--stack">
        <SectionTitle title="Casa Nizuc Gallery" />
        <PhotoGallery images={CASA_NIZUC_MAIN_GALLERY} alt="Casa Nizuc Resort &amp; Spa Gallery" />
      </Wrap>

      {/* Events Pop-up Modal */}
      {isEventModalOpen && (
        <div
          className="dcv-brochure-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsEventModalOpen(false)}
        >
          <div
            className="dcv-brochure-modal dcv-dining-popup-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="dcv-brochure-close"
              onClick={() => setIsEventModalOpen(false)}
              aria-label="Close events details"
            >
              <X size={20} />
            </button>

            <div className="dcv-brochure-header">
              <div className="dcv-brochure-kicker">CASA NIZUC · EVENTS &amp; CELEBRATIONS</div>
              <h2 className="dcv-brochure-title">Events &amp; Celebrations</h2>
              <p className="dcv-brochure-sub">{events.heading}</p>
            </div>

            <div className="dcv-brochure-preview-wrap" data-lenis-prevent>
              <div className="dcv-dining-modal-banner-wrap">
                <Image
                  src={events.image}
                  alt="Events & Celebrations at Casa Nizuc"
                  width={1200}
                  height={700}
                  sizes="(max-width: 900px) 100vw, 680px"
                  priority
                />
              </div>

              <div className="dcv-dining-modal-bio">
                <p>{events.text}</p>

                <ul className="dcv-cn-bullets" style={{ margin: "18px 0 24px" }}>
                  {events.list.map((item) => (
                    <li key={item.title} style={{ marginBottom: 10 }}>
                      <strong>{item.title}</strong> — {item.text}
                    </li>
                  ))}
                </ul>

                <h3 style={{ margin: "24px 0 12px", fontFamily: "var(--dcv-serif)", fontSize: 22 }}>
                  Venue capacities
                </h3>
                <PopupTable
                  head={["Venue", "Banquet", "Reception"]}
                  rows={events.capacities.map((row) => [row.venue, row.banquet, row.reception])}
                />
                <p className="dcv-cn-fine" style={{ marginTop: 12 }}>
                  {events.capacityNote}
                </p>
              </div>

              <div className="dcv-dining-modal-footer">
                <button
                  type="button"
                  className="dcv-btn dcv-btn--primary"
                  onClick={() => setIsEventModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CasaNizucView;
