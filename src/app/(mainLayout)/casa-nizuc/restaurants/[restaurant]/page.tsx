import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasaNizucRestaurantPage } from "@/components/casaNizuc/CasaNizucRestaurantPage";
import { DINING_VENUES, getDiningVenue } from "@/components/casaNizuc/casaNizucDining";

interface PageProps {
  params: Promise<{ restaurant: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return DINING_VENUES.map((venue) => ({ restaurant: venue.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { restaurant } = await params;
  const venue = getDiningVenue(restaurant);
  if (!venue) return { title: "Page Not Found" };
  return { title: `${venue.title} | Dining at Casa Nizuc`, description: venue.text };
}

/** One restaurant of the year-round Casa Nizuc, opened from the Dining page. */
export default async function CasaNizucRestaurant({ params }: PageProps) {
  const { restaurant } = await params;
  const venue = getDiningVenue(restaurant);
  if (!venue) notFound();
  return <CasaNizucRestaurantPage venue={venue} />;
}
