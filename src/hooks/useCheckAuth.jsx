import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { firebaseAuth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { logout, login } from "../Redux/auth/authSlice";

function useCheckAuth() {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;

      const toastifyMessage = `Welcome ${displayName}`;
      dispatch(login({ email, uid, displayName, photoURL, toastifyMessage }));
    });
  }, []);

  return status;
}

export { useCheckAuth };
