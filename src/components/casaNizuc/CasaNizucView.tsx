import Image from "next/image";
import Link from "next/link";
import { DesignCard, DetailHero, PhotoGallery, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignImage } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { AllImages } from "../../../public/images/AllImages";
import { getDiningVenue, restaurantHref, SHOW_NON_KOSHER_DINING } from "./casaNizucDining";
import { BOOK_STAY_HREF, CASA_NIZUC_ROOMS_HREF, CASA_NIZUC_SUB_NAV } from "./casaNizucNav";

const EVENTS_HREF = `${CASA_NIZUC_HREF}/events`;

/** The photo gallery that closed the page before the 2026-11-22 layout; the client's layout has none. Set to true to bring it back. */
const SHOW_GALLERY = false;

/** Where each "Discover & Reserve" box opens; the hotel box opens the Rooms & Suites page (only its "Book" buttons go to Marriott). */
const DISCOVER_LINKS: Record<string, { href: string; label: string; external?: boolean }> = {
  stay: { href: CASA_NIZUC_ROOMS_HREF, label: "View rooms & suites →" },
  gkde: { href: `${CASA_NIZUC_HREF}/gkde`, label: "Reserve GKDE →" },
  shabbat: { href: `${CASA_NIZUC_HREF}/shabbat`, label: "Reserve Shabbat →" },
  restaurants: { href: `${CASA_NIZUC_HREF}/dining`, label: "Book a table →" },
  ofek: { href: restaurantHref("ofek"), label: "Reserve experience →" },
  events: { href: EVENTS_HREF, label: "Request a proposal →" },
};

const CASA_NIZUC_MAIN_GALLERY: DesignImage[] = [
  AllImages.series.casa[0],
  AllImages.casaNizucTowerDay,
  AllImages.casaNizucDiningZait,
  AllImages.casaNizucPool,
  AllImages.casaNizucEntrance,
  AllImages.casaNizucDiningAshan,
  AllImages.casaNizucGallery31,
  AllImages.casaNizucMayimBuffet,
  AllImages.casaNizucDiningOfek,
  AllImages.casaNizucTowerNight,
  AllImages.casaNizucRoomSuiteLiving,
  AllImages.casaNizucEventsChandeliers,
];

/** "Reserve a table" opens the restaurant's form; the other restaurants open their page, and "Other Resort Dining" the Dining page. */
function restaurantLink(slug: string, action: string): string {
  if (slug === "brisa") return `${CASA_NIZUC_HREF}/dining`;
  return action === "Reserve a table" ? `${restaurantHref(slug)}#reserve` : restaurantHref(slug);
}

/** Three small price boxes (adults, children, babies) of the GKDE and Shabbat blocks. */
function MiniPrices({ prices }: { prices: { label: string; price: string; unit: string }[] }) {
  return (
    <div className="dcv-lp-mini">
      {prices.map((rate) => (
        <div key={rate.label}>
          <small>{rate.label}</small>
          <strong>{rate.price}</strong>
          <small>{rate.unit}</small>
        </div>
      ))}
    </div>
  );
}

/**
 * The year-round Casa Nizuc page, /casa-nizuc. The text and the order of the sections follow the client's website design package
 * (index.html, 2026-11-22): Discover & Reserve, About, the Gourmet Kosher Dining Experience, the kosher restaurants, Shabbat, More to
 * Discover, Events and the next step. The look (colours, photos, cards) is the site's own.
 */
export function CasaNizucView() {
  const { hero, overview, home, seasons } = CASA_NIZUC_PAGE;

  return (
    <>
      <DetailHero
        className="dcv-hero--casa-main"
        imagePosition="center 40%"
        image={hero.image}
        kicker="Tribute Portfolio Resort"
        title="A NEW STANDARD IN KOSHER HOSPITALITY"
        logo={{ image: AllImages.casaNizucLogoWhite, alt: "Casa Nizuc Resort & Spa", position: "top", height: 180 }}
      />
      <SubNav items={CASA_NIZUC_SUB_NAV} label="Casa Nizuc sections" />

      {/* Discover & Reserve Your Experience: six boxes */}
      <Wrap id="overview">
        {/* No heading or lead over the six cards (client 2026-11-23: "remove those texts"). */}
        <div className="dcv-grid3">
          {overview.cards.map((card) => {
            const link = DISCOVER_LINKS[card.id];
            return (
              <DesignCard
                key={card.id}
                image={card.image}
                alt={card.title}
                title={card.title}
                description={card.description}
                href={link?.href}
                linkLabel={link?.label}
                external={link?.external}
              />
            );
          })}
        </div>
      </Wrap>

      {/* About Casa Nizuc */}
      <section id="about" className="dcv-lp-band dcv-lp-band--white">
        <div className="dcv-lp-inner dcv-lp-row">
          <div>
            <p className="dcv-lp-eyebrow">{home.about.eyebrow}</p>
            <h2 className="dcv-lp-title" style={{ marginBottom: 22 }}>
              {home.about.title}
            </h2>
            {home.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="dcv-lp-body">
                {paragraph}
              </p>
            ))}
            <Link className="dcv-btn" href={`${CASA_NIZUC_HREF}/about`} style={{ marginTop: 12 }}>
              View complete resort overview
            </Link>
          </div>
          <div className="dcv-lp-photo">
            <Image src={home.about.image} alt="Casa Nizuc Resort & Spa" fill sizes="(max-width: 1000px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Gourmet Kosher Dining Experience */}
      <section id="dining" className="dcv-lp-band dcv-lp-band--cream">
        <div className="dcv-lp-inner dcv-lp-row dcv-lp-row--flip">
          <div>
            <p className="dcv-lp-eyebrow">{home.gkde.eyebrow}</p>
            <h2 className="dcv-lp-title" style={{ marginBottom: 22 }}>
              {home.gkde.title}
            </h2>
            <p className="dcv-lp-body">{home.gkde.text}</p>
            <MiniPrices prices={home.gkde.prices} />
            <p className="dcv-lp-fine">{home.gkde.notice}</p>
            <Link className="dcv-btn" href={`${CASA_NIZUC_HREF}/gkde`} style={{ marginTop: 20 }}>
              Reserve GKDE
            </Link>
          </div>
          <div className="dcv-lp-photo">
            <Image src={home.gkde.image} alt={home.gkde.title} fill sizes="(max-width: 1000px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Explore our kosher restaurants */}
      <section id="restaurants" className="dcv-lp-band dcv-lp-band--white">
        <div className="dcv-lp-inner">
          <p className="dcv-lp-eyebrow">{home.restaurants.eyebrow}</p>
          <h2 className="dcv-lp-title">{home.restaurants.title}</h2>
          <p className="dcv-lp-body">{home.restaurants.text}</p>
          <div className="dcv-lp-grid3">
            {home.restaurants.list.filter((item) => SHOW_NON_KOSHER_DINING || item.tag === "Kosher").map((item) => {
              const venue = getDiningVenue(item.slug);
              const kosher = item.tag === "Kosher";
              return (
                <Link key={item.title} href={restaurantLink(item.slug, item.action)} className="dcv-lp-dcard dcv-lp-dcard--link">
                  <div className="dcv-lp-dcard-photo">
                    {venue && <Image src={venue.image} alt={item.title} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" />}
                    <span className={kosher ? "dcv-lp-flag" : "dcv-lp-flag dcv-lp-flag--dark"}>{item.tag}</span>
                  </div>
                  <div className="dcv-lp-dcard-body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="dcv-lp-linkbtn" style={{ alignSelf: "flex-start", marginTop: 18 }}>
                      {item.action} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shabbat */}
      <section id="shabbat" className="dcv-lp-band dcv-lp-band--cream">
        <div className="dcv-lp-inner dcv-lp-row">
          <div>
            <p className="dcv-lp-eyebrow">{home.shabbat.eyebrow}</p>
            <h2 className="dcv-lp-title" style={{ marginBottom: 22 }}>
              {home.shabbat.title}
            </h2>
            <p className="dcv-lp-body">{home.shabbat.text}</p>
            <MiniPrices prices={home.shabbat.prices} />
            <p className="dcv-lp-fine">{home.shabbat.notice}</p>
            <div className="dcv-hero-actions" style={{ justifyContent: "flex-start", marginTop: 20 }}>
              <Link className="dcv-btn dcv-btn--ghost" href={`${CASA_NIZUC_HREF}/shabbat`}>
                Learn more
              </Link>
            </div>
          </div>
          <div className="dcv-lp-photo">
            <Image src={home.shabbat.image} alt="Shabbat at Casa Nizuc" fill sizes="(max-width: 1000px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* More to discover */}
      <section id="experiences" className="dcv-lp-band dcv-lp-band--white">
        <div className="dcv-lp-inner">
          <p className="dcv-lp-eyebrow">{home.more.eyebrow}</p>
          <h2 className="dcv-lp-title" style={{ marginBottom: 36 }}>
            {home.more.title}
          </h2>
          <div className="dcv-lp-row">
            <div className="dcv-lp-photo">
              <Image src={home.more.image} alt={home.more.beachTitle} fill sizes="(max-width: 1000px) 100vw, 55vw" />
            </div>
            <div>
              <h3 className="dcv-lp-title" style={{ fontSize: 28, marginBottom: 12 }}>
                {home.more.beachTitle}
              </h3>
              <p className="dcv-lp-body">{home.more.beachText}</p>
              <p className="dcv-lp-fine">{home.more.beachNotice}</p>
              <h3 className="dcv-lp-title" style={{ fontSize: 28, margin: "28px 0 12px" }}>
                {home.more.holidaysTitle}
              </h3>
              <p className="dcv-lp-body">{home.more.holidaysText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar of Events: the holiday programs, opening the calendar page (kept from the earlier page by request) */}
      <section id="calendar" className="dcv-lp-band dcv-lp-band--cream">
        <div className="dcv-lp-inner dcv-lp-row">
          <div>
            <p className="dcv-lp-eyebrow">Calendar of Events</p>
            <h2 className="dcv-lp-title" style={{ marginBottom: 22 }}>
              {seasons.heading}
            </h2>
            <p className="dcv-lp-body">{seasons.lead}</p>
            <Link className="dcv-btn" href={`${CASA_NIZUC_HREF}/calendar`} style={{ marginTop: 12 }}>
              View the calendar
            </Link>
          </div>
          <div className="dcv-lp-photo">
            <Image src={seasons.list[2].image} alt="Calendar of Events" fill sizes="(max-width: 1000px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Events & celebrations */}
      <section id="events" className="dcv-lp-band dcv-lp-band--white">
        <div className="dcv-lp-inner dcv-lp-row dcv-lp-row--flip">
          <div>
            <p className="dcv-lp-eyebrow">{home.events.eyebrow}</p>
            <h2 className="dcv-lp-title" style={{ marginBottom: 22 }}>
              {home.events.title}
            </h2>
            <p className="dcv-lp-body">{home.events.text}</p>
            <Link className="dcv-btn" href={EVENTS_HREF} style={{ marginTop: 12 }}>
              Explore events &amp; request a proposal
            </Link>
          </div>
          <div className="dcv-lp-photo">
            <Image src={home.events.image} alt={home.events.title} fill sizes="(max-width: 1000px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {SHOW_GALLERY && (
        <Wrap id="gallery" className="dcv-wrap--stack">
          <SectionTitle title="Casa Nizuc Gallery" />
          <PhotoGallery images={CASA_NIZUC_MAIN_GALLERY} alt="Casa Nizuc Resort & Spa Gallery" />
        </Wrap>
      )}

      {/* Your next step */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-center">
          <p className="dcv-lp-eyebrow">{home.closing.eyebrow}</p>
          <h2 className="dcv-lp-title">{home.closing.title}</h2>
          <p className="dcv-lp-sub">{home.closing.text}</p>
          <div className="dcv-hero-actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <a className="dcv-btn dcv-btn--ghost" href={BOOK_STAY_HREF} target="_blank" rel="noopener noreferrer">
              Book your stay ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default CasaNizucView;
