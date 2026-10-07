import type { Metadata } from "next";
import { InfoPageView, buildInfoPageMetadata } from "@/components/infoPage";
import { getInfoPage } from "@/data/pages/info-pages.data";

const page = getInfoPage("experiences");

export const metadata: Metadata = buildInfoPageMetadata(page, "/experiences");

export default function ExperiencesPage() {
  return <InfoPageView data={page} />;
}
