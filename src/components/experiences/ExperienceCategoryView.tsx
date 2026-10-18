import { DetailHero, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
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

/** Entertainment / attractions / scholars / kids program: a hero, then a card grid with a details viewer. */
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
    </>
  );
}

export default ExperienceCategoryView;
