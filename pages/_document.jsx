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
        <meta property="og:image" content="https://ik.imagekit.io/puneet2715/icon.jpg?tr=w-180,h-180" />
        <meta property="og:url" content="https://www.resume.shadowdragon.dev" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="I solve complex problems with a outcomes-centered approach. See how at resume.shadowdragon.dev" />
        <meta property="twitter:domain" content="resume.shadowdragon.dev" />
        <meta property="twitter:url" content="https://www.resume.shadowdragon.dev" />
        <meta name="twitter:title" content="Resume/Portfolio" />
        <meta name="twitter:description" content="Portfolio/Resume Site of Puneet Arora" />
        <meta name="twitter:image" content="https://ik.imagekit.io/puneet2715/icon.jpg?tr=w-180,h-180" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}