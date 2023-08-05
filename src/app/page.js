"use client";

import React, { useContext, useEffect } from "react";

import { useRouter } from "next/navigation";

import { FocusContext } from "../context/FocusContext";

const RootPage = () => {
  const router = useRouter();
  const { password, username } = useContext(FocusContext);

  useEffect(() => {
    !username && !password ? router.push("/initial") : router.push("/initial");
  }, [password, router, username]);

  return <div className="dark:bg-black"></div>;
};

export default RootPage;
