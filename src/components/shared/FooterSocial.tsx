"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { CONTACT_DETAILS, GUETTAWAY_CONTACT_DETAILS, InstagramIcon, WhatsAppIcon } from "@/components/contact/ContactDetails";
import { cn } from "@/lib/utils";
import { isGuettawayPage } from "./guettaway-page";

interface SocialAccounts {
  whatsapp: { display: string; href: string };
  instagram: { label: string; href: string }[];
}

function subscribeToLocation(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

/** Round WhatsApp (green) and Instagram (gradient) icons, on the right of the footer. */
function SocialIcons({ whatsapp, instagram }: SocialAccounts) {
  return (
    <div className="dcv-footer-social-row">
      <a
        className="dcv-footer-social dcv-footer-social--whatsapp"
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${whatsapp.display}`}
      >
        <WhatsAppIcon size={22} />
      </a>
      {instagram.map((account) => (
        <a
          key={account.label}
          className="dcv-footer-social"
          href={account.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`@${account.label} on Instagram`}
        >
          <InstagramIcon size={22} />
        </a>
      ))}
    </div>
  );
}

/**
 * The footer's WhatsApp and Instagram icons: Diamond Club's everywhere, Guettaway's on Guettaway pages (the program and its reference pages,
 * see `isGuettawayPage`) and on guettaways.com. That domain is detected by CSS from <html data-site> (lib/site-hosts), so the right set is
 * there before React loads; the page rule needs the pathname (and the query string, read without useSearchParams, like the header).
 */
export function FooterSocial() {
  const pathname = usePathname();
  const search = useSyncExternalStore(subscribeToLocation, () => window.location.search, () => "");
  const onGuettawayPage = isGuettawayPage(pathname, search);

  return (
    <>
      {!onGuettawayPage && (
        <div className="dcv-footer-social-col" data-hide-on="guettaway">
          <SocialIcons whatsapp={CONTACT_DETAILS.whatsapp} instagram={CONTACT_DETAILS.instagram} />
        </div>
      )}
      <div className={cn("dcv-footer-social-col", !onGuettawayPage && "dcv-only-guettaway dcv-only-guettaway--block")}>
        <SocialIcons whatsapp={GUETTAWAY_CONTACT_DETAILS.whatsapp} instagram={GUETTAWAY_CONTACT_DETAILS.instagram} />
      </div>
    </>
  );
}

export default FooterSocial;
