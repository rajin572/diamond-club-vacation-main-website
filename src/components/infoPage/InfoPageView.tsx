import { DesignButton, DetailHero, Wrap } from "@/components/shared/design";
import type { InfoPageData } from "./infoPage.types";

/** Hero followed by a two-column heading/lead block and a call-to-action card (client design: about.html, login.html, ...). */
export function InfoPageView({ data }: { data: InfoPageData }) {
  return (
    <>
      <DetailHero
        image={data.hero.image}
        kicker={data.hero.kicker}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
      />
      <Wrap>
        <div className="dcv-content2">
          <div>
            <h2>{data.heading}</h2>
            <p className="dcv-lead">{data.lead}</p>
            {data.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="dcv-copy-text">
                {paragraph}
              </p>
            ))}
          </div>
          <aside>
            <DesignButton href={data.cta.href}>{data.cta.label}</DesignButton>
          </aside>
        </div>
      </Wrap>
    </>
  );
}

export default InfoPageView;
