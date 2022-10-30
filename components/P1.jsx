/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import img from "../public/img/p1.jpg";
import Side2 from "../components/Side2";
import Side from "../components/Side";
const P1 = () => {
  return (
    <div className="-z-10">
      <section>
        <img className="h-screen w-screen" src="img/p1.jpg" alt="" />
        <div className="absolute top-[90px] left-36 text-center p-10"> X</div>
      </section>
      <section>
        <div className="relative bg-[#835FA8]">
          <div className=" pt-24 pb-72 container">
            <p className=" font-openl text-white text-[48px] pl-10">
              Super Duper & such
            </p>

            <p className="  font-openl text-white text-[18px] pt-6 pl-10 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing<br></br> elit,
              sed do eiusmod tempor incididunt ut labore et<br></br> dolore
              magna. aliqua
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
              className="absolute top-52 left-[600px] sm:left-[500px] sm:w-40 sm:h-80 "
              src="/img/interface.png"
              alt=""
            />
          </div>
          {/* <div className="absolute inset-0 w-full h-full">
            {" "}
            <img
              className="absolute -top-[117px] left-[900px]   bottom-0 overflow-hidden h-[1080px]  "
              src="/img/phone.png"
              alt=""
            />
          </div> */}
        </div>
      </section>

      <section>
        <div className="relative bg-[#F4F8FB]">
          <div className=" pt-32 pb-64  container">
            <div className="flex">
              <div className="p-20 sm:p-5">
                <p className=" font-openl text-black text-[38px]">
                  Design & Features
                </p>
                <p className="font-openl text-black text-[25px] pt-6">
                  Flannel ennui narwhal, craft beer<br></br> twee Vice plaid
                  authentic synth.
                </p>
                <p>
                  Kickstarter umami Intelligentsia kogi. Try-<br></br>hard
                  flannel literally, chambray blog<br></br> crucifix put a bird
                  on it four dollar toast<br></br> cardigan scenester aesthetic
                  sartoria
                </p>
                <button className="px-16 py-4 rounded-full bg-[#3DD2AE] mt-11 text-[18px] text-white">
                  See More
                </button>
              </div>
              <div className="p-5">
                <p className=" font-openl text-black text-[38px]">
                  Design & Features
                </p>
                <p className="font-openl text-black text-[25px] pt-6">
                  Flannel ennui narwhal, craft beer<br></br> twee Vice plaid
                  authentic synth.
                </p>
                <p>
                  Kickstarter umami Intelligentsia kogi. Try-<br></br>hard
                  flannel literally, chambray blog<br></br> crucifix put a bird
                  on it four dollar toast<br></br> cardigan scenester aesthetic
                  sartoria
                </p>
                <button className="px-16 py-4 rounded-full bg-[#3DD2AE] mt-11 text-[18px] text-white">
                  See More
                </button>
              </div>
              <div className="p-5">
                <p className=" font-openl text-black text-[38px]">
                  Design & Features
                </p>
                <p className="font-openl text-black text-[25px] pt-6">
                  Flannel ennui narwhal, craft beer<br></br> twee Vice plaid
                  authentic synth.
                </p>
                <p>
                  Kickstarter umami Intelligentsia kogi. Try-<br></br>hard
                  flannel literally, chambray blog<br></br> crucifix put a bird
                  on it four dollar toast<br></br> cardigan scenester aesthetic
                  sartoria
                </p>
                <button className="px-16 py-4 rounded-full bg-[#3DD2AE] mt-11 text-[18px] text-white">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[url('/img/bg.jpeg')] bg-cover h-[592px] ">
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

          <img
            className="mt-[10px] mx-auto w-[1088px] h-[307px] align-bottom"
            src="img/2.jpg"
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="bg-[#2B303B] h-[692px]">
          <div className=" pt-32  container">
            <div className=" grid grid-cols-4 gap-7">
              <div className="">
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
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>

                <p className=" font-openl text-white text-[25px] pt-6">
                  Design
                </p>
                <p className="font-openl text-white text-[18px] pt-6">
                  Scenester PBR deep v jean<br></br> shorts typewriter.
                  Sustainable
                  <br></br> keytar Tumblr, authentic<br></br>mustache locavore
                  scenester<br></br> gentrify meh banjo fanny pack<br></br>{" "}
                  health goth. Four dollar toas
                </p>
              </div>
              <div className="">
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

                <p className=" font-openl text-white text-[25px] pt-6">
                  Refinement
                </p>
                <p className="font-openl text-white text-[18px] pt-6">
                  Scenester PBR deep v jean<br></br> shorts typewriter.
                  Sustainable
                  <br></br> keytar Tumblr, authentic<br></br>mustache locavore
                  scenester<br></br> gentrify meh banjo fanny pack<br></br>{" "}
                  health goth. Four dollar toas
                </p>
              </div>
              <div className="">
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

                <p className=" font-openl text-white text-[25px] pt-6">
                  Dive In
                </p>
                <p className="font-openl text-white text-[18px] pt-6">
                  Scenester PBR deep v jean<br></br> shorts typewriter.
                  Sustainable
                  <br></br> keytar Tumblr, authentic<br></br>mustache locavore
                  scenester<br></br> gentrify meh banjo fanny pack<br></br>{" "}
                  health goth. Four dollar toas
                </p>
              </div>
              <div className="">
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

                <p className=" font-openl text-white text-[25px] pt-6">
                  Research
                </p>
                <p className="font-openl text-white text-[18px] pt-6">
                  Scenester PBR deep v jean<br></br> shorts typewriter.
                  Sustainable
                  <br></br> keytar Tumblr, authentic<br></br>mustache locavore
                  scenester<br></br> gentrify meh banjo fanny pack<br></br>{" "}
                  health woth. Four dollar toas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid-cols-2 grid">
          <div className="bg-[#E9EEF1] w-full h-[697px] sm:h-[650px] ">
            <div className="container pl-[140px] sm:pl-[11px] pt-[178.6px] inline-flex ">
              <div className="w-[40px] h-[90px] sm:w-[80px]">
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
              <p className="font-openl text-5xl sm:text-4xl pt-4 pl-4 sm:pl-0  ">
                Connectivity
              </p>
            </div>

            <div className="w-[480px] mx-auto pt-9 sm:w-[300px]">
              <span className="text-xl leading-relaxed sm:text-base">
                Flannel ennui narwhal, craft beer twee Vice plaid authentic
                synth Intelligentsia stumptown gluten-free drinking vinegar
                Schlitz mixtape.
              </span>
            </div>
            <div className="w-[480px] mx-auto pt-9 sm:w-[300px] ">
              <p className="text-sm leading-loose">
                Kickstarter umami Intelligentsia kogi. Try-hard flannel
                literally, chambray blog crucifix put a bird on it four dollar
                toast cardigan scenester aesthetic sartorial chia messenger bag
                Pinterest. 3 wolf moon Thundercats Banksy paleo, yr four loko
                Shoreditch dreamcatcher.
              </p>
            </div>
          </div>
          <div className="">
            <img className="h-full" src="/img/3.jpg" alt="" />
          </div>
        </div>
      </section>
      {/* <section>
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
                Lorem ipsum dolor sit amet, cotur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore
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
      </section>
      <section>
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
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
      </section>
      <section>
        <div className="bg-[url('/img/5.jpg')] bg-cover h-[1037px]  ">
          <div className="bg-[#835FA8] w-[760px] h-[692px]">
            <div className="container pl-28 pt-32">
              <p className="text-4xl text-white pt-7 leading-relaxed w-[450px]">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris. Nisi ut aliquip ex ea commodo
              </p>
              <div className="flex pt-5">
                <div className="bg-white w-14 h-14 rounded-full"></div>
                <p className="text-white text-sm pl-5 pt-4"> Blaz Robar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#1A2124] h-[673px]">
          <div className="flex">
            <div className="pl-[220px] pt-[187px] inline-block">
              <p className="text-sm text-white w-[100px]"> Get in touch</p>
              <p className="text-sm text-white pt-[37px] w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                We don’t send spam. Actually, who are we kiding, we’ll spam the
                shit out of you’r inbox
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
      </section> */}
    </div>
  );
};

export default P1;
