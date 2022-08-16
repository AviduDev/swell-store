import Document, { Head, Html, Main, NextScript } from 'next/document'
import Link from 'next/link'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link rel="preconnect" href="https://fonts.gstatic.com" />
          <Link href="https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&family=Sora&display=swap" rel="stylesheet" />
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
