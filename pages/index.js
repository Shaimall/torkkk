import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Card } from "../components/card";

export default function Home() {
  return (
    <div>
      {/* Remove this*/}

      {/* the header can be of min hieght screen and have a backgroung image of the hero image */}
      <header className="min-h-screen bg-cover bg-no-repeat bg- bg-[url('/img/p1.jpg')] ">
        {/* the logo can go here in div. it can be aligned left with layout any position method */}

        <div>
          <img className="w-[61px] h-[77px]" src="img/logo.svg" alt="" />
        </div>
      </header>

      <section className=" bg-[#835FA8] md:h-[500px] ">
        {/* you can use a grid to sperate the two sections */}
        <div className="grid sm:grid-cols-2 max-w-full md:h-[500px] sm:container ">
          <div className=" relative sm:order-last   ">
            {/*2nd COL the image can go here and you can you position absolute to position them. its easier if you export the two phone images togeter */}

            <img
              className="sm:absolute bottom-0 right-0 md:h-[110%] sm:max-w-none  "
              src="img/phones2.png"
              alt=""
            />
          </div>
          <div className=" sm:w-auto pl-3 pt-10 ">
            {/* 1st COL the Heor feature text and the button can go here */}
            <p className=" font-openl text-white text-xl sm:text-[48px] sm:pb-14  ">
              Super Duper & such
            </p>

            <p className="  font-openl text-white text-sm sm:text-[18px] sm:pb-4 sm:leading-8 md:pb-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing<br></br> elit,
              sed do eiusmod tempor incididunt ut labore et<br></br> dolore
              magna. aliqua
            </p>

            <div className="h-12 pt-2">
              <button className="px-2 sm:px-7 py-1 sm:py-3 rounded-full bg-[#3DD2AE] text-xs sm:text-l text-white   ">
                See More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="px-[10px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-7 pt-[120px] pb-[100px]  ">
        {/* use a grid to make 3 columns and make a CARD COMPONENT here since the html elements are being repeated. you can loop the array i have created at the bottom of the file*/}
        {FEATER_CARD.map((item) => (
          <Card {...item} />
        ))}
      </section>
    </div>
  );
}

const FEATER_CARD = [
  {
    title: "Design & Features",
    exerp: "Flannel ennui narwhal, craft beer twee Vice plaid authentic synth.",
    description:
      "Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest.Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest.Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest.",
    href: "#",
  },
  {
    title: "Pocket Power",
    exerp: "Flannel ennui narwhal, craft beer twee Vice plaid authentic synth.",
    description:
      "Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest.Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest.Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest.",
    href: "#",
  },
  {
    title: "Inspired by the world",
    exerp: "Flannel ennui narwhal, craft beer twee Vice plaid authentic synth.",
    description:
      "Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest.Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest.Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest. ",
    href: "#",
  },
];
