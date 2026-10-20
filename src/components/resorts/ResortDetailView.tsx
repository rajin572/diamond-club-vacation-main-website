import Link from "next/link";
import {
  DetailHero,
  FeatureGroup,
  PhotoGallery,
  PhotoStack,
  SectionTitle,
  StatsRow,
  SubNav,
  Wrap,
} from "@/components/shared/design";
import type { DesignLink } from "@/components/shared/design";
import { buildHotelSubNav } from "@/lib/hotel-subnav";
import { diningHref, resortHref } from "@/lib/routes";
import type { ResortData, ResortDetailItem } from "./resorts.types";
import { DescriptionText } from "./DescriptionText";

export type ResortDetailKind = "room" | "restaurant" | "pool" | "spa";

interface KindConfig {
  aboutTitle: string;
  asideTitle: string;
  /** Section of the resort page this kind of detail page belongs to. */
  section: "rooms" | "dining" | "pools" | "wellness";
  sectionLabel: string;
}

const KIND: Record<ResortDetailKind, KindConfig> = {
  room: { aboutTitle: "About this room", asideTitle: "Room Gallery", section: "rooms", sectionLabel: "All Rooms" },
  restaurant: { aboutTitle: "About this restaurant", asideTitle: "Gallery", section: "dining", sectionLabel: "Dining" },
  pool: { aboutTitle: "About this pool", asideTitle: "Gallery", section: "pools", sectionLabel: "Pools & Beach" },
  spa: { aboutTitle: "About the spa", asideTitle: "Spa Gallery", section: "wellness", sectionLabel: "Wellness" },
};

interface ResortDetailViewProps {
  offeringId: string;
  programId: string;
  data: ResortData;
  item: ResortDetailItem;
  kind: ResortDetailKind;
}

/**
 * One layout for every resort detail page (room, restaurant, pool, spa): hero, key facts, description and
 * feature lists beside a photo stack, then the full gallery (client design: st-regis-deluxe-room.html).
 */
export function ResortDetailView({ offeringId, programId, data, item, kind }: ResortDetailViewProps) {
  const config = KIND[kind];

  const navItems: DesignLink[] = buildHotelSubNav({
    offeringId,
    programId,
    resortId: data.resortId,
    isHotelMainPage: false,
  });

  // Back to the list this page was opened from, so the visitor lands on the same section, not at the top of the hotel page.
  const backHref = kind === "restaurant" ? diningHref(offeringId, programId, data.resortId) : `${resortHref(offeringId, programId, data.resortId)}#${config.section}`;

  const heroImage = item.gallery[0] ?? item.image;
  const stats = (item.stats ?? []).slice(0, 4);

  return (
    <>
      <DetailHero image={heroImage} kicker={data.resortName} title={item.title} subtitle={item.subtitle || undefined} />
      <SubNav items={navItems} label={`${data.resortName} sections`} />

      <Wrap>
        <p style={{ margin: "0 0 18px" }}>
          <Link className="dcv-link" href={backHref}>
            ← Back to {config.sectionLabel}
          </Link>
        </p>
        <StatsRow stats={stats} />
        <div className="dcv-content2">
          <div>
            <h2>{config.aboutTitle}</h2>
            <p className="dcv-lead">
              <DescriptionText text={item.description} />
            </p>
            {(item.groups ?? []).map((group) => (
              <FeatureGroup key={group.title} group={group} />
            ))}
          </div>
          <aside>
            <h2>{config.asideTitle}</h2>
            <PhotoStack images={item.gallery} alt={`${item.title} at ${data.resortName}`} />
          </aside>
        </div>
      </Wrap>

      {item.gallery.length > 4 && (
        <Wrap id="photos" className="dcv-wrap--stack">
          <SectionTitle title="Full gallery" description={`${item.title} · ${data.resortName}`} />
          <PhotoGallery images={item.gallery} alt={`${item.title} at ${data.resortName}`} />
        </Wrap>
      )}
    </>
  );
}

export default ResortDetailView;
