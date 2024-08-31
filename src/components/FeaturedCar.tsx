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
const CarData = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: 24425,
    image: "https://example.com/toyota-camry.jpg",
    description:
      "A reliable and comfortable midsize sedan with great fuel efficiency.",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2023,
    price: 21950,
    image: "https://example.com/honda-civic.jpg",
    description:
      "A compact car known for its sporty handling and modern technology.",
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2023,
    price: 55200,
    image: "https://example.com/ford-mustang.jpg",
    description: "A classic American muscle car with powerful engine options.",
  },
  {
    id: 4,
    make: "Chevrolet",
    model: "Tahoe",
    year: 2022,
    price: 49700,
    image: "https://example.com/chevrolet-tahoe.jpg",
    description:
      "A full-size SUV with spacious interior and impressive towing capacity.",
  },
  {
    id: 5,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 39999,
    image: "https://example.com/tesla-model-3.jpg",
    description:
      "An all-electric sedan with cutting-edge technology and performance.",
  },
  {
    id: 6,
    make: "BMW",
    model: "X5",
    year: 2022,
    price: 61500,
    image: "https://example.com/bmw-x5.jpg",
    description:
      "A luxury SUV offering a blend of performance, comfort, and technology.",
  },
  {
    id: 7,
    make: "Audi",
    model: "A4",
    year: 2023,
    price: 40200,
    image: "https://example.com/audi-a4.jpg",
    description:
      "A luxury compact car with a refined interior and advanced features.",
  },
  {
    id: 8,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: 43850,
    image: "https://example.com/mercedes-c-class.jpg",
    description:
      "A premium sedan with elegant design and innovative technology.",
  },
];

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
      <Carousel
        plugins={[plugin.current]}
        className=" flex justify-center"
      >
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
                    <Button>RENT NOW</Button>
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
