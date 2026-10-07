import Image from "next/image";
import type { DesignImage } from "./types";

interface DetailHeroProps {
  image: DesignImage;
  kicker?: string;
  title: string;
  subtitle?: string;
  /** Brand badge shown above the title (the round Diamond Club Vacations logo). */
  logo?: { image: DesignImage; alt: string; /** Wide wordmark (hotel logo) instead of the round badge. */ wordmark?: boolean };
}

/** The rounded-bottom hero used by every inner page (client design: `.detailHero`). */
export function DetailHero({ image, kicker, title, subtitle, logo }: DetailHeroProps) {
  return (
    <section className="dcv-hero">
      <Image src={image} alt="" priority sizes="100vw" />
      <div className="dcv-copy">
        {logo && <Image
            className={logo.wordmark ? "dcv-hero-logo dcv-hero-logo--wordmark" : "dcv-hero-logo"}
            src={logo.image}
            alt={logo.alt}
            priority
            sizes={logo.wordmark ? "230px" : "104px"}
          />}
        {kicker && <div className="dcv-kicker">{kicker}</div>}
        <h1>{title}</h1>
        {subtitle && <div>{subtitle}</div>}
      </div>
    </section>
  );
}
