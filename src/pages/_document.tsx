import React from 'react'
import type { DocumentContext } from 'next/document'
import Document, { Html, Main, NextScript } from 'next/document'


Object.assign(globalThis, {
  fetch,
  Headers,
  Request,
  Response,
  AbortController,
})

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='ja'>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
