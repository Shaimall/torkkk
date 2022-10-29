import React from "react";
import Side2 from "../components/Side2";

const P8 = () => {
  return (
    <div className="flex h-[400px]">
      <div className="inline-block ">
        <Side2 />
      </div>
      <div className="w-[700.5px] h-[400px] inline-flex ">
        <div className="container pl-14 pt-16">
          <p className="text-3xl w-[400px] ">
            Lorem ipsum dolor sit amet, cotur adipisicing elit
          </p>
          <p className="text-sm w-[450px] leading-relaxed pt-5 text-[#83969F]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </p>
          <div className=" flex pt-20 ">
            <p className=" p-7 text-3xl border-r-2 border-[#83969F] text-[#83969F] ">
              92
            </p>
            <p className="pt-9 pl-5 text-[#83969F] "> Comments</p>
          </div>
        </div>
      </div>
      <div className="w-[698px] inline-flex">
        <img src="/img/6.jpg" alt="" />
      </div>
      <div>
        <Side2 />
      </div>
    </div>
  );
};

export default P8;
