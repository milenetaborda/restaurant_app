import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <title>Get In</title>
        <meta name="description" content="Restaurante Get In" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>
        <RestaurantProvider>
          <ToastContainer />
          <Component {...pageProps} />
        </RestaurantProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
