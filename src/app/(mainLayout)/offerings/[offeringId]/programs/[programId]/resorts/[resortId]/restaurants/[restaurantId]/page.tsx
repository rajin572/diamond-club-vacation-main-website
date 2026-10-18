import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResortDetailView } from "@/components/resorts";
import { hasDetailPage } from "@/components/resorts/resort-items";
import { getResort, getResortDetailItem, getResortDetailItems, getResortRouteParams } from "@/data/resorts/registry";

interface PageProps {
  params: Promise<{ offeringId: string; programId: string; resortId: string; restaurantId: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return getResortRouteParams().flatMap(({ resort, params }) =>
    getResortDetailItems(resort, "restaurant").filter(hasDetailPage).map((venue) => ({ ...params, restaurantId: venue.id }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { resortId, restaurantId } = await params;
  const resort = getResort(resortId);
  const venue = resort && getResortDetailItem(resort, "restaurant", restaurantId);

  if (!resort || !venue) {
    return { title: "Restaurant Not Found" };
  }

  return {
    title: `${venue.title} | ${resort.resortName}`,
    description: venue.description,
  };
}

export default async function RestaurantPage({ params }: PageProps) {
  const { offeringId, programId, resortId, restaurantId } = await params;
  const resort = getResort(resortId);
  const venue = resort && getResortDetailItem(resort, "restaurant", restaurantId);

  if (!resort || resort.programId !== programId || !venue || !hasDetailPage(venue)) {
    notFound();
  }

  return <ResortDetailView offeringId={offeringId} programId={programId} data={resort} item={venue} kind="restaurant" />;
}
