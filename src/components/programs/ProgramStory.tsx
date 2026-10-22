import { SectionTitle } from "@/components/shared/design";
import type { ProgramAboutStory } from "./programs.types";

/** The designed About page of a program (Guettaway): story, quote, the two resorts, the vision, a closing line and the Kashrus note. */
export function ProgramStory({ story }: { story: ProgramAboutStory }) {
  return (
    <>
      <section className="dcv-wrap dcv-wrap--stack dcv-story">
        <SectionTitle title={story.heading} />

        <div className="dcv-story-grid">
          <div className="dcv-story-main">
            {story.intro.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "dcv-story-lead" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="dcv-story-vision">
            <h3>{story.vision.title}</h3>
            <span className="dcv-story-eyebrow">{story.vision.subtitle}</span>
            {story.vision.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </aside>
        </div>

        <blockquote className="dcv-story-quote">{story.quote}</blockquote>

        <div className="dcv-story-resorts">
          {story.resorts.map((paragraph, index) => (
            <div key={paragraph} className="dcv-story-resort">
              <span className="dcv-story-number">0{index + 1}</span>
              <p>{paragraph}</p>
            </div>
          ))}
        </div>

        <div className="dcv-story-closing">
          <h3>{story.closing.title}</h3>
          <p>{story.closing.text}</p>
        </div>

        <div className="dcv-story-note">
          <h4>{story.note.title}</h4>
          <p>{story.note.text}</p>
        </div>
      </section>
    </>
  );
}

export default ProgramStory;
