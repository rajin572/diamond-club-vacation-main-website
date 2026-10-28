import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminEmail, sendMail } from "@/lib/email/mailer";
import { adminEmail, guestEmail, type DetailRow } from "@/lib/email/templates";

export const runtime = "nodejs";

const text = (max = 500) => z.string().trim().max(max).optional().default("");

const schema = z.object({
  kind: z.enum(["inquiry", "quote"]),
  experience: text(),
  hotel: text(),
  adults: text(20),
  children: text(20),
  rooms: text(20),
  childAges: text(),
  connectingRooms: text(10),
  additionalRoom: text(10),
  earlyArrival: text(10),
  previousGuest: text(10),
  previousPrograms: text(2000),
  callback: text(10),
  referral: text(),
  communityStyle: text(),
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().min(1).max(60),
  country: z.string().trim().min(1).max(100),
  region: z.string().trim().min(1).max(100),
});

type Inquiry = z.infer<typeof schema>;

/** Same order and labels as the review step of the form. */
const FIELDS: [keyof Inquiry, string][] = [
  ["experience", "Experience"],
  ["hotel", "Hotel"],
  ["adults", "Adults"],
  ["children", "Children"],
  ["rooms", "Rooms"],
  ["childAges", "Child ages"],
  ["connectingRooms", "Connecting rooms"],
  ["additionalRoom", "Additional room"],
  ["earlyArrival", "Early arrival"],
  ["previousGuest", "Previous guest"],
  ["previousPrograms", "Previous programs"],
  ["callback", "Callback"],
  ["referral", "Referral"],
  ["communityStyle", "Community style"],
  ["firstName", "First name"],
  ["lastName", "Last name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["country", "Country"],
  ["region", "State / Region"],
];

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });

  const data = parsed.data;
  const rows = FIELDS.filter(([key]) => data[key]).map(([key, label]): DetailRow => [label, data[key]]);
  const fullName = `${data.firstName} ${data.lastName}`;

  try {
    await sendMail({ to: getAdminEmail(), replyTo: data.email, ...adminEmail(data.kind, fullName, rows) });
  } catch (error) {
    console.error("[inquire] admin email failed", error);
    return NextResponse.json({ error: "We could not send your request. Please try again." }, { status: 500 });
  }

  // The admin already has the request; a failed confirmation must not make the guest resubmit.
  try {
    await sendMail({ to: data.email, ...guestEmail(data.kind, data.firstName, rows) });
  } catch (error) {
    console.error("[inquire] guest email failed", error);
  }

  return NextResponse.json({ ok: true });
}
