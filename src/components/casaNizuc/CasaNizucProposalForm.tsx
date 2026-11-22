"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

interface Values {
  eventType: string;
  date: string;
  guests: string;
  fullName: string;
  email: string;
  phone: string;
  details: string;
}

/**
 * "Request a Proposal" of the Casa Nizuc Events page (client's events.html, 2026-11-22): event type, preferred date, estimated guests,
 * contact details and details. It is emailed to the team (`/api/event-proposal`), with a copy to the guest.
 */
export function CasaNizucProposalForm({ eventTypes }: { eventTypes: string[] }) {
  const empty: Values = { eventType: eventTypes[0] ?? "", date: "", guests: "", fullName: "", email: "", phone: "", details: "" };
  const [values, setValues] = useState<Values>(empty);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<Values | null>(null);
  const [error, setError] = useState("");

  const today = new Date().toISOString().slice(0, 10);

  const onField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (sending) return;
    setError("");

    if (!values.fullName.trim()) return setError("Please provide your name.");
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return setError("Please provide a valid email address.");

    setSending(true);
    try {
      const response = await fetch("/api/event-proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "We could not send your request. Please try again.");
      }
      setSent(values);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We could not send your request. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="dcv-lp-box" style={{ textAlign: "center", padding: "44px 28px" }}>
        <CheckCircle2 size={44} color="#b88124" aria-hidden="true" />
        <h3 style={{ margin: "16px 0 10px", fontSize: 14 }}>Request received</h3>
        <p>
          Thank you{sent.fullName.trim() ? `, ${sent.fullName.trim().split(/\s+/)[0]}` : ""}. We received your proposal request for a{" "}
          {sent.eventType.toLowerCase()}. Our events team will be in touch at {sent.email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="dcv-lp-box dcv-lp-form">
      <div className="dcv-formgrid">
        <label className="dcv-field-label dcv-wide">
          Event type
          <select name="eventType" value={values.eventType} onChange={onField}>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="dcv-field-label">
          Preferred date
          <input name="date" type="date" min={today} value={values.date} onChange={onField} />
        </label>
        <label className="dcv-field-label">
          Estimated guests
          <input name="guests" type="number" min={1} inputMode="numeric" value={values.guests} onChange={onField} />
        </label>
        <label className="dcv-field-label dcv-wide">
          Your name *
          <input name="fullName" autoComplete="name" value={values.fullName} onChange={onField} />
        </label>
        <label className="dcv-field-label">
          Email *
          <input name="email" type="email" autoComplete="email" value={values.email} onChange={onField} />
        </label>
        <label className="dcv-field-label">
          Phone
          <input name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={onField} />
        </label>
        <label className="dcv-field-label dcv-wide">
          Details
          <textarea name="details" rows={4} value={values.details} onChange={onField} />
        </label>
      </div>
      {error && (
        <p role="alert" style={{ color: "#b3261e", margin: "14px 0 0", fontSize: 14 }}>
          {error}
        </p>
      )}
      <button type="submit" className="dcv-btn" disabled={sending} style={{ marginTop: 22 }}>
        {sending ? "Sending..." : "Request a proposal"}
      </button>
    </form>
  );
}
