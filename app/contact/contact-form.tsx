"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { validatePhoneNumber } from "./phone-validation";

const countryCodes = [
  { country: "United States", code: "+1", short: "US" },
  { country: "Canada", code: "+1", short: "CA" },
  { country: "United Kingdom", code: "+44", short: "UK" },
  { country: "India", code: "+91", short: "IN" },
  { country: "Australia", code: "+61", short: "AU" },
  { country: "United Arab Emirates", code: "+971", short: "AE" },
  { country: "Singapore", code: "+65", short: "SG" },
  { country: "Germany", code: "+49", short: "DE" },
  { country: "France", code: "+33", short: "FR" },
  { country: "Ireland", code: "+353", short: "IE" },
  { country: "Netherlands", code: "+31", short: "NL" },
  { country: "New Zealand", code: "+64", short: "NZ" },
  { country: "Philippines", code: "+63", short: "PH" },
  { country: "South Africa", code: "+27", short: "ZA" },
  { country: "Mexico", code: "+52", short: "MX" },
];

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const countryCode = countryCodes.find(({ short }) => short === selectedCountry)?.code ?? "+1";

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setPhoneNumber(value);
    if (phoneError) setPhoneError(validatePhoneNumber(value, countryCode));
  }

  function handleCountryCodeChange(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    const nextCountryCode = countryCodes.find(({ short }) => short === value)?.code ?? "+1";
    setSelectedCountry(value);
    if (phoneNumber) setPhoneError(validatePhoneNumber(phoneNumber, nextCountryCode));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const validationMessage = validatePhoneNumber(phoneNumber, countryCode);
    if (validationMessage) {
      setPhoneError(validationMessage);
      setStatus("Please check the phone number before sending your request.");
      form.querySelector<HTMLInputElement>("#phone-number")?.focus();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") || "");
    data.set("country_code", `${selectedCountry} ${countryCode}`);
    data.set("phone", `${countryCode} ${phoneNumber.trim()}`);
    data.delete("phone_number");
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
      setSelectedCountry("US");
      setPhoneNumber("");
      setPhoneError("");
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
        <div className="phone-field">
          <span className="form-label" id="phone-label">Phone number</span>
          <div className="phone-input-group">
            <select
              aria-label="Country calling code"
              name="country_code"
              value={selectedCountry}
              onChange={handleCountryCodeChange}
            >
              {countryCodes.map(({ country, code, short }) => (
                <option key={`${short}-${code}`} value={short}>{short} {code} — {country}</option>
              ))}
            </select>
            <input
              id="phone-number"
              aria-describedby="phone-help phone-error"
              aria-invalid={phoneError ? "true" : "false"}
              aria-labelledby="phone-label"
              name="phone_number"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              required
              maxLength={22}
              pattern="[0-9() .-]+"
              title="Use numbers, spaces, parentheses, periods, or hyphens."
              placeholder="541 722 2194"
              value={phoneNumber}
              onChange={handlePhoneChange}
              onBlur={() => setPhoneError(validatePhoneNumber(phoneNumber, countryCode))}
            />
          </div>
          <small className="phone-help" id="phone-help">Choose a country code, then enter at least 7 digits.</small>
          <small className="field-error" id="phone-error" aria-live="polite">{phoneError}</small>
        </div>
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
