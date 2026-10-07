import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResortDetailView } from "@/components/resorts";
import { getResort, getResortDetailItem, getResortDetailItems, getResortRouteParams } from "@/data/resorts/registry";

interface PageProps {
  params: Promise<{ offeringId: string; programId: string; resortId: string; poolId: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return getResortRouteParams().flatMap(({ resort, params }) =>
    getResortDetailItems(resort, "pool").map((pool) => ({ ...params, poolId: pool.id }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { resortId, poolId } = await params;
  const resort = getResort(resortId);
  const pool = resort && getResortDetailItem(resort, "pool", poolId);

  if (!resort || !pool) {
    return { title: "Pool Not Found" };
  }

  return {
    title: `${pool.title} | ${resort.resortName}`,
    description: pool.description,
  };
}

export default async function PoolPage({ params }: PageProps) {
  const { offeringId, programId, resortId, poolId } = await params;
  const resort = getResort(resortId);
  const pool = resort && getResortDetailItem(resort, "pool", poolId);

  if (!resort || resort.programId !== programId || !pool) {
    notFound();
  }

  return <ResortDetailView offeringId={offeringId} programId={programId} data={resort} item={pool} kind="pool" />;
}
