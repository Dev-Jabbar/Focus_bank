"use client";

import React from "react";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import SkeletonLoader from "../../../../../components/skelentonLoader/SkeletonLoader";
import SkeletonLoader2 from "../../../../../components/skelentonLoader/SkeletonLoader2";

const plans = [
  {
    name: "2359201183",
    ram: "Tier 3 savings account",
  },
  {
    name: "24931939401",
    ram: "Tier 5 current account",
  },
  {
    name: "39194586932",
    ram: "Tier 1 savings account",
  },

  {
    name: "2995582910",
    ram: "Tier 5 current account",
  },
];

const CheckIcon = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SupportPage = () => {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="">
      <div className=" relative overflow-x-auto min-[2560px]:h-[250px]  h-[150px] dark:bg-[#030d1f] bg-gray-600 pl-4 lg:pl-0 ">
        <div className="flex w-full absolute top-0  lg:justify-center justify-start items-center min-[2560px]:h-[250px] h-[150px]   ">
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="space-x-6 min-[2560px]:space-x-40 flex min-[2560px]:h-40   h-20 pr-6 lg:pr-0 ">
              {plans.map((plan) => (
                <RadioGroup.Option
                  key={plan.name}
                  value={plan}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? "ring-1 dark:first-letter:ring-blue-600 ring-opacity-60 ring-offset-2  dark:ring-offset-blue-800  "
                        : "hover:bg-gray-800"
                    }
                  ${
                    checked
                      ? "dark:bg-black bg-gray-950  bg-opacity-75 text-white"
                      : "dark:bg-black bg-gray-950"
                  }
                    relative flex cursor-pointer rounded-lg  px-5 py-4 min-[2560px]:py-10 shadow-md focus:outline-none`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex items-center">
                        <div className="text-sm min-[2560px]:text-4xl">
                          <RadioGroup.Label
                            as="p"
                            className={`font-bold min-[2560px]:text-4xl text-lg ${
                              checked ? "text-white" : "text-white"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline text-sm min-[2560px]:text-3xl   opacity-80 ${
                              checked ? "text-sky-100" : "text-white"
                            }`}
                          >
                            <span className="min-[2560px]:text-3xl  min-[2560px]:pt-4">
                              {plan.ram}
                            </span>
                          </RadioGroup.Description>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-black">
                            <CheckIcon className="h-6 w-6 min-[2560px]:w-10  min-[2560px]:h-10  bg-blue-700 md:ml-0 ml-2 rounded-full mb-8" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="  flex w-full pr-6 pl-6 relative   md:justify-center md:items-center flex-col mt-4 md:mt-7 lg:mt-8 xl:mt-10 min-[2560px]:mt-20 space-y-7 xl:space-y-11 min-[2560px]:space-y-40 lg:space-y-8 md:space-y-4">
        <div className="w-20 h-20 min-[2560px]:w-[200px]  min-[2560px]:h-[200px]">
          <SkeletonLoader2 />
        </div>

        <div className="flex flex-col  min-[2560px]:space-y-2 md:justify-center md:items-center">
          <div className="md:w-[250px] lg:w-[200px] w-[100px] min-[2560px]:w-[700px] min-[2560px]:h-8   ">
            <SkeletonLoader />
          </div>
          <div className="md:w-[350px] lg:w-[400px] w-[250px] min-[2560px]:w-[1000px] h-3  min-[2560px]:h-6 ">
            <SkeletonLoader />
          </div>
        </div>
        <div className="flex flex-col min-[2560px]:space-y-2 md:justify-center md:items-center">
          <div className="md:w-[280px] lg:[w-250px] w-[150px] min-[2560px]:w-[900px] min-[2560px]:h-10 ">
            <SkeletonLoader />
          </div>
          <div className="md:w-[350px] lg:w-[400px] w-[250px] h-3  min-[2560px]:w-[1300px]  min-[2560px]:h-8 ">
            <SkeletonLoader />
          </div>
        </div>
        <div className="flex flex-col min-[2560px]:space-y-2 md:justify-center md:items-center">
          <div className="md:w-[250px] lg:w-[200px] w-[100px] min-[2560px]:w-[700px] min-[2560px]:h-8 ">
            <SkeletonLoader />
          </div>
          <div className="md:w-[350px] lg:w-[400px] w-[250px] h-3   min-[2560px]:w-[1000px]  min-[2560px]:h-6  ">
            <SkeletonLoader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
