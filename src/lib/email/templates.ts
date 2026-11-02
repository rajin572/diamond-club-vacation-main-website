import { readFileSync } from "node:fs";
import path from "node:path";
import { siteConfig } from "@/lib/site-config";
import type { MailAttachment } from "./mailer";

/** Colors and fonts mirror the site (design.css): cream page, gold accent, Georgia headings. */
const INK = "#171717";
const MUTED = "#666666";
const LINE = "#ddd8d0";
const CREAM = "#f7f5f1";
const GOLD = "#9a7a38";
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Arial, Helvetica, sans-serif";
const NAVY = "#1c2a5e";

/** The "Visit Our Website" button at the bottom of the emails is hidden for now (client 2026-10-31); set to true to bring it back. */
const SHOW_WEBSITE_BUTTON = false;

export type DetailRow = [label: string, value: string];

/** Whose site the submission came from: Guettaway shows its "GUETTAWAY / A DIAMOND CLUB PRODUCTION" wordmark, like the website header. */
export type EmailBrand = "dcv" | "guettaway";

/**
 * The email's images (PNG/JPG files in /public). In production they are loaded from the live site: a hosted image is the one kind every mail
 * program shows (GoDaddy, Outlook and Yahoo break images sent inside the email), so a new image shows once it is deployed.
 * Locally the live site may not have them yet and mail servers cannot reach localhost, so they are sent inside the email instead (see emailAttachments).
 */
const EMBED_IMAGES = process.env.NODE_ENV !== "production";

interface EmailImage {
  cid: string;
  path: string;
  contentType: "image/png" | "image/jpeg";
}

interface Brand {
  name: string;
  siteUrl: string;
  logo: EmailImage;
  logoWidth: number;
  logoHeight: number;
  /** Resort photo under the header, like the hero of the website's pages. */
  banner: EmailImage;
  bannerAlt: string;
  title: string;
  titleColor: string;
  titleSize: number;
  titleSpacing: number;
  sub: string;
}

const BANNER_CID = "brand-banner";
const LOGO_CID = "brand-logo";

const BRANDS: Record<EmailBrand, Brand> = {
  dcv: {
    name: "Diamond Club Vacations",
    siteUrl: siteConfig.siteUrl,
    logo: { cid: LOGO_CID, path: "/images/logo.png", contentType: "image/png" },
    logoWidth: 64,
    logoHeight: 64,
    banner: { cid: BANNER_CID, path: "/images/email/dcv-banner.jpg", contentType: "image/jpeg" },
    bannerAlt: "Diamond Club Vacations, Riviera Maya",
    title: "DIAMOND CLUB",
    titleColor: INK,
    titleSize: 20,
    titleSpacing: 3,
    sub: "VACATIONS",
  },
  guettaway: {
    name: "Guettaway a Diamond Club Production",
    siteUrl: "https://guettaways.com",
    logo: { cid: LOGO_CID, path: "/images/email/guettaway-logo.png", contentType: "image/png" },
    logoWidth: 53,
    logoHeight: 64,
    banner: { cid: BANNER_CID, path: "/images/email/guettaway-banner.jpg", contentType: "image/jpeg" },
    bannerAlt: "Waldorf Astoria Riviera Maya",
    title: "GUETTAWAY",
    titleColor: NAVY,
    titleSize: 30,
    titleSpacing: 6,
    sub: "A DIAMOND CLUB PRODUCTION",
  },
};

function imageSrc(image: EmailImage) {
  return EMBED_IMAGES ? `cid:${image.cid}` : `${siteConfig.siteUrl}${image.path}`;
}

/** The logo and banner as inline images when running locally (see EMBED_IMAGES); nothing in production. */
export function emailAttachments(brand: EmailBrand): MailAttachment[] {
  if (!EMBED_IMAGES) return [];
  const { logo, banner } = BRANDS[brand];
  return [logo, banner].map(({ cid, path: file, contentType }) => ({
    filename: path.basename(file),
    content: readFileSync(path.join(process.cwd(), "public", file)),
    cid,
    contentType,
  }));
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
            <td align="center" style="padding:32px 24px 24px;">
              <a href="${b.siteUrl}" style="text-decoration:none;">
                <img src="${imageSrc(b.logo)}" width="${b.logoWidth}" height="${b.logoHeight}" alt="${escapeHtml(b.name)}" style="display:block;margin:0 auto 12px;border:0;">
                <div style="font-family:${SERIF};font-size:${b.titleSize}px;font-weight:bold;letter-spacing:${b.titleSpacing}px;color:${b.titleColor};">${b.title}</div>
                <div style="font-family:${SANS};font-size:11px;letter-spacing:4px;color:${GOLD};margin-top:4px;">${b.sub}</div>
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:0;border-bottom:3px solid ${GOLD};font-size:0;line-height:0;">
              <img src="${imageSrc(b.banner)}" width="600" alt="${escapeHtml(b.bannerAlt)}" style="display:block;width:100%;max-width:600px;height:auto;border:0;">
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
          ${closing
      ? `<tr><td style="padding:16px 32px 8px;"><p style="margin:0;font-family:${SANS};font-size:15px;line-height:1.6;color:${MUTED};">${escapeHtml(closing)}</p></td></tr>`
      : ""
    }
          ${SHOW_WEBSITE_BUTTON
      ? `<tr>
            <td align="center" style="padding:28px 32px 36px;">
              <a href="${b.siteUrl}" style="display:inline-block;background:${INK};color:#ffffff;font-family:${SANS};font-size:12px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:14px 28px;">Visit Our Website</a>
            </td>
          </tr>`
      : `<tr><td style="padding:0 0 24px;font-size:0;line-height:0;">&nbsp;</td></tr>`
    }
          <tr>
            <td align="center" style="padding:32px 24px 28px;background:${INK};">
              <div style="font-family:${SERIF};font-size:18px;font-weight:bold;letter-spacing:3px;color:#ffffff;">${b.title}</div>
              <div style="font-family:${SANS};font-size:10px;letter-spacing:4px;color:${GOLD};margin-top:4px;">${b.sub}</div>
              <div style="border-top:1px solid #333333;margin-top:22px;padding-top:16px;font-family:${SANS};font-size:11px;color:#888888;">&copy; ${new Date().getFullYear()} ${escapeHtml(b.name)}. All rights reserved.</div>
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
