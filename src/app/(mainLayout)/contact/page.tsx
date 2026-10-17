import type { Metadata } from "next";
import { DetailHero } from "@/components/shared/design";
import { ContactForm } from "@/components/contact";
import { AllImages } from "../../../../public/images/AllImages";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Diamond Club Vacations for luxury kosher hospitality, Passover programs, weddings, and private destination events.",
};

export default function ContactPage() {
  return (
    <>
      <DetailHero
        image={AllImages.inquirySource01}
        kicker="DIAMOND CLUB VACATIONS"
        title="Contact Us"
        subtitle="We look forward to curating your extraordinary kosher luxury vacation."
      />
      <ContactForm />
    </>
  );
}

