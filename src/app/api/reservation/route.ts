import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminEmail, sendMail } from "@/lib/email/mailer";
import { emailBrandFor } from "@/lib/email/brand";
import { adminEmail, brandName, emailAttachments, guestEmail, type DetailRow } from "@/lib/email/templates";

export const runtime = "nodejs";

const schema = z.object({
  restaurant: z.string().trim().min(1).max(120),
  date: z.string().trim().min(1).max(40),
  time: z.string().trim().min(1).max(20),
  guests: z.string().trim().min(1).max(20),
  fullName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().min(1).max(60),
  requests: z.string().trim().max(2000).optional().default(""),
});

/** A table reservation request for one of the Casa Nizuc restaurants: emailed to the team, with a copy to the guest. */
export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });

  const { restaurant, date, time, guests, fullName, email, phone, requests } = parsed.data;
  const brand = emailBrandFor(request);
  const rows: DetailRow[] = [
    ["Restaurant", `${restaurant} · Casa Nizuc`],
    ["Date", date],
    ["Time", time],
    ["Guests", guests],
    ["Full name", fullName],
    ["Email", email],
    ["Phone", phone],
    ...(requests ? ([["Special requests", requests]] as DetailRow[]) : []),
  ];

  try {
    const admin = adminEmail("reservation", fullName, rows, brand);
    await sendMail({ to: getAdminEmail(undefined, brand === "guettaway"), replyTo: email, fromName: brandName(brand), attachments: emailAttachments(brand), ...admin });
  } catch (error) {
    console.error("[reservation] admin email failed", error);
    return NextResponse.json({ error: "We could not send your request. Please try again." }, { status: 500 });
  }

  // The team already has the request; a failed confirmation must not make the guest resubmit.
  try {
    await sendMail({ to: email, fromName: brandName(brand), attachments: emailAttachments(brand), ...guestEmail("reservation", fullName.split(/\s+/)[0], rows, brand) });
  } catch (error) {
    console.error("[reservation] guest email failed", error);
  }

  return NextResponse.json({ ok: true });
}
