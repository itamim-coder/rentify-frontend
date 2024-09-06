import {
  setSelectedDate,
  setSelectedTime,
  setTime,
} from "@/redux/features/search/searchSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { ChangeEventHandler, useState, useEffect } from "react";

export function TimePicker() {
  // Function to format the current time in "HH:MM" format
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // Set the initial state to the current time
  const [timeValue, setTimeValue] = useState<string>(getCurrentTime());
  const dispatch = useAppDispatch();
  // Handle the change in time input
  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const time = e.target.value;
    console.log(time);
    dispatch(setSelectedTime({ time }));
    setTimeValue(time);
  };

  return (
    <div className="">
      <form>
        <div className="flex justify-between">
          <label className="font-semibold">
            Pickup Time {/* Input with 24-hour time format */}
          </label>
          <input
            className="border border-black rounded-md"
            type="time"
            value={timeValue}
            onChange={handleTimeChange}
            step="900" // Step in seconds (e.g., 900s = 15 minutes)
          />
        </div>
      </form>
    </div>
  );
}
