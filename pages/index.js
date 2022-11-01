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
              <button className="px-6 sm:px-7 py-3 sm:py-3 mt-3 rounded-full bg-[#3DD2AE] text-xs sm:text-l text-white   ">
                See More
              </button>
            </div>
          </div>
          <div className=" relative    ">
            {/*2nd COL the image can go here and you can you position absolute to position them. its easier if you export the two phone images togeter */}

            <img
              className="md:absolute bottom-0 right-0 md:h-[110%] md:max-w-none    "
              src="img/phones2.png"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Feature section */}

      <section className=" bg-[#F4F8FB] ">
        {/* use a grid to make 3 columns and make a CARD COMPONENT here since the html elements are being repeated. you can loop the array i have created at the bottom of the file*/}
        <div className="container px-16 py-4 md:px-1  lg:px-16 grid grid-cols-1  md:grid-cols-3  md:gap-10 ">
          {CARD.map((item, i) => (
            <Card {...item} key={i} />
          ))}
        </div>
      </section>
      <section className=" bg-cover bg-center bg-[url('/img/p4.png')]">
        <div className="container px-8">
          <p className="  text-white font-openl text-[48px] text-center pt-28">
            {" "}
            Designed for humans
          </p>
          <p className="font-openl text-[#9DA5B0] text-[20px] pt-8 text-center">
            Kickstarter umami Intelligentsia kogi. Try-hard flannel literally,
            chambray blog crucifix put a bird on it four dollar toast cardigan
            scenester<br></br> aesthetic sartorial chia messenger bag Pinterest.
            3 wolf moon Thundercats Banksy paleo, yr four loko Shoreditch
            dreamcatcher.
          </p>
        </div>
        <div className="container px-16 sm:px-24 md:px-28 lg:px-32 mt-10">
          <div className="bg-[#2B303B] h-8 rounded-t-lg ">
            <div className="flex flex-row space-x-2 px-4 py-2 ">
              <div className="bg-[#434955] h-3 w-3 rounded-full"></div>
              <div className="bg-[#434955] h-3 w-3 rounded-full"></div>
              <div className="bg-[#434955] h-3 w-3 rounded-full"></div>
            </div>
          </div>
          <div className="relative">
            <img
              className="mx-auto w-full relative "
              src="img/2.jpg"
              align-bottom
              alt=""
            />

            <p className="text-2xl text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white px-5 py-5">
              DESIGN WIN
            </p>
          </div>
        </div>
      </section>
      {/* working on this */}
      {/* <section className="bg-[#2B303B]">
        {CARD2.map((item, i) => (
          <Card {...item} key={i} />
        ))}
      </section> */}
    </div>
  );
}

const CARD = [
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
      "Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog crucifix put a bird on it four dollar toast cardigan scenester aesthetic sartorial chia messenger bag Pinterest.Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog.Kickstarter umami Intelligentsia kogi. Try-hard flannel literally, chambray blog",
    href: "#",
  },
];

const CARD2 = [
  {
    title: "Design",

    description:
      "Scenester PBR deep v jean shorts typewriter. Sustainable keytar Tumblr, authentic mustache locavore scenester gentrify meh banjo fanny pack health goth. Four dollar toast",
    href: "#",
  },
  {
    title: "Refinement",

    description:
      "Pickled 8-bit tousled health goth farm-to-table Pitchfork, lumbersexual church-key photo booth Blue Bottle. Aesthetic viral American Apparel, scenester distillery",
    href: "#",
  },
  {
    title: "Dive In",

    description:
      "Cliche Intelligentsia church-key, gluten-free drinking vinegar keffiyeh cornhole next level shabby chic plaid tattooed. Helvetica post-ironic raw denim tousled listicle.",
    href: "#",
  },
  {
    title: "Research",

    description:
      "Raw denim health goth artisan, kitsch literally shabby chic meh small batch Wes Anderson retro Neutra. Blog meggings semiotics, irony swag cred kale chips aesthetic",
    href: "#",
  },
];
