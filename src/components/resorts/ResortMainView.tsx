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
import type { ResortData, ResortDetailItem, ResortTarget } from "./resorts.types";

interface ResortMainViewProps {
  offeringId: string;
  programId: string;
  data: ResortData;
}

function overviewGridClass(cardCount: number): string {
  if (cardCount <= 2) return "dcv-grid2";
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
export function ResortMainView({ offeringId, programId, data }: ResortMainViewProps) {
  const targetHref = (target: ResortTarget): string =>
    target.type === "section" ? `#${target.section}` : experienceHref(offeringId, programId, target.experienceType);

  const navItems: DesignLink[] = data.showSubNav
    ? [
        { label: data.overviewLabel, href: "#overview" },
        ...data.overview.cards.map((card) => ({ label: card.navLabel ?? card.title, href: targetHref(card.target) })),
        ...(data.subNavInquire
          ? [{ label: "Inquire", href: inquireHref({ destination: programId, resort: data.resortId }) }]
          : []),
      ]
    : [];

  const { rooms, dining, pools, wellness, spa, gallery } = data;

  return (
    <>
      <DetailHero image={data.heroImage} kicker={data.kicker} title={data.resortName} subtitle={data.tagline} />
      <SubNav items={navItems} label={`${data.resortName} sections`} />

      <Wrap id="overview">
        {data.overview.title && (
          <SectionTitle title={data.overview.title} description={data.overview.description} />
        )}
        <div className={overviewGridClass(data.overview.cards.length)}>
          {data.overview.cards.map((card) => (
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

      {dining && (
        <Wrap id="dining" className="dcv-wrap--stack">
          <SectionTitle title={dining.title} description={dining.description} />
          <VenueChips
            label={`${data.resortName} restaurants`}
            items={dining.items}
            hrefFor={(id) => restaurantHref(offeringId, programId, data.resortId, id)}
          />
          <PhotoGallery images={dining.images} alt={`${data.resortName} dining`} />
        </Wrap>
      )}

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

      <Wrap id="gallery" className="dcv-wrap--stack">
        <SectionTitle title={gallery.title} description={gallery.description} />
        <PhotoGallery images={gallery.images} alt={`${data.resortName} gallery`} />
      </Wrap>
    </>
  );
}

export default ResortMainView;
