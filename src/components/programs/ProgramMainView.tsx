import { DesignCard, DetailHero, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignLink } from "@/components/shared/design";
import { experienceHref, inquireHref, programHref, resortHref } from "@/lib/routes";
import type { ProgramCardData, ProgramData, ProgramTarget } from "./programs.types";

interface ProgramMainViewProps {
  offeringId: string;
  data: ProgramData;
}

function targetHref(offeringId: string, programId: string, target: ProgramTarget): string {
  return target.type === "resort"
    ? resortHref(offeringId, programId, target.resortId)
    : experienceHref(offeringId, programId, target.experienceType);
}

const GRID_CLASS = { 2: "dcv-grid2", 3: "dcv-grid3", 4: "dcv-grid4" } as const;

/**
 * A program's details page (reached with "See Details" from its overview): grouped cards for where to stay,
 * the experiences and what to explore. One component for every program (client app: "Diamond Club Reserve").
 */
export function ProgramMainView({ offeringId, data }: ProgramMainViewProps) {
  const card = (item: ProgramCardData) => (
    <DesignCard
      key={item.id}
      image={item.image}
      title={item.title}
      description={item.description}
      logos={item.logos}
      href={item.target ? targetHref(offeringId, data.id, item.target) : undefined}
    />
  );

  const navItems: DesignLink[] = (data.nav ?? []).map((item) => ({
    label: item.label,
    href:
      item.target.type === "overview"
        ? programHref(offeringId, data.id)
        : item.target.type === "inquire"
          ? inquireHref({ destination: data.id })
          : targetHref(offeringId, data.id, item.target),
  }));

  return (
    <>
      <DetailHero image={data.heroImage} kicker={data.kicker} title={data.title} subtitle={data.tagline} />
      <SubNav items={navItems} label={`${data.title} sections`} />
      <Wrap>
        {data.sections.map((section, index) => (
          <div key={section.title} className={index > 0 ? "dcv-program-section" : undefined}>
            <SectionTitle title={section.title} description={section.description} />
            <div className="dcv-card-blocks">
              {section.blocks.map((block, blockIndex) => (
                <div key={blockIndex} className={GRID_CLASS[block.columns]}>
                  {block.cards.map(card)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Wrap>
    </>
  );
}

export default ProgramMainView;
