import 'tailwindcss/tailwind.css'
import {Navigation} from '../components/navigation/Navigation'
import {AppProps} from 'next/dist/shared/lib/router/router'
import {Footer} from '../components/footer/Footer'
import {ThemeProvider} from 'next-themes'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
