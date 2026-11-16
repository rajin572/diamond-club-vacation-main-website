import Image from "next/image";
import Link from "next/link";
import { SubNav } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { AllImages } from "../../../public/images/AllImages";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { CasaNizucDiningVenues } from "./CasaNizucDiningVenues";
import { DINING_VENUES } from "./casaNizucDining";
import { CasaNizucHero } from "./CasaNizucHero";
import { BOOK_STAY_HREF, CASA_NIZUC_SUB_NAV } from "./casaNizucNav";

/**
 * Dining page, laid out like the client's "CASA NIZUC DINING PAGE" brief (2026-11-15) in the same pattern as the GKDE and Shabbat pages:
 * hero, centred introduction, the restaurant directory with the All / Kosher / Non-kosher filter, and a closing photo band.
 * The GKDE promotion is not repeated here, as the brief asks.
 */
export function CasaNizucDiningPage() {
  const { dining } = CASA_NIZUC_PAGE;

  return (
    <>
      <CasaNizucHero
        image={AllImages.casaNizucDiningZait}
        kicker={dining.kicker}
        title={dining.heading}
        subtitle={dining.tagline}
        actions={
          <>
            <a className="dcv-btn" href="#restaurants">
              Explore our restaurants
            </a>
            <Link className="dcv-btn dcv-btn--light" href={BOOK_STAY_HREF}>
              Book your stay
            </Link>
          </>
        }
      />
      <SubNav items={CASA_NIZUC_SUB_NAV} label="Casa Nizuc sections" />

      {/* Introduction */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-intro">
          <h2 className="dcv-lp-title">{dining.introTitle}</h2>
          {dining.intro.map((paragraph) => (
            <p key={paragraph} className="dcv-lp-body">
              {paragraph}
            </p>
          ))}
          <p className="dcv-lp-accent">{dining.introClosing}</p>
        </div>
      </section>

      {/* Restaurant directory */}
      <section id="restaurants" className="dcv-lp-band dcv-lp-band--white">
        <div className="dcv-lp-inner dcv-lp-center">
          <p className="dcv-lp-eyebrow">{dining.directoryTagline}</p>
          <h2 className="dcv-lp-title">{dining.directoryTitle}</h2>
          <CasaNizucDiningVenues venues={DINING_VENUES} />
        </div>
      </section>

      {/* Closing photo band */}
      <section className="dcv-lp-photoband">
        <Image src={AllImages.casaNizucDiningZaitTerrace} alt="" fill sizes="100vw" />
        <div className="dcv-lp-inner">
          <h2>Casa Nizuc — A World of Flavors Awaits.</h2>
          <Link className="dcv-btn" href={BOOK_STAY_HREF}>
            Book your stay
          </Link>
        </div>
      </section>
      <p style={{ textAlign: "center", margin: "18px 0 28px" }}>
        <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#dining`}>
          ← Back to Casa Nizuc
        </Link>
      </p>
    </>
  );
}
