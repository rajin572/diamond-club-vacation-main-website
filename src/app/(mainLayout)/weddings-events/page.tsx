import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { WeddingsEventsView } from "@/components/weddings";
import { WEDDINGS_HREF } from "@/lib/routes";
import { AllImages } from "../../../../public/images/AllImages";

const metaTitle = `Weddings & Destination Events | Casa Nizuc | ${siteConfig.name}`;
const metaDesc =
  "Extraordinary kosher celebrations designed and produced by our expert team. Certified Glatt Kosher (Beit Yosef) & Chalav Yisroel destination weddings, venues, and luxury suites at Casa Nizuc, Cancún.";

export const metadata: Metadata = {
  title: "Weddings & Destination Events | Casa Nizuc",
  description: metaDesc,
  alternates: { canonical: WEDDINGS_HREF },
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: WEDDINGS_HREF,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [{ url: AllImages.casaNizucGallery40.src, alt: "Weddings & Destination Events at Casa Nizuc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDesc,
  },
};

/** Weddings & Destination Events at Casa Nizuc, at /weddings-events (client 2026-10-22: not under /offerings). */
export default function WeddingsEventsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "Weddings & Destination Events at Casa Nizuc",
    description:
      "Extraordinary kosher destination weddings and milestone celebrations designed and produced by our expert team at Casa Nizuc, Cancún.",
    url: `${siteConfig.siteUrl}${WEDDINGS_HREF}`,
    image: AllImages.casaNizucGallery40.src,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blvd. Kukulcán km 23.2, Zona Hotelera",
      addressLocality: "Cancún",
      addressRegion: "Quintana Roo",
      postalCode: "77500",
      addressCountry: "MX",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Glatt Kosher Beit Yosef Dining" },
      { "@type": "LocationFeatureSpecification", name: "On-Site Synagogue" },
      { "@type": "LocationFeatureSpecification", name: "Rooftop Weddings Ceremony Sanctuary" },
      { "@type": "LocationFeatureSpecification", name: "Grand Ballroom (4,951 sq ft)" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <WeddingsEventsView />
    </>
  );
}
