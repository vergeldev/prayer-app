import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import prayerReducer from "../features/prayers/prayerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    prayer: prayerReducer,
  },
});
