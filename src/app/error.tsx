"use client";

import Link from "next/link";

/** Runtime error boundary, styled with the client design tokens (see app/design.css). */
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="dcv-site" style={{ justifyContent: "center" }}>
      <section className="dcv-wrap" style={{ textAlign: "center" }}>
        <Link className="dcv-logo" href="/" aria-label="Diamond Club Vacations home">
          DIAMOND CLUB<small>VACATIONS</small>
        </Link>
        <div className="dcv-kicker" style={{ marginTop: 40, color: "#9a6b1d" }}>
          Something went wrong
        </div>
        <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", margin: "12px 0 16px" }}>We hit an unexpected problem</h1>
        <p className="dcv-lead" style={{ maxWidth: 560, margin: "0 auto 28px" }}>
          Please try again. If the problem continues, start an inquiry and our team will help you directly.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button type="button" className="dcv-btn" onClick={reset}>
            Try again
          </button>
          <Link className="dcv-btn" href="/">
            Back to home
          </Link>
          <Link className="dcv-btn" href="/inquire">
            Start an inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
