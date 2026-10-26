import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpDown, CalendarDays, Check, Clock, Droplets, KeyRound, Landmark, Mail, Scale, Star, UtensilsCrossed, Wine } from "lucide-react";
import { DetailHero, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignLink } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";

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

const SIZES = "(max-width: 900px) 100vw, 1360px";

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

/** The year-round Casa Nizuc page, /casa-nizuc: the kosher resort that has it all. */
export function CasaNizucView() {
  const { hero, about, shabbat, dining, gkde, seasons, events, contact } = CASA_NIZUC_PAGE;

  return (
    <>
      <DetailHero image={hero.image} kicker={hero.kicker} title={hero.title} subtitle={hero.subtitle} />
      <SubNav items={SUB_NAV} label="Casa Nizuc sections" />

      {/* 01 About */}
      <Wrap id="about">
        <SectionTitle title={about.heading} description={about.lead} />
        <div className="dcv-cn-cols">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <h3 className="dcv-cn-sub">At a glance</h3>
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

        <h3 className="dcv-cn-sub">Kosher-friendly by design</h3>
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
      </Wrap>

      {/* 02 Shabbat */}
      <Wrap id="shabbat">
        <div className="dcv-cn-banner">
          <Image src={shabbat.image} alt="" sizes={SIZES} />
        </div>
        <SectionTitle title={shabbat.heading} description={shabbat.lead} />
        <p className="dcv-cn-intro">{shabbat.text}</p>
        <div className="dcv-cn-two">
          <div>
            <h3 className="dcv-cn-sub dcv-cn-sub--tight">Friday to Motzei Shabbat</h3>
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
          </div>
          <div>
            <h3 className="dcv-cn-sub dcv-cn-sub--tight">What makes it a proper Shabbat</h3>
            <ul className="dcv-cn-bullets">
              {shabbat.proper.map((item) => (
                <li key={item}>
                  <Lead text={item} />
                </li>
              ))}
            </ul>
            <p className="dcv-cn-callout">{shabbat.scheduleNote}</p>
          </div>
        </div>
      </Wrap>

      {/* 03 Dining */}
      <Wrap id="dining">
        <SectionTitle title={dining.heading} description={dining.lead} />
        <p className="dcv-cn-intro">{dining.text}</p>
        <div className="dcv-cn-venues">
          {dining.venues.map((venue) => (
            <article key={venue.name} className="dcv-cn-venue">
              <Image src={venue.image} alt={venue.name} sizes="(max-width: 900px) 100vw, 680px" />
              <div className="dcv-cn-venue-body">
                <h3>{venue.name}</h3>
                <p className="dcv-cn-kind">{venue.kind}</p>
                <p>{venue.text}</p>
                {venue.badge && <span className="dcv-cn-pill">{venue.badge}</span>}
              </div>
            </article>
          ))}
        </div>

        <h3 className="dcv-cn-sub">Breakfast, lunch &amp; dinner at a glance</h3>
        <div className="dcv-wedding-table-wrap">
          <table className="dcv-wedding-table">
            <thead>
              <tr>
                <th>Meal</th>
                <th>Where</th>
                <th>What to expect</th>
              </tr>
            </thead>
            <tbody>
              {dining.meals.map((row) => (
                <tr key={row.meal}>
                  <td>
                    <b>{row.meal}</b>
                    {row.hours && (
                      <span className="dcv-cn-hours">
                        <Clock size={12} aria-hidden="true" /> {row.hours}
                      </span>
                    )}
                  </td>
                  <td>{row.where}</td>
                  <td>{row.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Wrap>

      {/* 04 GKDE */}
      <Wrap id="gkde">
        <div className="dcv-cn-banner dcv-cn-banner--badge">
          <Image src={gkde.image} alt="" sizes={SIZES} />
          <div className="dcv-cn-badge">
            <span>From</span>
            <b>{gkde.price.from}</b>
            <span>{gkde.price.adult}</span>
            <small>{gkde.price.child}</small>
          </div>
        </div>
        <SectionTitle title={gkde.heading} description={gkde.lead} />
        <div className="dcv-cn-two">
          <div>
            <h3 className="dcv-cn-sub dcv-cn-sub--tight">Your GKDE includes</h3>
            <ul className="dcv-cn-bullets">
              {gkde.includes.map((item) => (
                <li key={item}>
                  <Lead text={item} caps />
                </li>
              ))}
            </ul>
            <p className="dcv-cn-fine">{gkde.ofekNote}</p>
          </div>
          <div>
            <h3 className="dcv-cn-sub dcv-cn-sub--tight">Need to know</h3>
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
          </div>
        </div>

        {/* Ofek premium */}
        <article className="dcv-cn-ofek" id="ofek">
          <div className="dcv-cn-ofek-img">
            <Image src={gkde.ofek.image} alt="Ofek rooftop" sizes={SIZES} />
          </div>
          <div className="dcv-cn-ofek-body">
            <h3>{gkde.ofek.heading}</h3>
            <p className="dcv-cn-ofek-lead">{gkde.ofek.lead}</p>
            <div className="dcv-cn-two dcv-cn-two--ofek">
              <div>
                <p>{gkde.ofek.text}</p>
              </div>
              <ul className="dcv-cn-bullets dcv-cn-bullets--light">
                {gkde.ofek.points.map((point) => (
                  <li key={point}>
                    <Lead text={point} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Wrap>

      {/* 05 The four seasons */}
      <Wrap id="seasons">
        <SectionTitle title={seasons.heading} description={seasons.lead} />
        <p className="dcv-cn-intro">{seasons.text}</p>
        <div className="dcv-cn-seasons">
          {seasons.list.map((season) => (
            <article key={season.name} className="dcv-cn-season">
              <Image src={season.image} alt={season.name} sizes="(max-width: 900px) 100vw, 680px" />
              <div className="dcv-cn-venue-body">
                <h3>{season.name}</h3>
                <p className="dcv-cn-tagline">{season.tagline}</p>
                <ul className="dcv-cn-checks">
                  {season.points.map((point) => (
                    <li key={point}>
                      <Check size={16} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <h3 className="dcv-cn-sub">{seasons.calendar.heading}</h3>
        <p className="dcv-cn-tagline dcv-cn-tagline--plain">{seasons.calendar.lead}</p>
        <div className="dcv-wedding-table-wrap">
          <table className="dcv-wedding-table">
            <thead>
              <tr>
                <th>Season</th>
                <th>Dates</th>
                <th>Program</th>
              </tr>
            </thead>
            <tbody>
              {seasons.calendar.rows.map((row) => (
                <tr key={row.season}>
                  <td>
                    <b>{row.season}</b>
                  </td>
                  <td>{row.dates}</td>
                  <td>{row.program}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="dcv-cn-sub">Every program includes</h3>
        <div className="dcv-grid3 dcv-cn-features">
          {seasons.included.map((item) => (
            <div key={item.title} className="dcv-cn-feature">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Wrap>

      {/* 06 Events & celebrations */}
      <Wrap id="events">
        <div className="dcv-cn-banner">
          <Image src={events.image} alt="" sizes={SIZES} />
        </div>
        <SectionTitle title={events.heading} description={events.lead} />
        <p className="dcv-cn-intro">{events.text}</p>
        <div className="dcv-cn-two">
          <ul className="dcv-cn-bullets">
            {events.list.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> — {item.text}
              </li>
            ))}
          </ul>
          <div>
            <div className="dcv-wedding-table-wrap">
              <table className="dcv-wedding-table">
                <thead>
                  <tr>
                    <th>Venue</th>
                    <th>Banquet</th>
                    <th>Reception</th>
                  </tr>
                </thead>
                <tbody>
                  {events.capacities.map((row) => (
                    <tr key={row.venue}>
                      <td>{row.venue}</td>
                      <td>{row.banquet}</td>
                      <td>{row.reception}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="dcv-cn-fine">{events.capacityNote}</p>
          </div>
        </div>
      </Wrap>

      {/* Contact block and footer line */}
      <section id="contact" className="dcv-wrap dcv-anchor dcv-cn-contact-wrap">
        <div className="dcv-cn-contact">
          <h2>{contact.heading}</h2>
          <p className="dcv-cn-contact-lead">{contact.subtitle}</p>
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
          <p className="dcv-cn-contact-fine">{contact.footer}</p>
          <p className="dcv-cn-contact-fine">{contact.kosherLine}</p>
          <p className="dcv-cn-contact-mark">{contact.designLine}</p>
        </div>
      </section>
    </>
  );
}

export default CasaNizucView;
