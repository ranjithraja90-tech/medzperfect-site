import type { Metadata } from "next";
import Link from "../components/site-link";
import { Footer, Header } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Medzperfect uses necessary browser storage and optional Microsoft Clarity analytics cookies.",
};

const clarityCookies = [
  ["_clck", "First-party analytics", "Keeps a pseudonymous Clarity visitor ID and preferences for this website."],
  ["_clsk", "First-party analytics", "Connects page views into one Clarity session recording."],
];

export default function CookiePolicyPage() {
  return (
    <div className="site-shell">
      <Header active="home" />
      <main>
        <section className="policy-hero section-pad-sm">
          <div className="container policy-hero-copy">
            <span className="eyebrow eyebrow-light">Privacy by choice</span>
            <h1>Cookie policy</h1>
            <p>Medzperfect uses a deliberately limited setup: necessary preference storage and optional Microsoft Clarity analytics only.</p>
          </div>
        </section>

        <section className="policy-section section-pad-sm">
          <div className="container policy-layout">
            <aside className="policy-summary">
              <span>Last updated</span>
              <strong>September 27, 2026</strong>
              <p>Basic preference storage is always available. Microsoft Clarity is optional. We install no separate advertising or social-media tracking tags, and we deny advertising storage consent.</p>
            </aside>
            <div className="policy-content">
              <section>
                <h2>What is stored before you choose</h2>
                <p>
                  We do not start Microsoft Clarity before you make a choice. Your selection is saved in your browser&apos;s
                  local storage under <code>medzperfect_cookie_consent</code> so the site can remember whether you accepted
                  or declined analytics, together with a preference version and expiry date. This is browser storage, not a tracking cookie.
                  We ask again after 180 days; you can clear site data or change your preference sooner. If storage is unavailable,
                  optional tracking stays off. We do not set other first-party cookies for basic site functionality.
                </p>
              </section>

              <section>
                <h2>Optional Microsoft Clarity analytics</h2>
                <p>
                  If you select “Accept analytics,” Microsoft Clarity may process pseudonymous usage information such as
                  page views, clicks, scrolling, browser and device details, and approximate location. We and Microsoft process these
                  interactions to create heatmaps and masked session recordings that help us improve usability. Advertising storage
                  consent is denied. The contact form and its contents are explicitly masked from Clarity recordings.
                </p>
                <div className="cookie-table-wrap">
                  <table className="cookie-table">
                    <thead><tr><th>Cookie</th><th>Category</th><th>Purpose</th></tr></thead>
                    <tbody>
                      {clarityCookies.map(([name, category, purpose]) => <tr key={name}><td><code>{name}</code></td><td>{category}</td><td>{purpose}</td></tr>)}
                    </tbody>
                  </table>
                </div>
                <p>
                  Clarity may also store <code>_cltk</code> in session storage to identify the current browser tab.
                  This optional analytics identifier lasts for the tab session and is removed when you withdraw analytics consent.
                </p>
                <p>
                  Microsoft also documents third-party cookies (CLID, ANONCHK, MR, MUID and SM) used across its services for browser
                  recognition and synchronization. MUID can be used by Microsoft for advertising, analytics and operational purposes.
                  Their presence depends on Microsoft&apos;s implementation, browser settings and consent. We request analytics only
                  and do not enable advertising consent. For current cookie details and how Microsoft uses data, see the{" "}
                  <a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies" target="_blank" rel="noreferrer">Clarity cookie documentation</a>{" "}
                  and <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noreferrer">Microsoft Privacy Statement</a>.
                </p>
              </section>

              <section>
                <h2>Your choice and control</h2>
                <p>
                  Select “Use essential only” to keep Clarity unloaded. Select “Cookie settings” at the bottom of any page
                  to review or change your choice. Withdrawing analytics consent refreshes the page to unload Clarity, removes its
                  first-party analytics cookies and tab identifier, and requests that the SDK clear its cookies.
                  You can also remove stored preferences and cookies through your browser settings.
                </p>
                <p>For privacy or partnership enquiries, email <a href="mailto:grow@medzperfect.com">grow@medzperfect.com</a>.</p>
              </section>

              <section>
                <h2>Contact requests and external services</h2>
                <p>The contact form sends the details you choose to submit to our form-delivery provider, FormSubmit, only when you submit it.
                  Its delivery and anti-abuse processing is separate from optional Clarity analytics. Do not submit patient information.
                  External links, including social-media sites, follow those providers&apos; policies when you visit them.</p>
              </section>

              <Link className="button button-navy" href="/">Return to the home page</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
