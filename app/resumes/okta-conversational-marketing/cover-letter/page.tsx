import { LetterShell } from '../../../_resume/LetterShell';

export const metadata = {
  title: 'Grant Eadie — Cover Letter for Okta',
};

export default function OktaCoverLetter() {
  return (
    <LetterShell label="Cover Letter · Okta" sheetColor="#ffffff" frameColor="#e7e7e7">
      <article className="rd-page">
        <header className="rd-header">
          <div>
            <div className="rd-name">Grant Eadie</div>
            <div className="rd-title">Conversational Marketing Specialist</div>
          </div>
          <div className="rd-meta">
            <a href="mailto:me@granteadie.com">me@granteadie.com</a>
            <br />
            Bellingham, WA
            <br />
            <a href="https://granteadie.com">granteadie.com</a>
          </div>
        </header>

        <div className="rd-meta-row">
          <div className="rd-date">May 25, 2026</div>
          <div className="rd-addressee">
            <strong>To Okta</strong>
            <div>Re: Conversational Marketing Specialist</div>
          </div>
        </div>

        <h1 className="rd-salutation">Hello, Okta team.</h1>

        <div className="rd-body">
          <p>
            I&apos;m Grant Eadie, a digital marketer based in Bellingham, WA,
            writing about the Conversational Marketing Specialist role.
          </p>
          <p>
            Why I&apos;m interested in this one specifically: most marketing roles
            say &ldquo;AI tools&rdquo; in the JD and mean &ldquo;we have ChatGPT
            enterprise.&rdquo; Yours actually describes the job as managing,
            training, and tuning a conversational AI surface on your website.
            That&apos;s not a productivity-tool job. It&apos;s a craft job, and
            it&apos;s the craft I&apos;m already practicing.
          </p>
          <p>
            Here&apos;s the day-to-day: I co-run a small web agency, and I&apos;ve
            spent the last two years building custom Claude agents for internal
            ops, content versioning, and performance reporting across client
            work. I write the prompts, I tune the guardrails, I do the QA, I
            watch the outputs drift over time. Beyond the AI piece, I have a
            digital marketing background that maps to the rest of the role
            cleanly: GA4 and Search Console on every client site, content strategy
            and editorial calendars, A/B testing on landing pages and conversion
            flows, regular reporting to non-technical stakeholders.
          </p>
          <p>
            Practical notes. I&apos;m in Bellingham, about 90 minutes from
            Bellevue and well within range for a hybrid setup. Engineering
            background is real: CS degree, 9+ years working with React,
            TypeScript, and assorted backends, including two years at Workona
            as a software engineer on a Chrome extension that scaled to 500,000+
            users.
          </p>
          <p>
            I&apos;d love to talk. The opportunity to focus full-time on tuning a
            single high-stakes AI surface, instead of dividing attention across
            many clients, is the kind of focus I&apos;m looking for.
          </p>
        </div>

        <div className="rd-signoff">
          <div className="rd-signoff-line">Best,</div>
          <div className="rd-sig-name">Grant Eadie</div>
          <div className="rd-sig-meta">
            <a href="mailto:me@granteadie.com">me@granteadie.com</a>
          </div>
        </div>

        <footer className="rd-foot">
          <span>One of one · Letter for Okta</span>
          <a href="/resumes/okta-conversational-marketing">View resume</a>
        </footer>
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
          height: 11in;
          background: #ffffff;
          box-shadow: 0 6px 32px rgba(0, 0, 0, 0.18);
          padding: 0.65in 0.75in;
          color: var(--rd-ink);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .rd-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--rd-ink);
          margin-bottom: 28px;
        }
        .rd-name {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 800;
          font-size: 30px;
          letter-spacing: -0.01em;
          line-height: 1;
          text-transform: uppercase;
        }
        .rd-title {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 500;
          font-size: 12px;
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
        }
        .rd-meta a {
          color: var(--rd-muted);
          text-decoration: none;
        }

        .rd-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 24px;
          margin-bottom: 28px;
        }
        .rd-date {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--rd-ink);
        }
        .rd-addressee {
          text-align: right;
          font-size: 11px;
          color: var(--rd-muted);
          line-height: 1.55;
        }
        .rd-addressee strong {
          display: block;
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 10.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--rd-ink);
          margin-bottom: 4px;
        }

        .rd-salutation {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 28px;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: var(--rd-ink);
          margin: 0 0 22px;
        }

        .rd-body {
          max-width: 6.2in;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          line-height: 1.65;
          color: var(--rd-ink);
        }
        .rd-body p { margin: 0 0 12px; }
        .rd-body p:last-child { margin-bottom: 0; }

        .rd-signoff {
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid var(--rd-rule);
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          line-height: 1.55;
          color: var(--rd-ink);
        }
        .rd-signoff-line {
          margin-bottom: 4px;
        }
        .rd-sig-name {
          font-weight: 700;
        }
        .rd-sig-meta {
          font-size: 10.5px;
          color: var(--rd-muted);
        }
        .rd-sig-meta a {
          color: var(--rd-muted);
          text-decoration: none;
          border-bottom: 1px solid var(--rd-rule);
        }

        .rd-foot {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--rd-ink);
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--rd-muted);
        }
        .rd-foot a {
          color: var(--rd-ink);
          text-decoration: none;
          border-bottom: 1px solid var(--rd-accent);
          padding-bottom: 1px;
        }

        @media print {
          .rd-page { box-shadow: none; }
        }
      `}</style>
    </LetterShell>
  );
}
