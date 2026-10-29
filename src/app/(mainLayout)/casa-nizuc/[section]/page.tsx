import type { Metadata } from "next";
import { notFound } from "next/navigation";
// import { CasaNizucSectionView } from "@/components/casaNizuc";
import { CASA_NIZUC_SECTION_SLUGS, isCasaNizucSectionSlug } from "@/components/casaNizuc/CasaNizucSectionView";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { ComingSoonView } from "@/components/comingSoon";
import { AllImages } from "../../../../../public/images/AllImages";
import { getComingSoonPage } from "@/data/pages/coming-soon.data";

interface PageProps {
  params: Promise<{ section: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return CASA_NIZUC_SECTION_SLUGS.map((section) => ({ section }));
}

const TITLES = { about: "About", shabbat: "Shabbat", dining: "Dining", gkde: "GKDE", ofek: "Ofek", calendar: "Calendar of Events" } as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { section } = await params;
  if (!isCasaNizucSectionSlug(section)) return { title: "Page Not Found" };

  const { about, shabbat, dining, gkde, seasons } = CASA_NIZUC_PAGE;
  const description = { about: about.lead, shabbat: shabbat.lead, dining: dining.lead, gkde: gkde.lead, ofek: gkde.ofek.lead, calendar: seasons.lead }[section];

  return { title: `${TITLES[section]} | Casa Nizuc`, description };
}

const page = getComingSoonPage("casa-nizuc");

/** Shabbat, Dining, GKDE and Ofek of the year-round Casa Nizuc, each on its own page (client 2026-10-27). */
export default async function CasaNizucSectionPage({ params }: PageProps) {
  const { section } = await params;
  if (!isCasaNizucSectionSlug(section)) notFound();

  // return <CasaNizucSectionView slug={section} />;
  return (
    <ComingSoonView
      data={page}
      heroImage={AllImages.series.casa[0]}
      artImage={AllImages.homeCasaNizuc}
    />
  );
}
