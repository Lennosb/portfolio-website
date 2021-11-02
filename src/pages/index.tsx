import Head from 'next/head'

import {About} from '../components/about/About'
import {styled} from '../style/stitches.config'

const Main = styled('main', {
  maxWidth: '$large',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '64px',
})

const Index = () => (
  <>
    <Head>
      <title>Lennard van den Berg</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <About />
    </Main>
  </>
)

/* eslint-disable-next-line import/no-default-export -- Default export is required by Next.js */
export default Index
