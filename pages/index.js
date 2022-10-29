import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      {/* Remove this*/}

      {/* the header can be of min hieght screen and have a backgroung image of the hero image */}
      <header className="min-h-screen   bg-[url('/img/p1.jpg')] ">
        {/* the logo can go here in div. it can be aligned left with layout any position method */}

        <div>
          <img className="w-[61px] h-[77px]" src="img/logo.svg" alt="" />
        </div>
      </header>

      <section className=" bg-[#835FA8]">
        {/* you can use a grid to sperate the two sections */}
        <div className="grid-cols-2">
          <div className="pt-10 pl-16">
            {/* 1st COL the Heor feature text and the button can go here */}
            <p className=" font-openl text-white text-xl ">
              Super Duper & such
            </p>

            <p className="  font-openl text-white text-sm   ">
              Lorem ipsum dolor sit amet, consectetur adipisicing<br></br> elit,
              sed do eiusmod tempor incididunt ut labore et<br></br> dolore
              magna. aliqua
            </p>

            <div className="">
              <button className="px-8 py-3 rounded-full bg-[#3DD2AE] mt-11 text-sm text-white  ">
                See More
              </button>
            </div>
          </div>
          <div>
            {/*2nd COL the image can go here and you can you position absolute to position them. its easier if you export the two phone images togeter */}
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section>
        {/* use a grid to make 3 columns and make a CARD COMPONENT here since the html elements are being repeated. you can loop the array i have created at the bottom of the file*/}
      </section>
    </div>
  );
}

const FEATER_CARD = [
  {
    title: "Design & Features",
    exerp: "Flannel ennui narwhal, craft beer twee Vice plaid authentic synth.",
    description:
      "Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest.",
    href: "#",
  },
  {
    title: "Pocket Power",
    exerp: "Flannel ennui narwhal, craft beer twee Vice plaid authentic synth.",
    description:
      "Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest.",
    href: "#",
  },
  {
    title: "Inspired by the world",
    exerp: "Flannel ennui narwhal, craft beer twee Vice plaid authentic synth.",
    description:
      "Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest.Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog.",
    href: "#",
  },
];
