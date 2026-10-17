import Image from "next/image";
import type { HomeHeroData } from "./homepage.types";

/** Full-bleed landing hero: headline and the four things we do (banner logo removed to match navbar branding). */
export function HomeHero({ data }: { data: HomeHeroData }) {
  return (
    <section className="dcv-home-hero">
      <Image src={data.backgroundImage} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      <div className="dcv-hero-words">
        <h1>{data.headline}</h1>
        <p className="dcv-hero-sub">{data.subtext}</p>
      </div>
    </section>
  );
}

export default HomeHero;
