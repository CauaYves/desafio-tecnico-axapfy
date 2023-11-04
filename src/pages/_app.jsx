/* eslint-disable @next/next/no-page-custom-font */
import "@/styles/globals.css";
import Head from "next/head";
import { HeroesContextProvider } from "@/context/HeroesContext"; // Use o nome correto do provedor

function App({ Component, pageProps }) {
  return (
    <HeroesContextProvider>
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
    </HeroesContextProvider>
  );
}

export default App;
