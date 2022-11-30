//Components
import Main from "../components/Checkout/Checkout";
import NotAuthenticated from "../components/SmallerComponents/AccesDenied/AccesDenied";
import { useSelector } from "react-redux";

function Checkout() {
  const { status } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.cart);

  if (status === "authenticated" && products.length === 0) {
    return (
      <NotAuthenticated
        messageError={"you must have products in your cart to purchase"}
        redirectionPath={"/"}
        redirectionButtonMessage={"GO TO HOME"}
      />
    );
  }

  return <Main />;
}

export default Checkout;
