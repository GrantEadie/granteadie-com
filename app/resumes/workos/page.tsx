import { LetterShell } from '../../_resume/LetterShell';

export const metadata = {
  title: 'Grant Eadie — Brand Designer',
};

export default function WorkOSResume() {
  return (
    <LetterShell label="Brand Designer · US Letter" sheetColor="#ffffff" frameColor="#0a0a0a">
      <article className="wo-page">
        <header className="wo-head">
          <div className="wo-head-left">
            <div className="wo-name">
              Grant Eadie<span className="wo-dot" />
            </div>
            <div className="wo-role">Brand Designer</div>
          </div>
          <div className="wo-head-right">
            <a href="https://granteadie.com/portfolio">granteadie.com/portfolio</a>
            <br />
            <a href="mailto:me@granteadie.com">me@granteadie.com</a>
            <br />
            Bellingham, WA · Remote
          </div>
        </header>

        <section className="wo-section">
          <div className="wo-label">Profile</div>
          <p className="wo-profile">
            Brand designer and developer with twelve years across identity,
            editorial, motion, and web. I design and ship full digital systems
            for service businesses, nonprofits, and venue clients, then write
            the production code. The design-to-build handoff doesn&apos;t
            break when the designer is also the developer. AI is a working
            part of the practice, not an afterthought.
          </p>
        </section>

        <hr className="wo-rule" />

        <section className="wo-section">
          <div className="wo-label">Selected Work</div>

          <div className="wo-jobs">
            <article className="wo-job">
              <header className="wo-job-head">
                <div className="wo-job-co">Rare Dimension</div>
                <div className="wo-job-dates">2019 — Present</div>
              </header>
              <div className="wo-job-role">Co-founder, Designer &amp; Developer</div>
              <ul className="wo-list">
                <li>
                  Brand identity systems (logo, typography, color, voice) and
                  full design systems for service, nonprofit, and venue clients
                </li>
                <li>
                  Lead the design and build of client websites end-to-end; own the
                  pipeline from comp to component to production
                </li>
                <li>
                  Maintain reusable UI patterns, motion conventions, and accessibility
                  baselines across the agency&apos;s client work
                </li>
                <li>
                  Editorial design for Methow Made Magazine; social-first
                  creative and motion graphics for ongoing client campaigns
                </li>
                <li>
                  Build and maintain custom Claude agents for design ops,
                  brand QA, content versioning, and reporting
                </li>
              </ul>
            </article>

            <article className="wo-job">
              <header className="wo-job-head">
                <div className="wo-job-co">Workona</div>
                <div className="wo-job-dates">2022 — 2024</div>
              </header>
              <div className="wo-job-role">Software Engineer · Browser Extension</div>
              <ul className="wo-list">
                <li>
                  Shipped product features on a Chrome extension that scaled
                  to 500,000+ users
                </li>
                <li>
                  Ran experiments, managed the ticket backlog, and worked
                  across the design / engineering surface in a fast product
                  environment
                </li>
                <li>
                  Direct experience inside the dev-tool world your customers
                  (Vercel, Plaid, OpenAI) live in
                </li>
              </ul>
            </article>

            <article className="wo-job">
              <header className="wo-job-head">
                <div className="wo-job-co">Independent Practice</div>
                <div className="wo-job-dates">2014 — 2019</div>
              </header>
              <div className="wo-job-role">Identity, posters, music industry creative</div>
              <ul className="wo-list">
                <li>
                  Built the visual identity for Manatee Commune (released on
                  Bastard Jazz Records) and OKBBDD, my DJ duo with Matt Larsen
                </li>
                <li>
                  Brand identity, posters, and visual systems for touring
                  musicians and two music festivals
                </li>
              </ul>
            </article>
          </div>
        </section>

        <hr className="wo-rule" />

        <section className="wo-foot">
          <div>
            <div className="wo-foot-label">Toolbox</div>
            <ul className="wo-foot-list">
              <li>Adobe Photoshop, Illustrator, InDesign</li>
              <li>Adobe After Effects, Premiere</li>
              <li>Figma (since launch)</li>
            </ul>
          </div>

          <div>
            <div className="wo-foot-label">Design + Code</div>
            <ul className="wo-foot-list">
              <li>HTML, CSS, Tailwind</li>
              <li>React, Next.js, TypeScript</li>
              <li>Design systems &amp; component libraries</li>
            </ul>
          </div>

          <div>
            <div className="wo-foot-label">AI Workflow</div>
            <ul className="wo-foot-list">
              <li>Custom Claude agents for ops &amp; QA</li>
              <li>Claude, Codex, Z.ai daily</li>
              <li>AI-assisted exploration &amp; production</li>
            </ul>
          </div>

          <div>
            <div className="wo-foot-label">Education</div>
            <ul className="wo-foot-list">
              <li>B.A. Computer Science</li>
              <li>+ Violin/Viola Performance</li>
              <li>Western Washington University, 2011–2015</li>
            </ul>
          </div>
        </section>
      </article>

      <style>{`
        :root {
          --wo-ink: #0a0a0a;
          --wo-muted: #6e6e6e;
          --wo-hair: #e6e6e6;
          --wo-accent: #2A09F3;
        }

        .wo-page {
          width: 8.5in;
          height: 11in;
          background: #ffffff;
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.35);
          padding: 0.7in 0.75in 0.65in;
          color: var(--wo-ink);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-feature-settings: "ss01", "cv11";
        }

        /* HEADER */
        .wo-head {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: flex-start;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--wo-ink);
          margin-bottom: 24px;
        }
        .wo-head-left { display: flex; flex-direction: column; gap: 6px; }
        .wo-name {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 28px;
          line-height: 1;
          letter-spacing: -0.025em;
          position: relative;
          display: inline-flex;
          align-items: baseline;
        }
        .wo-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          background: var(--wo-accent);
          border-radius: 999px;
          margin-left: 6px;
          transform: translateY(1px);
        }
        .wo-role {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--wo-muted);
        }
        .wo-head-right {
          text-align: right;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10.5px;
          line-height: 1.7;
          color: var(--wo-muted);
          font-variant-numeric: tabular-nums;
        }
        .wo-head-right a {
          color: var(--wo-ink);
          text-decoration: none;
          border-bottom: 1px solid var(--wo-hair);
          padding-bottom: 1px;
        }
        .wo-head-right a:first-child {
          border-bottom-color: var(--wo-accent);
        }

        /* RULES */
        .wo-rule {
          height: 1px;
          border: none;
          background: var(--wo-hair);
          margin: 16px 0;
        }

        /* SECTIONS */
        .wo-section {
          display: grid;
          grid-template-columns: 1.2in 1fr;
          gap: 24px;
          align-items: baseline;
        }
        .wo-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 9.5px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--wo-ink);
        }

        /* PROFILE */
        .wo-profile {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 1.6;
          color: var(--wo-ink);
          max-width: 5.8in;
          margin: 0;
        }

        /* JOBS */
        .wo-jobs {
          display: flex;
          flex-direction: column;
        }
        .wo-job {
          padding: 10px 0;
          break-inside: avoid;
        }
        .wo-job + .wo-job {
          border-top: 1px solid var(--wo-hair);
        }
        .wo-job-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
        }
        .wo-job-co {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: -0.01em;
        }
        .wo-job-dates {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          color: var(--wo-muted);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-variant-numeric: tabular-nums;
        }
        .wo-job-role {
          font-family: var(--font-dm-sans), sans-serif;
          font-style: italic;
          font-weight: 400;
          font-size: 11px;
          color: var(--wo-muted);
          margin-top: 3px;
          margin-bottom: 6px;
        }
        .wo-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10.5px;
          line-height: 1.5;
        }
        .wo-list li {
          padding-left: 14px;
          position: relative;
          margin-bottom: 3px;
        }
        .wo-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 1px;
          background: var(--wo-ink);
        }

        /* FOOTER GRID */
        .wo-foot {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--wo-ink);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .wo-foot-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--wo-ink);
          margin-bottom: 8px;
        }
        .wo-foot-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          line-height: 1.5;
          color: var(--wo-ink);
        }
        .wo-foot-list li { margin-bottom: 2px; }

        @media print {
          .wo-page {
            box-shadow: none;
            width: 8.5in;
            height: 11in;
          }
        }
      `}</style>
    </LetterShell>
  );
}
