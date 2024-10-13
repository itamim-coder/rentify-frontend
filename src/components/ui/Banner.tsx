import React from "react";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import Search from "../Search";

function Banner() {
  const words = [
    {
      text: "Find",
    },
    {
      text: "Your",
    },
    {
      text: "Best",
    },
    {
      text: "Dream",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Car",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "For",
      //   className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Rental.",
      //   className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    // <div
    //   className="h-screen"
    //   style={{
    //     backgroundImage: `url("https://creativelayers.net/themes/boxcar-html/images/banner/banner-page1.jpg")`,
    //     backgroundSize: "cover",
    //   }}
    // >
    //   <div className="flex flex-col items-center justify-center h-[35rem]  ">
    //     <p className="text-white text-xs sm:text-xl  ">Welcome to Rentify</p>
    //     <TypewriterEffectSmooth words={words} />
    //     <Search />
    //   </div>
    // </div>

    <div>
      <main>
        <section className="relative pt-20 lg:pt-24 pb-20 bg-red-50 dark:bg-gray-900">
          <div className="absolute top-0 inset-x-0 h-64 flex items-start">
            <div className="h-24 w-2/3 bg-gradient-to-br from-red-500 opacity-20 blur-2xl "></div>
            <div className="h-20 w-3/5 bg-gradient-to-r from-[#ea001e] opacity-40 blur-2xl "></div>
          </div>
          <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 w-44 left-0 hidden dark:flex"
            >
              <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40"></div>
            </div>
            <div className="mx-auto space-y-8 text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
              <h1 className="text-gray-800  text-3xl/snug sm:text-5xl/tight lg:text-4xl/tight xl:text-[3.50rem]/tight font-bold">
                Make Your Ride Easy & Fast with Rentify
              </h1>
              <p className=" text-gray-700 lg:text-lg max-w-2xl lg:max-w-none ">
                Rent a car to move from local hosts in 190+ countries.
              </p>
              <Search />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[34rem] mx-auto lg:mx-0 w-full">
                <div className="relative text-center bg-white border border-red-100 p-5 rounded-3xl before:absolute before:inset-1 before:bg-red-100 before:rounded-[1.25rem]">
                  <span className="font-bold text-2xl text-gray-900 dark:text-gray-100 relative">
                    450+
                  </span>
                  <h2 className="text-sm text-gray-700 relative">
                    Registered Users
                  </h2>
                </div>
                <div className="relative text-center bg-white dark:bg-gray-950/60 border border-red-100  p-5 rounded-3xl before:absolute before:inset-1 before:bg-red-100 dark:before:bg-gray-950 before:rounded-[1.25rem]">
                  <span className="font-bold text-2xl text-gray-900  relative">
                    99+
                  </span>
                  <h2 className="text-sm text-gray-700 dark:text-gray-300 relative">
                    Daily Booking Request
                  </h2>
                </div>
                <div className="relative text-center bg-white dark:bg-gray-950/60 border border-red-100  p-5 rounded-3xl before:absolute before:inset-1 before:bg-red-100 dark:before:bg-gray-950 before:rounded-[1.25rem]">
                  <span className="font-bold text-2xl text-gray-900 dark:text-gray-100 relative">
                    50+
                  </span>
                  <h2 className="text-sm text-gray-700 dark:text-gray-300 relative">
                    Car Rental Location
                  </h2>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
              <div className="lg:absolute lg:right-0 md:w-5/6 md:h-auto lg:w-full lg:h-full  overflow-hidden rounded-b-[24px]">
                <img
                  src="https://www.madebydesignesia.com/themes/rentaly/images/misc/car-2.png"
                  alt="happy team"
                  width={1850}
                  height="auto"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Banner;
