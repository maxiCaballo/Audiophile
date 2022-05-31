import { configureStore } from "@reduxjs/toolkit";
import hamburgerMenuReducer from "./hamburguerMenuSlice";

export const store = configureStore({
  reducer: {
    hamburgerMenu: hamburgerMenuReducer,
  },
});
