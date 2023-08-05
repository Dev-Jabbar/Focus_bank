"use client";

import { useContext } from "react";
import BankCard from "../../components/bankCard/BankCard";

import FavouriteActions from "../../components/favoriteActions/FavouriteActions";
import ScrollFuncion from "../../components/scrollFunction/ScrollFuncion";
import Updates from "../../components/updates/Updates";
import { FocusContext } from "../../context/FocusContext";

export default function Home() {
  const { showFaveIcons2, setShowFaveIcons2 } = useContext(FocusContext);

  return (
    <main className="flex flex-col overflow-y-auto  scrollbar-track-gray-800 scrollbar-thumb-[#030d1f]/80 scrollbar-thin   overflow-x-hidden dark:bg-black">
      <div className="flex flex-col md:pt-8 pt-4">
        <div className="text-[#1276e0]  flex justify-between pl-6 pr-6">
          <span className="font-bold md:text-lg text-md  min-[2560px]:text-2xl">
            Accounts
          </span>
          {/*using framer motion animation libray */}
          <ScrollFuncion />
          <span className="md:text-sm  min-[2560px]:text-xl font-bold flex-shrink-0 ">
            4 accounts
          </span>
        </div>

        <div className="flex gap-4 h-[255px]  min-[2560px]:h-[440px] pl-6  overflow-x-auto  relative  ">
          <div className="absolute flex ">
            <BankCard />
          </div>
        </div>
        <div className="border-b-[0.1px]  border-gray-800 mx-6"></div>
        <div className="text-[#1276e0] flex justify-between py-8 pl-6 pr-6">
          <span className="font-bold  min-[2560px]:text-2xl text-lg">
            Favorite Actions
          </span>

          <span
            className="text-sm  min-[2560px]:text-xl font-bold underline cursor-pointer"
            onClick={() => setShowFaveIcons2(!showFaveIcons2)}
          >
            {showFaveIcons2 ? "Show less" : "Show more"}
          </span>
        </div>
        <div className=" grid md:grid-cols-4 grid-cols-3 gap-[8px] px-6    pb-10 ">
          <FavouriteActions showFaveIcons2={showFaveIcons2} />
        </div>
        <div className="border-b-[0.1px]  border-gray-800 mx-6"></div>
        <div className="text-[#1276e0] flex  py-6 pl-6 pr-6">
          <span className="font-bold  min-[2560px]:text-2xl text-lg">
            Updates
          </span>
        </div>
        <div className="hidden  md:grid md:grid-cols-2 md:gap-3 md:px-6 2xl:grid-cols-3    md:pb-10 ">
          <Updates />
        </div>

        <div className="flex pl-6 relative md:hidden md:h-[300px] h-[330px] overflow-x-auto mb-[100px]">
          <div className="   absolute flex  space-x-3 pr-6 ">
            <Updates />
          </div>
        </div>
      </div>
    </main>
  );
}
