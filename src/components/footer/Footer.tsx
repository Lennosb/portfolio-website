import {Box} from '../layout/Box'

export const Footer = () => (
  <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
    <div className="max-w-4xl px-4 mx-auto ">
      <Box
        css={{
          paddingBottom: '32px',
          marginBottom: '8px',
          borderTopWidth: '2px',
          borderColor: '$primary',
        }}
      />
      <div className="flex flex-col justify-between lg:flex-row items-center">
        <p>Built with Next.js, Stitches and Vercel</p>
        <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
          <a
            href="https://www.linkedin.com/in/lennardberg/"
            className="transition-colors hover:text-yellow-500"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/lennardvandenberg"
            className="hover:text-yellow-500"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
)
