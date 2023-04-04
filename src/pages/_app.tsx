import '../styles/globals.tsx';
import type { AppProps } from 'next/app';
import GlobalStyle, { Palette } from '../styles/globals';
import '../../public/static/fonts/style.css';
import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import { apiClient } from 'utils/Libs/apiClient';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          apiClient.get(url).then((response) => response.data),
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer
          autoClose={700}
          pauseOnHover={true}
          position={toast.POSITION.TOP_RIGHT}
          transition={Slide}
          toastStyle={{
            backgroundColor: Palette.BACKGROUND_CARD,
            color: Palette.NEUTRAL_N10,
          }}
        />
      </RecoilRoot>
    </SWRConfig>
  );
}
