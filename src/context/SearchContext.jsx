import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [input, setInput] = useState("");

  return (
    <SearchContext.Provider value={{ input, setInput }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useHeroesSearchContext() {
  return useContext(SearchContext);
}
