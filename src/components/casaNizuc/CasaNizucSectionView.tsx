import Link from "next/link";
import type { ReactNode } from "react";
import { Check, Clock } from "lucide-react";
import { DetailHero, InfoCardGrid, PhotoStack, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignImage, DesignLink, InfoCardData } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { Lead, PopupTable } from "./CasaNizucParts";

/** The pages that open from the year-round Casa Nizuc page (client 2026-10-27: new pages, not pop-ups). */
export const CASA_NIZUC_SECTION_SLUGS = ["shabbat", "dining", "gkde", "ofek", "calendar"] as const;
export type CasaNizucSectionSlug = (typeof CASA_NIZUC_SECTION_SLUGS)[number];

export function isCasaNizucSectionSlug(slug: string): slug is CasaNizucSectionSlug {
  return (CASA_NIZUC_SECTION_SLUGS as readonly string[]).includes(slug);
}

export function casaNizucSectionHref(slug: CasaNizucSectionSlug): string {
  return `${CASA_NIZUC_HREF}/${slug}`;
}

const SUB_NAV: DesignLink[] = [
  { label: "About", href: `${CASA_NIZUC_HREF}#about` },
  { label: "Shabbat", href: `${CASA_NIZUC_HREF}#shabbat` },
  { label: "Dining", href: `${CASA_NIZUC_HREF}#dining` },
  { label: "GKDE", href: `${CASA_NIZUC_HREF}#gkde` },
  { label: "Calendar of Events", href: `${CASA_NIZUC_HREF}#calendar` },
  { label: "Events", href: `${CASA_NIZUC_HREF}#events` },
];

interface SectionPage {
  title: string;
  kicker: string;
  subtitle: string;
  description: string;
  /** Section of the main page the back link returns to. */
  backSection: string;
  backLabel: string;
  gallery: DesignImage[];
  body: ReactNode;
  after?: ReactNode;
}

function getSectionPage(slug: CasaNizucSectionSlug): SectionPage {
  const { shabbat, dining, gkde, seasons } = CASA_NIZUC_PAGE;

  switch (slug) {
    case "calendar":
      return {
        title: "Calendar of Events",
        kicker: "CASA NIZUC · CALENDAR OF EVENTS",
        subtitle: seasons.heading,
        description: seasons.lead,
        backSection: "calendar",
        backLabel: "Calendar of Events",
        gallery: [seasons.list[2].image, ...seasons.list.filter((_, index) => index !== 2).map((season) => season.image)],
        body: (
          <>
            <p>{seasons.text}</p>
            <h3>{seasons.calendar.heading}</h3>
            <p>{seasons.calendar.lead}</p>
            <PopupTable
              head={["Season", "Dates", "Program"]}
              rows={seasons.calendar.rows.map((row) => [<b key={row.season}>{row.season}</b>, row.dates, row.program])}
            />
            <h3>Every program includes</h3>
            <ul className="dcv-cn-bullets">
              {seasons.included.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> — {item.text}
                </li>
              ))}
            </ul>
          </>
        ),
        after: (
          <Wrap id="holidays" className="dcv-wrap--stack">
            <SectionTitle title="All holidays" />
            <div className="dcv-grid3 dcv-cn-features">
              {seasons.list.map((season) => (
                <div key={season.name} className="dcv-cn-feature">
                  <h4>{season.name}</h4>
                  <p>{season.tagline}</p>
                  <ul className="dcv-cn-checks">
                    {season.points.map((point) => (
                      <li key={point}>
                        <Check size={16} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Wrap>
        ),
      };

    case "shabbat":
      return {
        title: "Shabbat",
        kicker: "CASA NIZUC · SHABBAT",
        subtitle: shabbat.heading,
        description: shabbat.lead,
        backSection: "shabbat",
        backLabel: "Shabbat",
        gallery: [shabbat.image],
        body: (
          <>
            <p>{shabbat.text}</p>
            <h3>Friday to Motzei Shabbat</h3>
            <ol className="dcv-cn-steps">
              {shabbat.steps.map((step, index) => (
                <li key={step.title}>
                  <span className="dcv-cn-step-n">{index + 1}</span>
                  <div>
                    <b>{step.title}</b>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <h3>What makes it a proper Shabbat</h3>
            <ul className="dcv-cn-bullets">
              {shabbat.proper.map((item) => (
                <li key={item}>
                  <Lead text={item} />
                </li>
              ))}
            </ul>
            <p className="dcv-cn-callout">{shabbat.scheduleNote}</p>
          </>
        ),
      };

    case "dining": {
      const venueCards: InfoCardData[] = dining.venues.map((venue) => ({
        id: venue.name,
        image: venue.image,
        title: venue.name,
        description: venue.kind,
        alt: venue.name,
        kicker: "CASA NIZUC · DINING",
        subtitle: venue.kind,
        children: (
          <>
            <p>{venue.text}</p>
            {venue.badge && <span className="dcv-cn-pill">{venue.badge}</span>}
          </>
        ),
      }));

      return {
        title: "Dining",
        kicker: "CASA NIZUC · DINING",
        subtitle: dining.heading,
        description: dining.lead,
        backSection: "dining",
        backLabel: "Dining",
        gallery: [dining.venues[2].image, ...dining.venues.filter((_, index) => index !== 2).map((venue) => venue.image)],
        body: (
          <>
            <p>{dining.text}</p>
            <h3>Breakfast, lunch &amp; dinner at a glance</h3>
            <PopupTable
              head={["Meal", "Where", "What to expect"]}
              rows={dining.meals.map((row) => [
                <>
                  <b>{row.meal}</b>
                  {row.hours && (
                    <span className="dcv-cn-hours">
                      <Clock size={12} aria-hidden="true" /> {row.hours}
                    </span>
                  )}
                </>,
                row.where,
                row.what,
              ])}
            />
          </>
        ),
        after: (
          <Wrap id="venues" className="dcv-wrap--stack">
            <InfoCardGrid cards={venueCards} gridClass="dcv-grid3" />
          </Wrap>
        ),
      };
    }

    case "gkde":
      return {
        title: "GKDE",
        kicker: "CASA NIZUC · GOURMET KOSHER DINING EXPERIENCE",
        subtitle: gkde.tagline,
        description: gkde.lead,
        backSection: "gkde",
        backLabel: "GKDE",
        gallery: [gkde.image, ...dining.venues.slice(0, 3).map((venue) => venue.image)],
        body: (
          <>
            {gkde.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h3>{gkde.collectionTitle}</h3>
            {gkde.venues.map((venue) => (
              <div key={venue.name}>
                <p>
                  <strong className="dcv-cn-caps">{venue.name}</strong> | {venue.kind}
                </p>
                <p>{venue.text}</p>
              </div>
            ))}
            <h3>{gkde.experience.title}</h3>
            <p>{gkde.experience.text}</p>
            <h3>{gkde.pricing.title}</h3>
            <ul className="dcv-cn-bullets">
              {gkde.pricing.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="dcv-cn-fine">{gkde.pricing.note}</p>
            {gkde.closing.map((line) => (
              <p key={line} className="dcv-cn-callout">
                {line}
              </p>
            ))}
          </>
        ),
      };

    case "ofek":
      return {
        title: "Ofek",
        kicker: "CASA NIZUC · PREMIUM, NOT IN GKDE",
        subtitle: gkde.ofek.lead,
        description: gkde.ofek.heading,
        backSection: "gkde",
        backLabel: "GKDE",
        gallery: [gkde.ofek.image],
        body: (
          <>
            <p>{gkde.ofek.text}</p>
            <ul className="dcv-cn-bullets">
              {gkde.ofek.points.map((point) => (
                <li key={point}>
                  <Lead text={point} />
                </li>
              ))}
            </ul>
          </>
        ),
      };
  }
}

/**
 * One page of the year-round Casa Nizuc (Shabbat, Dining, GKDE, Ofek), laid out like the Passover > Diamond Blue > Casa Nizuc detail pages:
 * hero, sub navigation, back link, text beside a photo stack. The text is the same the pop-ups showed.
 */
export function CasaNizucSectionView({ slug }: { slug: CasaNizucSectionSlug }) {
  const page = getSectionPage(slug);

  return (
    <>
      <DetailHero image={page.gallery[0]} kicker={page.kicker} title={page.title} subtitle={page.subtitle} />
      <SubNav items={SUB_NAV} label="Casa Nizuc sections" />

      <Wrap>
        <p style={{ margin: "0 0 18px" }}>
          <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#${page.backSection}`}>
            ← Back to {page.backLabel}
          </Link>
        </p>
        <div className="dcv-content2">
          <div>
            <h2>{page.title}</h2>
            <p className="dcv-lead">{page.description}</p>
            <div className="dcv-info-modal-body">{page.body}</div>
          </div>
          <aside>
            <h2>Gallery</h2>
            <PhotoStack images={page.gallery} alt={`${page.title} at Casa Nizuc`} />
          </aside>
        </div>
      </Wrap>

      {page.after}
    </>
  );
}

export default CasaNizucSectionView;
