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
    getMyapprovedBooking: build.query({
      query: () => ({
        url: `${BOOKING_URL}/my-approved-bookings`,
        method: "GET",
      }),

      providesTags: ["Bookings"],
    }),
    allBookings: build.query({
      query: () => ({
        url: `${BOOKING_URL}`,
        method: "GET",
      }),

      providesTags: ["Bookings"],
    }),
    bookingStatus: build.mutation({
      query: ({ id, bookingStatus }) => ({
        url: `${BOOKING_URL}/change-status/${id}`,
        method: "PUT",
        body: { bookingStatus },
      }),
      invalidatesTags: ["Bookings"],
    }),
    getApprovedBookings: build.query({
      query: () => ({
        url: `${BOOKING_URL}/get-approved-bookings`,
        method: "GET",
      }),

      providesTags: ["Bookings"],
    }),
  }),
});

export const {
  useGetMyBookingQuery,
  useCreateBookingMutation,
  useAllBookingsQuery,
  useBookingStatusMutation,
  useGetApprovedBookingsQuery,
  useGetMyapprovedBookingQuery,
} = bookingApi;
