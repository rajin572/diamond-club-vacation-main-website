import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasaNizucSectionView } from "@/components/casaNizuc";
import { CASA_NIZUC_SECTION_SLUGS, isCasaNizucSectionSlug } from "@/components/casaNizuc/CasaNizucSectionView";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";

interface PageProps {
  params: Promise<{ section: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return CASA_NIZUC_SECTION_SLUGS.map((section) => ({ section }));
}

const TITLES = { shabbat: "Shabbat", dining: "Dining", gkde: "GKDE", ofek: "Ofek" } as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { section } = await params;
  if (!isCasaNizucSectionSlug(section)) return { title: "Page Not Found" };

  const { shabbat, dining, gkde } = CASA_NIZUC_PAGE;
  const description = { shabbat: shabbat.lead, dining: dining.lead, gkde: gkde.lead, ofek: gkde.ofek.lead }[section];

  return { title: `${TITLES[section]} | Casa Nizuc`, description };
}

/** Shabbat, Dining, GKDE and Ofek of the year-round Casa Nizuc, each on its own page (client 2026-10-27). */
export default async function CasaNizucSectionPage({ params }: PageProps) {
  const { section } = await params;
  if (!isCasaNizucSectionSlug(section)) notFound();

  return <CasaNizucSectionView slug={section} />;
}
