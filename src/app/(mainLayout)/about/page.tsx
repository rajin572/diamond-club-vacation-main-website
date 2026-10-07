import type { Metadata } from "next";
import { ComingSoonView, buildComingSoonMetadata } from "@/components/comingSoon";
import { getComingSoonPage } from "@/data/pages/coming-soon.data";

const page = getComingSoonPage("about");

export const metadata: Metadata = buildComingSoonMetadata(page);

export default function AboutPage() {
  return <ComingSoonView data={page} />;
}
