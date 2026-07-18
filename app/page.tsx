import Link from "next/link";
import { Footer, Header } from "./components/site-shell";

const services = [
  {
    number: "01",
    title: "End-to-end medical billing",
    text: "Charge entry, clean-claim submission, payment posting and reconciliation managed as one accountable workflow.",
  },
  {
    number: "02",
    title: "Denial management & appeals",
    text: "Root-cause analysis, payer-specific corrections and disciplined appeal follow-through to recover preventable revenue loss.",
  },
  {
    number: "03",
    title: "Accounts receivable follow-up",
    text: "Ageing-led work queues, documented payer follow-up and escalation paths that keep cash moving.",
  },
  {
    number: "04",
    title: "Eligibility & prior authorization",
    text: "Front-end verification and authorization tracking designed to reduce avoidable downstream rework.",
  },
  {
    number: "05",
    title: "Coding & charge review",
    text: "A structured quality layer for charge completeness, coding accuracy and documentation gaps before submission.",
  },
  {
    number: "06",
    title: "Performance intelligence",
    text: "Clear dashboards for clean-claim rate, denial reasons, AR ageing, productivity and next-best actions.",
  },
];

const controls = [
  {
    tag: "BAA ready",
    title: "HIPAA-aligned operating model",
    text: "BAA-led access, workforce training, minimum-necessary handling and documented incident response.",
  },
  {
    tag: "Secure delivery",
    title: "Managed VPN & controlled endpoints",
    text: "Role-based access, monitored devices, encrypted connections and a no-local-download delivery policy.",
  },
  {
    tag: "Certification roadmap",
    title: "ISO/IEC 27001 aligned",
    text: "An ISMS control blueprint covering risk, access reviews, vendor governance and business continuity.",
  },
  {
    tag: "AI governance",
    title: "Client-policy aligned AI",
    text: "AI use cases run only through approved tools, licensed environments and data-handling rules—with human review.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <Header active="home" />

      <main>
        <section className="hero section-pad">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light">
                <span className="pulse-dot" /> AI-enabled RCM partnership · Built around your workflows
              </div>
              <h1>
                Recover every dollar <span>you&apos;ve earned.</span>
              </h1>
              <p className="hero-lead">
                Medzperfect is an AI-enabled revenue cycle partner for US
                healthcare providers—combining experienced operators, client-approved
                technology and transparent reporting to improve every claim outcome.
              </p>
              <div className="hero-actions">
                <Link className="button button-white" href="/contact">
                  Book a free revenue review <span aria-hidden="true">↗</span>
                </Link>
                <a className="button button-ghost-light" href="#services">
                  Explore our services
                </a>
              </div>
              <div className="hero-assurance">
                <span>✓ Client-policy aligned AI</span>
                <span>✓ Zero-retention capable</span>
                <span>✓ BAA-ready engagement</span>
              </div>
            </div>

            <div className="revenue-panel" aria-label="Illustrative revenue operations dashboard">
              <div className="panel-head">
                <div>
                  <span className="panel-kicker">Revenue recovery</span>
                  <strong>Operations pulse</strong>
                </div>
                <span className="live-badge"><i /> Launch ready</span>
              </div>
              <div className="metric-pair">
                <div className="metric-card metric-primary">
                  <span>Clean-claim target</span>
                  <strong>96%+</strong>
                  <small>Quality-led submission</small>
                </div>
                <div className="metric-card">
                  <span>AR work queue</span>
                  <strong>24h</strong>
                  <small>Planned touch cadence</small>
                </div>
              </div>
              <div className="recovery-list">
                <div className="recovery-row">
                  <div className="recovery-icon">✓</div>
                  <div>
                    <strong>Claim validation complete</strong>
                    <span>Eligibility, coding &amp; documentation</span>
                  </div>
                  <b>98%</b>
                </div>
                <div className="recovery-row">
                  <div className="recovery-icon recovery-icon-green">↗</div>
                  <div>
                    <strong>Denial recovery plan</strong>
                    <span>Root cause mapped to payer action</span>
                  </div>
                  <b>Ready</b>
                </div>
              </div>
              <div className="panel-chart">
                <div className="chart-copy">
                  <span>Revenue velocity</span>
                  <strong>Fewer denials. Faster cash.</strong>
                </div>
                <div className="bars" aria-hidden="true">
                  <i /><i /><i /><i /><i /><i /><i />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-ribbon" aria-label="Compliance readiness">
          <div className="container trust-row">
            <span className="trust-label">Designed for confidence</span>
            <span className="trust-item"><i>✓</i> HIPAA &amp; BAA ready</span>
            <span className="trust-item"><i>◇</i> ISO 27001 aligned</span>
            <span className="trust-item"><i>◎</i> Zero-retention workflows</span>
            <span className="trust-item"><i>⌁</i> Client-approved AI</span>
          </div>
        </section>

        <section className="proof section-pad-sm">
          <div className="container">
            <div className="proof-grid">
              <div className="proof-intro">
                <span className="eyebrow">Operator-led from day one</span>
                <h2>Experience that arrives before the first claim.</h2>
              </div>
              <div className="stat-block">
                <strong>50<span>+</span></strong>
                <p>combined leadership years across RCM, AI, product, data, research and L&amp;D</p>
              </div>
              <div className="stat-block">
                <strong>200<span>+</span></strong>
                <p>FTE led across complex voice and non-voice delivery</p>
              </div>
              <div className="stat-block">
                <strong>95<span>%+</span></strong>
                <p>prior SLA and quality performance track record</p>
              </div>
              <div className="stat-block stat-block-accent">
                <strong>$3.2<span>M+</span></strong>
                <p>indicative revenue-recovery scope influenced*</p>
              </div>
            </div>
            <p className="metric-note">
              *Launch estimate derived from leadership tenure and prior portfolio scale;
              not presented as Medzperfect client results.
            </p>
          </div>
        </section>

        <section className="challenge-section section-pad">
          <div className="container two-column-intro">
            <div>
              <span className="eyebrow">The revenue problem</span>
              <h2>Revenue leaks don&apos;t stay small.</h2>
            </div>
            <p>
              Every rejected claim, missed authorization and ageing balance adds
              pressure to your practice. We turn fragmented follow-up into a visible,
              accountable recovery system.
            </p>
          </div>
          <div className="container challenge-grid">
            <article className="challenge-card">
              <span>01</span>
              <h3>Denials repeat</h3>
              <p>Recurring payer and documentation issues stay hidden without root-cause ownership.</p>
              <div className="challenge-line"><i className="line-low" /><i className="line-high" /></div>
            </article>
            <article className="challenge-card">
              <span>02</span>
              <h3>AR keeps ageing</h3>
              <p>Inconsistent touch cadence lets recoverable balances cross costly ageing bands.</p>
              <div className="age-bands"><i>0–30</i><i>31–60</i><i>61–90</i><i>90+</i></div>
            </article>
            <article className="challenge-card">
              <span>03</span>
              <h3>Reporting lacks action</h3>
              <p>Static reports explain yesterday. Operators need the next payer, claim and action.</p>
              <div className="mini-checks"><i>✓ Owner</i><i>✓ Next action</i><i>✓ Due date</i></div>
            </article>
          </div>
        </section>

        <section id="services" className="services-section section-pad">
          <div className="container section-heading centered-heading">
            <span className="eyebrow">What we do</span>
            <h2>One revenue cycle. One accountable team.</h2>
            <p>
              Modular support for a specific recovery challenge—or a managed billing
              operation designed around your practice.
            </p>
          </div>
          <div className="container services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-number">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href="/contact">Discuss this service <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="recovery-section section-pad">
          <div className="container recovery-grid">
            <div className="recovery-copy">
              <span className="eyebrow eyebrow-light">Our specialty</span>
              <h2>Denial recovery that fixes the source—not just the symptom.</h2>
              <p>
                We pair experienced AR follow-up with operational feedback loops, so
                recovered revenue becomes a cleaner front-end process for the next claim.
              </p>
              <Link className="text-link-light" href="/contact">
                Start with a denial audit <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <ol className="recovery-steps">
              <li>
                <span>01</span>
                <div><strong>Find the pattern</strong><p>Segment denials by payer, code, reason, value and ageing.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><strong>Recover with evidence</strong><p>Correct, appeal and document every payer touch and outcome.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><strong>Prevent the repeat</strong><p>Feed root causes into coding, eligibility and documentation controls.</p></div>
              </li>
            </ol>
          </div>
        </section>

        <section className="ai-section section-pad">
          <div className="container ai-layout">
            <div className="ai-intro">
              <span className="eyebrow">AI-enabled RCM</span>
              <h2>Practical intelligence inside the revenue workflow.</h2>
              <p>
                We apply AI where it helps operators decide and act faster—within
                each client&apos;s AI policy, licensed toolset, security controls and
                approval model.
              </p>
            </div>
            <div className="ai-policy-card">
              <span>ZERO-RETENTION CAPABLE</span>
              <h3>Your tools. Your tenant. Your rules.</h3>
              <p>
                Where customer licensing supports it, workflows can run inside
                approved environments with zero retention, no model training and no
                local storage. Otherwise, AI use is limited to de-identified inputs
                and policy-approved processes.
              </p>
              <div><i>✓</i> Human review before consequential action</div>
            </div>
          </div>
          <div className="container ai-usecase-grid">
            <article><span>01</span><h3>Denial intelligence</h3><p>Cluster payer, CARC/RARC and documentation patterns to surface root causes and draft evidence-led next actions.</p><small>Pattern detection · Appeal support</small></article>
            <article><span>02</span><h3>AR worklist prioritization</h3><p>Rank follow-up using balance, ageing, payer behavior, prior touches, filing limits and client-defined recovery rules.</p><small>Next-best action · Queue focus</small></article>
            <article><span>03</span><h3>Remittance &amp; workflow quality</h3><p>Assist with ERA/EOB summarization, note structuring and exception identification while operators validate every output.</p><small>Quality checks · Structured notes</small></article>
            <article><span>04</span><h3>Revenue performance intelligence</h3><p>Turn operational data into trends, risk signals and recommended actions for denials, clean claims, ageing and productivity.</p><small>Actionable reporting · Forecasting</small></article>
          </div>
        </section>

        <section className="compliance-section section-pad">
          <div className="container compliance-layout">
            <div className="compliance-intro">
              <span className="eyebrow eyebrow-light">Security first. At every step.</span>
              <h2>Built for compliance. Designed for confidence.</h2>
              <p>
                Our launch control model is designed for US healthcare data handling,
                with certification and independent-assurance workstreams built into the
                scale-up plan.
              </p>
              <div className="compliance-seal">
                <strong>PHI</strong><span>Protected by design</span>
              </div>
            </div>
            <div className="controls-grid">
              {controls.map((control) => (
                <article className="control-card" key={control.title}>
                  <span>{control.tag}</span>
                  <h3>{control.title}</h3>
                  <p>{control.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="container compliance-disclaimer">
            Compliance-ready describes the designed operating model and roadmap;
            certifications are subject to implementation, audit and independent validation.
          </div>
        </section>

        <section className="leadership-preview section-pad">
          <div className="container leadership-preview-grid">
            <div>
              <span className="eyebrow">Leadership</span>
              <h2>Operators, not observers.</h2>
              <p>
                Anitha and Monisha bring hands-on experience across client delivery,
                AR, medical billing, transition and scaled operations—supported by a
                leadership collective spanning AI-enabled RCM, product engineering,
                databases, ETL, research, customer success, sales and L&amp;D.
              </p>
              <Link className="button button-navy" href="/team">Meet the leadership team</Link>
            </div>
            <div className="leader-stack">
              <div className="leader-chip leader-chip-one"><i>AG</i><div><strong>Anitha G</strong><span>Founder &amp; CEO</span></div></div>
              <div className="leader-chip leader-chip-two"><i>MA</i><div><strong>Monisha A</strong><span>RCM operations &amp; quality</span></div></div>
              <div className="leader-chip leader-chip-three"><i>50+</i><div><strong>Combined leadership years</strong><span>RCM, AI, product, data, research &amp; L&amp;D</span></div></div>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad-sm">
          <div className="container faq-layout">
            <div>
              <span className="eyebrow">Frequently asked</span>
              <h2>Before we begin.</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>Can Medzperfect work with our existing EHR or PM system?<span>+</span></summary>
                <p>Yes. Discovery maps your current platform, payer mix, access model and reporting needs before transition planning begins.</p>
              </details>
              <details>
                <summary>How does Medzperfect protect PHI in remote workflows?<span>+</span></summary>
                <p>The operating blueprint uses client-approved environments, managed VPN access, role-based permissions, controlled endpoints, workforce policies and BAA-led data handling.</p>
              </details>
              <details>
                <summary>Do we have to outsource the full revenue cycle?<span>+</span></summary>
                <p>No. Start with a focused denial, AR or payment-posting pod and expand only when the model proves value.</p>
              </details>
              <details>
                <summary>How quickly can a team be mobilized?<span>+</span></summary>
                <p>A pilot pod can typically be planned in two to four weeks after access, workflow and compliance requirements are agreed.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="closing-cta section-pad-sm">
          <div className="container closing-card">
            <div>
              <span className="eyebrow eyebrow-light">Start with clarity</span>
              <h2>See where revenue is getting stuck.</h2>
              <p>Bring one ageing report or denial sample. We&apos;ll turn it into a practical first-step recovery plan.</p>
            </div>
            <Link className="button button-white" href="/contact">Book a free revenue review <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
