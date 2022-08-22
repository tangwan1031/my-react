import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import auth from "./modules/auth";
const store = configureStore({
  reducer: {
    auth,
  },
});
export type Tdispatch = typeof store.dispatch;
export default store;
export const useAppDispatch = () => useDispatch<Tdispatch>();
