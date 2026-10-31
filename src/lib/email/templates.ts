import { siteConfig } from "@/lib/site-config";
import { GUETTAWAY_LOGO_PNG_BASE64 } from "./logos";
import type { MailAttachment } from "./mailer";

/** Colors and fonts mirror the site (design.css): cream page, gold accent, Georgia headings. */
const INK = "#171717";
const MUTED = "#666666";
const LINE = "#ddd8d0";
const CREAM = "#f7f5f1";
const GOLD = "#9a7a38";
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Arial, Helvetica, sans-serif";

export type DetailRow = [label: string, value: string];

/** Whose site the submission came from: Guettaway shows its own logo and "A Diamond Club Production", like the website header. */
export type EmailBrand = "dcv" | "guettaway";

const BRANDS: Record<EmailBrand, { name: string; siteUrl: string; logo: string; logoWidth: number; logoHeight: number; title: string; sub: string }> = {
  dcv: { name: "Diamond Club Vacations", siteUrl: siteConfig.siteUrl, logo: "/images/logo.png", logoWidth: 64, logoHeight: 64, title: "DIAMOND CLUB", sub: "VACATIONS" },
  guettaway: {
    name: "Guettaway, a Diamond Club Production",
    siteUrl: "https://guettaways.com",
    logo: "cid:guettaway-logo",
    logoWidth: 53,
    logoHeight: 64,
    title: "A DIAMOND CLUB",
    sub: "PRODUCTION",
  },
};

/** Images the email's HTML refers to with "cid:" (none for Diamond Club Vacations, whose logo is loaded from the site). */
export function emailAttachments(brand: EmailBrand): MailAttachment[] {
  return brand === "guettaway"
    ? [{ filename: "guettaway-logo.png", content: Buffer.from(GUETTAWAY_LOGO_PNG_BASE64, "base64"), cid: "guettaway-logo", contentType: "image/png" }]
    : [];
}

export function brandName(brand: EmailBrand) {
  return BRANDS[brand].name;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface LayoutInput {
  preheader: string;
  kicker: string;
  title: string;
  intro: string;
  rows: DetailRow[];
  rowsHeading: string;
  closing?: string;
  brand: EmailBrand;
}

function layout({ preheader, kicker, title, intro, rows, rowsHeading, closing, brand }: LayoutInput) {
  const b = BRANDS[brand];
  // "cid:" logos travel inside the email; the others are loaded from the live site.
  const logoUrl = b.logo.startsWith("cid:") ? b.logo : `${siteConfig.siteUrl}${b.logo}`;
  const rowsHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid ${LINE};width:38%;vertical-align:top;font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${GOLD};font-weight:bold;">${escapeHtml(label)}</td>
          <td style="padding:12px 0 12px 12px;border-bottom:1px solid ${LINE};vertical-align:top;font-family:${SANS};font-size:15px;line-height:1.5;color:${INK};white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${CREAM};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid ${LINE};">
          <tr>
            <td align="center" style="padding:32px 24px 24px;border-bottom:3px solid ${GOLD};">
              <img src="${logoUrl}" width="${b.logoWidth}" height="${b.logoHeight}" alt="${escapeHtml(b.name)}" style="display:block;margin:0 auto 12px;border:0;">
              <div style="font-family:${SERIF};font-size:20px;letter-spacing:3px;color:${INK};">${b.title}</div>
              <div style="font-family:${SANS};font-size:11px;letter-spacing:4px;color:${GOLD};margin-top:4px;">${b.sub}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 32px 8px;">
              <div style="font-family:${SANS};font-size:11px;letter-spacing:2px;color:${GOLD};font-weight:bold;text-transform:uppercase;">${escapeHtml(kicker)}</div>
              <h1 style="margin:10px 0 14px;font-family:${SERIF};font-size:28px;line-height:1.25;font-weight:normal;color:${INK};">${escapeHtml(title)}</h1>
              <p style="margin:0;font-family:${SANS};font-size:15px;line-height:1.6;color:${MUTED};">${escapeHtml(intro)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 8px;">
              <div style="font-family:${SERIF};font-size:18px;color:${INK};padding-bottom:8px;border-bottom:1px solid ${GOLD};">${escapeHtml(rowsHeading)}</div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rowsHtml}</table>
            </td>
          </tr>
          ${
            closing
              ? `<tr><td style="padding:16px 32px 8px;"><p style="margin:0;font-family:${SANS};font-size:15px;line-height:1.6;color:${MUTED};">${escapeHtml(closing)}</p></td></tr>`
              : ""
          }
          <tr>
            <td align="center" style="padding:28px 32px 36px;">
              <a href="${b.siteUrl}" style="display:inline-block;background:${INK};color:#ffffff;font-family:${SANS};font-size:12px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:14px 28px;">Visit Our Website</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function toText(heading: string, intro: string, rows: DetailRow[], brandText: string, closing?: string) {
  return [heading, "", intro, "", ...rows.map(([label, value]) => `${label}: ${value}`), ...(closing ? ["", closing] : []), "", brandText].join("\n");
}

export interface EmailContent {
  subject: string;
  html: string;
  text: string;
}

/** Admin notification: every submitted answer, so the team can act without opening the site. */
export function adminEmail(kind: "contact" | "inquiry" | "quote", fullName: string, rows: DetailRow[], brand: EmailBrand = "dcv"): EmailContent {
  const label = { contact: "Contact message", inquiry: "Vacation inquiry", quote: "Quote request" }[kind];
  const site = brand === "guettaway" ? "the Guettaway website" : "the website";
  const intro = `${fullName} just submitted the ${label.toLowerCase()} form on ${site}. Reply to this email to answer them directly.`;
  return {
    subject: `New ${brand === "guettaway" ? "Guettaway " : ""}${label.toLowerCase()} from ${fullName}`,
    html: layout({
      preheader: intro,
      kicker: "New submission",
      title: `New ${label.toLowerCase()}`,
      intro,
      rowsHeading: "Submission details",
      rows,
      brand,
    }),
    text: toText(`New ${label.toLowerCase()}`, intro, rows, brandName(brand)),
  };
}

/** Confirmation sent to the guest with a copy of what they submitted. */
export function guestEmail(kind: "contact" | "inquiry" | "quote", firstName: string, rows: DetailRow[], brand: EmailBrand = "dcv"): EmailContent {
  const what = { contact: "message", inquiry: "inquiry", quote: "quote request" }[kind];
  const intro = `Thank you for reaching out to ${brandName(brand)}. We have received your ${what} and a member of our concierge team will be in touch with you shortly.`;
  const closing = "We look forward to curating your extraordinary kosher luxury vacation.";
  return {
    subject: `We received your ${what} — ${brandName(brand)}`,
    html: layout({
      preheader: `We have received your ${what}.`,
      kicker: "Confirmation",
      title: firstName ? `Thank you, ${firstName}.` : "Thank you.",
      intro,
      rowsHeading: `Your ${what}`,
      rows,
      closing,
      brand,
    }),
    text: toText(firstName ? `Thank you, ${firstName}.` : "Thank you.", intro, rows, brandName(brand), closing),
  };
}
