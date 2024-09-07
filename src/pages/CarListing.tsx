import { useMemo, useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import Container from "@/components/ui/Container";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useGetCarsQuery } from "@/redux/api/carApi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const CarListing = () => {
  const [search, setSearch] = useState<string>("");
  const [price, setPrice] = useState(750); // Initial value for price
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]); // Track selected features
  const [sort, setSort] = useState<{ key: string; order: "asc" | "desc" }>({
    key: "name",
    order: "asc",
  });

  const { data: carData, isLoading } = useGetCarsQuery(undefined);
  const data = carData?.data;

  // Handler to update the slider value
  const handlePriceChange = (value) => {
    setPrice(value[0]); // Since the slider returns an array, take the first value
  };

  // Handler for selecting features
  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  // Filtered and sorted data
  const filteredData = useMemo(() => {
    if (!data) return [];

    const searchValue = search.toLowerCase();
    return data
      .filter((car) => {
        // Check if the car matches the search query
        const matchesSearch = car?.name?.toLowerCase().includes(searchValue);

        // Check if the car matches the selected price range
        const matchesPrice = car?.pricePerHour <= price;

        // Check if the car matches the selected features
        const matchesFeatures =
          selectedFeatures.length === 0 ||
          selectedFeatures.every((feature) => car.features.includes(feature));

        return matchesSearch && matchesPrice && matchesFeatures;
      })
      .sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1;
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1;
        }
      });
  }, [search, price, selectedFeatures, sort.key, sort.order, data]);

  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 py-5">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 md:sticky top-[60px] border border-blue-200 rounded-md h-auto md:h-[500px] p-3 space-y-4">
            <Input
              placeholder="Car Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Separator className="" />
            <div>
              <p>Price</p>
              <Slider
                defaultValue={[price]} // Use state for slider value
                max={1000}
                step={1}
                min={10}
                onValueChange={handlePriceChange} // Update state on value change
              />
              <span className="flex ">
                <p className="text-sm bg-blue-100 p-1 rounded-md border border-blue-400 mt-2">
                  Max Price/hr: ${price}
                </p>
              </span>
            </div>
            <div>
              <p className="mb-3">Features</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="AC"
                    checked={selectedFeatures.includes("AC")}
                    onCheckedChange={() => toggleFeature("AC")}
                  />
                  <label
                    htmlFor="AC"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    AC
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="Bluetooth"
                    checked={selectedFeatures.includes("Bluetooth")}
                    onCheckedChange={() => toggleFeature("Bluetooth")}
                  />
                  <label
                    htmlFor="Bluetooth"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Bluetooth
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="Long Range Battery"
                    checked={selectedFeatures.includes("Long Range Battery")}
                    onCheckedChange={() => toggleFeature("Long Range Battery")}
                  />
                  <label
                    htmlFor="LongRangeBattery"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Long Range Battery
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="NonAC"
                    checked={selectedFeatures.includes("Non AC")}
                    onCheckedChange={() => toggleFeature("Non AC")}
                  />
                  <label
                    htmlFor="NonAC"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Non AC
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Car listings */}
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredData?.map((Car, index) => (
                <div key={index} className="flex">
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
                      <div className="mt-3 rounded-md flex justify-between items-center">
                        <p className="text-black font-bold">
                          ${Car?.pricePerHour} /Hour
                        </p>
                        <Button>
                          <Link to={`/car/${Car?._id}`}>RENT NOW</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CarListing;
