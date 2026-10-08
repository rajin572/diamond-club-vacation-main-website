import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { CardLogos } from "@/components/shared/design";
import type { ProgramSummary } from "@/components/programs/programs.types";

/**
 * A program on the Passover page: photo with the partner brands over it, then name, one-line pitch and
 * location. The whole card is one link to the program's overview.
 */
export function ProgramCard({ program }: { program: ProgramSummary }) {
  return (
    <article className="dcv-card dcv-program-card">
      <div className="dcv-card-media">
        <Image src={program.image} alt="" sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
        {program.logos && <CardLogos logos={program.logos} />}
      </div>
      <div className="dcv-body">
        <h3>{program.title}</h3>
        <p>{program.subtitle}</p>
        <div className="dcv-card-location">
          <MapPin size={16} aria-hidden="true" />
          {program.location}
        </div>
        <Link className="dcv-link" href={program.href} aria-label={`${program.title}: ${program.subtitle}. Explore`}>
          Explore →
        </Link>
      </div>
    </article>
  );
}

export default ProgramCard;
