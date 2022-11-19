//Components
import Main from "../components/Checkout/Checkout";
import NotAuthenticated from "../components/SmallerComponents/NotAuthenticated/NotAuthenticated";
import { useSelector } from "react-redux";

function Checkout() {
  const { status } = useSelector((state) => state.auth);

  if (status === "not-authenticated") return <NotAuthenticated />;

  return <Main />;
}

export default Checkout;
