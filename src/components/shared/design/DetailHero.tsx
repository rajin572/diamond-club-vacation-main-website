import Image from "next/image";
import type { ReactNode } from "react";
import { formatProgramTitle } from "@/lib/program-title";
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
  /** Buttons shown under the title (e.g. the program's Brochure button). */
  actions?: ReactNode;
}

/** The rounded-bottom hero used by inner pages, updated with centralized typography and no banner logo. */
export function DetailHero({ image, kicker, title, subtitle, imagePosition, actions }: DetailHeroProps) {
  return (
    <section className="dcv-hero">
      <Image
        src={image}
        alt=""
        priority
        sizes="100vw"
        quality={90}
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
      <div className="dcv-copy">
        {kicker && <div className="dcv-kicker">{kicker}</div>}
        <h1>{formatProgramTitle(title)}</h1>
        {subtitle && <div className="dcv-hero-subtitle">{formatProgramTitle(subtitle)}</div>}
        {actions && <div className="dcv-hero-actions">{actions}</div>}
      </div>
    </section>
  );
}

export default DetailHero;
