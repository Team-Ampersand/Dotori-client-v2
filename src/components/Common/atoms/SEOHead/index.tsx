import Head from 'next/head';

const SEOHead = ({ title }: { title?: string }) => {
  return (
    <Head>
      <title>{`DOTORI ${title || ''}`}</title>
      <meta
        name="description"
        content="GSM 기숙사 관리 웹 서비스 Dotori 입니다."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={`DOTORI ${title}`} />
      <meta
        name="og:description"
        content="GSM 기숙사 관리 웹 서비스 Dotori 입니다."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/DotoriImg.png" />
    </Head>
  );
};

export default SEOHead;
