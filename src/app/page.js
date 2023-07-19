"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const RootPage = () => {
  const session = useSession();

  const router = useRouter();

  if (session.status === "unauthenticated") {
    router?.push("/login");
  }

  if (session.status === "authenticated") {
    router?.push("/home");
  }

  return <div className="dark:bg-black"></div>;
};

export default RootPage;
