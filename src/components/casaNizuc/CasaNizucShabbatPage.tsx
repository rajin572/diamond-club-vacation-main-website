import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpDown, KeyRound, Landmark, Star } from "lucide-react";
import { SubNav } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { AllImages } from "../../../public/images/AllImages";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { CasaNizucHero } from "./CasaNizucHero";
import { CASA_NIZUC_SUB_NAV, SHABBAT_INQUIRE_HREF } from "./casaNizucNav";

const HIGHLIGHT_ICONS: Record<string, ReactNode> = {
  "Shul in the building": <Landmark size={22} aria-hidden="true" />,
  "Shabbat elevators": <ArrowUpDown size={22} aria-hidden="true" />,
  "Physical room keys": <KeyRound size={22} aria-hidden="true" />,
  "Everything is kosher": <Star size={22} aria-hidden="true" />,
};

/**
 * Shabbat page, laid out like the client's "Shabbat at Casa Nizuc – website page" PDF (2026-11-15): hero, why Shabbat works here,
 * the eight steps, the Shabbat meals, Shabbat-ready by design, a quote band, good to know and a closing call.
 * The colours, fonts and buttons are the site's own (dcv-lp-* classes in design.css), not the PDF's.
 */
export function CasaNizucShabbatPage() {
  const { shabbat } = CASA_NIZUC_PAGE;
  const { gastronomy } = shabbat;
  // The eight steps in two ruled rows of four, as in the PDF.
  const stepRows = [shabbat.steps.slice(0, 4), shabbat.steps.slice(4)];

  return (
    <>
      <CasaNizucHero
        image={shabbat.image}
        kicker="Shabbat at Casa Nizuc"
        title={shabbat.heading}
        subtitle={shabbat.lead}
        actions={
          <>
            <Link className="dcv-btn" href={SHABBAT_INQUIRE_HREF}>
              Reserve your Shabbat Experience
            </Link>
            <a className="dcv-btn dcv-btn--light" href="#how-shabbat-works">
              How Shabbat works here
            </a>
          </>
        }
      />
      <SubNav items={CASA_NIZUC_SUB_NAV} label="Casa Nizuc sections" />

      {/* Why Shabbat works here */}
      <section className="dcv-lp-band" style={{ paddingTop: 96 }}>
        <div className="dcv-lp-inner dcv-lp-split">
          <h2 className="dcv-lp-title">{shabbat.introHeading}</h2>
          <div>
            <p className="dcv-lp-body">{shabbat.introText}</p>
            <p className="dcv-lp-accent">{shabbat.keepLine}</p>
          </div>
        </div>
        <div className="dcv-lp-inner dcv-lp-cards4">
          {shabbat.highlights.map((item) => (
            <div key={item.title} className="dcv-lp-card">
              <span className="dcv-cn-icon">{HIGHLIGHT_ICONS[item.title]}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Shabbat works here */}
      <section id="how-shabbat-works" className="dcv-lp-band dcv-lp-band--dark">
        <div className="dcv-lp-inner">
          <p className="dcv-lp-eyebrow">How Shabbat works here</p>
          <h2 className="dcv-lp-title">{shabbat.stepsTitle}</h2>
          {stepRows.map((row, rowIndex) => (
            <ol key={rowIndex} className={rowIndex === 0 ? "dcv-lp-steps dcv-lp-steps--first" : "dcv-lp-steps"} start={rowIndex * 4 + 1}>
              {row.map((step, index) => (
                <li key={step.title}>
                  <span className="dcv-lp-step-n">{rowIndex * 4 + index + 1}</span>
                  <div>
                    <small>{step.when}</small>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          ))}
          <p className="dcv-lp-note">{shabbat.scheduleNote}</p>
        </div>
      </section>

      {/* The Shabbat experience */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-split" style={{ alignItems: "center" }}>
          <div className="dcv-lp-collage">
            <div>
              <Image src={AllImages.casaNizucEventsChandeliers} alt="Zait" fill sizes="(max-width: 1000px) 100vw, 30vw" />
            </div>
            <div>
              <Image src={AllImages.casaNizucGkdeDining} alt="Casa Nizuc dining room" fill sizes="(max-width: 1000px) 100vw, 22vw" />
            </div>
            <div>
              <Image src={AllImages.casaNizucAshanRender} alt="Âshân" fill sizes="(max-width: 1000px) 100vw, 22vw" />
            </div>
          </div>
          <div>
            <p className="dcv-lp-eyebrow">The Shabbat experience</p>
            <h2 className="dcv-lp-title" style={{ fontSize: "clamp(30px, 3.4vw, 44px)" }}>
              {gastronomy.title}
            </h2>
            <p className="dcv-lp-body" style={{ marginTop: 18 }}>
              {gastronomy.text}
            </p>
            <div className="dcv-lp-meals">
              {gastronomy.meals.map((meal) => (
                <div key={meal.title} className="dcv-lp-meal">
                  <small>{meal.when}</small>
                  <div>
                    <h3>{meal.title}</h3>
                    <p>{meal.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="dcv-lp-body" style={{ fontSize: 15 }}>
              {gastronomy.note}
            </p>
            <div className="dcv-lp-reserve">
              <div>
                <p className="dcv-lp-eyebrow">{gastronomy.reserveTitle}</p>
                <p>{gastronomy.reserveText}</p>
              </div>
              <Link className="dcv-btn" href={SHABBAT_INQUIRE_HREF}>
                Reserve now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shabbat-ready by design */}
      <section className="dcv-lp-band dcv-lp-band--cream">
        <div className="dcv-lp-inner">
          <p className="dcv-lp-eyebrow">Shabbat-ready by design</p>
          <h2 className="dcv-lp-title">{shabbat.readyTitle}</h2>
          <div className="dcv-lp-cards4 dcv-lp-cards4--ready">
            {shabbat.ready.map((item) => (
              <div key={item.title} className={item.soon ? "dcv-lp-card dcv-lp-card--soon" : "dcv-lp-card"}>
                {item.soon && <em className="dcv-lp-pill">Coming soon</em>}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="dcv-lp-photoband">
        <Image src={AllImages.casaNizucTowerNight} alt="" fill sizes="100vw" />
        <div className="dcv-lp-inner">
          <p className="dcv-lp-quote">“{shabbat.quote}”</p>
          <p className="dcv-lp-eyebrow" style={{ color: "#e4bd60", margin: "0 auto" }}>
            Shabbat at Casa Nizuc
          </p>
        </div>
      </section>

      {/* Good to know */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner">
          <h2 className="dcv-lp-title" style={{ fontSize: "clamp(30px, 3.4vw, 44px)" }}>
            Good to know
          </h2>
          <div className="dcv-lp-know">
            {shabbat.goodToKnow.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <p style={{ textAlign: "center", margin: "18px 0 28px" }}>
        <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#shabbat`}>
          ← Back to Casa Nizuc
        </Link>
      </p>
    </>
  );
}
