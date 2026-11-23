import type { Metadata } from "next";
import { CasaNizucRoomsPage } from "@/components/casaNizuc/CasaNizucRoomsPage";
import { CASA_NIZUC_ROOMS_HREF } from "@/components/casaNizuc/casaNizucNav";
import { CASA_NIZUC_DATA } from "@/data/resorts/casa-nizuc.data";

export const metadata: Metadata = {
  title: "Rooms & Suites | Casa Nizuc",
  description: CASA_NIZUC_DATA.rooms.description,
  alternates: { canonical: CASA_NIZUC_ROOMS_HREF },
};

/** Rooms & Suites of the year-round Casa Nizuc (client 2026-11-23). */
export default function CasaNizucRooms() {
  return <CasaNizucRoomsPage />;
}
