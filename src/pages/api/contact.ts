import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

const json = (message: string, status: number) =>
  Response.json({ message }, { status });

export const POST: APIRoute = async ({ request }) => {
  let fields: Record<string, unknown>;
  try {
    fields = await request.json();
  } catch {
    return json("Invalid JSON data", 400);
  }
  if (typeof fields !== "object" || fields === null || Array.isArray(fields)) {
    return json("Invalid JSON data", 400);
  }

  const readField = (key: string) =>
    typeof fields[key] === "string" ? (fields[key] as string).trim() : "";

  if (readField("company")) {
    return json("Message received", 200);
  }

  const name = readField("name");
  const email = readField("email");
  const subject = readField("subject");
  const message = readField("message");

  if (
    !name || name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 ||
    !subject || subject.length > 150 ||
    !message || message.length > 5000
  ) {
    return json("Please check the form fields", 400);
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM, CONTACT_TO } = process.env;
  const port = Number(SMTP_PORT || 587);
  const from = SMTP_FROM || SMTP_USER;
  if (!SMTP_HOST || !CONTACT_TO || !from || !Number.isInteger(port)) {
    return json("Contact form is not configured", 503);
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE === "true" || port === 465,
      auth: SMTP_USER && SMTP_PASSWORD ? { user: SMTP_USER, pass: SMTP_PASSWORD } : undefined,
    });

    await transporter.sendMail({
      from,
      to: CONTACT_TO,
      replyTo: { name, address: email },
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return json("Message sent", 200);
  } catch (error) {
    console.error("Contact email delivery failed", error);
    return json("Message delivery failed", 502);
  }
};