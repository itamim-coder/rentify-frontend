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
    <div
      className="h-screen"
      style={{
        backgroundImage: `url("https://creativelayers.net/themes/boxcar-html/images/banner/banner-page1.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center h-[35rem]  ">
        <p className="text-white text-xs sm:text-xl  ">Welcome to Rentify</p>
        <TypewriterEffectSmooth words={words} />
        <Search />
      </div>
    </div>
  );
}

export default Banner;
