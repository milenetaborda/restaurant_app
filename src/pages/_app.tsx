import { NextSeo } from "next-seo";
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

  const seoDescription =
    "Acreditamos que aqui você encontra o melhor da gastronomia do Brasil, como nossos pratos e bebidas. Venha conhecer nossos restaurantes.";

  return (
    <Fragment>
      <Head>
        <title>Restaurant app</title>
        <meta name="description" content={seoDescription} />
        <link rel="icon" href="/favicon.ico" />

        <NextSeo
          title={"Restaurant app"}
          description={seoDescription}
          openGraph={{
            title: "Restaurant app",
            description: seoDescription,
            locale: "pt_BR",
            site_name: "Restaurant app",
            url: `https://main.d2r4yumkch0add.amplifyapp.com/`,
            type: "website",
          }}
        />
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
