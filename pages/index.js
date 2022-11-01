import React from "react";
import { Card } from "../components/card";

export default function Home() {
  return (
    <div>
      {/* Remove this*/}

      {/* the header can be of min hieght screen and have a backgroung image of the hero image */}
      <header className="min-h-screen bg-no-repeat bg-cover bg-center  bg-[url('/img/p1.jpg')] ">
        {/* the logo can go here in div. it can be aligned left with layout any position method */}

        <div className="absolute left-10 flex flex-shrink mt-9">
          <img className="w-full h-20 sm:h-32" src="img/logo.svg" alt="" />
        </div>
      </header>

      <section className=" bg-[#835FA8] md:h-[500px] ">
        {/* you can use a grid to sperate the two sections */}
        <div className="grid md:grid-cols-2  md:h-[500px] md:container xl:px-40 ">
          <div className=" md:w-auto pl-3 pt-10 md:mt-20 ">
            {/* 1st COL the Heor feature text and the button can go here */}
            <p className="text-center md:text-left font-openl text-white sm:text-5xl md:text-2xl xl:text-3xl mb-2 sm:leading-normal text-5xl ">
              Super Duper & such
            </p>

            <p className=" text-center md:text-left font-openl text-white md:text-lg  xl:text-xl md:pb-4 sm:leading-relaxed md:pb-7 text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing<br></br> elit,
              sed do eiusmod tempor incididunt ut labore et<br></br> dolore
              magna. aliqua
            </p>

            <div className="h-12 sm:pt-1 text-center md:text-left ">
              <button className="px-6 sm:px-7 py-3 sm:py-3 rounded-full bg-[#3DD2AE] text-xs sm:text-l text-white   ">
                See More
              </button>
            </div>
          </div>
          <div className=" relative    ">
            {/*2nd COL the image can go here and you can you position absolute to position them. its easier if you export the two phone images togeter */}

            <img
              className="md:absolute bottom-0 right-0 md:h-[110%] md:max-w-md   "
              src="img/phones2.png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Feature section */}

      <section className=" bg-[#F4F8FB] ">
        {/* use a grid to make 3 columns and make a CARD COMPONENT here since the html elements are being repeated. you can loop the array i have created at the bottom of the file*/}
        <div className="container px-16 py-4 md:px-1 md:py-14 lg:px-16 grid grid-cols-1  md:grid-cols-3 md:gap-10 ">
          {FEATER_CARD.map((item, i) => (
            <Card {...item} key={i} />
          ))}
        </div>
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
