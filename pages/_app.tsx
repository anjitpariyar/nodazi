import { ThemeProvider } from "styled-components";
import Global from "styled/Global.styled";
import { theme } from "styled/Theme";

function App({ Component, pageProps }) {
  return (
    <>
      <Global />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
