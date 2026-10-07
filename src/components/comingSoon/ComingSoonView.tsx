import Image from "next/image";
import Link from "next/link";
import { DesignButton, DetailHero, Wrap } from "@/components/shared/design";
import { AllImages } from "../../../public/images/AllImages";
import type { ComingSoonPageData } from "./comingSoon.types";

/** Hero, a short note, the client's "Coming Soon" artwork and ways to reach the team. */
export function ComingSoonView({ data }: { data: ComingSoonPageData }) {
  return (
    <>
      <DetailHero image={AllImages.home1} kicker="Coming Soon" title={data.title} subtitle={data.tagline} />
      <Wrap>
        <div className="dcv-content2">
          <div>
            <h2>Coming soon</h2>
            <p className="dcv-lead">
              We are putting the finishing touches on this page. In the meantime, our team is happy to answer any question.
            </p>
            <div className="dcv-coming-actions">
              <DesignButton href="/inquire">Inquire</DesignButton>
              <Link className="dcv-link" href="/">
                Back to home
              </Link>
            </div>
          </div>
          <aside className="dcv-coming-art">
            <Image src={AllImages.figmaProgram01} alt="Coming soon" sizes="(max-width: 900px) 100vw, 30vw" />
          </aside>
        </div>
      </Wrap>
    </>
  );
}

export default ComingSoonView;
