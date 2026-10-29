import { ComingSoonView } from "@/components/comingSoon";
// import { redirect } from "next/navigation";
import { AllImages } from "../../../../../public/images/AllImages";
import { getComingSoonPage } from "@/data/pages/coming-soon.data";

const page = getComingSoonPage("casa-nizuc");

export default function CasaNizucQuotePage() {
  return (
    <ComingSoonView
      data={page}
      heroImage={AllImages.series.casa[0]}
      artImage={AllImages.homeCasaNizuc}
    />
  );
}


// export default function CasaNizucQuotePage() {
//   redirect("/request-a-quote");
// }

