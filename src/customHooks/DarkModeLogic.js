"use client";

import { useContext, useEffect } from "react";
import { FocusContext } from "../context/FocusContext";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const useDarkModeLogic = () => {
  const {
    theme,
    setTheme,
    systemTheme,
    mounted,

    setMounted,
  } = useContext(FocusContext);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  const renderThemeChanger = () => {
    if (!mounted) return false;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-5 h-5 mr-2 text-white  cursor-pointer  hover:animate-spin z-20 "
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-5 h-5 mr-2  text-white cursor-pointer hover:animate-spin-slow z-20 "
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return { renderThemeChanger };
};

export default useDarkModeLogic;
