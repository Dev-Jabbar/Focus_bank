"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { AiFillCamera } from "react-icons/ai";

import { useState } from "react";
import { Switch } from "@headlessui/react";

import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

import useGreetingLogic from "../../../customHooks/GreetingLogic";
import useUserEmailLogic from "../../../customHooks/UserEmailLogic";

const Profile = () => {
  const session = useSession();

  const router = useRouter();

  if (session.status === "unauthenticated") {
    router?.push("/login");
  }

  const { userEmail } = useUserEmailLogic(); //using  user email logic from custom hook with its states being managed in the context
  const { myGreeting } = useGreetingLogic(); //using greeting logic from custom hook with its states being managed in the context

  const [enabled, setEnabled] = useState(false);
  const details = enabled
    ? "Your login info will be remebered on this device."
    : "you will need to login on your next visit.";

  return (
    <>
      <div className="flex flex-col overflow-y-auto">
        <div className="flex flex-col dark:bg-[#030d1f] bg-gray-300 justify-center gap-3 items-center h-[200px]">
          <div className="cursor-pointer border-dotted border-gray-600 rounded-full border-[0.1px]  p-9">
            <AiFillCamera className="h-6 w-6 " />
          </div>
          <div className="font-bold text-lg">{userEmail}</div>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <div className="font-bold md:text-2xl text-lg pt-6 ">
            {myGreeting}
          </div>
          <div className="flex-col flex items-center gap-5">
            <div className="dark:bg-[#030d1f] bg-gray-300 md:px-4 h-[75px]  flex flex-col pt-2 lg:w-[650px] md:w-[400px] w-[500px] min536:w-[400px] min390:w-[320px] px-2 min360:w-[270px]">
              <div className="flex justify-between   ">
                <div className="font-bold md:text-lg opcity-90">
                  Remember me
                </div>
                <div>
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? "bg-blue-700" : "bg-gray-700"}
          relative inline-flex h-[25px] w-[45px]    shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${enabled ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
              </div>
              <div className="text-sm dark:opacity-70">{details}</div>
            </div>
            <div
              className="dark:bg-[#030d1f] bg-gray-300 hover:bg-gray-800 cursor-pointer text-red-700 w-[150px] rounded-md flex justify-center items-center h-10"
              onClick={() => signOut()}
            >
              <ArrowRightOnRectangleIcon className="w-6 h-6 " />
              <div className="ml-2 font-bold text-lg">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
