import NextDocument, {Head, Html, Main, NextScript} from 'next/document'
import React from 'react'

import {getCssText} from '../style/stitches.config'

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: getCssText()}}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

/* eslint-disable-next-line import/no-default-export -- Default export is required by Next.js */
export default Document
