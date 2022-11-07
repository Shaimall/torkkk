import React from "react";
import { Card, Card2, Card3 } from "../components/card";

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

            <p className=" text-center md:text-left font-openl text-white md:text-lg  xl:text-xl md:pb-4 sm:leading-relaxed text-2xl">
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

            <p className="sm:text-2xl text-xs text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:border-4 border-2 border-white sm:px-5 sm:py-5 px-2 ">
              DESIGN WIN
            </p>
          </div>
        </div>
      </section>
      {/* working on this */}
      <section className="bg-[#2B303B]">
        <div className="container px-16 py-4 md:px-1  lg:px-8 grid grid-cols-1  md:grid-cols-4  md:gap-0 ">
          {CARD2.map((item, i) => (
            <Card2 {...item} key={i} />
          ))}
        </div>
      </section>
      <section className="grid md:grid-cols-12  bg-[#E9EEF1]">
        <div className="col-span-6  container lg:px-20 lg:py-20 px-7 py-24 ">
          <div className="inline-flex ">
            <svg
              className=" md:h-[67px] w-14 h-8 md:w-32 2xl:h-28"
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
            <p className="font-openl text-4xl lg:text-5xl lg:mt-3 md:mt-5 mt-1 md:text-xl ">
              Connectivity
            </p>
          </div>
          <p className=" leading-relaxed ml-6 py-8 md:text-lg">
            Flannel ennui narwhal, craft beer twee Vice plaid authentic synth
            Intelligentsia stumptown gluten-free drinking vinegar Schlitz
            mixtape.
          </p>
          <p className="text-sm leading-loose ml-6 md:text-lg">
            Kickstarter umami Intelligentsia kogi. Try-hard flannel literally,
            chambray blog crucifix put a bird on it four dollar toast cardigan
            scenester aesthetic sartorial chia messenger bag Pinterest. 3 wolf
            moon Thundercats Banksy paleo, yr four loko Shoreditch dreamcatcher.
          </p>
        </div>
        <div className="col-span-6 ">
          <img
            className="h-full object-cover object-center "
            src="/img/3.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="grid md:grid-cols-12">
        <div className="md:col-span-2 bg-[#F4F8FB]"></div>
        <div className="col-span-4">
          <img
            className="md:h-full hidden md:block object-cover object-center"
            src="/img/4.jpg"
            alt=""
          />
        </div>
        <div className="col-span-6 bg-[#835FA8] ">
          <div className="container px-10 py-14">
            <p className="text-lg text-white  ">12th June 2015</p>
            <p className="text-3xl text-white leading-relaxed ">
              Lorem ipsum dolor sit amet, cotur adipisicing elit sed do eiusmod
              tempor incididunt ut labore et dolore
            </p>
            <div className="flex ">
              <div className="bg-white w-14 h-14 rounded-full"></div>
              <p className="text-white text-sm pl-5 pt-4"> Blaz Robar</p>
            </div>
          </div>

          <div className="mt-44">
            <div className="w-40  bg-black ">
              <p className="text-sm text-white container px-10 py-2 ">
                Latest News{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-12">
        <div className="col-span-2 bg-[#F4F8FB]"> </div>
        <div className="col-span-4 bg-white">
          <div className="container px-4 pt-16">
            <p className="text-2xl  ">
              Lorem ipsum dolor sit amet, cotur adipisicing elit
            </p>
            <p className="text-xs  leading-relaxed pt-5 text-[#83969F]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </p>
            <div className=" flex pt-20 ">
              <p className=" p-7 text-base border-r-2 border-[#83969F] text-[#83969F] ">
                92
              </p>
              <p className="pt-7 pl-2 text-[#83969F] "> Comments</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 hidden md:block">
          <img
            className="h-full object-cover object-center"
            src="/img/6.jpg"
            alt=""
          />
        </div>
        <div className="col-span-2 bg-[#F4F8FB]"> </div>
      </section>
      <section>
        <div className="relative">
          <img className="w-full" src="/img/5.jpg" alt="" />

          <div className=" absolute top-0 grid grid-cols-12 ">
            <div className=" bg-[#835FA8] container lg:h-[90%] md:h-[75%] col-span-6 lg:p-28 md:p-16 hidden md:block ">
              <div className="">
                <p className=" lg:text-2xl text-white lg:pt-7  leading-relaxed container">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris. Nisi ut aliquip ex ea commodo
                </p>
              </div>
              <div className="flex pt-5">
                <div className="bg-white w-14 h-14 rounded-full"></div>
                <p className="text-white text-sm pl-5 pt-4"> Blaz Robar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1A2124]">
        <div className="grid md:grid-cols-12">
          <div className="col-span-2 hidden md:block"></div>
          <div className="col-span-4 container py-9 px-10 md:px-1">
            <p className="text-sm text-white "> Get in touch</p>
            <p className="text-sm text-white pt-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="grid md:grid-cols-3 hidden md:grid ">
              {CARD3.map((item, i) => (
                <Card3 {...item} key={i} />
              ))}
            </div>
          </div>
          <div className="col-span-1 hidden md:block"></div>
          <div className="col-span-3 container py-9 px-10 md:px-1">
            {" "}
            <p className="text-sm text-white "> Stay in touch</p>
            <form className="inline-flex pt-4" action="" method="post">
              <input type="text" />
              <button className="bg-[#835FA8] container px-5 py-3 rounded-r-md">
                <svg
                  className="mx-auto w-4"
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
            </form>
            <p className="text-white text-sm pt-10 ">
              {" "}
              We don’t send spam. Actually, who are we kiding, we’ll spam the
              shit out of your inbox
            </p>
          </div>
          <div className="col-span-2 hidden md:block"></div>
        </div>
      </section>
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
    icon: (
      <svg
        className="w-[42.77px] h-[42.77px]  "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#22E6D1"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        />
      </svg>
    ),
    num: "01",

    title: "Design",

    description:
      "Scenester PBR deep v jean shorts typewriter. Sustainable keytar Tumblr, authentic mustache locavore scenester gentrify meh banjo fanny pack health goth. Four dollar toast",
    href: "#",
  },
  {
    icon: (
      <svg
        className="w-[42.77px] h-[42.77px] "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#22E6D1"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),

    num: "02",

    title: "Refinement",

    description:
      "Pickled 8-bit tousled health goth farm-to-table Pitchfork, lumbersexual church-key photo booth Blue Bottle. Aesthetic viral American Apparel, scenester distillery",
    href: "#",
  },
  {
    icon: (
      <svg
        className="w-[42.77px] h-[42.77px] "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#22E6D1"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    icon: (
      <svg
        className="w-[42.77px] h-[42.77px]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#22E6D1"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
    num: "03",

    title: "Dive In",

    description:
      "Cliche Intelligentsia church-key, gluten-free drinking vinegar keffiyeh cornhole next level shabby chic plaid tattooed. Helvetica post-ironic raw denim tousled listicle.",
    href: "#",
  },
  {
    icon: (
      <svg
        className="w-[42.77px] h-[42.77px]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#22E6D1"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    num: "04",

    title: "Research",

    description:
      "Raw denim health goth artisan, kitsch literally shabby chic meh small batch Wes Anderson retro Neutra. Blog meggings semiotics, irony swag cred kale chips aesthetic",
    href: "#",
  },
];

const CARD3 = [
  {
    title: "Resources",
    text1: "Tour",
    text2: "Customers",
    text3: "Pricing and Plans",
    text4: "New Features",
    text5: "Education",
  },
  {
    title: "Resources",
    text1: "Tour",
    text2: "Customers",
    text3: "Pricing and Plans",
    text4: "New Features",
    text5: "Education",
  },
  {
    title: "Resources",
    text1: "Tour",
    text2: "Customers",
    text3: "Pricing and Plans",
    text4: "New Features",
    text5: "Education",
  },
];
