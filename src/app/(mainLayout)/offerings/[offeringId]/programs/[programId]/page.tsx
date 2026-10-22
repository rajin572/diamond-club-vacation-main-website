import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { ProgramMainView } from "@/components/programs";
import { getProgram, programsRegistry } from "@/data/programs/registry";
import { programHref, resortHref } from "@/lib/routes";

interface PageProps {
  params: Promise<{ offeringId: string; programId: string }>;
}

export async function generateStaticParams() {
  return Object.values(programsRegistry).map((program) => ({
    offeringId: program.offeringId,
    programId: program.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { offeringId, programId } = await params;
  const program = getProgram(programId);

  if (!program || program.offeringId !== offeringId) {
    return { title: "Program Not Found" };
  }

  const pageTitle = `${program.title} | Passover 2027`;
  const pageUrl = programHref(offeringId, programId);
  const description = program.about.about[0] ?? program.tagline;

  return {
    title: pageTitle,
    description,
    keywords: program.keywords,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${pageTitle} | ${siteConfig.name}`,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [{ url: program.heroImage.src, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | ${siteConfig.name}`,
      description,
    },
  };
}

export default async function ProgramPage({ params }: PageProps) {
  const { offeringId, programId } = await params;
  const program = getProgram(programId);

  if (!program || program.offeringId !== offeringId) {
    notFound();
  }

  // A program with a single hotel (Diamond Blue: Casa Nizuc) has no hotel list to show: it opens the hotel's page directly (client 2026-10-22).
  const [onlyHotel] = program.hotels.cards;
  if (program.hotels.cards.length === 1 && onlyHotel.target?.type === "resort") {
    redirect(resortHref(offeringId, programId, onlyHotel.target.resortId));
  }

  return <ProgramMainView offeringId={offeringId} data={program} />;
}
