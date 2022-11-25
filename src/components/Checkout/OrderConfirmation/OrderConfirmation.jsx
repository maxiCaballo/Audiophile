import styled from "styled-components";
import { useState } from "react";
//Components
import { SummaryButton } from "../../SmallerComponents/Styles/Button";
import { defaultStyle } from "../../SmallerComponents/Cart-Hamburguer-CheckOut-ContainerStyle/Style";
import ProductDetail from "./ProductDetail";
//Icon
import iconConfirmation from "../../../assets/checkout/icon-order-confirmation.svg";
//Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function OrderConfirmation({
  setShowOrderConfirmation,
  showOrderConfirmation,
  grandTotal,
}) {
  const [viewMoreButton, setViewMoreButton] = useState(true);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  window.scrollTo(0, 0);

  return (
    <OrderConfirmationStyles
      visible={showOrderConfirmation}
      onClick={() => setShowOrderConfirmation(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <div>
          <img src={iconConfirmation} alt="confirmation" />
        </div>
        <h5>
          <span>Thank you</span> <span>for your order.</span>
        </h5>
        <p>You will receive an email confirmation shortly</p>
        <div>
          <ProductDetailContainer>
            {cart.products.length > 0 && cart.products.length > 1 ? (
              viewMoreButton ? (
                <ProductDetail product={cart.products[0]} />
              ) : (
                cart.products.map((product) => (
                  <ProductDetail product={product} key={product.id} />
                ))
              )
            ) : (
              <ProductDetail product={cart.products[0]} />
            )}
            {cart.products.length > 1 && (
              <ButtonViewMore>
                <button onClick={() => setViewMoreButton(!viewMoreButton)}>
                  {viewMoreButton
                    ? `And ${cart.products.length - 1} more item(s)`
                    : "View less"}
                </button>
              </ButtonViewMore>
            )}
          </ProductDetailContainer>
          <GrandTotal>
            <span>Grand total</span>
            <span>$ {grandTotal}</span>
          </GrandTotal>
        </div>
        <SummaryButton
          onClick={() => {
            setShowOrderConfirmation(false);
            navigate("/purchases");
          }}
        >
          My purchases
        </SummaryButton>
      </div>
    </OrderConfirmationStyles>
  );
}
export default OrderConfirmation;

//Styles
const OrderConfirmationStyles = styled(defaultStyle)`
  padding: 224px 24px;

  & h5 {
    display: flex;
    flex-direction: column;
  }
  & > div:nth-child(1) {
    border-radius: var(--cardBorderRadius);
    padding: 32px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 23px;
    & > :nth-child(1) {
      display: flex;
      align-items: flex-start;
    }
    & > :nth-child(2) {
      text-align: start;
      text-transform: uppercase;
      color: var(--black);
    }
    & > :nth-child(3) {
      text-align: start;
      opacity: 50%;
    }
    & > div:nth-child(4) {
      display: flex;
      flex-direction: column;
    }
    @media only screen and (min-width: 551px) {
      & > div:nth-child(4) {
        flex-direction: row;
      }
    }
  }
`;
const ProductDetailContainer = styled.div`
  background-color: var(--color4);
  border-radius: var(--cardBorderRadius) var(--cardBorderRadius) 0 0;
  padding: 12px 24px 24px;

  @media only screen and (min-width: 551px) {
    width: 60%;
    border-radius: var(--cardBorderRadius) 0 0 var(--cardBorderRadius);
  }
`;
const ButtonViewMore = styled.div`
  //Button
  border: none !important;
  padding-top: 12px !important;
  display: grid !important;
  place-items: center !important;
  & button {
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--black);
    opacity: 50%;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const GrandTotal = styled.div`
  background-color: var(--black);
  padding: 15px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 0 0 var(--cardBorderRadius) var(--cardBorderRadius);
  & > span:nth-child(1) {
    color: var(--white);
    opacity: 50%;
    font-size: 1.5rem;
  }
  & > span:nth-child(2) {
    color: var(--white);
    font-weight: 700;
    font-size: 1.6rem;
  }

  @media only screen and (min-width: 551px) {
    width: 40%;
    border-radius: 0 var(--cardBorderRadius) var(--cardBorderRadius) 0;
    justify-content: flex-end;
  }
`;
