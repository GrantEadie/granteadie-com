import Link from 'next/link';

export const metadata = {
  title: 'Grant Eadie — Tailored Resumes',
};

interface ResumeEntry {
  slug: string;
  role: string;
  company: string;
  updated: string;
  hasLetter: boolean;
  note?: string;
}

const RESUMES: ResumeEntry[] = [
  {
    slug: 'workos',
    role: 'Brand Designer',
    company: 'WorkOS',
    updated: 'May 25, 2026',
    hasLetter: true,
    note: 'Designer + developer + AI. Minimal-technical layout.',
  },
  {
    slug: 'okta-conversational-marketing',
    role: 'Conversational Marketing Specialist',
    company: 'Okta',
    updated: 'May 25, 2026',
    hasLetter: true,
    note: 'AI-native marketing pitch. Tech-modern layout.',
  },
  {
    slug: 'all-points',
    role: 'Director of Digital Marketing',
    company: 'All Points 3PL',
    updated: 'May 25, 2026',
    hasLetter: true,
    note: 'Growth-operator pitch. Lives at /marketing too (redirected).',
  },
  {
    slug: 'unrivaled-sports',
    role: 'Contract Graphic Designer',
    company: 'Unrivaled Sports',
    updated: 'May 25, 2026',
    hasLetter: true,
    note: 'Design-first pitch. Editorial layout.',
  },
];

export default function ResumesIndex() {
  return (
    <>
      <style>{`
        .idx-shell {
          background: #0f0f0f;
          color: #f5f1e7;
          min-height: 100vh;
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          padding: 80px 24px 120px;
        }
        .idx-wrap {
          max-width: 920px;
          margin: 0 auto;
        }
        .idx-eyebrow {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #8a8478;
          margin-bottom: 16px;
        }
        .idx-title {
          font-family: var(--font-loram), Georgia, serif;
          font-style: italic;
          font-weight: 500;
          font-size: 64px;
          line-height: 0.95;
          letter-spacing: -0.025em;
          margin: 0 0 12px;
        }
        .idx-title .idx-period { color: #2A09F3; }
        .idx-lead {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 14px;
          line-height: 1.55;
          color: #b9b3a4;
          max-width: 540px;
          margin: 0 0 56px;
        }
        .idx-rule {
          border: none;
          height: 1px;
          background: #2a2a2a;
          margin: 0 0 32px;
        }
        .idx-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: #2a2a2a;
        }
        .idx-row {
          background: #0f0f0f;
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 24px;
          align-items: baseline;
          padding: 20px 0;
        }
        .idx-row-main {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .idx-co {
          font-family: var(--font-loram), Georgia, serif;
          font-weight: 600;
          font-size: 22px;
          letter-spacing: -0.01em;
          color: #f5f1e7;
        }
        .idx-role {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: #b9b3a4;
        }
        .idx-note {
          font-family: var(--font-loram), Georgia, serif;
          font-style: italic;
          font-size: 12px;
          color: #6a665b;
          margin-top: 4px;
        }
        .idx-date {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6a665b;
          font-variant-numeric: tabular-nums;
        }
        .idx-links {
          display: flex;
          gap: 8px;
        }
        .idx-link {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 8px 14px;
          border: 1px solid #2a2a2a;
          color: #f5f1e7;
          text-decoration: none;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }
        .idx-link:hover {
          background: #2A09F3;
          border-color: #2A09F3;
          color: #f5f1e7;
        }
        .idx-link.muted {
          color: #8a8478;
        }

        .idx-foot {
          margin-top: 64px;
          padding-top: 24px;
          border-top: 1px solid #2a2a2a;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 11px;
          color: #6a665b;
          line-height: 1.6;
        }
        .idx-foot a {
          color: #b9b3a4;
          border-bottom: 1px solid #2A09F3;
          text-decoration: none;
          padding-bottom: 1px;
        }
        .idx-foot code {
          font-family: ui-monospace, "SF Mono", Menlo, monospace;
          font-size: 10.5px;
          background: #1a1a1a;
          padding: 2px 6px;
          border-radius: 2px;
        }
      `}</style>

      <div className="idx-shell">
        <div className="idx-wrap">
          <div className="idx-eyebrow">Grant Eadie · Tailored Resumes</div>
          <h1 className="idx-title">
            Pick a role<span className="idx-period">.</span>
          </h1>
          <p className="idx-lead">
            Each entry below is a resume and (where applicable) cover letter
            tailored to a specific job application. Click into one to read,
            or hit Download PDF to export.
          </p>

          <hr className="idx-rule" />

          <ul className="idx-list">
            {RESUMES.map((r) => (
              <li key={r.slug} className="idx-row">
                <div className="idx-row-main">
                  <span className="idx-co">{r.company}</span>
                  <span className="idx-role">{r.role}</span>
                  {r.note && <span className="idx-note">{r.note}</span>}
                </div>
                <div className="idx-date">Updated {r.updated}</div>
                <div className="idx-links">
                  <Link className="idx-link" href={`/resumes/${r.slug}`}>
                    Resume
                  </Link>
                  {r.hasLetter && (
                    <Link
                      className="idx-link muted"
                      href={`/resumes/${r.slug}/cover-letter`}
                    >
                      Letter
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="idx-foot">
            <p>
              To add a new tailored resume, copy a template from{' '}
              <code>app/_resume/templates/</code>, drop it into{' '}
              <code>app/resumes/[new-slug]/page.tsx</code>, and add an entry to
              the <code>RESUMES</code> array above. See the project{' '}
              <code>README</code> for the full workflow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
