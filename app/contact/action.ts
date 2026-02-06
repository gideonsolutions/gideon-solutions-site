"use server";

import nodemailer from "nodemailer";

export type ContactResult = {
  success: boolean;
  message: string;
};

export async function sendContactEmail(
  _prev: ContactResult | null,
  formData: FormData,
): Promise<ContactResult> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return {
      success: false,
      message: "Email service is not configured. Please try again later.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Gideon Solutions Contact Form" <${SMTP_USER}>`,
      replyTo: email,
      to: "ian@gideonsolutions.us",
      subject: `Contact Form: ${service || "General Inquiry"} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Service: ${service || "Not specified"}`,
        "",
        message,
      ].join("\n"),
    });

    return { success: true, message: "Message sent! We'll be in touch soon." };
  } catch {
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
