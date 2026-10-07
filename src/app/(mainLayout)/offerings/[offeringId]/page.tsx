import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { OfferingMainView } from "@/components/offerings";
import { InfoPageView, buildInfoPageMetadata } from "@/components/infoPage";
import { getOffering, offeringsRegistry } from "@/data/offerings/registry";
import { getProgramSummaries } from "@/data/programs/registry";
import { getInfoPageForOffering, infoPageOfferingIds } from "@/data/pages/info-pages.data";
import { offeringHref } from "@/lib/routes";

interface PageProps {
  params: Promise<{ offeringId: string }>;
}

export async function generateStaticParams() {
  return [...Object.keys(offeringsRegistry), ...infoPageOfferingIds].map((offeringId) => ({ offeringId }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { offeringId } = await params;
  const offering = getOffering(offeringId);
  const infoPage = getInfoPageForOffering(offeringId);

  if (infoPage) return buildInfoPageMetadata(infoPage, offeringHref(offeringId));
  if (!offering) return { title: "Offering Not Found" };

  const pageUrl = offeringHref(offeringId);

  return {
    title: offering.title,
    description: offering.hero.subtext,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${offering.title} | ${siteConfig.name}`,
      description: offering.hero.subtext,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [{ url: offering.hero.image.src, alt: offering.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${offering.title} | ${siteConfig.name}`,
      description: offering.hero.subtext,
    },
  };
}

export default async function OfferingPage({ params }: PageProps) {
  const { offeringId } = await params;

  const infoPage = getInfoPageForOffering(offeringId);
  if (infoPage) return <InfoPageView data={infoPage} />;

  const offering = getOffering(offeringId);
  if (!offering) notFound();

  const programs = getProgramSummaries(offering);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: offering.title,
    description: offering.hero.subtext,
    touristType: ["Family", "Luxury Traveler", "Kosher Travel"],
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    offers: programs.map((program) => ({
      "@type": "Offer",
      name: program.title,
      description: `${program.subtitle} — ${program.location}`,
      url: program.external ? program.href : `${siteConfig.siteUrl}${program.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <OfferingMainView data={offering} programs={programs} />
    </>
  );
}
