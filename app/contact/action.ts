"use server";

import { Resend } from "resend";

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

  const { RESEND_API_KEY } = process.env;

  if (!RESEND_API_KEY) {
    return {
      success: false,
      message: "Email service is not configured. Please try again later.",
    };
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Gideon Solutions Contact Form <noreply@gideonsolutions.us>",
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
