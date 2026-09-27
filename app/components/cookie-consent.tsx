"use client";

import Link from "./site-link";
import { useEffect, useRef, useState } from "react";

const CLARITY_PROJECT_ID = "yoxwn5nx27";
const CONSENT_STORAGE_KEY = "medzperfect_cookie_consent";
const CONSENT_LIFETIME_MS = 180 * 24 * 60 * 60 * 1000;

type ConsentChoice = "accepted" | "declined";
type ClarityCommand = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    clarity?: ClarityCommand;
  }
}

function signalClarityConsent(choice: ConsentChoice) {
  window.clarity?.("consentv2", {
    ad_Storage: "denied",
    analytics_Storage: choice === "accepted" ? "granted" : "denied",
  });
}

function loadClarity() {
  // Preview sessions must not enter the production analytics project.
  if (!["medzperfect.com", "www.medzperfect.com"].includes(window.location.hostname)) return;
  if (window.clarity) {
    signalClarityConsent("accepted");
    return;
  }

  // Microsoft Clarity's installation snippet, intentionally invoked only
  // after the visitor has accepted analytics cookies.
  ((c: Window, l: Document, a: "clarity", r: "script", i: string) => {
    const queued: ClarityCommand = (...args: unknown[]) => {
      (queued.q = queued.q || []).push(args);
    };
    c[a] = c[a] || queued;
    const script = l.createElement(r);
    script.async = true;
    script.id = "microsoft-clarity";
    script.src = `https://www.clarity.ms/tag/${i}`;
    l.head.appendChild(script);
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);

  signalClarityConsent("accepted");
}

function readChoice(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (saved.version !== 1 || !Number.isFinite(saved.expiresAt) || saved.expiresAt <= Date.now()) return null;
    if (saved.choice !== "accepted" && saved.choice !== "declined") return null;
    // Fail closed when browser storage is read-only or unavailable.
    window.localStorage.setItem(CONSENT_STORAGE_KEY, raw);
    return saved.choice;
  } catch {
    return null;
  }
}

function unloadClarity() {
  signalClarityConsent("declined");
  // Clear first-party analytics storage even if the async SDK has not loaded.
  for (const name of ["_clck", "_clsk"]) {
    for (const domain of ["", window.location.hostname, ".medzperfect.com"]) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ""}`;
    }
  }
  try {
    window.sessionStorage.removeItem("_cltk");
  } catch {
    // Storage can be disabled independently of cookies.
  }
  if (!window.clarity) return;
  // Denying cookies alone allows cookieless tracking; reloading removes the SDK.
  window.location.reload();
}

export function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const bannerRef = useRef<HTMLElement>(null);
  const settingsRef = useRef<HTMLButtonElement>(null);
  const moveFocus = useRef(false);

  useEffect(() => {
    if (!moveFocus.current) return;
    (isOpen ? bannerRef.current : settingsRef.current)?.focus();
    moveFocus.current = false;
  }, [isOpen]);

  useEffect(() => {
    const synchronize = () => {
      const savedChoice = readChoice();
      setChoice(savedChoice);
      setIsOpen(savedChoice === null);
      if (savedChoice === "accepted") loadClarity();
      else unloadClarity();
    };
    synchronize();
    const onStorage = (event: StorageEvent) => {
      if (event.key === CONSENT_STORAGE_KEY || event.key === null) synchronize();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function saveChoice(nextChoice: ConsentChoice) {
    let stored = false;
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({
        version: 1,
        choice: nextChoice,
        expiresAt: Date.now() + CONSENT_LIFETIME_MS,
      }));
      stored = readChoice() === nextChoice;
    } catch {
      // The site and form remain usable with all optional tracking disabled.
    }
    moveFocus.current = true;
    setChoice(stored ? nextChoice : "declined");
    setIsOpen(false);

    if (nextChoice === "accepted" && stored) {
      loadClarity();
    } else unloadClarity();
  }

  return (
    <>
      {isOpen && (
        <section ref={bannerRef} tabIndex={-1} className="cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
          <div className="cookie-copy">
            <span>Privacy choice</span>
            <h2 id="cookie-title">A clear, minimal cookie setup.</h2>
            <p id="cookie-description">
              We use necessary browser storage to remember your preference. With your permission,
              Microsoft Clarity uses analytics cookies, heatmaps and masked session recordings to help
              us improve the experience. Advertising consent stays off.
            </p>
            <Link href="/cookie-policy">View cookie details</Link>
          </div>
          <div className="cookie-actions">
            <button className="button button-navy" type="button" onClick={() => saveChoice("accepted")}>Accept analytics</button>
            <button className="button cookie-essential-button" type="button" onClick={() => saveChoice("declined")}>Use essential only</button>
          </div>
        </section>
      )}
      {!isOpen && choice && (
        <button ref={settingsRef} className="cookie-settings-trigger" type="button" onClick={() => { moveFocus.current = true; setIsOpen(true); }} aria-label="Review cookie settings">
          Cookie settings
        </button>
      )}
    </>
  );
}
