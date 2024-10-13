import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://rentify-backend-seven.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);
  console.log(result);
  // if (result?.error?.status === 404) {
  //   toast.error(result.error.data.message);
  // }
  // if (result?.error?.status === 403) {
  //   toast.error(result.error.data.message);
  // }
  if (result?.error?.data?.err?.statusCode === 401) {
    //* Send Refresh

    // console.log("Sending refresh token");
    // const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
    //   method: "POST",
    //   credentials: "include",
    // });
    // const data = await res.json();
    // if (data?.data?.accessToken) {
    //   const user = (api.getState() as RootState).auth.user;
    //   api.dispatch(
    //     setUser({
    //       user,
    //       token: data.data.accessToken,
    //     })
    //   );
    //   result = await baseQuery(args, api, extraOptions);
    // } else {
    api.dispatch(logout());
    // }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["Car", "Bookings", "User"],
});
