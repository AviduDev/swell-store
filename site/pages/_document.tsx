import Document, { Head, Html, Main, NextScript } from 'next/document'
import Link from '../components/ui/Link/Link';
import Link from 'next/link';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head
           
        />
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
