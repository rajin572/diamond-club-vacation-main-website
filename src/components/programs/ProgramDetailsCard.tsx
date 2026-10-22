"use client";

import { useState } from "react";
import Image from "next/image";
import type { DesignImage } from "@/components/shared/design";
import { ExperienceViewer } from "@/components/experiences/ExperienceViewer";

interface ProgramDetailsCardProps {
  image: DesignImage;
  title: string;
  description?: string;
  details: { title: string; paragraphs: string[]; tag?: string };
  /** CSS object-position of the card photo, so a tall photo shows its best part (not zoomed on one spot). */
  imagePosition?: string;
}

/** A tile of a program page whose "See details →" opens the same pop-up as the entertainment and attractions cards. */
export function ProgramDetailsCard({ image, title, description, details, imagePosition }: ProgramDetailsCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="dcv-card">
        <Image
          src={image}
          alt={title}
          sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
        <div className="dcv-body">
          <h3>{title}</h3>
          {description && <p>{description}</p>}
          <button type="button" className="dcv-link" aria-label={`${title}: See details`} onClick={() => setOpen(true)}>
            See details →
          </button>
        </div>
      </article>
      {open && (
        <ExperienceViewer
          heading={title}
          slides={[{ id: "details", title: details.title, image, tag: details.tag, paragraphs: details.paragraphs }]}
          index={0}
          layout="cards"
          onIndexChange={() => undefined}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default ProgramDetailsCard;
