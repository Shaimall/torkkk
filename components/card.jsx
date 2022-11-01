import React from "react";

export const Card = ({ title, exerp, description }) => {
  return (
    <div className="md:flex flex-wrap  text-center md:text-left p-4 py-12 ">
      <p className="text-3xl ">{title}</p>
      <p className="text-lg pt-4">{exerp}</p>
      <p className="text-base pt-4 mb-8 ">{description}</p>

      <button className="w-full px-20 py-3 sm:py-3  rounded-full sm:px-9 bg-[#3DD2AE]  text-xs text-white md:self-end flex-auto md:flex-none">
        See More
      </button>
    </div>
  );
};
