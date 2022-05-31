import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const hamburgerMenuSlice = createSlice({
  name: "hamburgerMenu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.value = true;
    },
    closeMenu: (state) => {
      state.value = false;
    },
    toogleMenu: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openMenu, closeMenu, toogleMenu } = hamburgerMenuSlice.actions;

export default hamburgerMenuSlice.reducer;
