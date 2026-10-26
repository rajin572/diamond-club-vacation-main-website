import { DesignCard, DetailHero, SectionTitle, Wrap } from "@/components/shared/design";
import { resortHref } from "@/lib/routes";
import { ProgramAbout } from "./ProgramExtras";
import { ProgramBrochureButton } from "./ProgramBrochureButton";
import type { ProgramData } from "./programs.types";

interface ProgramMainViewProps {
  offeringId: string;
  data: ProgramData;
}

/**
 * A program's own page: its hotels, then the About block (the hotel subnav's About link leads to the program's About page). The experience / explore sections live
 * inside each hotel page (client request), so one component serves every program.
 */
export function ProgramMainView({ offeringId, data }: ProgramMainViewProps) {
  const { hotels } = data;

  return (
    <>
      <DetailHero
        image={data.heroImage}
        kicker={data.kicker}
        title={data.title}
        subtitle={data.tagline}
        actions={data.brochure ? <ProgramBrochureButton brochure={data.brochure} /> : undefined}
      />
      <Wrap>
        <SectionTitle title={hotels.title} />
        <div className={hotels.columns === 1 ? "dcv-grid1" : "dcv-grid2"}>
          {hotels.cards.map((card) => (
            <DesignCard
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              logos={card.logos}
              href={card.target?.type === "resort" ? resortHref(offeringId, data.id, card.target.resortId) : undefined}
            />
          ))}
        </div>
      </Wrap>
      <ProgramAbout about={data.about} />
    </>
  );
}

export default ProgramMainView;
