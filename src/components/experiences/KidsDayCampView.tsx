import Image from "next/image";
import { CheckCheck } from "lucide-react";
import { DetailHero, PhotoGallery, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignLink } from "@/components/shared/design";
import type { KidsDayCampData } from "./experiences.types";

interface KidsDayCampViewProps {
  data: KidsDayCampData;
  nav: DesignLink[];
  /** The hotel the visitor came from. */
  resortId?: string;
}

/**
 * The "Day Camp" page. Every block is optional so each program shows exactly what its content has:
 * overview, a checklist program, activities with the team, age groups, dining, babysitting, and gallery.
 */
export function KidsDayCampView({ data, nav }: KidsDayCampViewProps) {
  const { overview, program, director, team, activities, ageGroups, dining, babysitting, comingSoon, gallery } = data;

  return (
    <>
      <DetailHero
        image={data.hero.image}
        imagePosition={data.hero.imagePosition}
        kicker={data.programName}
        title={data.hero.title}
        subtitle={data.hero.description}
      />
      <SubNav items={nav} label={`${data.programName} sections`} />

      {comingSoon && (
        <Wrap>
          <p className="dcv-lead" style={{ textAlign: "center" }}>
            Coming Soon
          </p>
        </Wrap>
      )}

      {overview && (
        <Wrap>
          <SectionTitle className="dcv-section-title--center" title={overview.title} description={overview.description} />
        </Wrap>
      )}

      {program && (
        <Wrap className={overview ? "dcv-wrap--stack" : undefined}>
          <SectionTitle title={program.title} />
          <ul className="dcv-checklist">
            {program.items.map((item) => (
              <li key={item}>
                <CheckCheck size={20} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Wrap>
      )}

      {((activities && activities.length > 0) || director || (team && team.length > 0)) && (
        <Wrap className="dcv-wrap--stack">
          <div className="dcv-content2">
            <div>
              {activities && activities.length > 0 && (
                <>
                  <h2>Day Camp Program</h2>
                  <div className="dcv-feature-list dcv-feature-list--boxed space-y-7! py-10!">
                    {activities.map((activity) => (
                      <div key={activity.id} className="dcv-feature-group space-y-5!">
                        <h3>{activity.title}</h3>
                        <p className="dcv-copy-text" style={{ margin: 0 }}>
                          {activity.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            {(director || (team && team.length > 0)) && (
              <div className="dcv-aside-stack">
                {director && (
                  <aside>
                    <h2>{director.title}</h2>
                    <div className="dcv-team-photo dcv-team-photo--wide">
                      <Image src={director.image} alt={director.alt} sizes="(max-width: 900px) 100vw, 360px" />
                    </div>
                    <div className="dcv-card-tag">{director.role}</div>
                    <h3 style={{ fontSize: 22, margin: "0 0 6px" }}>{director.name}</h3>
                    <p className="dcv-copy-text" style={{ margin: 0 }}>
                      {director.bio}
                    </p>
                  </aside>
                )}
                {team && team.length > 0 && (
                  <aside>
                    <h2>Our Team</h2>
                    {team.map((member) => (
                      <div key={member.id} className="dcv-team-member">
                        {member.image && (
                          <div className="dcv-team-photo">
                            <Image src={member.image} alt={member.name} sizes="(max-width: 900px) 100vw, 360px" />
                          </div>
                        )}
                        <div className="dcv-card-tag">{member.role}</div>
                        <h3 style={{ fontSize: 22, margin: "0 0 6px" }}>{member.name}</h3>
                        <p className="dcv-copy-text" style={{ margin: 0 }}>
                          {member.bio}
                        </p>
                      </div>
                    ))}
                  </aside>
                )}
              </div>
            )}
          </div>
        </Wrap>
      )}

      {ageGroups && ageGroups.length > 0 && (
        <Wrap className="dcv-wrap--stack">
          <SectionTitle title="Camp Age Groups" />
          <div className="dcv-grid3">
            {ageGroups.map((group) => (
              <div key={group.group} className="dcv-feature-group" style={{ margin: 0 }}>
                {group.ages && <div className="dcv-card-tag dcv-card-tag--plain">{group.ages}</div>}
                <h3>{group.group}</h3>
                {group.highlights && (
                  <p className="dcv-copy-text" style={{ margin: 0 }}>
                    {group.highlights}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Wrap>
      )}

      {(dining || babysitting) && (
        <Wrap className="dcv-wrap--stack">
          <div className="dcv-content2">
            <div>
              {dining && (
                <>
                  <h2>{dining.title}</h2>
                  {dining.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="dcv-copy-text">
                      {paragraph}
                    </p>
                  ))}
                </>
              )}
            </div>
            {babysitting && (
              <aside>
                <h2>{babysitting.title}</h2>
                <p className="dcv-copy-text">{babysitting.description}</p>
                <p className="dcv-copy-text">{babysitting.rateText}</p>
              </aside>
            )}
          </div>
        </Wrap>
      )}

      {gallery && gallery.images && gallery.images.length > 0 && (
        <Wrap id="gallery" className="dcv-wrap--stack">
          <SectionTitle
            title={gallery.title ?? "Day Camp Photo Gallery"}
            description={gallery.description}
          />
          <PhotoGallery images={gallery.images} alt={`${data.programName} Day Camp`} />
        </Wrap>
      )}
    </>
  );
}

export default KidsDayCampView;
