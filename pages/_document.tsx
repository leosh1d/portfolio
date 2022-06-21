import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

import Preview from "../public/preview.jpg"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Source+Code+Pro:wght@700&display=swap"
            rel="stylesheet"
          />
          <meta property="og:title" content="leosh1d" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://leosh1d.site" />
          <meta property="og:description" content="Frontend developer UI/UX designer" />
          <meta property="og:image:width" content="2560" />
          <meta property="og:image:height" content="1098" />
          <meta property="og:image:type" content="image/jpeg" />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X7VME9VL8T" />
          <Script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9W8TMMNKL6');`,
            }}
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

export default MyDocument
