import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Get In</title>
        <meta name="description" content="Restaurante Get In" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
