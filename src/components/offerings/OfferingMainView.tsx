import { DetailHero, SectionTitle, Wrap } from "@/components/shared/design";
import type { ProgramSummary } from "@/components/programs/programs.types";
import ProgramCard from "./ProgramCard";
import type { OfferingData } from "./offerings.types";

interface OfferingMainViewProps {
  data: OfferingData;
  programs: ProgramSummary[];
}

/** An offering landing page: hero with the brand badge, then one card per program (client app: "Passover Collection 2027"). */
export function OfferingMainView({ data, programs }: OfferingMainViewProps) {
  return (
    <>
      <DetailHero
        image={data.hero.image}
        kicker={data.hero.kicker}
        title={data.hero.headline}
        subtitle={data.hero.subtext}
        logo={data.hero.logo}
      />
      <Wrap>
        <SectionTitle title={data.programsSection.title} description={data.programsSection.description} />
        <div className="dcv-grid3">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </Wrap>
    </>
  );
}

export default OfferingMainView;
