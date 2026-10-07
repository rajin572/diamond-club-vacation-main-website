import { DesignButton, DetailHero, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignLink } from "@/components/shared/design";
import { inquireHref } from "@/lib/routes";
import type { KidsDayCampData } from "./experiences.types";

interface KidsDayCampViewProps {
  data: KidsDayCampData;
  nav: DesignLink[];
}

/** The detailed "Day Camp & Teen Program" page: overview, activities, team, age groups, dining and babysitting. */
export function KidsDayCampView({ data, nav }: KidsDayCampViewProps) {
  const inquire = inquireHref({ destination: data.programId, topic: "kids-day-camp" });

  return (
    <>
      <DetailHero image={data.hero.image} kicker={data.programName} title={data.hero.title} subtitle={data.programName} />
      <SubNav items={nav} label={`${data.programName} sections`} />

      <Wrap>
        <SectionTitle title={data.overview.title} description={data.overview.description} />
        <p className="dcv-lead">{data.hero.description}</p>
      </Wrap>

      <Wrap className="dcv-wrap--stack">
        <div className="dcv-content2">
          <div>
            <h2>Daily activities</h2>
            {data.activities.map((activity) => (
              <div key={activity.id} className="dcv-feature-group">
                <h3>{activity.title}</h3>
                <p className="dcv-copy-text" style={{ margin: 0 }}>
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
          <aside>
            <h2>Our team</h2>
            {data.team.map((member) => (
              <div key={member.id} style={{ marginBottom: 20 }}>
                <div className="dcv-card-tag">{member.role}</div>
                <h3 style={{ fontSize: 22, margin: "0 0 6px" }}>{member.name}</h3>
                <p className="dcv-copy-text" style={{ margin: 0 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </Wrap>

      <Wrap className="dcv-wrap--stack">
        <SectionTitle title="Age groups" description="Programming is tailored to every age, from infants to teens." />
        <div className="dcv-grid3">
          {data.ageGroups.map((group) => (
            <div key={group.group} className="dcv-feature-group" style={{ margin: 0 }}>
              <div className="dcv-card-tag">{group.ages}</div>
              <h3>{group.group}</h3>
              <p className="dcv-copy-text" style={{ margin: 0 }}>
                {group.highlights}
              </p>
            </div>
          ))}
        </div>
      </Wrap>

      <Wrap className="dcv-wrap--stack">
        <div className="dcv-content2">
          <div>
            <h2>{data.dining.title}</h2>
            {data.dining.paragraphs.map((paragraph) => (
              <p key={paragraph} className="dcv-copy-text">
                {paragraph}
              </p>
            ))}
          </div>
          <aside>
            <h2>{data.babysitting.title}</h2>
            <p className="dcv-copy-text">{data.babysitting.description}</p>
            <p className="dcv-copy-text">{data.babysitting.rateText}</p>
            <DesignButton href={inquire}>Ask about babysitting</DesignButton>
          </aside>
        </div>
      </Wrap>
    </>
  );
}

export default KidsDayCampView;
