import Image from "next/image";
import Link from "next/link";
import { DetailHero, SectionTitle, Wrap } from "@/components/shared/design";
import { ABOUT_PAGE_DATA } from "@/data/pages/about.data";

export function AboutView() {
  const data = ABOUT_PAGE_DATA;

  return (
    <div className="dcv-about-page">
      {/* 1. Hero */}
      <DetailHero
        image={data.hero.image}
        kicker={data.hero.kicker}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
      />

      {/* 2. Intro / Narrative */}
      <Wrap className="dcv-wrap--stack">
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            textAlign: "center",
            padding: "40px 32px",
            background: "#fff",
            borderRadius: "24px",
            border: "1px solid rgba(205, 172, 104, 0.35)",
            boxShadow: "0 14px 36px rgba(24, 29, 31, 0.06)",
          }}
        >
          <span className="dcv-story-eyebrow" style={{ marginBottom: "14px" }}>
            Established In New York · 14 Years of Excellence
          </span>
          <p
            style={{
              font: "400 clamp(19px, 2.2vw, 24px) / 1.65 var(--dcv-serif)",
              color: "#1c1c1c",
              margin: 0,
            }}
          >
            {data.intro.paragraphs[0]}
          </p>
        </div>
      </Wrap>

      {/* 3. What We Do */}
      <Wrap className="dcv-wrap--stack">
        <SectionTitle title={data.pillarsHeading} />

        <div className="dcv-grid3">
          {data.pillars.slice(0, 3).map((pillar) => (
            <article key={pillar.id} className="dcv-card">
              <div style={{ position: "relative", width: "100%", height: "240px", overflow: "hidden" }}>
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="dcv-body">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                {pillar.href && (
                  <div>
                    <Link className="dcv-link" href={pillar.href}>
                      {pillar.linkLabel ?? "Explore →"}
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="dcv-grid2" style={{ marginTop: "24px" }}>
          {data.pillars.slice(3).map((pillar) => (
            <article key={pillar.id} className="dcv-card">
              <div style={{ position: "relative", width: "100%", height: "240px", overflow: "hidden" }}>
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="dcv-body">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                {pillar.href && (
                  <div>
                    <Link className="dcv-link" href={pillar.href}>
                      {pillar.linkLabel ?? "Explore →"}
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* 4. Our Promise */}
        <div className="dcv-story-closing" style={{ marginTop: "64px" }}>
          <span className="dcv-story-eyebrow" style={{ color: "#f1d58b", marginBottom: "14px" }}>
            The Diamond Standard
          </span>
          <h3>{data.promise.title}</h3>
          <p style={{ fontSize: "clamp(17px, 1.8vw, 20px)", lineHeight: "1.75" }}>
            {data.promise.statement}{" "}
            <strong style={{ color: "#f1d58b", fontWeight: 700, letterSpacing: "0.04em" }}>
              {data.promise.highlight}
            </strong>
          </p>
        </div>
      </Wrap>
    </div>
  );
}

export default AboutView;
