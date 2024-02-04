'use client';
import React, { useState, createContext, useContext } from "react";
import { navLinks } from "../base/libs/data";

type SectionName = (typeof navLinks)[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext(){
  const context = useContext(ActiveSectionContext);
  if(context === null){
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider"
    )
  }
  return context;
}