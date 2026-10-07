import { Suspense } from "react";
import type { Metadata } from "next";
import { DetailHero } from "@/components/shared/design";
import InquireForm from "@/components/inquire/InquireForm";
import { AllImages } from "../../../../public/images/AllImages";

export const metadata: Metadata = {
  title: "Inquire",
  description: "Tell us about your trip and your group — Passover 2027, Casa Nizuc, weddings and private events with Diamond Club Vacations.",
};

export default function InquirePage() {
  return (
    <>
      <DetailHero
        image={AllImages.inquirySource01}
        kicker="Diamond Club Vacations"
        title="Inquire"
        subtitle="Tell us about your trip and your group."
      />
      {/* useSearchParams (destination preselect) must sit under a Suspense boundary. */}
      <Suspense fallback={<div className="dcv-inquiry-shell dcv-notice">Loading inquiry form…</div>}>
        <InquireForm />
      </Suspense>
    </>
  );
}
