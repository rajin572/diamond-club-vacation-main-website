import Image from "next/image";
import type { ReactNode } from "react";
import { formatProgramTitle } from "@/lib/program-title";
import type { DesignImage } from "./types";

/** "Grand Ballroom – Yom Tov Dining" (client 2026-10-29): "Grand Ballroom" big, and "Yom Tov Dining" small in script under it. */
const YOM_TOV_TITLE = /^(grand ballroom)\s*[–-]\s*(yom tov dining)$/i;

function formatHeroTitle(title: string): ReactNode {
  const match = YOM_TOV_TITLE.exec(title.trim());
  if (!match) return formatProgramTitle(title, true);
  return (
    <>
      {match[1]}
      <span className="dcv-title-script">{match[2]}</span>
    </>
  );
}

interface DetailHeroProps {
  image: DesignImage;
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** CSS object-position of the photo, for tall or off-centre images (e.g. "50% 20%"). */
  imagePosition?: string;
  /** Brand logo shown on the banner (default position is "left" next to the title, like Guettaway). */
  logo?: { image: DesignImage; alt: string; wordmark?: boolean; position?: "top" | "left" };
  /** Buttons shown under the title (e.g. the program's Brochure button). */
  actions?: ReactNode;
  /** Keep the title on one line on tablet and desktop (the font scales with the screen); it still wraps on phones. */
  singleLine?: boolean;
}

/** The rounded-bottom hero used by inner pages, updated with centralized typography and flexible logo positioning. */
export function DetailHero({ image, kicker, title, subtitle, imagePosition, actions, logo, singleLine }: DetailHeroProps) {
  const isLogoLeft = logo && logo.position !== "top";

  return (
    <section className={singleLine ? "dcv-hero dcv-hero--oneline" : "dcv-hero"}>
      <Image
        src={image}
        alt=""
        priority
        sizes="100vw"
        quality={90}
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
      <div className="dcv-copy">
        {logo && logo.position === "top" && (
          <Image
            src={logo.image}
            alt={logo.alt}
            priority
            className="dcv-hero-logo"
            style={{ width: "auto", height: "76px", margin: "0 auto 16px", objectFit: "contain", filter: "drop-shadow(0 2px 14px rgba(0,0,0,0.5))" }}
          />
        )}
        {kicker && <div className="dcv-kicker">{kicker}</div>}
        <h1>
          {isLogoLeft ? (
            <span className="dcv-title-with-logo dcv-title-with-logo--hero">
              <Image
                src={logo.image}
                alt={logo.alt}
                priority
                className="dcv-title-logo dcv-title-logo--hero"
              />
              <span>{typeof title === "string" ? formatHeroTitle(title) : title}</span>
            </span>
          ) : typeof title === "string" ? (
            formatHeroTitle(title)
          ) : (
            title
          )}
        </h1>
        {subtitle && (
          <div className="dcv-hero-subtitle">
            {typeof subtitle === "string" ? formatProgramTitle(subtitle) : subtitle}
          </div>
        )}
        {actions && <div className="dcv-hero-actions">{actions}</div>}
      </div>
    </section>
  );
}

export default DetailHero;
