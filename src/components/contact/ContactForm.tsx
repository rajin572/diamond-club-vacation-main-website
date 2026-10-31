"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { Send, CheckCircle2 } from "lucide-react";
import { ContactDetails } from "./ContactDetails";

/** The contact form is always about the brand as a whole; the field is shown but cannot be changed. */
const CONTACT_EXPERIENCE = "Diamond Club Vacations";
/** Shown instead on guettaways.com (CSS, keyed on <html data-site>). */
const CONTACT_EXPERIENCE_GUETTAWAY = "Guettaway, a Diamond Club Production";

interface ContactValues {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState<ContactValues>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const onField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (sending) return;
    setError("");

    if (!values.fullName.trim()) {
      setError("Please provide your full name.");
      return;
    }
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email.trim())) {
      setError("Please provide a valid email address.");
      return;
    }
    if (!values.phone.trim()) {
      setError("Please provide your phone number.");
      return;
    }
    if (!values.message.trim()) {
      setError("Please write your message.");
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "We could not send your message. Please try again.");
      }
      setSubmitted(true);
      window.scrollTo({ top: 120, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "We could not send your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <main className="dcv-inquiry-shell">
        <div className="dcv-review" style={{ textAlign: "center", padding: "48px 24px" }}>
          <div style={{ display: "inline-flex", justifyContent: "center", marginBottom: 16 }}>
            <CheckCircle2 size={48} color="#9a7a38" />
          </div>
          <h2>Thank you{values.fullName.trim() ? `, ${values.fullName.trim().split(/\s+/)[0]}` : ""}.</h2>
          <p style={{ marginTop: 8, fontSize: 16, color: "#555" }}>
            Your message has been received. A member of our concierge team will reach out to you shortly.
          </p>
          <p style={{ marginTop: 28 }}>
            <Link className="dcv-btn" href="/">
              Back to Home
            </Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="dcv-inquiry-shell">
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div className="dcv-kicker" style={{ marginBottom: 8 }}>
          <span data-hide-on="guettaway">DIAMOND CLUB VACATIONS</span>
          <span className="dcv-only-guettaway">GUETTAWAY, A DIAMOND CLUB PRODUCTION</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", margin: "0 0 10px", fontFamily: "var(--dcv-serif)" }}>
          Contact Us
        </h1>
        <p style={{ color: "#666", maxWidth: 540, margin: "0 auto", fontSize: 15 }}>
          Have questions about our programs, destinations, or bespoke services? Send us a message and our team will get back to you promptly.
        </p>
      </div>

      <ContactDetails />

      <form onSubmit={onSubmit} noValidate style={{ maxWidth: 720, margin: "0 auto" }}>
        <div className="dcv-formgrid">
          <label className="dcv-field-label dcv-wide">
            Experience
            <div className="dcv-locked-experience">
              <span className="dcv-locked-text">
                <span data-hide-on="guettaway">{CONTACT_EXPERIENCE}</span>
                <span className="dcv-only-guettaway">{CONTACT_EXPERIENCE_GUETTAWAY}</span>
              </span>
              <input type="hidden" name="experience" value={CONTACT_EXPERIENCE} />
            </div>
          </label>

          <label className="dcv-field-label dcv-wide">
            Full Name *
            <input
              name="fullName"
              autoComplete="name"
              placeholder="e.g. David Cohen"
              value={values.fullName}
              onChange={onField}
            />
          </label>

          <label className="dcv-field-label">
            Email *
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="e.g. david@example.com"
              value={values.email}
              onChange={onField}
            />
          </label>

          <label className="dcv-field-label">
            Phone Number *
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="e.g. +1 (555) 000-0000"
              value={values.phone}
              onChange={onField}
            />
          </label>

          <label className="dcv-field-label dcv-wide">
            Subject (Optional)
            <input
              name="subject"
              placeholder="e.g. General Inquiry, Private Event, Membership"
              value={values.subject}
              onChange={onField}
            />
          </label>

          <label className="dcv-field-label dcv-wide">
            Message *
            <textarea
              name="message"
              rows={5}
              placeholder="How can we assist you with your luxury kosher travel plans?"
              value={values.message}
              onChange={onField}
            />
          </label>
        </div>

        {error && (
          <p className="dcv-notice" role="alert" style={{ color: "#b3261e", marginTop: 16 }}>
            {error}
          </p>
        )}

        <div className="dcv-actions" style={{ justifyContent: "center", marginTop: 28 }}>
          <button type="submit" className="dcv-btn" style={{ minWidth: 200, gap: 8 }} disabled={sending}>
            <Send size={15} />
            <span>{sending ? "Sending…" : "Send Message"}</span>
          </button>
        </div>
      </form>
    </main>
  );
}

export default ContactForm;

