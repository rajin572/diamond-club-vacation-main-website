import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { ResortDiningPageView } from "@/components/resorts";
import { getResort, getResortRouteParams } from "@/data/resorts/registry";
import { diningHref } from "@/lib/routes";

interface PageProps {
  params: Promise<{ offeringId: string; programId: string; resortId: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return getResortRouteParams()
    .filter(({ resort }) => !!resort.dining)
    .map(({ params }) => params);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { offeringId, programId, resortId } = await params;
  const resort = getResort(resortId);

  if (!resort || !resort.dining) {
    return { title: "Dining Not Found" };
  }

  const canonicalUrl = diningHref(offeringId, programId, resortId);
  const title = `${resort.resortName} Dining | Glatt Kosher Passover 2027`;
  const description =
    resort.dining.description ||
    `Explore Glatt Kosher dining, master celebrity chefs, and oceanfront restaurant venues at ${resort.resortName}.`;

  const ogImages = resort.dining.images[0]
    ? [{ url: resort.dining.images[0].src, alt: `${resort.resortName} Dining` }]
    : [];

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: ogImages,
    },
  };
}

export default async function DiningPage({ params }: PageProps) {
  const { offeringId, programId, resortId } = await params;
  const resort = getResort(resortId);

  if (!resort || resort.programId !== programId || !resort.dining) {
    notFound();
  }

  return (
    <ResortDiningPageView
      offeringId={offeringId}
      programId={programId}
      data={resort}
    />
  );
}

