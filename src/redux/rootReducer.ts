import { baseApi } from "./api/baseApi";
import authReducer from "./features/auth/authSlice";

export const reducer = {

  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
