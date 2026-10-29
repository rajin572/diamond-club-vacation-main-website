// import type { Metadata } from "next";
// import { siteConfig } from "@/lib/site-config";
// import { CasaNizucView } from "@/components/casaNizuc";
// import { CASA_NIZUC_HREF } from "@/lib/routes";
// import { AllImages } from "../../../../public/images/AllImages";

// const description =
//   "Casa Nizuc, Cancún: the kosher resort that has it all. Five kosher dining destinations, an on-site synagogue, Shabbat elevators, a full Shabbat service, GKDE, holiday programs and kosher weddings and celebrations.";

// export const metadata: Metadata = {
//   title: "Casa Nizuc | The Kosher Resort That Has It All",
//   description,
//   alternates: { canonical: CASA_NIZUC_HREF },
//   openGraph: {
//     title: `Casa Nizuc | The Kosher Resort That Has It All | ${siteConfig.name}`,
//     description,
//     url: CASA_NIZUC_HREF,
//     siteName: siteConfig.name,
//     locale: "en_US",
//     type: "website",
//     images: [{ url: AllImages.casa2.src, alt: "Casa Nizuc, Cancún" }],
//   },
// };

// /** The year-round Casa Nizuc, at /casa-nizuc (client 2026-10-22), separate from Diamond Blue's Casa Nizuc. */
// export default function CasaNizucPage() {
//   return <CasaNizucView />;
// }
import type { Metadata } from "next";
import { ComingSoonView, buildComingSoonMetadata } from "@/components/comingSoon";
import { getComingSoonPage } from "@/data/pages/coming-soon.data";
import { AllImages } from "../../../../public/images/AllImages";

const page = getComingSoonPage("casa-nizuc");

export const metadata: Metadata = buildComingSoonMetadata(page);

/** The year-round Casa Nizuc, at /casa-nizuc (client 2026-10-22). Displays Coming Soon with authentic Casa Nizuc imagery while preparations finish. */
export default function CasaNizucPage() {
  return (
    <ComingSoonView
      data={page}
      heroImage={AllImages.series.casa[0]}
      artImage={AllImages.homeCasaNizuc}
    />
  );
}
