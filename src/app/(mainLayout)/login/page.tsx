import type { Metadata } from "next";
import { InfoPageView, buildInfoPageMetadata } from "@/components/infoPage";
import { getInfoPage } from "@/data/pages/info-pages.data";

const page = getInfoPage("login");

export const metadata: Metadata = buildInfoPageMetadata(page, "/login");

export default function GuestLoginPage() {
  return <InfoPageView data={page} />;
}
