import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { useGetCarsQuery } from "@/redux/api/carApi";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function FeaturedCar() {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));
  const { data: carData, isLoading } = useGetCarsQuery(undefined);
  console.log(carData);
  const data = carData?.data;
  return (
    <div className="p-3 md:p-0">
      <p className="flex justify-center text-center text-2xl md:text-3xl font-bold my-12">
        Explore our perfect and <br /> extensive fleet
      </p>
      <div className="grid md:grid-cols-4 gap-6">
        {" "}
        {data?.slice(0, 8).map((Car, index) => (
          <div key={index} className="md:basis-1/3">
            <Card className="w-full h-full border border-gray-300 hover:shadow-xl flex flex-col justify-between">
              <CardHeader className="relative">
                <div
                  className={cn(
                    "absolute right-2 px-2 py-1 rounded text-xs font-bold",
                    Car?.status === "available"
                      ? "bg-white text-green-600 border-green-700 border-2"
                      : "bg-white text-red-600 border-red-700 border-2"
                  )}
                >
                  {Car.status}
                </div>

                <div>
                  <img
                    className="rounded-lg"
                    src="https://themesflat.co/html/motorxhtml/assets/images/car-list/car12.jpg"
                    alt=""
                  />
                </div>

                <CardTitle className="text-lg font-normal">
                  {Car?.name}
                </CardTitle>
              </CardHeader>

              <div className="flex-grow">
                <CardDescription>
                  <div className="p-3 grid grid-cols-2 gap-2">
                    {Car.features.map((feature, index) => (
                      <div key={index} className="text-sm">
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardDescription>
              </div>

              <CardContent>
                <Separator />
                <div className="mt-3 rounded-md flex justify-between items-center">
                  <p className="text-black font-bold">
                    ${Car?.pricePerHour} /Hour
                  </p>
                  <Button className="bg-red-500 text-white hover:bg-red-600">
                    <Link to={`/car/${Car?._id}`}>RENT NOW</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="flex pt-9 justify-center">
        <Button className="bg-white font-bold border border-red-500 text-red-500 hover:bg-red-600 hover:text-white">
          <Link to={`/cars`}>SEE ALL</Link>
        </Button>
      </div>
    </div>
  );
}
