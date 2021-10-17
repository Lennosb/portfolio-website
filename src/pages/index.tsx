import Head from 'next/head'

import {About} from '../components/about/About'

const Index = () => (
  <div className="space-y-14 lg:space-y-24">
    <Head>
      <title>Lennard van den Berg</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="max-w-4xl mx-auto mt-16 antialiased">
      <About />
    </main>
  </div>
)

/* eslint-disable-next-line import/no-default-export -- Default export is required by Next.js */
export default Index
