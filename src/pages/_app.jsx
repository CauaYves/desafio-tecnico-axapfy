/* eslint-disable @next/next/no-page-custom-font */
import "@/styles/globals.css";
import Head from "next/head";
import { HeroContextProvider, SearchContextProvider } from "@/context";

function App({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <HeroContextProvider>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </HeroContextProvider>
    </SearchContextProvider>
  );
}

export default App;
