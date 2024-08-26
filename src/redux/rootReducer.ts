import { baseApi } from "./api/baseApi";

export const reducer = {
  //   search: searchReducer,
  //   hotel: hotelReducer,
  //   hotelBooking: bookingReducer,
  //   tourBooking: tourBookingReducer,
  //   user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
