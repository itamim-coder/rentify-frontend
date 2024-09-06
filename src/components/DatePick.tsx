"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch } from "@/redux/hooks";
import { setSelectedDate } from "@/redux/features/search/searchSlice";

export function DatePick() {
  const [date, setDate] = React.useState<Date>(new Date());
  const dispatch = useAppDispatch();
  // This function handles the date selection and conversion
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      console.log(formattedDate);
      dispatch(setSelectedDate({ date: formattedDate })); // Log in "yyyy-MM-dd" format
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {/* Display "pretty" formatted date or prompt */}
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect} // Handle date selection
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
