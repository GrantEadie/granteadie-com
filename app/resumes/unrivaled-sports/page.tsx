import { LetterShell } from '../../_resume/LetterShell';

export const metadata = {
  title: 'Grant Eadie — Design Resume',
};

export default function UnrivaledSportsResume() {
  return (
    <LetterShell label="Design · US Letter" sheetColor="#F6F1E5" frameColor="#141414">
      <article className="uv-page">
        <header className="uv-credit">
          <div className="uv-credit-name">Grant Eadie · Designer</div>
          <div className="uv-credit-meta">
            <a className="uv-port" href="https://granteadie.com/portfolio">
              granteadie.com/portfolio
            </a>
            <br />
            <a href="mailto:me@granteadie.com">me@granteadie.com</a> · Bellingham, WA
          </div>
        </header>

        <div className="uv-title-block">
          <h1 className="uv-title">
            <span className="uv-title-line">Graphic</span>
            <span className="uv-title-line">Designer<span className="uv-period">.</span></span>
          </h1>
          <p className="uv-byline">
            Twelve years of brand identity, editorial, motion, and visual
            systems for service businesses, nonprofits, music labels, and
            live event brands.
          </p>
        </div>

        <hr className="uv-rule" />

        <div className="uv-section">
          <span className="uv-label">Profile</span>
          <p className="uv-profile">
            Designer first. I build brand identities, editorial layouts,
            social-first creative, and motion that hold up across touchpoints,
            and I happen to also be technical, so the handoff from comp to
            production almost never breaks.
          </p>
        </div>

        <hr className="uv-rule" />

        <div className="uv-section">
          <span className="uv-label">
            <span className="uv-label-mark">●</span>Selected Work
          </span>
          <div className="uv-jobs">

            <article className="uv-job">
              <div className="uv-job-left">
                <div className="uv-job-co">Rare Dimension</div>
                <div className="uv-job-dates">2019 — Now</div>
                <div className="uv-job-role">Co-founder, Designer &amp; Developer</div>
              </div>
              <div className="uv-job-right">
                <ul>
                  <li>
                    Lead designer on brand identity systems (logo, typography,
                    color, voice) for TwispWorks Foundation, Smiling Woods Yurts,
                    and a dozen+ service, nonprofit, and venue clients
                  </li>
                  <li>
                    Editorial design for Methow Made Magazine, full layout and
                    illustration across issues
                  </li>
                  <li>
                    Social-first creative and motion graphics for ongoing
                    client campaigns and seasonal launches
                  </li>
                  <li>
                    Design toolkits, templates, and end-to-end web work, with
                    care for production fidelity from Figma comp to live page
                  </li>
                </ul>
              </div>
            </article>

            <article className="uv-job">
              <div className="uv-job-left">
                <div className="uv-job-co">Workona</div>
                <div className="uv-job-dates">2022 — 2024</div>
                <div className="uv-job-role">Software Engineer</div>
              </div>
              <div className="uv-job-right">
                <p className="uv-job-prose">
                  Engineering on a Chrome extension that scaled to 500,000+
                  users. A designer&apos;s eye on product surface and UX,
                  shipping in a fast product environment.
                </p>
              </div>
            </article>

            <article className="uv-job">
              <div className="uv-job-left">
                <div className="uv-job-co">Independent Practice</div>
                <div className="uv-job-dates">2014 — 2019</div>
                <div className="uv-job-role">Identity, posters, music industry creative</div>
              </div>
              <div className="uv-job-right">
                <ul>
                  <li>
                    Built the visual identity for Manatee Commune (released on
                    Bastard Jazz Records) and OKBBDD, my DJ duo with Matt Larsen
                  </li>
                  <li>
                    Brand identity, posters, and visual systems for a roster
                    of touring musicians and two music festivals
                  </li>
                  <li>
                    Album art, tour visuals, and merch design alongside a
                    full-time touring career
                  </li>
                </ul>
              </div>
            </article>

          </div>
        </div>

        <footer className="uv-colophon">
          <div>
            <h4>Toolbox</h4>
            <span className="uv-colophon-sub">Daily, fluent.</span>
            <ul>
              <li>Adobe Photoshop, Illustrator, InDesign, After Effects, Premiere</li>
              <li>Figma (since launch)</li>
              <li>Canva (when the brief calls for it)</li>
              <li>HTML, CSS, React (for design-to-web)</li>
            </ul>
          </div>

          <div>
            <h4>Education</h4>
            <span className="uv-colophon-sub">Western Washington University</span>
            <ul>
              <li>B.A. Computer Science</li>
              <li>Violin &amp; Viola Performance</li>
              <li>2011 — 2015</li>
            </ul>
          </div>

          <div>
            <h4>Also True</h4>
            <span className="uv-colophon-sub">Off the page.</span>
            <ul>
              <li>Lifelong athlete; played college soccer</li>
              <li>Brazilian Jiu-Jitsu practitioner</li>
              <li>Touring recording artist for years</li>
              <li>Coffee opinions held strongly</li>
            </ul>
          </div>
        </footer>
      </article>

      <style>{`
        :root {
          --uv-ink: #0e0e0e;
          --uv-muted: #6e6a60;
          --uv-rule: #161616;
          --uv-hair: #cdc6b4;
          --uv-accent: #2A09F3;
          --uv-sheet: #F6F1E5;
        }

        .uv-page {
          width: 8.5in;
          height: 11in;
          background: var(--uv-sheet);
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.45);
          padding: 0.55in 0.7in 0.65in;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          color: var(--uv-ink);
        }
        .uv-page::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(0,0,0,0.022) 1px, transparent 1px);
          background-size: 3px 3px;
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        .uv-credit {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: baseline;
          gap: 24px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--uv-ink);
        }
        .uv-credit-name {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 10.5px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }
        .uv-credit-meta {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          letter-spacing: 0.06em;
          color: var(--uv-muted);
          text-align: right;
          line-height: 1.7;
        }
        .uv-credit-meta a {
          color: var(--uv-muted);
          text-decoration: none;
        }
        .uv-credit-meta .uv-port {
          color: var(--uv-ink);
          border-bottom: 1.5px solid var(--uv-accent);
          padding-bottom: 1px;
          letter-spacing: 0.04em;
        }

        .uv-title-block {
          padding-top: 20px;
          padding-bottom: 8px;
        }
        .uv-title {
          font-family: var(--font-loram), Georgia, serif;
          font-weight: 500;
          font-style: italic;
          font-size: 80px;
          line-height: 0.92;
          letter-spacing: -0.035em;
          color: var(--uv-ink);
          margin: 0;
        }
        .uv-title-line { display: block; }
        .uv-period {
          color: var(--uv-accent);
          font-style: italic;
        }
        .uv-byline {
          margin-top: 18px;
          font-family: var(--font-loram), Georgia, serif;
          font-style: italic;
          font-weight: 400;
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--uv-ink);
          max-width: 5.2in;
        }

        .uv-rule {
          height: 1px;
          background: var(--uv-ink);
          border: none;
          margin: 14px 0 10px;
        }

        .uv-section {
          display: grid;
          grid-template-columns: 1.3in 1fr;
          gap: 20px;
          align-items: baseline;
          margin-bottom: 8px;
        }
        .uv-label {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--uv-ink);
        }
        .uv-label-mark {
          color: var(--uv-accent);
          margin-right: 6px;
        }

        .uv-profile {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 400;
          font-size: 11.5px;
          line-height: 1.55;
          color: var(--uv-ink);
          max-width: 5.6in;
        }

        .uv-jobs { display: flex; flex-direction: column; }
        .uv-job {
          padding: 8px 0;
          display: grid;
          grid-template-columns: 1.3in 1fr;
          gap: 20px;
          break-inside: avoid;
        }
        .uv-job + .uv-job { border-top: 1px solid var(--uv-hair); }
        .uv-job-left { display: flex; flex-direction: column; gap: 2px; }
        .uv-job-co {
          font-family: var(--font-loram), Georgia, serif;
          font-weight: 600;
          font-size: 15px;
          line-height: 1.15;
          letter-spacing: -0.005em;
        }
        .uv-job-dates {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9px;
          color: var(--uv-muted);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-variant-numeric: tabular-nums;
          margin-top: 3px;
        }
        .uv-job-role {
          font-family: var(--font-loram), Georgia, serif;
          font-style: italic;
          font-size: 11.5px;
          color: var(--uv-muted);
          margin-top: 4px;
          line-height: 1.3;
        }
        .uv-job-right ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10.5px;
          line-height: 1.5;
          color: var(--uv-ink);
        }
        .uv-job-right li {
          padding-left: 12px;
          position: relative;
          margin-bottom: 3px;
        }
        .uv-job-right li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 1px;
          background: var(--uv-ink);
        }
        .uv-job-prose {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10.5px;
          line-height: 1.5;
          color: var(--uv-ink);
          margin: 0;
        }

        .uv-colophon {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--uv-ink);
          display: grid;
          grid-template-columns: 1.2fr 1fr 1.1fr;
          gap: 24px;
        }
        .uv-colophon h4 {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 9.5px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--uv-ink);
          margin: 0 0 6px;
        }
        .uv-colophon-sub {
          font-family: var(--font-loram), Georgia, serif;
          font-style: italic;
          font-size: 10.5px;
          color: var(--uv-muted);
          margin-bottom: 4px;
          display: block;
        }
        .uv-colophon ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          line-height: 1.45;
          color: var(--uv-ink);
        }
        .uv-colophon li { margin-bottom: 1px; }

        @media print {
          .uv-page {
            box-shadow: none;
            width: 8.5in;
            height: 11in;
          }
          .uv-page::before { display: none; }
        }
      `}</style>
    </LetterShell>
  );
}
