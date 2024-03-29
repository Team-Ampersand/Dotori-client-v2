import { NextRequest, NextResponse, userAgent } from 'next/server';
import { removeToken } from 'utils/Libs/removeToken';

export const middleware = async (req: NextRequest) => {
  const ua = userAgent(req);
  const RefreshToken = req.cookies.get('RefreshToken');
  const isAuthPage = ['/signin', '/signup', '/'].some(
    (i) => i == req.nextUrl.pathname
  );

  if (RefreshToken && isAuthPage) {
    return NextResponse.redirect(new URL('/home', req.url));
  } else if (!RefreshToken && !isAuthPage) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  if (ua.isBot) {
    removeToken();
    return NextResponse.redirect(new URL('/signin', req.url));
  }
};

export const config = {
  matcher: [
    '/signin',
    '/signup',
    '/home',
    '/selfstudy',
    '/massage',
    '/penalty',
    '/notice',
    '/notice/:path*',
    '/',
  ],
};
