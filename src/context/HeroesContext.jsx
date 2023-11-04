import React, { createContext, useContext, useState } from "react";

const HeroesContext = createContext();

export function HeroesContextProvider({ children }) {
  const [heroes, setHeroes] = useState([]);

  return (
    <HeroesContext.Provider value={{ heroes, setHeroes }}>
      {children}
    </HeroesContext.Provider>
  );
}

export function useHeroesContext() {
  return useContext(HeroesContext);
}
