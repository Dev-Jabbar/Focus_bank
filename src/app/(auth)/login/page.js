"use client";

import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    signIn("credentials", { email, password });
  };

  const session = useSession();
  if (session.status === "authenticated") {
    router?.push("/home");
  }

  console.log(session);
  return (
    <div className="md:flex md:flex-row flex flex-col-reverse   dark:bg-black bg-black dark:text-white text-white   md:justify-center md:space-x-[200px] md:items-center w-screen h-screen justify-center items-center ">
      <div className="flex flex-col space-y-5 justify-center  items-center">
        <h1 className="font-bold text-2xl text-gray-400 pb-10">
          Welcome to focus bank
        </h1>

        <form
          className="flex flex-col space-y-3 md:w-[500px] w-screen px-6 "
          onSubmit={handleSubmit}
        >
          <input
            className="h-10 text-black text-center"
            type="text"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="h-10 text-black text-center"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-800 h-8 hover:bg-blue-500">Login</button>
        </form>

        <div className=" md:flex md:flex-row md:space-y-0 space-y-0 flex flex-col w-screen px-6 md:px-auto md:w-full  md:justify-around">
          <div
            className="cursor-pointer order-2 md:order-none w-full mb-2 md:mb-0 md:w-auto flex justify-center bg-gray-400 md:bg-transparent  hover:opacity-80"
            onClick={() => signIn("google")}
          >
            <span className="text-blue-700 font-bold  ">Login with go</span>
            <span className="text-red-700 font-bold ">ogle</span>
          </div>
          <Link href="/register">
            <div className="order-1 md:order-none mb-2 md:mb-0 md:mt-0 mt-4 text-center bg-gray-100 md:bg-transparent  text-green-700 cursor-pointer hover:opacity-80 font-bold  ">
              Sign up
            </div>
          </Link>
          <div
            className="cursor-pointer order-3 md:order-none  w-full md:w-auto flex justify-center bg-gray-400 md:bg-transparent  hover:opacity-80"
            onClick={() => signIn("github")}
          >
            <span className="text-blue-700 font-bold  ">Login with git</span>
            <span className="text-red-700 font-bold ">hub</span>
          </div>
        </div>
      </div>

      <div>
        <Image
          className="spin-slow w-40 h-40 md:w-[250px] md:h-[250px] md:mt-10 rounded-full object-cover"
          src="/focus.png "
          width={400}
          height={400}
          alt="focus_bank logo"
        />
      </div>
    </div>
  );
};

export default Login;
