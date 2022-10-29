import React from "react";

const P10 = () => {
  return (
    <div className="bg-[#1A2124] h-[673px]">
      <div className="flex">
        <div className="pl-[220px] pt-[187px] inline-block">
          <p className="text-sm text-white w-[100px]"> Get in touch</p>
          <p className="text-sm text-white pt-[37px] w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="pl-[180px] pt-[187px] inline-block">
          <p className="text-sm text-white "> Stay in touch</p>
          <div className="flex pt-7 relative ">
            <div className="bg-white rounded-xl w-[434px] h-[74px] "></div>
            <button className="w-[105px] h-[74px] bg-[#835FA8] absolute rounded-l-xl ">
              <svg
                className="mx-auto w-[31px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#FFFFFF"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button>
          </div>
          <p className="text-white text-sm pt-10 w-[350px]">
            {" "}
            We don’t send spam. Actually, who are we kiding, we’ll spam the shit
            out of you’r inbox
          </p>
        </div>
      </div>
      <div className="flex pl-[220px] pt-1 ">
        <div className="text-white text-sm">
          <p>Resources</p>
          <p className="pt-7">Tour</p>
          <p>Customers</p>
          <p>Pricing and Plans</p>
          <p>New Features</p>
          <p>Education</p>
        </div>
        <div className="text-white text-sm pl-[110px]">
          <p>Features</p>
          <p className="pt-7">Tour</p>
          <p>Customers</p>
          <p>Pricing and Plans</p>
          <p>New Features</p>
          <p>Education</p>
        </div>
        <div className="text-white text-sm pl-[110px]">
          <p>How To's</p>
          <p className="pt-7">Tour</p>
          <p>Customers</p>
          <p>Pricing and Plans</p>
          <p>New Features</p>
          <p>Education</p>
        </div>
      </div>
    </div>
  );
};

export default P10;
