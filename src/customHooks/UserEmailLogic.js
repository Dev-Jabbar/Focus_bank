"use client";

import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { FocusContext } from "../context/FocusContext";

const useUserEmailLogic = () => {
  const session = useSession();
  const { setUserEmail, userEmail } = useContext(FocusContext);

  useEffect(() => {
    setUserEmail(session?.data?.user?.email);
  }, [session?.data?.user?.email, setUserEmail]);

  return { userEmail };
};

export default useUserEmailLogic;
