import { configureStore } from "@reduxjs/toolkit";
import hamburgerMenuReducer from "./hamburgerMenuSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    hamburgerMenu: hamburgerMenuReducer,
    cart: cartReducer,
  },
});
