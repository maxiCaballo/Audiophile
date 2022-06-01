import { defaultStyle } from "../SmallerComponents/Cart-Hamburguer-CheckOut-ContainerStyle/Style";
import { useState } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { removeAllProducts } from "../../Redux/cartSlice";
//Styles
import styled from "styled-components";
import { QuantityContainerStyles } from "../SmallerComponents/InputNumberOfProductsStyles/Quantity";

function Cart() {
  const [quantity, setQuantity] = useState(0);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Container visible={cart.open}>
      <div className="container">
        <div>
          <div>
            <span>CART ({totalProducts(cart.products)})</span>{" "}
            <span onClick={() => dispatch(removeAllProducts())}>
              Remove all
            </span>
          </div>
          {cart.products.length > 0 &&
            cart.products.map((product) => (
              <Items>
                <img
                  src={require(`../../assets/cart/image-${product.slug}.jpg`)}
                  alt={product.name}
                  height={70}
                  width={70}
                />
                <div>
                  <span>{product.name}</span>
                  <span>$ {product.unitPrice}</span>
                </div>
                <Quantity className="centered">
                  <button onClick={() => setQuantity(quantity - 1)}>-</button>
                  <input type="number" value={quantity} readOnly />
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </Quantity>
              </Items>
            ))}
          <TotalPrice>
            <span>total</span>
            <span>$ {totalPrice(cart.products)}</span>
          </TotalPrice>
          <div>
            <BtnCheckout>Chekout</BtnCheckout>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;

const Container = styled(defaultStyle)`
  & > div {
    display: flex;
    justify-content: flex-end;
    padding-top: 32px;
    //CART
    & > div {
      width: 450px;
      background-color: var(--white);
      border-radius: var(--cardBorderRadius);
      padding: 31px;
      display: flex;
      flex-direction: column;
      gap: 32px;
      //Cart(2) and Remove all
      & > :nth-child(1) {
        display: flex;
        justify-content: space-between;
        //Cart(2)
        & > :nth-child(1) {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 1.3px;
          text-transform: uppercase;
        }
        //Remove all
        & > :nth-child(2) {
          font-size: 1.5rem;
          cursor: pointer;
          font-weight: 500;
          opacity: 50%;
          position: relative;
          &::before {
            content: "";
            height: 1px;
            bottom: 8px;
            left: 0;
            right: 0;
            background-color: var(--black);
            opacity: 50%;
            position: absolute;
          }
          &:hover {
            color: var(--color1);
            opacity: 100%;
            &::before {
              background: var(--color1);
            }
          }
        }
      }
    }
  }
`;
const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  //Total
  & > :nth-child(1) {
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 50%;
  }
  & > :nth-child(2) {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: 700;
    font-size: 1.5rem;
    //Price
    & > :nth-child(2) {
      opacity: 50%;
    }
  }
`;
const Quantity = styled(QuantityContainerStyles)`
  height: 32px;
`;
const BtnCheckout = styled.button`
  width: 100%;
  height: 48px;
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 1px;
  transition: 0.5s;
  font-weight: 400;
  background-color: var(--color1);
  border: none;
  color: var(--white);
  opacity: 100% !important;
  &:hover {
    background-color: var(--color2);
    color: var(--white);
  }
`;
function totalProducts(products) {
  return products.reduce((acc, { quantity }) => (acc += quantity), 0);
}

function totalPrice(products) {
  return products
    .reduce((acc, { totalPrice }) => (acc += totalPrice), 0)
    .toFixed(2);
}
