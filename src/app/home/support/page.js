"use client";

import { ChevronRightIcon } from "@heroicons/react/24/solid";

import { IoIosPerson } from "react-icons/io";

import { BiChat } from "react-icons/bi";

import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

import { AiOutlineQuestionCircle, AiOutlineMail } from "react-icons/ai";

import { MdFeedback, MdReportGmailerrorred } from "react-icons/md";

import useGreetingLogic from "../../../customHooks/GreetingLogic";
import useUserEmailLogic from "../../../customHooks/UserEmailLogic";
import useModalOpenCloseLogic from "../../../customHooks/ModalOpenCloseLogic";
import CustomModal from "../../../components/modal/CustomModal";

const Supports = [
  {
    id: 1,
    icon: <IoIosPerson className="md:h-8 md:w-8 h-6 w-6 text-blue-500" />,
    Heading: "Account officer",
    ModalText: "Acccount officer",
  },
  {
    id: 2,
    icon: <BiChat className="md:h-8 md:w-8 h-6 w-6 text-blue-500" />,
    Heading: "Live chat",
    ModalText: "Live chat",
  },
  {
    id: 3,
    icon: (
      <AiOutlineQuestionCircle className="md:h-8 md:w-8 h-6 w-6 text-blue-500" />
    ),
    Heading: "FAQ",
    ModalText: "FAQ",
  },
  {
    id: 4,
    icon: <MdFeedback className="md:h-8 md:w-8 h-6 w-6 text-blue-500" />,
    Heading: "Send feedback",
    ModalText: "Send feedback",
  },
  {
    id: 5,
    icon: (
      <MdReportGmailerrorred className="md:h-8 md:w-8 h-6 w-6 text-blue-500" />
    ),
    Heading: "Report an issue",
    ModalText: "Report an issue",
  },
];

const Socials = [
  {
    id: 1,
    icon: <BsTwitter className="md:h-8 md:w-8 h-6 w-6 text-blue-500" />,
    Heading: "@FocusBankNig",
  },
  {
    id: 2,
    icon: <BsFacebook className="md:h-8 md:w-8 h-6 w-6 text-blue-500" />,
    Heading: "FocusBankNig",
  },
  {
    id: 3,
    icon: <BsInstagram className="md:h-8 md:w-8 h-6 w-6 text-blue-500" />,
    Heading: "@FocusBankNig",
  },
];
const Support = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal, selected } =
    useModalOpenCloseLogic(); // imported the Modal open/close logic  from my custom hooks

  const { userEmail } = useUserEmailLogic(); //using  user email logic from custom hook with its states being managed in the context

  const { myGreeting } = useGreetingLogic(); //using greeting logic from custom hook with its states being managed in the context

  return (
    <>
      <div className="overflow-y-scroll">
        <div className="px-6 pt-6 md:font-extrabold font-bold text-sm  md:text-2xl">
          {myGreeting},<span className="font-bold opacity-80">{userEmail}</span>
        </div>
        <div className="px-6  hidden md:block md:justify-center pb-6 pt-4 opacity-90 font-bold md:text-xl">
          <div className="text-center">Support</div>
        </div>
        <div className="px-6 mt-6 md:mt-0">
          <div className=" md:grid md:grid-cols-2 flex flex-col md:bg-transparent md:dark:bg-transparent dark:bg-gray-900 bg-gray-300  md:gap-4  md:py-14 md:pt-4      md:pb-10 pb-2  ">
            <div className="px-3 md:hidden flex md:justify-center pb-1 pt-2 opacity-90 font-bold md:text-xl">
              <div>Support</div>
            </div>
            {Supports.map((Support) => {
              return (
                <div
                  key={Support.id}
                  onClick={() => handleOpenModal(Support.id)}
                  className="dark:bg-gray-900 bg-gray-300 w-full md:h-56 cursor-pointer  flex dark:hover:bg-gray-800 hover:bg-gray-200 pt-4 pb-2 space-x-4 px-2 md:px-0 md:flex-col flex-row md:justify-evenly items-center md:space-y-3 "
                >
                  {isModalOpen && selected === Support.id && (
                    <CustomModal
                      isOpen={isModalOpen}
                      onClose={handleCloseModal}
                      ModalText={Support.ModalText}
                    />
                  )}
                  <div className="md:py-3 md:px-3 px-1 py-1 dark:bg-gray-950 bg-gray-400">
                    {Support.icon}
                  </div>
                  <div className="flex md:flex-col flex-row space-x-4 md:space-x-0 w-full md:w-auto justify-between   items-center md:space-y-3 ">
                    <div className="flex flex-col md:items-center md:space-y-3 space-y-1">
                      <div className="font-bold md:text-2xl">
                        {Support.Heading}
                      </div>
                    </div>

                    <div className="md:p-1 md:dark:bg-slate-700 md:bg-slate-400 rounded-full">
                      <ChevronRightIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t-[0.1px] pt-10 hidden md:block dark:border-gray-800 border-gray-400 mx-6"></div>
        <div className="px-6  hidden md:block justify-center pb-6 pt-4 opacity-90 font-bold text-xl">
          <div className="text-center">Social Media</div>
        </div>
        <div className="px-6 mt-6 md:mt-0">
          <div className=" md:grid md:grid-cols-2 flex flex-col md:bg-transparent md:dark:bg-transparent dark:bg-gray-900 bg-gray-300  md:gap-4  md:py-14 md:pt-4      md:pb-10 pb-2  ">
            <div className="px-3 md:hidden flex md:justify-center pb-1 pt-2 opacity-90 font-bold md:text-xl">
              <div>Social media</div>
            </div>
            {Socials.map((Social) => {
              return (
                <div
                  key={Social.id}
                  className="dark:bg-gray-900 bg-gray-300 w-full md:h-56  flex dark:hover:bg-gray-800 hover:bg-gray-200 pt-4 pb-2 space-x-4 px-2 md:px-0 md:flex-col flex-row md:justify-evenly items-center md:space-y-3 "
                >
                  <div className="md:py-3 md:px-3 px-1 py-1 dark:bg-gray-950 bg-gray-400">
                    {Social.icon}
                  </div>

                  <div className="flex md:flex-col flex-row space-x-4 md:space-x-0 w-full md:w-auto justify-between   items-center md:space-y-3 ">
                    <div className="flex flex-col md:items-center md:space-y-3 space-y-1">
                      <div className="font-bold md:text-2xl">
                        {Social.Heading}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t-[0.1px] pt-10 hidden md:block  dark:border-gray-800 border-gray-400 mx-6"></div>
        <div className="px-6  hidden md:block justify-center   pb-6 pt-4 opacity-90 font-bold text-xl">
          <div className="text-center">Email Us</div>
        </div>

        <div className="px-6 mt-6 md:mt-0 mb-20">
          <div className=" md:grid md:grid-cols-1 flex flex-col md:bg-transparent md:dark:bg-transparent dark:bg-gray-900 bg-gray-300  md:gap-4  md:py-14 md:pt-4      md:pb-10 pb-2  ">
            <div className="px-3 md:hidden flex md:justify-center   pb-1 pt-2 opacity-90 font-bold md:text-xl">
              <div>Email Us</div>
            </div>

            <div className="dark:bg-gray-900 bg-gray-300 w-full md:h-40  flex dark:hover:bg-gray-800 hover:bg-gray-200 pt-4 pb-2 space-x-4 px-2 md:px-0 md:flex-col flex-row md:justify-evenly items-center md:space-y-3 ">
              <div className="md:py-3 md:px-3 px-1 py-1 dark:bg-gray-950 bg-gray-400">
                <AiOutlineMail className="h-8 w-8 text-blue-500" />
              </div>

              <div className="flex md:flex-col flex-row space-x-4 md:space-x-0 w-full md:w-auto justify-between   items-center md:space-y-3 ">
                <div className="flex flex-col md:items-center md:space-y-3 space-y-1">
                  <div className="font-bold text-sm md:text-2xl">
                    CustomerSupport@FocusBank.NG
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
