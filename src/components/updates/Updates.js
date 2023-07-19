import React from "react";
import Image from "next/image";

const updates = [
  {
    id: 1,
    heading: "Movies,tickets and travels",
    content:
      "All you need for your vacation is ready for you! click to discover more ...",
    imageAlt: "image for movies ",
    imageSrc: "/movies.jpg",
  },
  {
    id: 2,
    heading: "Loans and credit request",
    content:
      "Need urgent loan for your big next project? we'd love to give you a helping hand : ).",
    imageAlt: "image for loan",
    imageSrc: "/loan.jpg",
  },
  {
    id: 3,
    heading: "Become a lucky millionaire!",
    content: "Feeling lucky? try our raffle draw here!",
    imageAlt: "image for million",
    imageSrc: "/million.jpg",
  },
  {
    id: 4,
    heading: "Need support?",
    content:
      "Our readily available customer agents are happy to help you out.ALWAYS!",
    imageAlt: " Image for support",
    imageSrc: "/support.jpg",
  },
  {
    id: 5,
    heading: "Set your transaction limit",
    content: "Click here to manage your transaction limits",
    imageAlt: " Image for limit",
    imageSrc: "/limit.jpg",
  },
  {
    id: 6,
    heading: "Bills and utilities",
    content: "Quickly pay for your utilities in few step!",
    imageAlt: "Image for bills",
    imageSrc: "/bills.jpg",
  },
];
const Updates = () => {
  return (
    <>
      {updates.map((update) => {
        return (
          <div
            key={update.id}
            className="md:w-full h-[300px] w-[350px]  hover:backdrop-40 hover:opacity-70 dark:hover:bg-gray-800 hover:bg-gray-200 cursor-pointer flex flex-col  dark:bg-gray-900 bg-gray-300"
          >
            <div>
              <Image
                height={400}
                width={300}
                alt={update.imageAlt}
                src={update.imageSrc}
                className="w-full h-[220px]"
              />
            </div>
            <div className="flex flex-col gap-[0.5px] items-center pt-1 px-3">
              <h1 className="text-lg font-bold">{update.heading}</h1>
              <div className="text-sm">{update.content}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Updates;
