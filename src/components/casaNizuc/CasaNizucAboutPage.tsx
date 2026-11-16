import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SubNav } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { CasaNizucHero } from "./CasaNizucHero";
import { BOOK_STAY_HREF, CASA_NIZUC_SUB_NAV } from "./casaNizucNav";

/** "Just 10 minutes ... *Casa Nizuc* introduces ...": text between asterisks is emphasised, as in the client's document. */
function Emphasis({ text }: { text: string }): ReactNode {
  return text.split("*").map((part, index) => (index % 2 ? <em key={index}>{part}</em> : part));
}

/**
 * About page, from the client's "Caza Nizuc Main Page" document (2026-11-15): the welcome, the kosher culinary experience and what lies
 * beyond the dining. Same pattern as the other Casa Nizuc landing pages.
 */
export function CasaNizucAboutPage() {
  const { aboutPage: page, hero } = CASA_NIZUC_PAGE;

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
            <Link className="dcv-btn dcv-btn--light" href={`${CASA_NIZUC_HREF}/dining`}>
              Explore the dining
            </Link>
          </>
        }
      />
      <SubNav items={CASA_NIZUC_SUB_NAV} label="Casa Nizuc sections" />

      {/* Welcome */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-intro">
          {page.welcome.map((paragraph) => (
            <p key={paragraph} className="dcv-lp-body">
              <Emphasis text={paragraph} />
            </p>
          ))}
        </div>
      </section>

      {/* Kosher culinary experience */}
      <section className="dcv-lp-band dcv-lp-band--white">
        <div className="dcv-lp-inner dcv-lp-split" style={{ alignItems: "center" }}>
          <div>
            <h2 className="dcv-lp-title" style={{ fontSize: "clamp(30px, 3.4vw, 44px)", marginBottom: 24 }}>
              {page.culinary.title}
            </h2>
            {page.culinary.paragraphs.map((paragraph) => (
              <p key={paragraph} className="dcv-lp-body">
                <Emphasis text={paragraph} />
              </p>
            ))}
            <p className="dcv-cn-callout" style={{ marginTop: 24 }}>
              <Emphasis text={page.culinary.kashrut} />
            </p>
          </div>
          <div className="dcv-lp-photo">
            <Image src={page.culinary.image} alt={page.culinary.title} fill sizes="(max-width: 1000px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Beyond the dining experience */}
      <section className="dcv-lp-band dcv-lp-band--cream">
        <div className="dcv-lp-inner dcv-lp-split" style={{ alignItems: "center" }}>
          <div className="dcv-lp-photo">
            <Image src={page.beyond.image} alt={page.beyond.title} fill sizes="(max-width: 1000px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="dcv-lp-title" style={{ fontSize: "clamp(30px, 3.4vw, 44px)", marginBottom: 24 }}>
              {page.beyond.title}
            </h2>
            {page.beyond.paragraphs.map((paragraph) => (
              <p key={paragraph} className="dcv-lp-body">
                <Emphasis text={paragraph} />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="dcv-lp-band dcv-lp-band--tight">
        <div className="dcv-lp-inner dcv-lp-intro">
          <p className="dcv-lp-accent" style={{ fontSize: 26 }}>
            {page.closing}
          </p>
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
