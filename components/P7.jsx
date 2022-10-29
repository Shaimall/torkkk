import React from "react";
import Side from "../components/Side";

const P7 = () => {
  return (
    <div className="flex h-[650px]">
      <div className="w-[250px]  inline-block ">
        <Side />
      </div>
      <div className="w-[1124px] inline-flex">
        {" "}
        <img src="/img/4.jpg" alt="" />
      </div>
      <div className="w-full bg-[#835FA8] ">
        <div className="container pl-28">
          <p className="text-sm text-white pt-32 ">12th June 2015</p>
          <p className="text-4xl text-white pt-7 leading-relaxed w-[600px]">
            Lorem ipsum dolor sit amet, cotur adipisicing elit sed do eiusmod
            tempor incididunt ut labore et dolore
          </p>
          <div className="flex pt-5">
            <div className="bg-white w-14 h-14 rounded-full"></div>
            <p className="text-white text-sm pl-5 pt-4"> Blaz Robar</p>
          </div>
        </div>
        <div className="pt-44">
          <div className="w-[139px] h-[50px] bg-black   ">
            <p className="text-sm text-white px-7 py-4">Latest News </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P7;
