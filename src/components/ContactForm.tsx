"use client";

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  role: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error: unknown) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to submit. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="font-heading text-lg font-semibold text-green-900">
          Thank you for your inquiry
        </h3>
        <p className="mt-2 text-sm text-green-700">
          We will review your message and get back to you within one business
          day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-600 underline hover:text-green-800"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
      {status === "error" && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-navy"
            >
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Anna"
              className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-navy"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Schmidt"
              className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy"
          >
            Work email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="anna@company.eu"
            className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-navy"
          >
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          />
        </div>

        {/* Role */}
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-navy"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          >
            <option value="">Select your role</option>
            <option value="Compliance Officer">Compliance Officer</option>
            <option value="CTO / CIO">CTO / CIO</option>
            <option value="Digital Transformation">
              Digital Transformation Lead
            </option>
            <option value="Legal Counsel">Legal Counsel</option>
            <option value="Engineering">Engineering / IT</option>
            <option value="Product Management">Product Management</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-navy"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your Data Act compliance needs..."
            className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? "Submitting..." : "Send Inquiry"}
        </button>

        <p className="text-center text-xs text-grey-accent">
          Or book a demo directly using the calendar below.
        </p>
      </form>
    </div>
  );
}
