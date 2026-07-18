import Link from "next/link";

type ActivePage = "home" | "team" | "contact";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand-logo${inverse ? " brand-logo-inverse" : ""}`} href="/" aria-label="Medzperfect home">
      <img src="/medzperfect-mark.svg" alt="" width="46" height="46" />
      <span>
        <strong><b>Medz</b>perfect</strong>
        <small>RCM &amp; MEDICAL BILLING</small>
      </span>
    </Link>
  );
}

export function Header({ active }: { active: ActivePage }) {
  const nav = [
    { href: "/#services", label: "Services", id: "services" },
    { href: "/team", label: "Leadership", id: "team" },
    { href: "/contact", label: "Contact", id: "contact" },
  ];

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>AI-enabled revenue cycle partnership</span>
          <div><a href="tel:+15417222194">US +1 541 7222194</a></div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <BrandLogo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map((item) => (
              <Link className={active === item.id ? "active" : ""} href={item.href} key={item.label}>{item.label}</Link>
            ))}
          </nav>
          <Link className="button button-navy header-cta" href="/contact">Free revenue review <span aria-hidden="true">↗</span></Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              {nav.map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}
              <Link className="button button-navy" href="/contact">Free revenue review</Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandLogo inverse />
          <p>AI-enabled medical billing, AR and denial recovery for US healthcare providers—governed by your workflows, tools and policies.</p>
          <div className="footer-status"><span>●</span> Now onboarding pilot partnerships</div>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/#services">Services</Link>
          <Link href="/team">Leadership</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>US office</h3>
          <address>1120 SW 5th Avenue<br />1st Floor<br />Portland, OR 97204, USA</address>
          <a href="tel:+15417222194">+1 541 7222194</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Medzperfect. All rights reserved.</span>
        <span>Compliance readiness is subject to implementation and independent validation.</span>
      </div>
    </footer>
  );
}
