import type { Metadata } from "next";
import { InfoPageView, buildInfoPageMetadata } from "@/components/infoPage";
import { getInfoPage } from "@/data/pages/info-pages.data";

const page = getInfoPage("about");

export const metadata: Metadata = buildInfoPageMetadata(page, "/about");

export default function AboutPage() {
  return <InfoPageView data={page} />;
}
