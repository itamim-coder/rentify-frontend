import { persistReducer } from "redux-persist";
import { baseApi } from "./api/baseApi";
import authReducer from "./features/auth/authSlice";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const reducer = {
  auth: persistedAuthReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
