/**
 * Contact form endpoint. Validates the message and delivers it by email through
 * Resend (https://resend.com). Configure with environment variables:
 *
 *   RESEND_API_KEY      API key from Resend
 *   CONTACT_TO_EMAIL    inbox that receives messages
 *   CONTACT_FROM_EMAIL  optional sender, e.g. "Portfolio <hello@yourdomain.com>".
 *                       Defaults to Resend's test sender, which can only deliver
 *                       to the email address that owns the Resend account.
 *
 * Without RESEND_API_KEY and CONTACT_TO_EMAIL, it responds 503 "not_configured"
 * and the form tells visitors to use email or LinkedIn instead.
 */

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort, per-instance rate limit. Serverless platforms run several
// instances, so this slows down abuse rather than stopping it outright.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  if (hits.size > 5000) hits.clear();
  hits.set(key, recent);
  return recent.length > MAX_PER_WINDOW;
}

const text = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot field: people never see it, so anything in it came from a bot.
  // Pretend success so the bot doesn't retry.
  if (text(body.website)) {
    return Response.json({ ok: true });
  }

  const name = text(body.name).replace(/[\r\n]+/g, " ");
  const email = text(body.email);
  const message = text(body.message);

  const fields: Record<string, string> = {};
  if (!name) fields.name = "Please enter your name.";
  else if (name.length > 100) fields.name = "Please keep your name under 100 characters.";
  if (!EMAIL_RE.test(email) || email.length > 200) fields.email = "Please enter a valid email address.";
  if (message.length < 10) fields.message = "Please write at least 10 characters.";
  else if (message.length > 5000) fields.message = "Please keep your message under 5,000 characters.";

  if (Object.keys(fields).length > 0) {
    return Response.json({ error: "Please fix the highlighted fields.", fields }, { status: 422 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `${message}\n\n— ${name} <${email}>`,
      }),
    });

    if (!res.ok) {
      console.error("Contact form: Resend responded", res.status, await res.text().catch(() => ""));
      return Response.json({ error: "Couldn't send your message. Please try email instead." }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact form: request to Resend failed", err);
    return Response.json({ error: "Couldn't send your message. Please try email instead." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
