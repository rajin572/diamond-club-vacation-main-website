import Image from "next/image";
import Link from "next/link";
import type { DesignImage } from "./types";

const CARD_SIZES = "(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw";

interface DesignCardProps {
  image: DesignImage;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  /** Open `href` in a new tab (used for external map links). */
  external?: boolean;
  alt?: string;
  sizes?: string;
}

/** Image card with a title, blurb and "Explore →" link (client design: `.card`). */
export function DesignCard({
  image,
  title,
  description,
  href,
  linkLabel = "Explore →",
  external,
  alt = "",
  sizes = CARD_SIZES,
}: DesignCardProps) {
  return (
    <article className="dcv-card">
      <Image src={image} alt={alt} sizes={sizes} />
      <div className="dcv-body">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {href &&
          (external ? (
            <a className="dcv-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${title}: ${linkLabel}`}>
              {linkLabel}
            </a>
          ) : (
            <Link className="dcv-link" href={href} aria-label={`${title}: ${linkLabel}`}>
              {linkLabel}
            </Link>
          ))}
      </div>
    </article>
  );
}

interface RoomCardProps {
  image: DesignImage;
  title: string;
  meta?: string;
  href?: string;
  linkLabel?: string;
  alt?: string;
}

/** Compact card for room / venue lists (client design: `.room`). */
export function RoomCard({ image, title, meta, href, linkLabel = "View room details →", alt = "" }: RoomCardProps) {
  return (
    <article className="dcv-room">
      <Image src={image} alt={alt} sizes={CARD_SIZES} />
      <div className="dcv-body">
        <h3>{title}</h3>
        {meta && <div className="dcv-meta">{meta}</div>}
        {href && (
          <p>
            <Link className="dcv-link" href={href} aria-label={`${title}: ${linkLabel}`}>
              {linkLabel}
            </Link>
          </p>
        )}
      </div>
    </article>
  );
}
