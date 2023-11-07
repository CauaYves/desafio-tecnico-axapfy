import React, { createContext, useContext, useState } from "react";

const HeroesContext = createContext();

export function HeroContextProvider({ children }) {
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
