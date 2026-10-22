import { Globe, Mail, MapPin, Phone } from "lucide-react";

/** The company's contact details, from the client (2026-10-22). Shown as icons and values only, without labels. */
export const CONTACT_DETAILS = {
  email: "info@dcvacations.com",
  /** The 212 number is the WhatsApp one (client). */
  whatsapp: { display: "212-927-4000", href: "https://wa.me/12129274000" },
  /** The 800 number is the phone one (client). */
  phone: { display: "888-613-4470", href: "tel:+18886134470" },
  /** The Diamond Club website (client 2026-10-22). */
  website: { display: "www.dcvacations.com", href: "https://www.dcvacations.com" },
  address: ["Diamond Club Vacations", "5120 13th Avenue", "Brooklyn, NY 11219"],
  addressHref: "https://maps.google.com/?q=5120+13th+Avenue+Brooklyn+NY+11219",
  /** The main Contact Us page shows only Diamond Club's account (Reserve and Blue). The Guettaway account, guettaway_pesach
   *  (https://www.instagram.com/guettaway_pesach), belongs under Guettaway only (client 2026-10-22), so it is not listed here. */
  instagram: [{ label: "diamondclubpassover", href: "https://www.instagram.com/diamondclubpassover" }],
};

/**
 * The Passover programs Diamond Club Reserve and Diamond Blue (their Inquire pages): the same phone numbers, address and Instagram as the
 * main Contact Us page, but their own email and website (client 2026-10-22, from the Passover brochure: "Web: www.dcpassovervacations.com,
 * Email: Info@dcpassovervacations.com").
 */
export const PASSOVER_CONTACT_DETAILS = {
  email: "info@dcpassovervacations.com",
  website: { display: "www.dcpassovervacations.com", href: "https://www.dcpassovervacations.com" },
};

/**
 * Guettaway has its own contact details, from the last page of its brochure (client 2026-10-22): "T: 347.699.6120 • Info@guettaways.com".
 * The phone has no WhatsApp of its own, but the client wants the WhatsApp symbol on it; the website is guettaways.com.
 */
export const GUETTAWAY_CONTACT_DETAILS = {
  email: "info@guettaways.com",
  whatsapp: { display: "347-699-6120", href: "https://wa.me/13476996120" },
  website: { display: "www.guettaways.com", href: "https://www.guettaways.com" },
  instagram: [{ label: "guettaway_pesach", href: "https://www.instagram.com/guettaway_pesach" }],
};

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.45 15.05L2 22l5.05-1.55A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.3 14.95l-.3-.18-3 .92.95-2.92-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-3.1 3.9c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.08 3.3 5.1 4.5 2.5.98 3 .8 3.55.75.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57Z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * The contact details as cards (icon and value, no labels) with the Instagram account under them. The Guettaway program
 * (`guettaway`) has its own: its WhatsApp number, email, website and Instagram. Reserve and Blue (`passover`) use the Diamond Club numbers with their own email and website.
 */
export type ContactVariant = "main" | "passover" | "guettaway";

export function ContactDetails({ variant = "main" }: { variant?: ContactVariant }) {
  const guettaway = variant === "guettaway";
  const passover = variant === "passover";
  const email = passover ? PASSOVER_CONTACT_DETAILS.email : CONTACT_DETAILS.email;
  const website = passover ? PASSOVER_CONTACT_DETAILS.website : CONTACT_DETAILS.website;
  const external = { target: "_blank", rel: "noopener noreferrer" } as const;

  const cards = guettaway
    ? [
        { key: "whatsapp", href: GUETTAWAY_CONTACT_DETAILS.whatsapp.href, external: true, label: `WhatsApp ${GUETTAWAY_CONTACT_DETAILS.whatsapp.display}`, icon: <WhatsAppIcon size={24} />, green: true, lines: [GUETTAWAY_CONTACT_DETAILS.whatsapp.display] },
        { key: "email", href: `mailto:${GUETTAWAY_CONTACT_DETAILS.email}`, external: false, label: undefined, icon: <Mail size={24} aria-hidden="true" />, green: false, lines: [GUETTAWAY_CONTACT_DETAILS.email] },
        { key: "website", href: GUETTAWAY_CONTACT_DETAILS.website.href, external: true, label: undefined, icon: <Globe size={24} aria-hidden="true" />, green: false, lines: [GUETTAWAY_CONTACT_DETAILS.website.display] },
      ]
    : [
        { key: "email", href: `mailto:${email}`, external: false, label: undefined, icon: <Mail size={24} aria-hidden="true" />, green: false, lines: [email] },
        { key: "whatsapp", href: CONTACT_DETAILS.whatsapp.href, external: true, label: `WhatsApp ${CONTACT_DETAILS.whatsapp.display}`, icon: <WhatsAppIcon size={24} />, green: true, lines: [CONTACT_DETAILS.whatsapp.display] },
        { key: "phone", href: CONTACT_DETAILS.phone.href, external: false, label: `Call ${CONTACT_DETAILS.phone.display}`, icon: <Phone size={24} aria-hidden="true" />, green: false, lines: [CONTACT_DETAILS.phone.display] },
        { key: "website", href: website.href, external: true, label: undefined, icon: <Globe size={24} aria-hidden="true" />, green: false, lines: [website.display] },
        { key: "address", href: CONTACT_DETAILS.addressHref, external: true, label: undefined, icon: <MapPin size={24} aria-hidden="true" />, green: false, lines: CONTACT_DETAILS.address },
      ];
  const accounts = guettaway ? GUETTAWAY_CONTACT_DETAILS.instagram : CONTACT_DETAILS.instagram;

  return (
    <section className="dcv-contact-panel" aria-label="Contact details">
      <div className={cards.length === 3 ? "dcv-contact-grid dcv-contact-grid--3" : cards.length === 5 ? (passover ? "dcv-contact-grid dcv-contact-grid--wide" : "dcv-contact-grid dcv-contact-grid--5") : "dcv-contact-grid"}>
        {cards.map((card) => (
          <a key={card.key} className="dcv-contact-item" href={card.href} aria-label={card.label} {...(card.external ? external : {})}>
            <span className={card.green ? "dcv-contact-icon dcv-contact-icon--whatsapp" : "dcv-contact-icon"}>{card.icon}</span>
            <span className="dcv-contact-value">
              {card.lines.map((line) => (
                <span key={line} className="dcv-contact-line">
                  {line}
                </span>
              ))}
            </span>
          </a>
        ))}
      </div>
      <div className="dcv-contact-social">
        {accounts.map((account) => (
          <a key={account.label} className="dcv-contact-pill" href={account.href} {...external}>
            <InstagramIcon size={20} />
            <span>@{account.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactDetails;
