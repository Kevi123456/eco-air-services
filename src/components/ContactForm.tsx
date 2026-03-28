"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const services = [
  "AC Repair",
  "Heating / Furnace Repair",
  "HVAC Installation",
  "Preventive Maintenance",
  "Indoor Air Quality",
  "Emergency Service",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: Wire up to a form handler (e.g. Resend, Formspree, or a Next.js API route)
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-green-50 rounded-2xl border border-green-100">
        <CheckCircle size={48} className="text-green-600 mb-4" />
        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
        <p className="text-slate-500 text-sm max-w-xs">
          Thanks for reaching out. We&apos;ll get back to you within a few hours. For urgent needs,
          call us directly at{" "}
          <a href="tel:+12159924422" className="text-green-700 font-semibold">
            (215) 992-4422
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            required
            placeholder="John"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            required
            placeholder="Smith"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          placeholder="(215) 992-4422"
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="john@example.com"
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Service Needed <span className="text-red-500">*</span>
        </label>
        <select
          name="service"
          required
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white"
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Describe the issue or what you need help with…"
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
      >
        <Send size={16} />
        {loading ? "Sending…" : "Send Message"}
      </button>

      <p className="text-xs text-slate-400 text-center">
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
