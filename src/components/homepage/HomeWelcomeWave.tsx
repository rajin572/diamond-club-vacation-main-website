import type { HomeWelcomeData } from "./homepage.types";

/** Curved cream "Welcome To" section with the four promises (client design: index.html `.welcomeWave`). */
export function HomeWelcomeWave({ data }: { data: HomeWelcomeData }) {
  return (
    <section className="dcv-welcome">
      <div className="dcv-eyebrow">{data.eyebrow}</div>
      <h2>{data.heading}</h2>
      <p>{data.description}</p>
      <div className="dcv-promise">
        {data.promises.map((promise) => (
          <div key={promise.title}>
            <b>{promise.title}</b>
            <span>{promise.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeWelcomeWave;
