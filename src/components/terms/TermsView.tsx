import Link from "next/link";
import { DetailHero, Wrap } from "@/components/shared/design";
import type { TermsData } from "./terms.types";

/** One Passover program's terms and conditions. */
export function TermsView({ data }: { data: TermsData }) {
  return (
    <>
      <DetailHero
        image={data.heroImage}
        kicker={data.programName}
        title="Terms and Conditions"
        subtitle={`${data.hotels} · Passover 2027`}
      />
      <Wrap>
        <article className="dcv-terms">
          {data.pendingNote ? (
            <p className="dcv-terms-pending">
              {data.pendingNote} <Link href="/contact">Contact us</Link>
            </p>
          ) : (
            data.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.blocks.map((block, index) =>
                  block.type === "subheading" ? (
                    <h3 key={index}>{block.text}</h3>
                  ) : (
                    <p key={index}>
                      {block.lead && <strong>{block.lead} </strong>}
                      {block.strong ? <strong>{block.text}</strong> : block.text}
                    </p>
                  )
                )}
              </section>
            ))
          )}
        </article>
      </Wrap>
    </>
  );
}

export default TermsView;
