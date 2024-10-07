import { baseApi } from "@/redux/api/baseApi";

const PAYMENT_URL = "/payment";
export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPayment: build.mutation({
      query: ( _id ) => ({
        url: `${PAYMENT_URL}/create-payment/${_id}`,
        method: "POST",
      }),
      invalidatesTags: ["Bookings"],
    }),
  }),
});

export const { useCreatePaymentMutation } = bookingApi;
