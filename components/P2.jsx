import React from "react";

const P2 = () => {
  return (
    <div className="relative bg-[#835FA8]">
      <div className=" pt-24 pb-72 container">
        <p className=" font-openl text-white text-[48px] pl-10">
          Super Duper & such
        </p>

        <p className="  font-openl text-white text-[18px] pt-6 pl-10 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing<br></br> elit, sed
          do eiusmod tempor incididunt ut labore et<br></br> dolore magna.
          aliqua
        </p>

        <div className="pl-10">
          <button className="px-16 py-4 rounded-full bg-[#3DD2AE] mt-11 text-[18px] text-white  ">
            See More
          </button>
        </div>
      </div>{" "}
      <div className=" absolute inset-0 w-full h-full overflow-hidden">
        {" "}
        <img
          className="absolute top-52 left-[600px] md:left-[400px] md:w-[300px] md:top-72"
          src="/img/interface.png"
          alt=""
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        {" "}
        <img
          className="absolute -top-[117px] left-[900px] md:left-[600px]  bottom-0 overflow-hidden h-[1080px] md:-top-[100px] md:w-[400px] h-[900px] "
          src="/img/phone.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default P2;
