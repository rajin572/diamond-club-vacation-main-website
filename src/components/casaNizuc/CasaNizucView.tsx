import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Mail } from "lucide-react";
import { DetailHero, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignLink } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { WEDDINGS_HREF, inquireHref } from "@/lib/routes";

const SUB_NAV: DesignLink[] = [
  { label: "About", href: "#about" },
  { label: "Shabbat", href: "#shabbat" },
  { label: "Dining", href: "#dining" },
  { label: "GKDE", href: "#gkde" },
  { label: "Four Seasons", href: "#seasons" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

/** The year-round Casa Nizuc page, /casa-nizuc: the kosher resort that has it all. */
export function CasaNizucView() {
  const { hero, about, shabbat, dining, gkde, seasons, events, contact } = CASA_NIZUC_PAGE;
  const inquire = inquireHref({ destination: "casa-nizuc" });

  return (
    <>
      <DetailHero image={hero.image} kicker={hero.kicker} title={hero.title} subtitle={hero.subtitle} />
      <SubNav items={SUB_NAV} label="Casa Nizuc sections" />

      {/* About */}
      <Wrap id="about" className="dcv-anchor">
        <SectionTitle title={about.heading} description={about.lead} />
        <div className="dcv-cn-two">
          <div className="dcv-cn-copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="dcv-cn-glance">
            {about.glance.map((item) => (
              <div key={item.label} className="dcv-cn-stat">
                <b>{item.value}</b>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <ul className="dcv-cn-facts">
          {about.facts.map((fact) => (
            <li key={fact.label}>
              <b>{fact.label}</b>
              <span>{fact.value}</span>
            </li>
          ))}
        </ul>

        <h3 className="dcv-cn-sub">Kosher-friendly by design</h3>
        <p className="dcv-cn-quote">“{about.quote}”</p>
        <div className="dcv-grid3">
          {about.features.map((feature) => (
            <div key={feature.title} className="dcv-feature-group dcv-cn-feature">
              <h3>
                {feature.title}
                {feature.soon && <em className="dcv-cn-soon">Coming soon</em>}
              </h3>
              <p className="dcv-copy-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </Wrap>

      {/* Shabbat */}
      <Wrap id="shabbat" className="dcv-anchor">
        <SectionTitle title={shabbat.heading} description={shabbat.lead} />
        <p className="dcv-lead dcv-cn-lead">{shabbat.text}</p>
        <div className="dcv-cn-two dcv-cn-two--flip">
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
          <aside className="dcv-cn-card">
            <h3>What makes it a proper Shabbat</h3>
            <ul className="dcv-checklist">
              {shabbat.proper.map((item) => (
                <li key={item}>
                  <Check size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="dcv-cn-note">{shabbat.scheduleNote}</p>
          </aside>
        </div>
      </Wrap>

      {/* Dining */}
      <Wrap id="dining" className="dcv-anchor">
        <SectionTitle title={dining.heading} description={dining.lead} />
        <p className="dcv-lead dcv-cn-lead">{dining.text}</p>
        <div className="dcv-grid3">
          {dining.venues.map((venue) => (
            <article key={venue.name} className="dcv-card dcv-card--static">
              <Image src={venue.image} alt={venue.name} sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
              <div className="dcv-body">
                {venue.badge && <div className="dcv-card-tag">{venue.badge}</div>}
                <h3>{venue.name}</h3>
                <p className="dcv-cn-kind">{venue.kind}</p>
                <p>{venue.text}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="dcv-cn-sub">Breakfast, lunch & dinner at a glance</h3>
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
        <p className="dcv-cn-note">{dining.mealsNote}</p>
      </Wrap>

      {/* GKDE and Ofek */}
      <Wrap id="gkde" className="dcv-anchor">
        <SectionTitle title={gkde.heading} description={gkde.lead} />
        <div className="dcv-cn-two">
          <div className="dcv-cn-card">
            <h3>Your GKDE includes</h3>
            <ul className="dcv-checklist">
              {gkde.includes.map((item) => (
                <li key={item}>
                  <Check size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="dcv-cn-note">{gkde.ofekNote}</p>
          </div>
          <div className="dcv-cn-price">
            <span>From</span>
            <b>{gkde.price.from}</b>
            <span>{gkde.price.adult}</span>
            <em>{gkde.price.child}</em>
            <h4>Need to know</h4>
            <ul>
              {gkde.know.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="dcv-btn" href={inquire}>
              Inquire about GKDE
            </Link>
          </div>
        </div>

        <div className="dcv-cn-ofek">
          <h3>{gkde.ofek.heading}</h3>
          <p className="dcv-cn-kind">{gkde.ofek.lead}</p>
          <p>{gkde.ofek.text}</p>
          <ul>
            {gkde.ofek.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </Wrap>

      {/* Four seasons */}
      <Wrap id="seasons" className="dcv-anchor">
        <SectionTitle title={seasons.heading} description={seasons.lead} />
        <p className="dcv-lead dcv-cn-lead">{seasons.text}</p>
        <div className="dcv-grid4">
          {seasons.list.map((season) => (
            <article key={season.name} className="dcv-card dcv-card--static">
              <div className="dcv-body">
                <div className="dcv-card-tag">{season.tagline}</div>
                <h3>{season.name}</h3>
                <ul className="dcv-cn-list">
                  {season.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <h3 className="dcv-cn-sub">Every program includes</h3>
        <div className="dcv-grid3">
          {seasons.included.map((item) => (
            <div key={item.title} className="dcv-feature-group dcv-cn-feature">
              <h3>{item.title}</h3>
              <p className="dcv-copy-text">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="dcv-cn-cta">
          <Link className="dcv-btn" href={inquire}>
            Pre-book your season
          </Link>
        </p>
      </Wrap>

      {/* Events */}
      <Wrap id="events" className="dcv-anchor">
        <SectionTitle title={events.heading} description={events.lead} />
        <p className="dcv-lead dcv-cn-lead">{events.text}</p>
        <div className="dcv-cn-two">
          <div className="dcv-cn-events">
            {events.list.map((item) => (
              <div key={item.title} className="dcv-feature-group dcv-cn-feature">
                <h3>{item.title}</h3>
                <p className="dcv-copy-text">{item.text}</p>
              </div>
            ))}
          </div>
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
            <p className="dcv-cn-note">{events.capacityNote}</p>
          </div>
        </div>
        <p className="dcv-cn-cta">
          <Link className="dcv-btn" href={WEDDINGS_HREF}>
            Weddings &amp; Destination Events
          </Link>
        </p>
      </Wrap>

      {/* Contact */}
      <Wrap id="contact" className="dcv-anchor">
        <SectionTitle title={contact.heading} description={contact.subtitle} />
        <div className="dcv-cn-contact">
          {contact.rows.map((row) => (
            <a key={row.email} className="dcv-contact-item" href={`mailto:${row.email}`}>
              <span className="dcv-contact-icon">
                <Mail size={24} aria-hidden="true" />
              </span>
              <span className="dcv-contact-value">
                <span className="dcv-contact-line">{row.label}</span>
                <span className="dcv-contact-line">{row.email}</span>
              </span>
            </a>
          ))}
        </div>
        <p className="dcv-cn-note dcv-cn-center">{contact.kosherLine}</p>
        <p className="dcv-cn-note dcv-cn-center">{contact.footer}</p>
      </Wrap>
    </>
  );
}

export default CasaNizucView;
