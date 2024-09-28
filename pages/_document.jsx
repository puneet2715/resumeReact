import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Portfolio/Resume Site of Puneet Arora"
        />
        {/* Facebook Meta Tags */}
        <meta property="og:title" content="Resume/Portfolio" />
        <meta property="og:description" content="Portfolio/Resume Site of Puneet Arora" />
        <meta property="og:image" content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/resume.shadowdragon.dev/Resume%2FPortfolio/https%3A%2F%2Fik.imagekit.io%2Fpuneet2715%2Ficon.jpg%3Ftr%3Dw-180%2Ch-180/og.png" />
        <meta property="og:site_name" content="Puneet Arora's Resume/Portfolio" />
        <meta property="og:url" content="https://resume.shadowdragon.dev" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="I solve complex problems with a outcomes-centered approach. See how at resume.shadowdragon.dev" />
        <meta property="twitter:domain" content="resume.shadowdragon.dev" />
        <meta property="twitter:url" content="https://www.resume.shadowdragon.dev" />
        <meta name="twitter:title" content="Resume/Portfolio" />
        <meta name="twitter:description" content="Portfolio/Resume Site of Puneet Arora" />
        <meta name="twitter:image" content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/resume.shadowdragon.dev/Resume%2FPortfolio/https%3A%2F%2Fik.imagekit.io%2Fpuneet2715%2Ficon.jpg%3Ftr%3Dw-180%2Ch-180/og.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}