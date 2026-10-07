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

/**
 * Renders every program (Diamond Club Reserve, Guettaway, Diamond Blue, and any future program) from one
 * component (client design: reserve.html / guettaway.html / diamond-blue.html).
 */
export function ProgramMainView({ offeringId, data }: ProgramMainViewProps) {
  const cardLinks = (cards: ProgramCardData[]) =>
    cards.map((card) => (
      <DesignCard
        key={card.id}
        image={card.image}
        title={card.title}
        description={card.description}
        href={targetHref(offeringId, data.id, card.target)}
      />
    ));

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
        <SectionTitle title={data.stay.title} description={data.stay.description} />
        <div className={data.stay.columns === 4 ? "dcv-grid4" : "dcv-grid2"}>{cardLinks(data.stay.cards)}</div>

        {data.destination && (
          <>
            <SectionTitle title={data.destination.title} className="mt-[70px]" />
            <div className="dcv-grid3">{cardLinks(data.destination.cards)}</div>
          </>
        )}
      </Wrap>
    </>
  );
}

export default ProgramMainView;
