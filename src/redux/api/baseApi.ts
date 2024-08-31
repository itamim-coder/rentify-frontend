import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rentify-backend-seven.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["Car"],
});
