import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import HomeHero from "@/components/homepage/HomeHero";
import HomeServicesChain from "@/components/homepage/HomeServicesChain";
import HomeWelcomeWave from "@/components/homepage/HomeWelcomeWave";
import { HOME_PAGE_DATA } from "@/components/homepage/homepage.data";

const pageUrl = "/";
const pageTitle = `${siteConfig.title} - Luxury Kosher Hospitality Worldwide`;
const pageDescription = siteConfig.description;

export const metadata: Metadata = {
  description: pageDescription,
  keywords: [
    "diamond club vacations",
    "luxury kosher hospitality",
    "passover collection 2027",
    "kosher luxury resort",
    "casa nizuc",
    "pesach vacation",
  ],
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
    images: [{ url: siteConfig.ogImage, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [siteConfig.ogImage],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    ...siteConfig.contact.address,
  },
  makesOffer: HOME_PAGE_DATA.services.map((service) => ({
    "@type": "Offer",
    name: service.title,
    description: service.description,
    url: `${siteConfig.siteUrl}${service.href}`,
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomeHero data={HOME_PAGE_DATA.hero} />
      <HomeServicesChain services={HOME_PAGE_DATA.services} />
      <HomeWelcomeWave data={HOME_PAGE_DATA.welcome} />
    </>
  );
}
