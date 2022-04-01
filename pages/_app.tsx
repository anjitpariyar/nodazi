import { ThemeProvider } from "styled-components";
import Global from "styled/Global.styled";
import { theme } from "styled/Theme";
import Head from "next/head";

import { TransitionProvider } from "context/TransitionContext";
import TransitionLayout from "context/TransitionLayout";
import Box from "components/layout/Box";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/image/fav.png" rel="icon" type="image/gif" sizes="16x16" />
        <meta property="og:title" content="NODAZI STUDIO" />
        <meta property="og:type" content="card" />
        {/* <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" /> */}
        <meta property="og:image" content="/image/home_banner.png" />
        <meta name="theme-color" content="#000" />
      </Head>
      <Global />
      <ThemeProvider theme={theme}>
        <TransitionProvider>
          <TransitionLayout>
            <Box>
              <Component {...pageProps} />
            </Box>
          </TransitionLayout>
        </TransitionProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
