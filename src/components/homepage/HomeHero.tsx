import Image from "next/image";
import type { HomeHeroData } from "./homepage.types";

/** Bullet with non-breaking spaces so the separator keeps its width (HTML would collapse plain spaces). */
const NBSP_BULLET = " \u00a0 • \u00a0 ";

/** Full-bleed landing hero (client design: index.html `.homeHero`). */
export function HomeHero({ data }: { data: HomeHeroData }) {
  return (
    <section className="dcv-home-hero">
      <Image src={data.backgroundImage} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      <div className="dcv-hero-words">
        <div className="dcv-eyebrow">{data.eyebrow}</div>
        <h1>{data.headline}</h1>
        <p>{data.tagline.join(NBSP_BULLET)}</p>
      </div>
    </section>
  );
}

export default HomeHero;
