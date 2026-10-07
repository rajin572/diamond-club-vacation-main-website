import type { Metadata } from "next";
import type { ComingSoonPageData } from "./comingSoon.types";

/** Coming-soon pages stay out of search results until they have real content. */
export function buildComingSoonMetadata(page: ComingSoonPageData): Metadata {
  return {
    title: `${page.title} - Coming Soon`,
    description: page.tagline,
    robots: { index: false, follow: false },
  };
}
