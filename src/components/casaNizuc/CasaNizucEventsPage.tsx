import Link from "next/link";
import { SubNav } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { CASA_NIZUC_HREF } from "@/lib/routes";
import { CasaNizucHero } from "./CasaNizucHero";
import { CasaNizucProposalForm } from "./CasaNizucProposalForm";
import { CASA_NIZUC_SUB_NAV } from "./casaNizucNav";

/**
 * Events & Celebrations page, from the client's website design package (events.html, 2026-11-22): the introduction, the events the team
 * helps create and the "Request a Proposal" form. The text and order are the client's; the look is the site's own (dcv-lp-* classes).
 */
export function CasaNizucEventsPage() {
  const page = CASA_NIZUC_PAGE.eventsPage;

  return (
    <>
      <CasaNizucHero
        image={page.image}
        kicker={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        actions={
          <a className="dcv-btn" href="#proposal">
            Request a proposal
          </a>
        }
      />
      <SubNav items={CASA_NIZUC_SUB_NAV} label="Casa Nizuc sections" />

      {/* Introduction */}
      <section className="dcv-lp-band">
        <div className="dcv-lp-inner dcv-lp-intro">
          <p className="dcv-lp-body">{page.intro}</p>
        </div>
      </section>

      {/* Events we help create */}
      <section className="dcv-lp-band dcv-lp-band--white">
        <div className="dcv-lp-inner">
          <div className="dcv-lp-center">
            <p className="dcv-lp-eyebrow">{page.eyebrow}</p>
            <h2 className="dcv-lp-title">{page.typesTitle}</h2>
          </div>
          <div className="dcv-lp-cards4">
            {page.types.map((type) => (
              <div key={type.title} className="dcv-lp-card">
                <h3>{type.title}</h3>
                <p>{type.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request a proposal */}
      <section id="proposal" className="dcv-lp-band dcv-lp-band--cream">
        <div className="dcv-lp-inner dcv-lp-split">
          <div>
            <p className="dcv-lp-eyebrow">Plan your celebration</p>
            <h2 className="dcv-lp-title">{page.formTitle}</h2>
            <p className="dcv-lp-body">Tell us about your event and our events team will prepare a proposal for you.</p>
          </div>
          <CasaNizucProposalForm eventTypes={page.eventTypes} />
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
