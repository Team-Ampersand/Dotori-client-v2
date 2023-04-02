import { NextRequest, NextResponse, userAgent } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const ua = userAgent(req);
  const RefreshToken = req.cookies.get('RefreshToken');

  if (RefreshToken && req.nextUrl.pathname.includes('sign')) {
    return NextResponse.redirect(new URL('/home', req.url));
  } else if (!RefreshToken && !req.nextUrl.pathname.includes('sign')) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  if (ua.isBot) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }
};

export const config = {
  matcher: [
    '/signin',
    '/signup',
    '/home',
    '/selfstudy',
    '/changePasswd',
    '/massage',
    '/penalty',
    '/notice/:path*',
  ],
};
