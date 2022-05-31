import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const hamburgerMenuSlice = createSlice({
  name: "hamburgerMenu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.open = true;
    },
    closeMenu: (state) => {
      state.open = false;
    },
    toogleMenu: (state) => {
      state.open = !state.open;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openMenu, closeMenu, toogleMenu } = hamburgerMenuSlice.actions;

export default hamburgerMenuSlice.reducer;
