"use client";

import { useState } from "react";

const useLoginState = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return { username, setUsername, password, setPassword };
};

export default useLoginState;
