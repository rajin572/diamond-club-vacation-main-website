"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "@/components/shared/design";
import type { ExperienceItem } from "./experiences.types";

export interface ExperienceCardItem extends ExperienceItem {
  /** Resolved URL for `linkTo` (the server knows the offering and program). */
  href?: string;
}

interface ExperienceCardsProps {
  items: ExperienceCardItem[];
  columns: 2 | 3;
  inquireHref: string;
}

/** Card grid for entertainment, scholars and the kids program, with a details pop-up per card. */
export function ExperienceCards({ items, columns, inquireHref }: ExperienceCardsProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const close = useCallback(() => setOpenId(null), []);
  const open = items.find((item) => item.id === openId && item.details);

  return (
    <>
      <div className={columns === 2 ? "dcv-grid2" : "dcv-grid3"}>
        {items.map((item) => (
          <article key={item.id} className="dcv-card">
            <Image src={item.image} alt={item.title} sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
            <div className="dcv-body">
              {item.tag && <div className="dcv-card-tag">{item.tag}</div>}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.tba ? (
                <span className="dcv-meta">To be announced</span>
              ) : item.href ? (
                <Link className="dcv-link" href={item.href}>
                  {item.linkLabel ?? "Explore →"}
                </Link>
              ) : item.details ? (
                <button type="button" className="dcv-link" aria-label={`${item.title}: ${item.linkLabel ?? "Explore"}`} onClick={() => setOpenId(item.id)}>
                  {item.linkLabel ?? "Explore →"}
                </button>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {open?.details && (
        <Modal title={open.details.title} onClose={close}>
          {open.details.tag && <div className="dcv-card-tag">{open.details.tag}</div>}
          <h2>{open.details.title}</h2>
          {open.details.paragraphs.map((paragraph) => (
            <p key={paragraph} className="dcv-copy-text">
              {paragraph}
            </p>
          ))}
          {open.details.facts && open.details.facts.length > 0 && (
            <dl className="dcv-facts">
              {open.details.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <Link className="dcv-btn" href={inquireHref}>
            Inquire
          </Link>
        </Modal>
      )}
    </>
  );
}

export default ExperienceCards;
