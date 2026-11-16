import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { SubNav } from "@/components/shared/design";
import type { DesignImage } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { AllImages } from "../../../public/images/AllImages";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { getDiningVenueByName, restaurantHref } from "./casaNizucDining";
import { CasaNizucHero } from "./CasaNizucHero";
import { CASA_NIZUC_SUB_NAV, GKDE_INQUIRE_HREF } from "./casaNizucNav";

/** Each restaurant's photos, as in the PDF: one large photo, and Mayim a second, narrow one under it. */
const GKDE_VENUE_IMAGES: Record<string, DesignImage[]> = {
  Ashan: [AllImages.casaNizucAshanRender],
  Zait: [AllImages.casaNizucEventsChandeliers],
  Mayim: [AllImages.casaNizucGkdeDining, AllImages.casaNizucMayimBuffet],
  Noam: [AllImages.casaNizucDiningNoam],
  Ofek: [AllImages.casaNizucOfekBar],
};

/**
 * GKDE landing page, laid out like the client's "GKDE · Landing page" PDF (2026-11-15): hero, info strip, the experience,
 * five restaurant rows, a day at Casa Nizuc, what is included, pricing, need to know and a closing photo band.
 * The colours, fonts and buttons are the site's own (dcv-lp-* classes in design.css), not the PDF's.
 */
export function CasaNizucGkdePage() {
  const { gkde } = CASA_NIZUC_PAGE;

  return (
    <>
      <CasaNizucHero
        image={AllImages.casaNizucTowerNight}
        kicker="Casa Nizuc · A Tribute Portfolio Resort"
        title={gkde.heading}
        subtitle={gkde.lead}
        actions={
          <>
            <Link className="dcv-btn" href={GKDE_INQUIRE_HREF}>
              Reserve your experience
            </Link>
            <a className="dcv-btn dcv-btn--light" href="#restaurants">
              Explore the restaurants
            </a>
          </>
        }
        note={
          <>
            From <b>$200</b> per adult · Book online and save 20%
          </>
        }
      />
      <SubNav items={CASA_NIZUC_SUB_NAV} label="Casa Nizuc sections" />

      {/* Info strip */}
      <div className="dcv-lp-strip" style={{ marginTop: 36 }}>
        <ul>
          {gkde.badges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
          <li>5 Restaurants · 1 Plan</li>
        </ul>
      </div>

      {/* The experience */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-split">
          <div>
            <p className="dcv-lp-eyebrow">The experience</p>
            <h2 className="dcv-lp-title">{gkde.tagline}</h2>
          </div>
          <div>
            {gkde.intro.map((paragraph) => (
              <p key={paragraph} className="dcv-lp-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* The five restaurants */}
      <section id="restaurants" className="dcv-lp-band dcv-lp-band--white">
        <div className="dcv-lp-inner">
          <div className="dcv-lp-center">
            <p className="dcv-lp-eyebrow">Your restaurants</p>
            <h2 className="dcv-lp-title">{gkde.collectionTitle}</h2>
          </div>
          <div className="dcv-lp-rows">
            {gkde.venues.map((venue, index) => {
              const [photo, strip] = GKDE_VENUE_IMAGES[venue.name];
              const page = getDiningVenueByName(venue.name);
              return (
                <article key={venue.name} className={index % 2 ? "dcv-lp-row dcv-lp-row--flip" : "dcv-lp-row"}>
                  <div className="dcv-lp-photos">
                    <div className="dcv-lp-photo">
                      <Image src={photo} alt={venue.name} fill sizes="(max-width: 1000px) 100vw, 55vw" />
                    </div>
                    {strip && (
                      <div className="dcv-lp-photo dcv-lp-photo--strip">
                        <Image src={strip} alt="" fill sizes="(max-width: 1000px) 100vw, 55vw" />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="dcv-lp-eyebrow">{venue.tag}</p>
                    <h3 className="dcv-lp-name">{venue.name}</h3>
                    <p className="dcv-lp-kind">{venue.kind}</p>
                    <span className="dcv-lp-badge">{venue.badge}</span>
                    <p className="dcv-lp-body">{venue.text}</p>
                    {page && (
                      <Link className="dcv-lp-linkbtn" href={restaurantHref(page.slug)}>
                        Explore {venue.name} →
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* A day at Casa Nizuc */}
      <section className="dcv-lp-band dcv-lp-band--dark">
        <div className="dcv-lp-inner dcv-lp-center">
          <p className="dcv-lp-eyebrow">{gkde.day.tag}</p>
          <h2 className="dcv-lp-title" style={{ maxWidth: 760, margin: "0 auto" }}>
            {gkde.day.title}
          </h2>
          <div className="dcv-lp-day">
            {gkde.day.items.map((item) => (
              <div key={item.when}>
                <small>{item.when}</small>
                <h3>{item.venue}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-center">
          <p className="dcv-lp-eyebrow">{gkde.included.tag}</p>
          <h2 className="dcv-lp-title">{gkde.included.title}</h2>
          <div className="dcv-lp-included">
            <div className="dcv-lp-box">
              <h3>{gkde.included.subtitle}</h3>
              <ul className="dcv-lp-checks">
                {gkde.included.items.map((item) => (
                  <li key={item}>
                    <Check size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dcv-lp-box dcv-lp-box--tan">
              <h3>{gkde.included.notIncludedTitle}</h3>
              <p>{gkde.included.notIncluded}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="dcv-lp-band dcv-lp-band--white">
        <div className="dcv-lp-inner dcv-lp-center">
          <p className="dcv-lp-eyebrow">{gkde.pricing.tag}</p>
          <h2 className="dcv-lp-title">{gkde.pricing.title}</h2>
          <p className="dcv-lp-sub">{gkde.pricing.text}</p>
          <div className="dcv-lp-prices">
            {gkde.pricing.rates.map((rate) => (
              <div key={rate.label} className="dcv-lp-price">
                <p className="dcv-lp-eyebrow">{rate.label}</p>
                <b>{rate.price}</b>
                <span>{rate.online}</span>
                <p className="dcv-lp-desk">
                  At the front desk: <s>{rate.desk}</s>
                </p>
              </div>
            ))}
          </div>
          <div className="dcv-lp-promo">
            <span>{gkde.pricing.promoLabel}</span>
            <span className="dcv-lp-promo-code">{gkde.pricing.promoCode}</span>
            <Link className="dcv-btn" href={GKDE_INQUIRE_HREF}>
              Book now
            </Link>
          </div>
        </div>
      </section>

      {/* Need to know */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-split">
          <div>
            <p className="dcv-lp-eyebrow">Need to know</p>
            <h2 className="dcv-lp-title">{gkde.needToKnow.title}</h2>
          </div>
          <dl className="dcv-lp-facts">
            {gkde.needToKnow.items.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="dcv-lp-inner">
          <div className="dcv-lp-banner">
            <h3>Make memories. Earn points.</h3>
            <p>Join Marriott Bonvoy for free and earn points toward free nights.</p>
          </div>
        </div>
      </section>

      {/* Closing photo band and footer */}
      <section className="dcv-lp-photoband">
        <Image src={AllImages.casaNizucTowerDay} alt="" fill sizes="100vw" />
        <div className="dcv-lp-inner">
          <h2>{gkde.closing.title}</h2>
          <p>{gkde.closing.text}</p>
          <Link className="dcv-btn" href={GKDE_INQUIRE_HREF}>
            {gkde.closing.cta}
          </Link>
        </div>
      </section>
      <p style={{ textAlign: "center", margin: "18px 0 28px" }}>
        <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#gkde`}>
          ← Back to Casa Nizuc
        </Link>
      </p>
    </>
  );
}
