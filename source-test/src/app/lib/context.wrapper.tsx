"use client";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext<IGlobalContext | null>(null);

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataSearch, setDataSearch] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ dataSearch, setDataSearch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;
