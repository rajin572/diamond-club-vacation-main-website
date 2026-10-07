import Link from "next/link";
import type { DesignLink } from "./types";

/** Floating pill navigation under a hero (client design: `.subnav`). */
export function SubNav({ items, label = "Page sections" }: { items: DesignLink[]; label?: string }) {
  if (items.length === 0) return null;

  return (
    <nav className="dcv-subnav" aria-label={label}>
      <div className="dcv-inner">
        {items.map((item) => (
          <Link key={`${item.label}-${item.href}`} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
