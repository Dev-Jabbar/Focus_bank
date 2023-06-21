import React from "react";
import Image from "next/image";
import {
  DevicePhoneMobileIcon,
  HomeIcon,
  BanknotesIcon,
  CreditCardIcon,
  PaperAirplaneIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

import { BiHistory, BiSupport } from "react-icons/bi";

const BankTools = [
  {
    id: 1,
    icon: <HomeIcon className="w-5 h-5" />,
    title: "Home",
    bg: "bg-gradient-to-r from-gray-900 via-sky-900 to-gray-500",
    hover: "hover:opacity-80",
  },
  { id: 2, icon: <BanknotesIcon className="w-5 h-5" />, title: "Payments" },
  { id: 3, icon: <CreditCardIcon className="w-5 h-5" />, title: "Cards" },
  {
    id: 4,
    icon: <DevicePhoneMobileIcon className="w-5 h-5" />,
    title: "Airtime & Data",
  },
  {
    id: 5,
    icon: <BiHistory className="w-5 h-5" />,
    title: "Transaction History",
  },
  {
    id: 6,
    icon: <PaperAirplaneIcon className="w-5 h-5" />,
    title: "Send Money",
  },
  { id: 7, icon: <BiSupport className="w-5 h-5" />, title: "Support" },
  { id: 8, icon: <UserIcon className="w-5 h-5" />, title: "Profile" },
];

type Props = {};

const SideNav = (props: Props) => {
  return (
    <>
      <div className="flex flex-col  w-[280px] h-full justify-between   py-4 border-r-[0.1px] border-gray-600 bg-[#030d1f] bg-opacity-80 border-opacity-80  ">
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-2 items-center pl-6 justify-start  ">
            <Image
              className=""
              src="/focus.png "
              width={50}
              height={50}
              alt="focus_bank logo"
            />
            <span className=" text-blue-400  text-b font-bold">Focus Bank</span>
          </div>
          <div>
            <div className="flex flex-col  ">
              {BankTools.map((tools) => {
                return (
                  <div className=" hover:bg-gray-900">
                    <div
                      className={`flex gap-3 items-center ${tools.bg} ${tools.hover} text-sm  py-3 pl-8 `}
                    >
                      {tools.icon}
                      <span>{tools.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pl-8 flex flex-col gap-4 text-sm items-start">
          <div className="flex gap-3">
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            <span>Logout</span>
          </div>
          <div className="flex flex-col gap">
            <div className=" font-extralight">Copyright © 2023</div>
            <div className="font-thin">Welcome to focus bank</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
