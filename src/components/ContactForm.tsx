"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { site } from "@/lib/site";

type FormVariant = "inquiry" | "expert" | "quote";

const serviceOptions = [
  "Industrial Humidification",
  "Resort & Hospitality Fogging",
  "Outdoor Cooling & Misting",
  "Farm Climate Control",
  "Agricultural Misting",
  "Dust Suppression",
  "HVAC & Building Control",
  "Industrial Automation",
  "Other",
];

const config: Record<
  FormVariant,
  { subject: string; cta: string; fields: string[] }
> = {
  inquiry: {
    subject: "Quick Inquiry — Aura Air Engineering",
    cta: "Submit Inquiry",
    fields: ["name", "company", "email", "phone", "location", "service", "message"],
  },
  expert: {
    subject: "Talk to an Expert — Aura Air Engineering",
    cta: "Book Consultation",
    fields: ["name", "company", "email", "phone", "datetime", "service", "message"],
  },
  quote: {
    subject: "Quote Request — Aura Air Engineering",
    cta: "Get a Quote",
    fields: ["name", "company", "email", "phone", "location", "service", "area", "message"],
  },
};

const labels: Record<string, string> = {
  name: "Full Name",
  company: "Company Name",
  email: "Email Address",
  phone: "Phone Number (with country code)",
  location: "Country / Project Location",
  service: "Service Required",
  datetime: "Preferred Date & Time",
  area: "Area Size (sq. ft / m²)",
  message: "Tell us about your requirement",
};

const inputCls =
  "w-full rounded-md border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20";

export function ContactForm({ variant = "inquiry" }: { variant?: FormVariant }) {
  const { subject, cta, fields } = config[variant];
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const placeholderKeyMissing = site.formAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    data.append("access_key", site.formAccessKey);
    data.append("subject", subject);
    data.append("from_name", "Aura Air Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please email us directly.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please email us at " + site.email);
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-xl border border-line/70 bg-white p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-secondary" />
        <h3 className="mt-4 text-xl font-bold text-primary">Thank you — we&apos;ve received it.</h3>
        <p className="mt-2 max-w-md text-sm text-ink-soft">
          Our engineering team will respond within 24 hours with technically sound guidance for your
          application.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-secondary hover:text-secondary-600"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-line/70 bg-white p-6 shadow-card sm:p-8">
      {placeholderKeyMissing && (
        <p className="mb-5 rounded-md bg-surface px-4 py-3 text-xs text-ink-soft">
          ⚙️ Set <code className="font-mono">NEXT_PUBLIC_WEB3FORMS_KEY</code> to activate form
          delivery. Until then submissions won&apos;t be sent.
        </p>
      )}
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          const full = field === "message";
          if (field === "service") {
            return (
              <div key={field} className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-ink">{labels[field]}</label>
                <select name="service" required className={inputCls}>
                  <option value="">Select a service…</option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            );
          }
          if (field === "message") {
            return (
              <div key={field} className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-medium text-ink">{labels[field]}</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Include area size, application type, environmental conditions, and any specific performance requirements."
                  className={inputCls}
                />
              </div>
            );
          }
          return (
            <div key={field} className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
              <label className="text-xs font-medium text-ink">{labels[field]}</label>
              <input
                type={field === "email" ? "email" : field === "datetime" ? "text" : "text"}
                name={field}
                required={field !== "area"}
                className={inputCls}
              />
            </div>
          );
        })}
      </div>

      {status === "error" && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-secondary-600 hover:shadow-lift disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {cta}
      </button>
      <p className="mt-3 text-xs text-ink-soft">Our team will respond within 24 hours.</p>
    </form>
  );
}
