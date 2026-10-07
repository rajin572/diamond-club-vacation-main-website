import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResortDetailView } from "@/components/resorts";
import { getResort, getResortDetailItems, getResortRouteParams } from "@/data/resorts/registry";

interface PageProps {
  params: Promise<{ offeringId: string; programId: string; resortId: string }>;
}

export async function generateStaticParams() {
  return getResortRouteParams()
    .filter(({ resort }) => getResortDetailItems(resort, "spa").length > 0)
    .map(({ params }) => params);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { resortId } = await params;
  const resort = getResort(resortId);
  const spa = resort?.spa?.item;

  if (!resort || !spa) {
    return { title: "Spa Not Found" };
  }

  return {
    title: `${spa.title} | ${resort.resortName}`,
    description: spa.description,
  };
}

export default async function SpaPage({ params }: PageProps) {
  const { offeringId, programId, resortId } = await params;
  const resort = getResort(resortId);
  const spa = resort?.spa?.item;

  if (!resort || resort.programId !== programId || !spa) {
    notFound();
  }

  return <ResortDetailView offeringId={offeringId} programId={programId} data={resort} item={spa} kind="spa" />;
}
