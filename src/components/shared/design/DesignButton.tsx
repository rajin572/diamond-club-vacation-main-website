import Link from "next/link";
import type { ReactNode } from "react";

/** Gold pill call-to-action (client design: `.btn`). */
export function DesignButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="dcv-btn" href={href}>
      {children}
    </Link>
  );
}
