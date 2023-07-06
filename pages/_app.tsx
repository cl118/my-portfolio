import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LightboxContextProvider from '../contexts/LightboxContext'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <LightboxContextProvider>
        <Component {...pageProps} />
      </LightboxContextProvider>
    </>
  )
}

export default MyApp
