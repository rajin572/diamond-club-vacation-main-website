import Link from "next/link";
import {
  DesignCard,
  DetailHero,
  PhotoGallery,
  RoomCard,
  SectionTitle,
  SubNav,
  Wrap,
} from "@/components/shared/design";
import type { DesignLink } from "@/components/shared/design";
import { experienceHref, inquireHref, restaurantHref, poolHref, roomHref, spaHref } from "@/lib/routes";
import { buildHotelSubNav } from "@/lib/hotel-subnav";
import { ProgramSections, programSectionId } from "@/components/programs/ProgramExtras";
import { ProgramBrochureButton } from "@/components/programs/ProgramBrochureButton";
import { ResortDiningCards } from "./ResortDiningSection";
import type { ProgramData } from "@/components/programs/programs.types";
import type { ResortCategoryCard, ResortData, ResortDetailItem, ResortTarget } from "./resorts.types";

interface ResortMainViewProps {
  offeringId: string;
  programId: string;
  data: ResortData;
  /** The program this hotel belongs to; its experience / explore sections are shown here. */
  program?: ProgramData;
}

function overviewGridClass(cardCount: number): string {
  if (cardCount <= 2) return "dcv-grid2";
  if (cardCount === 5) return "dcv-grid5";
  if (cardCount % 4 === 0) return "dcv-grid4";
  return "dcv-grid3";
}

/** Pill links under a section heading, one per venue that has its own detail page. */
function VenueChips({ label, items, hrefFor }: { label: string; items: ResortDetailItem[]; hrefFor: (id: string) => string }) {
  if (items.length === 0) return null;

  return (
    <nav className="dcv-gallery-tabs" aria-label={label}>
      {items.map((item) => (
        <Link key={item.id} href={hrefFor(item.id)}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

/**
 * A complete hotel page: hero, floating sub navigation, "discover" cards, then one block per category
 * (rooms, dining, pools, wellness, spa, gallery). Every resort (St. Regis, EDITION, Park Hyatt, Waldorf,
 * Casa Nizuc) renders through this one component (client design: st-regis.html and its sub pages).
 */
export function ResortMainView({ offeringId, programId, data, program }: ResortMainViewProps) {
  const targetHref = (target: ResortTarget): string => {
    if (target.type === "section") return `#${target.section}`;
    // The spa has its own block on the page (Park Hyatt) or its own detail page (every other hotel).
    if (target.type === "spa") {
      return data.spa?.section ? "#spa" : spaHref(offeringId, programId, data.resortId);
    }
    return experienceHref(offeringId, programId, target.experienceType, data.resortId);
  };

  const navItems: DesignLink[] = data.showSubNav
    ? buildHotelSubNav({
        offeringId,
        programId,
        resortId: data.resortId,
        isHotelMainPage: true,
      })
    : [];

  const { rooms, dining, pools, wellness, spa, gallery } = data;

  // The spa is its own card right after "Wellness & Fitness" (client request), built from the hotel's spa data.
  const overviewCards: ResortCategoryCard[] = [...data.overview.cards];
  if (spa && !overviewCards.some((card) => card.id === "spa")) {
    const wellnessIndex = overviewCards.findIndex((card) => card.id === "wellness");
    const wellnessCard = overviewCards[wellnessIndex];
    overviewCards.splice(wellnessIndex + 1 || overviewCards.length, 0, {
      id: "spa",
      title: "Spa",
      description: wellnessCard?.description ? spa.item.subtitle : undefined,
      image: spa.item.image,
      target: { type: "spa" },
    });
  }

  return (
    <>
      <DetailHero
        image={data.heroImage}
        kicker={data.kicker}
        title={data.resortName}
        subtitle={data.showTagline === false ? undefined : data.tagline}
        logo={data.heroLogo ? { ...data.heroLogo, wordmark: true } : undefined}
        actions={program?.brochure ? <ProgramBrochureButton brochure={program.brochure} /> : undefined}
      />
      <SubNav items={navItems} label={`${data.resortName} sections`} />

      {/* =========================================================================
          SECTION 1 (CARDS): All high-level category cards at the top
          ========================================================================= */}

      {/* 1. Hotel Cards */}
      <Wrap id="overview">
        <SectionTitle
          title={data.overview.title || "Hotel"}
          description={data.overview.description || "Accommodations, oceanfront pools, restorative wellness, and private sanctuaries."}
        />
        <div className={overviewGridClass(overviewCards.length)}>
          {overviewCards.map((card) => (
            <DesignCard
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              href={targetHref(card.target)}
            />
          ))}
        </div>
      </Wrap>

      {/* 2. Dining Cards */}
      {dining && (
        <ResortDiningCards
          offeringId={offeringId}
          programId={programId}
          resortId={data.resortId}
          resortName={data.resortName}
          dining={dining}
        />
      )}

      {/* 3 & 4. Programs & Local Attractions Cards */}
      {program && (
        <ProgramSections
          offeringId={offeringId}
          programId={programId}
          sections={program.sections}
          resortId={data.resortId}
        />
      )}

      {/* =========================================================================
          SECTION 2 (DETAILS): All in-depth detail blocks on the bottom
          ========================================================================= */}

      {/* Details 1: Rooms & Suites */}
      <Wrap id="rooms" className="dcv-wrap--stack">
        <SectionTitle title={rooms.title} description={rooms.description} />
        <div className="dcv-roomlist">
          {rooms.items.map((room) => (
            <RoomCard
              key={room.id}
              image={room.image}
              title={room.title}
              meta={room.subtitle}
              href={rooms.linkToDetails ? roomHref(offeringId, programId, data.resortId, room.id) : undefined}
            />
          ))}
        </div>
      </Wrap>

      {/* Details 2: Pools & Beaches */}
      {pools && (
        <Wrap id="pools" className="dcv-wrap--stack">
          <SectionTitle title={pools.title} description={pools.description} />
          <VenueChips
            label={`${data.resortName} pools`}
            items={pools.items}
            hrefFor={(id) => poolHref(offeringId, programId, data.resortId, id)}
          />
          <PhotoGallery images={pools.images} alt={`${data.resortName} pools and beach`} />
        </Wrap>
      )}

      {/* Details 4: Wellness & Fitness */}
      {wellness && (
        <Wrap id="wellness" className="dcv-wrap--stack">
          <SectionTitle title={wellness.title} description={wellness.description} />
          <div className="dcv-gallery-tabs">
            {spa && !spa.section && (
              <Link className="dcv-on" href={spaHref(offeringId, programId, data.resortId)}>
                {spa.item.title} →
              </Link>
            )}
            {wellness.activities.map((activity) => (
              <span key={activity.id} title={activity.description}>
                {activity.title}
              </span>
            ))}
          </div>
          <PhotoGallery images={wellness.images} alt={`${data.resortName} wellness`} />
        </Wrap>
      )}

      {/* Details 5: Spa */}
      {spa?.section && (
        <Wrap id="spa" className="dcv-wrap--stack">
          <SectionTitle title={spa.section.title} description={spa.section.description} />
          <div className="dcv-gallery-tabs">
            <Link className="dcv-on" href={spaHref(offeringId, programId, data.resortId)}>
              {spa.item.title} details →
            </Link>
          </div>
          <PhotoGallery images={spa.section.images} alt={`${data.resortName} spa`} />
        </Wrap>
      )}

      {/* Details 6: Gallery */}
      <Wrap id="gallery" className="dcv-wrap--stack">
        <SectionTitle title={gallery.title} description={gallery.description} />
        <PhotoGallery images={gallery.images} alt={`${data.resortName} gallery`} />
      </Wrap>
    </>
  );
}

export default ResortMainView;
