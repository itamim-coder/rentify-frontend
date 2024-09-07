import { baseApi } from "@/redux/api/baseApi";

const USER_URL = "/user";
export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: `${USER_URL}`,
        method: "GET",
      }),

      providesTags: ["User"],
    }),

    // setDropOffTime: build.mutation({
    //   query: (data) => ({
    //     url: `${CAR_URL}/return`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Bookings", "Car"],
    // }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
