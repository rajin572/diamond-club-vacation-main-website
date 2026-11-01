import nodemailer, { type Transporter } from "nodemailer";

export interface MailAttachment {
  filename: string;
  content: Buffer;
  /** Referenced from the HTML as src="cid:...". */
  cid: string;
  contentType: string;
}

interface MailInput {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  /** Sender name shown in the inbox (default "Diamond Club Vacations"). */
  fromName?: string;
  attachments?: MailAttachment[];
}

let transporter: Transporter | null = null;

function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) throw new Error("EMAIL_USER and EMAIL_PASS must be set.");
  transporter ??= nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
  return transporter;
}

/** Everything that is not a program below (Contact form, Casa Nizuc Year Round, weddings, private events). */
const DEFAULT_ADMIN_EMAIL = "info@dcvacations.com";

const GUETTAWAY_ADMIN_EMAIL = "Guettaway@dcvacations.com, info@guettaways.com";

/** Admin inbox(es) for each program's inquiries (comma-separate several addresses), and the env var that overrides it, e.g. to test with your own mailbox. */
const PROGRAM_ADMIN: Record<string, { env: string; email: string }> = {
  "diamond-club-reserve": { env: "ADMIN_EMAIL_RESERVE", email: "Reserve@dcvacations.com" },
  guttaway: { env: "ADMIN_EMAIL_GUETTAWAY", email: GUETTAWAY_ADMIN_EMAIL },
  blue: { env: "ADMIN_EMAIL_BLUE", email: "Casanizuc@dcvacations.com" },
};

/**
 * Where the admin copy of a submission goes: the program's own inbox, else the default inbox.
 * A Contact form sent from guettaways.com (`guettawaySite`) goes to Guettaway's inboxes.
 */
export function getAdminEmail(experienceId?: string, guettawaySite = false) {
  const program = PROGRAM_ADMIN[experienceId ?? (guettawaySite ? "guttaway" : "")];
  if (program) return process.env[program.env] || program.email;
  return process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL;
}

export async function sendMail({ to, subject, html, text, replyTo, fromName = "Diamond Club Vacations", attachments }: MailInput) {
  await getTransporter().sendMail({
    from: `"${fromName}" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    text,
    replyTo,
    attachments,
  });
}
