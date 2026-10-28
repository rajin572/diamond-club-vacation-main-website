import Link from "next/link";
import { DetailHero, PhotoGallery, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignImage, DesignLink } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { AllImages } from "../../../public/images/AllImages";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { CasaNizucCalendarView } from "./CasaNizucCalendarView";
import { CasaNizucAboutView } from "./CasaNizucAboutView";
import { CasaNizucDiningVenues, CasaNizucGkdeVenues } from "./CasaNizucDiningVenues";

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

function splitLeadText(text: string): { title: string; desc: string } {
  const at = text.indexOf(": ");
  if (at < 0) return { title: text, desc: "" };
  return { title: text.slice(0, at), desc: text.slice(at + 2) };
}

/**
 * Shabbat section page: designed matching the authentic Passover Casa Nizuc design
 * (DetailHero, SubNav, SectionTitle, dcv-card grids, callouts, and PhotoGallery at the bottom).
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

      {/* Intro & Overview */}
      <Wrap className="dcv-wrap--stack">
        <p style={{ margin: "0 0 16px" }}>
          <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#shabbat`}>
            ← Back to Shabbat
          </Link>
        </p>

        <SectionTitle title={shabbat.heading} />
        <p className="dcv-lead" style={{ maxWidth: 840, marginBottom: 16 }}>
          {shabbat.lead}
        </p>
        <p style={{ fontSize: 16, color: "var(--dcv-muted)", lineHeight: 1.7, maxWidth: 900 }}>
          {shabbat.text}
        </p>
      </Wrap>

      {/* Friday to Motzei Shabbat: 8-step cards */}
      <Wrap className="dcv-wrap--stack">
        <SectionTitle title="Friday to Motzei Shabbat" />
        <div className="dcv-grid4">
          {shabbat.steps.map((step, index) => (
            <article key={step.title} className="dcv-card">
              <div className="dcv-body">
                <div className="dcv-card-tag">Step {index + 1}</div>
                <h3 style={{ fontSize: 22 }}>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Wrap>

      {/* What makes it a proper Shabbat: 6 cards */}
      <Wrap className="dcv-wrap--stack">
        <SectionTitle title="What makes it a proper Shabbat" />
        <div className="dcv-grid3">
          {shabbat.proper.map((item) => {
            const { title, desc } = splitLeadText(item);
            return (
              <article key={item} className="dcv-card">
                <div className="dcv-body">
                  <div className="dcv-card-tag">Halachic Standard</div>
                  <h3 style={{ fontSize: 22 }}>{title}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="dcv-cn-callout" style={{ maxWidth: 800, margin: "32px auto 0", textAlign: "center" }}>
          {shabbat.scheduleNote}
        </p>
      </Wrap>

      {/* Photo Gallery at the very bottom */}
      <Wrap id="gallery" className="dcv-wrap--stack">
        <SectionTitle title="Shabbat Gallery" />
        <PhotoGallery images={SHABBAT_GALLERY_IMAGES} alt="Casa Nizuc Shabbat Gallery" />
      </Wrap>
    </>
  );
}

/**
 * Dining section page: designed matching the authentic Passover Casa Nizuc design.
 * Venues are interactive cards that open detailed hours and meal expectations on click.
 * Standalone chart is hidden from main flow; meal schedule is accessible via venue cards.
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

      {/* Intro & Overview */}
      <Wrap className="dcv-wrap--stack">
        <p style={{ margin: "0 0 16px" }}>
          <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#dining`}>
            ← Back to Dining
          </Link>
        </p>

        <SectionTitle title={dining.heading} />
        <p className="dcv-lead" style={{ maxWidth: 840, marginBottom: 16 }}>
          {dining.lead}
        </p>
        <p style={{ fontSize: 16, color: "var(--dcv-muted)", lineHeight: 1.7, maxWidth: 900 }}>
          {dining.text}
        </p>
      </Wrap>

      {/* Venues Grid (interactive cards that open venue details and meal hours) */}
      <Wrap id="venues" className="dcv-wrap--stack">
        <SectionTitle title="The Venues" />
        <CasaNizucDiningVenues venues={dining.venues} meals={dining.meals} />
      </Wrap>

      {/* Photo Gallery at the very bottom */}
      <Wrap id="gallery" className="dcv-wrap--stack">
        <SectionTitle title="Culinary Gallery" />
        <PhotoGallery images={DINING_GALLERY_IMAGES} alt="Casa Nizuc Dining Gallery" />
      </Wrap>
    </>
  );
}

/**
 * GKDE section page: designed matching the authentic Passover Casa Nizuc design
 * (DetailHero, SubNav, SectionTitle, culinary collection cards, package pricing cards, and PhotoGallery at the bottom).
 */
function GkdeSection() {
  const { gkde, dining } = CASA_NIZUC_PAGE;

  const venueImages: Record<string, DesignImage> = {
    "Âshân": AllImages.casaNizucDiningAshan,
    "Zait": AllImages.casaNizucDiningZait,
    "Mayim": AllImages.casaNizucMayimBuffet,
  };

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

      {/* Intro & Overview */}
      <Wrap className="dcv-wrap--stack">
        <p style={{ margin: "0 0 16px" }}>
          <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#gkde`}>
            ← Back to GKDE
          </Link>
        </p>

        <SectionTitle title={gkde.heading} />
        <p className="dcv-lead" style={{ maxWidth: 840, marginBottom: 16 }}>
          {gkde.lead}
        </p>
        {gkde.intro.map((paragraph) => (
          <p key={paragraph} style={{ fontSize: 16, color: "var(--dcv-muted)", lineHeight: 1.7, maxWidth: 900, marginBottom: 12 }}>
            {paragraph}
          </p>
        ))}
      </Wrap>

      {/* Culinary Collection: 3 Venue Cards (clickable for hours and details) */}
      <Wrap className="dcv-wrap--stack">
        <SectionTitle title={gkde.collectionTitle} />
        <CasaNizucGkdeVenues
          venues={gkde.venues}
          meals={dining.meals}
          allVenues={dining.venues}
          venueImages={venueImages}
        />
      </Wrap>

      {/* Experience & Package Pricing in dcv-grid2 */}
      <Wrap className="dcv-wrap--stack">
        <div className="dcv-grid2">
          {/* Card 1: Experience */}
          <article className="dcv-card">
            <div className="dcv-body">
              <div className="dcv-card-tag">All-Inclusive Dining</div>
              <h3 style={{ fontSize: 26 }}>{gkde.experience.title}</h3>
              <p style={{ fontSize: 16 }}>{gkde.experience.text}</p>
            </div>
          </article>

          {/* Card 2: Pricing */}
          <article className="dcv-card">
            <div className="dcv-body">
              <div className="dcv-card-tag">Rates &amp; Savings</div>
              <h3 style={{ fontSize: 26 }}>{gkde.pricing.title}</h3>
              <ul className="dcv-card-meta" style={{ margin: "16px 0", fontSize: 15 }}>
                {gkde.pricing.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#9a6b1d" }}>•</span> {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: 13, color: "var(--dcv-muted)", fontStyle: "italic" }}>
                {gkde.pricing.note}
              </p>
            </div>
          </article>
        </div>
      </Wrap>

      {/* GKDE Closing Callout */}
      <Wrap className="dcv-wrap--stack">
        <div className="dcv-cn-callout" style={{ maxWidth: 840, margin: "0 auto", textAlign: "center" }}>
          {gkde.closing.map((line) => (
            <p key={line} style={{ fontSize: 18, fontWeight: 600, color: "#1f383e", margin: "6px 0", fontFamily: "var(--dcv-serif)" }}>
              {line}
            </p>
          ))}
        </div>
      </Wrap>

      {/* Photo Gallery at the very bottom */}
      <Wrap id="gallery" className="dcv-wrap--stack">
        <SectionTitle title="GKDE Gallery" />
        <PhotoGallery images={GKDE_GALLERY_IMAGES} alt="Casa Nizuc GKDE Gallery" />
      </Wrap>
    </>
  );
}

/**
 * Ofek section page: designed matching the authentic Passover Casa Nizuc design
 * (DetailHero, SubNav, SectionTitle, rooftop highlight cards, and PhotoGallery at the bottom).
 */
function OfekSection() {
  const { gkde } = CASA_NIZUC_PAGE;
  const ofek = gkde.ofek;

  return (
    <>
      <DetailHero
        image={ofek.image}
        kicker="CASA NIZUC · OFEK ROOFTOP"
        title="Ofek"
        subtitle={ofek.heading}
        logo={{ image: AllImages.casaNizucLogoWhite, alt: "Casa Nizuc Resort & Spa", position: "left" }}
      />
      <SubNav items={SUB_NAV} label="Casa Nizuc sections" />

      {/* Intro & Overview */}
      <Wrap className="dcv-wrap--stack">
        <p style={{ margin: "0 0 16px" }}>
          <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#gkde`}>
            ← Back to GKDE
          </Link>
        </p>

        <SectionTitle title={ofek.heading} />
        <p className="dcv-lead" style={{ maxWidth: 840, marginBottom: 16 }}>
          {ofek.lead}
        </p>
        <p style={{ fontSize: 16, color: "var(--dcv-muted)", lineHeight: 1.7, maxWidth: 900 }}>
          {ofek.text}
        </p>
      </Wrap>

      {/* Rooftop Highlights Cards */}
      <Wrap className="dcv-wrap--stack">
        <SectionTitle title="Rooftop Highlights" />
        <div className="dcv-grid3">
          {ofek.points.map((point) => {
            const { title, desc } = splitLeadText(point);
            return (
              <article key={point} className="dcv-card">
                <div className="dcv-body">
                  <div className="dcv-card-tag">Rooftop Experience</div>
                  <h3 style={{ fontSize: 22 }}>{title}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Wrap>

      {/* Photo Gallery at the very bottom */}
      <Wrap id="gallery" className="dcv-wrap--stack">
        <SectionTitle title="Ofek Rooftop Gallery" />
        <PhotoGallery images={OFEK_GALLERY_IMAGES} alt="Casa Nizuc Ofek Rooftop Gallery" />
      </Wrap>
    </>
  );
}

/**
 * Main section router for /casa-nizuc/[section].
 * Calendar of Events has its dedicated page (untouched per user request);
 * About has its dedicated page;
 * Shabbat, Dining, GKDE, and Ofek are designed in the authentic Passover Casa Nizuc design
 * (DetailHero with logo, SectionTitle, dcv-card grids, and PhotoGallery at the very bottom).
 */
export function CasaNizucSectionView({ slug }: { slug: CasaNizucSectionSlug }) {
  if (slug === "calendar") {
    return <CasaNizucCalendarView />;
  }

  if (slug === "about") {
    return <CasaNizucAboutView />;
  }

  switch (slug) {
    case "shabbat":
      return <ShabbatSection />;
    case "dining":
      return <DiningSection />;
    case "gkde":
      return <GkdeSection />;
    case "ofek":
      return <OfekSection />;
    default:
      return null;
  }
}
