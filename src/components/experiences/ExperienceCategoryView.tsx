import { DetailHero, PhotoGallery, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignLink } from "@/components/shared/design";
import { experienceHref } from "@/lib/routes";
import ExperienceCards from "./ExperienceCards";
import type { ExperienceCategoryData } from "./experiences.types";

interface ExperienceCategoryViewProps {
  offeringId: string;
  data: ExperienceCategoryData;
  nav: DesignLink[];
  /** The hotel the visitor came from; cards linking to other experience pages keep it. */
  resortId?: string;
}

/** Entertainment / attractions / scholars / kids program: a hero, then a card grid with a details viewer and optional photo gallery. */
export function ExperienceCategoryView({ offeringId, data, nav, resortId }: ExperienceCategoryViewProps) {
  const items = data.items.map((item) => ({
    ...item,
    href: item.linkTo ? experienceHref(offeringId, data.programId, item.linkTo, resortId) : undefined,
  }));

  return (
    <>
      <DetailHero
        image={data.heroImage}
        imagePosition={data.heroImagePosition}
        kicker={data.programTitle}
        title={data.title}
      />
      <SubNav items={nav} label={`${data.programTitle} sections`} />
      <Wrap>
        <SectionTitle title={data.title} description={data.description} />
        <ExperienceCards
          items={items}
          columns={data.columns}
          layout={data.layout}
          viewerTitle={data.viewerTitle ?? data.title}
        />
      </Wrap>
      {data.gallery && data.gallery.images && data.gallery.images.length > 0 && (
        <Wrap id="gallery" className="dcv-wrap--stack">
          <SectionTitle
            title={data.gallery.title ?? `${data.title} Photo Gallery`}
            description={data.gallery.description}
          />
          <PhotoGallery images={data.gallery.images} alt={`${data.programTitle} ${data.title}`} />
        </Wrap>
      )}
    </>
  );
}

export default ExperienceCategoryView;
