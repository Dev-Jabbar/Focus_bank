// components/Modal.js

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
        disableOutsideClick
        disableEscape
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Background overlay with blur */}
            <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-sm bg-opacity-70" />
          </Transition.Child>

          {/* Center the modal */}
          <div className="w-screen h-screen flex justify-center items-center">
            <div className="h-[100px] w-[100px] min-[2560px]:h-[300px] min-[2560px]:w-[300px] animate-spin">
              <Image
                src="/focus.jpg"
                height={200}
                width={200}
                className="object-cover w-full h-full"
                alt="focusImage"
              />
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LoginModal;
