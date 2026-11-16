"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

interface Values {
  date: string;
  time: string;
  guests: string;
  fullName: string;
  email: string;
  phone: string;
  requests: string;
}

const EMPTY: Values = { date: "", time: "", guests: "2", fullName: "", email: "", phone: "", requests: "" };

const GUEST_OPTIONS = Array.from({ length: 12 }, (_, index) => String(index + 1));

/**
 * "Reserve a Table" request of one restaurant: date, time, number of guests, contact details and special requests.
 * It is sent to the Casa Nizuc team, who confirm by email; the restaurant's own reservation platform replaces it once the client connects one.
 */
export function CasaNizucReservationForm({ restaurant }: { restaurant: string }) {
  const [values, setValues] = useState<Values>(EMPTY);
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

    if (!values.date) return setError("Please choose a date.");
    if (!values.time) return setError("Please choose a time.");
    if (!values.fullName.trim()) return setError("Please provide your full name.");
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return setError("Please provide a valid email address.");
    if (!values.phone.trim()) return setError("Please provide your phone number.");

    setSending(true);
    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ restaurant, ...values }),
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
          Thank you{sent.fullName.trim() ? `, ${sent.fullName.trim().split(/\s+/)[0]}` : ""}. We received your request for {restaurant} on {sent.date} at {sent.time} for{" "}
          {sent.guests} {sent.guests === "1" ? "guest" : "guests"}. Our team will confirm your table by email at {sent.email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="dcv-lp-box dcv-lp-form">
      <div className="dcv-formgrid">
        <label className="dcv-field-label">
          Date *
          <input name="date" type="date" min={today} value={values.date} onChange={onField} />
        </label>
        <label className="dcv-field-label">
          Time *
          <input name="time" type="time" value={values.time} onChange={onField} />
        </label>
        <label className="dcv-field-label dcv-wide">
          Number of guests *
          <select name="guests" value={values.guests} onChange={onField}>
            {GUEST_OPTIONS.map((count) => (
              <option key={count} value={count}>
                {count} {count === "1" ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </label>
        <label className="dcv-field-label dcv-wide">
          Full name *
          <input name="fullName" autoComplete="name" value={values.fullName} onChange={onField} />
        </label>
        <label className="dcv-field-label">
          Email *
          <input name="email" type="email" autoComplete="email" value={values.email} onChange={onField} />
        </label>
        <label className="dcv-field-label">
          Phone *
          <input name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={onField} />
        </label>
        <label className="dcv-field-label dcv-wide">
          Special requests
          <textarea name="requests" rows={3} value={values.requests} onChange={onField} />
        </label>
      </div>
      {error && (
        <p role="alert" style={{ color: "#b3261e", margin: "14px 0 0", fontSize: 14 }}>
          {error}
        </p>
      )}
      <button type="submit" className="dcv-btn" disabled={sending} style={{ marginTop: 22 }}>
        {sending ? "Sending..." : "Request a table"}
      </button>
    </form>
  );
}
