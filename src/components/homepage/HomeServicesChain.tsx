import Image from "next/image";
import Link from "next/link";
import type { HomeServiceItem } from "./homepage.types";

/** Four overlapping circular tiles linking to the main services; the whole circle is the link (client design: index.html `.chain`). */
export function HomeServicesChain({ services }: { services: HomeServiceItem[] }) {
  return (
    <section className="dcv-chain-wrap" aria-label="Explore our services">
      <div className="dcv-chain">
        {services.map((service) => (
          <Link key={service.id} className="dcv-bubble" href={service.href} aria-label={`${service.title}: ${service.description}`}>
            <Image src={service.image} alt="" sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 25vw" />
            <div className="dcv-txt">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomeServicesChain;
