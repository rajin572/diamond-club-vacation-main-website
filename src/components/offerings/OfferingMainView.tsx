import { DesignCard, DetailHero, SectionTitle, Wrap } from "@/components/shared/design";
import type { ProgramSummary } from "@/components/programs/programs.types";
import type { OfferingData } from "./offerings.types";

interface OfferingMainViewProps {
  data: OfferingData;
  programs: ProgramSummary[];
}

/** An offering landing page: hero plus one card per program (client design: passover.html). */
export function OfferingMainView({ data, programs }: OfferingMainViewProps) {
  return (
    <>
      <DetailHero
        image={data.hero.image}
        kicker={data.hero.kicker}
        title={data.hero.headline}
        subtitle={data.hero.subtext}
      />
      <Wrap>
        <SectionTitle title={data.programsSection.title} description={data.programsSection.description} />
        <div className="dcv-grid3">
          {programs.map((program) => (
            <DesignCard
              key={program.id}
              image={program.image}
              title={program.title}
              description={program.description}
              href={program.href}
            />
          ))}
        </div>
      </Wrap>
    </>
  );
}

export default OfferingMainView;
