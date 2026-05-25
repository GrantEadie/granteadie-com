import { LetterShell } from '../../_resume/LetterShell';

export const metadata = {
  title: 'Grant Eadie — Marketing Resume',
};

export default function AllPointsResume() {
  return (
    <LetterShell label="Marketing Resume · US Letter" sheetColor="#ffffff" frameColor="#e7e7e7">
      <article className="rd-page">
        <header className="rd-header">
          <div>
            <div className="rd-name">Grant Eadie</div>
            <div className="rd-title">Director of Digital Marketing</div>
          </div>
          <div className="rd-meta">
            <a href="mailto:me@granteadie.com">me@granteadie.com</a>
            <br />
            Bellingham, WA
            <br />
            <a href="https://granteadie.com">granteadie.com</a>
          </div>
        </header>

        <div className="rd-grid">
          <aside className="rd-side">
            <div className="rd-side-block">
              <h3>Expertise</h3>
              <ul>
                <li>SEO Strategy &amp; Technical SEO</li>
                <li>GA4 &amp; Search Console</li>
                <li>Content Strategy &amp; Editorial Calendars</li>
                <li>Conversion Rate Optimization</li>
                <li>Lead Capture &amp; CRM Flows</li>
                <li>Marketing Automation</li>
                <li>Vendor &amp; Project Direction</li>
              </ul>
            </div>

            <div className="rd-side-block">
              <h3>AI Workflow</h3>
              <ul>
                <li>Custom Claude agents for project ops, versioning, and reporting across clients</li>
                <li>AI-driven technical SEO audits</li>
                <li>Search Console monitoring agents flagging rank drops</li>
                <li>First-draft long-form content via Z.ai, human-edited</li>
              </ul>
              <div className="rd-small" style={{ marginTop: '6px' }}>
                Daily stack: Claude · Codex · Z.ai · Pi
              </div>
            </div>

            <div className="rd-side-block">
              <h3>Tech Stack</h3>
              <ul>
                <li>WordPress, Astro, Next.js</li>
                <li>React, TypeScript, PHP, Node</li>
                <li>GA4, GSC, GTM</li>
                <li>Mailchimp, Stripe, HubSpot</li>
                <li>Figma, Adobe Creative Suite</li>
              </ul>
            </div>

            <div className="rd-side-block">
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>B.A. Computer Science</strong>
                  <br />
                  <span className="rd-small">+ Violin/Viola Performance</span>
                  <br />
                  <span className="rd-small">Western Washington University, 2011–2015</span>
                </li>
              </ul>
            </div>
          </aside>

          <main className="rd-main">
            <div className="rd-block">
              <h3>Profile</h3>
              <p className="rd-about">
                Marketing-minded developer who turns websites into qualified-lead
                engines. Agency owner directing developers, designers, and content.
                Ex-startup engineer on a Chrome extension that reached 500,000 users.
                Unusually deep in modern AI workflow.
              </p>
            </div>

            <div className="rd-block">
              <h3>Experience</h3>

              <div className="rd-job">
                <div className="rd-job-head">
                  <span className="rd-job-co">Rare Dimension</span>
                  <span className="rd-job-dates">2019 — Present</span>
                </div>
                <div className="rd-job-role">Co-founder, Lead Developer</div>
                <ul>
                  <li>
                    Direct a small agency of designers, developers, and content
                    collaborators building websites as growth and lead-generation channels
                  </li>
                  <li>
                    Average 2x+ organic traffic growth across 9+ client sites,
                    with top-of-page rankings in target markets
                  </li>
                  <li>
                    Lead capture, form-to-CRM flows, and newsletter programs built
                    into every engagement; manage editorial calendars for ongoing clients
                  </li>
                  <li>
                    Build custom Claude/AI agents for project management, versioning,
                    and reporting across all active client work
                  </li>
                  <li>
                    Own technical SEO, GA4 setup, and Search Console analysis on every
                    client site
                  </li>
                </ul>
              </div>

              <div className="rd-job">
                <div className="rd-job-head">
                  <span className="rd-job-co">Workona</span>
                  <span className="rd-job-dates">2022 — 2024</span>
                </div>
                <div className="rd-job-role">Software Engineer</div>
                <ul>
                  <li>
                    Engineering and marketing contributor on a Chrome extension
                    that scaled to 500,000+ users
                  </li>
                  <li>
                    Shipped product features, ran growth experiments, and managed
                    backlog alongside the core team
                  </li>
                  <li>
                    Worked across the code and marketing surface, with direct
                    visibility into what moved users and what didn&apos;t
                  </li>
                </ul>
              </div>

              <div className="rd-job">
                <div className="rd-job-head">
                  <span className="rd-job-co">Smiling Woods Yurts</span>
                  <span className="rd-job-dates">2019 — 2022</span>
                </div>
                <div className="rd-job-role">Development, Design, Communications</div>
                <ul>
                  <li>
                    Designed and built a custom enterprise system for customer
                    pipeline and project management
                  </li>
                  <li>
                    Rebuilt the company website with staff-editable functionality
                    for pricing, photography, and customer outreach
                  </li>
                  <li>
                    Led a full brand refresh including logo and visual identity
                  </li>
                </ul>
              </div>
            </div>

            <div className="rd-coda">
              <strong>Previously:</strong> Full-time touring musician (2014–2019).
              Solo records and collaborations, toured internationally.
            </div>
          </main>
        </div>
      </article>

      <style>{`
        :root {
          --rd-ink: #111111;
          --rd-muted: #6b6b6b;
          --rd-rule: #d8d8d8;
          --rd-accent: #2A09F3;
        }

        .rd-page {
          width: 8.5in;
          min-height: 11in;
          background: #ffffff;
          box-shadow: 0 6px 32px rgba(0, 0, 0, 0.18);
          padding: 0.6in 0.65in;
          color: var(--rd-ink);
          display: flex;
          flex-direction: column;
        }

        .rd-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--rd-ink);
          margin-bottom: 26px;
        }
        .rd-name {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 800;
          font-size: 36px;
          letter-spacing: -0.01em;
          line-height: 1;
          text-transform: uppercase;
        }
        .rd-title {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--rd-accent);
          margin-top: 8px;
        }
        .rd-meta {
          text-align: right;
          font-size: 11px;
          line-height: 1.7;
          color: var(--rd-muted);
          font-variant-numeric: tabular-nums;
        }
        .rd-meta a {
          color: var(--rd-muted);
          text-decoration: none;
        }
        .rd-meta a:hover { color: var(--rd-accent); }

        .rd-grid {
          display: grid;
          grid-template-columns: 1fr 2.05fr;
          gap: 28px;
          flex: 1;
        }

        .rd-side h3,
        .rd-main h3 {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--rd-ink);
          margin-bottom: 8px;
          padding-bottom: 5px;
          border-bottom: 1px solid var(--rd-rule);
        }
        .rd-side-block { margin-bottom: 18px; }
        .rd-side-block:last-child { margin-bottom: 0; }
        .rd-side ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 11px;
          line-height: 1.55;
          color: var(--rd-ink);
        }
        .rd-side li { margin-bottom: 4px; }
        .rd-small {
          font-size: 10.5px;
          color: var(--rd-muted);
          line-height: 1.5;
        }

        .rd-block { margin-bottom: 18px; }
        .rd-block:last-child { margin-bottom: 0; }

        .rd-about {
          font-size: 12px;
          line-height: 1.6;
          color: var(--rd-ink);
        }

        .rd-job {
          margin-bottom: 14px;
          break-inside: avoid;
        }
        .rd-job:last-child { margin-bottom: 0; }
        .rd-job-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 2px;
          gap: 12px;
        }
        .rd-job-co {
          font-weight: 700;
          font-size: 12.5px;
          letter-spacing: 0.01em;
        }
        .rd-job-dates {
          font-size: 10.5px;
          color: var(--rd-muted);
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .rd-job-role {
          font-size: 11px;
          color: var(--rd-accent);
          font-weight: 500;
          letter-spacing: 0.04em;
          margin-bottom: 5px;
        }
        .rd-job ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 11px;
          line-height: 1.55;
        }
        .rd-job li {
          position: relative;
          padding-left: 12px;
          margin-bottom: 3px;
        }
        .rd-job li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 7px;
          width: 4px;
          height: 1px;
          background: var(--rd-accent);
        }

        .rd-coda {
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px dashed var(--rd-rule);
          font-size: 10.5px;
          color: var(--rd-muted);
          line-height: 1.5;
        }
        .rd-coda strong {
          color: var(--rd-ink);
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        @media print {
          .rd-page {
            box-shadow: none;
          }
        }
      `}</style>
    </LetterShell>
  );
}
