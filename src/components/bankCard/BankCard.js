"use client";
import React, { useState } from "react";
import {
  ClipboardDocumentIcon,
  CheckIcon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Cards = [
  {
    id: 1,
    Balance: "$2,800.10",
    Account: "2359201183",
    Type: "Tier 3 savings account",
    status: "active",
    bg: "bg-gradient-to-tr from-sky-500 via-fuchsia-700 to-purple-500",
    buttonColor: "bg-[#1276e0]",
  },
  {
    id: 2,
    Balance: "$10,260.00",
    Account: "24931939401",
    Type: "Tier 5 current account",
    status: "active",
    bg: "bg-gradient-to-br from-orange-400 via-red-500 to-red-900",
    buttonColor: "bg-[#e33232]",
  },
  {
    id: 3,
    Balance: "$590.70",
    Account: "2359201183",
    Type: "Tier 1 savings account",
    status: "active",
    bg: " bg-gradient-to-t from-sky-300 via-blue-500 to-purple-600",
    buttonColor: "bg-[#7d48e0]",
  },
  {
    id: 4,
    Balance: "$800.65",
    Account: "2359201183",
    Type: "Tier 5 current account",
    status: "inactive",
    bg: " bg-gradient-to-br from-neutral-200 via-stone-400 to-stone-700",
    buttonColor: "bg-[#5c5454]",
    text: "text-black",
  },
];

const CommonCardFeatures = {
  button1: "Fund Account",
  button2: "Transaction History",
};

const BankCard = () => {
  const [copiedCardId, setCopiedCardId] = useState(null);
  const [AccBal, setAccBal] = useState(true);

  const handleCopyClick = (text, cardId) => {
    navigator.clipboard.writeText(text);
    setCopiedCardId(cardId);
    setTimeout(() => setCopiedCardId(null), 2000);
  };

  return (
    <>
      {Cards.map((card) => {
        const isCopied = copiedCardId === card.id;
        return (
          <div
            key={card.id}
            className={`flex flex-col ${card.text} mr-4 justify-between pb-4 pr-4 p-2 ${card.bg} h-[230px] rounded-lg md:w-[480px] w-[340px] mt-2`}
          >
            <div className="flex justify-between">
              <div className="flex flex-col space-x-1 items-baseline ">
                <div className="opacity-80 tracking-tighter">Balance</div>
                <div className="flex gap-2 items-center font-bold text-lg ">
                  <span>{AccBal ? card.Balance : "$*****"}</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => setAccBal(!AccBal)}
                  >
                    {AccBal ? (
                      <EyeSlashIcon className="w-5 h-5 " />
                    ) : (
                      <EyeIcon className="w-5 h-5 " />
                    )}
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-x-1 items-baseline ">
                <div>Status</div>
                <div className="v font-bold ">{card.status}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col space-x-1 items-baseline ">
                <div className="opacity-80 tracking-tighter">
                  Account Number
                </div>
                <div className=" flex gap-2 font-semibold">
                  <span>{card.Account}</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleCopyClick(card.Account, card.id)}
                  >
                    {isCopied ? (
                      <CheckIcon className="w-5 h-5 text-green-700" />
                    ) : (
                      <ClipboardDocumentIcon className="w-5 h-5 " />
                    )}
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-x-1 items-end">
                <div>Type</div>
                <div className="b text-md font-semibold">{card.Type}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <Link href="/home/blank/payments-page/fundAccount">
                <button className={`${card.buttonColor} p-2 font-bold`}>
                  {CommonCardFeatures.button1}
                </button>
              </Link>
              <Link href="/home/blank/transaction-history-page">
                <button className={`${card.buttonColor} p-2 font-bold`}>
                  {CommonCardFeatures.button2}
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BankCard;
