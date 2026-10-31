import { Suspense } from "react";
import type { Metadata } from "next";
import { DetailHero } from "@/components/shared/design";
import InquireForm from "@/components/inquire/InquireForm";
import { resolveDetailedExperience } from "@/components/inquire/inquire.data";
import { AllImages } from "../../../../public/images/AllImages";

export const metadata: Metadata = {
  title: "Inquire",
  description: "Tell us about your trip and your group — Passover 2027, Casa Nizuc, weddings and private events with Diamond Club Vacations.",
};

interface InquirePageProps {
  searchParams: Promise<{ destination?: string; program?: string; resort?: string }>;
}

const GUETTAWAY_KICKER = "Guettaway, a Diamond Club Production";

export default async function InquirePage({ searchParams }: InquirePageProps) {
  const { destination, program, resort } = await searchParams;
  // An inquiry about the Guettaway program is a Guettaway inquiry (client 2026-10-31); on guettaways.com every inquiry is.
  const isGuettaway = /guettaway/i.test(resolveDetailedExperience(destination ?? program ?? null, resort ?? null).label);

  return (
    <>
      <DetailHero
        image={AllImages.inquirySource01}
        kicker={
          isGuettaway ? (
            GUETTAWAY_KICKER
          ) : (
            <>
              <span data-hide-on="guettaway">Diamond Club Vacations</span>
              <span className="dcv-only-guettaway">{GUETTAWAY_KICKER}</span>
            </>
          )
        }
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
