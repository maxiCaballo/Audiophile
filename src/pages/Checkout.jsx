//Components
import Main from "../components/Checkout/Checkout";
import NotAuthenticated from "../components/SmallerComponents/NotAuthenticated/NotAuthenticated";
import { useSelector } from "react-redux";

function Checkout() {
  const { status } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.cart);

  if (status === "not-authenticated")
    return (
      <NotAuthenticated
        messageError={"You must be registered to buy"}
        redirectionPath={"/login"}
        redirectionButtonMessage={"GO TO LOGIN"}
      />
    );
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
