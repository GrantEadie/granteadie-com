import { LetterShell } from '../../../_resume/LetterShell';

export const metadata = {
  title: 'Grant Eadie — Cover Letter for WorkOS',
};

export default function WorkOSCoverLetter() {
  return (
    <LetterShell label="Cover Letter · WorkOS" sheetColor="#ffffff" frameColor="#0a0a0a">
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

        <div className="wo-meta">
          <div className="wo-date">May 25, 2026</div>
          <div className="wo-addressee">
            <strong>To WorkOS</strong>
            <div>Re: Brand Designer</div>
          </div>
        </div>

        <h1 className="wo-salutation">
          Hello, WorkOS team<span className="wo-period">.</span>
        </h1>

        <div className="wo-body">
          <p>
            I&apos;m Grant Eadie, a brand designer and developer based in
            Bellingham, WA. Writing about the Brand Designer role.
          </p>
          <p>
            Some context. I&apos;ve been designing for twelve years (brand
            identity, editorial, motion, web) and writing the production code
            on most of what I design for the last nine. That continuity is rare.
            The handoff from comp to live site doesn&apos;t break when the
            designer is also the developer. The design system stays coherent
            because the same person is shipping it.
          </p>
          <p>
            Why this role specifically: the AI requirement in your JD reads
            the way I think about it. Not &ldquo;we use ChatGPT for image gen
            sometimes,&rdquo; but &ldquo;leverage AI-assisted design and
            production tools where appropriate, accelerate workflows, integrate
            new workflows without compromising craft.&rdquo; That&apos;s the
            practice I&apos;m already running. I build custom Claude agents
            for client design and ops work, use AI to explore directions and
            draft systems, and generate production code from comps. The quality
            bar stays human; the speed multiplies.
          </p>
          <p>
            Honest note on the scale gap: I haven&apos;t shipped brand work at
            a $2B-valuation SaaS company. My portfolio is nonprofits and
            service businesses, one-of-one craft rather than Fortune-500 systems.
            What I&apos;d bring instead is a designer already operating the way
            you&apos;re describing (AI-fluent, systems-thinking, developer-fluent),
            at a scale where every brand decision matters because there&apos;s
            nowhere to hide.
          </p>
          <p>
            The Workona entry on my resume is relevant here. Two years as a
            software engineer on a Chrome extension that scaled to 500,000+
            users. Dev-tool product, fast pace, design and engineering close
            to each other. The world your customers (Vercel, Plaid, OpenAI)
            live in is one I&apos;ve worked inside.
          </p>
          <p>
            Practical notes: fully remote-ready, available for full-time.
            Portfolio at granteadie.com/portfolio. Agency work at
            raredimension.com. I&apos;d love to talk.
          </p>
        </div>

        <div className="wo-signoff">
          <div className="wo-signoff-line">Best,</div>
          <div className="wo-sig-name">Grant Eadie</div>
          <div className="wo-sig-meta">
            <a href="mailto:me@granteadie.com">me@granteadie.com</a>
          </div>
        </div>

        <footer className="wo-foot-letter">
          <span>One of one · Letter for WorkOS</span>
          <a href="/resumes/workos">View resume</a>
        </footer>
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
          padding: 0.7in 0.85in 0.65in;
          color: var(--wo-ink);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .wo-head {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: flex-start;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--wo-ink);
        }
        .wo-head-left { display: flex; flex-direction: column; gap: 6px; }
        .wo-name {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 26px;
          line-height: 1;
          letter-spacing: -0.025em;
          display: inline-flex;
          align-items: baseline;
        }
        .wo-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
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

        .wo-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-top: 28px;
          margin-bottom: 28px;
        }
        .wo-date {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--wo-ink);
        }
        .wo-addressee {
          text-align: right;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          color: var(--wo-muted);
          line-height: 1.55;
        }
        .wo-addressee strong {
          display: block;
          font-weight: 700;
          font-size: 10.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--wo-ink);
          margin-bottom: 4px;
        }

        .wo-salutation {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--wo-ink);
          margin: 0 0 18px;
        }
        .wo-salutation .wo-period {
          color: var(--wo-accent);
        }

        .wo-body {
          max-width: 6.2in;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11.5px;
          line-height: 1.65;
          color: var(--wo-ink);
        }
        .wo-body p { margin: 0 0 11px; }
        .wo-body p:last-child { margin-bottom: 0; }

        .wo-signoff {
          margin-top: 20px;
          padding-top: 14px;
          border-top: 1px solid var(--wo-hair);
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11.5px;
          line-height: 1.5;
        }
        .wo-signoff-line { margin-bottom: 4px; }
        .wo-sig-name { font-weight: 700; }
        .wo-sig-meta {
          font-size: 10.5px;
          color: var(--wo-muted);
        }
        .wo-sig-meta a {
          color: var(--wo-muted);
          text-decoration: none;
          border-bottom: 1px solid var(--wo-hair);
        }

        .wo-foot-letter {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--wo-ink);
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 9.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--wo-muted);
        }
        .wo-foot-letter a {
          color: var(--wo-ink);
          text-decoration: none;
          border-bottom: 1px solid var(--wo-accent);
          padding-bottom: 1px;
        }

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
