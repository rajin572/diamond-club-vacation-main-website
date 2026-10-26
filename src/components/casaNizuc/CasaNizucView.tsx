import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpDown, CalendarDays, Check, Clock, Droplets, KeyRound, Landmark, Mail, Scale, Star, UtensilsCrossed, Wine } from "lucide-react";
import { DesignCard, DetailHero, InfoCardGrid, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignLink, InfoCardData } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { AllImages } from "../../../public/images/AllImages";

const SUB_NAV: DesignLink[] = [
  { label: "About", href: "#about" },
  { label: "Shabbat", href: "#shabbat" },
  { label: "Dining", href: "#dining" },
  { label: "GKDE", href: "#gkde" },
  { label: "Four Seasons", href: "#seasons" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
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

/** "Name: text" becomes a bold lead-in followed by the text, like the packet's lists. */
function Lead({ text, caps }: { text: string; caps?: boolean }) {
  const at = text.indexOf(": ");
  if (at < 0) return <>{text}</>;
  return (
    <>
      <strong className={caps ? "dcv-cn-caps" : undefined}>{text.slice(0, at)}</strong> — {text.slice(at + 2)}
    </>
  );
}

/** A table inside a pop-up (the same table style as the weddings page). */
function PopupTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="dcv-wedding-table-wrap">
      <table className="dcv-wedding-table">
        <thead>
          <tr>
            {head.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, rowIndex) => (
            <tr key={rowIndex}>
              {cells.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * The year-round Casa Nizuc page, /casa-nizuc: the kosher resort that has it all.
 * Built like the Passover > Diamond Blue > Casa Nizuc page (client 2026-10-26): hero, sticky sub navigation, "Discover" cards that lead to
 * the sections, and image cards that open pop-ups. The content is unchanged.
 */
export function CasaNizucView() {
  const { hero, overview, about, shabbat, dining, gkde, seasons, events, contact } = CASA_NIZUC_PAGE;

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
      kicker: "CASA NIZUC · SHABBAT",
      subtitle: shabbat.heading,
      children: (
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
    },
  ];

  const diningCards: InfoCardData[] = [
    {
      id: "dining",
      image: dining.venues[2].image,
      title: "Dining",
      description: dining.lead,
      linkLabel: "Explore dining →",
      kicker: "CASA NIZUC · DINING",
      subtitle: dining.heading,
      children: (
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
    },
  ];

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

  const gkdeCards: InfoCardData[] = [
    {
      id: "gkde",
      image: gkde.image,
      title: "GKDE",
      description: gkde.lead,
      linkLabel: "View GKDE →",
      kicker: `FROM ${gkde.price.from} ${gkde.price.adult.toUpperCase()} · ${gkde.price.child.toUpperCase()}`,
      subtitle: gkde.heading,
      children: (
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
    },
    {
      id: "ofek",
      image: gkde.ofek.image,
      title: "Ofek",
      description: gkde.ofek.heading,
      linkLabel: "View Ofek →",
      alt: "Ofek rooftop",
      kicker: "CASA NIZUC · PREMIUM, NOT IN GKDE",
      subtitle: gkde.ofek.lead,
      children: (
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
    },
  ];

  const calendarCards: InfoCardData[] = [
    {
      id: "calendar",
      image: seasons.list[2].image,
      title: seasons.calendar.heading,
      description: seasons.lead,
      linkLabel: "View the calendar →",
      kicker: "CASA NIZUC · FOUR SEASONS",
      subtitle: seasons.heading,
      children: (
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
    },
  ];

  const seasonCards: InfoCardData[] = seasons.list.map((season) => ({
    id: season.name,
    image: season.image,
    title: season.name,
    description: season.tagline,
    alt: season.name,
    kicker: "CASA NIZUC · FOUR SEASONS",
    subtitle: season.tagline,
    children: (
      <ul className="dcv-cn-checks">
        {season.points.map((point) => (
          <li key={point}>
            <Check size={16} aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    ),
  }));

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

  const contactCards: InfoCardData[] = [
    {
      id: "contact",
      image: AllImages.casaNizucGallery00,
      title: contact.heading,
      description: contact.subtitle,
      linkLabel: "Get in touch →",
      kicker: "CASA NIZUC · CONTACT",
      subtitle: contact.subtitle,
      children: (
        <>
          <ul className="dcv-cn-contact-list">
            {contact.rows.map((row) => (
              <li key={row.email}>
                <span>{row.label}</span>
                <a href={`mailto:${row.email}`}>
                  <Mail size={16} aria-hidden="true" />
                  {row.email}
                </a>
              </li>
            ))}
            <li>
              <span>
                {contact.holiday.label}
                <small>{contact.holiday.note}</small>
              </span>
              <Link href="/contact">{contact.holiday.value}</Link>
            </li>
          </ul>
          <p className="dcv-cn-fine">{contact.footer}</p>
          <p className="dcv-cn-fine">{contact.kosherLine}</p>
          <p className="dcv-cn-contact-mark">{contact.designLine}</p>
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
        <InfoCardGrid cards={venueCards} gridClass="dcv-grid3 dcv-cn-after" />
      </Wrap>

      <Wrap id="gkde" className="dcv-wrap--stack">
        <SectionTitle title="GKDE" />
        <InfoCardGrid cards={gkdeCards} gridClass="dcv-grid2" />
      </Wrap>

      <Wrap id="seasons" className="dcv-wrap--stack">
        <SectionTitle title="Four Seasons" />
        <InfoCardGrid cards={calendarCards} gridClass="dcv-grid2" featured />
        <InfoCardGrid cards={seasonCards} gridClass="dcv-grid4 dcv-cn-after" />
      </Wrap>

      <Wrap id="events" className="dcv-wrap--stack">
        <SectionTitle title="Events & Celebrations" />
        <InfoCardGrid cards={eventCards} gridClass="dcv-grid2" featured />
      </Wrap>

      <Wrap id="contact" className="dcv-wrap--stack">
        <SectionTitle title="Contact" />
        <InfoCardGrid cards={contactCards} gridClass="dcv-grid2" featured />
      </Wrap>
    </>
  );
}

export default CasaNizucView;
