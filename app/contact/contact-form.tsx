"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    data.append("_subject", `Medzperfect revenue review request — ${name}`);
    data.append("_template", "table");
    data.append("_captcha", "false");
    setIsSubmitting(true);
    setStatus("Sending your request…");

    try {
      const response = await fetch("https://formsubmit.co/ajax/ranjith.raja90@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json().catch(() => ({ success: response.ok }));
      if (!response.ok || result.success === false) throw new Error("Submission failed");
      form.reset();
      setStatus("Thank you. Your request has been sent to the Medzperfect team.");
    } catch {
      setStatus("We couldn't send the request. Please call +1 541 7222194 and we'll help directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" action="https://formsubmit.co/ranjith.raja90@gmail.com" method="POST" onSubmit={handleSubmit} aria-busy={isSubmitting}>
      <div className="form-heading">
        <span>Free revenue review</span>
        <h2>Tell us where revenue is getting stuck.</h2>
        <p>We&apos;ll respond within one US business day.</p>
      </div>
      <div className="form-grid">
        <input className="form-honeypot" name="_honey" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <label>Full name<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
        <label>Work email<input name="email" type="email" autoComplete="email" required placeholder="you@practice.com" /></label>
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Include country code" /></label>
        <label>Organization<input name="organization" type="text" autoComplete="organization" placeholder="Practice or health system" /></label>
        <label className="full-field">What would you like to improve?
          <select name="interest" defaultValue="" required>
            <option value="" disabled>Select an area</option>
            <option>Full-cycle medical billing</option>
            <option>Denial management & appeals</option>
            <option>AR follow-up</option>
            <option>Eligibility & prior authorization</option>
            <option>Coding & charge review</option>
            <option>Performance reporting</option>
          </select>
        </label>
        <label className="full-field">A little context<textarea name="message" rows={5} placeholder="Tell us about your current challenge, payer mix or AR ageing. Please do not include patient information." /></label>
      </div>
      <div className="form-footer">
        <button className="button button-navy" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Request my review"} <span aria-hidden="true">↗</span></button>
        <p>By submitting, you agree to be contacted about Medzperfect services. Never include PHI in this form.</p>
      </div>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
