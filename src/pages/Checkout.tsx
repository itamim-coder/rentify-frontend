import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const user = useAppSelector(selectCurrentUser);
  const location = useLocation();
  const { car, selectedTime } = location.state || {}; // Get the car data from state
  console.log(selectedTime);

  const handleBooking = () => {
    // const data ={
    //   carId : car._id;
    // }
  };
  return (
    <MainLayout>
      <Container>
        {" "}
        <div className="py-3">
          <p className="text-xl font-semibold">Hey {user?.email}</p>
          <p>Your Booking Summary</p>
          <div className="flex justify-center items-center">
            {" "}
            {/* Updated styles */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              {car ? (
                <div>
                  <h2 className="text-2xl font-bold mb-4">{car.name}</h2>
                  <p className="text-lg">Price per hour: ${car.pricePerHour}</p>
                  <p className="text-lg">
                    Electric: {car.isElectric ? "Yes" : "No"}
                  </p>
                  <p className="text-lg mt-4 font-semibold">Features:</p>
                  <ul className="list-disc pl-5 mt-2">
                    {car.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    <Button onClick={handleBooking} className="w-full">
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              ) : (
                <p>No car selected</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Checkout;
