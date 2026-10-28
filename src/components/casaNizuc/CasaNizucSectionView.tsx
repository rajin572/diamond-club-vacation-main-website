import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { DetailHero, PhotoGallery, SubNav, Wrap } from "@/components/shared/design";
import type { DesignImage, DesignLink } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { AllImages } from "../../../public/images/AllImages";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { Lead, PopupTable } from "./CasaNizucParts";
import { CasaNizucCalendarView } from "./CasaNizucCalendarView";
import { CasaNizucAboutView } from "./CasaNizucAboutView";

/** The pages that open from the year-round Casa Nizuc page. */
export const CASA_NIZUC_SECTION_SLUGS = ["about", "shabbat", "dining", "gkde", "ofek", "calendar"] as const;
export type CasaNizucSectionSlug = (typeof CASA_NIZUC_SECTION_SLUGS)[number];

export function isCasaNizucSectionSlug(slug: string): slug is CasaNizucSectionSlug {
  return (CASA_NIZUC_SECTION_SLUGS as readonly string[]).includes(slug);
}

export function casaNizucSectionHref(slug: CasaNizucSectionSlug): string {
  return `${CASA_NIZUC_HREF}/${slug}`;
}

const SUB_NAV: DesignLink[] = [
  { label: "About", href: `${CASA_NIZUC_HREF}/about` },
  { label: "Shabbat", href: `${CASA_NIZUC_HREF}/shabbat` },
  { label: "Dining", href: `${CASA_NIZUC_HREF}/dining` },
  { label: "GKDE", href: `${CASA_NIZUC_HREF}/gkde` },
  { label: "Calendar of Events", href: `${CASA_NIZUC_HREF}/calendar` },
  { label: "Events", href: `${CASA_NIZUC_HREF}#events` },
];

const SHABBAT_GALLERY_IMAGES: DesignImage[] = [
  AllImages.casaNizucAshanRender,
  AllImages.casaNizucDiningGrandBallroom,
  AllImages.casaNizucTowerNight,
  AllImages.casaNizucEntrance,
  AllImages.casaNizucDiningZait,
  AllImages.casaNizucGallery31,
];

const DINING_GALLERY_IMAGES: DesignImage[] = [
  AllImages.casaNizucDiningAshan,
  AllImages.casaNizucDiningZait,
  AllImages.casaNizucMayimBuffet,
  AllImages.casaNizucDiningNoam,
  AllImages.casaNizucOfekRooftop,
  AllImages.casaNizucBarawaPoolBar,
  AllImages.casaNizucDiningGrandBallroom,
  AllImages.casaNizucDiningZaitTerrace,
];

const GKDE_GALLERY_IMAGES: DesignImage[] = [
  AllImages.casaNizucGkdeDining,
  AllImages.casaNizucDiningAshan,
  AllImages.casaNizucDiningZait,
  AllImages.casaNizucMayimBuffet,
  AllImages.casaNizucDiningNoam,
  AllImages.casaNizucDiningGrandBallroom,
];

const OFEK_GALLERY_IMAGES: DesignImage[] = [
  AllImages.casaNizucOfekRooftop,
  AllImages.casaNizucTowerNight,
  AllImages.casaNizucPool,
  AllImages.casaNizucBarawaPoolBar,
  AllImages.casaNizucDiningZaitTerrace,
];

/**
 * Shabbat section page: styled matching the Calendar of Events design,
 * with full-width hero, logo, styled cards, and photo gallery at the very bottom.
 */
function ShabbatSection() {
  const { shabbat } = CASA_NIZUC_PAGE;

  return (
    <>
      <DetailHero
        image={shabbat.image}
        kicker="CASA NIZUC · SHABBAT"
        title="Shabbat"
        subtitle={shabbat.heading}
        logo={{ image: AllImages.casaNizucLogoWhite, alt: "Casa Nizuc Resort & Spa", position: "left" }}
      />
      <SubNav items={SUB_NAV} label="Casa Nizuc sections" />

      <Wrap>
        <p style={{ margin: "0 0 24px" }}>
          <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#shabbat`}>
            ← Back to Shabbat
          </Link>
        </p>

        {/* Content stack matching Calendar of Events layout */}
        <section className="dcv-calendar-content-stack" style={{ margin: "0 0 36px" }}>
          <div style={{ maxWidth: 880 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1f383e", margin: "0 0 14px", fontFamily: "var(--dcv-serif)" }}>
              {shabbat.heading}
            </h2>
            <p className="dcv-copy-text" style={{ fontSize: 16, color: "#2d4447", lineHeight: 1.6, margin: "0 0 14px", fontWeight: 500 }}>
              {shabbat.lead}
            </p>
            <p className="dcv-copy-text" style={{ fontSize: 15, color: "#34484a", lineHeight: 1.6, margin: "0 0 14px" }}>
              {shabbat.text}
            </p>

            {/* Friday to Motzei Shabbat 8-step cards */}
            <div className="dcv-includes-card" style={{ marginTop: 28, marginBottom: 32 }}>
              <h3 className="dcv-includes-title" style={{ fontSize: 20, margin: "0 0 18px", color: "#1f383e" }}>
                Friday to Motzei Shabbat
              </h3>
              <div className="dcv-steps-grid">
                {shabbat.steps.map((step, index) => (
                  <div key={step.title} className="dcv-step-card">
                    <div className="dcv-step-card-header">
                      <span className="dcv-step-card-num">{index + 1}</span>
                      <span className="dcv-step-card-title">{step.title}</span>
                    </div>
                    <p className="dcv-step-card-text">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What makes it a proper Shabbat card */}
            <div className="dcv-includes-card" style={{ marginBottom: 32 }}>
              <h3 className="dcv-includes-title" style={{ fontSize: 20, margin: "0 0 18px", color: "#1f383e" }}>
                What makes it a proper Shabbat
              </h3>
              <ul className="dcv-includes-list">
                {shabbat.proper.map((item) => (
                  <li key={item} className="dcv-includes-item">
                    <span className="dcv-includes-bullet" aria-hidden="true" />
                    <div className="dcv-includes-text">
                      <Lead text={item} />
                    </div>
                  </li>
                ))}
              </ul>
              <p className="dcv-cn-callout" style={{ marginTop: 22 }}>
                {shabbat.scheduleNote}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery at the very bottom */}
        <section className="dcv-calendar-gallery-section" style={{ marginTop: 48, paddingTop: 10 }}>
          <div className="dcv-section-title" style={{ marginBottom: 24 }}>
            <div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", margin: "4px 0 0" }}>Gallery</h2>
            </div>
          </div>
          <PhotoGallery images={SHABBAT_GALLERY_IMAGES} alt="Casa Nizuc Shabbat Gallery" />
        </section>
      </Wrap>
    </>
  );
}

/**
 * Dining section page: styled matching the Calendar of Events design,
 * with full-width hero, logo, meals table, venue cards, and photo gallery at the very bottom.
 */
function DiningSection() {
  const { dining } = CASA_NIZUC_PAGE;

  return (
    <>
      <DetailHero
        image={dining.venues[1]?.image ?? AllImages.casaNizucDiningZait}
        kicker="CASA NIZUC · DINING"
        title="Dining"
        subtitle={dining.heading}
        logo={{ image: AllImages.casaNizucLogoWhite, alt: "Casa Nizuc Resort & Spa", position: "left" }}
      />
      <SubNav items={SUB_NAV} label="Casa Nizuc sections" />

      <Wrap>
        <p style={{ margin: "0 0 24px" }}>
          <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#dining`}>
            ← Back to Dining
          </Link>
        </p>

        {/* Content stack */}
        <section className="dcv-calendar-content-stack" style={{ margin: "0 0 36px" }}>
          <div style={{ maxWidth: 880 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1f383e", margin: "0 0 14px", fontFamily: "var(--dcv-serif)" }}>
              {dining.heading}
            </h2>
            <p className="dcv-copy-text" style={{ fontSize: 16, color: "#2d4447", lineHeight: 1.6, margin: "0 0 14px", fontWeight: 500 }}>
              {dining.lead}
            </p>
            <p className="dcv-copy-text" style={{ fontSize: 15, color: "#34484a", lineHeight: 1.6, margin: "0 0 20px" }}>
              {dining.text}
            </p>

            {/* Breakfast, lunch & dinner at a glance table card */}
            {/* <div className="dcv-includes-card" style={{ marginTop: 24, marginBottom: 36 }}>
              <h3 className="dcv-includes-title" style={{ fontSize: 20, margin: "0 0 18px", color: "#1f383e" }}>
                Breakfast, lunch &amp; dinner at a glance
              </h3>
              <PopupTable
                head={["Meal", "Where", "What to expect"]}
                rows={dining.meals.map((row) => [
                  <span key={row.meal}>
                    <b>{row.meal}</b>
                    {row.hours && (
                      <span className="dcv-cn-hours">
                        <Clock size={12} aria-hidden="true" /> {row.hours}
                      </span>
                    )}
                  </span>,
                  row.where,
                  row.what,
                ])}
              />
            </div> */}
          </div>

          {/* The Venues Grid */}
          <div style={{ marginTop: 32, marginBottom: 12 }}>
            <div className="dcv-section-title" style={{ marginBottom: 20 }}>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1e383d", margin: 0, fontFamily: "var(--dcv-serif)" }}>
                  The Venues
                </h3>
              </div>
            </div>

            <div className="dcv-venue-card-grid">
              {dining.venues.map((venue) => (
                <div key={venue.name} className="dcv-venue-card">
                  <div className="dcv-venue-card-img-wrap">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    {venue.badge && <span className="dcv-venue-card-badge">{venue.badge}</span>}
                  </div>
                  <div className="dcv-venue-card-body">
                    <h4 className="dcv-venue-card-title">{venue.name}</h4>
                    <span className="dcv-venue-card-subtitle">{venue.kind}</span>
                    <p className="dcv-venue-card-text">{venue.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery at the very bottom */}
        <section className="dcv-calendar-gallery-section" style={{ marginTop: 48, paddingTop: 10 }}>
          <div className="dcv-section-title" style={{ marginBottom: 24 }}>
            <div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", margin: "4px 0 0" }}>Gallery</h2>
            </div>
          </div>
          <PhotoGallery images={DINING_GALLERY_IMAGES} alt="Casa Nizuc Dining Gallery" />
        </section>
      </Wrap>
    </>
  );
}

/**
 * GKDE section page: styled matching the Calendar of Events design,
 * with full-width hero, logo, collection cards, package pricing, and photo gallery at the very bottom.
 */
function GkdeSection() {
  const { gkde } = CASA_NIZUC_PAGE;

  return (
    <>
      <DetailHero
        image={gkde.image}
        kicker="CASA NIZUC · GOURMET KOSHER DINING EXPERIENCE"
        title="GKDE"
        subtitle={gkde.tagline}
        logo={{ image: AllImages.casaNizucLogoWhite, alt: "Casa Nizuc Resort & Spa", position: "left" }}
      />
      <SubNav items={SUB_NAV} label="Casa Nizuc sections" />

      <Wrap>
        <p style={{ margin: "0 0 24px" }}>
          <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#gkde`}>
            ← Back to GKDE
          </Link>
        </p>

        {/* Content stack */}
        <section className="dcv-calendar-content-stack" style={{ margin: "0 0 36px" }}>
          <div style={{ maxWidth: 880 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1f383e", margin: "0 0 14px", fontFamily: "var(--dcv-serif)" }}>
              {gkde.heading}
            </h2>
            <p className="dcv-copy-text" style={{ fontSize: 16, color: "#2d4447", lineHeight: 1.6, margin: "0 0 14px", fontWeight: 500 }}>
              {gkde.lead}
            </p>
            {gkde.intro.map((paragraph) => (
              <p key={paragraph} className="dcv-copy-text" style={{ fontSize: 15, color: "#34484a", lineHeight: 1.6, margin: "0 0 14px" }}>
                {paragraph}
              </p>
            ))}

            {/* Explore Our Culinary Collection card */}
            <div className="dcv-includes-card" style={{ marginTop: 28, marginBottom: 28 }}>
              <h3 className="dcv-includes-title" style={{ fontSize: 20, margin: "0 0 18px", color: "#1f383e" }}>
                {gkde.collectionTitle}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {gkde.venues.map((venue) => (
                  <div key={venue.name} style={{ background: "#fbf9f5", borderRadius: 16, padding: "20px", border: "1px solid rgba(205, 172, 104, 0.25)" }}>
                    <h4 style={{ margin: "0 0 4px", fontSize: 16, color: "#1f383e" }}>
                      <strong className="dcv-cn-caps">{venue.name}</strong>
                    </h4>
                    <span style={{ fontSize: 13, color: "#9b7c50", fontWeight: 600, display: "block", marginBottom: 8 }}>
                      {venue.kind}
                    </span>
                    <p style={{ margin: 0, fontSize: 14, color: "#34484a", lineHeight: 1.55 }}>
                      {venue.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* One Exceptional Culinary Experience card */}
            <div className="dcv-includes-card" style={{ marginBottom: 28 }}>
              <h3 className="dcv-includes-title" style={{ fontSize: 20, margin: "0 0 12px", color: "#1f383e" }}>
                {gkde.experience.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, color: "#34484a", lineHeight: 1.6 }}>
                {gkde.experience.text}
              </p>
            </div>

            {/* Package Pricing card */}
            <div className="dcv-includes-card" style={{ marginBottom: 28 }}>
              <h3 className="dcv-includes-title" style={{ fontSize: 20, margin: "0 0 18px", color: "#1f383e" }}>
                {gkde.pricing.title}
              </h3>
              <ul className="dcv-includes-list">
                {gkde.pricing.items.map((item) => (
                  <li key={item} className="dcv-includes-item">
                    <span className="dcv-includes-bullet" aria-hidden="true" />
                    <div className="dcv-includes-text">
                      <strong>{item}</strong>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="dcv-cn-fine" style={{ marginTop: 16, color: "#6b7280", fontSize: 13 }}>
                {gkde.pricing.note}
              </p>
            </div>

            {/* Closing callouts */}
            {gkde.closing.map((line) => (
              <p key={line} className="dcv-cn-callout" style={{ margin: "14px 0" }}>
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* Gallery at the very bottom */}
        <section className="dcv-calendar-gallery-section" style={{ marginTop: 48, paddingTop: 10 }}>
          <div className="dcv-section-title" style={{ marginBottom: 24 }}>
            <div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", margin: "4px 0 0" }}>Gallery</h2>
            </div>
          </div>
          <PhotoGallery images={GKDE_GALLERY_IMAGES} alt="Casa Nizuc GKDE Gallery" />
        </section>
      </Wrap>
    </>
  );
}

/**
 * Ofek section page: styled matching the Calendar of Events design,
 * with full-width hero, logo, highlights card, and photo gallery at the very bottom.
 */
function OfekSection() {
  const { gkde } = CASA_NIZUC_PAGE;
  const { ofek } = gkde;

  return (
    <>
      <DetailHero
        image={ofek.image}
        kicker="CASA NIZUC · PREMIUM, NOT IN GKDE"
        title="Ofek"
        subtitle={ofek.lead}
        logo={{ image: AllImages.casaNizucLogoWhite, alt: "Casa Nizuc Resort & Spa", position: "left" }}
      />
      <SubNav items={SUB_NAV} label="Casa Nizuc sections" />

      <Wrap>
        <p style={{ margin: "0 0 24px" }}>
          <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#gkde`}>
            ← Back to GKDE
          </Link>
        </p>

        {/* Content stack */}
        <section className="dcv-calendar-content-stack" style={{ margin: "0 0 36px" }}>
          <div style={{ maxWidth: 880 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1f383e", margin: "0 0 14px", fontFamily: "var(--dcv-serif)" }}>
              {ofek.heading}
            </h2>
            <p className="dcv-copy-text" style={{ fontSize: 16, color: "#2d4447", lineHeight: 1.6, margin: "0 0 14px", fontWeight: 500 }}>
              {ofek.lead}
            </p>
            <p className="dcv-copy-text" style={{ fontSize: 15, color: "#34484a", lineHeight: 1.6, margin: "0 0 20px" }}>
              {ofek.text}
            </p>

            {/* Highlights card */}
            <div className="dcv-includes-card" style={{ marginTop: 24, marginBottom: 32 }}>
              <h3 className="dcv-includes-title" style={{ fontSize: 20, margin: "0 0 18px", color: "#1f383e" }}>
                Highlights
              </h3>
              <ul className="dcv-includes-list">
                {ofek.points.map((point) => (
                  <li key={point} className="dcv-includes-item">
                    <span className="dcv-includes-bullet" aria-hidden="true" />
                    <div className="dcv-includes-text">
                      <Lead text={point} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery at the very bottom */}
        <section className="dcv-calendar-gallery-section" style={{ marginTop: 48, paddingTop: 10 }}>
          <div className="dcv-section-title" style={{ marginBottom: 24 }}>
            <div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", margin: "4px 0 0" }}>Gallery</h2>
            </div>
          </div>
          <PhotoGallery images={OFEK_GALLERY_IMAGES} alt="Casa Nizuc Ofek Rooftop Gallery" />
        </section>
      </Wrap>
    </>
  );
}

/**
 * Main section router for /casa-nizuc/[section].
 * Calendar and About have their dedicated rich pages;
 * Shabbat, Dining, GKDE, and Ofek are designed following the Calendar of Events design,
 * with full-width hero, logo, luxury cards, and PhotoGallery at the very bottom.
 */
export function CasaNizucSectionView({ slug }: { slug: CasaNizucSectionSlug }) {
  if (slug === "calendar") {
    return <CasaNizucCalendarView />;
  }
  if (slug === "about") {
    return <CasaNizucAboutView />;
  }
  if (slug === "shabbat") {
    return <ShabbatSection />;
  }
  if (slug === "dining") {
    return <DiningSection />;
  }
  if (slug === "gkde") {
    return <GkdeSection />;
  }
  if (slug === "ofek") {
    return <OfekSection />;
  }
  return null;
}

export default CasaNizucSectionView;
