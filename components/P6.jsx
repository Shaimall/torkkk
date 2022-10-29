import React from "react";

const P6 = () => {
  return (
    <div className="grid-cols-2 grid">
      <div className="bg-[#E9EEF1] w-full h-[697px] ">
        <div className="container pl-[140px] pt-[178.6px] inline-flex align-baseline">
          <div className="w-[70px] h-[90px]">
            <svg
              className="w-[56px] h-[77px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#835FA8"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
          </div>
          <p className="font-openl text-5xl pt-4 pl-4  ">Connectivity</p>
        </div>

        <div className="w-[480px] mx-auto pt-9 ">
          <span className="text-xl leading-relaxed">
            Flannel ennui narwhal, craft beer twee Vice plaid authentic synth
            Intelligentsia stumptown gluten-free drinking vinegar Schlitz
            mixtape.
          </span>
        </div>
        <div className="w-[480px] mx-auto pt-9 ">
          <p className="text-sm leading-loose">
            Kickstarter umami Intelligentsia kogi. Try-hard flannel literally,
            chambray blog crucifix put a bird on it four dollar toast cardigan
            scenester aesthetic sartorial chia messenger bag Pinterest. 3 wolf
            moon Thundercats Banksy paleo, yr four loko Shoreditch dreamcatcher.
          </p>
        </div>
      </div>
      <div className="">
        <img className="h-full" src="/img/3.jpg" alt="" />
      </div>
    </div>
  );
};

export default P6;
