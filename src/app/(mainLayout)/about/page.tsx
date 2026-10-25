import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { AboutView } from "@/components/about";
import { ABOUT_PAGE_DATA } from "@/data/pages/about.data";

const pageUrl = "/about";
const pageTitle = `About Us | ${siteConfig.name}`;
const pageDescription =
  "Now in our 14th year, Diamond Club Vacations creates world-class kosher travel experiences at the finest resorts. Luxury, without compromise.";

export const metadata: Metadata = {
  title: "About Diamond Club Vacations",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [{ url: ABOUT_PAGE_DATA.hero.image.src, alt: "About Diamond Club Vacations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ABOUT_PAGE_DATA.hero.image.src],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
