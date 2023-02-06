import '../styles/globals.tsx'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'
import "../public/static/fonts/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}
