import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import type { InfoPageData } from "./infoPage.types";

/** Metadata shared by every info page route. `path` is the page's canonical URL. */
export function buildInfoPageMetadata(page: InfoPageData, path: string): Metadata {
  return {
    title: page.metaTitle,
    description: page.hero.subtitle,
    alternates: { canonical: path },
    openGraph: {
      title: `${page.metaTitle} | ${siteConfig.name}`,
      description: page.hero.subtitle,
      url: path,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [{ url: page.hero.image.src, alt: page.metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle} | ${siteConfig.name}`,
      description: page.hero.subtitle,
    },
  };
}
