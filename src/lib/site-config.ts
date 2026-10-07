/**
 * Single source of truth for site-wide facts used by metadata, JSON-LD structured
 * data, and the sitemap/robots files.
 *
 * Contact details and `siteUrl` below are PLACEHOLDERS — no real production
 * domain or business address has been confirmed yet. Override `siteUrl` by
 * setting NEXT_PUBLIC_SITE_URL once the real production domain is known, and
 * replace `contact` with the real business details before launch.
 */
export const siteConfig = {
  name: "Diamond Club Vacations",
  title: "Diamond Club Vacations | Luxury Kosher Hospitality Worldwide",
  description:
    "Luxury kosher hospitality built around exceptional destinations: the Passover Collection 2027, year-round Casa Nizuc, destination weddings and private events.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.diamondclubvacation.com",
  ogImage: "/images/mainDesign/home-hero-image.png",
  contact: {
    phone: "+1 (555) 010-0142",
    email: "support@diamondclubvacation.com",
    address: {
      streetAddress: "100 Ocean Vista Drive, Suite 200",
      addressLocality: "Miami",
      postalCode: "33131",
      addressCountry: "US",
    },
  },
} as const;
