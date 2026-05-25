'use client';

/**
 * LetterShell — shared chrome for every tailored resume and cover letter.
 *
 * Provides:
 *   - Sticky dark toolbar with brand label + Download PDF button
 *   - Centered preview wrap with gray/dark background
 *   - 8.5×11in letter page constraint (overflow:hidden so print can't paginate)
 *   - @page CSS + print-color-adjust + toolbar-hide-on-print
 *
 * Does NOT impose:
 *   - Sheet color (passed via prop, defaults white)
 *   - Backdrop color (frameColor prop)
 *   - Page padding (each page sets its own inside the article element)
 *   - Typography, layout, or visual theme — all up to the child page
 *
 * Usage:
 *   <LetterShell label="Marketing Resume" sheetColor="#ffffff">
 *     <article className="my-page-styles">...content...</article>
 *   </LetterShell>
 */

interface LetterShellProps {
  /** Subtitle shown in the toolbar (e.g. "Marketing Resume · US Letter"). */
  label: string;
  /** Background color of the printable sheet. Defaults to #ffffff. */
  sheetColor?: string;
  /** Background color of the preview frame around the sheet. Defaults to #1a1a1a. */
  frameColor?: string;
  /** Color of the toolbar background. Defaults to #0a0a0a. */
  toolbarColor?: string;
  /** Page content. Should be a single <article className="letter-page">…</article>. */
  children: React.ReactNode;
}

export function LetterShell({
  label,
  sheetColor = '#ffffff',
  frameColor = '#1a1a1a',
  toolbarColor = '#0a0a0a',
  children,
}: LetterShellProps) {
  return (
    <>
      <style>{`
        .ls-shell {
          background: ${frameColor};
          min-height: 100vh;
          font-family: var(--font-dm-sans), system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .ls-toolbar {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          background: ${toolbarColor};
          color: #ffffff;
          border-bottom: 1px solid #232323;
        }
        .ls-toolbar-brand {
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .ls-toolbar-meta {
          font-size: 11px;
          color: #777;
          font-weight: 400;
          margin-left: 16px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .ls-btn {
          background: ${sheetColor};
          color: #0e0e0e;
          border: none;
          border-radius: 1px;
          padding: 9px 20px;
          font-family: inherit;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.18s, color 0.18s;
        }
        .ls-btn:hover {
          background: #2A09F3;
          color: ${sheetColor};
        }

        .ls-wrap {
          display: flex;
          justify-content: center;
          padding: 40px 16px 96px;
        }

        @media print {
          @page {
            size: 8.5in 11in;
            margin: 0;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .ls-shell { background: ${sheetColor}; }
          .ls-toolbar { display: none !important; }
          .ls-wrap { padding: 0; }
        }
      `}</style>

      <div className="ls-shell">
        <div className="ls-toolbar">
          <div>
            <span className="ls-toolbar-brand">Grant Eadie</span>
            <span className="ls-toolbar-meta">{label}</span>
          </div>
          <button
            className="ls-btn"
            onClick={() => window.print()}
            aria-label="Download as PDF"
          >
            Download PDF
          </button>
        </div>

        <div className="ls-wrap">{children}</div>
      </div>
    </>
  );
}
