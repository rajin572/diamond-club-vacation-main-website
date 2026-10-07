import {
  DesignButton,
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
import { inquireHref, resortHref } from "@/lib/routes";
import type { ResortData, ResortDetailItem } from "./resorts.types";

export type ResortDetailKind = "room" | "restaurant" | "pool" | "spa";

interface KindConfig {
  aboutTitle: string;
  asideTitle: string;
  /** Section of the resort page this kind of detail page belongs to. */
  section: "rooms" | "dining" | "pools" | "wellness";
  sectionLabel: string;
  inquireLabel: string;
}

const KIND: Record<ResortDetailKind, KindConfig> = {
  room: { aboutTitle: "About this room", asideTitle: "Room Gallery", section: "rooms", sectionLabel: "All Rooms", inquireLabel: "Inquire about this room" },
  restaurant: { aboutTitle: "About this restaurant", asideTitle: "Gallery", section: "dining", sectionLabel: "Dining", inquireLabel: "Inquire about dining" },
  pool: { aboutTitle: "About this pool", asideTitle: "Gallery", section: "pools", sectionLabel: "Pools & Beach", inquireLabel: "Inquire about this pool" },
  spa: { aboutTitle: "About the spa", asideTitle: "Spa Gallery", section: "wellness", sectionLabel: "Wellness", inquireLabel: "Inquire about the spa" },
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
  const hotelHref = resortHref(offeringId, programId, data.resortId);

  const inquire =
    kind === "room"
      ? inquireHref({ destination: programId, resort: data.resortId, room: item.id })
      : kind === "restaurant"
        ? inquireHref({ destination: programId, resort: data.resortId, dining: item.id })
        : kind === "pool"
          ? inquireHref({ destination: programId, resort: data.resortId, pool: item.id })
          : inquireHref({ destination: programId, resort: data.resortId, topic: "spa" });

  const navItems: DesignLink[] = [
    { label: "Hotel", href: hotelHref },
    { label: config.sectionLabel, href: `${hotelHref}#${config.section}` },
    ...(kind !== "restaurant" && data.dining ? [{ label: "Dining", href: `${hotelHref}#dining` }] : []),
    { label: "Gallery", href: `${hotelHref}#gallery` },
  ];

  const heroImage = item.gallery[0] ?? item.image;
  const stats = (item.stats ?? []).slice(0, 4);

  return (
    <>
      <DetailHero image={heroImage} kicker={data.resortName} title={item.title} subtitle={item.subtitle || undefined} />
      <SubNav items={navItems} label={`${data.resortName} sections`} />

      <Wrap>
        <StatsRow stats={stats} />
        <div className="dcv-content2">
          <div>
            <h2>{config.aboutTitle}</h2>
            <p className="dcv-lead">{item.description}</p>
            {(item.groups ?? []).map((group) => (
              <FeatureGroup key={group.title} group={group} />
            ))}
          </div>
          <aside>
            <h2>{config.asideTitle}</h2>
            <PhotoStack images={item.gallery} alt={`${item.title} at ${data.resortName}`} />
            <p style={{ margin: "16px 0 0" }}>
              <DesignButton href={inquire}>{config.inquireLabel}</DesignButton>
            </p>
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
