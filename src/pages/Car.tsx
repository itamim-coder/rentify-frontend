import { DatePick } from "@/components/DatePick";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Container from "@/components/ui/Container";
import { TimePicker } from "@/components/ui/TimePicker";
import { useGetSingleCarQuery } from "@/redux/api/carApi";
import { IconCheck } from "@tabler/icons-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Car = () => {
  const { id } = useParams();
  // Storing the selected time
  const { data: carDetails, isLoading } = useGetSingleCarQuery(id);
  const car = carDetails?.data;
  const navigate = useNavigate();
  const handleBookNow = () => {
    // Pass car data and selected time to the next page via state

    navigate("/checkout", { state: { car } });
  };

  return (
    <>
      <Container>
        <div className="py-3">
          <div>
            <p className="text-2xl font-bold">{car?.name}</p>
            <p className="text-sm">Location : Dhaka</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 py-5">
            <div className="col-span-12 md:col-span-9 ">
              <div className="space-y-4">
                <img
                  src="https://creativelayers.net/themes/boxcar-html/images/resource/inventory1-8.png"
                  alt=""
                  className="object-contain"
                />
                <div>
                  <p className="text-2xl font-semibold">Description</p>
                  <p className="text-gray-500 mt-3">{car?.description}</p>
                  <p className="text-gray-500">
                    {/* Car description content */}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold mb-3">Features</p>
                  {car?.features.map((feature) => (
                    <p key={feature} className="flex gap-2 text-sm">
                      <IconCheck size={20} /> {feature}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 space-y-4">
              <div className="flex rounded-md md:sticky top-[80px] flex-col h-auto md:h-[400px] border p-5 border-blue-200 justify-between">
                <div className="space-y-4">
                  <span className="flex items-end mb-12">
                    <p className="text-2xl font-semibold">
                      ${car?.pricePerHour}
                    </p>
                    /Per Hour
                  </span>
                  <span className="flex justify-between font-semibold">
                    <p className="text-md">Passengers</p> 4
                  </span>
                  <span className="flex justify-between font-semibold">
                    <p className="text-md">Electric</p> Yes
                  </span>
                  <TimePicker />
                  <DatePick />
                </div>

                <div className="">
                  <Button className="w-full" onClick={handleBookNow}>
                    BOOK NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Car;
