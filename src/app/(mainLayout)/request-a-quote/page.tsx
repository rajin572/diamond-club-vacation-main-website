import { Suspense } from "react";
import type { Metadata } from "next";
import { DetailHero } from "@/components/shared/design";
import InquireForm from "@/components/inquire/InquireForm";
import { AllImages } from "../../../../public/images/AllImages";

export const metadata: Metadata = {
  title: "Request a Quote | Casa Nizuc",
  description:
    "Request a personalized quote for your stay, kosher dining, Shabbat experience, or special celebration at Casa Nizuc, Cancún.",
};

export default function RequestAQuotePage() {
  return (
    <>
      <DetailHero
        image={AllImages.series.casa[0] ?? AllImages.inquirySource01}
        kicker="CASA NIZUC · CANCÚN"
        title="Request a Quote"
        subtitle="Tell us about your upcoming stay, event, or celebration at Casa Nizuc."
      />
      <Suspense fallback={<div className="dcv-inquiry-shell dcv-notice">Loading quote request form…</div>}>
        <InquireForm defaultDestination="casa-nizuc" isQuote />
      </Suspense>
    </>
  );
}

