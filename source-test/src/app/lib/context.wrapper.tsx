"use client";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext<IGlobalContext | null>(null);

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataSearch, setDataSearch] = useState<string>("");
  const [basket, setBasket] = useState<string>("");

  return (
    <GlobalContext.Provider
      value={{ dataSearch, setDataSearch, basket, setBasket }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;
