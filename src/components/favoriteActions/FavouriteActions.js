import React from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  BanknotesIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import {
  MdOutlineCreditCard,
  MdOutlineCreditCardOff,
  MdOutlineManageAccounts,
  MdFlight,
  MdFoodBank,
} from "react-icons/md";

import { BiHistory, BiReceipt } from "react-icons/bi";
import { FaMoneyCheckAlt, FaRandom } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import Link from "next/link";

const FaveActions = [
  {
    id: 1,
    text: "Bills payment",
    icon: (
      <BanknotesIcon className="rounded-full  min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14  md:p-2 p-1 text-yellow-400 bg-[#706441] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#403c32] ",
    url: "/home/blank/payments-page/billsPayment",
  },
  {
    id: 2,
    text: "Send money",
    icon: (
      <ArrowRightCircleIcon className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14 md:p-2 p-1 text-yellow-400 bg-[#706441] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#403c32]",
    url: "/home/blank/payments-page/sendMoney",
  },
  {
    id: 3,
    text: "Airtime & data",
    icon: (
      <DevicePhoneMobileIcon className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14 md:p-2 p-1 text-[#cf6fd6] bg-[#3d3645] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#2f2a33]",
    url: "/home/blank/airtime-page",
  },
  {
    id: 4,
    text: "Recieve money",
    icon: (
      <ArrowLeftCircleIcon className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14  md:p-2 p-1 text-[#060959] bg-[#363ce0] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#343685]",
    url: "/home/blank/payments-page/receiveMoney",
  },
  {
    id: 5,
    text: "Request card",
    icon: (
      <MdOutlineCreditCard className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14 md:p-2 p-1 text-[#4275f5] bg-[#163ea6] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#42568a]",
    url: "/home/blank/cards-page/requestCard",
  },
  {
    id: 6,
    text: "Block card",
    icon: (
      <MdOutlineCreditCardOff className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14 md:p-2 p-1 text-[#f78699] bg-[#f7020f] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#992026]",
    url: "/home/blank/cards-page/blockCard",
  },
];
const FaveActions2 = [
  {
    id: 7,
    text: "Edit beneficiary",
    icon: (
      <UserGroupIcon className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14  md:p-2 p-1 text-[#0b5973] bg-[#217f9e] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#30515c]",
    url: "/home/blank/payments-page/editBeneficiary",
  },
  {
    id: 8,
    text: "Transaction history",
    icon: (
      <BiHistory className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14 md:p-2 p-1 text-[#033326] bg-[#36755b] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#21382e]",
    url: "/home/blank/transaction-history-page",
  },
  {
    id: 9,
    text: "Generate statement",
    icon: (
      <BiReceipt className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14  md:p-2 p-1 text-[#033326] bg-[#236b58] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#1c5243]",
    url: "/home/blank/payments-page/generateStatement",
  },
  {
    id: 10,
    text: "Account officer",
    icon: (
      <MdOutlineManageAccounts className="rounded-full  min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14 md:p-2 p-1 text-[#261ec7] bg-[#4941e0] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#221d7a]",
    url: "/home/blank/support-page/account-officer",
  },
  {
    id: 11,
    text: "Book flight",
    icon: (
      <MdFlight className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14  md:p-2 p-1 text-[#4a1d02] bg-[#592e15] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#331d11]",
    url: "/home/blank/payments-page/bookflight",
  },
  {
    id: 12,
    text: "Restaurants",
    icon: (
      <MdFoodBank className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14 md:p-2 p-1 text-[#014a26] bg-[#1c8c54] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#29523d] ",
    url: "/home/blank/payments-page/restaurants",
  },
  {
    id: 13,
    text: "Cheques",
    icon: (
      <FaMoneyCheckAlt className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14 md:p-2 p-1 text-[#6e61ff] bg-[#18106e] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#4e3efa]",
    url: "/home/blank/payments-page/cheques",
  },
  {
    id: 14,
    text: "Foreign exchange",
    icon: (
      <BsCurrencyExchange className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14 md:p-2 p-1 text-[#d09df2] bg-[#470a70] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#7f10c9]",
    url: "/home/blank/payments-page/foreignExchange",
  },
  {
    id: 15,
    text: "Miscellaneous",
    icon: (
      <FaRandom className="rounded-full min-[2560px]:p-3  min-[2560px]:h-14  min-[2560px]:w-14  md:p-2 p-1 text-[#c4a9c4] bg-[#63015a] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#3b0c3a]",
    url: "/home/blank/payments-page/miscellaneous",
  },
];

const FavouriteActions = ({ showFaveIcons2 }) => {
  return (
    <>
      {FaveActions.map((action) => {
        return (
          <Link key={action.id} href={action.url}>
            <div
              className={`w-full h-[90px]  min-[2560px]:h-[200px] text-center   cursor-pointer dark:bg-gray-900 bg-gray-300 ${action.hoverbg} dark:hover:opacity-70 hover:opacity-90 group flex justify-center items-center`}
            >
              <div className="flex flex-col items-center  min-[2560px]:gap-6 md:gap-2 gap-1 ">
                {action.icon}
                <span className="text-sm  min-[2560px]:text-2xl pointer-events-none">
                  {action.text}
                </span>
              </div>
            </div>
          </Link>
        );
      })}

      {showFaveIcons2 &&
        FaveActions2.map((action2) => {
          return (
            <Link key={action2.id} href={action2.url}>
              <div
                className={`w-full h-[90px] min-[2560px]:h-[200px] text-center   cursor-pointer dark:bg-gray-900 bg-gray-300 ${action2.hoverbg} dark:hover:opacity-70 hover:opacity-90 group flex justify-center items-center`}
              >
                <div className="flex flex-col items-center min-[2560px]:gap-6 md:gap-2 gap-1 ">
                  {action2.icon}
                  <span className="text-sm min-[2560px]:text-2xl pointer-events-none">
                    {action2.text}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default FavouriteActions;
