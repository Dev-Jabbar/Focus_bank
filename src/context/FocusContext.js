"use client";

import { createContext, useState } from "react";

import { useTheme } from "next-themes";

const FocusContext = createContext();

const FocusContextProvider = ({ children }) => {
  const [myGreeting, setMygreeting] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showFaveIcons2, setShowFaveIcons2] = useState(false);

  return (
    <FocusContext.Provider
      value={{
        myGreeting,
        setMygreeting,
        userEmail,
        setUserEmail,
        mounted,
        setMounted,
        theme,
        setTheme,
        systemTheme,
        setShowFaveIcons2,
        showFaveIcons2,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
};

export { FocusContextProvider, FocusContext };
