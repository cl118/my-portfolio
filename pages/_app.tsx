import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LightboxContextProvider from '../contexts/LightboxContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LightboxContextProvider>
      <Component {...pageProps} />
    </LightboxContextProvider>
  )
}

export default MyApp
