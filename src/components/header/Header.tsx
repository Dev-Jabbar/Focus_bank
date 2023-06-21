import React from "react";
import { BellAlertIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className=" bg-[#030d1f] h-[70px]  flex px-4 justify-between items-center   bg-opacity-80 border-[0.1px] border-t-0 border-gray-600">
      <div className="w-9 h-9 rounded-full bg-black flex items-center  justify-center hover:bg-gray-800 cursor-pointer">
        <BellAlertIcon className="w-5 h-5" />
      </div>
      <div>Home</div>
      <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-900 cursor-pointer">
        <SunIcon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Header;
