import { collection, doc, setDoc } from "firebase/firestore";
import { firebaseDataBase } from "./config";

//PURCHASES
export const startRegisterPurchase = async (purchase) => {
  try {
    const purchaseRef = doc(collection(firebaseDataBase, `purchases`));
    await setDoc(purchaseRef, {
      ...purchase,
    });
  } catch (error) {
    console.log(error);
  }
};
