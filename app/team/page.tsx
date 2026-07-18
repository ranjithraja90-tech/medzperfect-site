import Link from "next/link";
import { Footer, Header } from "../components/site-shell";

const specialists = [
  {
    initials: "KG",
    name: "Karthik Gopalraj",
    role: "VP, Customer Success",
    text: "A senior consultant focused on executive alignment, transition confidence and long-term account outcomes.",
    focus: "Stakeholder success · Solution shaping · Governance",
  },
  {
    initials: "RR",
    name: "Ranjith Raja R",
    role: "VP, Sales",
    text: "Leads US market development, partnership design and the bridge between client priorities and delivery accountability.",
    focus: "Growth strategy · Partnerships · Executive engagement",
  },
  {
    initials: "AD",
    name: "Abishek D",
    role: "VP, Learning & Development",
    text: "A senior trainer building role-based RCM learning, onboarding discipline and continuous quality calibration.",
    focus: "RCM academy · Coaching · Quality enablement",
  },
];

export default function TeamPage() {
  return (
    <div className="site-shell">
      <Header active="team" />
      <main>
        <section className="page-hero team-hero section-pad-sm">
          <div className="container page-hero-grid">
            <div>
              <span className="eyebrow eyebrow-light">Our leadership</span>
              <h1>Built by people who know what happens after a claim drops.</h1>
              <p>Operators, client leaders and capability builders united around one promise: make healthcare revenue work more visible, more controlled and more recoverable.</p>
            </div>
            <div className="team-hero-proof">
              <span>Leadership experience</span>
              <strong>50+<small> years</small></strong>
              <div><i /> RCM &amp; AI <i /> Product &amp; data <i /> Research &amp; L&amp;D</div>
            </div>
          </div>
        </section>

        <section className="founders-section section-pad">
          <div className="container section-heading">
            <span className="eyebrow">The operating core</span>
            <h2>Deep delivery experience. Human leadership.</h2>
            <p>Medzperfect&apos;s founders bring complementary strengths across client account leadership and scaled healthcare operations.</p>
          </div>
          <div className="container founders-grid">
            <article className="founder-card founder-anitha">
              <div className="founder-top">
                <div className="avatar avatar-anitha">AG</div>
                <div className="founder-title">
                  <span>Founder &amp; CEO</span>
                  <h2>Anitha G</h2>
                  <strong>Chief Executive Officer</strong>
                </div>
                <div className="founder-mark">01</div>
              </div>
              <p className="founder-lead">A client-facing RCM executive who combines account stewardship, delivery governance and hands-on revenue cycle leadership.</p>
              <div className="bio-grid">
                <div><span>18+ years</span><p>across AR, RCM operations, account leadership and delivery governance</p></div>
                <div><span>Client-first</span><p>executive ownership from discovery and transition through steady-state delivery</p></div>
              </div>
              <ul className="expertise-list">
                <li>Client needs, status governance and executive communication</li>
                <li>Agile project delivery and cross-functional coordination</li>
                <li>Process improvement, mentoring and performance accountability</li>
              </ul>
            </article>

            <article className="founder-card founder-monisha">
              <div className="founder-top">
                <div className="avatar avatar-monisha">MA</div>
                <div className="founder-title">
                  <span>Co-founder</span>
                  <h2>Monisha Anandakrishnan</h2>
                  <strong>VP, Operations</strong>
                </div>
                <div className="founder-mark">02</div>
              </div>
              <p className="founder-lead">A scale-focused operations leader with deep experience in people management, billing, AR governance and quality.</p>
              <div className="bio-grid">
                <div><span>200+ FTE</span><p>led across voice and non-voice operations</p></div>
                <div><span>95%+</span><p>prior team SLA and quality performance</p></div>
              </div>
              <ul className="expertise-list">
                <li>Healthcare operations, workforce planning and profitability</li>
                <li>ISO and SOX audit participation, BCP and process transition</li>
                <li>95%+ prior team SLA and quality performance</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="specialists-section section-pad">
          <div className="container two-column-intro">
            <div><span className="eyebrow">Specialist leadership</span><h2>Built to support the whole client journey.</h2></div>
            <p>From the first conversation to a stable delivery pod, each leader owns a distinct part of the partnership.</p>
          </div>
          <div className="container specialists-grid">
            {specialists.map((leader, index) => (
              <article className="specialist-card" key={leader.name}>
                <div className="specialist-head"><div className={`avatar avatar-${index + 3}`}>{leader.initials}</div><span>0{index + 3}</span></div>
                <h3>{leader.name}</h3>
                <strong>{leader.role}</strong>
                <p>{leader.text}</p>
                <div className="focus-line">{leader.focus}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="principles-section section-pad">
          <div className="container principles-grid">
            <div className="principles-copy">
              <span className="eyebrow eyebrow-light">How we lead</span>
              <h2>Close to the work. Clear with the client.</h2>
              <p>Our operating principles are designed for a boutique partner that earns trust through visibility and follow-through.</p>
              <Link className="button button-white" href="/contact">Meet the team <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="principle-list">
              <div><span>01</span><h3>Own the outcome</h3><p>Every metric has a leader, a next action and a due date.</p></div>
              <div><span>02</span><h3>Make work visible</h3><p>Clients see progress, risk and recovery—not just activity.</p></div>
              <div><span>03</span><h3>Coach the system</h3><p>Quality improves when people and process learn together.</p></div>
            </div>
          </div>
        </section>

        <section className="closing-cta section-pad-sm">
          <div className="container closing-card">
            <div><span className="eyebrow eyebrow-light">Work with us</span><h2>Meet the operators behind your revenue cycle.</h2><p>Start with a focused discovery call and a practical view of where Medzperfect can help.</p></div>
            <Link className="button button-white" href="/contact">Schedule a conversation <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
