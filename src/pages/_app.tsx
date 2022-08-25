import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globals";
import { defaultTheme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Get In</title>
        <meta name="description" content="Restaurante Get In" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
