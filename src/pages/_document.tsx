import { Html, Head, Main, NextScript } from 'next/document';

const themeInitializerScript = `
  (function () {
    document.body.dataset.theme = document.cookie.match('(^|;)?themeCookie=([^;]*)(;|$)')[2] || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? "dark" : "light");
  })();
`;

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
