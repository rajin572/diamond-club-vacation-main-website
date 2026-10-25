import Image from "next/image";
import { ChevronsRight } from "lucide-react";
import { DesignCard, SectionTitle, Wrap } from "@/components/shared/design";
import { experienceHref } from "@/lib/routes";
import { ProgramDetailsCard } from "./ProgramDetailsCard";
import { DescriptionText } from "@/components/resorts/DescriptionText";
import type { ProgramAboutData, ProgramCardData, ProgramSection } from "./programs.types";

/** DOM id (and anchor) of a program section, e.g. "Experiences" -> "experiences". */
export function programSectionId(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** The first plain paragraph of a program's About text (lines written between double stars are headings), for page descriptions. */
export function aboutDescription(about: ProgramAboutData, fallback: string): string {
  return about.about.find((paragraph) => !paragraph.startsWith("**")) ?? fallback;
}

function AboutParagraphs({ paragraphs, strong }: { paragraphs: string[]; strong?: string }) {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={paragraph}>
          {index === 0 && strong && paragraph.startsWith(strong) ? (
            <>
              <strong>{strong}</strong>
              {paragraph.slice(strong.length)}
            </>
          ) : (
            <DescriptionText text={paragraph} />
          )}
        </p>
      ))}
    </>
  );
}

/** The program's "About This Event" block (brand strip, highlights, description), shown inside each hotel page. */
export function ProgramAbout({ about }: { about: ProgramAboutData }) {
  return (
    <Wrap id="about" className="dcv-wrap--stack">
      {about.partnersLogo ? (
        <div className="dcv-partners dcv-partners--logo">
          <Image src={about.partnersLogo.image} alt={about.partnersLogo.alt} sizes="(max-width: 1000px) 100vw, 920px" />
        </div>
      ) : (
        about.partners.length > 0 && (
          <ul className="dcv-partners" aria-label="Partner resorts and brands">
            {about.partners.map((partner) => (
              <li key={partner.name} className="dcv-partner">
                <b>{partner.name}</b>
                {partner.detail && <span>{partner.detail}</span>}
              </li>
            ))}
          </ul>
        )
      )}

      <div className="dcv-overview">
        <aside className="dcv-overview-aside">
          <ul className="dcv-highlights">
            {about.highlights.map((highlight) => (
              <li key={highlight}>
                <ChevronsRight size={22} aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </aside>
        <div className="dcv-overview-main">
          <h2>{about.aboutTitle}</h2>
          <AboutParagraphs paragraphs={about.about} strong={about.aboutStrong} />
        </div>
      </div>
    </Wrap>
  );
}

const GRID_CLASS = { 2: "dcv-grid2", 3: "dcv-grid3", 4: "dcv-grid4" } as const;

interface ProgramSectionsProps {
  offeringId: string;
  programId: string;
  sections: ProgramSection[];
  /** The hotel these cards are shown in; experience links carry it so the hotel context is kept. */
  resortId?: string;
}

/** The program's experience / explore card groups, shown inside each hotel page. */
export function ProgramSections({ offeringId, programId, sections, resortId }: ProgramSectionsProps) {
  const card = (item: ProgramCardData) =>
    item.details ? (
      <ProgramDetailsCard
        key={item.id}
        image={item.image}
        title={item.title}
        description={item.description}
        details={item.details}
        imagePosition={item.imagePosition}
      />
    ) : (
    <DesignCard
      key={item.id}
      image={item.image}
      title={item.title}
      description={item.description}
      logos={item.logos}
      href={item.target?.type === "experience" ? experienceHref(offeringId, programId, item.target.experienceType, resortId) : undefined}
    />
  );

  return (
    <>
      {sections.map((section) => {
        const secId = programSectionId(section.title);
        const isExp = secId === "experiences" || secId === "programs" || secId === "program";
        const isExplore = secId === "explore" || secId === "local-attractions";
        const mainId = isExp ? "experiences" : isExplore ? "explore" : secId;

        return (
          <Wrap key={section.title} id={mainId} className="dcv-wrap--stack">
            {isExp && <span id="programs" className="sr-only" tabIndex={-1} />}
            {isExplore && (
              <>
                <span id="local-attractions" className="sr-only" tabIndex={-1} />
                <span id="attractions" className="sr-only" tabIndex={-1} />
              </>
            )}
            <SectionTitle title={section.title} />
          <div className="dcv-card-blocks">
            {section.blocks.map((block, index) => (
              <div key={index} className={GRID_CLASS[block.columns]}>
                {block.cards.map(card)}
              </div>
            ))}
          </div>
        </Wrap>
        );
      })}
    </>
  );
}
