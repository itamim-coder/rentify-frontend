import { baseApi } from "@/redux/api/baseApi";

const BOOKING_URL = "/bookings";
export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyBooking: build.query({
      query: () => ({
        url: `${BOOKING_URL}/my-bookings`,
        method: "GET",
      }),

      providesTags: ["Bookings"],
    }),
  }),
});

export const { useGetMyBookingQuery } = bookingApi;
