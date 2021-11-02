// eslint-disable-next-line import/no-extraneous-dependencies -- Tailwind is a dev dependency and is not present in the prod build
import 'tailwindcss/tailwind.css'

import type {AppProps} from 'next/dist/shared/lib/router/router'
import {ThemeProvider} from 'next-themes'

import {Footer} from '../components/footer/Footer'
import {Navigation} from '../components/navigation/Navigation'
import {darkTheme} from '../style/stitches.config'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      value={{
        dark: darkTheme.className,
        light: 'light',
      }}
    >
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

/* eslint-disable-next-line import/no-default-export -- Default export is required by Next.js */
export default MyApp
