"use client";

import React, { useContext, useState } from "react";

import {
  ArrowLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { Switch } from "@headlessui/react";
import LoginModal from "../../../components/modal/LoginModal";

import { useRouter } from "next/navigation";

import { FocusContext } from "../../../context/FocusContext";
const LoginPage = () => {
  const [enabled, setEnabled] = useState(false);

  const [usernameFocused, setUsernameFocused] = useState(true);
  const [passwordFocused, setPasswordFocused] = useState(true);

  const [passwordReveal, setPasswordReveal] = useState(false);

  const { password, setPassword, username, setUsername } =
    useContext(FocusContext);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUserNameBlur = () => {
    if (username.trim() === "") {
      setUsernameFocused(false);
    }
  };
  const handlePasswordBlur = () => {
    if (password.trim() === "") {
      setPasswordFocused(false);
    }
  };

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsOpen(true);

    setTimeout(() => {
      setIsOpen(false);
      router.push("/home");
    }, 2000);
  };

  const details = enabled
    ? "Your login info will be remebered on this device."
    : "you will need to login on your next visit.";
  return (
    <div className="pt-10 min-[2560px]:pt-[200px] flex flex-col justify-center items-center w-screen md:w-auto  mb-40">
      <div className="md:w-[600px] min-[2560px]:w-[1400px] 2xl:w-[800px] w-screen px-6 md:px-0 ">
        <div className="w-5">
          <Link href="/initial">
            <ArrowLeftIcon className="h-5 w-5 min-[2560px]:h-8 min-[2560px]:w-8" />
          </Link>
        </div>

        <div className="flex justify-center   ">
          <div className="flex flex-col items-center justify-center space-y-3 2xl:space-y-6 mb-10">
            <div className="h-[60px] w-[60px] min-[2560px]:w-[150px] min-[2560px]:h-[150px] ">
              <Image
                src="/focus.jpg"
                height={200}
                width={200}
                className="object-cover w-full h-full"
                alt="focusImage"
              />
            </div>
            <div className="font-extrabold min-[2560px]:text-5xl text-3xl">
              Welcome !
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-6 2xl:space-y-10">
            <div className="flex flex-col">
              <div>
                <div
                  className={`dark:text-gray-400 text-black flex justify-between mb-1 text-sm font-bold ${
                    !usernameFocused && username.trim() === ""
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  <div className="min-[2560px]:text-lg ">
                    Username
                    {!usernameFocused && username.trim() === "" ? "*" : ""}
                  </div>

                  <div className="text-sm  min-[2560px]:text-md">
                    {!usernameFocused && username.trim() === ""
                      ? "required"
                      : ""}
                  </div>
                </div>
                <input
                  className={`h-10 2xl:h-[50px] min-[2560px]:h-[70px] min-[2560px]:placeholder:text-lg bg-gray-500 w-full border-gray-700 border-[0.05px] rounded-md px-2 placeholder:text-sm  dark:bg-gray-900 dark:text-white ${
                    !usernameFocused && username.trim() == ""
                      ? "focus:border-red-500"
                      : "focus:border-blue-500"
                  } focus:outline-none dark:text-white text-start ${
                    !usernameFocused && username.trim() === ""
                      ? "border-red-500"
                      : ""
                  }`}
                  type="text"
                  placeholder="Type something"
                  required
                  onBlur={handleUserNameBlur}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <div
                  className={`dark:text-gray-400 text-black flex justify-between mb-1 2xl:mb-3 text-sm font-bold ${
                    !passwordFocused && password.trim() === ""
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  <div className="min-[2560px]:text-lg">
                    Password
                    {!passwordFocused && password.trim() === "" ? "*" : ""}
                  </div>

                  <div className="text-sm  min-[2560px]:text-md">
                    {!passwordFocused && password.trim() === ""
                      ? "required"
                      : ""}
                  </div>
                </div>

                <div className="relative ">
                  <input
                    className={`h-10 2xl:h-[50px] min-[2560px]:h-[70px] min-[2560px]:placeholder:text-lg bg-gray-500 w-full border-gray-700 border-[0.05px] rounded-md px-2 placeholder:text-sm dark:bg-gray-900 dark:text-white ${
                      !passwordFocused && password.trim() == ""
                        ? "focus:border-red-500"
                        : "focus:border-blue-500"
                    } focus:outline-none dark:text-white text-start ${
                      !passwordFocused && password.trim() === ""
                        ? "border-red-500"
                        : ""
                    }`}
                    type={passwordReveal ? "text" : "password"}
                    placeholder="Type something"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    onBlur={handlePasswordBlur}
                  />
                  <div
                    className="absolute cursor-pointer top-2 2xl:top-3 min-[2560px]:top-6 right-8 min-[2560px]:h-8 min-[2560px]:right-12"
                    onClick={() => setPasswordReveal(!passwordReveal)}
                  >
                    {passwordReveal ? (
                      <EyeSlashIcon className="w-5 h-5 min-[2560px]:h-8 min-[2560px]:w-8 absolute" />
                    ) : (
                      <EyeIcon className="w-5 h-5 min-[2560px]:h-8 min-[2560px]:w-8 absolute " />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-blue-500 mt-2 2xl:mt-4 pl-2 min-[2560px]:text-[18px] text-[13px]">
            forgot password?
          </div>

          <div className="flex justify-between mt-4 2xl:mt-8 px-2   ">
            <div className="font-bold md:text-lg min-[2560px]:text-2xl opcity-90">
              Remember me
            </div>

            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-blue-700" : "bg-gray-700"}
          relative inline-flex h-[25px] w-[45px] min-[2560px]:h-[40px] min-[2560px]:w-[60px]     shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] min-[2560px]:h-[35px]  min-[2560px]:w-[35px]  transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
          </div>
          <div className="text-sm pl-2  min-[2560px]:text-xl dark:opacity-70">
            {details}
          </div>
          <div className="px-4 mt-10">
            <button className="bg-blue-500 hover:bg-blue-600  min-[2560px]:h-[60px]  min-[2560px]:text-xl w-full h-10  rounded-md text-black text-center">
              Log in
            </button>
          </div>
        </form>
        <div className="mt-10 2xl:mt-12 flex justify-between w-full px-6">
          <div className="w-full mr-2 border-b    border-gray-800" />
          <div className="flex-shrink-0 dark:text-gray-400 min-[2560px]:text-xl font-bold">
            New user?
          </div>
          <div className="w-full ml-2 border-b border-gray-800" />
        </div>
        <div className="px-6 mt-10 2xl:mt-12">
          <button className="dark:bg-gray-900 bg-gray-600 hover:dark:bg-gray-800 hover:bg-gray-700  min-[2560px]:h-[60px] min-[2560px]:text-xl w-full h-10 rounded-md dark:text-blue-800  text-center">
            Sign up
          </button>
        </div>
        <LoginModal isOpen={isOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default LoginPage;
