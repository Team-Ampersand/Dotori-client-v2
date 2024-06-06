import '../styles/globals.tsx';
import type { AppProps } from 'next/app';
import GlobalStyle, { Palette } from '../styles/globals';
import '../../public/static/fonts/style.css';
import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import { apiClient } from 'utils/Libs/apiClient';
import InitMocks from '../mocks';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  InitMocks();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          apiClient.get(url).then((response) => response.data),
        revalidateIfStale: false,
        revalidateOnFocus: true,
        revalidateOnReconnect: false,
      }}
    >
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer
          toastStyle={{
            backgroundColor: Palette.BACKGROUND_CARD,
            color: Palette.NEUTRAL_N10,
          }}
        />
      </RecoilRoot>
    </SWRConfig>
  );
}
