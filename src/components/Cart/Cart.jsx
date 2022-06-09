//Components
import Quantity from "../SmallerComponents/Quantity/Quantity";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { removeAllProducts, toogleCart } from "../../Redux/cartSlice";
//Styles
import styled from "styled-components";
import { defaultStyle } from "../SmallerComponents/Cart-Hamburguer-CheckOut-ContainerStyle/Style";
import { DefaultLink } from "../SmallerComponents/Styles/Link";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Container
      visible={cart.open}
      onClick={() => {
        dispatch(toogleCart());
      }}
    >
      <div className="container">
        <div onClick={(e) => e.stopPropagation()}>
          <div>
            <span>CART ({totalProducts(cart.products)})</span>{" "}
            <span onClick={() => dispatch(removeAllProducts())}>
              Remove all
            </span>
          </div>
          {cart.products.length > 0 &&
            cart.products.map((product) => (
              <Product key={product.id}>
                <img
                  src={require(`../../assets/cart/image-${product.slug}.jpg`)}
                  alt={product.shortName}
                  height={70}
                  width={70}
                />
                <div>
                  <span>{product.shortName}</span>
                  <span>$ {product.unitPrice}</span>
                </div>
                <Quantity productId={product.id} />
              </Product>
            ))}
          <TotalPrice>
            <span>total</span>
            <span>$ {totalPrice(cart.products)}</span>
          </TotalPrice>
          <Checkout onClick={() => dispatch(toogleCart())} to="/checkout">
            Chekout
          </Checkout>
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

export const Product = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  & img {
    border-radius: var(--cardBorderRadius);
  }
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
const Checkout = styled(DefaultLink)`
  width: 100%;
`;
export function totalProducts(products) {
  return products.reduce((acc, { quantity }) => (acc += quantity), 0);
}
export function totalPrice(products) {
  const totalPrice = Number(
    products.reduce((acc, { totalPrice }) => (acc += totalPrice), 0).toFixed(2)
  );
  return totalPrice;
}
