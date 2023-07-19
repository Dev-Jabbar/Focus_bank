"use client";

import { BellAlertIcon } from "@heroicons/react/24/solid";

import CustomModal from "../modal/CustomModal";
import useHeaderTitleLogic from "../../customHooks/HeaderTitleLogic";

import useDarkModeLogic from "../../customHooks/DarkModeLogic";
import useModalOpenCloseLogic from "../../customHooks/ModalOpenCloseLogic";

const Header = () => {
  const { FocusHeaderTitle } = useHeaderTitleLogic(); // imported the logic for the header title from my custom hooks.
  const { renderThemeChanger } = useDarkModeLogic(); // imported the dark mode logic  from my custom hooks

  const { isModalOpen, handleOpenModal, handleCloseModal } =
    useModalOpenCloseLogic(); // imported the Modal open/close logic  from my custom hooks which uses the state in context .

  const ModalText = "Notifications";
  return (
    <div className=" bg-[#030d1f] md:h-[70px] h-[60px] text-white  flex px-4 justify-between items-center   bg-opacity-80 border-[0.1px] border-t-0 border-gray-600">
      <div
        className="w-9 h-9 rounded-full bg-black flex items-center  justify-center hover:bg-gray-800 cursor-pointer"
        onClick={handleOpenModal}
      >
        <BellAlertIcon className="w-5 h-5" />
      </div>
      {isModalOpen && (
        <CustomModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          ModalText={ModalText}
        />
      )}
      <div>{FocusHeaderTitle}</div>

      {renderThemeChanger()}
    </div>
  );
};

export default Header;
