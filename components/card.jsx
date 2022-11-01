import React from "react";

export const Card = ({ title, exerp, description }) => {
  return (
    <div className="md:flex flex-wrap  text-center md:text-left p-4 py-12  ">
      <div className="flex-row">
        <p className="text-3xl h-20 ">{title}</p>
        <p className="text-lg ">{exerp}</p>
        <p className="text-base pt-5 mb-8  ">{description}</p>
      </div>

      <button className=" w-full md:w-36 px-4 py-3 sm:py-3  rounded-full sm:px-4 bg-[#3DD2AE]  text-xs text-white md:self-end flex-auto md:flex-none">
        See More
      </button>
    </div>
  );
};
// working on this, not done yet
export const Card2 = ({ title, description }) => {
  return (
    <div className="md:flex flex-wrap  text-center md:text-left p-4 py-12 ">
      <p className="text-3xl ">{title}</p>
      <p className="text-base pt-4 mb-8 ">{description}</p>
    </div>
  );
};
