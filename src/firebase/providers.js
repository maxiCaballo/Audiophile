import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(firebaseAuth, googleProvider);
    const { email, uid, displayName, photoURL } = response.user;

    return {
      ok: true,
      email,
      uid,
      displayName,
      photoURL,
    };
  } catch (error) {
    console.log(error);

    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  displayName,
  email,
  password,
}) => {
  try {
    const response = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const { uid, photoURL } = response.user;
    //Actualizar el displayName en fireBase, si se crea el usuario de forma exitosa la funcion
    //createUserWithEmailAndPassword loguea al usuario de froma automatica
    await updateProfile(firebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.log(error);
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const { uid, photoURL, displayName } = response.user;
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
  //
};

export const logoutFirebase = async () => {
  try {
    return await firebaseAuth.signOut();
  } catch (error) {
    const errorMessage = error.message;
    return {
      errorMessage,
    };
  }
};
