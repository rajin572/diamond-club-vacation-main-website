import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminEmail, sendMail } from "@/lib/email/mailer";
import { emailBrandFor } from "@/lib/email/brand";
import { adminEmail, brandName, guestEmail, type DetailRow } from "@/lib/email/templates";

export const runtime = "nodejs";

const schema = z.object({
  fullName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().min(1).max(60),
  subject: z.string().trim().max(300).optional().default(""),
  message: z.string().trim().min(1).max(5000),
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });

  const { fullName, email, phone, subject, message } = parsed.data;
  const brand = emailBrandFor(request);
  const rows: DetailRow[] = [
    ["Experience", "Diamond Club Vacations"],
    ["Full name", fullName],
    ["Email", email],
    ["Phone", phone],
    ...(subject ? ([["Subject", subject]] as DetailRow[]) : []),
    ["Message", message],
  ];

  try {
    const admin = adminEmail("contact", fullName, rows, brand);
    await sendMail({ to: getAdminEmail(), replyTo: email, fromName: brandName(brand), ...admin });
  } catch (error) {
    console.error("[contact] admin email failed", error);
    return NextResponse.json({ error: "We could not send your message. Please try again." }, { status: 500 });
  }

  // The admin already has the message; a failed confirmation must not make the guest resubmit.
  try {
    await sendMail({ to: email, fromName: brandName(brand), ...guestEmail("contact", fullName.split(/\s+/)[0], rows, brand) });
  } catch (error) {
    console.error("[contact] guest email failed", error);
  }

  return NextResponse.json({ ok: true });
}
