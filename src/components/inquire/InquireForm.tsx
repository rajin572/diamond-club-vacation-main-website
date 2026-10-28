"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  COMMUNITY_OPTIONS,
  EXPERIENCE_OPTIONS,
  REFERRAL_OPTIONS,
  resolveDetailedExperience,
} from "./inquire.data";
import { ContactDetails } from "@/components/contact/ContactDetails";

type YesNo = "Yes" | "No" | "";

interface InquiryValues {
  experience: string;
  adults: string;
  children: string;
  rooms: string;
  childAges: string;
  connectingRooms: YesNo;
  additionalRoom: YesNo;
  earlyArrival: YesNo;
  previousGuest: YesNo;
  previousPrograms: string;
  callback: YesNo;
  referral: string;
  communityStyle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  region: string;
}

const STEP_COUNT = 5;
const REQUIRED_CONTACT_FIELDS: (keyof InquiryValues)[] = ["firstName", "lastName", "email", "phone", "country", "region"];

const REVIEW_LABELS: [keyof InquiryValues, string][] = [
  ["experience", "Experience"],
  ["adults", "Adults"],
  ["children", "Children"],
  ["rooms", "Rooms"],
  ["childAges", "Child ages"],
  ["connectingRooms", "Connecting rooms"],
  ["additionalRoom", "Additional room"],
  ["earlyArrival", "Early arrival"],
  ["previousGuest", "Previous guest"],
  ["previousPrograms", "Previous programs"],
  ["callback", "Callback"],
  ["referral", "Referral"],
  ["communityStyle", "Community style"],
  ["firstName", "First name"],
  ["lastName", "Last name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["country", "Country"],
  ["region", "State / Region"],
];

function YesNoField({
  legend,
  name,
  value,
  onChange,
  wide,
}: {
  legend: string;
  name: keyof InquiryValues;
  value: YesNo;
  onChange: (name: keyof InquiryValues, value: YesNo) => void;
  wide?: boolean;
}) {
  return (
    <fieldset className={wide ? "dcv-wide" : undefined} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
      <legend className="dcv-field-label">{legend}</legend>
      <div className="dcv-choice">
        {(["Yes", "No"] as const).map((option) => (
          <label key={option}>
            <input type="radio" name={name} value={option} checked={value === option} onChange={() => onChange(name, option)} />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export interface InquireFormProps {
  defaultDestination?: string;
  isQuote?: boolean;
}

/** Five-step inquiry form with locked resort pre-selection when coming from a specific hotel/program or quote request. */
export function InquireForm({ defaultDestination, isQuote }: InquireFormProps = {}) {
  const searchParams = useSearchParams();

  const detailedExp = useMemo(() => {
    return resolveDetailedExperience(
      searchParams.get("destination") ?? searchParams.get("program") ?? defaultDestination ?? null,
      searchParams.get("resort")
    );
  }, [searchParams, defaultDestination]);

  const isGuettaway = /guettaway/i.test(detailedExp.label);
  const isPassover = /reserve|diamond blue/i.test(detailedExp.label);

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState<InquiryValues>(() => ({
    experience: detailedExp.label,
    adults: "2",
    children: "0",
    rooms: "1",
    childAges: "",
    connectingRooms: "",
    additionalRoom: "",
    earlyArrival: "",
    previousGuest: "",
    previousPrograms: "",
    callback: "",
    referral: REFERRAL_OPTIONS[0],
    communityStyle: COMMUNITY_OPTIONS[0],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    region: "",
  }));

  const setValue = (name: keyof InquiryValues, value: string) => setValues((current) => ({ ...current, [name]: value }));
  const onField = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValue(event.target.name as keyof InquiryValues, event.target.value);

  const goTo = (target: number) => {
    setError("");
    setStep(Math.max(0, Math.min(target, STEP_COUNT - 1)));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const continueFromContact = () => {
    const missing = REQUIRED_CONTACT_FIELDS.some((field) => !values[field].trim());
    if (missing) return setError("Please complete every field marked with *.");
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return setError("Please enter a valid email address.");
    goTo(4);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <main className="dcv-inquiry-shell">
        <div className="dcv-review">
          <h2>Thank you{values.firstName ? `, ${values.firstName}` : ""}.</h2>
          <p>{isQuote ? "Your quote request has been received." : "Your inquiry has been prepared."}</p>
          <p style={{ marginTop: 24 }}>
            <Link className="dcv-btn" href={isQuote ? "/casa-nizuc" : "/"}>
              {isQuote ? "Back to Casa Nizuc" : "Back to home"}
            </Link>
          </p>
        </div>
      </main>
    );
  }

  const reviewRows = REVIEW_LABELS.filter(([key]) => values[key]);
  const hotelReviewRow = detailedExp.hotel ? { label: "Hotel", value: detailedExp.hotel } : null;

  return (
    <main className="dcv-inquiry-shell">
      <div className="dcv-steps" role="progressbar" aria-valuemin={1} aria-valuemax={STEP_COUNT} aria-valuenow={step + 1}>
        {Array.from({ length: STEP_COUNT }, (_, index) => (
          <span key={index} className={index <= step ? "dcv-on" : undefined} />
        ))}
      </div>

      {/* Only the Guettaway, Reserve and Blue Inquire pages show contact details, before the form (client 2026-10-22); every other Inquire page has none. */}
      {(isGuettaway || isPassover) && (
        <div style={{ marginBottom: 40 }}>
          <ContactDetails variant={isGuettaway ? "guettaway" : "passover"} />
        </div>
      )}

      <form onSubmit={onSubmit} noValidate>
        {step === 0 && (
          <section>
            <div className="dcv-kicker">STEP 1 · YOUR TRIP</div>
            <h2>Tell us about your group</h2>
            <div className="dcv-formgrid">
              <label className="dcv-field-label dcv-wide">
                Experience
                {detailedExp.isLocked ? (
                  <div className="dcv-locked-experience">
                    <span className="dcv-locked-text">{values.experience}</span>
                    <input type="hidden" name="experience" value={values.experience} />
                  </div>
                ) : (
                  <select name="experience" value={values.experience} onChange={onField}>
                    {EXPERIENCE_OPTIONS.map((option) => (
                      <option key={option.id}>{option.label}</option>
                    ))}
                  </select>
                )}
              </label>

              {detailedExp.hotel && (
                <label className="dcv-field-label dcv-wide">
                  Hotel
                  <div className="dcv-locked-experience">
                    <span className="dcv-locked-text">{detailedExp.hotel}</span>
                    <input type="hidden" name="hotel" value={detailedExp.hotel} />
                  </div>
                </label>
              )}

              <label className="dcv-field-label">
                Adults · Age 18+
                <input name="adults" type="number" min={1} value={values.adults} onChange={onField} />
              </label>
              <label className="dcv-field-label">
                Children · Age 0–17
                <input name="children" type="number" min={0} value={values.children} onChange={onField} />
              </label>
              <label className="dcv-field-label">
                Rooms
                <input name="rooms" type="number" min={1} value={values.rooms} onChange={onField} />
              </label>
              <label className="dcv-field-label">
                Child ages
                <input name="childAges" placeholder="e.g. 4, 8, 12" value={values.childAges} onChange={onField} />
              </label>
              <YesNoField
                wide
                legend="Connecting rooms?"
                name="connectingRooms"
                value={values.connectingRooms}
                onChange={setValue}
              />
            </div>
            <div className="dcv-actions">
              <span />
              <button type="button" className="dcv-btn" onClick={() => goTo(1)}>
                Continue →
              </button>
            </div>
          </section>
        )}

        {step === 1 && (
          <section>
            <div className="dcv-kicker">STEP 2 · ADD-ONS</div>
            <h2>Optional requests</h2>
            <p className="dcv-notice">Final availability will be confirmed by our team.</p>
            <div className="dcv-formgrid">
              <YesNoField legend="Need an additional room?" name="additionalRoom" value={values.additionalRoom} onChange={setValue} />
              <YesNoField legend="Interested in early arrival?" name="earlyArrival" value={values.earlyArrival} onChange={setValue} />
            </div>
            <div className="dcv-actions">
              <button type="button" className="dcv-btn" onClick={() => goTo(0)}>
                ← Back
              </button>
              <button type="button" className="dcv-btn" onClick={() => goTo(2)}>
                Continue →
              </button>
            </div>
          </section>
        )}

        {step === 2 && (
          <section>
            <div className="dcv-kicker">STEP 3 · ABOUT YOU</div>
            <h2>A few short questions so we can serve you better</h2>
            <div className="dcv-formgrid">
              <YesNoField legend="Joined one of our programs before?" name="previousGuest" value={values.previousGuest} onChange={setValue} />
              <label className="dcv-field-label">
                Which year(s) and program(s)?
                <textarea name="previousPrograms" value={values.previousPrograms} onChange={onField} />
              </label>
              <YesNoField legend="Would you like a callback?" name="callback" value={values.callback} onChange={setValue} />
              <label className="dcv-field-label">
                Where did you hear about us?
                <select name="referral" value={values.referral} onChange={onField}>
                  {REFERRAL_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="dcv-field-label dcv-wide">
                Community / family style
                <select name="communityStyle" value={values.communityStyle} onChange={onField}>
                  {COMMUNITY_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="dcv-actions">
              <button type="button" className="dcv-btn" onClick={() => goTo(1)}>
                ← Back
              </button>
              <button type="button" className="dcv-btn" onClick={() => goTo(3)}>
                Continue →
              </button>
            </div>
          </section>
        )}

        {step === 3 && (
          <section>
            <div className="dcv-kicker">STEP 4 · CONTACT DETAILS</div>
            <h2>How should we reach you?</h2>
            <div className="dcv-formgrid">
              <label className="dcv-field-label">
                First Name *
                <input name="firstName" autoComplete="given-name" value={values.firstName} onChange={onField} />
              </label>
              <label className="dcv-field-label">
                Last Name *
                <input name="lastName" autoComplete="family-name" value={values.lastName} onChange={onField} />
              </label>
              <label className="dcv-field-label">
                Email *
                <input name="email" type="email" autoComplete="email" value={values.email} onChange={onField} />
              </label>
              <label className="dcv-field-label">
                Phone Number *
                <input name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={onField} />
              </label>
              <label className="dcv-field-label">
                Country *
                <input name="country" autoComplete="country-name" value={values.country} onChange={onField} />
              </label>
              <label className="dcv-field-label">
                State / Region *
                <input name="region" autoComplete="address-level1" value={values.region} onChange={onField} />
              </label>
            </div>
            {error && (
              <p className="dcv-notice" role="alert" style={{ color: "#b3261e", marginTop: 16 }}>
                {error}
              </p>
            )}
            <div className="dcv-actions">
              <button type="button" className="dcv-btn" onClick={() => goTo(2)}>
                ← Back
              </button>
              <button type="button" className="dcv-btn" onClick={continueFromContact}>
                Review →
              </button>
            </div>
          </section>
        )}

        {step === 4 && (
          <section>
            <div className="dcv-kicker">STEP 5 · REVIEW</div>
            <h2>{isQuote ? "Review your quote request" : "Review your inquiry"}</h2>
            <div className="dcv-review">
              {reviewRows.map(([key, label]) => (
                <div key={key}>
                  <b>{label}:</b> {values[key]}
                  {key === "experience" && hotelReviewRow && (
                    <div>
                      <b>{hotelReviewRow.label}:</b> {hotelReviewRow.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="dcv-notice">
              {isQuote
                ? "By submitting, you consent to be contacted regarding your customized quote."
                : "By submitting, you consent to be contacted regarding your vacation inquiry."}
            </p>
            <div className="dcv-actions">
              <button type="button" className="dcv-btn" onClick={() => goTo(3)}>
                ← Back
              </button>
              <button type="submit" className="dcv-btn">
                {isQuote ? "Submit Quote Request →" : "Submit Inquiry →"}
              </button>
            </div>
          </section>
        )}
      </form>
    </main>
  );
}

export default InquireForm;
