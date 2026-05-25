import { LetterShell } from '../../../_resume/LetterShell';

export const metadata = {
  title: 'Grant Eadie — Cover Letter for Unrivaled Sports',
};

export default function UnrivaledSportsCoverLetter() {
  return (
    <LetterShell label="Cover Letter · Unrivaled Sports" sheetColor="#F6F1E5" frameColor="#141414">
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

        <div className="uv-meta-row">
          <div className="uv-date">May 25, 2026</div>
          <div className="uv-addressee">
            <strong>To Unrivaled Sports</strong>
            <em>Re: Contract Graphic Designer</em>
          </div>
        </div>

        <h1 className="uv-salutation">
          Hello, Unrivaled team<span className="uv-period">.</span>
        </h1>

        <div className="uv-body">
          <p>
            I&apos;m Grant Eadie, a designer based in Bellingham, WA. I saw the
            Contract Graphic Designer posting and want to throw my hat in.
          </p>
          <p>
            Quick background: twelve years of identity, editorial, and motion
            work, mostly through Rare Dimension, the small agency I co-own.
            Brand identity systems for service businesses and venues. Editorial
            design for a regional magazine. Social-first creative and motion
            graphics for ongoing client campaigns. Before all of that, years
            of poster work and visual identity for touring musicians, two
            music festivals, and my own projects on Bastard Jazz Records. I
            work fast, I respect a brief, and I care about the small marks.
          </p>
          <p>
            Beyond design, the sports brand portfolio you&apos;re working on
            is a world I&apos;m in. I played soccer through college, I train
            Brazilian Jiu-Jitsu, and I&apos;ve been a full-on athlete through
            my 30s. Youth sports culture isn&apos;t a vertical I&apos;d be
            cosplaying. It&apos;s where I&apos;ve spent a lot of my life.
            Designing for Ripken Experiences, Rocker B Ranch, and Unrivaled
            Flag isn&apos;t a stretch; it&apos;s work I&apos;d come to with
            real fluency.
          </p>
          <p>
            A few practical notes. I&apos;m set up for remote work, have
            bandwidth for a 40-hour contract, and could start immediately.
            My portfolio is at granteadie.com/portfolio. The agency work
            lives at raredimension.com.
          </p>
          <p>Happy to talk whenever works for you.</p>
        </div>

        <div className="uv-signoff">
          <div className="uv-signoff-line">Best,</div>
          <div className="uv-sig-name">Grant Eadie</div>
          <div className="uv-sig-meta">
            <a href="mailto:me@granteadie.com">me@granteadie.com</a>
          </div>
        </div>

        <footer className="uv-foot">
          <span>One of one · Letter for Unrivaled Sports</span>
          <a href="/resumes/unrivaled-sports">View resume</a>
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
          padding: 0.7in 0.85in;
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
          padding-bottom: 10px;
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

        .uv-meta-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 36px;
          margin-bottom: 36px;
        }
        .uv-date {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--uv-ink);
        }
        .uv-addressee {
          font-family: var(--font-loram), Georgia, serif;
          font-style: italic;
          font-size: 13px;
          line-height: 1.4;
          color: var(--uv-muted);
          text-align: right;
        }
        .uv-addressee strong {
          font-family: var(--font-dm-sans), sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 10.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--uv-ink);
          display: block;
          margin-bottom: 4px;
        }

        .uv-salutation {
          font-family: var(--font-loram), Georgia, serif;
          font-style: italic;
          font-weight: 500;
          font-size: 38px;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--uv-ink);
          margin: 0 0 22px;
          max-width: 5.5in;
        }
        .uv-salutation .uv-period {
          color: var(--uv-accent);
        }

        .uv-body {
          max-width: 6.2in;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          line-height: 1.65;
          color: var(--uv-ink);
        }
        .uv-body p { margin: 0 0 12px; }
        .uv-body p:last-child { margin-bottom: 0; }

        .uv-signoff {
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid var(--uv-hair);
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          line-height: 1.55;
          color: var(--uv-ink);
          max-width: 6.2in;
        }
        .uv-signoff-line {
          font-family: var(--font-loram), Georgia, serif;
          font-style: italic;
          font-size: 15px;
          margin-bottom: 4px;
        }
        .uv-sig-name {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .uv-sig-meta {
          font-size: 10.5px;
          color: var(--uv-muted);
          letter-spacing: 0.04em;
        }
        .uv-sig-meta a {
          color: var(--uv-muted);
          text-decoration: none;
          border-bottom: 1px solid var(--uv-hair);
        }

        .uv-foot {
          margin-top: auto;
          padding-top: 18px;
          border-top: 1px solid var(--uv-ink);
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--uv-muted);
        }
        .uv-foot a {
          color: var(--uv-ink);
          text-decoration: none;
          border-bottom: 1px solid var(--uv-accent);
          padding-bottom: 1px;
        }

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
