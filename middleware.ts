import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Basic auth gate for /resumes/* in production.
 *
 * The password lives in the RESUME_PASS env var (gitignored locally,
 * set in Vercel project settings for production). Username is hardcoded
 * to "grant".
 *
 * In development the middleware is bypassed so local work isn't interrupted.
 * In production, if RESUME_PASS is not set, requests are allowed through
 * (fail-open) rather than locking Grant out of his own pages.
 */
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next();
  }

  const expectedPass = process.env.RESUME_PASS;
  if (!expectedPass) {
    return NextResponse.next();
  }

  const expectedUser = 'grant';
  const header = request.headers.get('authorization');

  if (header?.startsWith('Basic ')) {
    const encoded = header.slice(6);
    let decoded = '';
    try {
      decoded = atob(encoded);
    } catch {
      decoded = '';
    }
    const idx = decoded.indexOf(':');
    if (idx >= 0) {
      const user = decoded.slice(0, idx);
      const pass = decoded.slice(idx + 1);
      if (user === expectedUser && pass === expectedPass) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Resumes", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ['/resumes', '/resumes/:path*'],
};
