import { checkingCredentials, logout, login } from "./authSlice";
import { signInWithGoogle } from "../../firebase/providers";

export const checkingAuthentication = (email, pass) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};
