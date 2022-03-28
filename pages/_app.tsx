import { ThemeProvider } from "styled-components";
import Global from "styled/Global.styled";
import { theme } from "styled/Theme";

import { TransitionProvider } from "context/TransitionContext";
import TransitionLayout from "context/TransitionLayout";
import Box from "components/layout/Box";

function App({ Component, pageProps }) {
  return (
    <>
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
