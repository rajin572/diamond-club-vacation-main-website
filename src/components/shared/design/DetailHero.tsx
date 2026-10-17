import Image from "next/image";
import type { DesignImage } from "./types";

interface DetailHeroProps {
  image: DesignImage;
  kicker?: string;
  title: string;
  subtitle?: string;
  /** CSS object-position of the photo, for tall or off-centre images (e.g. "50% 20%"). */
  imagePosition?: string;
  /** Kept for backwards compatibility but not rendered on the banner per design requirements. */
  logo?: { image: DesignImage; alt: string; wordmark?: boolean };
}

/** The rounded-bottom hero used by inner pages, updated with centralized typography and no banner logo. */
export function DetailHero({ image, kicker, title, subtitle, imagePosition }: DetailHeroProps) {
  return (
    <section className="dcv-hero">
      <Image
        src={image}
        alt=""
        priority
        sizes="100vw"
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
      <div className="dcv-copy">
        {kicker && <div className="dcv-kicker">{kicker}</div>}
        <h1>{title}</h1>
        {subtitle && <div className="dcv-hero-subtitle">{subtitle}</div>}
      </div>
    </section>
  );
}

export default DetailHero;
