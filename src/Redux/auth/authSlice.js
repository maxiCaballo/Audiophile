import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not-authenticated", // "not-authenticated", "checking", "authenticated"
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
  toastifyMessage: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, uid, displayName, photoURL, toastifyMessage } =
        action.payload;
      console.log(toastifyMessage);
      state.status = "authenticated";
      state.uid = uid;
      state.email = email;
      state.displayName = displayName;
      state.photoURL = photoURL;
      state.errorMessage = null;
      state.toastifyMessage = toastifyMessage;
    },
    logout: (state, action) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.toastifyMessage = null;
      state.errorMessage = action.payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
    removeToastifyMessage: (state) => {
      console.log("entré aca");
      state.toastifyMessage = null;
    },
  },
});

export const { login, logout, checkingCredentials, removeToastifyMessage } =
  userSlice.actions;
export default userSlice.reducer;
