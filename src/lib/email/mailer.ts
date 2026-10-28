import nodemailer, { type Transporter } from "nodemailer";

interface MailInput {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

let transporter: Transporter | null = null;

function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) throw new Error("EMAIL_USER and EMAIL_PASS must be set.");
  transporter ??= nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
  return transporter;
}

/** Where the admin copy of every submission goes; defaults to the sending mailbox. */
export function getAdminEmail() {
  return process.env.ADMIN_EMAIL || process.env.EMAIL_USER || "";
}

export async function sendMail({ to, subject, html, text, replyTo }: MailInput) {
  await getTransporter().sendMail({
    from: `"Diamond Club Vacations" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    text,
    replyTo,
  });
}
