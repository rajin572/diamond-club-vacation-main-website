import Image from "next/image";
import Link from "next/link";
import { SubNav } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { CasaNizucHero } from "./CasaNizucHero";
import { BOOK_STAY_HREF, CASA_NIZUC_SUB_NAV } from "./casaNizucNav";

/**
 * About page, from the client's website design package (about.html, 2026-11-22): the introduction, the five numbered parts of the resort
 * (01 to 05) and the kosher commitment. The text and order are the client's; the photos and colours are the site's own.
 */
export function CasaNizucAboutPage() {
  const { aboutPage: page, hero } = CASA_NIZUC_PAGE;

  return (
    <>
      <CasaNizucHero
        image={hero.image}
        kicker={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        actions={
          <>
            <a className="dcv-btn" href={BOOK_STAY_HREF}>
              Book your stay
            </a>
            <Link className="dcv-btn dcv-btn--light" href={`${CASA_NIZUC_HREF}#overview`}>
              Explore reservation options
            </Link>
          </>
        }
      />
      <SubNav items={CASA_NIZUC_SUB_NAV} label="Casa Nizuc sections" />

      {/* Introduction */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-intro">
          <p className="dcv-lp-eyebrow">{page.eyebrow}</p>
          <h2 className="dcv-lp-title" style={{ marginBottom: 22 }}>
            {page.heading}
          </h2>
          <p className="dcv-lp-body">{page.intro}</p>
        </div>
      </section>

      {/* 01 to 05, photo and text alternating sides */}
      {page.sections.map((section, index) => (
        <section key={section.number} className={index % 2 ? "dcv-lp-band dcv-lp-band--cream" : "dcv-lp-band dcv-lp-band--white"}>
          <div className={index % 2 ? "dcv-lp-inner dcv-lp-row dcv-lp-row--flip" : "dcv-lp-inner dcv-lp-row"}>
            <div className="dcv-lp-photo">
              <Image src={section.image} alt={section.title} fill sizes="(max-width: 1000px) 100vw, 55vw" />
            </div>
            <div>
              <p className="dcv-lp-eyebrow">{section.number}</p>
              <h2 className="dcv-lp-title" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", marginBottom: 18 }}>
                {section.title}
              </h2>
              <p className="dcv-lp-body">{section.text}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Our kosher commitment */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-center">
          <h2 className="dcv-lp-title">{page.kosher.title}</h2>
          <p className="dcv-lp-sub">{page.kosher.text}</p>
          <div className="dcv-hero-actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <Link className="dcv-btn" href={`${CASA_NIZUC_HREF}#overview`}>
              Explore reservation options
            </Link>
          </div>
        </div>
      </section>
      <p style={{ textAlign: "center", margin: "18px 0 28px" }}>
        <Link className="dcv-link" href={CASA_NIZUC_HREF}>
          ← Back to Casa Nizuc
        </Link>
      </p>
    </>
  );
}
