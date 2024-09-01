"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
      title: "Our Vision",
      tag: "Driving the Future of Car Rentals",
      description:
        "We envision a future where car rentals are not just about getting from point A to point B but about creating a seamless, enjoyable, and efficient travel experience. Our vision is to lead the industry in customer satisfaction, technological innovation, and environmental sustainability.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src="https://demo.awaikenthemes.com/html-preview/novaride/light/images/our-vision-img.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="vision image"
          />
        </div>
      ),
    },
    {
      title: "Our Mission",
      tag: "Commitment to Excellence in Every Drive",
      description:
        "Our mission is to provide our customers with a premium car rental experience through a combination of exceptional service, a wide selection of well-maintained vehicles, and innovative technology. We are dedicated to meeting the diverse needs of our customers and making every journey a memorable one.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src="https://demo.awaikenthemes.com/html-preview/novaride/light/images/our-mission-img.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="mission image"
          />
        </div>
      ),
    },
    {
      title: "Our Approach",
      tag: "Innovating with Integrity and Passion",
      description:
        "We approach every aspect of our business with a commitment to innovation, integrity, and customer-centricity. Our approach involves leveraging cutting-edge technology, maintaining the highest safety standards, and fostering a culture of continuous improvement to deliver unmatched value to our customers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src="https://demo.awaikenthemes.com/html-preview/novaride/light/images/our-approach-img.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="approach image"
          />
        </div>
      ),
    },
  ];
  
export function Vision() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
