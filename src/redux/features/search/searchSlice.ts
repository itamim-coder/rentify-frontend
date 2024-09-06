import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

export type Search = {
  time: string;
  date: string;
};

const currentDate = new Date();
const formattedDate = format(currentDate, "yyyy-MM-dd"); // Format as 'YYYY-MM-DD'
const formattedTime = format(currentDate, "HH:mm"); // Format as 'HH:mm' (24-hour format)

const initialState: Search = {
  time: formattedTime,
  date: formattedDate,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSelectedTime: (state, action) => {
      const { time } = action.payload;
      state.time = time;
    },
    setSelectedDate: (state, action) => {
      const { date } = action.payload;
      state.date = date;
    },
  },
});

export const { setSelectedTime, setSelectedDate } = searchSlice.actions;

export default searchSlice.reducer;
