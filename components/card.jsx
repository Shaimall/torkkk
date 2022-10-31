import React from "react";

export const Card = ({ title, exerp, description }) => {
  return (
    <div className="md:flex flex-wrap  text-center md:text-left p-4 py-12 ">
      <p className="text-[38px] ">{title}</p>
      <p className="text-[25px] pt-4">{exerp}</p>
      <p className="text-[18px] pt-4 mb-8 ">{description}</p>

      <button className="px-20 py-3 sm:py-3 rounded-full sm:px-9 bg-[#3DD2AE]  text-[18px] text-white md:self-end flex-auto md:flex-none">
        See More
      </button>
    </div>
  );
};
