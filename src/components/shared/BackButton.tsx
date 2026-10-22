"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

/**
 * Goes back to the page the visitor came from (browser history). When there is none (the page was opened directly),
 * it goes to `fallbackHref` instead.
 */
export function BackButton({ fallbackHref, label = "Back" }: { fallbackHref: string; label?: string }) {
  const router = useRouter();

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) router.back();
    else router.push(fallbackHref);
  };

  return (
    <button type="button" className="dcv-back-btn" onClick={goBack}>
      <ArrowLeft size={16} aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}

export default BackButton;
