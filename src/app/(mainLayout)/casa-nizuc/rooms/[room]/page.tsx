import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASA_NIZUC_ROOM_IDS, CasaNizucRoomPage, getCasaNizucRoom } from "@/components/casaNizuc/CasaNizucRoomsPage";
import { casaNizucRoomHref } from "@/components/casaNizuc/casaNizucNav";

interface PageProps {
  params: Promise<{ room: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return CASA_NIZUC_ROOM_IDS.map((room) => ({ room }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { room: roomId } = await params;
  const room = getCasaNizucRoom(roomId);
  if (!room) return { title: "Room Not Found" };
  return { title: `${room.title} | Casa Nizuc`, description: room.description, alternates: { canonical: casaNizucRoomHref(room.id) } };
}

/** One room or suite of the year-round Casa Nizuc, opened from /casa-nizuc/rooms. */
export default async function CasaNizucRoom({ params }: PageProps) {
  const { room: roomId } = await params;
  const room = getCasaNizucRoom(roomId);
  if (!room) notFound();
  return <CasaNizucRoomPage room={room} />;
}
