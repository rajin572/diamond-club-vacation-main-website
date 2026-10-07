import type { Metadata } from "next";
import { ComingSoonView, buildComingSoonMetadata } from "@/components/comingSoon";
import { getComingSoonPage } from "@/data/pages/coming-soon.data";

const page = getComingSoonPage("experiences");

export const metadata: Metadata = buildComingSoonMetadata(page);

export default function ExperiencesPage() {
  return <ComingSoonView data={page} />;
}
