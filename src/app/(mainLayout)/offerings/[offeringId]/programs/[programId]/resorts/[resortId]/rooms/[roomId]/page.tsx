import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResortDetailView } from "@/components/resorts";
import { getResort, getResortDetailItem, getResortDetailItems, getResortRouteParams } from "@/data/resorts/registry";

interface PageProps {
  params: Promise<{ offeringId: string; programId: string; resortId: string; roomId: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return getResortRouteParams().flatMap(({ resort, params }) =>
    getResortDetailItems(resort, "room").map((room) => ({ ...params, roomId: room.id }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { resortId, roomId } = await params;
  const resort = getResort(resortId);
  const room = resort && getResortDetailItem(resort, "room", roomId);

  if (!resort || !room) {
    return { title: "Room Not Found" };
  }

  return {
    title: `${room.title} | ${resort.resortName}`,
    description: room.description,
  };
}

export default async function RoomPage({ params }: PageProps) {
  const { offeringId, programId, resortId, roomId } = await params;
  const resort = getResort(resortId);
  const room = resort && getResortDetailItem(resort, "room", roomId);

  if (!resort || resort.programId !== programId || !room) {
    notFound();
  }

  return <ResortDetailView offeringId={offeringId} programId={programId} data={resort} item={room} kind="room" />;
}
