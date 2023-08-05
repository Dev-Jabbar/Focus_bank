"use client";

import { createContext, useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const FocusContext = createContext();

const FocusContextProvider = ({ children }) => {
  const [myGreeting, setMygreeting] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showFaveIcons2, setShowFaveIcons2] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    !password && !username && router.push("/initial");
  }, []);

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
        password,
        setPassword,
        username,
        setUsername,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
};

export { FocusContextProvider, FocusContext };
