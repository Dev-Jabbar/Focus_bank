"use client";

import { motion } from "framer-motion";
import BankCard from "@/components/bankCard/BankCard";

import FavouriteActions from "@/components/favoriteActions/FavouriteActions";
import Updates from "@/components/updates/Updates";
export default function Home() {
  return (
    <main className="flex flex-col overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col pt-8">
        <div className="text-[#1276e0] flex justify-between pl-6 pr-6">
          <span className="font-bold text-lg">Accounts</span>
          {/*using framer motion animation libray */}
          <motion.span
            className="text-white "
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1, duration: 5 }}
          >
            hold shift + mouse up or down to scroll
          </motion.span>
          <span className="text-sm font-bold">4 accounts</span>
        </div>

        <div className="flex gap-4 h-[255px] pl-6  overflow-x-auto  relative  ">
          <div className="absolute flex ">
            <BankCard />
          </div>
        </div>
        <div className="border-b-[0.1px]  border-gray-800 mx-6"></div>
        <div className="text-[#1276e0] flex justify-between py-8 pl-6 pr-6">
          <span className="font-bold text-lg">Favorite Actions</span>

          <span className="text-sm font-bold underline">Show less</span>
        </div>
        <div className=" grid grid-cols-4 gap-[8px] px-6    pb-10 ">
          <FavouriteActions />
        </div>
        <div className="border-b-[0.1px]  border-gray-800 mx-6"></div>
        <div className="text-[#1276e0] flex  py-6 pl-6 pr-6">
          <span className="font-bold text-lg">Updates</span>
        </div>
        <div className=" grid grid-cols-2 gap-3 px-6 2xl:grid-cols-3    pb-10 ">
          <Updates />
        </div>
      </div>
    </main>
  );
}
