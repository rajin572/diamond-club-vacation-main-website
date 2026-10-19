"use client";

import { useEffect } from "react";
import { SPLASH_ATTR as ATTR, SPLASH_SEEN_KEY as SEEN_KEY } from "./guettaway-splash.constants";
/** Matches the CSS timeline in design.css (.dcv-splash): 3.2s on screen + 0.6s fade out. */
const DONE_AFTER_MS = 3900;

export function GuettawaySplash() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.hasAttribute(ATTR)) return;

    const finish = () => {
      root.removeAttribute(ATTR);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* private mode: the splash may show again on the next visit, which is fine */
      }
    };
    const timer = window.setTimeout(finish, DONE_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const skip = () => {
    document.documentElement.removeAttribute(ATTR);
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <div className="dcv-splash" aria-hidden="true" onClick={skip}>
        <div className="dcv-splash__water">
          <svg className="dcv-splash__wave dcv-splash__wave--back" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0 60 C 180 10, 360 110, 540 60 S 900 10, 1080 60 S 1260 110, 1440 60 V120 H0 Z" />
          </svg>
          <svg className="dcv-splash__wave dcv-splash__wave--front" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0 60 C 180 110, 360 10, 540 60 S 900 110, 1080 60 S 1260 10, 1440 60 V120 H0 Z" />
          </svg>
        </div>
        <div className="dcv-splash__ripples">
          <span />
          <span />
          <span />
        </div>
        <div className="dcv-splash__brand">
          <p className="dcv-splash__name">GUETTAWAY</p>
          <p className="dcv-splash__sub">A Diamond Club Production</p>
        </div>
      </div>
    </>
  );
}

export default GuettawaySplash;
