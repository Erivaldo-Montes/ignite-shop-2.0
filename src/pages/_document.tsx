import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

// subtittuto do index.html do react padrão
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  )
}
