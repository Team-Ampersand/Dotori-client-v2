import '../styles/globals.tsx'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'
import "../../public/static/fonts/style.css";
import { Slide, toast, ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
      <ToastContainer 
        autoClose={1000} 
        pauseOnHover={true} 
        hideProgressBar={true}
        position={toast.POSITION.TOP_RIGHT}
        transition={Slide}
      />
    </>
  )
}
