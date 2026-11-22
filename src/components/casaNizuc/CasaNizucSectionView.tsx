import Link from "next/link";
import { DetailHero, PhotoGallery, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignImage } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { AllImages } from "../../../public/images/AllImages";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { CasaNizucCalendarView } from "./CasaNizucCalendarView";
import { CasaNizucAboutPage } from "./CasaNizucAboutPage";
import { CasaNizucDiningPage } from "./CasaNizucDiningPage";
import { CasaNizucEventsPage } from "./CasaNizucEventsPage";
import { CasaNizucOverviewPage } from "./CasaNizucOverviewPage";
import { CasaNizucGkdePage } from "./CasaNizucGkdePage";
import { CasaNizucShabbatPage } from "./CasaNizucShabbatPage";
import { CASA_NIZUC_SUB_NAV } from "./casaNizucNav";

/** The pages that open from the year-round Casa Nizuc page. */
export const CASA_NIZUC_SECTION_SLUGS = ["overview", "about", "shabbat", "dining", "gkde", "ofek", "calendar", "events"] as const;
export type CasaNizucSectionSlug = (typeof CASA_NIZUC_SECTION_SLUGS)[number];

export function isCasaNizucSectionSlug(slug: string): slug is CasaNizucSectionSlug {
  return (CASA_NIZUC_SECTION_SLUGS as readonly string[]).includes(slug);
}

export function casaNizucSectionHref(slug: CasaNizucSectionSlug): string {
  return `${CASA_NIZUC_HREF}/${slug}`;
}

const SUB_NAV = CASA_NIZUC_SUB_NAV;

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

  if (slug === "overview") {
    return <CasaNizucOverviewPage />;
  }

  if (slug === "about") {
    return <CasaNizucAboutPage />;
  }

  switch (slug) {
    case "shabbat":
      return <CasaNizucShabbatPage />;
    case "dining":
      return <CasaNizucDiningPage />;
    case "gkde":
      return <CasaNizucGkdePage />;
    case "ofek":
      return <OfekSection />;
    case "events":
      return <CasaNizucEventsPage />;
    default:
      return null;
  }
}
