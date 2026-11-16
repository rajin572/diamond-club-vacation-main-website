import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ShieldCheck } from "lucide-react";
import { PhotoGallery, SubNav } from "@/components/shared/design";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { CasaNizucReservationForm } from "./CasaNizucReservationForm";
import { DINING_VENUES, getMealsForVenue, restaurantHref, type DiningVenue } from "./casaNizucDining";
import { CasaNizucHero } from "./CasaNizucHero";
import { BOOK_STAY_HREF, CASA_NIZUC_SUB_NAV } from "./casaNizucNav";

/**
 * One restaurant's own page, built from the client's "CASA NIZUC DINING PAGE" brief (2026-11-15, Section 4): hero banner, introduction,
 * photo gallery, menus, hours of operation, kosher classification, reservations, location and additional information.
 */
export function CasaNizucRestaurantPage({ venue }: { venue: DiningVenue }) {
  const meals = getMealsForVenue(venue.name);
  const others = DINING_VENUES.filter((item) => item.slug !== venue.slug);

  return (
    <>
      <CasaNizucHero
        image={venue.image}
        kicker={`Casa Nizuc · ${venue.concept}`}
        title={venue.title}
        subtitle={venue.tagline}
        actions={
          <>
            {venue.reservations ? (
              <a className="dcv-btn" href="#reserve">
                Reserve a table
              </a>
            ) : (
              <a className="dcv-btn" href="#hours">
                Hours &amp; location
              </a>
            )}
            <a className="dcv-btn dcv-btn--light" href="#menus">
              View menu
            </a>
          </>
        }
      />
      <SubNav items={CASA_NIZUC_SUB_NAV} label="Casa Nizuc sections" />

      {/* Introduction */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-split">
          <div>
            <p className="dcv-lp-eyebrow">{venue.concept}</p>
            <h2 className="dcv-lp-title">{venue.tagline}</h2>
            <span className="dcv-lp-badge" style={{ marginTop: 22, marginBottom: 0 }}>
              {venue.kosher ? "Kosher" : "Non-kosher"}
            </span>
          </div>
          <div>
            <p className="dcv-lp-body">{venue.text}</p>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="dcv-lp-band dcv-lp-band--white">
        <div className="dcv-lp-inner">
          <p className="dcv-lp-eyebrow">Photo gallery</p>
          <h2 className="dcv-lp-title" style={{ marginBottom: 32 }}>
            {venue.title}
          </h2>
          {venue.gallery.length >= 3 ? (
            <PhotoGallery images={venue.gallery} alt={`${venue.title} at Casa Nizuc`} />
          ) : (
            <div className={`dcv-lp-gallery dcv-lp-gallery--${venue.gallery.length}`}>
              {venue.gallery.map((image, index) => (
                <div key={index}>
                  <Image src={image} alt={`${venue.title} at Casa Nizuc`} fill sizes="(max-width: 600px) 100vw, 50vw" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Menus */}
      <section id="menus" className="dcv-lp-band dcv-lp-band--cream">
        <div className="dcv-lp-inner dcv-lp-split">
          <div>
            <p className="dcv-lp-eyebrow">Menus</p>
            <h2 className="dcv-lp-title">The {venue.name} menu</h2>
          </div>
          <div>
            {venue.menuUrl ? (
              <>
                <p className="dcv-lp-body">View the menu online or download it as a PDF.</p>
                <a className="dcv-btn" href={venue.menuUrl} target="_blank" rel="noopener noreferrer">
                  View menu
                </a>
              </>
            ) : (
              <p className="dcv-lp-body">The menu will be posted here, to view online and download as a PDF, as soon as it is final.</p>
            )}
          </div>
        </div>
      </section>

      {/* Hours, kosher classification and location */}
      <section id="hours" className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-cards3">
          <div className="dcv-lp-card">
            <span className="dcv-cn-icon">
              <Clock size={22} aria-hidden="true" />
            </span>
            <h3>Hours of operation</h3>
            {meals.length > 0 ? (
              <ul className="dcv-lp-hours">
                {meals.map((meal) => (
                  <li key={meal.meal}>
                    <strong>{meal.meal}</strong>
                    {meal.hours ? <span> · {meal.hours}</span> : <small>{meal.what}</small>}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Hours of operation will be added once confirmed.</p>
            )}
          </div>
          <div className="dcv-lp-card">
            <span className="dcv-cn-icon">
              <ShieldCheck size={22} aria-hidden="true" />
            </span>
            <h3>Kosher classification</h3>
            <p>{venue.kosherInfo}</p>
          </div>
          <div className="dcv-lp-card">
            <span className="dcv-cn-icon">
              <MapPin size={22} aria-hidden="true" />
            </span>
            <h3>Location</h3>
            <p>{venue.location}</p>
          </div>
        </div>
      </section>

      {/* Reservations */}
      {venue.reservations && (
        <section id="reserve" className="dcv-lp-band dcv-lp-band--white">
          <div className="dcv-lp-inner dcv-lp-split">
            <div>
              <p className="dcv-lp-eyebrow">Reservations</p>
              <h2 className="dcv-lp-title">Reserve a table at {venue.name}</h2>
              <p className="dcv-lp-body" style={{ marginTop: 22 }}>
                Choose your date, time and number of guests, add any special requests, and our team will confirm your table by email.
              </p>
              <p className="dcv-lp-fine">Hotel accommodations and restaurant reservations are separate. To book your room, use Book your stay.</p>
              <Link className="dcv-btn dcv-btn--ghost" href={BOOK_STAY_HREF}>
                Book your stay
              </Link>
            </div>
            <div>
              {venue.reservationUrl ? (
                <a className="dcv-btn" href={venue.reservationUrl} target="_blank" rel="noopener noreferrer">
                  Reserve a table
                </a>
              ) : (
                <CasaNizucReservationForm restaurant={venue.title} />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Additional information */}
      <section className="dcv-lp-band dcv-lp-band--cream">
        <div className="dcv-lp-inner dcv-lp-split">
          <div>
            <p className="dcv-lp-eyebrow">Additional information</p>
            <h2 className="dcv-lp-title">Good to know</h2>
          </div>
          <ul className="dcv-cn-bullets">
            {venue.info.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* The other restaurants */}
      <section className="dcv-lp-band dcv-lp-band--white dcv-lp-band--tight">
        <div className="dcv-lp-inner dcv-lp-center">
          <p className="dcv-lp-eyebrow">More to explore</p>
          <div className="dcv-lp-filters">
            {others.map((item) => (
              <Link key={item.slug} className="dcv-lp-filter" href={restaurantHref(item.slug)}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <p style={{ textAlign: "center", margin: "18px 0 28px" }}>
        <Link className="dcv-link" href={`${CASA_NIZUC_HREF}/dining`}>
          ← All dining
        </Link>
      </p>
    </>
  );
}
