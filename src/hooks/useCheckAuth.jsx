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

      dispatch(login({ email, uid, displayName, photoURL }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return status;
}

export { useCheckAuth };
