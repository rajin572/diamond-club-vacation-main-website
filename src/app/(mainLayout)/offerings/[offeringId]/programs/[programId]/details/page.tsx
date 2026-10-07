import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { ProgramMainView } from "@/components/programs";
import { getProgram, programsRegistry } from "@/data/programs/registry";
import { programDetailsHref } from "@/lib/routes";

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

  const pageTitle = `${program.title} Details | Passover 2027`;
  const pageUrl = programDetailsHref(offeringId, programId);

  return {
    title: pageTitle,
    description: program.tagline,
    keywords: program.keywords,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${pageTitle} | ${siteConfig.name}`,
      description: program.tagline,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [{ url: program.heroImage.src, alt: pageTitle }],
    },
  };
}

export default async function ProgramDetailsPage({ params }: PageProps) {
  const { offeringId, programId } = await params;
  const program = getProgram(programId);

  if (!program || program.offeringId !== offeringId) {
    notFound();
  }

  return <ProgramMainView offeringId={offeringId} data={program} />;
}
