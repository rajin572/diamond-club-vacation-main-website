import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SubNav } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { CasaNizucHero } from "./CasaNizucHero";
import { BOOK_STAY_HREF, CASA_NIZUC_SUB_NAV } from "./casaNizucNav";

/**
 * Overview page, opened from the "Overview" tab: laid out like the client's "CASA NIZUC Overview Page" brief (2026-11-15) in the same
 * pattern as the GKDE and Shabbat pages: hero, centred introduction, six experience boxes, the featured experience and a closing message.
 */
export function CasaNizucOverviewPage() {
  const { overviewPage: page, hero } = CASA_NIZUC_PAGE;

  return (
    <>
      <CasaNizucHero
        image={hero.image}
        kicker={page.kicker}
        title={page.title}
        subtitle={page.subtitle}
        actions={
          <>
            <Link className="dcv-btn" href={BOOK_STAY_HREF}>
              Book your stay
            </Link>
            <a className="dcv-btn dcv-btn--light" href="#explore">
              Explore Casa Nizuc
            </a>
          </>
        }
      />
      <SubNav items={CASA_NIZUC_SUB_NAV} label="Casa Nizuc sections" />

      {/* Introduction */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-intro">
          <h2 className="dcv-lp-title">{page.introTitle}</h2>
          {page.intro.map((paragraph) => (
            <p key={paragraph} className="dcv-lp-body">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Six experience boxes */}
      <section id="explore" className="dcv-lp-band dcv-lp-band--white">
        <div className="dcv-lp-inner dcv-lp-center">
          <h2 className="dcv-lp-title">{page.exploreTitle}</h2>
          <div className="dcv-lp-grid3">
            {page.boxes.map((box) => {
              const card = (
                <>
                  <div className="dcv-lp-dcard-photo">
                    <Image src={box.image} alt={box.title} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                  </div>
                  <div className="dcv-lp-dcard-body">
                    {box.notice && <span className="dcv-lp-notice">{box.notice}</span>}
                    <h3>{box.title}</h3>
                    <p>{box.text}</p>
                    {box.href && (
                      <span className="dcv-lp-linkbtn" style={{ marginTop: 18 }}>
                        Explore more →
                      </span>
                    )}
                  </div>
                </>
              );
              const wrap = (children: ReactNode) =>
                box.href ? (
                  <Link key={box.title} href={`${CASA_NIZUC_HREF}/${box.href}`} className="dcv-lp-dcard dcv-lp-dcard--link">
                    {children}
                  </Link>
                ) : (
                  <article key={box.title} className="dcv-lp-dcard">
                    {children}
                  </article>
                );
              return wrap(card);
            })}
          </div>
        </div>
      </section>

      {/* Featured experience */}
      <section className="dcv-lp-photoband">
        <Image src={page.featured.image} alt="" fill sizes="100vw" />
        <div className="dcv-lp-inner">
          <p className="dcv-lp-eyebrow">{page.featured.kicker}</p>
          <h2>{page.featured.title}</h2>
          <p>{page.featured.text}</p>
          <p className="dcv-lp-dates">{page.featured.dates}</p>
          <Link className="dcv-btn" href={`${CASA_NIZUC_HREF}/calendar`}>
            {page.featured.cta}
          </Link>
        </div>
      </section>

      {/* Closing message */}
      <section className="dcv-lp-band dcv-lp-band--cream">
        <div className="dcv-lp-inner dcv-lp-intro">
          <h2 className="dcv-lp-title">{page.closing.title}</h2>
          <p className="dcv-lp-body" style={{ marginTop: 24 }}>
            {page.closing.text}
          </p>
          <p className="dcv-lp-accent" style={{ marginBottom: 28 }}>
            {page.closing.line}
          </p>
          <Link className="dcv-btn" href={BOOK_STAY_HREF}>
            Book your stay
          </Link>
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
