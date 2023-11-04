import "@/styles/globals.css";
import { HeroesContextProvider } from "@/context/HeroesContext"; // Use o nome correto do provedor

function App({ Component, pageProps }) {
  return (
    <HeroesContextProvider>
      <Component {...pageProps} />
    </HeroesContextProvider>
  );
}

export default App;
