import { Footer, Header } from "../components/site-shell";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div className="site-shell">
      <Header active="contact" />
      <main>
        <section className="page-hero contact-hero section-pad-sm">
          <div className="container page-hero-grid">
            <div>
              <span className="eyebrow eyebrow-light">Let&apos;s talk revenue</span>
              <h1>A clearer revenue cycle starts with one conversation.</h1>
              <p>Share the operational problem—not patient data. We&apos;ll identify the first practical step toward cleaner claims, faster follow-up and better visibility.</p>
            </div>
            <div className="contact-promise">
              <span>What to expect</span>
              <ol><li><i>01</i> A 30-minute discovery call</li><li><i>02</i> A focused process review</li><li><i>03</i> A practical pilot recommendation</li></ol>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad">
          <div className="container contact-layout">
            <ContactForm />
            <aside className="contact-sidebar">
              <div className="contact-card">
                <span className="office-tag">United States</span>
                <h2>Portland office</h2>
                <address>1120 SW 5th Avenue<br />1st Floor<br />Portland, OR 97204<br />USA</address>
                <a href="tel:+13507858439"><i>↗</i><span><small>Call our US team</small>+1 (350) 785-8439</span></a>
              </div>
              <div className="contact-card">
                <span className="office-tag">India</span>
                <h2>Chennai delivery center</h2>
                <address>10/2, First Floor, Gandhi Nagar<br />Keelkattalai<br />Chennai 600117<br />India</address>
                <a href="tel:+919677896274"><i>↗</i><span><small>Call our India team</small>+91 96778 96274</span></a>
              </div>
              <div className="timezone-card">
                <div><span className="pulse-dot" /> US-hours coverage</div>
                <p>Planned overlap for Eastern, Central and Pacific client communication—with India delivery continuity.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="contact-trust section-pad-sm">
          <div className="container contact-trust-grid">
            <div><span>01</span><strong>No PHI in discovery</strong><p>We start with de-identified workflow and performance information.</p></div>
            <div><span>02</span><strong>BAA before access</strong><p>Protected information is handled only after the engagement controls are agreed.</p></div>
            <div><span>03</span><strong>Access by role</strong><p>Delivery access is designed around minimum-necessary job responsibilities.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
