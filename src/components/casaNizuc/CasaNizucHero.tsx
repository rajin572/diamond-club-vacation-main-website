import type { ReactNode } from "react";
import Image from "next/image";
import type { DesignImage } from "@/components/shared/design";

interface CasaNizucHeroProps {
  image: DesignImage;
  kicker: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  /** The buttons under the subtitle. */
  actions?: ReactNode;
  /** A short line under the buttons (e.g. GKDE's "From $200 per adult"). */
  note?: ReactNode;
}

/**
 * The banner of the year-round Casa Nizuc landing pages (GKDE, Shabbat, Dining, Overview, restaurants): kicker, title, subtitle,
 * buttons and an optional note, centred like the site's other banners (client 2026-11-15) through the shared `dcv-hero` classes.
 */
export function CasaNizucHero({ image, kicker, title, subtitle, actions, note }: CasaNizucHeroProps) {
  return (
    <section className="dcv-hero dcv-hero--landing">
      <Image src={image} alt="" priority sizes="100vw" quality={90} />
      <div className="dcv-copy">
        <div className="dcv-kicker">{kicker}</div>
        <h1>{title}</h1>
        {subtitle && <div className="dcv-hero-subtitle">{subtitle}</div>}
        {actions && <div className="dcv-hero-actions">{actions}</div>}
        {note && <p className="dcv-lp-hero-note">{note}</p>}
      </div>
    </section>
  );
}
