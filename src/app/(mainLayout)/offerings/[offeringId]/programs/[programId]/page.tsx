import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { ProgramOverviewView } from "@/components/programs";
import { getProgram, programsRegistry } from "@/data/programs/registry";
import { programHref } from "@/lib/routes";

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
  const description = program.overview.about[0] ?? program.tagline;

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
      images: [{ url: program.overview.heroImage.src, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | ${siteConfig.name}`,
      description,
    },
  };
}

export default async function ProgramOverviewPage({ params }: PageProps) {
  const { offeringId, programId } = await params;
  const program = getProgram(programId);

  if (!program || program.offeringId !== offeringId) {
    notFound();
  }

  return <ProgramOverviewView offeringId={offeringId} data={program} />;
}
