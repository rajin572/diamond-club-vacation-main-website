import { DetailHero, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignLink } from "@/components/shared/design";
import { experienceHref, inquireHref } from "@/lib/routes";
import ExperienceCards from "./ExperienceCards";
import type { ExperienceCategoryData } from "./experiences.types";

interface ExperienceCategoryViewProps {
  offeringId: string;
  data: ExperienceCategoryData;
  nav: DesignLink[];
}

/** Attractions / entertainment / scholars / kids program (client design: edition-entertainment.html and siblings). */
export function ExperienceCategoryView({ offeringId, data, nav }: ExperienceCategoryViewProps) {
  const items = data.items.map((item) => ({
    ...item,
    href: item.linkTo ? experienceHref(offeringId, data.programId, item.linkTo) : undefined,
  }));

  return (
    <>
      <DetailHero image={data.heroImage} kicker={data.programTitle} title={data.title} subtitle={data.programTitle} />
      <SubNav items={nav} label={`${data.programTitle} sections`} />
      <Wrap>
        <SectionTitle title={data.title} description={data.description} />
        <ExperienceCards
          items={items}
          columns={data.columns}
          inquireHref={inquireHref({ destination: data.programId, topic: data.experienceType })}
        />
      </Wrap>
    </>
  );
}

export default ExperienceCategoryView;
