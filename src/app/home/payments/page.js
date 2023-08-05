"use client";
import React from "react";

import {
  ArrowRightIcon,
  ArrowLeftIcon,
  BanknotesIcon,
  ChevronRightIcon,
  DevicePhoneMobileIcon,
  QrCodeIcon,
} from "@heroicons/react/24/solid";

import { GiScubaTanks } from "react-icons/gi";
import useModalOpenCloseLogic from "../../../customHooks/ModalOpenCloseLogic";
import CustomModal from "../../../components/modal/CustomModal";

const payments = [
  {
    id: 1,
    icon: (
      <ArrowRightIcon className="md:h-8 md:w-8 min-[2560px]:w-14 min-[2560px]:h-14 h-6 w-6 text-blue-500" />
    ),
    Heading: "Send money",
    Body: "Send money to Focus bank or any other bank in Nigeria",
    ModalText: "Send money",
  },
  {
    id: 2,
    icon: (
      <DevicePhoneMobileIcon className="md:h-8 min-[2560px]:w-14 min-[2560px]:h-14 md:w-8 h-6 w-6 text-blue-500" />
    ),
    Heading: "Airtime and Data",
    Body: "Buy your airtime for any mobile network",
    ModalText: "Airtime and Data",
  },
  {
    id: 3,
    icon: (
      <BanknotesIcon className="md:h-8 min-[2560px]:w-14 min-[2560px]:h-14 md:w-8 h-6 w-6 text-blue-500" />
    ),
    Heading: "Bills payments",
    Body: "Renew your utility bills here",
    ModalText: "Bills payments",
  },
  {
    id: 4,
    icon: (
      <ArrowLeftIcon className="md:h-8 min-[2560px]:w-14 min-[2560px]:h-14 md:w-8 h-6 w-6 text-blue-500" />
    ),
    Heading: "Recieve money",
    Body: "Recieve money from friends and family in a few clicks",
    ModalText: "Recieve money",
  },
  {
    id: 5,
    icon: (
      <GiScubaTanks className="md:h-8 min-[2560px]:w-14 min-[2560px]:h-14 md:w-8 h-6 w-6 text-blue-500" />
    ),
    Heading: "Top-up bet accounts",
    Body: "Send money to any bet account of your choice easily",
    ModalText: "Top-up bet accounts",
  },
  {
    id: 6,
    icon: (
      <QrCodeIcon className="md:h-8 min-[2560px]:w-14 min-[2560px]:h-14 md:w-8 h-6 w-6 text-blue-500" />
    ),
    Heading: "QR payments",
    Body: "Scan Qr codes and pay instantly",
    ModalText: "QR payments",
  },
];

const Payments = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal, selected } =
    useModalOpenCloseLogic(); // imported the Modal open/close logic  from my custom hooks
  return (
    <>
      <div className=" md:grid md:grid-cols-2 flex flex-col md:space-y-0 space-y-3 md:gap-4 px-6 md:py-14 pt-4  dark:bg-black pb-20  md:pb-10 overflow-y-auto ">
        {payments.map((payment) => {
          return (
            <div
              key={payment.id}
              onClick={() => handleOpenModal(payment.id)}
              className="dark:bg-gray-900 cursor-pointer bg-gray-300 w-full md:h-56 min-[2560px]:h-[600px]  flex dark:hover:bg-gray-800 hover:bg-gray-200 pt-4 min-[2560px]:pt-20 pb-2 space-x-4 px-2 md:px-0 md:flex-col flex-row items-center md:space-y-3 min-[2560px]:space-y-[80px] "
            >
              {isModalOpen && selected === payment.id && (
                <CustomModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  ModalText={payment.ModalText}
                />
              )}
              <div className="md:py-3 md:px-3 px-1 py-1 dark:bg-gray-950 bg-gray-400">
                {payment.icon}
              </div>

              <div className="flex md:flex-col flex-row space-x-4 md:space-x-0 w-full md:w-auto justify-between   items-center md:space-y-3 min-[2560px]:space-y-[80px]  ">
                <div className="flex flex-col md:items-center md:space-y-3 min-[2560px]:space-y-[80px] space-y-1">
                  <div className="font-bold md:text-2xl min-[2560px]:text-4xl">
                    {payment.Heading}
                  </div>
                  <div className=" opacity-80 min-[2560px]:text-2xl text-sm md:text-md">
                    {payment.Body}
                  </div>
                </div>

                <div className="md:p-1 md:dark:bg-slate-700 md:bg-slate-400 rounded-full">
                  <ChevronRightIcon className="h-5 w-5 min-[2560px]:w-14 min-[2560px]:h-14" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Payments;
