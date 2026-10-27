import Link from "next/link";
import type { ReactNode } from "react";
import { Clock } from "lucide-react";
import { DetailHero, InfoCardGrid, PhotoStack, SubNav, Wrap } from "@/components/shared/design";
import type { DesignImage, DesignLink, InfoCardData } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { Lead, PopupTable } from "./CasaNizucParts";

/** The pages that open from the year-round Casa Nizuc page (client 2026-10-27: new pages, not pop-ups). */
export const CASA_NIZUC_SECTION_SLUGS = ["shabbat", "dining", "gkde", "ofek"] as const;
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
  { label: "Four Seasons", href: `${CASA_NIZUC_HREF}#seasons` },
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
  const { shabbat, dining, gkde } = CASA_NIZUC_PAGE;

  switch (slug) {
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
        kicker: `FROM ${gkde.price.from} ${gkde.price.adult.toUpperCase()} · ${gkde.price.child.toUpperCase()}`,
        subtitle: gkde.heading,
        description: gkde.lead,
        backSection: "gkde",
        backLabel: "GKDE",
        gallery: [gkde.image, ...dining.venues.slice(0, 4).map((venue) => venue.image)],
        body: (
          <>
            <h3>Your GKDE includes</h3>
            <ul className="dcv-cn-bullets">
              {gkde.includes.map((item) => (
                <li key={item}>
                  <Lead text={item} caps />
                </li>
              ))}
            </ul>
            <p className="dcv-cn-fine">{gkde.ofekNote}</p>
            <h3>Need to know</h3>
            <ul className="dcv-cn-bullets">
              {gkde.know.map((item) => (
                <li key={item}>
                  {item.includes("GKDE2026") ? (
                    <>
                      {item.split("GKDE2026")[0]}
                      <strong className="dcv-cn-code">GKDE2026</strong>
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
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
