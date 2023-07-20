"use client";

import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      res.status === 201 &&
        router.push("/login?success=Account has been created");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="md:flex md:flex-row flex flex-col-reverse   dark:bg-black bg-black  dark:text-white text-white   md:justify-center md:space-x-[200px] md:items-center w-screen h-screen justify-center items-center ">
      <div className="flex flex-col space-y-5 justify-center  items-center">
        <h1 className="font-bold text-lg">Create an Account</h1>
        <h2>Please sign up to access focus bank.</h2>
        <form
          className="flex flex-col space-y-3 md:w-[500px] w-screen px-6 "
          onSubmit={handleSubmit}
        >
          <input
            className="h-10 bg-gray-900 dark:bg-gray-900 text-white dark:text-white text-center"
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="h-10 bg-gray-900 dark:bg-gray-900 text-white dark:text-white text-center"
            type="text"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="h-10 bg-gray-900 dark:bg-gray-900 text-white dark:text-white text-center"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-800 h-8 hover:bg-blue-500">
            Register
          </button>
        </form>

        {err && "Something went wrong !"}
        <span>- OR -</span>

        <Link href="/login" className="text-green-700">
          Login with an existing account
        </Link>
      </div>

      <div>
        <Image
          className="spin-slow w-40 h-40 md:w-[250px] md:h-[250px]  rounded-full object-cover"
          src="/focus.jpg "
          width={400}
          height={400}
          alt="focus_bank logo"
        />
      </div>
    </div>
  );
};

export default Register;
