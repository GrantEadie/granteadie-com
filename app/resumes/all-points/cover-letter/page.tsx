import { LetterShell } from '../../../_resume/LetterShell';

export const metadata = {
  title: 'Grant Eadie — Cover Letter for All Points',
};

export default function AllPointsCoverLetter() {
  return (
    <LetterShell label="Cover Letter · All Points 3PL" sheetColor="#ffffff" frameColor="#e7e7e7">
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

        <div className="rd-meta-row">
          <div className="rd-date">May 25, 2026</div>
          <div className="rd-addressee">
            <strong>To All Points 3PL</strong>
            <div>Re: Director of Digital Marketing</div>
          </div>
        </div>

        <h1 className="rd-salutation">Hello, All Points team.</h1>

        <div className="rd-body">
          <p>
            I&apos;m Grant Eadie, writing about the Director of Digital Marketing
            role. Quick version: I&apos;m a marketing-minded operator who&apos;s
            been running the work you&apos;re hiring for, just spread across
            multiple clients instead of one company.
          </p>
          <p>
            What I&apos;d bring: I co-run Rare Dimension, a small web agency
            where I own the digital marketing function across our entire client
            book. That means SEO strategy and technical SEO, content programs
            and editorial calendars, GA4 and Search Console on every site, lead
            capture wired through to CRMs, and ongoing reporting to non-technical
            stakeholders. Across nine-plus client sites, I&apos;ve averaged 2x+
            organic traffic growth with most clients sitting at the top of Google
            in their target markets. I direct designers, developers, and content
            writers on this work; I&apos;m comfortable both setting strategy and
            running the execution.
          </p>
          <p>
            The piece that probably matters most for you, given how fast search
            is changing: I&apos;m unusually deep into modern AI workflow. I build
            and maintain custom Claude agents for client ops, technical SEO
            audits, Search Console monitoring, and content drafting. The JD
            specifically calls out AI in marketing as a top requirement, and
            this is the part of the work I find most generative right now.
          </p>
          <p>
            Why All Points: I read your site and the gaps line up with what I
            actually do. The blog cadence is light, the case studies are
            under-leveraged, schema and technical SEO have room to grow, and
            the navigation is heavier than it needs to be. None of that is
            criticism; it&apos;s the kind of work I do every week, and at a
            family-owned company with 30 years of credibility, the upside of
            getting it right is real.
          </p>
          <p>
            Remote-ready, available to start on a reasonable runway, salary
            expectations flexible within your posted range. Happy to talk
            whenever works.
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
          <span>One of one · Letter for All Points</span>
          <a href="/resumes/all-points">View resume</a>
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
        .rd-signoff-line { margin-bottom: 4px; }
        .rd-sig-name { font-weight: 700; }
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
