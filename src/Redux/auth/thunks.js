import { checkingCredentials, logout, login } from "./authSlice";
import {
  signInWithGoogle,
  registerUserWithEmailPassword,
  loginWithEmailPassword,
  logoutFirebase,
} from "../../firebase/providers";

export const checkingAuthentication = (email, pass) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const response = await signInWithGoogle();

    if (!response.ok) return dispatch(logout(response.errorMessage));

    dispatch(login(response));
  };
};

export const startCreatingUserWithEmailPassword = ({
  name,
  email,
  password,
}) => {
  return async (dispatch) => {
    // console.log(name, email, password);
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage, displayName } =
      await registerUserWithEmailPassword({
        displayName: name,
        email,
        password,
      });

    if (!ok) return dispatch(logout({ errorMessage }));

    const toastifyMessage = `Welcome ${displayName}`;
    dispatch(login({ email, uid, displayName, photoURL, toastifyMessage }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, displayName, errorMessage } =
      await loginWithEmailPassword({ email, password });

    if (!ok) return dispatch(logout({ errorMessage }));

    const toastifyMessage = `Welcome ${displayName}`;
    dispatch(login({ uid, email, photoURL, displayName, toastifyMessage }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
