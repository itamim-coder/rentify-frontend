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
import { useGetCarQuery } from "@/redux/api/carApi";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";


export function FeaturedCar() {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));
  const { data: carData, isLoading } = useGetCarQuery(undefined);
  console.log(carData);
  const data = carData?.data;
  return (
    <div className="">
      <p className="flex justify-center text-center md:text-4xl font-bold my-12">
        Explore our perfect and <br /> extensive fleet
      </p>
      <Carousel plugins={[plugin.current]} className=" flex justify-center">
        <CarouselContent className="flex space-x-2 px-4 ">
          {data?.map((Car, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <Card className="w-full h-full border border-gray-300 hover:shadow-xl">
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

                  <CardTitle className="text-lg">{Car?.name}</CardTitle>
                </CardHeader>
                <CardDescription>
                  <div className="p-3 grid grid-cols-2 gap-2">
                    {Car.features.map((feature, index) => (
                      <div key={index} className="text-sm">
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardDescription>
                <CardContent>
                  <Separator />
                  <div className=" mt-3 rounded-md flex justify-between items-center">
                    <p className="text-black font-bold">
                      ${Car?.pricePerHour} /Hour
                    </p>
                    <Button>
                      <Link to={`/car/${Car?._id}`}>RENT NOW</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <div>
          <CarouselPrevious />
          <CarouselNext />
        </div> */}
      </Carousel>
    </div>
  );
}
