import { baseApi } from "@/redux/api/baseApi";

const BOOKING_URL = "/bookings";
export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Bookings"],
    }),
    getMyBooking: build.query({
      query: () => ({
        url: `${BOOKING_URL}/my-bookings`,
        method: "GET",
      }),

      providesTags: ["Bookings"],
    }),
  }),
});

export const { useGetMyBookingQuery, useCreateBookingMutation } = bookingApi;
