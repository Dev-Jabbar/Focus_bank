"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useNavOrFooterSelect from "../../customHooks/NavOrFooterSelect";
import Image from "next/image";
import Link from "next/link";
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
import { signOut } from "next-auth/react";

const BankTools = [
  {
    id: 1,
    icon: <HomeIcon className="w-5 h-5" />,
    title: "Home",
    bg: "bg-gradient-to-r from-gray-900 via-sky-900 to-gray-500",
    hover: "hover:opacity-80",
    link: "/home",
  },
  {
    id: 2,
    icon: <BanknotesIcon className="w-5 h-5" />,
    title: "Payments",
    link: "/home/payments",
  },
  {
    id: 3,
    icon: <CreditCardIcon className="w-5 h-5" />,
    title: "Cards",
    link: "/home/cards",
  },
  {
    id: 4,
    icon: <DevicePhoneMobileIcon className="w-5 h-5" />,
    title: "Airtime & Data",
    link: "/home/blank/airtime-page",
  },
  {
    id: 5,
    icon: <BiHistory className="w-5 h-5" />,
    title: "Transaction History",
    link: "/home/blank/transaction-history-page",
  },
  {
    id: 6,
    icon: <PaperAirplaneIcon className="w-5 h-5" />,
    title: "Send Money",
    link: "/home/blank/send-money-page",
  },
  {
    id: 7,
    icon: <BiSupport className="w-5 h-5" />,
    title: "Support",
    link: "/home/support",
  },
  {
    id: 8,
    icon: <UserIcon className="w-5 h-5" />,
    title: "Profile",
    link: "/home/profile",
  },
];

const SideNav = () => {
  const session = useSession();

  const router = useRouter();

  const { selectedDiv } = useNavOrFooterSelect();

  if (session.status === "unauthenticated") {
    router?.push("/login");
  }

  return (
    <>
      <div className="flex flex-col  w-[280px] h-full text-white justify-between   py-4 border-r-[0.1px] border-gray-600 bg-opacity-80  border-opacity-80 bg-[#030d1f]  ">
        <div className="flex flex-col gap-3 ">
          <Link href="/home">
            <div className="flex gap-2 items-center pl-6 justify-start cursor-pointer  ">
              <Image
                className=""
                src="/focus.jpg "
                width={50}
                height={50}
                alt="focus_bank logo"
              />

              <span className=" text-blue-400  text-b font-bold ">
                Focus Bank
              </span>
            </div>
          </Link>
          <div>
            <div className="flex flex-col  ">
              {BankTools.map((tools) => {
                return (
                  <Link key={tools.id} href={tools.link}>
                    <div className=" hover:bg-gray-900 cursor-pointer">
                      <div
                        className={`flex gap-3 items-center ${
                          selectedDiv === tools.id
                            ? "bg-gradient-to-r from-gray-900 via-sky-900 to-gray-500 hover:opacity-80"
                            : ""
                        } text-sm  py-3 pl-8 `}
                      >
                        {tools.icon}
                        <span>{tools.title}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="justify-center flex flex-col  text-sm items-start">
          <div
            className="pl-6 flex gap-3 w-full hover:bg-gray-900 cursor-pointer py-3"
            onClick={() => signOut()}
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            <span>Logout</span>
          </div>
          <div className="flex flex-col gap pl-6">
            <div className=" font-extralight">Copyright © 2023</div>
            <div className="font-thin">Welcome to focus bank</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
