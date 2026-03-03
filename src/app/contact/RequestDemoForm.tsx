"use client";

import { FormEvent, useState } from "react";

export default function RequestDemoForm() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadedAt] = useState(() => Date.now());

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const elapsedSinceLoad = Date.now() - loadedAt;
    const honeypotValue = String(formData.get("_gotcha") ?? "").trim();
    const emailValue = String(formData.get("email") ?? "").trim();

    if (honeypotValue) {
      setSubmitting(false);
      return;
    }

    if (elapsedSinceLoad < 2000) {
      setSubmitting(false);
      setError("Please wait a moment before submitting.");
      return;
    }

    if (emailValue) {
      formData.set("_replyto", emailValue);
    }

    formData.set("_subject", "New demo request from dativo.dev");

    try {
      const response = await fetch("https://formspree.io/f/meelbnbk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Unable to send form.");
      }

      setSucceeded(true);
      formElement.reset();
    } catch {
      setError("Something went wrong while sending your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
      {succeeded ? (
        <div className="space-y-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          <p className="font-semibold">Thanks! Your request has been sent.</p>
          <p>We&apos;ll get back to you shortly at the email you provided.</p>
        </div>
      ) : null}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="_gotcha" tabIndex={-1} autoComplete="off" />
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
              placeholder="Anna Schmidt"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
              placeholder="anna@company.eu"
            />
          </div>
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-navy">
            Role
          </label>
          <select
            id="role"
            name="role"
            className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          >
            <option value="">Select your role</option>
            <option value="compliance">Compliance Officer</option>
            <option value="legal">Legal Counsel</option>
            <option value="cto">CTO / CIO</option>
            <option value="digital">Digital Transformation Lead</option>
            <option value="software-architect">Software Architect</option>
            <option value="operations">Operations / Engineering</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            placeholder="Tell us about your Data Act compliance needs..."
          />
        </div>
        {error ? <p className="text-xs text-red-600">{error}</p> : null}
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          {submitting ? "Sending..." : "Request Demo"}
        </button>
        <p className="text-xs text-grey-accent">
          By submitting this form, you agree to our privacy policy.
        </p>
      </form>
    </div>
  );
}
