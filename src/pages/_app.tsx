import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { RestaurantProvider } from "~/context/RestaurantContext";
import GlobalStyles from "../styles/globals";
import { defaultTheme } from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Restaurant app</title>
        <meta name="description" content="Restaurant app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>
        <RestaurantProvider>
          <Component {...pageProps} />
        </RestaurantProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
