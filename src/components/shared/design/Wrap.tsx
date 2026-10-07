import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WrapProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

/** Max-width page section with the gold glow (client design: `.wrap`). */
export function Wrap({ children, id, className }: WrapProps) {
  return (
    <section id={id} className={cn("dcv-wrap", id && "dcv-anchor", className)}>
      {children}
    </section>
  );
}

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
}

/** Heading on the left, supporting copy on the right (client design: `.sectionTitle`). */
export function SectionTitle({ title, description, className }: SectionTitleProps) {
  return (
    <div className={cn("dcv-section-title", className)}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
