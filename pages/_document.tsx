import Document, { Html, Main, Head, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

/**
 * This will help to render the styled component css in Server side
 */

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="/image/fav.png"
            rel="icon"
            type="image/gif"
            sizes="16x16"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Commissioner:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <meta property="og:title" content="NODAZI STUDIO" />
          <meta property="og:type" content="card" />
          {/* <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" /> */}
          <meta property="og:image" content="/image/home_banner.png" />
          <meta name="theme-color" content="#000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
