import type { ReactNode } from "react";
import { ArrowUpDown, CalendarDays, Droplets, KeyRound, Landmark, Scale, Star, UtensilsCrossed, Wine } from "lucide-react";
import { DesignCard, DetailHero, InfoCardGrid, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignLink, InfoCardData } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { AllImages } from "../../../public/images/AllImages";
import { PopupTable } from "./CasaNizucParts";
import { casaNizucSectionHref } from "./CasaNizucSectionView";

const SUB_NAV: DesignLink[] = [
  { label: "About", href: "#about" },
  { label: "Shabbat", href: "#shabbat" },
  { label: "Dining", href: "#dining" },
  { label: "GKDE", href: "#gkde" },
  { label: "Calendar of Events", href: "#calendar" },
  { label: "Events", href: "#events" },
];

const FEATURE_ICONS: Record<string, ReactNode> = {
  "Every outlet kosher": <Star size={22} aria-hidden="true" />,
  "On-site synagogue": <Landmark size={22} aria-hidden="true" />,
  "Shabbat elevators": <ArrowUpDown size={22} aria-hidden="true" />,
  "Physical room keys": <KeyRound size={22} aria-hidden="true" />,
  "Kosher wine cellar": <Wine size={22} aria-hidden="true" />,
  "Full Shabbat service": <UtensilsCrossed size={22} aria-hidden="true" />,
  "Two kosher standards": <Scale size={22} aria-hidden="true" />,
  "Holiday programming": <CalendarDays size={22} aria-hidden="true" />,
  Mikvah: <Droplets size={22} aria-hidden="true" />,
};

/**
 * The year-round Casa Nizuc page, /casa-nizuc: the kosher resort that has it all.
 * Built like the Passover > Diamond Blue > Casa Nizuc page (client 2026-10-26): hero, sticky sub navigation, "Discover" cards that lead to
 * the sections, and image cards that open pop-ups. Shabbat, Dining and GKDE (with Ofek) open their own pages instead (client 2026-10-27).
 */
export function CasaNizucView() {
  const { hero, overview, about, shabbat, dining, gkde, seasons, events } = CASA_NIZUC_PAGE;

  const aboutCards: InfoCardData[] = [
    {
      id: "resort",
      image: hero.image,
      title: "The Resort",
      description: about.heading,
      kicker: "CASA NIZUC · ABOUT",
      subtitle: about.lead,
      children: about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>),
    },
    {
      id: "glance",
      image: AllImages.casaNizucTowerDay,
      title: "At a glance",
      description: "Rooms, dining, pools and venues in numbers.",
      kicker: "CASA NIZUC · ABOUT",
      children: (
        <>
          <div className="dcv-cn-glance">
            {about.glance.map((item) => (
              <div key={item.label} className="dcv-cn-stat">
                <b>{item.value}</b>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <dl className="dcv-cn-facts">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </>
      ),
    },
    {
      id: "kosher-by-design",
      image: AllImages.casaNizucGallery31,
      title: "Kosher-friendly by design",
      description: about.quote,
      linkLabel: "See what is built in →",
      kicker: "CASA NIZUC · ABOUT",
      children: (
        <>
          <p className="dcv-cn-quote">“{about.quote}”</p>
          <div className="dcv-grid3 dcv-cn-features">
            {about.features.map((feature) => (
              <div key={feature.title} className={feature.soon ? "dcv-cn-feature dcv-cn-feature--soon" : "dcv-cn-feature"}>
                {feature.soon && <em className="dcv-cn-soon">Coming soon</em>}
                <span className="dcv-cn-icon">{FEATURE_ICONS[feature.title]}</span>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
  ];

  const shabbatCards: InfoCardData[] = [
    {
      id: "shabbat",
      image: shabbat.image,
      title: "Shabbat",
      description: shabbat.lead,
      linkLabel: "View the Shabbat program →",
      href: casaNizucSectionHref("shabbat"),
    },
  ];

  const diningCards: InfoCardData[] = [
    {
      id: "dining",
      image: dining.venues[2].image,
      title: "Dining",
      description: dining.lead,
      linkLabel: "Explore dining →",
      href: casaNizucSectionHref("dining"),
    },
  ];

  const gkdeCards: InfoCardData[] = [
    {
      id: "gkde",
      image: gkde.image,
      title: "GKDE",
      description: gkde.lead,
      linkLabel: "View GKDE →",
      href: casaNizucSectionHref("gkde"),
    },
    {
      id: "ofek",
      image: gkde.ofek.image,
      title: "Ofek",
      description: gkde.ofek.heading,
      linkLabel: "View Ofek →",
      alt: "Ofek rooftop",
      href: casaNizucSectionHref("ofek"),
    },
  ];

  const calendarCards: InfoCardData[] = [
    {
      id: "calendar",
      image: seasons.list[2].image,
      title: seasons.calendar.heading,
      description: seasons.lead,
      linkLabel: "View the calendar →",
      href: casaNizucSectionHref("calendar"),
    },
  ];

  const eventCards: InfoCardData[] = [
    {
      id: "events",
      image: events.image,
      title: "Events & Celebrations",
      description: events.lead,
      linkLabel: "View events & venues →",
      kicker: "CASA NIZUC · EVENTS & CELEBRATIONS",
      subtitle: events.heading,
      children: (
        <>
          <p>{events.text}</p>
          <ul className="dcv-cn-bullets">
            {events.list.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> — {item.text}
              </li>
            ))}
          </ul>
          <h3>Venue capacities</h3>
          <PopupTable head={["Venue", "Banquet", "Reception"]} rows={events.capacities.map((row) => [row.venue, row.banquet, row.reception])} />
          <p className="dcv-cn-fine">{events.capacityNote}</p>
        </>
      ),
    },
  ];

  return (
    <>
      <DetailHero image={hero.image} kicker={hero.kicker} title={hero.title} subtitle={hero.subtitle} />
      <SubNav items={SUB_NAV} label="Casa Nizuc sections" />

      {/* Discover cards: each one leads to its section below */}
      <Wrap id="overview">
        <SectionTitle title={overview.title} />
        <div className="dcv-grid3">
          {overview.cards.map((card) => (
            <DesignCard key={card.id} image={card.image} title={card.title} description={card.description} href={`#${card.id}`} />
          ))}
        </div>
      </Wrap>

      <Wrap id="about" className="dcv-wrap--stack">
        <SectionTitle title="About" />
        <InfoCardGrid cards={aboutCards} gridClass="dcv-grid3" />
      </Wrap>

      <Wrap id="shabbat" className="dcv-wrap--stack">
        <SectionTitle title="Shabbat" />
        <InfoCardGrid cards={shabbatCards} gridClass="dcv-grid2" featured />
      </Wrap>

      <Wrap id="dining" className="dcv-wrap--stack">
        <SectionTitle title="Dining" />
        <InfoCardGrid cards={diningCards} gridClass="dcv-grid2" featured />
      </Wrap>

      <Wrap id="gkde" className="dcv-wrap--stack">
        <SectionTitle title="GKDE" />
        <InfoCardGrid cards={gkdeCards} gridClass="dcv-grid2" />
      </Wrap>

      <Wrap id="calendar" className="dcv-wrap--stack">
        <SectionTitle title="Calendar of Events" />
        <InfoCardGrid cards={calendarCards} gridClass="dcv-grid2" featured />
      </Wrap>

      <Wrap id="events" className="dcv-wrap--stack">
        <SectionTitle title="Events & Celebrations" />
        <InfoCardGrid cards={eventCards} gridClass="dcv-grid2" featured />
      </Wrap>
    </>
  );
}

export default CasaNizucView;
