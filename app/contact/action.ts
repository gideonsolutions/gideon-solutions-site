"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/products";

export type ContactResult = {
  success: boolean;
  message: string;
};

/**
 * Three checks keep the form from being a free relay, none of which a person
 * filling it in normally will notice:
 *
 * 1. A honeypot field (`website`) that the page hides; anything in it came
 *    from a script filling every box it can see.
 * 2. A timestamp the page sets when it renders; a form back in under three
 *    seconds was not typed by a person.
 * 3. Cloudflare Turnstile, when `TURNSTILE_SECRET_KEY` is set. Without the key
 *    the first two still stand, so the form works on a preview with no secrets.
 *
 * A failed check says so plainly rather than pretending to send: an honest
 * "we could not accept this" beats a silent drop the sender never learns of.
 */
const MIN_FILL_MS = 3_000;
const MAX_MESSAGE = 5_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function turnstilePasses(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  try {
    const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim();
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, ...(ip ? { remoteip: ip } : {}) }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function sendContactEmail(
  _prev: ContactResult | null,
  formData: FormData,
): Promise<ContactResult> {
  const field = (k: string) => (typeof formData.get(k) === "string" ? (formData.get(k) as string).trim() : "");
  const name = field("name").slice(0, 200);
  const email = field("email").slice(0, 254);
  const interest = field("interest").slice(0, 100);
  const message = field("message").slice(0, MAX_MESSAGE);

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in your name, email and message." };
  }
  if (!EMAIL_RE.test(email)) {
    return { success: false, message: "That email address does not look right — please check it." };
  }

  // The checks a person never sees.
  if (field("website") !== "") {
    return { success: false, message: "We could not accept this message." };
  }
  const startedAt = Number(field("startedAt"));
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return { success: false, message: "That was quick — please give the form a moment and send again." };
  }
  if (!(await turnstilePasses(field("cf-turnstile-response")))) {
    return {
      success: false,
      message: "We could not confirm this came from a person. Please try again, or email us directly.",
    };
  }

  const { RESEND_API_KEY } = process.env;
  if (!RESEND_API_KEY) {
    return { success: false, message: "Email is not configured here. Please email us directly." };
  }

  try {
    await new Resend(RESEND_API_KEY).emails.send({
      from: "Gideon Solutions Contact Form <noreply@mail.gideonsolutions.us>",
      replyTo: email,
      to: CONTACT_EMAIL,
      subject: `Contact form: ${interest || "General"} — ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `About: ${interest || "Not specified"}`, "", message].join("\n"),
    });
    return { success: true, message: "Sent. A person will read it and reply from " + CONTACT_EMAIL + "." };
  } catch {
    return { success: false, message: "Sending failed on our side. Please try again, or email us directly." };
  }
}
