import React from "react";

export const Card = ({ title, exerp, description }) => {
  return (
    <div className="flex flex-col">
      <p className="text-[38px] h-28">{title}</p>
      <p className="text-[25px] pt-4">{exerp}</p>
      <p className="text-[18px] pt-4 mb-8 max-h-24 overflow-hidden">
        {description}
      </p>
      <button className="px-16 py-4 rounded-full bg-[#3DD2AE] mt-auto text-[18px] text-white ">
        See More
      </button>
    </div>
  );
};
