import Link from 'next/link'

import {Box} from '../layout/Box'
import {ThemeSwitch} from '../theme/ThemeSwitch'

export const Navigation = () => (
  <Box
    css={{
      background: '$secondary',
      paddingTop: '8px',
      paddingBottom: '8px',
      '@bp2': {
        paddingTop: '24px',
        paddingBottom: '24px',
      },
    }}
  >
    <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
      <Link href="/">
        <a className="font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white">
          Lennard van den Berg
        </a>
      </Link>
      <ThemeSwitch />
    </div>
  </Box>
)
