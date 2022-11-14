import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const { email, uid, displayName, photoURL } = result.user;

    return {
      ok: true,
      email,
      uid,
      displayName,
      photoURL,
    };
  } catch (error) {
    console.log(error);
    // const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      //  errorCode,
      errorMessage,
    };
  }
};
