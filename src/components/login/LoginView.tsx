"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { LogIn } from "lucide-react";
import { AllImages } from "../../../public/images/AllImages";

interface LoginViewProps {
  /** Show the Guettaway branding on any domain (the Guettaway domain itself is detected by CSS from <html data-site>). */
  forceGuettaway?: boolean;
}

/**
 * Login page, design only (client 2026-10-29): nothing is sent anywhere yet.
 * Diamond Club Vacations shows the Diamond Club logo; Guettaway shows its own logo with "Diamond Club Production".
 * Which one is visible is decided by CSS (see design.css), so the right brand is there before React loads.
 */
export function LoginView({ forceGuettaway }: LoginViewProps) {
  const [values, setValues] = useState({ username: "", password: "" });
  const [notice, setNotice] = useState("");

  const onField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setNotice("Member login is coming soon.");
  };

  return (
    <div className={`dcv-login${forceGuettaway ? " dcv-login--guettaway" : ""}`}>
      <div className="dcv-login-card">
        <div className="dcv-login-art" aria-hidden="true">
          <Image
            className="dcv-login-art-dc"
            src={AllImages.inquirySource01}
            alt=""
            fill
            sizes="(max-width: 900px) 0px, 560px"
          />
          <Image
            className="dcv-login-art-guettaway"
            src={AllImages.guettawayMain1}
            alt=""
            fill
            sizes="(max-width: 900px) 0px, 560px"
          />
        </div>

        <div className="dcv-login-panel">
          <div className="dcv-login-brand dcv-login-brand-dc">
            <Image src={AllImages.logo} alt="Diamond Club Vacations" width={54} height={54} priority className="dcv-brand-badge" />
            <span className="dcv-brand-divider" aria-hidden="true" />
            <div className="dcv-brand-text">
              <span className="dcv-brand-title">DIAMOND CLUB</span>
              <span className="dcv-brand-sub">VACATIONS</span>
            </div>
          </div>
          <div className="dcv-login-brand dcv-login-brand-guettaway">
            <Image src={AllImages.guettawayLogo} alt="Guettaway" width={42} height={52} priority className="dcv-brand-seal" />
            <span className="dcv-brand-divider" aria-hidden="true" />
            <div className="dcv-brand-text">
              <span className="dcv-brand-title">DIAMOND CLUB</span>
              <span className="dcv-brand-sub">PRODUCTION</span>
            </div>
          </div>

          <h1>Login</h1>
          <p className="dcv-login-lead">Welcome back. Please sign in to your account.</p>

          <form onSubmit={onSubmit} noValidate>
            <div className="dcv-formgrid dcv-login-fields">
              <label className="dcv-field-label dcv-wide">
                Username
                <input
                  name="username"
                  autoComplete="username"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={onField}
                />
              </label>
              <label className="dcv-field-label dcv-wide">
                Password
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={onField}
                />
              </label>
            </div>

            {notice && (
              <p className="dcv-notice" role="status" style={{ marginTop: 16 }}>
                {notice}
              </p>
            )}

            <button type="submit" className="dcv-btn dcv-login-submit">
              <LogIn size={16} />
              <span>LOGIN</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
