import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Where inquiries get delivered. Override per-environment with CONTACT_TO_EMAIL
// in Vercel if you ever want to swap your inbox.
const TO = process.env.CONTACT_TO_EMAIL ?? "evandebiase@gmail.com";

// The visible "From" identity. Must be on a domain verified in Resend
// (evdb.work, once verified). The hello@ inbox doesn't need to exist —
// it's just the From address. Replies go to the visitor via reply_to.
const FROM = process.env.CONTACT_FROM_EMAIL ?? "EVDB.work <hello@evdb.work>";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  intent?: string;
  message?: string;
  // Honeypot — bots tend to fill every field. Real users never see this.
  website?: string;
};

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email is not configured on the server yet." },
      { status: 503 }
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  // Honeypot: pretend success but don't send anything.
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const intent = (body.intent ?? "Inquiry").trim();
  const company = (body.company ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // Basic email shape check — Resend will reject hard, but this gives a
  // friendlier error to the caller.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const subject = `[${intent}] Inquiry from ${name}`;
  const text = [
    `From: ${name} <${email}>`,
    company ? `Company: ${company}` : null,
    `Intent: ${intent}`,
    "",
    message
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; color: #161513;">
      <p style="color: #8B8175; font-size: 11px; text-transform: uppercase; letter-spacing: 0.18em; margin: 0 0 24px;">EVDB.work — Inquiry</p>
      <h2 style="font-family: Georgia, serif; font-size: 22px; line-height: 1.3; margin: 0 0 8px;">${escapeHtml(subject)}</h2>
      <p style="margin: 0 0 24px; color: #2D2620;">From <strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;${company ? ` at ${escapeHtml(company)}` : ""}</p>
      <hr style="border: 0; border-top: 1px solid #EDE6D5; margin: 0 0 24px;" />
      <pre style="white-space: pre-wrap; font-family: inherit; font-size: 15px; line-height: 1.6; margin: 0;">${escapeHtml(message)}</pre>
    </div>
  `;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const result = await resend.emails.send({
      from: FROM,
      to: [TO],
      subject,
      text,
      html,
      replyTo: email
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Could not send right now. Please email evandebiase@gmail.com directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route exception:", err);
    return NextResponse.json(
      { error: "Could not send right now. Please email evandebiase@gmail.com directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
