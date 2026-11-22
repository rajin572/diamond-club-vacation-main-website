import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminEmail, sendMail } from "@/lib/email/mailer";
import { emailBrandFor } from "@/lib/email/brand";
import { adminEmail, brandName, emailAttachments, guestEmail, type DetailRow } from "@/lib/email/templates";

export const runtime = "nodejs";

const schema = z.object({
  eventType: z.string().trim().min(1).max(80),
  date: z.string().trim().max(40).optional().default(""),
  guests: z.string().trim().max(20).optional().default(""),
  fullName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(60).optional().default(""),
  details: z.string().trim().max(4000).optional().default(""),
});

/** "Request a Proposal" of the Casa Nizuc Events page: emailed to the team, with a copy to the guest. */
export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });

  const { eventType, date, guests, fullName, email, phone, details } = parsed.data;
  const brand = emailBrandFor(request);
  const rows: DetailRow[] = [
    ["Event type", `${eventType} · Casa Nizuc`],
    ...(date ? ([["Preferred date", date]] as DetailRow[]) : []),
    ...(guests ? ([["Estimated guests", guests]] as DetailRow[]) : []),
    ["Full name", fullName],
    ["Email", email],
    ...(phone ? ([["Phone", phone]] as DetailRow[]) : []),
    ...(details ? ([["Details", details]] as DetailRow[]) : []),
  ];

  try {
    const admin = adminEmail("proposal", fullName, rows, brand);
    await sendMail({ to: getAdminEmail(undefined, brand === "guettaway"), replyTo: email, fromName: brandName(brand), attachments: emailAttachments(brand), ...admin });
  } catch (error) {
    console.error("[event-proposal] admin email failed", error);
    return NextResponse.json({ error: "We could not send your request. Please try again." }, { status: 500 });
  }

  // The team already has the request; a failed confirmation must not make the guest resubmit.
  try {
    await sendMail({ to: email, fromName: brandName(brand), attachments: emailAttachments(brand), ...guestEmail("proposal", fullName.split(/\s+/)[0], rows, brand) });
  } catch (error) {
    console.error("[event-proposal] guest email failed", error);
  }

  return NextResponse.json({ ok: true });
}
