import Image from "next/image";
import Link from "next/link";
import React from "react";

const InitialPage = () => {
  return (
    <div className="md:h-screen  w-screen pt-6 md:pt-0 flex px-4 md:px-8 lg:px-0 overflow-y-scroll items-center justify-center flex-col">
      <div>
        <div className="md:h-[60px] h-[40px] w-[40px] md:w-[60px]  min-[2560px]:h-[150px] min-[2560px]:w-[150px]">
          <Image
            src="/focus.jpg"
            height={200}
            width={200}
            className="object-cover w-full h-full"
            alt="focusLogo"
          />
        </div>
      </div>
      <div className="md:flex md:flex-row pb-10 md:pb-0 flex-col-reverse flex items-center md:space-x-[200px] min-[2560px]:space-x-[500px]">
        <div className="flex flex-col lg:items-center md:items-start xl:items-center items-center font-light ">
          <h1 className="font-extrabold md:text-4xl min-[2560px]:text-6xl">
            Welcome to Focus Bank
          </h1>
          <p className="pt-1 dark:text-gray-400 text-gray-500 min-[2560px]:text-3xl text-center md:text-start">
            Making your banking experience an enjoyable one
          </p>

          <div className="pt-14 flex space-x-4 min-[2560px]:space-x-8">
            <Link href="/login2">
              <span className="bg-blue-400 cursor-pointer min-[2560px]:text-xl min-[2560px]:px-9 min-[2560px]:py-5  px-4 py-3 font-semibold rounded-lg text-black">
                Get started
              </span>{" "}
            </Link>
            <Link href="/login2">
              <span className="bg-black border cursor-pointer min-[2560px]:text-xl min-[2560px]:px-9 min-[2560px]:py-5 border-blue-400 text-blue-400 px-4 py-3 font-semibold rounded-lg ">
                Log in
              </span>
            </Link>
          </div>
        </div>
        <div className="md:h-[450px] h-[400px] md:w-[380px] w-full min-[2560px]:h-[1000px] min-[2560px]:w-[900px]">
          <Image
            src="/bank.jpg"
            height={1000}
            width={1000}
            className="object-cover w-full h-full"
            alt="bankLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
