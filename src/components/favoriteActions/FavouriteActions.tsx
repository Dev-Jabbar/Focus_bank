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

type Props = {};

const FaveActions = [
  {
    id: 1,
    text: "Bills payment",
    icon: (
      <BanknotesIcon className="rounded-full  p-2 text-yellow-400 bg-[#706441] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#403c32] ",
  },
  {
    id: 2,
    text: "Send money",
    icon: (
      <ArrowRightCircleIcon className="rounded-full  p-2 text-yellow-400 bg-[#706441] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#403c32]",
  },
  {
    id: 3,
    text: "Airtime & data",
    icon: (
      <DevicePhoneMobileIcon className="rounded-full  p-2 text-[#cf6fd6] bg-[#3d3645] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#2f2a33]",
  },
  {
    id: 4,
    text: "Recieve money",
    icon: (
      <ArrowLeftCircleIcon className="rounded-full  p-2 text-[#060959] bg-[#363ce0] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#343685]",
  },
  {
    id: 5,
    text: "Request card",
    icon: (
      <MdOutlineCreditCard className="rounded-full  p-2 text-[#4275f5] bg-[#163ea6] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#42568a]",
  },
  {
    id: 6,
    text: "Block card",
    icon: (
      <MdOutlineCreditCardOff className="rounded-full  p-2 text-[#f78699] bg-[#f7020f] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#992026]",
  },
  {
    id: 7,
    text: "Edit beneficiary",
    icon: (
      <UserGroupIcon className="rounded-full  p-2 text-[#0b5973] bg-[#217f9e] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#30515c]",
  },
  {
    id: 8,
    text: "Transaction histoy",
    icon: (
      <BiHistory className="rounded-full  p-2 text-[#033326] bg-[#36755b] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#21382e]",
  },
  {
    id: 9,
    text: "Generate statement",
    icon: (
      <BiReceipt className="rounded-full  p-2 text-[#033326] bg-[#236b58] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#1c5243]",
  },
  {
    id: 10,
    text: "Account officer",
    icon: (
      <MdOutlineManageAccounts className="rounded-full  p-2 text-[#261ec7] bg-[#4941e0] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#221d7a]",
  },
  {
    id: 11,
    text: "Book flight",
    icon: (
      <MdFlight className="rounded-full  p-2 text-[#4a1d02] bg-[#592e15] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#331d11]",
  },
  {
    id: 12,
    text: "Resturants",
    icon: (
      <MdFoodBank className="rounded-full  p-2 text-[#014a26] bg-[#1c8c54] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#29523d] ",
  },
  {
    id: 13,
    text: "Cheques",
    icon: (
      <FaMoneyCheckAlt className="rounded-full  p-2 text-[#6e61ff] bg-[#18106e] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#4e3efa]",
  },
  {
    id: 14,
    text: "Foreign exchange",
    icon: (
      <BsCurrencyExchange className="rounded-full  p-2 text-[#d09df2] bg-[#470a70] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#7f10c9]",
  },
  {
    id: 15,
    text: "Miscellaneous",
    icon: (
      <FaRandom className="rounded-full  p-2 text-[#c4a9c4] bg-[#63015a] w-10 h-10 pointer-events-none" />
    ),

    hoverbg: "hover:bg-[#3b0c3a]",
  },
];

const FavouriteActions = (props: Props) => {
  return (
    <>
      {FaveActions.map((action) => {
        return (
          <div
            className={`w-full h-[90px] cursor-pointer bg-gray-900 ${action.hoverbg} hover:opacity-70 group flex justify-center items-center`}
          >
            <div className="flex flex-col items-center gap-2 ">
              {action.icon}
              <span className="text-sm pointer-events-none">{action.text}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FavouriteActions;
