//Components
import { QuantityContainerStyles as Quantity } from "../Styles/Quantity";
//
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../../../Redux/cartSlice";
//Styles
import styled from "styled-components";
import { Button as BtnAddToCart } from "../Styles/Button";

function AddToCart({ item }) {
  const [quantity, setQuantity] = useState(0);
  const { id, name, slug, price } = item;
  const dispatch = useDispatch();

  return (
    <Container>
      <span>$ {price}</span>
      <div>
        <Quantity>
          <button onClick={() => setQuantity(quantity - 1)}>-</button>
          <input type="number" value={quantity} readOnly />
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </Quantity>
        <BtnAddToCart
          onClick={() => {
            dispatch(
              addProducts({
                id,
                name,
                slug,
                quantity,
                unitPrice: price,
                totalPrice: 0,
              })
            );
            setQuantity(0);
          }}
        >
          add to cart
        </BtnAddToCart>
      </div>
    </Container>
  );
}

export default AddToCart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 47px;
  //Price
  & > span {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1.29px;
  }
  //Container button and add to cart
  & > div {
    display: flex;
    gap: 16px;
    //Container button and input
    & > div {
      background-color: var(--color4);
      padding: 15px 16px;
      height: 48px;
      & > button {
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--black);
        opacity: 50%;
        background-color: var(--color4);
        border: none;
        transition: 0.3s;
        &:nth-child(1) {
          margin-right: 20px;
        }
        &:nth-child(3) {
          margin-left: 20px;
        }
        &:hover {
          color: var(--color1);
        }
      }
      & > input[type="number"] {
        border: none;
        outline: none;
        background-color: var(--color4);
        font-size: 1.3rem;
        font-weight: 700;
        width: 16px;
        -webkit-appearance: none;
        overflow: hidden;
        text-align: center;
        color: #000;
      }
      //Delete dfault-arrow from input
      & input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    }
  }
`;
