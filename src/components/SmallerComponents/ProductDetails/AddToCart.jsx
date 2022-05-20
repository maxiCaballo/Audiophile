import { useState } from "react";
//Component
import LinkButton from "../LinkButton/LinkButton";
//Styles
import styled from "styled-components";

function AddToCart({ price }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <Container>
      <span>$ {price}</span>
      <div>
        <div>
          <button onClick={() => setQuantity(quantity - 1)}>-</button>
          <input type="number" value={quantity} min={0} readOnly />
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <LinkButton type={1} content="add to cart" reference="/" />
      </div>
    </Container>
  );
}

export default AddToCart;

const Container = styled.div`
  border: 1px solid black;
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
      & input[type="number"] {
        border: none;
        outline: none;
        background-color: var(--color4);
        text-align: center;
        font-size: 1.3rem;
        font-weight: 700;
        width: 16px;
      }
    }
  }
`;
