import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toogleCart: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toogleCart } = cartSlice.actions;
export default cartSlice.reducer;
