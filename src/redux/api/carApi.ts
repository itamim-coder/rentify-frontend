import { baseApi } from "./baseApi";

const CAR_URL = "/cars";
export const carApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addCar: build.mutation({
      query: (data) => ({
        url: `${CAR_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Car"],
    }),
    getCars: build.query({
      query: () => ({
        url: `${CAR_URL}`,
        method: "GET",
      }),

      providesTags: ["Car"],
    }),
    getSingleCar: build.query({
      query: (id) => ({
        url: `${CAR_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["Car"],
    }),
  }),
});

export const { useAddCarMutation, useGetCarsQuery, useGetSingleCarQuery } =
  carApi;
