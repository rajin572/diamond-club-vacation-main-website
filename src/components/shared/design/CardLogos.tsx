import Image from "next/image";
import type { CardLogo } from "./types";

/** Brand marks laid over the top of a card photo (use inside `.dcv-card-media`). */
export function CardLogos({ logos }: { logos: CardLogo[] }) {
  if (logos.length === 0) return null;

  return (
    <div className="dcv-card-logos">
      {logos.map((logo) =>
        logo.image ? (
          <Image key={logo.alt} className={logo.blend ? "dcv-blend" : undefined} src={logo.image} alt={logo.alt} sizes="220px" />
        ) : (
          <span key={logo.alt} role="img" aria-label={logo.alt}>
            {logo.text}
          </span>
        )
      )}
    </div>
  );
}
