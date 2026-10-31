import nodemailer, { type Transporter } from "nodemailer";

interface MailInput {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  /** Sender name shown in the inbox (default "Diamond Club Vacations"). */
  fromName?: string;
}

let transporter: Transporter | null = null;

function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) throw new Error("EMAIL_USER and EMAIL_PASS must be set.");
  transporter ??= nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
  return transporter;
}

/** Env var holding the admin inbox for each program's inquiries (comma-separate several addresses). */
const PROGRAM_ADMIN_ENV: Record<string, string> = {
  "diamond-club-reserve": "ADMIN_EMAIL_RESERVE",
  guttaway: "ADMIN_EMAIL_GUETTAWAY",
  blue: "ADMIN_EMAIL_BLUE",
};

/** Where the admin copy of a submission goes: the program's own inbox, else ADMIN_EMAIL, else the sending mailbox. */
export function getAdminEmail(experienceId?: string) {
  const programEnv = experienceId ? PROGRAM_ADMIN_ENV[experienceId] : undefined;
  return (programEnv && process.env[programEnv]) || process.env.ADMIN_EMAIL || process.env.EMAIL_USER || "";
}

export async function sendMail({ to, subject, html, text, replyTo, fromName = "Diamond Club Vacations" }: MailInput) {
  await getTransporter().sendMail({
    from: `"${fromName}" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    text,
    replyTo,
  });
}
