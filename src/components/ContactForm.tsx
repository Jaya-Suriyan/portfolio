"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string; fields?: Record<string, string> };

const inputClass =
  "mt-2 block w-full rounded-lg border border-line bg-card px-3.5 py-2.5 text-sm text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 aria-[invalid=true]:border-red-500";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string; fields?: Record<string, string> };

      if (res.ok) {
        form.reset();
        setStatus({ state: "sent" });
        return;
      }
      if (body.error === "not_configured") {
        setStatus({
          state: "error",
          message: profile.email
            ? `The form isn't connected yet. Please email me at ${profile.email}.`
            : "The form isn't connected yet. Please reach me on LinkedIn.",
        });
        return;
      }
      setStatus({ state: "error", message: body.error ?? "Something went wrong. Please try again.", fields: body.fields });
    } catch {
      setStatus({ state: "error", message: "Couldn't reach the server. Check your connection and try again." });
    }
  }

  const fieldError = (name: string) => (status.state === "error" ? status.fields?.[name] : undefined);

  if (status.state === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-card p-8">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent">Message sent</p>
        <p className="mt-2 text-lg font-medium">Thanks for reaching out.</p>
        <p className="mt-1 text-sm text-muted">I&apos;ll reply to the email address you gave.</p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-6 text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-fg"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-line bg-card/40 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            aria-invalid={Boolean(fieldError("name"))}
            aria-describedby={fieldError("name") ? "contact-name-error" : undefined}
            className={inputClass}
          />
          {fieldError("name") ? (
            <p id="contact-name-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
              {fieldError("name")}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            aria-invalid={Boolean(fieldError("email"))}
            aria-describedby={fieldError("email") ? "contact-email-error" : undefined}
            className={inputClass}
          />
          {fieldError("email") ? (
            <p id="contact-email-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
              {fieldError("email")}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={5000}
          placeholder="A role, a project, or a question…"
          aria-invalid={Boolean(fieldError("message"))}
          aria-describedby={fieldError("message") ? "contact-message-error" : undefined}
          className={`${inputClass} resize-y`}
        />
        {fieldError("message") ? (
          <p id="contact-message-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
            {fieldError("message")}
          </p>
        ) : null}
      </div>

      {/* Honeypot: hidden from people, often filled in by bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="inline-flex items-center rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-fg disabled:cursor-wait disabled:opacity-60"
        >
          {status.state === "sending" ? "Sending…" : "Send message"}
        </button>
        <p aria-live="polite" className="text-sm text-red-600 dark:text-red-400">
          {status.state === "error" ? status.message : ""}
        </p>
      </div>
    </form>
  );
}
