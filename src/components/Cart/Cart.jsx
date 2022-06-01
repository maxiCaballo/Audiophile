import { defaultStyle } from "../SmallerComponents/Cart-Hamburguer-CheckOut-ContainerStyle/Style";
import LinkButton from "../SmallerComponents/LinkButton/LinkButton";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { removeAllProducts } from "../../Redux/cartSlice";
//Styles
import styled from "styled-components";

function Cart() {
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
          <div>Items</div>
          <div>
            <span>total</span>
            <span>$ {totalPrice(cart.products)}</span>
          </div>
          <div>
            <LinkButton type={1} content="checkout" reference="/" />
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
      //Total and Price
      & > :nth-child(3) {
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
      }
    }
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
