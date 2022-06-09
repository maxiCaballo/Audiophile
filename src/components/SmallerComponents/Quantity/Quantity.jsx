//Redux
import { addQuantity, removeQuantity } from "../../../Redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
//Styles
import { QuantityContainerStyles } from "../Styles/Quantity";
import styled from "styled-components";

function Quantity({ productId }) {
  const cartProducts = useSelector((state) => state.cart.products);
  const product = cartProducts.find((item) => item.id === productId);
  const dispatch = useDispatch();

  return (
    <Container className="centered">
      <button onClick={() => dispatch(removeQuantity({ ...product }))}>
        -
      </button>
      <input type="number" value={product.quantity} readOnly />
      <button onClick={() => dispatch(addQuantity({ ...product }))}>+</button>
    </Container>
  );
}

export default Quantity;

const Container = styled(QuantityContainerStyles)`
  height: 32px;
`;
