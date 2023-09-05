import React, { Children } from "react";
import { useContext, useState, createContext } from "react";
const DarkContext = createContext([]);
export const useDarkModeContext = () => useContext(DarkContext);

export function DarkModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DarkContext.Provider>
  );
}
