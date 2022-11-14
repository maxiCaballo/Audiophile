//Redux
import {
  addOne,
  substractOne,
  removeOneProduct,
} from "../../../Redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
//Styles
import { QuantityContainerStyles } from "../Styles/Quantity";
import styled from "styled-components";

function Quantity({ productId }) {
  const cartProducts = useSelector((state) => state.cart.products);
  const product = cartProducts.find((item) => item.id === productId);
  const { quantity } = product;
  const dispatch = useDispatch();
  function handleRemove() {
    dispatch(removeOneProduct({ productId, quantity }));
  }

  return (
    <Container className="centered">
      <button
        onClick={() => {
          dispatch(substractOne({ ...product }));
          handleRemove();
        }}
      >
        -
      </button>
      <input type="number" value={product.quantity} readOnly />
      <button onClick={() => dispatch(addOne({ ...product }))}>+</button>
    </Container>
  );
}

export default Quantity;

const Container = styled(QuantityContainerStyles)`
  height: 32px;
  @media only screen and (max-width: 390px) {
    padding: 8px;
    width: 80px;
  }
`;
