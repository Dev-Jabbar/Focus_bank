import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import {
  MdOutlineCreditCard,
  MdOutlineCreditCardOff,
  MdAddCard,
} from "react-icons/md";
import Link from "next/link";

const MyCards = [
  {
    id: 1,
    icon: <MdOutlineCreditCard className="h-8 w-8 text-blue-500" />,
    Heading: "View your cards",
    Body: "View and customize your existing,active cards",
    url: "/home/blank/cards-page/viewCards",
  },
  {
    id: 2,
    icon: <MdAddCard className="h-8 w-8 text-blue-500" />,
    Heading: "Request a new card",
    Body: "Create a new virtual or physical card easily",
    url: "/home/blank/cards-page/requestNewCard",
  },
  {
    id: 3,
    icon: <MdOutlineCreditCardOff className="h-8 w-8 text-blue-500" />,
    Heading: "Card control",
    Body: "Diasble or enable your active cards",
    url: "/home/blank/cards-page/cardsControl",
  },
];

const Cards = () => {
  return (
    <>
      <div className=" md:grid md:grid-cols-2 flex flex-col md:space-y-0 space-y-3 md:gap-4 px-6 md:py-14 pt-4  dark:bg-black    pb-10 overflow-y-scroll ">
        {MyCards.map((Card) => {
          return (
            <Link key={Card.id} href={Card.url}>
              <div className="dark:bg-gray-900 bg-gray-300 w-full md:h-56  flex dark:hover:bg-gray-800 hover:bg-gray-200 pt-4 pb-2 space-x-4 px-2 md:px-0 md:flex-col flex-row items-center md:space-y-3 ">
                <div className="md:py-3 md:px-3 px-1 py-1 dark:bg-gray-950 bg-gray-400">
                  {Card.icon}
                </div>

                <div className="flex md:flex-col flex-row space-x-4 md:space-x-0 w-full md:w-auto justify-between   items-center md:space-y-3 ">
                  <div className="flex flex-col md:items-center md:space-y-3 space-y-1">
                    <div className="font-bold md:text-2xl">{Card.Heading}</div>
                    <div className=" opacity-80 text-sm md:text-md">
                      {Card.Body}
                    </div>
                  </div>

                  <div className="md:p-1 md:dark:bg-slate-700 md:bg-slate-400 rounded-full">
                    <ChevronRightIcon className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
