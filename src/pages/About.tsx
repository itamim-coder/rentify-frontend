import MainLayout from "@/components/layouts/MainLayout";
import Team from "@/components/Team";
import Container from "@/components/ui/Container";
import { Vision } from "@/components/Vision";
import { CircleCheckBig } from "lucide-react";
import Marquee from "react-fast-marquee";
import React from "react";

function About() {
  return (
    <MainLayout>
      <Container>
        <div className="flex flex-col md:flex-row mt-12 gap-x-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className=" rounded-xl"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="about Us image"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="about Us image"
              />
            </div>
          </div>
          <div className="md:w-1/2 content-center">
            <div>
              <p className="text-sm md:text-md font-bold">ABOUT OUR COMPANY</p>
              <p className="text-2xl md:text-4xl font-bold my-3">
                Your trusted partner in <br className="hidden md:block" />{" "}
                reliable car rental
              </p>
            </div>
            <p className="text-xs md:text-sm text-gray-500 my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              porttitor quam nisi,
              <br className="hidden md:block" /> ac sodales lorem placerat
              venenatis. Proin et urna mi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
              <p className="flex gap-2">
                <CircleCheckBig fill="#C0C0C0" /> Extensive Fleet Selection
              </p>
              <p className="flex gap-2">
                <CircleCheckBig fill="#C0C0C0" /> Extensive Fleet Selection
              </p>
              <p className="flex gap-2">
                <CircleCheckBig fill="#C0C0C0" /> Extensive Fleet Selection
              </p>
              <p className="flex gap-2">
                <CircleCheckBig fill="#C0C0C0" /> Extensive Fleet Selection
              </p>
              <p className="flex gap-2">
                <CircleCheckBig fill="#C0C0C0" /> Extensive Fleet Selection
              </p>
              <p className="flex gap-2">
                <CircleCheckBig fill="#C0C0C0" /> Extensive Fleet Selection
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </Container>
      <Vision />

      <Container>
        <Team />
      </Container>
      <div className="py-6">
        <p className="font-manrope text-5xl text-center font-bold text-gray-900 mb-9">
          Our Premium Brands
        </p>
        <Marquee
          gradient
          gradientColor="RGB(248, 251, 253)"
          gradientWidth={600}
          autoFill
        >
          <div className="flex">
            <img
              src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/6.png"
              alt=""
              className="h-28"
            />
            <img
              src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/1.png"
              alt=""
              className="h-28"
            />
            <img
              src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/2.png"
              alt=""
              className="h-28"
            />
            <img
              src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/3.png"
              alt=""
              className="h-28"
            />
            <img
              src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/7.png"
              alt=""
              className="h-28"
            />
          </div>
        </Marquee>
      </div>
    </MainLayout>
  );
}

export default About;
