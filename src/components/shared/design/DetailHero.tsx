import Image from "next/image";
import type { DesignImage } from "./types";

interface DetailHeroProps {
  image: DesignImage;
  kicker: string;
  title: string;
  subtitle?: string;
}

/** The rounded-bottom hero used by every inner page (client design: `.detailHero`). */
export function DetailHero({ image, kicker, title, subtitle }: DetailHeroProps) {
  return (
    <section className="dcv-hero">
      <Image src={image} alt="" priority sizes="100vw" />
      <div className="dcv-copy">
        <div className="dcv-kicker">{kicker}</div>
        <h1>{title}</h1>
        {subtitle && <div>{subtitle}</div>}
      </div>
    </section>
  );
}
