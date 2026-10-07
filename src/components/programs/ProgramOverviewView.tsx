import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { DesignButton, DetailHero, Wrap } from "@/components/shared/design";
import { inquireHref, programDetailsHref } from "@/lib/routes";
import type { ProgramData } from "./programs.types";

interface ProgramOverviewViewProps {
  offeringId: string;
  data: ProgramData;
}

/** First paragraph with an optional bold lead-in ("**Diamond Blue by DCV** was created ..."). */
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
            paragraph
          )}
        </p>
      ))}
    </>
  );
}

/**
 * The page a guest lands on after picking a program (client brief: partner strip, highlights, "About This
 * Event", "See Details"). "See Details" opens the program's details hub with its hotels and experiences.
 */
export function ProgramOverviewView({ offeringId, data }: ProgramOverviewViewProps) {
  const { overview } = data;
  const detailsHref = programDetailsHref(offeringId, data.id);
  const inquire = inquireHref({ destination: data.id });

  return (
    <>
      <DetailHero image={overview.heroImage} title={data.title} subtitle={overview.tagline} />

      <Wrap>
        {overview.partnersLogo ? (
          <div className="dcv-partners dcv-partners--logo">
            <Image src={overview.partnersLogo.image} alt={overview.partnersLogo.alt} sizes="(max-width: 1000px) 100vw, 920px" />
          </div>
        ) : (
          overview.partners.length > 0 && (
            <ul className="dcv-partners" aria-label="Partner resorts and brands">
              {overview.partners.map((partner) => (
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
              {overview.highlights.map((highlight) => (
                <li key={highlight}>
                  <ChevronsRight size={22} aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="dcv-overview-actions">
              <DesignButton href={detailsHref}>See Details</DesignButton>
              <Link className="dcv-link" href={inquire}>
                Inquire
              </Link>
            </div>
          </aside>

          <div className="dcv-overview-main">
            <h2>{overview.aboutTitle}</h2>
            <AboutParagraphs paragraphs={overview.about} strong={overview.aboutStrong} />
          </div>
        </div>
      </Wrap>

      {/* Phones: the primary actions stay pinned to the bottom of the screen. */}
      <div className="dcv-cta-bar">
        <Link className="dcv-btn" href={detailsHref}>
          See Details
        </Link>
        <Link className="dcv-btn dcv-btn--ghost" href={inquire}>
          Inquire
        </Link>
      </div>
    </>
  );
}

export default ProgramOverviewView;
