"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const subject = encodeURIComponent(`Medzperfect revenue review request — ${name}`);
    const body = encodeURIComponent([
      `Name: ${name}`,
      `Work email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Organization: ${data.get("organization") || ""}`,
      `Interest: ${data.get("interest") || ""}`,
      "",
      `Message: ${data.get("message") || ""}`,
    ].join("\n"));
    setStatus("Your email app is opening with the request ready to send.");
    window.location.href = `mailto:hello@medzperfect.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>Free revenue review</span>
        <h2>Tell us where revenue is getting stuck.</h2>
        <p>We&apos;ll respond within one US business day.</p>
      </div>
      <div className="form-grid">
        <label>Full name<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
        <label>Work email<input name="email" type="email" autoComplete="email" required placeholder="you@practice.com" /></label>
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Include country code" /></label>
        <label>Organization<input name="organization" type="text" autoComplete="organization" placeholder="Practice or health system" /></label>
        <label className="full-field">What would you like to improve?
          <select name="interest" defaultValue="">
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
        <button className="button button-navy" type="submit">Request my review <span aria-hidden="true">↗</span></button>
        <p>By submitting, you agree to be contacted about Medzperfect services. Never include PHI in this form.</p>
      </div>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
