import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { TermsView } from "@/components/terms";
import { getTerms, termsRegistry } from "@/data/terms/registry";
import { termsHref } from "@/lib/routes";

interface PageProps {
  params: Promise<{ programId: string }>;
}

export async function generateStaticParams() {
  return Object.keys(termsRegistry).map((programId) => ({ programId }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { programId } = await params;
  const terms = getTerms(programId);

  if (!terms) return { title: "Terms Not Found" };

  const pageTitle = `Terms and Conditions | ${terms.programName}`;
  const description = `Terms and conditions for ${terms.programName} (${terms.hotels}), Passover 2027, by ${siteConfig.name}.`;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: termsHref(programId) },
  };
}

export default async function TermsProgramPage({ params }: PageProps) {
  const { programId } = await params;
  const terms = getTerms(programId);

  if (!terms) notFound();

  return <TermsView data={terms} />;
}
