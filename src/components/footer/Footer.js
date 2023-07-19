"use client";

import {
  HomeIcon,
  UserIcon,
  BanknotesIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";

import { BiSupport } from "react-icons/bi";

import useNavOrFooterSelect from "../../customHooks/NavOrFooterSelect";

const footerDetails = [
  {
    id: 1,
    footerIcon: <HomeIcon />,
    text: "Home",
    feature: "pl-6 ",
    link: "/home",
  },
  {
    id: 2,
    footerIcon: <BanknotesIcon />,
    text: "Payments",

    link: "/home/payments",
  },
  {
    id: 3,
    footerIcon: <CreditCardIcon />,
    text: "Cards",

    link: "/home/cards",
  },
  {
    id: 7,
    footerIcon: <BiSupport />,
    text: "Support",

    link: "/home/support",
  },
  {
    id: 8,
    footerIcon: <UserIcon />,
    text: "Profile",

    link: "/home/profile",
  },
];

const Footer = () => {
  const { selectedDiv } = useNavOrFooterSelect();
  return (
    <>
      <div className="w-screen bg-[#030d1f] bottom-0 fixed   flex-shrink-0  h-[60px]  md:hidden flex pr-6 justify-between items-center">
        {footerDetails.map((footerdetail) => {
          return (
            <Link key={footerdetail.id} href={footerdetail.link}>
              <div
                className={`flex flex-col ${
                  selectedDiv === footerdetail.id
                    ? "border-t-4 h-[60px] border-blue-800 justify-center "
                    : ""
                }} cursor-pointer ${footerdetail.feature}  items-center`}
              >
                <div
                  className={`h-5 w-5 ${
                    selectedDiv == footerdetail.id
                      ? "text-blue-400"
                      : "text-gray-400"
                  }`}
                >
                  {footerdetail.footerIcon}
                </div>
                <div
                  className={`text-sm ${
                    selectedDiv == footerdetail.id
                      ? "text-blue-400"
                      : "text-gray-200"
                  }`}
                >
                  {footerdetail.text}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Footer;
